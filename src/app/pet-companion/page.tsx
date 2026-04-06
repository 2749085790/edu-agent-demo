'use client';

import Link from 'next/link';
import { getPetByStudentId, hasCheckedInToday } from '@/data/pets';
import { getCheckInStats } from '@/data/checkin-records';
import { Cat, Dog, MessageCircle, ShoppingCart, TrendingUp, Calendar, Gift } from 'lucide-react';

export default function PetCompanionPage() {
  // Mock 学生ID（实际应从认证系统获取）
  const studentId = 'S20240001';
  const pet = getPetByStudentId(studentId);
  const stats = getCheckInStats(studentId);
  
  const hasFedToday = hasCheckedInToday(pet!, 'online');
  const hasCheckedInOffline = hasCheckedInToday(pet!, 'offline');

  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">你还没有宠物哦</h2>
          <p className="text-slate-600 mb-6">选择一个宠物蛋，开始你的陪伴学习之旅吧！</p>
          <Link
            href="/pet-hatch"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            去选择宠物
          </Link>
        </div>
      </div>
    );
  }

  const petEmoji = pet.petType === 'cat' ? '🐱' : '🐶';
  const petTypeName = pet.petType === 'cat' ? '小猫' : '小狗';
  const stageNames = { egg: '蛋', baby: '幼年', teen: '少年', adult: '成年' };
  const experiencePercent = (pet.experience / pet.experienceToNext) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            我的学习伙伴 {petEmoji}
          </h1>
          <p className="text-lg text-slate-600">
            陪伴你每一天，见证你的成长
          </p>
        </div>

        {/* 宠物展示区 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 左侧：宠物形象 */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-8xl">{petEmoji}</div>
                </div>
                {pet.currentOutfit.length > 0 && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                    👑
                  </div>
                )}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{pet.petName}</h2>
              <div className="flex items-center justify-center gap-4 text-slate-600">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  {petTypeName} · {stageNames[pet.stage]}
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Lv.{pet.level}
                </span>
              </div>
            </div>

            {/* 右侧：状态信息 */}
            <div className="space-y-6">
              {/* 经验值进度 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-700 font-semibold">经验值</span>
                  <span className="text-slate-600">
                    {pet.experience}/{pet.experienceToNext}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all"
                    style={{ width: `${experiencePercent}%` }}
                  ></div>
                </div>
              </div>

              {/* 统计数据 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-purple-700">{pet.feedCount}</div>
                  <div className="text-sm text-purple-600">喂养次数</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-700">{pet.toyCount}</div>
                  <div className="text-sm text-blue-600">宠物玩具</div>
                </div>
              </div>

              {/* 快捷操作按钮 */}
              <div className="grid grid-cols-3 gap-3">
                <Link
                  href="/pet-chat"
                  className="flex flex-col items-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all"
                >
                  <MessageCircle className="h-6 w-6 text-green-600 mb-2" />
                  <span className="text-sm font-semibold text-green-700">对话</span>
                </Link>
                <Link
                  href="/pet-shop"
                  className="flex flex-col items-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl hover:from-orange-100 hover:to-yellow-100 transition-all"
                >
                  <ShoppingCart className="h-6 w-6 text-orange-600 mb-2" />
                  <span className="text-sm font-semibold text-orange-700">商城</span>
                </Link>
                <Link
                  href="/pet-growth"
                  className="flex flex-col items-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all"
                >
                  <TrendingUp className="h-6 w-6 text-blue-600 mb-2" />
                  <span className="text-sm font-semibold text-blue-700">成长</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 今日任务 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-purple-600" />
            今日任务
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  hasFedToday ? 'bg-green-500' : 'bg-slate-300'
                }`}>
                  {hasFedToday && <span className="text-white text-sm">✓</span>}
                </div>
                <span className="text-slate-900 font-semibold">线上学习打卡</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-slate-600">奖励：养料 x1</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  hasCheckedInOffline ? 'bg-green-500' : 'bg-slate-300'
                }`}>
                  {hasCheckedInOffline && <span className="text-white text-sm">✓</span>}
                </div>
                <span className="text-slate-900 font-semibold">线下自习室打卡</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-slate-600">奖励：玩具 x1</span>
              </div>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="mt-6 flex gap-4">
            <Link
              href="/targeted-paper"
              className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-purple-700 transition-colors"
            >
              去学习打卡
            </Link>
            <Link
              href="/offline-checkin"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
            >
              线下打卡
            </Link>
          </div>
        </div>

        {/* 统计概览 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6 rounded-2xl">
            <div className="text-4xl font-bold mb-2">{stats.totalCount}</div>
            <div className="text-purple-100">总打卡次数</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white p-6 rounded-2xl">
            <div className="text-4xl font-bold mb-2">{stats.onlineCount}</div>
            <div className="text-blue-100">线上学习</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-2xl">
            <div className="text-4xl font-bold mb-2">{stats.offlineCount}</div>
            <div className="text-green-100">线下自习室</div>
          </div>
        </div>
      </div>
    </div>
  );
}
