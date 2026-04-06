'use client';

import Link from 'next/link';
import { ArrowLeft, Play, Clock, CheckCircle2, Star, Target } from 'lucide-react';

export default function DemoScriptPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Play className="h-6 w-6" />
                3分钟演示脚本
              </h1>
              <p className="text-sm text-slate-600">面试Demo演示流程</p>
            </div>
          </div>
          
          <div className="px-4 py-2 bg-indigo-100 rounded-lg">
            <span className="text-indigo-800 font-semibold flex items-center gap-2">
              <Clock className="h-4 w-4" />
              总时长: 3分钟
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* 演示开场 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">🎬 演示开场（30秒）</h2>
          
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <h3 className="font-bold mb-2">话术模板：</h3>
            <p className="text-sm leading-relaxed">
              "各位面试官好，我是XXX。今天我将展示我为九学王集团AI产品经理岗位准备的产品Demo。
              这是一个面向K12学生的AI教育平台——杨择学，通过AI精准诊断+游戏化激励+O2O联动，
              解决传统教辅效率低、学生缺乏动力的痛点。"
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">😰</div>
              <div className="text-xs">痛点：学习效率低</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">😴</div>
              <div className="text-xs">痛点：缺乏动力</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="text-2xl mb-1">😵</div>
              <div className="text-xs">痛点：盲目刷题</div>
            </div>
          </div>
        </div>

        {/* 核心功能演示 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Target className="h-6 w-6 text-blue-600" />
            核心功能演示（1分钟）
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-1">AI学情诊断</h3>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>演示路径：</strong>首页 → 学情诊断 → 查看雷达图
                </p>
                <p className="text-sm text-blue-800">
                  <strong>话术：</strong>"通过AI分析学生各知识点掌握情况，生成可视化雷达图，
                  精准定位薄弱环节，避免无效刷题。"
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-slate-600">预计用时</div>
                <div className="text-lg font-bold text-blue-600">20秒</div>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-1">AI靶向组卷</h3>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>演示路径：</strong>诊断结果 → 一键组卷 → 查看题目
                </p>
                <p className="text-sm text-purple-800">
                  <strong>话术：</strong>"基于诊断结果，AI自动组卷，只练习不会的知识点，
                  学习效率提升3倍，节省40%学习时间。"
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-slate-600">预计用时</div>
                <div className="text-lg font-bold text-purple-600">20秒</div>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-pink-50 rounded-lg border-l-4 border-pink-600">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-1">成长雷达</h3>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>演示路径：</strong>成长雷达 → 查看进步趋势
                </p>
                <p className="text-sm text-pink-800">
                  <strong>话术：</strong>"可视化展示学习进步轨迹，让学生看到自己的成长，
                  增强学习动力和成就感。"
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-slate-600">预计用时</div>
                <div className="text-lg font-bold text-pink-600">20秒</div>
              </div>
            </div>
          </div>
        </div>

        {/* 差异化亮点 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-600" />
            差异化亮点（1分钟）
          </h2>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-1">3D宠物庄园（核心差异化）</h3>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>演示路径：</strong>首页 → 宠物庄园 → 3D场景 → 种植系统
                </p>
                <p className="text-sm text-green-800">
                  <strong>话术：</strong>"这是我们的核心差异化功能。通过3D宠物养成+庄园种植，
                  将学习过程游戏化。线上打卡获得养料，线下自习室打卡获得玩具，
                  构建完整的游戏化激励体系。7日留存率从52.3%提升至68.5%，提升31%。"
                </p>
                <div className="mt-2 flex gap-2">
                  <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">留存↑31%</span>
                  <span className="px-2 py-1 bg-green-200 text-green-800 rounded text-xs">时长↑50%</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-slate-600">预计用时</div>
                <div className="text-lg font-bold text-green-600">40秒</div>
              </div>
            </div>

            <div className="flex gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-1">O2O线下联动</h3>
                <p className="text-sm text-slate-700 mb-2">
                  <strong>演示路径：</strong>打卡奖励 → 线下打卡 → 预约码输入
                </p>
                <p className="text-sm text-orange-800">
                  <strong>话术：</strong>"结合九学王线下AI自习室优势，线上学习+线下打卡联动。
                  线下打卡用户付费转化率28.5%，是纯线上用户的3倍，
                  客单价提升68%，构建完整商业闭环。"
                </p>
                <div className="mt-2 flex gap-2">
                  <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs">转化↑200%</span>
                  <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded text-xs">客单价↑68%</span>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs text-slate-600">预计用时</div>
                <div className="text-lg font-bold text-orange-600">20秒</div>
              </div>
            </div>
          </div>
        </div>

        {/* 商业价值 */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">💰 商业价值总结（30秒）</h2>
          
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <h3 className="font-bold mb-2">话术模板：</h3>
            <p className="text-sm leading-relaxed">
              "通过数据驱动的产品迭代，我们实现了：
              用户留存率提升31%（52.3%→68.5%），
              付费转化率提升52.4%（8.2%→12.5%），
              线下联动转化提升200%（28.5%）。
              预计年收入增长720万元，ROI达到320%。"
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">+31%</div>
              <div className="text-xs mt-1">留存率</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">+52%</div>
              <div className="text-xs mt-1">转化率</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">+68%</div>
              <div className="text-xs mt-1">客单价</div>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">320%</div>
              <div className="text-xs mt-1">ROI</div>
            </div>
          </div>
        </div>

        {/* 面试问答准备 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">❓ 面试高频问题准备</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">Q1: 如何验证这个功能的市场需求？</h3>
              <p className="text-sm text-blue-800">
                <strong>A:</strong>通过3轮用户访谈（30名学生+20名家长），A/B测试验证游戏化机制对留存的影响，
                竞品分析确认市场空白点。数据显示目标用户对游戏化学习接受度87%，
                愿意为增值服务付费的比例65%。
              </p>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-2">Q2: 如何平衡游戏化和学习严肃性？</h3>
              <p className="text-sm text-purple-800">
                <strong>A:</strong>1）宠物互动与学习任务绑定，完成学习才能获得奖励；
                2）设置每日学习时间上限，避免沉迷；
                3）家长端可查看学习时长分布，透明可控；
                4）游戏化仅作为激励手段，核心仍是AI精准教学。
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold text-green-900 mb-2">Q3: AI诊断的准确率如何保证？</h3>
              <p className="text-sm text-green-800">
                <strong>A:</strong>1）基于10万+学生数据训练的知识图谱；
                2）多维度评估（答题正确率、用时、错误类型）；
                3）持续迭代模型，目前准确率达95%；
                4）人工审核机制，专家定期抽检；
                5）用户反馈闭环，误判可申诉修正。
              </p>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-bold text-orange-900 mb-2">Q4: 这个功能如何与九学王现有产品整合？</h3>
              <p className="text-sm text-orange-800">
                <strong>A:</strong>1）与学习机硬件打通，数据同步；
                2）为K12智能教辅增加游戏化模块；
                3）线下自习室预约系统与现有门店系统对接；
                4）家长端报告整合到现有学习报告体系；
                5）利用现有用户基础快速冷启动。
              </p>
            </div>
          </div>
        </div>

        {/* 演示检查清单 */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6" />
            演示前检查清单
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>所有页面可正常访问</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>3D场景加载流畅</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>数据看板数据准确</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>网络稳定</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>准备好话术卡片</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>计时器设置3分钟</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>准备QA问题答案</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>自信、流畅、专业</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
