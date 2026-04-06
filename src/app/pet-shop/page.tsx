'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getPetByStudentId } from '@/data/pets';
import { getAllOutfits, getOutfitsByPetType } from '@/data/pet-outfits';
import { PetOutfit } from '@/types';
import { ShoppingBag, Filter, CheckCircle } from 'lucide-react';

export default function PetShopPage() {
  const studentId = 'S20240001';
  const pet = getPetByStudentId(studentId);
  
  const allOutfits = getAllOutfits();
  const outfits = pet ? getOutfitsByPetType(pet.petType) : [];
  
  const [filter, setFilter] = useState<'all' | 'clothes' | 'accessory'>('all');
  const [successMessage, setSuccessMessage] = useState('');

  const filteredOutfits = filter === 'all' 
    ? outfits 
    : outfits.filter(o => o.type === filter);

  const handleRedeem = (outfit: PetOutfit) => {
    if (!pet) return;
    
    if (pet.toyCount < outfit.toyCost) {
      alert('玩具数量不足！');
      return;
    }

    if (pet.unlockedOutfits.includes(outfit.id)) {
      alert('已经拥有该装饰！');
      return;
    }

    // Mock 兑换逻辑
    setSuccessMessage(`成功兑换 ${outfit.name}！`);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">你还没有宠物哦</h2>
          <p className="text-slate-600">请先选择宠物后再访问商城</p>
        </div>
      </div>
    );
  }

  const rarityColors = {
    common: 'bg-slate-100 text-slate-700',
    rare: 'bg-blue-100 text-blue-700',
    epic: 'bg-purple-100 text-purple-700',
    legendary: 'bg-yellow-100 text-yellow-700',
  };

  const rarityNames = {
    common: '普通',
    rare: '稀有',
    epic: '史诗',
    legendary: '传说',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-3">
            <ShoppingBag className="h-10 w-10 text-orange-600" />
            宠物商城
          </h1>
          <p className="text-lg text-slate-600">
            使用玩具兑换装饰，让你的宠物更可爱
          </p>
        </div>

        {/* 成功提示 */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl max-w-2xl mx-auto">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <p className="font-semibold text-green-900">{successMessage}</p>
            </div>
          </div>
        )}

        {/* 当前玩具数量 */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-6 rounded-2xl shadow-lg mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-4xl font-bold mb-1">🎁 {pet.toyCount}</div>
              <div className="text-orange-100">当前拥有玩具</div>
            </div>
            <Link
              href="/offline-checkin"
              className="px-6 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              去获取玩具
            </Link>
          </div>
        </div>

        {/* 筛选器 */}
        <div className="flex items-center gap-4 mb-6">
          <Filter className="h-5 w-5 text-slate-600" />
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'all' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-slate-700 hover:bg-orange-50'
              }`}
            >
              全部
            </button>
            <button
              onClick={() => setFilter('clothes')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'clothes' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-slate-700 hover:bg-orange-50'
              }`}
            >
              衣服
            </button>
            <button
              onClick={() => setFilter('accessory')}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                filter === 'accessory' 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-white text-slate-700 hover:bg-orange-50'
              }`}
            >
              配饰
            </button>
          </div>
        </div>

        {/* 装饰列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOutfits.map(outfit => {
            const isOwned = pet.unlockedOutfits.includes(outfit.id);
            const canAfford = pet.toyCount >= outfit.toyCost;

            return (
              <div
                key={outfit.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* 装饰图片占位 */}
                <div className="h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                  <div className="text-7xl">
                    {outfit.type === 'clothes' ? '👕' : '🎩'}
                  </div>
                </div>

                {/* 装饰信息 */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900">{outfit.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${rarityColors[outfit.rarity]}`}>
                      {rarityNames[outfit.rarity]}
                    </span>
                  </div>

                  <p className="text-slate-600 mb-4 text-sm">{outfit.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎁</span>
                      <span className="text-2xl font-bold text-orange-600">{outfit.toyCost}</span>
                    </div>
                    {isOwned && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        已拥有
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleRedeem(outfit)}
                    disabled={isOwned || !canAfford}
                    className={`w-full py-3 rounded-lg font-semibold transition-all ${
                      isOwned
                        ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                        : canAfford
                        ? 'bg-gradient-to-r from-orange-600 to-yellow-600 text-white hover:from-orange-700 hover:to-yellow-700'
                        : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    {isOwned ? '已拥有' : canAfford ? '兑换' : '玩具不足'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredOutfits.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎁</div>
            <p className="text-slate-600">暂无可兑换的装饰</p>
          </div>
        )}
      </div>
    </div>
  );
}
