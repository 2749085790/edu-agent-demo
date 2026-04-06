'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { mockErrorDistribution, mockErrorCases } from '@/data/analysis';
import { Brain, ChevronDown, ChevronUp, Target } from 'lucide-react';

export default function AnalysisPage() {
  const [expandedError, setExpandedError] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  const COLORS = ['#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#6b7280'];

  const filteredErrors = filterType === 'all'
    ? mockErrorCases
    : mockErrorCases.filter(e => e.errorType === filterType);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">错因分析</h1>
        <p className="text-slate-600">智能识别错误类型,精准归因,提供针对性改进方案</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Error Type Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">错因类型分布</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockErrorDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ errorType, percentage }) => `${errorType} ${percentage}%`}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {mockErrorDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weakness Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">薄弱知识点趋势</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[
                { week: 'W10', score: 45 },
                { week: 'W11', score: 48 },
                { week: 'W12', score: 52 },
                { week: 'W13', score: 58 },
                { week: 'W14', score: 62 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-600 mt-2">三角形全等知识点掌握度持续提升 ↑</p>
        </div>
      </div>

      {/* Error Cases */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900">典型错题分析</h3>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
          >
            <option value="all">全部类型</option>
            <option value="概念不清">概念不清</option>
            <option value="计算失误">计算失误</option>
            <option value="审题错误">审题错误</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredErrors.map(error => (
            <div key={error.id} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedError(expandedError === error.id ? null : error.id)}
                className="w-full p-4 flex items-start justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-red-50 text-red-700 rounded text-xs font-semibold">
                      {error.subject}
                    </span>
                    <span className="px-2 py-1 bg-amber-50 text-amber-700 rounded text-xs font-semibold">
                      {error.errorType}
                    </span>
                  </div>
                  <p className="text-sm text-slate-900 font-medium">{error.question}</p>
                </div>
                {expandedError === error.id ? (
                  <ChevronUp className="h-5 w-5 text-slate-500 flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-500 flex-shrink-0 ml-2" />
                )}
              </button>

              {expandedError === error.id && (
                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-red-700 mb-1">你的答案</div>
                      <div className="text-sm text-slate-900">{error.studentAnswer}</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="text-sm font-semibold text-green-700 mb-1">正确答案</div>
                      <div className="text-sm text-slate-900">{error.correctAnswer}</div>
                    </div>
                  </div>

                  <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                    <div className="flex items-start gap-2">
                      <Brain className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-primary-900 mb-1">AI 错因解析</div>
                        <div className="text-sm text-slate-700 leading-relaxed">{error.aiExplanation}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <Target className="h-4 w-4 text-slate-600" />
                    <span className="text-slate-600">相关知识点:</span>
                    <span className="font-medium text-slate-900">{error.relatedKnowledge}</span>
                  </div>

                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700">
                    生成针对性练习
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
