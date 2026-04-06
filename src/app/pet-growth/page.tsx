'use client';

import { getPetByStudentId } from '@/data/pets';
import { getRecordsByPetId } from '@/data/checkin-records';
import { getOutfitById } from '@/data/pet-outfits';
import { Calendar, Award, Gift, TrendingUp } from 'lucide-react';

export default function PetGrowthPage() {
  const studentId = 'S20240001';
  const pet = getPetByStudentId(studentId);
  
  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">你还没有宠物哦</h2>
          <p className="text-slate-600">请先选择宠物后查看成长记录</p>
        </div>
      </div>
    );
  }

  const records = getRecordsByPetId(pet.id);
  const stageNames = { egg: '🥚 蛋', baby: '🐾 幼年', teen: '🌟 少年', adult: '👑 成年' };
  const stageMilestones = {
    egg: '经验值达到 100',
    baby: '经验值达到 500',
    teen: '经验值达到 2000',
    adult: '成为完全体！',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            {pet.petName} 的成长历程 📈
          </h1>
          <p className="text-lg text-slate-600">
            记录每一个成长瞬间
          </p>
        </div>

        {/* 宠物信息卡片 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-6xl mb-2">
                {pet.petType === 'cat' ? '🐱' : '🐶'}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{pet.petName}</h3>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">Lv.{pet.level}</div>
              <div className="text-slate-600">等级</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {stageNames[pet.stage]}
              </div>
              <div className="text-slate-600">成长阶段</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">
                {new Date(pet.hatchDate).toLocaleDateString('zh-CN')}
              </div>
              <div className="text-slate-600">孵化日期</div>
            </div>
          </div>
        </div>

        {/* 成长里程碑 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-yellow-600" />
            成长里程碑
          </h3>
          <div className="space-y-4">
            {(['egg', 'baby', 'teen', 'adult'] as const).map((stage, index) => {
              const stages = ['egg', 'baby', 'teen', 'adult'];
              const currentStageIndex = stages.indexOf(pet.stage);
              const isCompleted = index <= currentStageIndex;
              const isCurrent = index === currentStageIndex;

              return (
                <div
                  key={stage}
                  className={`flex items-center gap-4 p-4 rounded-xl ${
                    isCurrent ? 'bg-yellow-50 border-2 border-yellow-300' : 
                    isCompleted ? 'bg-green-50' : 'bg-slate-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    isCompleted ? 'bg-green-500' : 'bg-slate-300'
                  }`}>
                    {isCompleted ? '✓' : '○'}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-slate-900">
                      {stageNames[stage]}
                    </div>
                    <div className="text-sm text-slate-600">
                      {stageMilestones[stage]}
                    </div>
                  </div>
                  {isCurrent && (
                    <span className="px-3 py-1 bg-yellow-400 text-white rounded-full text-sm font-semibold">
                      当前阶段
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 打卡记录时间线 */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-blue-600" />
            打卡记录
          </h3>

          {records.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-slate-600">还没有打卡记录</p>
            </div>
          ) : (
            <div className="space-y-4">
              {records.map((record, index) => (
                <div key={record.id} className="flex gap-4">
                  {/* 时间线 */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      record.type === 'online' ? 'bg-purple-500' : 'bg-blue-500'
                    }`}>
                      {record.type === 'online' ? (
                        <TrendingUp className="h-5 w-5 text-white" />
                      ) : (
                        <Gift className="h-5 w-5 text-white" />
                      )}
                    </div>
                    {index < records.length - 1 && (
                      <div className="w-0.5 h-12 bg-slate-200"></div>
                    )}
                  </div>

                  {/* 记录内容 */}
                  <div className="flex-1 pb-6">
                    <div className="bg-slate-50 p-4 rounded-xl">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            record.type === 'online' 
                              ? 'bg-purple-100 text-purple-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {record.type === 'online' ? '线上学习' : '线下自习室'}
                          </span>
                          {record.type === 'offline' && record.location && (
                            <p className="text-sm text-slate-600 mt-2">{record.location}</p>
                          )}
                        </div>
                        <span className="text-sm text-slate-500">
                          {new Date(record.timestamp).toLocaleDateString('zh-CN')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-600 font-semibold mt-2">
                        🎁 获得 {record.reward.type === 'feed' ? '养料' : '玩具'} x{record.reward.amount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
