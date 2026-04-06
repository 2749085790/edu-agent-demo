'use client';

import { useState } from 'react';
import { BarChart3, Clock, AlertCircle, CheckCircle, BookOpen, ArrowRight } from 'lucide-react';
import { mockTargetedPaper } from '@/data/targeted-paper';
import { TargetedPaper, ProblemOption } from '@/types';

export default function TargetedPaperPage() {
  const [paper] = useState<TargetedPaper>(mockTargetedPaper);
  const [expandedProblem, setExpandedProblem] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* 顶部导航 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="h-8 w-8 text-primary-600" />
          <div>
            <h1 className="text-3xl font-bold text-slate-900">漏洞靶向组卷</h1>
            <p className="text-slate-600">根据您的诊断报告自动生成补漏试卷</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* 引导文案卡片 */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
          <div className="whitespace-pre-wrap text-slate-700 text-sm leading-relaxed">
            {paper.guidedFocus}
          </div>
        </div>

        {/* 薄弱知识点分析 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-red-500" />
            您的薄弱知识点分析
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {paper.weakPoints.map((weakPoint, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">{weakPoint.knowledgePoint}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    weakPoint.errorRate > 0.6
                      ? 'bg-red-100 text-red-700'
                      : weakPoint.errorRate > 0.4
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {(weakPoint.errorRate * 100).toFixed(0)}% 错误率
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-slate-600">错题占比</span>
                      <span className="text-sm font-semibold">{weakPoint.totalCount - weakPoint.correctCount}/{weakPoint.totalCount}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full transition-all"
                        style={{ width: `${weakPoint.errorRate * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 mb-2">主要错误类型：</p>
                    <div className="space-y-1">
                      {weakPoint.errorTypes.slice(0, 3).map((errorType, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
                          <span className="text-slate-700">{errorType.type} ({errorType.count}次)</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 补漏试卷 */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <BarChart3 className="h-6 w-6 text-primary-600" />
              精选补漏试卷（{paper.problems.length}道题）
            </h2>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">预计{paper.totalEstimatedTime}分钟</span>
            </div>
          </div>

          <div className="space-y-4">
            {paper.problems.map((problem, index) => (
              <ProblemCard
                key={problem.id}
                problemNumber={index + 1}
                problem={problem}
                isExpanded={expandedProblem === problem.id}
                onToggle={() => setExpandedProblem(expandedProblem === problem.id ? null : problem.id)}
              />
            ))}
          </div>
        </section>

        {/* 行动按钮 */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">准备好提升成绩了吗？</h3>
                <p className="text-primary-100 mb-4">完成这份试卷，预计可将薄弱知识点掌握度提升 20-30%</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>精准靶向 5 道变形题</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>配套讲解视频和例题</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>AI 错因分析和建议</span>
                  </li>
                </ul>
              </div>
              <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center gap-2">
                开始做题
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* 学习建议 */}
        <section>
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">📚 高效学习建议</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">✅ 做题时应该：</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 认真读题，理解题意后再下笔</li>
                  <li>• 先思考解题思路，再查看提示</li>
                  <li>• 重点关注辅助线的构造思路</li>
                  <li>• 每做完一题立即查看讲解视频</li>
                  <li>• 记录自己的错误和改进思路</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">❌ 应该避免：</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 急着看答案，没有独立思考</li>
                  <li>• 遇到困难就放弃，应该多想想</li>
                  <li>• 做完就完了，不总结错误原因</li>
                  <li>• 只做熟悉的题型，避免尝试新题型</li>
                  <li>• 不看讲解视频，自己瞎琢磨</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ProblemCard({
  problemNumber,
  problem,
  isExpanded,
  onToggle,
}: {
  problemNumber: number;
  problem: ProblemOption;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700',
  };

  const difficultyLabels = {
    easy: '简单',
    medium: '中等',
    hard: '困难',
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-600 rounded-full font-semibold">
                {problemNumber}
              </span>
              <h4 className="text-lg font-semibold text-slate-900">{problem.title}</h4>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${difficultyColors[problem.difficulty]}`}>
                {difficultyLabels[problem.difficulty]}
              </span>
            </div>
            <p className="text-slate-600 text-sm">针对：{problem.targetWeakPoint}</p>
          </div>
          <div className="flex items-center gap-4 ml-4">
            <div className="flex items-center gap-1 text-slate-600">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{problem.estimatedTime}分钟</span>
            </div>
            <button
              className="text-slate-400 hover:text-slate-600 transition-colors"
              aria-label={isExpanded ? '收起' : '展开'}
            >
              <svg
                className={`h-6 w-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-slate-200 bg-slate-50 p-6">
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-slate-900 mb-2">📝 题目内容：</h5>
              <div className="bg-white p-4 rounded border border-slate-200 text-slate-700 whitespace-pre-wrap text-sm">
                {problem.content}
              </div>
            </div>

            <div>
              <h5 className="font-semibold text-slate-900 mb-2">🏷️ 关键词：</h5>
              <div className="flex flex-wrap gap-2">
                {problem.keywords.map((keyword, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button className="flex-1 bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                查看讲解视频
              </button>
              <button className="flex-1 bg-white text-primary-600 border border-primary-600 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                开始做题
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
