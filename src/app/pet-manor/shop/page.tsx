'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Filter } from 'lucide-react';
import { itemsDatabase, getItemById } from '@/data/items';
import { mockInventory, getItemQuantity, hasEnoughItems, removeItem, addItem } from '@/data/inventory';
import { mockManor } from '@/data/manor';
import { Item } from '@/types';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<Item['type'] | 'all'>('all');
  const [showSuccess, setShowSuccess] = useState(false);

  const inventory = mockInventory;
  const manor = mockManor;

  // 筛选道具
  const filteredItems = selectedCategory === 'all' 
    ? itemsDatabase 
    : itemsDatabase.filter(item => item.type === selectedCategory);

  const categories = [
    { key: 'all', label: '全部', icon: '🎁' },
    { key: 'seed', label: '种子', icon: '🌱' },
    { key: 'tool', label: '工具', icon: '⛏️' },
    { key: 'food', label: '食物', icon: '🍖' },
    { key: 'fertilizer', label: '肥料', icon: '🧪' },
    { key: 'decoration', label: '装饰', icon: '🏡' },
  ];

  const handleBuy = (itemId: string) => {
    const item = getItemById(itemId);
    if (!item || !item.price) return;

    if (manor.coins < item.price) {
      alert('金币不足！');
      return;
    }

    // TODO: 调用API购买
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
            <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <ShoppingBag className="h-6 w-6" />
              道具商店
            </h1>
          </div>
          
          <div className="px-4 py-2 bg-yellow-100 rounded-lg">
            <span className="text-yellow-800 font-bold text-lg">💰 {manor.coins}</span>
          </div>
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key as any)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 商品列表 */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => {
            const owned = getItemQuantity(inventory, item.id);
            const canAfford = manor.coins >= (item.price || 0);

            return (
              <div 
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow"
              >
                {/* 稀有度标签 */}
                <div className={`inline-block px-2 py-1 rounded text-xs font-semibold mb-2 ${
                  item.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
                  item.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
                  item.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                  'bg-slate-100 text-slate-800'
                }`}>
                  {item.rarity === 'legendary' ? '传说' :
                   item.rarity === 'epic' ? '史诗' :
                   item.rarity === 'rare' ? '稀有' : '普通'}
                </div>

                {/* 道具图标 */}
                <div className="text-6xl text-center my-4">{item.icon}</div>

                {/* 道具信息 */}
                <h3 className="font-bold text-slate-900 mb-1">{item.name}</h3>
                <p className="text-xs text-slate-600 mb-3 line-clamp-2">{item.description}</p>

                {/* 库存和价格 */}
                <div className="flex justify-between items-center text-sm mb-3">
                  <span className="text-slate-600">拥有: {owned}</span>
                  {item.price && (
                    <span className="font-bold text-yellow-600">💰 {item.price}</span>
                  )}
                </div>

                {/* 购买按钮 */}
                {item.price && (
                  <button
                    onClick={() => handleBuy(item.id)}
                    disabled={!canAfford}
                    className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                      canAfford
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {canAfford ? '购买' : '金币不足'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 购买成功提示 */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-blue-600 mb-2">购买成功！</h3>
            <p className="text-slate-600 mb-4">道具已添加到背包</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              继续购物
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
