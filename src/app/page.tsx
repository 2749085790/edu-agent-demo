'use client';

import Link from 'next/link';
import { Target, TrendingUp, Users, Award, Brain, BarChart3, ArrowRight, Cat, Dog, Gamepad2, MessageCircle } from 'lucide-react';
import Pet3DInteractive from '@/components/pet/Pet3DInteractive';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handlePetChat = () => {
    router.push('/pet-chat');
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section - 以3D宠物为核心 */}
      <section className="relative overflow-hidden py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧：文案区 */}
            <div className="text-left">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
                🎮 全新 AI 宠物陪伴学习系统
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                和宠物一起
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  快乐学习
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                选择你的专属 AI 学习伙伴 🐾
                <br />
                线上打卡获得养料 · 线下自习获得玩具
                <br />
                <span className="text-purple-600 font-semibold">支持3D互动 + 语音通话！</span>
              </p>
              
              {/* 快捷操作按钮 */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link 
                  href="/pet-hatch" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <Cat className="h-5 w-5" />
                  选择宠物
                </Link>
                <button
                  onClick={handlePetChat}
                  className="bg-white text-purple-600 px-6 py-3 rounded-lg text-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 flex items-center gap-2 transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  文字对话
                </button>
                <Link 
                  href="/pet-companion" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <Gamepad2 className="h-5 w-5" />
                  宠物中心
                </Link>
              </div>

              {/* 核心数据 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">3D</div>
                  <div className="text-sm text-slate-600">动态宠物</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-pink-600">🎤</div>
                  <div className="text-sm text-slate-600">语音通话</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">AI</div>
                  <div className="text-sm text-slate-600">智能对话</div>
                </div>
              </div>
            </div>

            {/* 右侧：3D宠物展示 */}
            <div className="relative">
              <Pet3DInteractive 
                petType="cat" 
                petName="小知"
                onChat={handlePetChat}
              />
            </div>
          </div>
        </div>

        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      {/* 宠物特色功能介绍 */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              🐾 为什么选择 AI 宠物陪伴？
            </h2>
            <p className="text-xl text-slate-600">游戏化学习，让进步看得见</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PetFeatureCard
              icon={<Cat className="h-10 w-10 text-purple-600" />}
              title="双宠物选择"
              description="温柔聪明的小猫 or 活泼热情的小狗，你更喜欢谁？"
              color="purple"
            />
            <PetFeatureCard
              icon={<Gamepad2 className="h-10 w-10 text-pink-600" />}
              title="游戏化成长"
              description="从宠物蛋到完全体，4个阶段见证成长历程"
              color="pink"
            />
            <PetFeatureCard
              icon={<MessageCircle className="h-10 w-10 text-blue-600" />}
              title="AI 智能对话"
              description="随时和宠物聊天，获得学习鼓励和心理支持"
              color="blue"
            />
            <PetFeatureCard
              icon={<Award className="h-10 w-10 text-yellow-600" />}
              title="装饰收集"
              description="线下打卡获得玩具，兑换8+套精美装饰"
              color="yellow"
            />
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100">
              <TrendingUp className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-primary-600 mb-2">+35%</div>
              <div className="text-slate-600">平均提分率</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-white rounded-xl border border-cyan-100">
              <Users className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-cyan-600 mb-2">92%</div>
              <div className="text-slate-600">学员留存率</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8/5.0</div>
              <div className="text-slate-600">家长满意度</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            核心功能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-primary-600" />}
              title="智能学情诊断"
              description="AI深度分析学生知识点掌握情况,精准定位薄弱环节,生成能力雷达图"
              href="/diagnosis"
            />
            <FeatureCard
              icon={<Target className="h-8 w-8 text-primary-600" />}
              title="个性化学习计划"
              description="基于诊断结果自动生成每日学习任务,动态调整难度,确保高效提分"
              href="/plan"
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-primary-600" />}
              title="错因归因分析"
              description="智能识别错误类型(概念/计算/审题),提供针对性解析和练习推荐"
              href="/analysis"
            />
            <FeatureCard
              icon={<TrendingUp className="h-8 w-8 text-primary-600" />}
              title="漏洞靶向组卷"
              description="根据诊断报告自动生成补漏试卷,针对高错误率知识点出同类变形题"
              href="/targeted-paper"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-primary-600" />}
              title="学习资源中心"
              description="诊断-学习-练习完整闭环,关联讲解视频、知识总结、例题和练习"
              href="/learning-path"
            />
            <FeatureCard
              icon={<Award className="h-8 w-8 text-primary-600" />}
              title="学情成长雷达"
              description="可视化学生能力模型,用雷达图展示月度能力变化,家长可感知的成长"
              href="/growth-radar"
            />
          </div>
        </div>
      </section>

      {/* Architecture Section - NOW WITH INTERACTIVE BUTTONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            产品闭环架构
          </h2>
          <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center mb-8">
              {/* Step 1: 学情诊断 */}
              <Link 
                href="/diagnosis"
                className="group bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-700 hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div>学情诊断</div>
                <div className="text-xs text-primary-100 mt-1">点击查看</div>
              </Link>

              <ArrowRight className="h-6 w-6 text-primary-600 hidden md:block" />

              {/* Step 2: 学习计划 */}
              <Link 
                href="/plan"
                className="group bg-primary-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div>计划生成</div>
                <div className="text-xs text-primary-100 mt-1">点击查看</div>
              </Link>

              <ArrowRight className="h-6 w-6 text-primary-600 hidden md:block" />

              {/* Step 3: 漏洞靶向组卷 */}
              <Link 
                href="/targeted-paper"
                className="group bg-cyan-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-cyan-700 hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div>学习执行</div>
                <div className="text-xs text-cyan-100 mt-1">智能组卷</div>
              </Link>

              <ArrowRight className="h-6 w-6 text-primary-600 hidden md:block" />

              {/* Step 4: 错因分析 */}
              <Link 
                href="/analysis"
                className="group bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div>错因分析</div>
                <div className="text-xs text-blue-100 mt-1">点击查看</div>
              </Link>

              <ArrowRight className="h-6 w-6 text-primary-600 hidden md:block" />

              {/* Step 5: 成长雷达 */}
              <Link 
                href="/growth-radar"
                className="group bg-slate-700 text-white px-6 py-4 rounded-lg font-semibold hover:bg-slate-800 hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div>反馈报告</div>
                <div className="text-xs text-slate-300 mt-1">成长雷达</div>
              </Link>
            </div>

            <div className="mt-8 text-center text-slate-600">
              <p className="text-lg font-semibold mb-2">数据驱动持续优化,形成提分飞轮效应</p>
              <p className="text-sm text-slate-500">点击上方任意按钮开始体验完整的学习闭环流程</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            立即体验 AI 督学 Agent
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            查看学生端、家长端、运营端完整功能演示
          </p>
          <Link href="/diagnosis" className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-50">
            开始体验 →
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href: string }) {
  return (
    <Link href={href}>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-primary-300 transition-all transform hover:scale-105 cursor-pointer h-full">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
        <div className="mt-4 text-primary-600 text-sm font-semibold flex items-center gap-1">
          了解更多 <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}

function PetFeatureCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
  const colorClasses: Record<string, string> = {
    purple: 'from-purple-50 to-white border-purple-200 hover:border-purple-400',
    pink: 'from-pink-50 to-white border-pink-200 hover:border-pink-400',
    blue: 'from-blue-50 to-white border-blue-200 hover:border-blue-400',
    yellow: 'from-yellow-50 to-white border-yellow-200 hover:border-yellow-400',
  };

  return (
    <div className={`bg-gradient-to-br p-6 rounded-2xl shadow-sm border-2 transition-all transform hover:scale-105 ${colorClasses[color]}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
