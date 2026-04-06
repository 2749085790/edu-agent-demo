'use client';

import { useState, useEffect, useRef } from 'react';
import { getPetByStudentId } from '@/data/pets';
import { getChatsByPetId } from '@/data/pet-chat';
import { PetChat } from '@/types';
import { Send, Cat, Dog, Volume2, VolumeX } from 'lucide-react';
import { speak, stopSpeaking } from '@/utils/speech';

export default function PetChatPage() {
  const studentId = 'S20240001';
  const pet = getPetByStudentId(studentId);
  
  const [messages, setMessages] = useState<PetChat[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pet) {
      const chats = getChatsByPetId(pet.id);
      setMessages(chats);
    }
  }, [pet]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputMessage.trim() || !pet) return;

    const userMessage: PetChat = {
      id: `CHAT${Date.now()}`,
      petId: pet.id,
      studentId,
      message: inputMessage,
      response: '',
      timestamp: new Date().toISOString(),
      category: 'casual',
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // 调用真实API
      const response = await fetch('/api/pet-chat-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: inputMessage,
          petName: pet.petName,
          petType: pet.petType,
        }),
      });

      const data = await response.json();
      const aiResponse = data.response || '喵~ 我没听清楚呢,主人再说一遍好不好?';

      const petMessage: PetChat = {
        id: `CHAT${Date.now() + 1}`,
        petId: pet.id,
        studentId,
        message: '',
        response: aiResponse,
        timestamp: new Date().toISOString(),
        category: 'casual',
      };
      setMessages(prev => [...prev, petMessage]);

      // 如果开启语音,自动播放
      if (voiceEnabled) {
        setIsSpeaking(true);
        await speak(aiResponse, pet.petType === 'cat' ? 'cat' : 'dog');
        setIsSpeaking(false);
      }
    } catch (error) {
      console.error('宠物对话失败:', error);
      const errorMessage: PetChat = {
        id: `CHAT${Date.now() + 1}`,
        petId: pet.id,
        studentId,
        message: '',
        response: '喵~ 我现在有点不舒服,等会儿再聊好不好?',
        timestamp: new Date().toISOString(),
        category: 'casual',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">你还没有宠物哦</h2>
          <p className="text-slate-600">请先选择宠物后再对话</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-3">
            {pet.petType === 'cat' ? (
              <Cat className="h-8 w-8 text-purple-600" />
            ) : (
              <Dog className="h-8 w-8 text-blue-600" />
            )}
            与 {pet.petName} 对话
          </h1>
          <p className="text-slate-600">
            {pet.petType === 'cat' ? '温柔聪明，偶尔傲娇' : '活泼热情，充满活力'}
          </p>
        </div>

        {/* 聊天区域 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* 消息列表 */}
          <div className="h-[600px] overflow-y-auto p-6 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-7xl mb-4">
                  {pet.petType === 'cat' ? '🐱' : '🐶'}
                </div>
                <p className="text-slate-600 text-lg">
                  和 {pet.petName} 打个招呼吧！
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  可以聊聊学习、心情或者任何你想说的
                </p>
              </div>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="space-y-3">
                  {/* 用户消息 */}
                  {msg.message && (
                    <div className="flex justify-end">
                      <div className="max-w-[70%] bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-2xl rounded-br-sm">
                        <p>{msg.message}</p>
                        <p className="text-xs text-green-100 mt-1">
                          {new Date(msg.timestamp).toLocaleTimeString('zh-CN', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 宠物回复 */}
                  {msg.response && (
                    <div className="flex justify-start">
                      <div className="max-w-[70%] bg-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm">
                        <div className="flex items-start gap-2">
                          <div className="text-2xl">
                            {pet.petType === 'cat' ? '🐱' : '🐶'}
                          </div>
                          <div className="flex-1">
                            <p className="text-slate-900">{msg.response}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <p className="text-xs text-slate-500">
                                {new Date(msg.timestamp).toLocaleTimeString('zh-CN', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </p>
                              <button
                                onClick={() => {
                                  if (isSpeaking) {
                                    stopSpeaking();
                                    setIsSpeaking(false);
                                  } else {
                                    setIsSpeaking(true);
                                    speak(msg.response, pet.petType === 'cat' ? 'cat' : 'dog').finally(() => {
                                      setIsSpeaking(false);
                                    });
                                  }
                                }}
                                className={`p-1 rounded-full hover:bg-slate-200 transition-colors ${
                                  isSpeaking ? 'text-green-600' : 'text-slate-400'
                                }`}
                                title="播放语音"
                              >
                                {isSpeaking ? (
                                  <VolumeX className="h-4 w-4" />
                                ) : (
                                  <Volume2 className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}

            {/* 正在输入提示 */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl">
                      {pet.petType === 'cat' ? '🐱' : '🐶'}
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 输入区域 */}
          <div className="border-t-2 border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                className={`p-3 rounded-xl border-2 transition-colors ${
                  voiceEnabled 
                    ? 'border-green-400 bg-green-50 text-green-600' 
                    : 'border-slate-200 bg-slate-50 text-slate-400'
                }`}
                title={voiceEnabled ? '已开启语音' : '已关闭语音'}
              >
                {voiceEnabled ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
              </button>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="和小知聊天..."
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-green-400 focus:outline-none"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!inputMessage.trim() || isTyping}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
                发送
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              {voiceEnabled ? '🔊 语音已开启,回复将自动播放' : '🔇 语音已关闭'} | AI驱动,以宠物身份互动
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
