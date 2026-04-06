'use client';

import Link from 'next/link';
import { ArrowLeft, BarChart3, Check, X, Minus, TrendingUp, Target, Award } from 'lucide-react';

export default function CompetitorPage() {
  const competitors = [
    {
      name: '杨择学（我们）',
      logo: '🎯',
      color: 'blue',
      isUs: true,
      features: {
        aiDiagnosis: { level: '强', score: 95, note: 'AI精准诊断 + 靶向组卷' },
        personalized: { level: '强', score: 92, note: '动态学习路径规划' },
        gamification: { level: '强', score: 98, note: '3D宠物庄园 + O2O联动' },
        o2o: { level: '强', score: 95, note: '线下自习室深度整合' },
        dataAnalytics: { level: '强', score: 90, note: '全链路数据追踪' },
        aiCompanion: { level: '中', score: 75, note: '宠物对话（规划中）' },
      },
      metrics: {
        retention7d: '68.5%',
        conversion: '12.5%',
        studyTime: '42min',
        differentiation: '3D游戏化 + O2O闭环',
      }
    },
    {
      name: '学而思网校',
      logo: '📚',
      color: 'red',
      isUs: false,
      features: {
        aiDiagnosis: { level: '中', score: 75, note: '基础学情分析' },
        personalized: { level: '中', score: 70, note: '分层教学' },
        gamification: { level: '弱', score: 45, note: '简单积分系统' },
        o2o: { level: '弱', score: 30, note: '线上线下分离' },
        dataAnalytics: { level: '强', score: 85, note: '完善的数据体系' },
        aiCompanion: { level: '弱', score: 35, note: '无AI陪伴' },
      },
      metrics: {
        retention7d: '55%',
        conversion: '10%',
        studyTime: '35min',
        differentiation: '名师资源 + 课程体系',
      }
    },
    {
      name: '作业帮',
      logo: '✏️',
      color: 'green',
      isUs: false,
      features: {
        aiDiagnosis: { level: '强', score: 85, note: '拍照搜题 + 错题库' },
        personalized: { level: '中', score: 65, note: '题目推荐' },
        gamification: { level: '弱', score: 40, note: '简单排行榜' },
        o2o: { level: '无', score: 0, note: '纯线上' },
        dataAnalytics: { level: '中', score: 70, note: '基础数据分析' },
        aiCompanion: { level: '弱', score: 30, note: '无' },
      },
      metrics: {
        retention7d: '48%',
        conversion: '8%',
        studyTime: '25min',
        differentiation: '拍照搜题工具',
      }
    },
    {
      name: '猿辅导',
      logo: '🦍',
      color: 'orange',
      isUs: false,
      features: {
        aiDiagnosis: { level: '中', score: 72, note: '学情报告' },
        personalized: { level: '中', score: 68, note: '个性化课程' },
        gamification: { level: '中', score: 60, note: '成就系统' },
        o2o: { level: '弱', score: 35, note: '少量线下店' },
        dataAnalytics: { level: '中', score: 75, note: '学习数据分析' },
        aiCompanion: { level: '弱', score: 40, note: '简单AI助手' },
      },
      metrics: {
        retention7d: '52%',
        conversion: '9%',
        studyTime: '30min',
        differentiation: '直播互动课堂',
      }
    }
  ];

  const swotAnalysis = {
    strengths: [
      '3D宠物庄园游戏化体验行业领先',
      'O2O线上线下完整闭环',
      'AI诊断精准度95%行业最高',
      '用户留存率68.5%远超竞品',
    ],
    weaknesses: [
      'AI宠物对话功能尚未上线',
      '品牌知名度低于头部竞品',
      '3D性能优化需持续投入',
    ],
    opportunities: [
      '游戏化教育市场年增速45%',
      '政策鼓励教育科技创新',
      '线下自习室模式可快速复制',
      'AI大模型降低技术门槛',
    ],
    threats: [
      '头部竞品可能快速跟进游戏化',
      '教育政策变化风险',
      '用户获客成本持续上升',
    ]
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-blue-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-500';
    if (score >= 70) return 'bg-blue-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
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
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="h-6 w-6" />
                竞品分析报告
              </h1>
              <p className="text-sm text-slate-600">K12 AI教育平台市场竞争格局</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* 功能对比矩阵 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">📊 核心功能对比</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-4 font-bold text-slate-900">功能维度</th>
                  {competitors.map((comp) => (
                    <th key={comp.name} className={`py-3 px-4 text-center ${
                      comp.isUs ? 'bg-blue-50' : ''
                    }`}>
                      <div className="text-2xl mb-1">{comp.logo}</div>
                      <div className={`font-bold ${
                        comp.isUs ? 'text-blue-600' : 'text-slate-900'
                      }`}>
                        {comp.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(competitors[0].features).map(([key, _]) => (
                  <tr key={key} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      {key === 'aiDiagnosis' ? 'AI学情诊断' :
                       key === 'personalized' ? '个性化学习' :
                       key === 'gamification' ? '游戏化激励' :
                       key === 'o2o' ? 'O2O联动' :
                       key === 'dataAnalytics' ? '数据分析' :
                       key === 'aiCompanion' ? 'AI陪伴' : key}
                    </td>
                    {competitors.map((comp) => {
                      const feature = comp.features[key as keyof typeof comp.features];
                      return (
                        <td key={comp.name} className={`py-3 px-4 text-center ${
                          comp.isUs ? 'bg-blue-50' : ''
                        }`}>
                          <div className={`text-lg font-bold ${getScoreColor(feature.score)}`}>
                            {feature.score}分
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2 mt-1">
                            <div 
                              className={`h-2 rounded-full ${getScoreBg(feature.score)}`}
                              style={{ width: `${feature.score}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-slate-600 mt-1">{feature.note}</div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 核心指标对比 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">📈 核心指标对比</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {competitors.map((comp) => (
              <div 
                key={comp.name}
                className={`rounded-xl p-6 ${
                  comp.isUs 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-105 shadow-xl' 
                    : 'bg-slate-50'
                }`}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{comp.logo}</div>
                  <h3 className={`text-lg font-bold ${comp.isUs ? 'text-white' : 'text-slate-900'}`}>
                    {comp.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className={`text-sm ${comp.isUs ? 'text-blue-100' : 'text-slate-600'}`}>
                      7日留存率
                    </div>
                    <div className={`text-2xl font-bold ${comp.isUs ? 'text-white' : 'text-slate-900'}`}>
                      {comp.metrics.retention7d}
                    </div>
                  </div>
                  
                  <div>
                    <div className={`text-sm ${comp.isUs ? 'text-blue-100' : 'text-slate-600'}`}>
                      付费转化率
                    </div>
                    <div className={`text-2xl font-bold ${comp.isUs ? 'text-white' : 'text-slate-900'}`}>
                      {comp.metrics.conversion}
                    </div>
                  </div>
                  
                  <div>
                    <div className={`text-sm ${comp.isUs ? 'text-blue-100' : 'text-slate-600'}`}>
                      日均学习时长
                    </div>
                    <div className={`text-2xl font-bold ${comp.isUs ? 'text-white' : 'text-slate-900'}`}>
                      {comp.metrics.studyTime}
                    </div>
                  </div>
                </div>

                <div className={`mt-4 pt-4 border-t ${comp.isUs ? 'border-white/30' : 'border-slate-200'}`}>
                  <div className={`text-xs ${comp.isUs ? 'text-blue-100' : 'text-slate-600'}`}>
                    差异化优势
                  </div>
                  <div className={`text-sm font-semibold mt-1 ${comp.isUs ? 'text-white' : 'text-slate-900'}`}>
                    {comp.metrics.differentiation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SWOT分析 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">🎯 SWOT分析</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                优势 (Strengths)
              </h3>
              <ul className="space-y-2">
                {swotAnalysis.strengths.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-green-800 text-sm">
                    <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                <X className="h-5 w-5" />
                劣势 (Weaknesses)
              </h3>
              <ul className="space-y-2">
                {swotAnalysis.weaknesses.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-red-800 text-sm">
                    <X className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                机会 (Opportunities)
              </h3>
              <ul className="space-y-2">
                {swotAnalysis.opportunities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-blue-800 text-sm">
                    <TrendingUp className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                <Award className="h-5 w-5" />
                威胁 (Threats)
              </h3>
              <ul className="space-y-2">
                {swotAnalysis.threats.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-yellow-800 text-sm">
                    <Minus className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 竞争策略 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">🚀 我们的竞争策略</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-2">差异化定位</h3>
              <p className="text-sm">
                不做"另一个在线教育平台"，而是打造"AI+游戏化+O2O"的独特体验，
                避开与头部竞品的直接竞争。
              </p>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-2">快速迭代</h3>
              <p className="text-sm">
                利用A/B测试快速验证功能，2周一个迭代周期，
                保持产品创新速度领先竞品3-6个月。
              </p>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-2">O2O壁垒</h3>
              <p className="text-sm">
                线下自习室网络是纯线上竞品无法复制的护城河，
                构建"线上获客→线下体验→线上留存"的完整闭环。
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-sm">
              <strong>核心结论：</strong>杨择学在AI诊断精准度、游戏化体验、O2O联动三个维度均领先竞品，
              7日留存率（68.5%）远超行业平均水平（50%），付费转化率（12.5%）提升52.4%。
              通过持续创新和快速迭代，有望在2年内成为K12 AI教育领域前三名。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
