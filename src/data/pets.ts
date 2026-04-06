import { Pet, PetType, PetStage } from '@/types';

export const mockPets: Pet[] = [
  {
    id: 'PET20240001',
    studentId: 'S20240001',
    petType: 'cat',
    petName: '小知',
    stage: 'teen',
    level: 15,
    experience: 350,
    experienceToNext: 500,
    feedCount: 12,
    toyCount: 5,
    currentOutfit: ['OUTFIT_CAT_001'],
    unlockedOutfits: ['OUTFIT_CAT_001'],
    hatchDate: '2026-04-01T10:00:00Z',
    lastFeedDate: '2026-04-03T15:30:00Z',
    lastOfflineCheckIn: '2026-04-02T16:00:00Z',
    createdAt: '2026-04-01T10:00:00Z',
  },
  {
    id: 'PET20240002',
    studentId: 'S20240002',
    petType: 'dog',
    petName: '小乐',
    stage: 'baby',
    level: 5,
    experience: 80,
    experienceToNext: 200,
    feedCount: 3,
    toyCount: 2,
    currentOutfit: [],
    unlockedOutfits: [],
    hatchDate: '2026-03-15T14:00:00Z',
    lastFeedDate: '2026-04-03T10:00:00Z',
    lastOfflineCheckIn: '2026-04-01T17:30:00Z',
    createdAt: '2026-03-15T14:00:00Z',
  },
];

export const getPetById = (id: string): Pet | undefined => {
  return mockPets.find(pet => pet.id === id);
};

export const getPetByStudentId = (studentId: string): Pet | undefined => {
  return mockPets.find(pet => pet.studentId === studentId);
};

export const getAllPets = (): Pet[] => {
  return mockPets;
};

// 计算宠物成长阶段
export const calculatePetStage = (experience: number): PetStage => {
  if (experience < 100) return 'egg';
  if (experience < 500) return 'baby';
  if (experience < 2000) return 'teen';
  return 'adult';
};

// 检查今日是否已打卡
export const hasCheckedInToday = (pet: Pet, type: 'online' | 'offline'): boolean => {
  const today = new Date().toDateString();
  const lastDate = type === 'online' 
    ? new Date(pet.lastFeedDate).toDateString()
    : new Date(pet.lastOfflineCheckIn).toDateString();
  return today === lastDate;
};
