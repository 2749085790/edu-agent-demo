import { Crop } from '@/types';

// 作物模板
export const cropTemplates = {
  knowledge_tree: {
    id: 'knowledge_tree',
    name: '知识树',
    seedId: 'seed_knowledge',
    growthStages: 5,
    growTime: 3600, // 1小时（秒）
    icon: '🌳',
    reward: {
      type: 'study_material',
      value: '数学练习题x10',
    },
  },
  wisdom_flower: {
    id: 'wisdom_flower',
    name: '智慧花',
    seedId: 'seed_wisdom',
    growthStages: 5,
    growTime: 7200, // 2小时
    icon: '🌸',
    reward: {
      type: 'study_material',
      value: '英语单词卡x20',
    },
  },
  math_carrot: {
    id: 'math_carrot',
    name: '数学萝卜',
    seedId: 'seed_math',
    growthStages: 4,
    growTime: 1800, // 30分钟
    icon: '🥕',
    reward: {
      type: 'study_material',
      value: '口算题x15',
    },
  },
  english_corn: {
    id: 'english_corn',
    name: '英语玉米',
    seedId: 'seed_english',
    growthStages: 4,
    growTime: 2700, // 45分钟
    icon: '🌽',
    reward: {
      type: 'study_material',
      value: '阅读理解x5',
    },
  },
  science_sunflower: {
    id: 'science_sunflower',
    name: '科学向日葵',
    seedId: 'seed_science',
    growthStages: 5,
    growTime: 5400, // 1.5小时
    icon: '🌻',
    reward: {
      type: 'study_material',
      value: '科学实验视频x3',
    },
  },
};

// 创建作物实例
export const createCrop = (
  templateId: string,
  plantedAt: Date = new Date()
): Crop => {
  const template = cropTemplates[templateId as keyof typeof cropTemplates];
  if (!template) {
    throw new Error(`作物模板不存在: ${templateId}`);
  }

  const readyAt = new Date(plantedAt.getTime() + template.growTime * 1000);

  return {
    id: `crop-${Date.now()}`,
    name: template.name,
    seedId: template.seedId,
    growthStage: 0,
    maxStages: template.growthStages,
    plantedAt: plantedAt.toISOString(),
    readyAt: readyAt.toISOString(),
    isReady: false,
    reward: template.reward,
  };
};

// 计算作物生长进度
export const getCropProgress = (crop: Crop): number => {
  const now = Date.now();
  const planted = new Date(crop.plantedAt!).getTime();
  const ready = new Date(crop.readyAt).getTime();
  
  const progress = ((now - planted) / (ready - planted)) * 100;
  return Math.min(100, Math.max(0, progress));
};

// 计算当前生长阶段
export const getCurrentGrowthStage = (crop: Crop): number => {
  const progress = getCropProgress(crop);
  const stageProgress = 100 / crop.maxStages;
  return Math.min(crop.maxStages, Math.floor(progress / stageProgress));
};

// 检查作物是否成熟
export const isCropReady = (crop: Crop): boolean => {
  return Date.now() >= new Date(crop.readyAt).getTime();
};

// 获取作物阶段图标
export const getCropStageIcon = (crop: Crop): string => {
  const stage = getCurrentGrowthStage(crop);
  const templates = Object.values(cropTemplates);
  const template = templates.find(t => t.id === crop.seedId.replace('seed_', ''));
  
  if (!template) return '🌱';
  
  if (stage === 0) return '🌱'; // 种子
  if (stage < crop.maxStages) return '🌿'; // 生长中
  return template.icon; // 成熟
};
