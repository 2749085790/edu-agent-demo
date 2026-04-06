'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Gift, CheckCircle, Clock, Star } from 'lucide-react';

interface Reward {
  id: string;
  title: string;
  description: string;
  type: 'online' | 'offline';
  rewards: {
    tools?: string[];
    seeds?: string[];
    coins: number;
  };
  completed: boolean;
  progress?: number;
}

const mockRewards: Reward[] = [
  {
    id: 'daily-online',
    title: '每日学习打卡',
    description: '完成今日线上学习任务',
    type: 'online',
    rewards: {
      tools: ['hoe_basic'],
      seeds: ['seed_knowledge', 'seed_math'],
      coins: 10,
    },
    completed: false,
    progress: 60,
  },
  {
    id: 'daily-offline',
    title: '线下自习室打卡',
    description: '到线下AI自习室学习',
    type: 'offline',
    rewards: {
      tools: ['hoe_rare'],
      seeds: ['seed_science'],
      coins: 50,
    },
    completed: false,
    progress: 0,
  },
  {
    id: 'streak-3',
    title: '连续打卡3天',
    description: '连续3天完成学习打卡',
    type: 'online',
    rewards: {
      seeds: ['seed_legendary'],
      coins: 100,
    },
    completed: false,
    progress: 2,
  },
  {
    id: 'streak-7',
    title: '连续打卡7天',
    description: '连续7天完成学习打卡',
    type: 'online',
    rewards: {
      tools: ['hoe_rare'],
      seeds: ['seed_legendary', 'seed_wisdom'],
      coins: 300,
    },
    completed: false,
    progress: 3,
  },
  {
    id: 'first-harvest',
    title: '首次收获',
    description: '收获第一株作物',
    type: 'online',
    rewards: {
      coins: 50,
    },
    completed: true,
  },
];

export default function RewardsPage() {
  const [filter, setFilter] = useState<'all' | 'online' | 'offline'>('all');

  const filteredRewards = filter === 'all' 
    ? mockRewards 
    : mockRewards.filter(r => r.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/pet-manor" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Gift className="h-6 w-6" />
              打卡奖励中心
            </h1>
          </div>
        </div>
      </div>

      {/* 筛选标签 */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              全部
            </button>
            <button
              onClick={() => setFilter('online')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'online'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              📱 线上打卡
            </button>
            <button
              onClick={() => setFilter('offline')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'offline'
                  ? 'bg-green-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              🏢 线下打卡
            </button>
          </div>
        </div>
      </div>

      {/* 奖励列表 */}
      <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {filteredRewards.map((reward) => (
          <div 
            key={reward.id}
            className={`bg-white rounded-xl shadow-lg p-6 ${
              reward.completed ? 'opacity-75' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              {/* 图标 */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${
                reward.completed 
                  ? 'bg-green-100' 
                  : reward.type === 'online'
                  ? 'bg-blue-100'
                  : 'bg-green-100'
              }`}>
                {reward.completed ? '✅' : reward.type === 'online' ? '📱' : '🏢'}
              </div>

              {/* 内容 */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-slate-900">{reward.title}</h3>
                  {reward.completed && (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                </div>
                <p className="text-sm text-slate-600 mb-3">{reward.description}</p>

                {/* 奖励内容 */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {reward.rewards.coins > 0 && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                      💰 {reward.rewards.coins}
                    </span>
                  )}
                  {reward.rewards.tools?.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      🔧 {tool}
                    </span>
                  ))}
                  {reward.rewards.seeds?.map((seed) => (
                    <span key={seed} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      🌱 {seed}
                    </span>
                  ))}
                </div>

                {/* 进度条 */}
                {reward.progress !== undefined && !reward.completed && (
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">进度</span>
                      <span className="font-semibold text-purple-600">{reward.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all"
                        style={{ width: `${reward.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 操作按钮 */}
            {!reward.completed && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                {reward.type === 'online' ? (
                  <Link
                    href="/dashboard"
                    className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all"
                  >
                    前往学习打卡
                  </Link>
                ) : (
                  <Link
                    href="/offline-checkin"
                    className="block w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold text-center hover:from-green-700 hover:to-green-800 transition-all"
                  >
                    前往线下打卡
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 提示卡片 */}
      <div className="max-w-4xl mx-auto px-4 pb-6">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
          <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
            <Star className="h-5 w-5" />
            打卡小贴士
          </h3>
          <ul className="space-y-2 text-sm">
            <li>• 线上打卡：完成学习任务即可获得基础奖励</li>
            <li>• 线下打卡：到AI自习室学习获得稀有奖励</li>
            <li>• 连续打卡：连续天数越多，奖励越丰厚</li>
            <li>• 奖励用途：可在商店购买种子、工具和装饰</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
