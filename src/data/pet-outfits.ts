import { PetOutfit, PetType } from '@/types';

export const mockPetOutfits: PetOutfit[] = [
  // 小猫装饰
  {
    id: 'OUTFIT_CAT_001',
    petType: 'cat',
    name: '学士帽',
    type: 'accessory',
    toyCost: 5,
    rarity: 'common',
    image: '/pets/cat-outfit-1.png',
    description: '象征知识的小帽子，戴上后看起来很有学问',
  },
  {
    id: 'OUTFIT_CAT_002',
    petType: 'cat',
    name: '学霸披风',
    type: 'clothes',
    toyCost: 15,
    rarity: 'rare',
    image: '/pets/cat-outfit-2.png',
    description: '穿上后学习更有动力，散发智慧光芒',
  },
  {
    id: 'OUTFIT_CAT_003',
    petType: 'cat',
    name: '魔法眼镜',
    type: 'accessory',
    toyCost: 25,
    rarity: 'epic',
    image: '/pets/cat-outfit-3.png',
    description: '传说中的智慧之眼，能看透所有难题',
  },
  {
    id: 'OUTFIT_CAT_004',
    petType: 'cat',
    name: '学霸皇冠',
    type: 'accessory',
    toyCost: 50,
    rarity: 'legendary',
    image: '/pets/cat-outfit-4.png',
    description: '只有连续打卡30天才能解锁的至尊皇冠',
  },
  
  // 小狗装饰
  {
    id: 'OUTFIT_DOG_001',
    petType: 'dog',
    name: '博士眼镜',
    type: 'accessory',
    toyCost: 5,
    rarity: 'common',
    image: '/pets/dog-outfit-1.png',
    description: '智慧的眼神，看起来就很聪明',
  },
  {
    id: 'OUTFIT_DOG_002',
    petType: 'dog',
    name: '学霸围巾',
    type: 'clothes',
    toyCost: 15,
    rarity: 'rare',
    image: '/pets/dog-outfit-2.png',
    description: '温暖的红色围巾，象征学习的热情',
  },
  {
    id: 'OUTFIT_DOG_003',
    petType: 'dog',
    name: '超级英雄披风',
    type: 'clothes',
    toyCost: 25,
    rarity: 'epic',
    image: '/pets/dog-outfit-3.png',
    description: '学习路上的超级英雄，勇敢面对所有挑战',
  },
  {
    id: 'OUTFIT_DOG_004',
    petType: 'dog',
    name: '冠军奖牌',
    type: 'accessory',
    toyCost: 50,
    rarity: 'legendary',
    image: '/pets/dog-outfit-4.png',
    description: '只有连续打卡30天才能解锁的至尊奖牌',
  },
];

export const getOutfitById = (id: string): PetOutfit | undefined => {
  return mockPetOutfits.find(outfit => outfit.id === id);
};

export const getOutfitsByPetType = (petType: PetType): PetOutfit[] => {
  return mockPetOutfits.filter(outfit => outfit.petType === petType);
};

export const getAllOutfits = (): PetOutfit[] => {
  return mockPetOutfits;
};

export const getOutfitsByRarity = (rarity: PetOutfit['rarity']): PetOutfit[] => {
  return mockPetOutfits.filter(outfit => outfit.rarity === rarity);
};
