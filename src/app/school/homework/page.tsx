'use client'

import Link from 'next/link'
import { ArrowLeft, Zap, CheckCircle2, XCircle, Clock, Send, FileText, Brain } from 'lucide-react'

export default function HomeworkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/school" className="text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Zap className="h-6 w-6" />
                作业布置与批改
              </h1>
              <p className="text-sm text-slate-600">智能批改 · 数据同步</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-green-100 rounded-lg">
            <span className="text-green-800 font-semibold">🤖 AI批改</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* 核心优势 */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">⚡ AI智能作业系统</h2>
          <p className="text-lg opacity-95 mb-6">
            AI自动批改作业,数据实时同步到学习机,形成"布置-完成-批改-反馈"完整闭环
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
              <div className="text-2xl font-bold mb-1">95%</div>
              <div className="text-sm opacity-90">AI批改准确率</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
              <div className="text-2xl font-bold mb-1">实时</div>
              <div className="text-sm opacity-90">数据同步</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
              <div className="text-2xl font-bold mb-1">80%</div>
              <div className="text-sm opacity-90">减负效果</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-3 text-center">
              <div className="text-2xl font-bold mb-1">自动</div>
              <div className="text-sm opacity-90">错题归集</div>
            </div>
          </div>
        </div>

        {/* AI智能出题系统 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Brain className="h-6 w-6 text-purple-600" />
            AI智能出题系统
          </h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-2 border-purple-200">
            <h3 className="text-xl font-bold text-purple-800 mb-4">🎯 智能出题流程</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">📷</span>
                </div>
                <h4 className="font-bold text-purple-800 mb-1">1. 考卷扫描</h4>
                <p className="text-xs text-slate-600">OCR识别学生试卷</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h4 className="font-bold text-blue-800 mb-1">2. 数据分析</h4>
                <p className="text-xs text-slate-600">分析班级薄弱点</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h4 className="font-bold text-green-800 mb-1">3. AI出题</h4>
                <p className="text-xs text-slate-600">针对性生成题目</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl">📤</span>
                </div>
                <h4 className="font-bold text-orange-800 mb-1">4. 发布作业</h4>
                <p className="text-xs text-slate-600">同步到学生端</p>
              </div>
            </div>

            {/* 考卷扫描区域 */}
            <div className="bg-white rounded-lg p-5 border-2 border-dashed border-purple-300">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                  <span className="text-xl">📷</span>
                  考卷扫描系统
                </h4>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">OCR识别</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">考试名称</label>
                  <input 
                    type="text" 
                    defaultValue="二次函数单元测试"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">班级</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg" disabled>
                    <option>九年级(3)班</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-slate-700">上传试卷照片</span>
                  <span className="text-xs text-slate-500">支持批量上传</span>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-white border-2 border-slate-200 rounded-lg p-3 text-center hover:border-purple-400 transition-all cursor-pointer">
                      <div className="text-3xl mb-1">📄</div>
                      <div className="text-xs text-slate-600">学生{i}</div>
                      <div className="text-xs text-green-600 font-semibold mt-1">已识别</div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center gap-2">
                <span className="text-xl">🔍</span>
                开始分析试卷数据
              </button>
            </div>
          </div>
        </div>

        {/* 知识点分析结果 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            知识点分析结果
          </h2>
          
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-800">班级薄弱点分析</h3>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">45份试卷</span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-800">二次函数图像变换</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">错误率</span>
                    <span className="text-lg font-bold text-red-600">65%</span>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-red-500 h-3 rounded-full" style={{width: '65%'}}></div>
                </div>
                <p className="text-xs text-slate-600 mt-2">29/45 学生错误 · 需重点讲解</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-800">二次函数最值求解</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">错误率</span>
                    <span className="text-lg font-bold text-orange-600">52%</span>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-orange-500 h-3 rounded-full" style={{width: '52%'}}></div>
                </div>
                <p className="text-xs text-slate-600 mt-2">23/45 学生错误 · 需加强练习</p>
              </div>

              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-800">二次函数应用题</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">错误率</span>
                    <span className="text-lg font-bold text-yellow-600">48%</span>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-yellow-500 h-3 rounded-full" style={{width: '48%'}}></div>
                </div>
                <p className="text-xs text-slate-600 mt-2">22/45 学生错误 · 建议针对性训练</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">🤖 AI分析结论</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <p>• <strong>核心薄弱点:</strong> 二次函数图像变换（平移、对称、伸缩）</p>
                <p>• <strong>错误类型:</strong> 概念理解错误占60%，计算错误占30%，审题错误占10%</p>
                <p>• <strong>建议策略:</strong> 生成针对性练习，重点训练图像变换的三种类型</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI智能出题 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            AI智能出题
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border-2 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-green-800">基于薄弱点生成题目</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">AI生成中</span>
            </div>

            <div className="bg-white rounded-lg p-5 mb-4">
              <h4 className="font-semibold text-slate-800 mb-3">出题配置</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">题目数量</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg">
                    <option>15题</option>
                    <option>10题</option>
                    <option>20题</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">难度分布</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg">
                    <option>基础60% + 提高30% + 挑战10%</option>
                    <option>基础70% + 提高30%</option>
                    <option>基础50% + 提高40% + 挑战10%</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">作业类型</label>
                  <select className="w-full px-4 py-2 border border-slate-300 rounded-lg">
                    <option>家庭作业</option>
                    <option>课堂练习</option>
                    <option>单元测试</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <h5 className="font-semibold text-slate-800 mb-2">出题依据</h5>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span>二次函数图像变换 - 错误率65% - 生成8题</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>二次函数最值求解 - 错误率52% - 生成5题</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span>二次函数应用题 - 错误率48% - 生成2题</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-teal-700 transition-all flex items-center justify-center gap-2">
                <span className="text-xl">✨</span>
                AI生成题目
              </button>
              <button className="px-6 py-3 bg-white border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-all flex items-center gap-2">
                <span className="text-xl">👁️</span>
                预览题目
              </button>
            </div>
          </div>
        </div>

        {/* 作业布置 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Send className="h-6 w-6 text-blue-600" />
            布置作业
          </h2>
          
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">作业类型</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>课后作业</option>
                  <option>课堂练习</option>
                  <option>周末作业</option>
                  <option>假期作业</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">布置班级</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg">
                  <option>九年级(3)班</option>
                  <option>九年级(4)班</option>
                </select>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-semibold text-slate-700 mb-2">作业内容</label>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-800">二次函数练习(二)</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">AI组卷</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">共15题 · 基础题10题 · 提高题3题 · 挑战题2题</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>⏱️ 预计用时: 45分钟</span>
                    <span>📅 截止时间: 2026-04-05</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  立即布置作业
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* AI批改 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            AI智能批改
          </h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-green-800">二次函数练习(一)</h3>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm">AI批改中</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-slate-900">44/45</div>
                  <div className="text-xs text-slate-600">已提交</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-600">42</div>
                  <div className="text-xs text-slate-600">已批改</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-600">78.5</div>
                  <div className="text-xs text-slate-600">平均分</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-orange-600">2</div>
                  <div className="text-xs text-slate-600">待批改</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-slate-800 mb-3">批改进度</h4>
                <div className="bg-slate-100 rounded-full h-4 overflow-hidden mb-3">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 h-4 rounded-full transition-all" style={{width: '93%'}}></div>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>已完成 42/45</span>
                  <span className="text-green-600 font-semibold">93%</span>
                </div>
              </div>
            </div>

            {/* 批改详情示例 */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-slate-800 mb-4">批改详情示例</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-800">学生: 张明</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="text-green-600 font-bold">95分</span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>✅ 选择题: 10/10 正确</p>
                    <p>✅ 填空题: 3/3 正确</p>
                    <p>⚠️ 解答题: 扣2分(步骤不完整)</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-800">学生: 孙伟</span>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600" />
                      <span className="text-red-600 font-bold">45分</span>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">
                    <p>❌ 选择题: 5/10 正确</p>
                    <p>❌ 填空题: 1/3 正确</p>
                    <p>❌ 解答题: 扣15分(概念错误)</p>
                  </div>
                  <div className="mt-2 bg-red-50 p-2 rounded">
                    <p className="text-xs text-red-700">
                      <strong>AI建议:</strong> 该生二次函数图像变换概念不清,建议课后一对一辅导
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 数据同步 */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <FileText className="h-6 w-6 text-purple-600" />
            数据同步机制
          </h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Send className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-blue-800 mb-2">1. 布置作业</h3>
                <p className="text-sm text-slate-700">老师布置作业到系统</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-purple-800 mb-2">2. 学生完成</h3>
                <p className="text-sm text-slate-700">学生在学习机完成作业</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-green-800 mb-2">3. 自动同步</h3>
                <p className="text-sm text-slate-700">数据实时同步到老师端</p>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-lg p-4">
              <h4 className="font-semibold text-slate-800 mb-3">同步内容</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <div className="text-lg mb-1">📝</div>
                  <div className="text-sm text-slate-700">作业完成情况</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <div className="text-lg mb-1">✅</div>
                  <div className="text-sm text-slate-700">答题正确率</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <div className="text-lg mb-1">❌</div>
                  <div className="text-sm text-slate-700">错题自动归集</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <div className="text-lg mb-1">📊</div>
                  <div className="text-sm text-slate-700">用时统计</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部导航 */}
        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link href="/school/analytics" className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            学情管理
          </Link>
          <Link href="/school/communication" className="px-6 py-3 bg-gradient-to-r from-orange-600 to-green-600 text-white rounded-lg hover:from-orange-700 hover:to-green-700 transition-all flex items-center gap-2">
            家校沟通中心
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
