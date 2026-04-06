'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Cat, Dog, ArrowRight, Sparkles } from 'lucide-react';
import { PetType } from '@/types';

export default function PetHatchPage() {
  const router = useRouter();
  const [selectedPet, setSelectedPet] = useState<PetType | null>(null);
  const [petName, setPetName] = useState('');
  const [step, setStep] = useState<'select' | 'name' | 'hatch'>('select');
  const [hatchProgress, setHatchProgress] = useState(0);

  const handleSelectPet = (type: PetType) => {
    setSelectedPet(type);
    setStep('name');
  };

  const handleStartHatch = () => {
    if (!petName.trim()) return;
    setStep('hatch');
    
    // 模拟孵化进度
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setHatchProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          router.push('/pet-companion');
        }, 1000);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            选择你的学习伙伴 🎉
          </h1>
          <p className="text-lg text-slate-600">
            选择一个宠物蛋，陪伴你一起学习和成长
          </p>
        </div>

        {/* 步骤 1: 选择宠物类型 */}
        {step === 'select' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 小猫 */}
              <button
                onClick={() => handleSelectPet('cat')}
                className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center group-hover:from-pink-200 group-hover:to-purple-200 transition-all">
                    <Cat className="h-16 w-16 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">小猫</h3>
                  <p className="text-slate-600 mb-4">温柔聪明，偶尔傲娇</p>
                  <div className="inline-flex items-center gap-2 text-purple-600 font-semibold">
                    选择小猫 <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </button>

              {/* 小狗 */}
              <button
                onClick={() => handleSelectPet('dog')}
                className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-cyan-200 transition-all">
                    <Dog className="h-16 w-16 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">小狗</h3>
                  <p className="text-slate-600 mb-4">活泼热情，充满活力</p>
                  <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                    选择小狗 <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* 步骤 2: 给宠物取名字 */}
        {step === 'name' && (
          <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                {selectedPet === 'cat' ? (
                  <Cat className="h-12 w-12 text-purple-600" />
                ) : (
                  <Dog className="h-12 w-12 text-blue-600" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                给你的{selectedPet === 'cat' ? '小猫' : '小狗'}取个名字吧
              </h3>
            </div>

            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="输入宠物名字..."
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-400 focus:outline-none text-lg mb-4"
              maxLength={20}
            />

            <button
              onClick={handleStartHatch}
              disabled={!petName.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              开始孵化
            </button>

            <button
              onClick={() => setStep('select')}
              className="w-full mt-3 text-slate-600 py-2 hover:text-slate-900 transition-colors"
            >
              返回重新选择
            </button>
          </div>
        )}

        {/* 步骤 3: 孵化动画 */}
        {step === 'hatch' && (
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white p-12 rounded-2xl shadow-lg mb-6">
              <div className="relative">
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center animate-pulse">
                  <div className="text-6xl">🥚</div>
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-8 w-8 text-yellow-500 animate-spin" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-2">
                孵化中...
              </h3>
              <p className="text-slate-600 mb-6">
                {petName} 即将来到你身边！
              </p>

              {/* 进度条 */}
              <div className="w-full bg-slate-200 rounded-full h-4 mb-4">
                <div
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-4 rounded-full transition-all duration-300"
                  style={{ width: `${hatchProgress}%` }}
                ></div>
              </div>
              <p className="text-slate-600 font-semibold">{hatchProgress}%</p>
            </div>

            {hatchProgress === 100 && (
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-2xl shadow-lg animate-bounce">
                <p className="text-2xl font-bold">🎉 孵化成功！</p>
                <p className="mt-2">{petName} 来到你身边了！</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
