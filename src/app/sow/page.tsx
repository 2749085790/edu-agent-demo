'use client'

import Link from 'next/link'
import { ArrowLeft, FileText, Target, Users, Calendar, CheckCircle2 } from 'lucide-react'

export default function SOWPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="h-6 w-6" />
                工作说明书 (SOW)
              </h1>
              <p className="text-sm text-slate-600">Statement of Work</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-blue-100 rounded-lg">
            <span className="text-blue-800 font-semibold">版本 v1.0 | 2026.04.04</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">工作说明书概述</h2>
          <p className="text-lg leading-relaxed opacity-95">
            本文档定义了"杨择学AI督学Agent"项目的完整工作范围、交付物、时间节点和验收标准。
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            1. 项目背景与目标
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">业务背景</h3>
              <p className="text-slate-700 leading-relaxed">
                九学王集团作为K12教育领域的创新企业，面临传统教辅模式的三大痛点：
              </p>
              <ul className="mt-2 space-y-2 text-slate-700">
                <li>• <strong>学习效率低：</strong>传统题海战术无法精准定位薄弱点</li>
                <li>• <strong>学习动力不足：</strong>缺乏有效激励机制</li>
                <li>• <strong>O2O协同弱：</strong>线上学习与线下自习室缺乏联动</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">项目目标</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">40%</div>
                  <div className="text-sm text-slate-700">提升学习效率</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">60%</div>
                  <div className="text-sm text-slate-700">提升学习完成率</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
                  <div className="text-sm text-slate-700">用户满意度目标</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            2. 工作范围
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">✓ 包含在内 (In Scope)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ AI学习诊断系统（薄弱点分析、个性化出题）</li>
                <li>✓ 虚拟宠物激励系统（孵化、养成、AI对话）</li>
                <li>✓ 语音通话功能（小猫/小狗声线语音合成）</li>
                <li>✓ 成长雷达可视化（11维度能力评估）</li>
                <li>✓ 3D互动农场（Three.js实现）</li>
                <li>✓ 家长报告生成与推送</li>
                <li>✓ 线上线下打卡联动系统</li>
              </ul>
            </div>
            <div className="border-2 border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">✗ 不包含 (Out of Scope)</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✗ 移动APP原生开发（iOS/Android）</li>
                <li>✗ 硬件设备集成（如学习机、平板）</li>
                <li>✗ 多语言国际化支持</li>
                <li>✗ 第三方内容版权采购</li>
                <li>✗ 大规模并发架构优化（>10万用户）</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-orange-600" />
            3. 项目里程碑
          </h2>
          <div className="space-y-4">
            {[
              { phase: 'M1: 需求确认', date: '2026.04.01 - 2026.04.10', desc: '完成PRD评审、用户故事确认', status: '已完成', color: 'green' },
              { phase: 'M2: 原型设计', date: '2026.04.11 - 2026.04.20', desc: '完成UI设计稿、交互原型', status: '进行中', color: 'blue' },
              { phase: 'M3: 核心开发', date: '2026.04.21 - 2026.05.15', desc: '完成AI诊断、宠物系统、3D农场', status: '待开始', color: 'gray' },
              { phase: 'M4: 测试优化', date: '2026.05.16 - 2026.05.25', desc: '功能测试、性能优化、Bug修复', status: '待开始', color: 'gray' },
              { phase: 'M5: 上线发布', date: '2026.05.26 - 2026.05.31', desc: '生产环境部署、灰度发布', status: '待开始', color: 'gray' },
            ].map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${
                  milestone.color === 'green' ? 'bg-green-500' :
                  milestone.color === 'blue' ? 'bg-blue-500' : 'bg-slate-400'
                }`}>
                  M{index + 1}
                </div>
                <div className="flex-1 bg-slate-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900">{milestone.phase}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      milestone.status === '已完成' ? 'bg-green-100 text-green-700' :
                      milestone.status === '进行中' ? 'bg-blue-100 text-blue-700' :
                      'bg-slate-200 text-slate-600'
                    }`}>
                      {milestone.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">{milestone.date}</p>
                  <p className="text-sm text-slate-700">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Users className="h-6 w-6 text-indigo-600" />
            4. 团队配置
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-lg p-5">
              <h3 className="font-bold text-indigo-700 mb-3">核心团队</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 产品经理：1人</li>
                <li>• UI/UX设计师：1人</li>
                <li>• 前端开发：2人</li>
                <li>• 后端开发：2人</li>
                <li>• AI算法工程师：1人</li>
                <li>• QA测试：1人</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-5">
              <h3 className="font-bold text-purple-700 mb-3">技术资源</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• 云服务器：2核4G × 2台</li>
                <li>• 数据库：MySQL 8.0</li>
                <li>• AI API：通义千问 qwen-plus</li>
                <li>• CDN加速：阿里云CDN</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-slate-200">
          <Link href="/demo-script" className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">
            <ArrowLeft className="h-5 w-5" />
            演示脚本
          </Link>
          <Link href="/sor" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all flex items-center gap-2">
            需求规格说明书 (SOR)
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
