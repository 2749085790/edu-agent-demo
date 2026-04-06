'use client';

import { useState } from 'react';
import { getPetByStudentId } from '@/data/pets';
import { getRecordsByStudentId } from '@/data/checkin-records';
import { MapPin, CheckCircle, AlertCircle } from 'lucide-react';

export default function OfflineCheckInPage() {
  const studentId = 'S20240001';
  const pet = getPetByStudentId(studentId);
  const records = getRecordsByStudentId(studentId).filter(r => r.type === 'offline');
  
  const [reservationCode, setReservationCode] = useState('');
  const [location, setLocation] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleCheckIn = () => {
    if (!reservationCode.trim()) {
      setError('请输入预约码');
      return;
    }

    if (!pet) {
      setError('你还没有宠物，无法打卡');
      return;
    }

    // Mock 打卡逻辑（实际应调用API）
    setSuccess(true);
    setError('');
    
    setTimeout(() => {
      setSuccess(false);
      setReservationCode('');
      setLocation('');
    }, 3000);
  };

  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">你还没有宠物哦</h2>
          <p className="text-slate-600">请先选择宠物后再进行打卡</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            线下自习室打卡 🏫
          </h1>
          <p className="text-lg text-slate-600">
            在自习室输入预约码，获得宠物玩具奖励
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左侧：打卡表单 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">打卡签到</h3>

            {/* 成功提示 */}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">打卡成功！</p>
                    <p className="text-sm text-green-700">获得宠物玩具 x1 🎁</p>
                  </div>
                </div>
              </div>
            )}

            {/* 错误提示 */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl">
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  <p className="font-semibold text-red-900">{error}</p>
                </div>
              </div>
            )}

            {/* 表单 */}
            <div className="space-y-4">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  自习室门店
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-400 focus:outline-none"
                >
                  <option value="">选择门店...</option>
                  <option value="杨择学AI自习室（中关村店）">中关村店</option>
                  <option value="杨择学AI自习室（五道口店）">五道口店</option>
                  <option value="杨择学AI自习室（望京店）">望京店</option>
                  <option value="杨择学AI自习室（西二旗店）">西二旗店</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-2">
                  预约码
                </label>
                <input
                  type="text"
                  value={reservationCode}
                  onChange={(e) => setReservationCode(e.target.value.toUpperCase())}
                  placeholder="输入预约码（如：YZX20240320001）"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-blue-400 focus:outline-none font-mono"
                  maxLength={20}
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">打卡奖励</span>
                </div>
                <p className="text-blue-700">🎁 宠物玩具 x1</p>
                <p className="text-sm text-blue-600 mt-1">可用于兑换宠物装饰</p>
              </div>

              <button
                onClick={handleCheckIn}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all"
              >
                确认打卡
              </button>
            </div>
          </div>

          {/* 右侧：打卡记录 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">打卡记录</h3>
            
            {records.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-slate-600">还没有打卡记录</p>
                <p className="text-sm text-slate-500 mt-2">快去自习室打卡吧！</p>
              </div>
            ) : (
              <div className="space-y-4">
                {records.map(record => (
                  <div key={record.id} className="p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-slate-900">{record.location}</p>
                        <p className="text-sm text-slate-600 font-mono">
                          预约码：{record.reservationCode}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                        ✓ 已完成
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <span>📅 {new Date(record.timestamp).toLocaleDateString('zh-CN')}</span>
                      <span>🕐 {new Date(record.timestamp).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-blue-600 font-semibold">
                      🎁 获得玩具 x{record.reward.amount}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 当前玩具数量 */}
            <div className="mt-6 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl">
              <div className="text-3xl font-bold mb-1">{pet.toyCount}</div>
              <div className="text-blue-100">当前拥有玩具</div>
              <Link
                href="/pet-shop"
                className="inline-block mt-3 text-sm underline hover:text-blue-100"
              >
                去商城兑换装饰 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
