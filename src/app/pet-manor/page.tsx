'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, ShoppingBag, Gift, Sprout, Heart, Zap, Home } from 'lucide-react';
import ManorScene from '@/components/manor/ManorScene';
import { mockPet3D, getPetStatusText } from '@/data/pets-3d';
import { mockManor } from '@/data/manor';
import { mockInventory, getTotalItemsCount } from '@/data/inventory';

export default function PetManorPage() {
  const [selectedPlot, setSelectedPlot] = useState<string | null>(null);
  const [showPetInfo, setShowPetInfo] = useState(false);

  const pet = mockPet3D;
  const manor = mockManor;
  const inventory = mockInventory;

  const handlePlotClick = (plotId: string) => {
    setSelectedPlot(plotId);
  };

  const handlePetClick = () => {
    setShowPetInfo(!showPetInfo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">🏡 宠物庄园</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-yellow-100 rounded-lg">
              <span className="text-yellow-800 font-semibold">💰 {manor.coins}</span>
            </div>
            <div className="px-4 py-2 bg-green-100 rounded-lg">
              <span className="text-green-800 font-semibold">🎒 {getTotalItemsCount(inventory)}/{inventory.capacity}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 快捷操作栏 */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex gap-3 overflow-x-auto">
            <Link 
              href="/pet-manor/planting"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
            >
              <Sprout className="h-5 w-5" />
              <span>种植</span>
            </Link>
            <Link 
              href="/pet-manor/shop"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>商店</span>
            </Link>
            <Link 
              href="/pet-manor/rewards"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors whitespace-nowrap"
            >
              <Gift className="h-5 w-5" />
              <span>打卡奖励</span>
            </Link>
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors whitespace-nowrap">
              <Home className="h-5 w-5" />
              <span>我的庄园</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3D场景区域 */}
      <div className="relative" style={{ height: 'calc(100vh - 200px)' }}>
        <ManorScene 
          onPlotClick={handlePlotClick}
          onPetClick={handlePetClick}
        />

        {/* 宠物状态面板 */}
        {showPetInfo && (
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-xs">
            <h3 className="text-lg font-bold text-slate-900 mb-3">🐱 {pet.name}</h3>
            
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">❤️ 饥饿度</span>
                  <span className="font-semibold">{pet.hunger}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all"
                    style={{ width: `${pet.hunger}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">😊 快乐度</span>
                  <span className="font-semibold">{pet.happiness}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full transition-all"
                    style={{ width: `${pet.happiness}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-600">⚡ 能量</span>
                  <span className="font-semibold">{pet.energy}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${pet.energy}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="mt-3 p-2 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-700 italic">"{getPetStatusText(pet)}"</p>
            </div>

            <div className="mt-3 flex gap-2">
              <button className="flex-1 px-3 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors">
                <Heart className="h-4 w-4 inline mr-1" />
                喂食
              </button>
              <button className="flex-1 px-3 py-2 bg-yellow-500 text-white rounded-lg text-sm hover:bg-yellow-600 transition-colors">
                <Zap className="h-4 w-4 inline mr-1" />
                玩耍
              </button>
            </div>
          </div>
        )}

        {/* 选中地块提示 */}
        {selectedPlot && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4">
            <p className="text-slate-900 font-semibold mb-2">
              📍 地块 {selectedPlot}
            </p>
            <div className="flex gap-2">
              <Link 
                href={`/pet-manor/planting?plot=${selectedPlot}`}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                🌱 种植
              </Link>
              <button 
                onClick={() => setSelectedPlot(null)}
                className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors text-sm"
              >
                取消
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 底部信息栏 */}
      <div className="bg-white border-t border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">Lv.{manor.level}</div>
              <div className="text-sm text-slate-600">庄园等级</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {manor.plots.filter(p => p.isUnlocked).length}
              </div>
              <div className="text-sm text-slate-600">已解锁地块</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {manor.plots.filter(p => p.crop).length}
              </div>
              <div className="text-sm text-slate-600">种植中</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
