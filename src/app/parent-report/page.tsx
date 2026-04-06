'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { mockReport } from '@/data/report';
import { mockStudent } from '@/data/student';
import { TrendingUp, Clock, CheckSquare, Brain, MessageSquare, Download, Share2 } from 'lucide-react';

export default function ParentReportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">家长学习报告</h1>
            <p className="text-slate-600">{mockReport.week} · {mockStudent.name}</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg hover:bg-slate-50">
              <Download className="h-4 w-4" />
              下载报告
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              <Share2 className="h-4 w-4" />
              分享给老师
            </button>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="h-6 w-6 text-primary-600" />
            <span className="text-slate-600">本周学习时长</span>
          </div>
          <div className="text-3xl font-bold text-primary-600">{mockReport.studyHours}h</div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <CheckSquare className="h-6 w-6 text-green-600" />
            <span className="text-slate-600">完成任务数</span>
          </div>
          <div className="text-3xl font-bold text-green-600">{mockReport.tasksCompleted}个</div>
        </div>
        <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-cyan-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="h-6 w-6 text-cyan-600" />
            <span className="text-slate-600">专注度评分</span>
          </div>
          <div className="text-3xl font-bold text-cyan-600">{mockReport.focusScore}分</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Score Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">成绩趋势</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockReport.scoreTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[60, 100]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} name="综合得分" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="text-sm text-green-800">
              <span className="font-semibold">↑ 提升明显</span> 本周平均 {Math.round(mockReport.scoreTrend.reduce((a, b) => a + b.score, 0) / mockReport.scoreTrend.length)} 分,较上周提升 5 分
            </div>
          </div>
        </div>

        {/* Knowledge Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">知识点掌握变化</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockReport.knowledgeComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="topic" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="before" fill="#94a3b8" name="上周" />
                <Bar dataKey="after" fill="#3b82f6" name="本周" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Teacher Comment */}
      <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-200 p-6 mb-6">
        <div className="flex items-start gap-3">
          <MessageSquare className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">教师评语</h3>
            <p className="text-slate-700 leading-relaxed">{mockReport.teacherComment}</p>
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          <Brain className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-slate-900">AI 家庭辅导建议</h3>
            <p className="text-sm text-slate-600 mt-1">以下建议可帮助孩子在家庭中更好地巩固学习成果</p>
          </div>
        </div>
        <div className="space-y-3">
          {mockReport.aiSuggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
              <div className="h-6 w-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-slate-700">{suggestion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
