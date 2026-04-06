'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Sparkles, Star, Heart } from 'lucide-react';

interface Pet3DProps {
  petType?: 'cat' | 'dog';
  petName?: string;
  onChat?: () => void;
}

export default function Pet3DShowcase({ petType = 'cat', petName = '小知', onChat }: Pet3DProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<'happy' | 'excited' | 'love' | 'thinking'>('happy');
  const [speechBubble, setSpeechBubble] = useState('');
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

  const emotions = {
    cat: {
      happy: '😺',
      excited: '🙀',
      love: '😻',
      thinking: '🐱',
    },
    dog: {
      happy: '🐶',
      excited: '🐕',
      love: '🥰',
      thinking: '🐾',
    }
  };

  const greetings = [
    `你好！我是${petName}，你的学习伙伴！`,
    '今天也要好好学习哦！',
    '一起学习，一起成长！',
    '有什么想和我聊的吗？',
  ];

  useEffect(() => {
    // 自动显示欢迎语
    const timer = setTimeout(() => {
      setSpeechBubble(greetings[Math.floor(Math.random() * greetings.length)]);
      setShowSpeechBubble(true);
      setCurrentEmotion('happy');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePetClick = () => {
    setIsAnimating(true);
    setCurrentEmotion('excited');
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setSpeechBubble(randomGreeting);
    setShowSpeechBubble(true);

    setTimeout(() => {
      setIsAnimating(false);
      setCurrentEmotion('happy');
    }, 2000);

    setTimeout(() => {
      setShowSpeechBubble(false);
    }, 4000);
  };

  const handleChatClick = () => {
    setCurrentEmotion('love');
    setSpeechBubble('点击开始和我聊天吧！💕');
    setShowSpeechBubble(true);
    
    if (onChat) {
      setTimeout(() => onChat(), 500);
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
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white px-6 py-3 rounded-2xl shadow-lg border-2 border-purple-200 max-w-xs">
            <p className="text-slate-900 font-semibold text-center">{speechBubble}</p>
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        
        {/* 宠物容器 */}
        <div className="relative w-80 h-80 mx-auto">
          {/* 背景圆环 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded-full"></div>
          
          {/* 宠物主体 - 3D效果 */}
          <div className={`absolute inset-4 bg-gradient-to-br from-white to-slate-50 rounded-full shadow-2xl flex items-center justify-center ${
            isAnimating ? 'animate-bounce' : ''
          }`}>
            <div className="text-9xl filter drop-shadow-lg transform hover:scale-110 transition-transform">
              {emotions[petType][currentEmotion]}
            </div>
          </div>

          {/* 浮动装饰 */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              {petName}
            </div>
          </div>
        </div>

        {/* 互动提示 */}
        <div className="text-center mt-6">
          <p className="text-slate-600 text-sm mb-3">点击宠物互动</p>
          <button
            onClick={handleChatClick}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            直接对话
          </button>
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
      `}</style>
    </div>
  );
}
