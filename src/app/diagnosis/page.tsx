'use client';

import { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { mockDiagnosis } from '@/data/diagnosis';
import { mockStudent } from '@/data/student';
import { getMasteryColor, getMasteryLabel } from '@/lib/utils';
import { Brain, RefreshCw, User, Calendar } from 'lucide-react';

export default function DiagnosisPage() {
  const [loading, setLoading] = useState(false);

  const handleRediagnose = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">学情诊断</h1>
        <p className="text-slate-600">AI深度分析知识点掌握情况,精准定位薄弱环节</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Student Info Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-primary-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{mockStudent.name}</h2>
              <p className="text-slate-600">{mockStudent.grade} · {mockStudent.school}</p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">诊断科目</span>
              <span className="font-medium">{mockDiagnosis.subject}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">诊断时间</span>
              <span className="font-medium flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {mockDiagnosis.diagnosedAt}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">综合得分</span>
              <span className="font-bold text-2xl text-primary-600">{mockDiagnosis.overallScore}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">连续学习</span>
              <span className="font-medium text-amber-600">{mockStudent.studyStreak} 天 🔥</span>
            </div>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">学科能力雷达图</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={mockDiagnosis.radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                <Radar name="能力值" dataKey="score" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* AI Summary */}
      <div className="mt-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-200 p-6">
        <div className="flex items-start gap-3">
          <Brain className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">AI 诊断结论</h3>
            <p className="text-slate-700 leading-relaxed">{mockDiagnosis.aiSummary}</p>
          </div>
        </div>
      </div>

      {/* Knowledge Points Table */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">知识点掌握详情</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">知识点</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">掌握程度</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">得分</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">练习数</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">正确率</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {mockDiagnosis.knowledgePoints.map((kp, index) => (
                <tr key={index} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">{kp.name}</td>
                  <td className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getMasteryColor(kp.mastery)}`}>
                      {getMasteryLabel(kp.mastery)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">{kp.score}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{kp.exercises}</td>
                  <td className="px-4 py-3 text-sm text-slate-700">{kp.accuracy}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rediagnose Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleRediagnose}
          disabled={loading}
          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 flex items-center gap-2 mx-auto"
        >
          <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
          {loading ? '诊断中...' : '重新诊断'}
        </button>
      </div>
    </div>
  );
}
