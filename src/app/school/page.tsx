'use client'

import Link from 'next/link'
import { ArrowLeft, Users, School, BookOpen, MessageSquare, TrendingUp, Target, Zap, Award } from 'lucide-react'

export default function SchoolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <School className="h-6 w-6" />
                学校端 - 教育生态平台
              </h1>
              <p className="text-sm text-slate-600">学生 · 家长 · 老师 三方联动</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-blue-100 rounded-lg">
            <span className="text-blue-800 font-semibold">生态差异化战略</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* 核心价值主张 */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">🎯 三方联动教育生态</h2>
          <p className="text-lg leading-relaxed opacity-95 mb-6">
            从"家庭学习工具"升级为"连接学校和家庭的教育生态平台"
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-semibold">老师端</span>
              </div>
              <p className="text-sm opacity-90">AI备课、学情管理、作业批改、精准辅导</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5" />
                <span className="font-semibold">学生端</span>
              </div>
              <p className="text-sm opacity-90">数据同步、个性化学习、AI诊断、虚拟伴学</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5" />
                <span className="font-semibold">家长端</span>
              </div>
              <p className="text-sm opacity-90">全面掌握学情、家校沟通、成长报告</p>
            </div>
          </div>
        </div>

        {/* 核心痛点与解决方案 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">💡 市场差异化策略</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 竞品局限 */}
            <div className="bg-red-50 rounded-lg p-5 border-2 border-red-200">
              <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <span className="text-xl">❌</span>
                竞品局限 (单机学习工具)
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 只服务孩子和家长,与学校教学脱节</li>
                <li>• 学习数据无法与学校作业、考试联动</li>
                <li>• 老师不了解孩子使用学习机的学习情况</li>
                <li>• 家庭学习无法针对性配合课堂教学</li>
                <li>• 缺乏三方协同,形成数据孤岛</li>
              </ul>
            </div>

            {/* 我们的优势 */}
            <div className="bg-green-50 rounded-lg p-5 border-2 border-green-200">
              <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <span className="text-xl">✅</span>
                九学王优势 (教育生态平台)
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 打通学校教学和家庭学习场景,形成闭环</li>
                <li>• 学校作业/考试数据自动同步到学习机</li>
                <li>• 老师实时查看班级学情,针对性辅导</li>
                <li>• AI根据学校数据更新学情画像,精准推送</li>
                <li>• 三方联动,形成生态壁垒</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 核心功能模块 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">🚀 核心功能模块</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 教师AI备课平台 */}
            <Link href="/school/ai-teaching" className="group block">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-800">教师AI备课平台</h3>
                    <p className="text-sm text-blue-600">快速备课、智能组卷</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• AI一键生成教案和课件</li>
                  <li>• 基于班级学情智能推荐教学内容</li>
                  <li>• 海量题库智能组卷</li>
                  <li>• 课堂互动工具</li>
                </ul>
                <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:text-blue-800">
                  查看详情
                  <svg className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* 学情管理系统 */}
            <Link href="/school/analytics" className="group block">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-800">学情管理系统</h3>
                    <p className="text-sm text-purple-600">班级数据分析</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 实时查看班级整体学习情况</li>
                  <li>• 每个学生知识薄弱点分析</li>
                  <li>• 作业/考试数据可视化</li>
                  <li>• 自动生成学情报告</li>
                </ul>
                <div className="mt-4 flex items-center text-purple-600 font-semibold group-hover:text-purple-800">
                  查看详情
                  <svg className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* 作业布置与批改 */}
            <Link href="/school/homework" className="group block">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-800">作业布置与批改</h3>
                    <p className="text-sm text-green-600">智能批改、数据同步</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• AI自动批改作业和试卷</li>
                  <li>• 作业数据自动同步到学习机</li>
                  <li>• 错题自动归集到学生错题本</li>
                  <li>• 作业完成情况实时反馈</li>
                </ul>
                <div className="mt-4 flex items-center text-green-600 font-semibold group-hover:text-green-800">
                  查看详情
                  <svg className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* 家校沟通中心 */}
            <Link href="/school/communication" className="group block">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-orange-800">家校沟通中心</h3>
                    <p className="text-sm text-orange-600">高效沟通、全面掌握</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• 家长查看学校学习情况</li>
                  <li>• 老师与家长在线沟通</li>
                  <li>• 学习报告自动推送</li>
                  <li>• 个性化学习建议分享</li>
                </ul>
                <div className="mt-4 flex items-center text-orange-600 font-semibold group-hover:text-orange-800">
                  查看详情
                  <svg className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* 数据流转示意 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">🔄 数据流转闭环</h2>
          
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 学校端 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <School className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-blue-800 mb-2">学校课堂</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• 布置作业/考试</li>
                  <li>• 课堂教学数据</li>
                  <li>• 成绩记录</li>
                </ul>
              </div>

              {/* 数据同步 */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white rounded-lg p-4 shadow-md text-center">
                  <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-purple-800">AI数据中枢</p>
                  <p className="text-xs text-slate-600 mt-1">实时同步·智能分析</p>
                </div>
              </div>

              {/* 家庭端 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-green-800 mb-2">家庭学习</h3>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• AI精准诊断</li>
                  <li>• 个性化学习</li>
                  <li>• 学习报告推送</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3 text-center">数据闭环流程</h4>
              <div className="flex items-center justify-between text-sm text-slate-700">
                <div className="flex-1 text-center">
                  <div className="bg-blue-100 rounded-lg p-2 mb-2">1️⃣ 学校布置作业</div>
                </div>
                <span className="text-2xl text-slate-400 mx-2">→</span>
                <div className="flex-1 text-center">
                  <div className="bg-purple-100 rounded-lg p-2 mb-2">2️⃣ 数据自动同步</div>
                </div>
                <span className="text-2xl text-slate-400 mx-2">→</span>
                <div className="flex-1 text-center">
                  <div className="bg-green-100 rounded-lg p-2 mb-2">3️⃣ AI更新学情</div>
                </div>
                <span className="text-2xl text-slate-400 mx-2">→</span>
                <div className="flex-1 text-center">
                  <div className="bg-orange-100 rounded-lg p-2 mb-2">4️⃣ 精准推送</div>
                </div>
                <span className="text-2xl text-slate-400 mx-2">→</span>
                <div className="flex-1 text-center">
                  <div className="bg-indigo-100 rounded-lg p-2 mb-2">5️⃣ 老师反馈</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 商业价值 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">💰 商业价值</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <Users className="h-5 w-5" />
                老师愿意用
              </h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• AI备课节省70%时间</li>
                <li>• 智能批改减轻负担</li>
                <li>• 学情数据辅助教学决策</li>
                <li>• 提升教学质量和效率</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                孩子用得上
              </h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• 针对性学习不盲目</li>
                <li>• 与学校教学同步</li>
                <li>• AI个性化辅导</li>
                <li>• 提升学习效率40%</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-5">
              <h3 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                <Target className="h-5 w-5" />
                家长愿意买
              </h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• 全面掌握学习情况</li>
                <li>• 看到真实学习效果</li>
                <li>• 与老师高效沟通</li>
                <li>• 投资回报明确可见</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 底部导航 */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link href="/" className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            返回首页
          </Link>
          <Link href="/school/ai-teaching" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center gap-2">
            开始体验教师端
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
