'use client'

import Link from 'next/link'
import { ArrowLeft, MessageSquare, Users, Bell, TrendingUp, Send } from 'lucide-react'

export default function CommunicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/school" className="text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                家校沟通中心
              </h1>
              <p className="text-sm text-slate-600">高效沟通 · 全面掌握</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-orange-100 rounded-lg">
            <span className="text-orange-800 font-semibold">💬 三方联动</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* 核心价值 */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">🏫 家校沟通中心</h2>
          <p className="text-lg opacity-95">
            打通学校与家庭的信息壁垒,让家长全面掌握孩子学习情况,与老师高效沟通
          </p>
        </div>

        {/* 家长端功能 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-600" />
            家长查看学习情况
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                学校学习数据
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✅ 课堂作业完成情况</li>
                <li>✅ 考试成绩与排名</li>
                <li>✅ 老师评价与反馈</li>
                <li>✅ 课堂表现记录</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-5 border-2 border-green-200">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                家庭学习数据
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✅ AI诊断报告</li>
                <li>✅ 学习时长统计</li>
                <li>✅ 知识点掌握情况</li>
                <li>✅ 学习进步趋势</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 rounded-xl p-5">
            <h3 className="font-bold text-slate-800 mb-4">学习报告示例</h3>
            <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-slate-800">张明 · 本周学习报告</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">已生成</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-blue-600">85分</div>
                  <div className="text-xs text-slate-600">平均分</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-green-600">12h</div>
                  <div className="text-xs text-slate-600">学习时长</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-purple-600">92%</div>
                  <div className="text-xs text-slate-600">作业完成</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-orange-600">↑8%</div>
                  <div className="text-xs text-slate-600">进步幅度</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-sm text-slate-700">
                    <strong>优势:</strong> 二次函数图像掌握良好,解题思路清晰
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">⚠</span>
                  <p className="text-sm text-slate-700">
                    <strong>需加强:</strong> 一元二次方程应用题解题速度有待提升
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">💡</span>
                  <p className="text-sm text-slate-700">
                    <strong>建议:</strong> 周末可安排2小时专项练习应用题
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 在线沟通 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-green-600" />
            在线沟通
          </h2>
          
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-800">王老师 (数学)</span>
                  <span className="text-xs text-slate-500">今天 14:30</span>
                </div>
                <p className="text-sm text-slate-700">
                  张明妈妈您好!张明最近在二次函数方面进步很大,课堂表现积极。不过一元二次方程应用题还需要加强,建议周末安排针对性练习。
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-green-500 ml-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-green-800">张明妈妈</span>
                  <span className="text-xs text-slate-500">今天 15:00</span>
                </div>
                <p className="text-sm text-slate-700">
                  谢谢王老师!我们周末会安排练习的。请问有什么推荐的练习资料吗?
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-800">王老师 (数学)</span>
                  <span className="text-xs text-slate-500">今天 15:15</span>
                </div>
                <p className="text-sm text-slate-700">
                  我可以在系统里推送一份专项练习给张明,里面包含了典型题型和详细解析。他做完后我会查看完成情况,下周再给他单独辅导一下。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <div className="flex gap-3">
                <input 
                  type="text" 
                  placeholder="输入消息..."
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  发送
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 通知中心 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Bell className="h-6 w-6 text-red-600" />
            通知中心
          </h2>
          
          <div className="space-y-3">
            <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200 flex items-start gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bell className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-red-800">重要通知</span>
                  <span className="text-xs text-slate-500">10分钟前</span>
                </div>
                <p className="text-sm text-slate-700">
                  下周一将进行二次函数单元测试,请督促孩子复习。复习重点已推送至学习机。
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bell className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-blue-800">学习报告</span>
                  <span className="text-xs text-slate-500">2小时前</span>
                </div>
                <p className="text-sm text-slate-700">
                  张明本周学习报告已生成,请查看。本周学习时长12小时,作业完成率92%。
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200 flex items-start gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bell className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-green-800">作业反馈</span>
                  <span className="text-xs text-slate-500">昨天</span>
                </div>
                <p className="text-sm text-slate-700">
                  二次函数练习(一)已完成,得分85分。错题已自动归集到错题本,建议复习。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 底部导航 */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link href="/school/homework" className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            作业系统
          </Link>
          <Link href="/school" className="px-6 py-3 bg-gradient-to-r from-orange-600 to-purple-600 text-white rounded-lg hover:from-orange-700 hover:to-purple-700 transition-all flex items-center gap-2">
            返回学校端首页
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
