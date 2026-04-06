'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, Users, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function PRDPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
                <FileText className="h-6 w-6" />
                产品需求文档（PRD）
              </h1>
              <p className="text-sm text-slate-600">杨择学AI教育平台 - 宠物庄园系统</p>
            </div>
          </div>
          
          <div className="px-4 py-2 bg-blue-100 rounded-lg text-sm">
            <span className="text-blue-800 font-semibold">版本 v1.0 | 2026.04.04</span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* 产品概述 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">📋 产品概述</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-600" />
                产品定位
              </h3>
              <p className="text-slate-700">
                面向K12学生的AI驱动个性化学习平台，通过游戏化机制提升学习动力和效果，
                构建"线上AI学习+线下自习室"的O2O教育闭环。
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-600" />
                核心价值
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• AI精准诊断，靶向练习，效率提升3倍</li>
                <li>• 游戏化激励，7日留存提升31%</li>
                <li>• O2O联动，付费转化提升200%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 用户画像 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Users className="h-6 w-6" />
            目标用户画像
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-bold text-blue-900 mb-2">👨‍🎓 学生（核心用户）</h3>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>年龄：</strong>10-18岁（小学高年级-高中）</p>
                <p><strong>痛点：</strong>学习效率低、缺乏动力、迷茫</p>
                <p><strong>需求：</strong>精准练习、即时反馈、成就感</p>
                <p><strong>使用场景：</strong>课后复习、周末提升</p>
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
              <h3 className="font-bold text-purple-900 mb-2">👩‍👧 家长（付费用户）</h3>
              <div className="text-sm text-purple-800 space-y-1">
                <p><strong>年龄：</strong>35-50岁</p>
                <p><strong>痛点：</strong>不了解孩子学习情况、辅导困难</p>
                <p><strong>需求：</strong>学情透明、效果可见、省心</p>
                <p><strong>关注点：</strong>成绩提升、学习习惯</p>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold text-green-900 mb-2">🏢 自习室（合作方）</h3>
              <div className="text-sm text-green-800 space-y-1">
                <p><strong>角色：</strong>线下服务提供方</p>
                <p><strong>价值：</strong>线上引流、增加粘性</p>
                <p><strong>收益：</strong>场地费、增值服务</p>
                <p><strong>合作模式：</strong>打卡返佣、联合营销</p>
              </div>
            </div>
          </div>
        </div>

        {/* 功能架构 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">🏗️ 功能架构</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
              <h3 className="font-bold text-lg mb-2">1. AI学情诊断系统</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white/20 rounded p-2">知识点扫描</div>
                <div className="bg-white/20 rounded p-2">薄弱点定位</div>
                <div className="bg-white/20 rounded p-2">AI靶向组卷</div>
                <div className="bg-white/20 rounded p-2">错因分析</div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white">
              <h3 className="font-bold text-lg mb-2">2. 个性化学习引擎</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white/20 rounded p-2">学习计划生成</div>
                <div className="bg-white/20 rounded p-2">动态难度调整</div>
                <div className="bg-white/20 rounded p-2">学习资源推荐</div>
                <div className="bg-white/20 rounded p-2">进度追踪</div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg text-white">
              <h3 className="font-bold text-lg mb-2">3. 游戏化激励系统（本次重点）</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white/20 rounded p-2">3D宠物养成</div>
                <div className="bg-white/20 rounded p-2">庄园种植</div>
                <div className="bg-white/20 rounded p-2">打卡奖励</div>
                <div className="bg-white/20 rounded p-2">道具商店</div>
              </div>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
              <h3 className="font-bold text-lg mb-2">4. O2O联动系统</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white/20 rounded p-2">预约码打卡</div>
                <div className="bg-white/20 rounded p-2">线下奖励</div>
                <div className="bg-white/20 rounded p-2">门店管理</div>
                <div className="bg-white/20 rounded p-2">数据同步</div>
              </div>
            </div>
          </div>
        </div>

        {/* 核心指标 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">📊 核心指标（OKR）</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold text-green-900 mb-2">O1: 提升用户留存率</h3>
              <ul className="space-y-2 text-green-800">
                <li>• KR1: 7日留存率从52.3%提升至68.5% ↑31%</li>
                <li>• KR2: 30日留存率从35.8%提升至45.2% ↑26.3%</li>
                <li>• KR3: 日均学习时长从28分钟提升至42分钟 ↑50%</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">O2: 提升付费转化</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• KR1: 整体付费转化率从8.2%提升至12.5% ↑52.4%</li>
                <li>• KR2: 线下打卡用户转化率提升至28.5% ↑87.5%</li>
                <li>• KR3: 客单价从980元提升至1280元 ↑30.6%</li>
              </ul>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-2">O3: 扩大用户规模</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• KR1: DAU从8920提升至12580 ↑41%</li>
                <li>• KR2: MAU从38100提升至45230 ↑18.7%</li>
                <li>• KR3: 功能使用率提升（宠物庄园71.1%）</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 商业价值 */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">💰 商业价值分析</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-sm opacity-90 mb-1">预计年收入增长</div>
              <div className="text-3xl font-bold">¥180万</div>
              <div className="text-sm mt-1">来自留存提升</div>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-sm opacity-90 mb-1">线下引流收入</div>
              <div className="text-3xl font-bold">¥540万/年</div>
              <div className="text-sm mt-1">45万/月 × 12</div>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-sm opacity-90 mb-1">总ROI</div>
              <div className="text-3xl font-bold">320%</div>
              <div className="text-sm mt-1">投入产出比</div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-sm">
              <strong>投资回报周期：</strong>6个月收回开发成本，12个月实现正向现金流，
              预计年度总收益增长¥720万元，ROI达到320%。
            </p>
          </div>
        </div>

        {/* 实施计划 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">📅 实施路线图</h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-bold text-green-600">Phase 1</div>
              <div className="flex-1 p-3 bg-green-50 rounded-lg">
                <p className="font-semibold text-slate-900">MVP验证（4周）</p>
                <p className="text-sm text-slate-600">基础宠物系统 + 线上打卡奖励</p>
              </div>
              <div className="w-20 text-sm text-slate-600">已完成 ✓</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-bold text-blue-600">Phase 2</div>
              <div className="flex-1 p-3 bg-blue-50 rounded-lg">
                <p className="font-semibold text-slate-900">3D升级（6周）</p>
                <p className="text-sm text-slate-600">3D宠物模型 + 庄园系统 + 种植玩法</p>
              </div>
              <div className="w-20 text-sm text-slate-600">进行中</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-bold text-purple-600">Phase 3</div>
              <div className="flex-1 p-3 bg-purple-50 rounded-lg">
                <p className="font-semibold text-slate-900">O2O联动（4周）</p>
                <p className="text-sm text-slate-600">线下打卡 + 门店管理 + 数据打通</p>
              </div>
              <div className="w-20 text-sm text-slate-600">规划中</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-24 text-sm font-bold text-orange-600">Phase 4</div>
              <div className="flex-1 p-3 bg-orange-50 rounded-lg">
                <p className="font-semibold text-slate-900">AI增强（8周）</p>
                <p className="text-sm text-slate-600">AI宠物对话 + 智能陪伴 + 情感计算</p>
              </div>
              <div className="w-20 text-sm text-slate-600">规划中</div>
            </div>
          </div>
        </div>

        {/* 风险与对策 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">⚠️ 风险与对策</h2>
          
          <div className="space-y-3">
            <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-1">风险1: 游戏化过度影响学习</h3>
              <p className="text-sm text-red-800">
                <strong>对策：</strong>设置学习时间上限，宠物互动与学习任务绑定，
                确保核心学习时间不被占用。
              </p>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-yellow-900 mb-1">风险2: 3D性能问题</h3>
              <p className="text-sm text-yellow-800">
                <strong>对策：</strong>采用LOD技术、模型压缩、按需加载，
                低端设备自动降级为2D版本。
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-blue-900 mb-1">风险3: 线下履约成本</h3>
              <p className="text-sm text-blue-800">
                <strong>对策：</strong>与门店分成模式合作，虚拟奖励为主，
                实体奖励限量发放控制成本。
              </p>
            </div>
          </div>
        </div>

        {/* 总结 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6" />
            产品愿景
          </h2>
          <p className="text-lg mb-4">
            打造中国K12教育领域最具创新性的AI学习平台，
            让每个孩子都能在快乐中高效学习。
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">3倍</div>
              <div className="text-sm opacity-90">学习效率提升</div>
            </div>
            <div>
              <div className="text-3xl font-bold">68.5%</div>
              <div className="text-sm opacity-90">用户留存率</div>
            </div>
            <div>
              <div className="text-3xl font-bold">320%</div>
              <div className="text-sm opacity-90">投资回报率</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
