import { Manor, PlantPlot, Decoration } from '@/types';

// 种植地块配置
const createPlots = (): PlantPlot[] => {
  const plots: PlantPlot[] = [];
  const gridSize = 4; // 4x4网格
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      plots.push({
        id: `plot-${i}-${j}`,
        manorId: 'manor-001',
        position: { x: -4.5 + i * 3, y: -4.5 + j * 3 },
        isUnlocked: i < 2 && j < 2, // 初始解锁4块地
      });
    }
  }
  
  return plots;
};

// Mock 庄园数据
export const mockManor: Manor = {
  id: 'manor-001',
  studentId: 'STU2024001',
  level: 3,
  size: { width: 20, height: 20 },
  plots: createPlots(),
  decorations: [
    {
      id: 'deco-tree-1',
      name: '智慧树',
      type: 'tree',
      position: { x: -8, y: 0, z: -8 },
      modelUrl: '/models/decorations/tree.glb',
      unlocked: true,
    },
    {
      id: 'deco-fence-1',
      name: '木栅栏',
      type: 'fence',
      position: { x: 8, y: 0, z: 0 },
      modelUrl: '/models/decorations/fence.glb',
      unlocked: true,
    },
  ],
  unlockedAreas: ['main', 'garden'],
  coins: 150,
};

// 装饰物模板
export const decorationTemplates: Omit<Decoration, 'position' | 'unlocked'>[] = [
  {
    id: 'deco-fountain',
    name: '许愿池',
    type: 'fountain',
    modelUrl: '/models/decorations/fountain.glb',
  },
  {
    id: 'deco-bench',
    name: '休息长椅',
    type: 'bench',
    modelUrl: '/models/decorations/bench.glb',
  },
  {
    id: 'deco-lamp',
    name: '路灯',
    type: 'lamp',
    modelUrl: '/models/decorations/lamp.glb',
  },
];

// 解锁地块所需金币
export const plotUnlockCosts: Record<number, number> = {
  4: 0,    // 初始4块
  6: 50,   // 解锁到6块
  9: 100,  // 解锁到9块
  12: 200, // 解锁到12块
  16: 500, // 全部解锁
};

// 计算已解锁地块数量
export const getUnlockedPlotsCount = (plots: PlantPlot[]): number => {
  return plots.filter(p => p.isUnlocked).length;
};

// 检查地块是否可以解锁
export const canUnlockPlot = (plots: PlantPlot[], coins: number): boolean => {
  const unlocked = getUnlockedPlotsCount(plots);
  const nextUnlock = Object.keys(plotUnlockCosts)
    .map(Number)
    .find(count => count > unlocked);
  
  if (!nextUnlock) return false;
  
  const cost = plotUnlockCosts[nextUnlock];
  return coins >= cost;
};
