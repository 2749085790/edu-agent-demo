import { Item } from '@/types';

// 道具数据库
export const itemsDatabase: Item[] = [
  // 工具类
  {
    id: 'hoe_basic',
    name: '基础锄头',
    type: 'tool',
    icon: '⛏️',
    description: '用于开垦土地的基础工具',
    rarity: 'common',
    price: 0,
  },
  {
    id: 'hoe_rare',
    name: '黄金锄头',
    type: 'tool',
    icon: '✨',
    description: '稀有工具，种植速度+50%',
    rarity: 'rare',
    price: 100,
  },
  {
    id: 'watering_can',
    name: '洒水壶',
    type: 'tool',
    icon: '💧',
    description: '为作物浇水，加速生长',
    rarity: 'common',
    price: 20,
  },
  
  // 种子类
  {
    id: 'seed_knowledge',
    name: '知识树种子',
    type: 'seed',
    icon: '🌰',
    description: '种植后获得数学练习题',
    rarity: 'common',
    price: 10,
  },
  {
    id: 'seed_wisdom',
    name: '智慧花种子',
    type: 'seed',
    icon: '🌺',
    description: '种植后获得英语单词卡',
    rarity: 'common',
    price: 10,
  },
  {
    id: 'seed_math',
    name: '数学萝卜种子',
    type: 'seed',
    icon: '🥕',
    description: '种植后获得口算题',
    rarity: 'common',
    price: 5,
  },
  {
    id: 'seed_english',
    name: '英语玉米种子',
    type: 'seed',
    icon: '🌽',
    description: '种植后获得阅读理解',
    rarity: 'common',
    price: 5,
  },
  {
    id: 'seed_science',
    name: '科学向日葵种子',
    type: 'seed',
    icon: '🌻',
    description: '种植后获得科学实验视频',
    rarity: 'rare',
    price: 30,
  },
  {
    id: 'seed_legendary',
    name: '传说之种',
    type: 'seed',
    icon: '💎',
    description: '稀有种子，收获传说奖励',
    rarity: 'legendary',
    price: 200,
  },
  
  // 肥料类
  {
    id: 'fertilizer_basic',
    name: '基础肥料',
    type: 'fertilizer',
    icon: '🧪',
    description: '加速作物生长20%',
    rarity: 'common',
    price: 15,
  },
  {
    id: 'fertilizer_premium',
    name: '高级营养液',
    type: 'fertilizer',
    icon: '💊',
    description: '加速作物生长50%',
    rarity: 'rare',
    price: 50,
  },
  
  // 食物类
  {
    id: 'food-fish',
    name: '小鱼干',
    type: 'food',
    icon: '🐟',
    description: '宠物最爱，恢复20点饥饿度',
    rarity: 'common',
    price: 10,
  },
  {
    id: 'food-milk',
    name: '牛奶',
    type: 'food',
    icon: '🥛',
    description: '营养美味，恢复15点饥饿度和快乐度',
    rarity: 'common',
    price: 15,
  },
  {
    id: 'food-premium',
    name: '高级猫粮',
    type: 'food',
    icon: '🍖',
    description: '顶级美食，恢复40点饥饿度和30点快乐度',
    rarity: 'rare',
    price: 50,
  },
  
  // 装饰类
  {
    id: 'deco-fountain',
    name: '许愿池',
    type: 'decoration',
    icon: '⛲',
    description: '美丽的许愿池，提升庄园等级',
    rarity: 'epic',
    price: 300,
  },
  {
    id: 'deco-bench',
    name: '休息长椅',
    type: 'decoration',
    icon: '🪑',
    description: '宠物可以在这里休息',
    rarity: 'common',
    price: 80,
  },
  {
    id: 'deco-lamp',
    name: '花园路灯',
    type: 'decoration',
    icon: '💡',
    description: '点亮庄园的夜晚',
    rarity: 'common',
    price: 60,
  },
];

// 根据ID获取道具
export const getItemById = (itemId: string): Item | undefined => {
  return itemsDatabase.find(item => item.id === itemId);
};

// 根据类型筛选道具
export const getItemsByType = (type: Item['type']): Item[] => {
  return itemsDatabase.filter(item => item.type === type);
};

// 根据稀有度筛选道具
export const getItemsByRarity = (rarity: Item['rarity']): Item[] => {
  return itemsDatabase.filter(item => item.rarity === rarity);
};
