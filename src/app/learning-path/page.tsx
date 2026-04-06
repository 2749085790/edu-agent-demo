'use client';

import { useState } from 'react';
import { BookOpenCheck, Play, CheckCircle2, Clock, ArrowRight, Zap } from 'lucide-react';
import { getAllLearningResourcesByStudent } from '@/data/learning-resources';
import { LearningResourcePackage } from '@/types';

export default function LearningPathPage() {
  const [resources] = useState<LearningResourcePackage[]>(
    getAllLearningResourcesByStudent('S20240001')
  );
  const [selectedResource, setSelectedResource] = useState<LearningResourcePackage | null>(resources[0]);

  const statusColors = {
    assigned: 'bg-blue-100 text-blue-700',
    'in-progress': 'bg-yellow-100 text-yellow-700',
    completed: 'bg-green-100 text-green-700',
  };

  const statusLabels = {
    assigned: '未开始',
    'in-progress': '进行中',
    completed: '已完成',
  };

  const getPhaseLabel = (phase: number) => {
    const labels = ['', '观看视频', '学习例题', '做练习题'];
    return labels[phase] || '未知阶段';
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* 顶部导航 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-8">
          <BookOpenCheck className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">学习资源中心</h1>
            <p className="text-slate-600">诊断-学习-练习完整闭环，快速提升薄弱知识点</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* 学习资源列表 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* 左侧：资源列表 */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-bold text-slate-900 mb-4">您的学习资源</h2>
            <div className="space-y-3">
              {resources.map((resource) => (
                <button
                  key={resource.id}
                  onClick={() => setSelectedResource(resource)}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    selectedResource?.id === resource.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white border border-slate-200 text-slate-900 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{resource.knowledgePoint}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        selectedResource?.id === resource.id
                          ? 'bg-white bg-opacity-20'
                          : statusColors[resource.status]
                      }`}
                    >
                      {statusLabels[resource.status]}
                    </span>
                  </div>
                  <div className="text-xs opacity-75">
                    {resource.learningPath.currentPhase}/{resource.learningPath.phase} 阶段
                  </div>
                  <div className="mt-2 w-full bg-opacity-20 bg-slate-800 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        selectedResource?.id === resource.id ? 'bg-white' : 'bg-primary-600'
                      }`}
                      style={{
                        width: `${(resource.learningPath.currentPhase / resource.learningPath.phase) * 100}%`,
                      }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 右侧：资源详情 */}
          {selectedResource && (
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                {/* 资源头部 */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold">{selectedResource.knowledgePoint}</h2>
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                      {statusLabels[selectedResource.status]}
                    </span>
                  </div>
                  <p className="text-primary-100 text-sm mb-4">{selectedResource.resources.summary.split('\n')[0]}</p>

                  {/* 学习进度 */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">学习进度</span>
                      <span className="font-semibold">
                        {selectedResource.learningPath.currentPhase}/{selectedResource.learningPath.phase} 阶段
                      </span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full transition-all"
                        style={{
                          width: `${(selectedResource.learningPath.currentPhase / selectedResource.learningPath.phase) * 100}%`,
                        }}
                      ></div>
                    </div>
                    {selectedResource.learningPath.completedTime && (
                      <div className="text-xs text-primary-100">
                        已学习 {selectedResource.learningPath.completedTime} 分钟 / 总计
                        {selectedResource.learningPath.estimatedTotalTime} 分钟
                      </div>
                    )}
                  </div>
                </div>

                {/* 资源内容 */}
                <div className="p-6 space-y-6">
                  {/* 讲解视频 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Play className="h-5 w-5 text-primary-600" />
                      <h3 className="font-semibold text-slate-900">讲解视频（{selectedResource.resources.videos.length}个）</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedResource.resources.videos.map((video) => (
                        <div key={video.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 text-sm mb-1">{video.title}</h4>
                              <p className="text-xs text-slate-600">{video.description}</p>
                              <div className="flex gap-4 mt-2">
                                <span className="text-xs text-slate-500">⏱ {Math.round(video.duration / 60)}分钟</span>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  video.difficulty === 'beginner'
                                    ? 'bg-green-100 text-green-700'
                                    : video.difficulty === 'intermediate'
                                    ? 'bg-yellow-100 text-yellow-700'
                                    : 'bg-red-100 text-red-700'
                                }`}>
                                  {video.difficulty === 'beginner' ? '初级' : video.difficulty === 'intermediate' ? '中级' : '高级'}
                                </span>
                              </div>
                            </div>
                            <button className="ml-3 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                              播放
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 例题 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <h3 className="font-semibold text-slate-900">典型例题（{selectedResource.resources.examples.length}道）</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedResource.resources.examples.map((example) => (
                        <div key={example.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer">
                          <h4 className="font-semibold text-slate-900 text-sm mb-1">{example.title}</h4>
                          <p className="text-xs text-slate-600 line-clamp-2">{example.problem}</p>
                          <button className="mt-2 text-primary-600 hover:text-primary-700 font-semibold text-xs">
                            查看解析 →
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 练习题 */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="h-5 w-5 text-orange-600" />
                      <h3 className="font-semibold text-slate-900">配套练习题</h3>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <p className="text-slate-700 text-sm mb-3">
                        看完视频和例题后，完成{selectedResource.resources.practiceProblemIds.length}道精选练习题巩固知识点。
                      </p>
                      <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                        开始练习
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 学习建议 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">💡 建议学习顺序</h3>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold flex-shrink-0">
                  1
                </span>
                <div>
                  <p className="font-semibold text-slate-900">观看讲解视频</p>
                  <p className="text-xs text-slate-600">理解知识点的基本概念和解题方法</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold flex-shrink-0">
                  2
                </span>
                <div>
                  <p className="font-semibold text-slate-900">学习典型例题</p>
                  <p className="text-xs text-slate-600">仔细分析解题思路和关键步骤</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold flex-shrink-0">
                  3
                </span>
                <div>
                  <p className="font-semibold text-slate-900">完成练习题</p>
                  <p className="text-xs text-slate-600">独立做题，查看AI错因分析</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold flex-shrink-0">
                  4
                </span>
                <div>
                  <p className="font-semibold text-slate-900">查看成长报告</p>
                  <p className="text-xs text-slate-600">追踪进度，获取个性化建议</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">⏱ 推荐学习时间</h3>
            <div className="space-y-4">
              {selectedResource && (
                <>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-xs text-slate-600 mb-1">总预计学时</p>
                    <p className="text-2xl font-bold text-primary-600">{selectedResource.learningPath.estimatedTotalTime}分钟</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <p className="text-xs text-slate-600 mb-1">推荐安排</p>
                      <p className="font-semibold text-slate-900">3-5天</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-xs text-slate-600 mb-1">每天</p>
                      <p className="font-semibold text-slate-900">30-40分钟</p>
                    </div>
                  </div>
                </>
              )}
              <p className="text-sm text-slate-600">
                💡 提示：不要一次性学习太长时间，充分利用碎片时间，效率会更高！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
