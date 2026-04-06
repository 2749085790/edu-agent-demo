'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { MessageCircle, Mic, MicOff, Volume2, Sparkles, Star, Heart } from 'lucide-react';

interface Pet3DInteractiveProps {
  petType?: 'cat' | 'dog';
  petName?: string;
  onChat?: () => void;
}

export default function Pet3DInteractive({ petType = 'cat', petName = '小知', onChat }: Pet3DInteractiveProps) {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<'happy' | 'excited' | 'love' | 'thinking' | 'listening'>('happy');
  const [speechBubble, setSpeechBubble] = useState('');
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  const emotions = {
    cat: {
      happy: '😺',
      excited: '🙀',
      love: '😻',
      thinking: '🐱',
      listening: '👂',
    },
    dog: {
      happy: '🐶',
      excited: '🐕',
      love: '🥰',
      thinking: '🐾',
      listening: '👂',
    }
  };

  const greetings = [
    `你好！我是${petName}，你的学习伙伴！`,
    '今天也要好好学习哦！',
    '一起学习，一起成长！',
    '有什么想和我聊的吗？',
  ];

  const petResponses = [
    '太棒了！继续加油！💪',
    '我相信你可以的！🌟',
    '学习是一件快乐的事情！😊',
    '有什么困难可以告诉我哦！💕',
  ];

  useEffect(() => {
    // 自动显示欢迎语
    const timer = setTimeout(() => {
      speak(greetings[Math.floor(Math.random() * greetings.length)]);
    }, 1000);

    // 初始化语音识别
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'zh-CN';
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setUserMessage(transcript);
        handleUserMessage(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        setCurrentEmotion('happy');
      };
    }

    synthRef.current = window.speechSynthesis;

    return () => {
      clearTimeout(timer);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const speak = (text: string) => {
    if (!synthRef.current) return;

    // 停止之前的语音
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 1.0;
    utterance.pitch = petType === 'cat' ? 1.2 : 1.0; // 小猫声音更高
    
    utterance.onstart = () => {
      setIsSpeaking(true);
      setCurrentEmotion('excited');
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentEmotion('happy');
    };

    synthRef.current.speak(utterance);
    setSpeechBubble(text);
    setShowSpeechBubble(true);

    setTimeout(() => {
      setShowSpeechBubble(false);
    }, 4000);
  };

  const handleUserMessage = (message: string) => {
    // 模拟AI回复
    setTimeout(() => {
      const response = petResponses[Math.floor(Math.random() * petResponses.length)];
      speak(response);
    }, 500);
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      alert('您的浏览器不支持语音识别功能');
      return;
    }

    setIsListening(true);
    setCurrentEmotion('listening');
    setSpeechBubble('我在听，请说话...');
    setShowSpeechBubble(true);
    
    try {
      recognitionRef.current.start();
    } catch (error) {
      console.error('语音识别启动失败:', error);
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
    setCurrentEmotion('happy');
  };

  const handlePetClick = () => {
    setIsAnimating(true);
    setCurrentEmotion('excited');
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    speak(randomGreeting);

    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  const handleChatClick = () => {
    if (onChat) {
      onChat();
    } else {
      router.push('/pet-chat');
    }
  };

  return (
    <div className="relative">
      {/* 装饰星星 */}
      <div className="absolute -top-4 -left-4 animate-bounce">
        <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
      </div>
      <div className="absolute -top-2 -right-6 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <Sparkles className="h-6 w-6 text-purple-400" />
      </div>
      <div className="absolute bottom-10 -left-8 animate-bounce" style={{ animationDelay: '1s' }}>
        <Heart className="h-6 w-6 text-pink-400 fill-pink-400" />
      </div>

      {/* 对话气泡 */}
      {showSpeechBubble && (
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white px-6 py-3 rounded-2xl shadow-lg border-2 border-purple-200 max-w-xs">
            <p className="text-slate-900 font-semibold text-center">{speechBubble}</p>
            {userMessage && (
              <p className="text-xs text-slate-500 mt-1 text-center">你说：{userMessage}</p>
            )}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-purple-200 transform rotate-45"></div>
            </div>
          </div>
        </div>
      )}

      {/* 3D 宠物展示区域 */}
      <div
        onClick={handlePetClick}
        className={`relative cursor-pointer transition-all duration-300 ${
          isAnimating ? 'scale-110' : 'scale-100'
        }`}
      >
        {/* 光晕效果 */}
        <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse ${
          isListening 
            ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400' 
            : 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400'
        }`}></div>
        
        {/* 宠物容器 - 3D变换 */}
        <div className="relative w-80 h-80 mx-auto perspective-1000">
          {/* 背景圆环 - 3D旋转 */}
          <div className="absolute inset-0 animate-spin-slow" style={{ transformStyle: 'preserve-3d' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded-full opacity-50"></div>
          </div>
          
          {/* 宠物主体 - 3D球体效果 */}
          <div 
            className={`absolute inset-4 bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-full shadow-2xl flex items-center justify-center ${
              isAnimating ? 'animate-bounce' : ''
            }`}
            style={{
              transform: isSpeaking ? 'rotateY(10deg) rotateX(-5deg)' : 'rotateY(0deg)',
              transition: 'transform 0.3s ease',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 -10px 20px rgba(0,0,0,0.1)',
            }}
          >
            {/* 3D光影效果 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent"></div>
            <div className="text-9xl filter drop-shadow-2xl transform hover:scale-110 transition-transform relative z-10">
              {emotions[petType][currentEmotion]}
            </div>
          </div>

          {/* 语音波纹动画 */}
          {isListening && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full rounded-full border-4 border-blue-400 animate-ping"></div>
              <div className="absolute w-3/4 h-3/4 rounded-full border-4 border-cyan-400 animate-ping" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute w-1/2 h-1/2 rounded-full border-4 border-green-400 animate-ping" style={{ animationDelay: '0.6s' }}></div>
            </div>
          )}

          {/* 浮动装饰 */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className={`px-4 py-1 rounded-full text-sm font-bold shadow-lg ${
              isListening 
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600'
            } text-white`}>
              {isListening ? '️ 聆听中...' : petName}
            </div>
          </div>
        </div>

        {/* 互动按钮组 */}
        <div className="text-center mt-6 space-y-3">
          {/* 语音通话按钮 */}
          <div className="flex justify-center gap-3">
            <button
              onClick={startListening}
              disabled={isListening}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg transform hover:scale-105 ${
                isListening
                  ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
              }`}
            >
              {isListening ? (
                <>
                  <MicOff className="h-5 w-5" />
                  停止录音
                </>
              ) : (
                <>
                  <Mic className="h-5 w-5" />
                  语音通话
                </>
              )}
            </button>

            <button
              onClick={handleChatClick}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              文字对话
            </button>
          </div>

          <p className="text-slate-500 text-xs">
            {isListening ? '请说话，我在听...' : '点击宠物或按钮互动'}
          </p>
        </div>
      </div>

      {/* CSS 动画 */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}
