'use client';

import { useState, useRef, useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';
import { Send, Sparkles, Bot, User } from 'lucide-react';

const quickActions = [
  '我最近三角形全等判定总是错，能帮我练习吗？',
  '受力分析学不好，怎么办？',
  '最近学习压力好大，有点焦虑...',
  '考试没考好，心情很低落',
];

const aiResponses: Record<string, string> = {
  '分析张明轩的薄弱知识点': '根据最新学情诊断结果,张明轩同学在以下知识点存在薄弱:\n\n1. **三角形全等判定** (掌握度 45%)\n   - 主要问题:混淆SAS和SSA判定条件\n   - 建议:专项练习20道全等判定题\n\n2. **相似三角形** (掌握度 48%)\n   - 主要问题:比例关系计算错误\n   - 建议:复习相似性质,强化练习\n\n预计通过2周针对性训练,可提升至65-70%。',
  '生成本周学习计划': '已根据诊断结果生成本周学习计划:\n\n**周一-周二**:三角形全等判定专项(90分钟)\n**周三**:相似三角形性质预习(35分钟)\n**周四**:英语Unit5词汇(30分钟)\n**周五**:勾股定理应用题(50分钟)\n**周末**:错题回顾+综合练习(80分钟)\n\n总学习时长:约5.5小时,重点突破几何薄弱环节。',
  '为什么孩子物理成绩下滑？': '分析张明轩物理成绩下滑原因:\n\n1. **受力分析基础不牢** (近2次练习正确率仅58%)\n2. **实验题失分严重** (实验题平均得分率45%)\n3. **学习时长减少** (本周物理学习仅2.5h,较上周减少1h)\n\n建议:\n- 安排受力分析专题复习\n- 观看物理实验视频加深理解\n- 增加每周物理学习时长至3.5h',
  '如何提升学习专注度？': '根据学习数据分析,提升专注度的建议:\n\n1. **番茄工作法**:每次学习25分钟,休息5分钟\n2. **环境优化**:关闭手机通知,保持桌面整洁\n3. **任务拆分**:将大任务拆分为25-30分钟可完成的小任务\n4. **激励机制**:完成每日目标后给予适当奖励\n\n当前专注度评分82分,属于良好水平,通过上述方法可提升至85-90分。',
};

export default function ChatPage() {
  const { chatMessages, addChatMessage } = useAppContext();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mode, setMode] = useState<'tutor' | 'emotional'>('tutor');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleSend = async (message?: string) => {
    const text = message || input;
    if (!text.trim()) return;
  
    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: text,
      timestamp: new Date().toISOString(),
    };
  
    addChatMessage(userMessage);
    setInput('');
    setIsTyping(true);
  
    try {
      // 调用AI助手API
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          mode: mode,
          weakPoints: ['三角形全等判定', '受力分析'],
          errorHistory: [
            { subject: '数学', topic: '三角形全等', errorCount: 8 },
            { subject: '物理', topic: '受力分析', errorCount: 6 },
          ],
        }),
      });
  
      const data = await response.json();
      const aiContent = data.response || '抱歉,我暂时无法回答这个问题。';
  
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: aiContent,
        timestamp: new Date().toISOString(),
      };
  
      addChatMessage(aiMessage);
    } catch (error) {
      console.error('AI 调用失败:', error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: '❌ AI 服务暂时不可用,请稍后重试。',
        timestamp: new Date().toISOString(),
      };
      addChatMessage(errorMessage);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-8rem)]">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Sparkles className="h-8 w-8 text-primary-600" />
          AI 督学助手
        </h1>
        <p className="text-slate-600">基于学生学情数据,提供个性化分析和建议</p>
      </div>

      {/* 模式切换 */}
      <div className="mb-6 flex gap-3">
        <button
          onClick={() => setMode('tutor')}
          className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
            mode === 'tutor'
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
              : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-300'
          }`}
        >
          📚 学习辅导模式
        </button>
        <button
          onClick={() => setMode('emotional')}
          className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
            mode === 'emotional'
              ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
              : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-pink-300'
          }`}
        >
          💝 情感陪伴模式
        </button>
      </div>

      {/* 模式说明 */}
      <div className={`mb-4 p-4 rounded-lg text-sm ${
        mode === 'tutor'
          ? 'bg-blue-50 border border-blue-200 text-blue-800'
          : 'bg-pink-50 border border-pink-200 text-pink-800'
      }`}>
        {mode === 'tutor'
          ? '🎯 学习辅导模式：根据你的薄弱知识点，针对性出题和讲解'
          : '💝 情感陪伴模式：倾听你的烦恼，给你温暖和鼓励'}
      </div>

      {/* Quick Actions */}
      {chatMessages.length === 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">快捷提问</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleSend(action)}
                className="p-4 bg-white border border-slate-200 rounded-lg text-left hover:border-primary-300 hover:shadow-md transition-all text-sm text-slate-700"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex-1 overflow-y-auto mb-4 p-4" style={{ maxHeight: 'calc(100vh - 28rem)' }}>
        {chatMessages.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <Bot className="h-16 w-16 mx-auto mb-4 text-slate-400" />
            <p className="text-lg">你好!我是AI督学助手</p>
            <p className="text-sm mt-2">请描述您的问题,或选择上方的快捷提问</p>
          </div>
        ) : (
          <div className="space-y-4">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' ? 'bg-primary-600' : 'bg-cyan-600'
                }`}>
                  {msg.role === 'user' ? (
                    <User className="h-5 w-5 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
                <div className={`max-w-[80%] p-4 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-900'
                }`}>
                  <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-cyan-600 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-slate-100 p-4 rounded-lg">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="输入您的问题..."
          className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          disabled={isTyping}
        />
        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || isTyping}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Send className="h-5 w-5" />
          发送
        </button>
      </div>
    </div>
  );
}
