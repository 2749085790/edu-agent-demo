'use client';

import { BarChart3, TrendingUp, Award, AlertCircle } from 'lucide-react';
import { mockGrowthRadarReport } from '@/data/growth-radar';
import { GrowthRadarReport } from '@/types';
import RadarChartComponent from '@/components/radar/RadarChart';

export default function GrowthRadarPage() {
  const report: GrowthRadarReport = mockGrowthRadarReport;
  const radarData = report.radarData;
  const summary = radarData.summary;
  const monthlyComparison = radarData.monthlyComparison;

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* 顶部导航 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">学情成长雷达</h1>
            <p className="text-slate-600">可视化学生能力模型，追踪成长轨迹</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* 顶部亮点卡片 */}
        <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">🌟 {report.parentView.headline}</h2>
          <ul className="space-y-2">
            {report.parentView.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700">
                <span className="text-green-600 font-bold">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 雷达图部分 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">能力雷达图（当前月份）</h3>
            <div className="h-96 flex items-center justify-center">
              <RadarChartComponent data={monthlyComparison || {}} />
            </div>
            <p className="text-xs text-slate-500 text-center mt-4">
              * 数据基于学生本月学习数据自动生成，每周更新一次
            </p>
          </div>

          {/* 侧边栏：成长指标 */}
          <div className="space-y-4">
            {/* 总体趋势 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-primary-600" />
                <h4 className="font-semibold text-slate-900">整体趋势</h4>
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">
                {summary.overallTrend === 'improving'
                  ? '📈 进步'
                  : summary.overallTrend === 'stable'
                  ? '➡️ 稳定'
                  : '📉 下降'}
              </div>
              <p className="text-sm text-slate-600">
                本月平均成长率 <span className="font-bold text-primary-600">{summary.monthlyGrowthRate}%</span>
              </p>
            </div>

            {/* 优势维度 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-green-600" />
                优势维度
              </h4>
              <div className="space-y-2">
                {summary.strengths.map((strength, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-slate-700">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 待改进维度 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                需改进维度
              </h4>
              <div className="space-y-2">
                {summary.needsImprovement.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI 建议 */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4">🎯 AI 智能建议</h3>
          <div className="space-y-3">
            {summary.recommendations.map((rec, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-primary-600 font-semibold flex-shrink-0">{i + 1}.</span>
                <p className="text-slate-700">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 家长行动建议 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">👨‍👩‍👧‍👦 家长可执行建议</h3>
            <div className="space-y-3">
              {report.parentView.actionItems.map((action, i) => (
                <div key={i} className="flex gap-3 p-3 bg-slate-50 rounded-lg">
                  <span className="text-primary-600 font-bold flex-shrink-0">{action.charAt(0)}</span>
                  <p className="text-sm text-slate-700">{action.substring(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 教师反馈 */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">👨‍🏫 教师反馈</h3>
            <div className="space-y-4">
              {report.teacherView.classRanking && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <p className="text-xs text-slate-600">班级排名</p>
                    <p className="text-2xl font-bold text-primary-600">
                      {report.teacherView.classRanking.overallRank}/{report.teacherView.classRanking.totalStudents}
                    </p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-xs text-slate-600">进步排名</p>
                    <p className="text-2xl font-bold text-green-600">
                      {report.teacherView.classRanking.improvementRank}
                    </p>
                  </div>
                </div>
              )}

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-700">{report.teacherView.suggestedAction}</p>
              </div>

              {report.teacherView.interventionNeeded && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm font-semibold text-red-700">⚠️ 需要关注</p>
                  <p className="text-sm text-red-600 mt-1">
                    教师建议进行一次面对面交流，了解学生最近的学习困难
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 月份对比数据 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4">📊 三月份能力对比</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-900">能力维度</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">上月(2月)</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">本月(3月)</th>
                  <th className="text-center py-3 px-4 font-semibold text-slate-900">变化</th>
                </tr>
              </thead>
              <tbody>
                {monthlyComparison &&
                  Object.entries(monthlyComparison.currentMonth).map(([key, currentScore]) => {
                    const prevScore = monthlyComparison.previousMonth[key] || 0;
                    const change = currentScore - prevScore;
                    return (
                      <tr key={key} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4 font-medium text-slate-900">{key}</td>
                        <td className="text-center py-3 px-4 text-slate-600">{prevScore}</td>
                        <td className="text-center py-3 px-4 text-slate-900 font-semibold">{currentScore}</td>
                        <td className="text-center py-3 px-4">
                          {change > 0 ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded font-semibold">
                              <span>+{change}</span>
                              <span>📈</span>
                            </span>
                          ) : change < 0 ? (
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded font-semibold">
                              <span>{change}</span>
                              <span>📉</span>
                            </span>
                          ) : (
                            <span className="text-slate-500">-</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">继续追踪成长轨迹</h3>
          <p className="text-primary-100 mb-6">系统会每周为您生成更新的成长报告，帮助您及时了解孩子的学习进展</p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-block">
            查看详细分析
          </button>
        </div>
      </div>
    </div>
  );
}
