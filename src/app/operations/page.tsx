'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { mockMetrics, mockRiskAlerts, mockActivityTrend } from '@/data/operations';
import { AlertTriangle, Users, TrendingUp, Shield, Filter } from 'lucide-react';

export default function OperationsPage() {
  const [filterLevel, setFilterLevel] = useState<string>('all');

  const filteredAlerts = filterLevel === 'all'
    ? mockRiskAlerts
    : mockRiskAlerts.filter(a => a.riskLevel === filterLevel);

  const getRiskTypeLabel = (type: string) => {
    switch (type) {
      case 'churn': return '流失风险';
      case 'stagnation': return '学习停滞';
      case 'decline': return '成绩下滑';
      default: return type;
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">运营数据看板</h1>
        <p className="text-slate-600">学员风险预警、留存分析、助力机构精细化运营</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <Users className="h-8 w-8 text-primary-600" />
            <span className="text-sm text-slate-600">在籍学员</span>
          </div>
          <div className="text-3xl font-bold text-slate-900">{mockMetrics.totalStudents}</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <span className="text-sm text-slate-600">本周活跃度</span>
          </div>
          <div className="text-3xl font-bold text-green-600">{mockMetrics.activeRate}%</div>
          <div className="text-sm text-slate-600 mt-1">{mockMetrics.weeklyActive} 人活跃</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <Shield className="h-8 w-8 text-cyan-600" />
            <span className="text-sm text-slate-600">续费率</span>
          </div>
          <div className="text-3xl font-bold text-cyan-600">{mockMetrics.renewalRate}%</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="h-8 w-8 text-red-600" />
            <span className="text-sm text-slate-600">流失预警</span>
          </div>
          <div className="text-3xl font-bold text-red-600">{mockMetrics.highRiskCount}</div>
          <div className="text-sm text-slate-600 mt-1">需立即关注</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Activity Trend */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">学员活跃度趋势</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockActivityTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="active" stroke="#3b82f6" strokeWidth={2} name="活跃人数" />
                <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} name="完成任务数" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subject Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">科目分布</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { subject: '数学', students: 156 },
                { subject: '英语', students: 128 },
                { subject: '物理', students: 98 },
                { subject: '化学', students: 76 },
                { subject: '语文', students: 65 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="students" fill="#3b82f6" name="学员数" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Risk Alert Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            学员风险预警
          </h3>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-600" />
            <select
              value={filterLevel}
              onChange={(e) => setFilterLevel(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
            >
              <option value="all">全部等级</option>
              <option value="high">高风险</option>
              <option value="medium">中风险</option>
              <option value="low">低风险</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">学员</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">风险类型</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">风险等级</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">最后活跃</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">建议操作</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredAlerts.map((alert, index) => (
                <tr key={index} className={`hover:bg-slate-50 ${alert.riskLevel === 'high' ? 'bg-red-50' : ''}`}>
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-900">{alert.studentName}</div>
                    <div className="text-sm text-slate-600">{alert.studentId}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">{getRiskTypeLabel(alert.riskType)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold border ${getRiskLevelColor(alert.riskLevel)}`}>
                      {alert.riskLevel === 'high' ? '高' : alert.riskLevel === 'medium' ? '中' : '低'}风险
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">{alert.lastActive}</td>
                  <td className="px-4 py-3 text-sm text-slate-700 max-w-xs">{alert.suggestion}</td>
                  <td className="px-4 py-3">
                    {alert.handled ? (
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold">已处理</span>
                    ) : (
                      <button className="px-3 py-1 bg-primary-600 text-white rounded text-xs font-semibold hover:bg-primary-700">
                        处理
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
