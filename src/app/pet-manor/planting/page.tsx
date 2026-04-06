'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, X, Sprout, Clock, Award } from 'lucide-react';
import { cropTemplates } from '@/data/crops';
import { mockInventory, getItemQuantity, removeItem } from '@/data/inventory';
import { itemsDatabase } from '@/data/items';

export default function PlantingPage() {
  const [selectedSeed, setSelectedSeed] = useState<string | null>(null);
  const [selectedPlot, setSelectedPlot] = useState<string>('plot-0-0');
  const [showSuccess, setShowSuccess] = useState(false);

  const inventory = mockInventory;

  // 获取所有种子
  const seeds = itemsDatabase.filter(item => item.type === 'seed');

  const handlePlant = () => {
    if (!selectedSeed) return;
    
    // TODO: 调用API种植
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/pet-manor" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-2xl font-bold text-slate-900">🌱 种植系统</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* 步骤1: 选择种子 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
            选择种子
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {seeds.map((seed) => {
              const quantity = getItemQuantity(inventory, seed.id);
              const isSelected = selectedSeed === seed.id;
              
              return (
                <button
                  key={seed.id}
                  onClick={() => setSelectedSeed(seed.id)}
                  disabled={quantity === 0}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected 
                      ? 'border-green-600 bg-green-50' 
                      : quantity === 0
                      ? 'border-slate-200 bg-slate-50 opacity-50 cursor-not-allowed'
                      : 'border-slate-200 hover:border-green-400 hover:bg-green-50'
                  }`}
                >
                  <div className="text-4xl mb-2">{seed.icon}</div>
                  <h3 className="font-semibold text-slate-900 text-sm">{seed.name}</h3>
                  <p className="text-xs text-slate-600 mt-1">库存: {quantity}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 步骤2: 选择地块 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
            选择地块
          </h2>

          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 16 }, (_, i) => {
              const row = Math.floor(i / 4);
              const col = i % 4;
              const plotId = `plot-${row}-${col}`;
              const isUnlocked = row < 2 && col < 2;
              const isSelected = selectedPlot === plotId;

              return (
                <button
                  key={plotId}
                  onClick={() => isUnlocked && setSelectedPlot(plotId)}
                  disabled={!isUnlocked}
                  className={`aspect-square rounded-lg border-2 flex flex-col items-center justify-center transition-all ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50'
                      : isUnlocked
                      ? 'border-slate-300 hover:border-blue-400 hover:bg-blue-50'
                      : 'border-slate-200 bg-slate-100 cursor-not-allowed'
                  }`}
                >
                  <span className="text-2xl">{isUnlocked ? '🟫' : '🔒'}</span>
                  <span className="text-xs text-slate-600 mt-1">{plotId}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 步骤3: 作物信息 */}
        {selectedSeed && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
              作物信息
            </h2>

            {(() => {
              const cropKey = selectedSeed.replace('seed_', '');
              const cropTemplate = Object.values(cropTemplates).find(c => c.seedId === selectedSeed);
              
              if (!cropTemplate) return null;

              return (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                    <div className="text-6xl">{cropTemplate.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900">{cropTemplate.name}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {cropTemplate.growTime / 60}分钟
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="h-4 w-4" />
                          {cropTemplate.reward?.value}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">种植收益</h4>
                    <p className="text-sm text-green-700">
                      收获后获得: <span className="font-bold">{cropTemplate.reward?.value}</span>
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* 确认种植按钮 */}
        <div className="sticky bottom-4">
          <button
            onClick={handlePlant}
            disabled={!selectedSeed}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              selectedSeed
                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            <Sprout className="h-6 w-6" />
            {selectedSeed ? '确认种植' : '请选择种子'}
          </button>
        </div>
      </div>

      {/* 成功提示 */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center animate-bounce">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">种植成功！</h3>
            <p className="text-slate-600 mb-4">作物正在生长中，请耐心等待...</p>
            <Link 
              href="/pet-manor"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              返回庄园
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
