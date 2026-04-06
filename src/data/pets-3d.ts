import { Pet3D } from '@/types';

// Mock 3D宠物数据
export const mockPet3D: Pet3D = {
  id: 'pet-3d-001',
  studentId: 'STU2024001',
  name: '小知',
  modelUrl: '/models/cat.glb',
  position: { x: 0, y: 0, z: 0 },
  rotation: 0,
  currentAnimation: 'idle',
  hunger: 80,
  happiness: 90,
  energy: 85,
  lastFeedTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2小时前
  lastPlayTime: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5小时前
};

// 宠物动画配置
export const petAnimations = {
  idle: {
    name: 'Idle',
    duration: 2.0,
    loop: true,
  },
  walk: {
    name: 'Walk',
    duration: 1.5,
    loop: true,
  },
  eat: {
    name: 'Eat',
    duration: 3.0,
    loop: false,
  },
  play: {
    name: 'Play',
    duration: 2.5,
    loop: false,
  },
  sleep: {
    name: 'Sleep',
    duration: 4.0,
    loop: true,
  },
};

// 宠物食物
export const petFoods = [
  {
    id: 'food-fish',
    name: '小鱼干',
    icon: '🐟',
    hungerRestore: 20,
    happinessRestore: 10,
  },
  {
    id: 'food-milk',
    name: '牛奶',
    icon: '🥛',
    hungerRestore: 15,
    happinessRestore: 15,
  },
  {
    id: 'food-premium',
    name: '高级猫粮',
    icon: '🍖',
    hungerRestore: 40,
    happinessRestore: 30,
  },
];

// 获取宠物状态文本
export const getPetStatusText = (pet: Pet3D): string => {
  if (pet.hunger < 30) return '我饿了...';
  if (pet.energy < 30) return '好困啊...';
  if (pet.happiness < 40) return '有点无聊...';
  if (pet.happiness > 80) return '今天真开心！';
  return '状态不错！';
};

// 计算宠物状态变化
export const updatePetStats = (pet: Pet3D, action: 'feed' | 'play' | 'rest'): Pet3D => {
  const updated = { ...pet };
  
  switch (action) {
    case 'feed':
      updated.hunger = Math.min(100, updated.hunger + 30);
      updated.happiness = Math.min(100, updated.happiness + 10);
      updated.lastFeedTime = new Date().toISOString();
      break;
    case 'play':
      updated.happiness = Math.min(100, updated.happiness + 25);
      updated.energy = Math.max(0, updated.energy - 15);
      updated.lastPlayTime = new Date().toISOString();
      break;
    case 'rest':
      updated.energy = Math.min(100, updated.energy + 40);
      updated.hunger = Math.max(0, updated.hunger - 10);
      break;
  }
  
  return updated;
};
