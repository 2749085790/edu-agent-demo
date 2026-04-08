'use client'

import Link from 'next/link'
import { ArrowLeft, FileCheck, Target, Layers, Zap, Shield, Smartphone } from 'lucide-react'

export default function SORPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/sow" className="text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <FileCheck className="h-6 w-6" />
                需求规格说明书 (SOR)
              </h1>
              <p className="text-sm text-slate-600">Software Requirements Specification</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-purple-100 rounded-lg">
            <span className="text-purple-800 font-semibold">版本 v1.0 | 2026.04.04</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">需求规格说明书</h2>
          <p className="text-lg leading-relaxed opacity-95">
            本文档详细定义系统的功能性需求、非功能性需求、接口需求和数据需求。
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-purple-600" />
            1. 系统概述
          </h2>
          <div className="bg-slate-50 rounded-lg p-5">
            <h3 className="font-semibold text-slate-800 mb-2">系统定位</h3>
            <p className="text-slate-700 leading-relaxed">
              杨择学AI督学Agent是一款面向K12学生（6-18岁）的智能化学习平台，
              通过AI精准诊断、虚拟宠物激励、3D互动农场等创新功能，
              实现"查漏补缺、只刷不会"的个性化学习体验。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-slate-800">Web端优先</div>
              <div className="text-sm text-slate-600 mt-1">响应式设计</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-slate-800">AI驱动</div>
              <div className="text-sm text-slate-600 mt-1">通义千问API</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-slate-800">数据安全</div>
              <div className="text-sm text-slate-600 mt-1">隐私保护</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Layers className="h-6 w-6 text-blue-600" />
            2. 功能性需求
          </h2>
          <div className="space-y-4">
            {[
              { id: 'FR-001', name: 'AI学习诊断系统', priority: 'P0', color: 'blue', desc: '基于学生历史学习数据，AI自动分析薄弱知识点，生成个性化诊断报告。', criteria: ['诊断准确率 ≥ 85%', '响应时间 < 3秒', '支持11个学科维度'] },
              { id: 'FR-002', name: '虚拟宠物激励系统', priority: 'P0', color: 'pink', desc: '学生通过完成学习任务获得奖励，用于孵化、喂养虚拟宠物，宠物会成长并解锁新功能。', criteria: ['支持猫/狗两种宠物', '4个成长阶段', '学习完成自动奖励'] },
              { id: 'FR-003', name: 'AI宠物角色扮演对话', priority: 'P1', color: 'yellow', desc: '宠物以角色扮演方式与学生对话，包括撒娇卖萌、表达需求、鼓励学习等互动行为。', criteria: ['对话响应时间 < 2秒', '角色扮演一致性 > 90%', '支持语音播报'] },
              { id: 'FR-004', name: '语音通话功能', priority: 'P1', color: 'green', desc: '支持小猫/小狗声线的语音合成，可自动播放宠物回复，也可手动点击播放。', criteria: ['小猫音调 pitch=1.9', '语音清晰度 > 95%', '支持开关控制'] },
              { id: 'FR-005', name: '成长雷达可视化', priority: 'P1', color: 'indigo', desc: '11维度能力评估雷达图，支持多月份对比，自动生成成长报告。', criteria: ['支持11个维度', '3个月数据对比', '自动生成建议'] },
              { id: 'FR-006', name: '3D互动农场', priority: 'P2', color: 'emerald', desc: 'Three.js实现的3D农场场景，学生可以种植作物、收获奖励、装饰农场。', criteria: ['3D场景流畅运行', '支持种植/收获交互', '帧率 > 30fps'] },
            ].map((feature) => (
              <div key={feature.id} className={`border-2 border-${feature.color}-200 rounded-lg p-5`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`font-bold text-${feature.color}-700`}>{feature.id}: {feature.name}</h3>
                  <span className={`px-3 py-1 bg-${feature.color}-100 text-${feature.color}-700 rounded-full text-xs font-semibold`}>
                    优先级: {feature.priority}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">功能描述</h4>
                    <p className="text-sm text-slate-700">{feature.desc}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2 text-sm">验收标准</h4>
                    <ul className="text-sm text-slate-700 space-y-1">
                      {feature.criteria.map((c, i) => <li key={i}>✓ {c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="h-6 w-6 text-yellow-600" />
            3. 非功能性需求
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">⚡ 性能需求</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 页面加载时间: &lt; 2秒</li>
                <li>• API响应时间: &lt; 500ms</li>
                <li>• AI对话响应: &lt; 3秒</li>
                <li>• 语音合成延迟: &lt; 1秒</li>
                <li>• 3D场景帧率: &gt; 30fps</li>
                <li>• 并发用户数: ≥ 1000</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-700 mb-3">🎯 可用性需求</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 系统可用性: 99.9%</li>
                <li>• 故障恢复时间: &lt; 5分钟</li>
                <li>• 数据备份频率: 每日</li>
                <li>• 用户操作成功率: &gt; 95%</li>
                <li>• 学习曲线: &lt; 10分钟</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">🔒 安全性需求</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 数据传输: HTTPS加密</li>
                <li>• 用户认证: JWT Token</li>
                <li>• 密码存储: bcrypt加密</li>
                <li>• 隐私保护: GDPR合规</li>
                <li>• 防SQL注入: 参数化查询</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-5">
              <h3 className="font-bold text-purple-700 mb-3">📱 兼容性需求</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 浏览器: Chrome 90+, Safari 14+</li>
                <li>• 移动端: iOS 14+, Android 10+</li>
                <li>• 屏幕适配: 320px - 2560px</li>
                <li>• 响应式设计: 支持</li>
                <li>• PWA支持: 是</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Layers className="h-6 w-6 text-cyan-600" />
            4. 接口需求
          </h2>
          <div className="space-y-4">
            <div className="border border-cyan-200 rounded-lg p-4">
              <h3 className="font-bold text-cyan-700 mb-2">外部接口</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-cyan-50">
                    <tr>
                      <th className="border border-cyan-200 px-3 py-2 text-left">接口名称</th>
                      <th className="border border-cyan-200 px-3 py-2 text-left">协议</th>
                      <th className="border border-cyan-200 px-3 py-2 text-left">用途</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-cyan-200 px-3 py-2">通义千问API</td>
                      <td className="border border-cyan-200 px-3 py-2">HTTPS/REST</td>
                      <td className="border border-cyan-200 px-3 py-2">AI对话、学习辅导</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-cyan-200 px-3 py-2">Web Speech API</td>
                      <td className="border border-cyan-200 px-3 py-2">浏览器原生</td>
                      <td className="border border-cyan-200 px-3 py-2">语音合成</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="border border-orange-200 rounded-lg p-4">
              <h3 className="font-bold text-orange-700 mb-2">内部API接口</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-orange-50">
                    <tr>
                      <th className="border border-orange-200 px-3 py-2 text-left">接口路径</th>
                      <th className="border border-orange-200 px-3 py-2 text-left">方法</th>
                      <th className="border border-orange-200 px-3 py-2 text-left">功能</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 px-3 py-2">/api/ai-assistant</td>
                      <td className="border border-orange-200 px-3 py-2">POST</td>
                      <td className="border border-orange-200 px-3 py-2">AI助手对话</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-orange-200 px-3 py-2">/api/pet-chat-ai</td>
                      <td className="border border-orange-200 px-3 py-2">POST</td>
                      <td className="border border-orange-200 px-3 py-2">宠物对话</td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 px-3 py-2">/api/growth-radar</td>
                      <td className="border border-orange-200 px-3 py-2">GET</td>
                      <td className="border border-orange-200 px-3 py-2">获取成长数据</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link href="/sow" className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            工作说明书 (SOW)
          </Link>
          <Link href="/demo-script" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center gap-2">
            演示脚本
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
