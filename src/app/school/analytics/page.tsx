'use client'

import Link from 'next/link'
import { ArrowLeft, TrendingUp, Users, BarChart3, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function SchoolAnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/school" className="text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                学情管理系统
              </h1>
              <p className="text-sm text-slate-600">九年级(3)班 · 数学</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-purple-100 rounded-lg">
            <span className="text-purple-800 font-semibold">📊 实时数据</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* 班级概况 */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">📊 班级学情总览</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">45</div>
              <div className="text-sm opacity-90">班级人数</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">78%</div>
              <div className="text-sm opacity-90">作业完成率</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">82.5</div>
              <div className="text-sm opacity-90">平均成绩</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">12</div>
              <div className="text-sm opacity-90">需关注学生</div>
            </div>
          </div>
        </div>

        {/* 知识点掌握情况 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-purple-600" />
            知识点掌握情况分析
          </h2>
          
          <div className="space-y-4">
            {[
              { name: '二次函数图像与性质', mastery: 35, students: 16, color: 'red', trend: 'down' },
              { name: '一元二次方程解法', mastery: 52, students: 23, color: 'orange', trend: 'stable' },
              { name: '二次函数最值问题', mastery: 68, students: 31, color: 'yellow', trend: 'up' },
              { name: '相似三角形判定', mastery: 75, students: 34, color: 'blue', trend: 'up' },
              { name: '圆的性质', mastery: 82, students: 37, color: 'green', trend: 'up' },
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-slate-900">{item.name}</h3>
                    {item.mastery < 60 && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-semibold flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        薄弱
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">
                      {item.students}/45 学生掌握
                    </span>
                    <span className={`text-lg font-bold ${
                      item.color === 'red' ? 'text-red-600' :
                      item.color === 'orange' ? 'text-orange-600' :
                      item.color === 'yellow' ? 'text-yellow-600' :
                      item.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                    }`}>
                      {item.mastery}%
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-full h-4 overflow-hidden">
                  <div 
                    className={`h-4 rounded-full transition-all ${
                      item.color === 'red' ? 'bg-red-500' :
                      item.color === 'orange' ? 'bg-orange-500' :
                      item.color === 'yellow' ? 'bg-yellow-500' :
                      item.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                    }`}
                    style={{width: `${item.mastery}%`}}
                  ></div>
                </div>
                {item.mastery < 60 && (
                  <div className="mt-2 bg-red-50 border-l-4 border-red-500 p-3 rounded">
                    <p className="text-sm text-red-800">
                      <strong>💡 教学建议:</strong> 该知识点班级掌握率较低,建议下节课重点讲解,并增加针对性练习
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 学生分层分析 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-600" />
            学生分层分析
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-green-800">🌟 优秀学生</h3>
                <span className="text-2xl font-bold text-green-600">15</span>
              </div>
              <p className="text-sm text-slate-700 mb-3">掌握率 ≥ 85%</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">张明</span>
                  <span className="text-green-600 font-semibold">95%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">李华</span>
                  <span className="text-green-600 font-semibold">92%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">王芳</span>
                  <span className="text-green-600 font-semibold">90%</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-blue-800">📚 中等学生</h3>
                <span className="text-2xl font-bold text-blue-600">18</span>
              </div>
              <p className="text-sm text-slate-700 mb-3">掌握率 60% - 84%</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">刘强</span>
                  <span className="text-blue-600 font-semibold">78%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">陈静</span>
                  <span className="text-blue-600 font-semibold">75%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">赵磊</span>
                  <span className="text-blue-600 font-semibold">72%</span>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-5 border-2 border-red-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-red-800">⚠️ 需关注学生</h3>
                <span className="text-2xl font-bold text-red-600">12</span>
              </div>
              <p className="text-sm text-slate-700 mb-3">掌握率 &lt; 60%</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">孙伟</span>
                  <span className="text-red-600 font-semibold">45%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">周婷</span>
                  <span className="text-red-600 font-semibold">42%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-700">吴昊</span>
                  <span className="text-red-600 font-semibold">38%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 作业/考试数据 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            近期作业与考试数据
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">日期</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">类型</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">内容</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">提交率</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">平均分</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-sm">2026-04-03</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">作业</span></td>
                  <td className="px-4 py-3 text-sm">二次函数练习(一)</td>
                  <td className="px-4 py-3 text-sm font-semibold">98%</td>
                  <td className="px-4 py-3 text-sm font-semibold">78.5</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">已批改</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">2026-04-01</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">测验</span></td>
                  <td className="px-4 py-3 text-sm">单元小测-二次函数</td>
                  <td className="px-4 py-3 text-sm font-semibold">100%</td>
                  <td className="px-4 py-3 text-sm font-semibold">82.3</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">已批改</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm">2026-03-28</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">作业</span></td>
                  <td className="px-4 py-3 text-sm">一元二次方程应用</td>
                  <td className="px-4 py-3 text-sm font-semibold">95%</td>
                  <td className="px-4 py-3 text-sm font-semibold">75.8</td>
                  <td className="px-4 py-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">已批改</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 底部导航 */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link href="/school/ai-teaching" className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            AI备课平台
          </Link>
          <Link href="/school/homework" className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 transition-all flex items-center gap-2">
            作业布置与批改
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
