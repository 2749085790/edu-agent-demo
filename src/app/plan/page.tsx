'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { mockPlan } from '@/data/plan';
import { getPriorityColor, getPriorityLabel } from '@/lib/utils';
import { CheckCircle2, Circle, Calendar, Clock, BookOpen } from 'lucide-react';

export default function PlanPage() {
  const [tasks, setTasks] = useState(mockPlan.tasks);
  const [selectedDate, setSelectedDate] = useState('2026-04-03');

  const toggleTask = (taskId: string) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const completionRate = Math.round((completedCount / tasks.length) * 100);

  const filteredTasks = tasks.filter(t => t.date === selectedDate);

  const COLORS = ['#3b82f6', '#06b6d4', '#8b5cf6', '#f59e0b'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">学习计划</h1>
        <p className="text-slate-600">{mockPlan.week}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">本周进度</h3>
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-primary-600 mb-2">{completionRate}%</div>
            <div className="text-slate-600">完成率 {completedCount}/{tasks.length}</div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
            <div
              className="bg-primary-600 h-3 rounded-full transition-all"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>

          <h4 className="font-semibold text-slate-900 mb-3">时间分配</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockPlan.timeAllocation}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ subject, hours }) => `${subject} ${hours}h`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="hours"
                >
                  {mockPlan.timeAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Calendar & Tasks */}
        <div className="lg:col-span-2 space-y-6">
          {/* Date Selector */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              选择日期
            </h3>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 7 }, (_, i) => {
                const date = `2026-04-0${i + 1}`;
                const isSelected = date === selectedDate;
                const hasTasks = tasks.some(t => t.date === date);
                return (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      isSelected
                        ? 'bg-primary-600 text-white'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-sm">4/{i + 1}</div>
                    {hasTasks && (
                      <div className={`w-1.5 h-1.5 rounded-full mx-auto mt-1 ${
                        isSelected ? 'bg-white' : 'bg-primary-600'
                      }`}></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Task List */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              {selectedDate} 学习任务
            </h3>
            <div className="space-y-3">
              {filteredTasks.length > 0 ? (
                filteredTasks.map(task => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-lg border transition-all hover:shadow-md ${
                      task.completed ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => toggleTask(task.id)}
                        className="mt-1 flex-shrink-0"
                      >
                        {task.completed ? (
                          <CheckCircle2 className="h-6 w-6 text-green-600" />
                        ) : (
                          <Circle className="h-6 w-6 text-slate-400" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className={`font-semibold ${task.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                            {task.topic}
                          </h4>
                          <span className={`px-2 py-1 rounded text-xs font-semibold border ${getPriorityColor(task.priority)}`}>
                            {getPriorityLabel(task.priority)}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {task.subject}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {task.duration}分钟
                          </span>
                          <span className="px-2 py-0.5 bg-slate-100 rounded text-xs">
                            {task.type === 'practice' ? '练习' : task.type === 'review' ? '复习' : '预习'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-slate-500">
                  今日无学习任务,休息一下吧!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
