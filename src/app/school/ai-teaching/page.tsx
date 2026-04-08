'use client'

import Link from 'next/link'
import { ArrowLeft, BookOpen, Sparkles, FileText, Layers, Download, Send } from 'lucide-react'

export default function AITeachingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/school" className="text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                教师AI备课平台
              </h1>
              <p className="text-sm text-slate-600">AI赋能教学 · 提升备课效率70%</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-blue-100 rounded-lg">
            <span className="text-blue-800 font-semibold">🤖 AI驱动</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* 核心功能 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">✨ AI一键备课</h2>
          <p className="text-lg opacity-95">
            基于班级学情数据,AI智能生成教案、课件和教学方案,让备课效率提升70%
          </p>
        </div>

        {/* 功能演示区 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">🎯 核心功能</h2>
          
          <div className="space-y-6">
            {/* 功能1: AI智能备课 */}
            <div className="border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">AI智能备课</h3>
                  <p className="text-slate-700 mb-4">输入课题,AI自动生成完整教案</p>
                  
                  <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">课题名称</label>
                      <input 
                        type="text" 
                        defaultValue="二次函数的图像与性质"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        readOnly
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">年级</label>
                        <select className="w-full px-4 py-2 border border-slate-300 rounded-lg" disabled>
                          <option>九年级</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">学科</label>
                        <select className="w-full px-4 py-2 border border-slate-300 rounded-lg" disabled>
                          <option>数学</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">课时</label>
                        <select className="w-full px-4 py-2 border border-slate-300 rounded-lg" disabled>
                          <option>1课时</option>
                        </select>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      AI一键生成教案
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 功能2: 学情驱动的备课 */}
            <div className="border-2 border-purple-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="h-8 w-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">学情驱动备课</h3>
                  <p className="text-slate-700 mb-4">AI基于班级学情数据,推荐针对性教学内容</p>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-3">📊 班级薄弱点分析</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">二次函数图像变换</span>
                        <div className="flex-1 mx-4 bg-white rounded-full h-3">
                          <div className="bg-red-500 h-3 rounded-full" style={{width: '35%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-red-600">35%掌握</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">二次函数性质应用</span>
                        <div className="flex-1 mx-4 bg-white rounded-full h-3">
                          <div className="bg-orange-500 h-3 rounded-full" style={{width: '52%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-orange-600">52%掌握</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-700">二次函数最值问题</span>
                        <div className="flex-1 mx-4 bg-white rounded-full h-3">
                          <div className="bg-yellow-500 h-3 rounded-full" style={{width: '68%'}}></div>
                        </div>
                        <span className="text-sm font-semibold text-yellow-600">68%掌握</span>
                      </div>
                    </div>
                    <div className="mt-4 bg-white rounded-lg p-3">
                      <p className="text-sm text-slate-700">
                        <span className="font-semibold text-purple-700">💡 AI建议:</span> 本节课重点讲解"二次函数图像变换",
                        班级掌握率仅35%,建议增加图形变换的直观演示和练习
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 功能3: 智能组卷 */}
            <div className="border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">智能组卷系统</h3>
                  <p className="text-slate-700 mb-4">AI根据教学目标自动组卷,支持难度调节</p>
                  
                  <div className="bg-green-50 rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">试卷类型</label>
                        <select className="w-full px-4 py-2 border border-slate-300 rounded-lg" disabled>
                          <option>课堂练习</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">题目数量</label>
                        <select className="w-full px-4 py-2 border border-slate-300 rounded-lg" disabled>
                          <option>15题</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">难度分布</label>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="text-xs text-slate-600 mb-1">基础题 60%</div>
                          <div className="bg-white rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-slate-600 mb-1">提高题 30%</div>
                          <div className="bg-white rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '30%'}}></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-slate-600 mb-1">挑战题 10%</div>
                          <div className="bg-white rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{width: '10%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        AI智能组卷
                      </button>
                      <button className="px-6 py-2 bg-white border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-all flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        导出试卷
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 功能4: 课堂互动工具 */}
            <div className="border-2 border-orange-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Send className="h-8 w-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">课堂互动工具</h3>
                  <p className="text-slate-700 mb-4">实时推送练习题,即时查看答题情况</p>
                  
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <button className="bg-white border-2 border-orange-300 rounded-lg p-3 text-center hover:bg-orange-100 transition-all">
                        <div className="text-2xl mb-1">📝</div>
                        <div className="text-sm font-semibold text-orange-800">随堂测验</div>
                      </button>
                      <button className="bg-white border-2 border-orange-300 rounded-lg p-3 text-center hover:bg-orange-100 transition-all">
                        <div className="text-2xl mb-1">🎯</div>
                        <div className="text-sm font-semibold text-orange-800">抢答环节</div>
                      </button>
                      <button className="bg-white border-2 border-orange-300 rounded-lg p-3 text-center hover:bg-orange-100 transition-all">
                        <div className="text-2xl mb-1">📊</div>
                        <div className="text-sm font-semibold text-orange-800">实时统计</div>
                      </button>
                      <button className="bg-white border-2 border-orange-300 rounded-lg p-3 text-center hover:bg-orange-100 transition-all">
                        <div className="text-2xl mb-1">🏆</div>
                        <div className="text-sm font-semibold text-orange-800">积分排行</div>
                      </button>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-slate-700">随堂练习推送</span>
                        <span className="text-xs text-green-600 font-semibold">● 已推送</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600">参与人数: 42/45</span>
                        <span className="text-slate-600">正确率: 78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部导航 */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link href="/school" className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            返回学校端
          </Link>
          <Link href="/school/analytics" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center gap-2">
            查看学情管理
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
