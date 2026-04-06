'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FlaskConical, CheckCircle2, XCircle, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

export default function ABTestPage() {
  const [selectedTest, setSelectedTest] = useState(0);

  const abTests = [
    {
      id: 'pet-rewards',
      title: '宠物奖励机制对比',
      hypothesis: '增加稀有道具掉落率可提升用户活跃度',
      duration: '14天',
      participants: 10000,
      groups: [
        {
          name: '对照组 A',
          description: '基础奖励：每日打卡获得1个养料',
          metrics: {
            dau: { value: 4200, change: 0 },
            retention7d: { value: 52.3, change: 0 },
            studyTime: { value: 28, change: 0 },
            conversion: { value: 8.2, change: 0 },
          }
        },
        {
          name: '实验组 B',
          description: '增强奖励：每日打卡获得1-3个养料（随机）+ 稀有道具',
          metrics: {
            dau: { value: 5800, change: 38.1 },
            retention7d: { value: 68.5, change: 31.0 },
            studyTime: { value: 42, change: 50.0 },
            conversion: { value: 12.5, change: 52.4 },
          }
        }
      ],
      winner: 'B',
      insight: '随机性奖励机制触发多巴胺分泌，用户活跃度提升38.1%，留存率提升31%',
      recommendation: '全量上线增强奖励机制，预计提升年收入180万元'
    },
    {
      id: 'offline-checkin',
      title: '线下打卡激励对比',
      hypothesis: '提供实体奖励可提升线下打卡率',
      duration: '21天',
      participants: 5000,
      groups: [
        {
          name: '对照组 A',
          description: '虚拟奖励：打卡获得宠物玩具',
          metrics: {
            checkInRate: { value: 18.5, change: 0 },
            offlineConversion: { value: 15.2, change: 0 },
            avgSpending: { value: 980, change: 0 },
          }
        },
        {
          name: '实验组 B',
          description: '实体奖励：打卡获得学习文具 + 虚拟玩具',
          metrics: {
            checkInRate: { value: 35.8, change: 93.5 },
            offlineConversion: { value: 28.5, change: 87.5 },
            avgSpending: { value: 1280, change: 30.6 },
          }
        }
      ],
      winner: 'B',
      insight: '虚实结合的奖励体系使用户到店率提升93.5%，付费转化提升87.5%',
      recommendation: '建立线下奖励供应链，预计每月增加收入45万元'
    },
    {
      id: 'ai-diagnosis',
      title: 'AI诊断报告形式对比',
      hypothesis: '可视化报告比文字报告更易理解',
      duration: '10天',
      participants: 8000,
      groups: [
        {
          name: '对照组 A',
          description: '文字版诊断报告（传统形式）',
          metrics: {
            completionRate: { value: 45.2, change: 0 },
            shareRate: { value: 8.5, change: 0 },
            followUpAction: { value: 32.1, change: 0 },
          }
        },
        {
          name: '实验组 B',
          description: '可视化报告（雷达图 + 知识点图谱）',
          metrics: {
            completionRate: { value: 78.5, change: 73.7 },
            shareRate: { value: 25.8, change: 203.5 },
            followUpAction: { value: 65.3, change: 103.4 },
          }
        }
      ],
      winner: 'B',
      insight: '可视化报告显著提升用户理解和分享意愿，后续行动转化率提升103.4%',
      recommendation: '全面采用可视化诊断报告，增加社交分享功能'
    }
  ];

  const currentTest = abTests[selectedTest];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <FlaskConical className="h-6 w-6" />
                A/B测试案例
              </h1>
              <p className="text-sm text-slate-600">数据驱动的产品迭代决策</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* 测试选择器 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {abTests.map((test, index) => (
            <button
              key={test.id}
              onClick={() => setSelectedTest(index)}
              className={`p-4 rounded-xl text-left transition-all ${
                selectedTest === index
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-900 hover:bg-purple-50 shadow'
              }`}
            >
              <h3 className="font-bold mb-1">{test.title}</h3>
              <p className={`text-sm ${selectedTest === index ? 'text-purple-100' : 'text-slate-600'}`}>
                {test.duration} · {test.participants.toLocaleString()} 用户
              </p>
            </button>
          ))}
        </div>

        {/* 测试详情 */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-bold text-slate-900">{currentTest.title}</h2>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              ✓ 已完成
            </span>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-blue-900 mb-2">🎯 假设</h3>
            <p className="text-blue-800">{currentTest.hypothesis}</p>
          </div>

          {/* 对比数据 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {currentTest.groups.map((group, index) => (
              <div 
                key={group.name}
                className={`rounded-xl p-6 border-2 ${
                  currentTest.winner === group.name.charAt(group.name.length - 1)
                    ? 'border-green-500 bg-green-50'
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{group.name}</h3>
                  {currentTest.winner === group.name.charAt(group.name.length - 1) && (
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  )}
                </div>
                
                <p className="text-sm text-slate-600 mb-4">{group.description}</p>

                <div className="space-y-3">
                  {Object.entries(group.metrics).map(([key, metric]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-slate-700">
                        {key === 'dau' ? '日活用户' :
                         key === 'retention7d' ? '7日留存' :
                         key === 'studyTime' ? '学习时长(分)' :
                         key === 'conversion' ? '付费转化' :
                         key === 'checkInRate' ? '打卡率' :
                         key === 'offlineConversion' ? '线下转化' :
                         key === 'avgSpending' ? '客单价(元)' :
                         key === 'completionRate' ? '完成率' :
                         key === 'shareRate' ? '分享率' :
                         key === 'followUpAction' ? '后续行动' : key}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">
                          {typeof metric.value === 'number' && metric.value > 100 
                            ? metric.value.toLocaleString()
                            : metric.value}
                          {key === 'avgSpending' ? '¥' : key.includes('Rate') || key.includes('retention') || key.includes('conversion') || key.includes('completion') || key.includes('share') || key.includes('followUp') || key === 'checkInRate' ? '%' : key === 'studyTime' ? 'min' : ''}
                        </span>
                        {metric.change !== 0 && (
                          <span className={`text-sm font-semibold ${
                            metric.change > 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {metric.change > 0 ? '↑' : '↓'} {Math.abs(metric.change)}%
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 结论 */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              实验结论
            </h3>
            <p className="mb-4">{currentTest.insight}</p>
            
            <div className="bg-white/20 rounded-lg p-4">
              <h4 className="font-bold mb-2">💡 产品建议</h4>
              <p>{currentTest.recommendation}</p>
            </div>
          </div>
        </div>

        {/* 方法论 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">📊 A/B测试方法论</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">01</div>
              <h3 className="font-bold text-slate-900 mb-2">提出假设</h3>
              <p className="text-sm text-slate-600">基于用户反馈和数据分析，提出可验证的产品假设</p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">02</div>
              <h3 className="font-bold text-slate-900 mb-2">设计实验</h3>
              <p className="text-sm text-slate-600">确定样本量、测试周期、核心指标和对照组</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">03</div>
              <h3 className="font-bold text-slate-900 mb-2">执行测试</h3>
              <p className="text-sm text-slate-600">随机分组、控制变量、监控数据质量</p>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">04</div>
              <h3 className="font-bold text-slate-900 mb-2">分析决策</h3>
              <p className="text-sm text-slate-600">统计显著性检验、业务影响评估、全量决策</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
