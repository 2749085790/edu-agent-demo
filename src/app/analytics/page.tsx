'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, Users, Clock, Target, DollarSign, Activity, BarChart3 } from 'lucide-react';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');

  // Mock 数据
  const metrics = {
    dau: { current: 12580, previous: 8920, change: 41.0 },
    mau: { current: 45230, previous: 38100, change: 18.7 },
    retention7d: { current: 68.5, previous: 52.3, change: 31.0 },
    retention30d: { current: 45.2, previous: 35.8, change: 26.3 },
    avgStudyTime: { current: 42, previous: 28, change: 50.0 },
    completionRate: { current: 78.5, previous: 65.2, change: 20.4 },
  };

  const featureUsage = [
    { name: '学情诊断', users: 8920, rate: 70.9, trend: '+15.2%' },
    { name: 'AI组卷', users: 7650, rate: 60.8, trend: '+22.5%' },
    { name: '错题分析', users: 9200, rate: 73.1, trend: '+18.9%' },
    { name: '学习伙伴', users: 10580, rate: 84.1, trend: '+45.3%' },
    { name: '宠物庄园', users: 8950, rate: 71.1, trend: '+156.8%' },
  ];

  const conversionFunnel = [
    { stage: '访问用户', count: 50000, rate: 100 },
    { stage: '注册试用', count: 35000, rate: 70 },
    { stage: '完成诊断', count: 28000, rate: 56 },
    { stage: '使用7天', count: 19040, rate: 38.1 },
    { stage: '付费转化', count: 4760, rate: 9.5 },
  ];

  const offlineImpact = {
    checkInUsers: 3200,
    conversionRate: 28.5,
    avgSpending: 1280,
    retentionBoost: 35.2,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
              <h1 className="text-2xl font-bold text-slate-900">📊 产品数据看板</h1>
              <p className="text-sm text-slate-600">杨择学AI教育平台 - 核心指标监控</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            {(['7d', '30d', '90d'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  timeRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {range === '7d' ? '近7天' : range === '30d' ? '近30天' : '近90天'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* 核心指标卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-slate-600">DAU</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{(metrics.dau.current / 1000).toFixed(1)}k</div>
            <div className="text-sm text-green-600 font-semibold">↑ {metrics.dau.change}%</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-slate-600">MAU</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{(metrics.mau.current / 1000).toFixed(1)}k</div>
            <div className="text-sm text-green-600 font-semibold">↑ {metrics.mau.change}%</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-5 w-5 text-green-600" />
              <span className="text-sm text-slate-600">7日留存</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{metrics.retention7d.current}%</div>
            <div className="text-sm text-green-600 font-semibold">↑ {metrics.retention7d.change}%</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-orange-600" />
              <span className="text-sm text-slate-600">平均学习时长</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{metrics.avgStudyTime.current}min</div>
            <div className="text-sm text-green-600 font-semibold">↑ {metrics.avgStudyTime.change}%</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-5 w-5 text-red-600" />
              <span className="text-sm text-slate-600">任务完成率</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{metrics.completionRate.current}%</div>
            <div className="text-sm text-green-600 font-semibold">↑ {metrics.completionRate.change}%</div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-yellow-600" />
              <span className="text-sm text-slate-600">付费转化率</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">9.5%</div>
            <div className="text-sm text-green-600 font-semibold">↑ 2.3%</div>
          </div>
        </div>

        {/* 功能使用率 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <BarChart3 className="h-6 w-6" />
            功能使用率排名
          </h2>
          
          <div className="space-y-3">
            {featureUsage.map((feature, index) => (
              <div key={feature.name} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-slate-900">{feature.name}</span>
                    <span className="text-sm text-slate-600">{feature.users.toLocaleString()} 用户</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${feature.rate}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-20 text-right">
                  <span className="text-sm font-semibold text-green-600">{feature.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 转化漏斗 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6" />
            用户转化漏斗
          </h2>
          
          <div className="space-y-4">
            {conversionFunnel.map((step, index) => (
              <div key={step.stage} className="flex items-center gap-4">
                <div className="w-32 text-sm font-semibold text-slate-700">{step.stage}</div>
                <div className="flex-1">
                  <div className="relative">
                    <div className="w-full bg-slate-100 rounded-lg h-10">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-10 rounded-lg flex items-center justify-end pr-3 transition-all"
                        style={{ width: `${step.rate}%` }}
                      >
                        <span className="text-white font-bold text-sm">{step.rate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-24 text-right text-sm text-slate-600">
                  {step.count.toLocaleString()} 人
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 线下打卡影响 */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            🏢 线下AI自习室联动效果
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-sm opacity-90">打卡用户数</div>
              <div className="text-3xl font-bold">{offlineImpact.checkInUsers.toLocaleString()}</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-sm opacity-90">付费转化率</div>
              <div className="text-3xl font-bold">{offlineImpact.conversionRate}%</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-sm opacity-90">客单价</div>
              <div className="text-3xl font-bold">¥{offlineImpact.avgSpending}</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-sm opacity-90">留存提升</div>
              <div className="text-3xl font-bold">+{offlineImpact.retentionBoost}%</div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white/10 rounded-lg">
            <p className="text-sm">
              <strong>核心洞察：</strong>线下打卡用户的付费转化率（28.5%）是纯线上用户（9.5%）的3倍，
              客单价高出68%，7日留存率提升35.2%。O2O联动策略显著提升用户价值和平台收入。
            </p>
          </div>
        </div>

        {/* 产品亮点总结 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">🎯 产品核心价值</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-900 mb-2">AI精准诊断</h3>
              <p className="text-sm text-blue-800">
                通过AI分析学生薄弱知识点，靶向组卷效率提升3倍，
                避免无效刷题，节省学生40%学习时间。
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <h3 className="font-bold text-purple-900 mb-2">游戏化激励</h3>
              <p className="text-sm text-purple-800">
                3D宠物庄园系统使7日留存率从52.3%提升至68.5%，
                日均学习时长从28分钟增至42分钟。
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold text-green-900 mb-2">O2O闭环</h3>
              <p className="text-sm text-green-800">
                线上学习+线下自习室联动，付费转化率提升200%，
                客单价提升68%，构建完整商业闭环。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
