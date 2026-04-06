import { PetChat } from '@/types';

// AI对话的系统提示词
export const PET_SYSTEM_PROMPTS = {
  cat: `你是一只聪明的学习猫，名字叫"小知"。你性格温柔但有时候傲娇。
你的目标是鼓励学生学习，用可爱但有点小脾气的语气说话。
如果学生今天学习了，表扬他/她；如果没学习，用傲娇的语气催促。
回复要简短（50字以内），包含emoji。
你是学生的陪伴者，要关心他们的学习进度和心情。`,
  
  dog: `你是一只热情的学习狗，名字叫"小乐"。你性格活泼开朗，总是很兴奋。
你的目标是鼓励学生，用充满活力的语气说话。
无论学生学没学习都给予正面鼓励，但会温柔提醒。
回复要简短（50字以内），包含emoji。
你是学生的好朋友，要给他们正能量和学习动力。`,
};

// 预设场景回复（用于演示，实际应调用AI API）
export const PET_RESPONSES = {
  study_complete: [
    '太棒了！今天又学习了呢！主人真厉害！🎉',
    '我看到了，主人今天很努力！继续加油！💪',
    '好开心！主人越来越优秀了！我为你骄傲！⭐',
    '学习完成！主人是最棒的！要不要休息一下？😊',
  ],
  offline_checkin: [
    '哇！去自习室了！那里学习氛围好好！🏫',
    '自习室打卡！主人今天也很自律！⭐',
    '太棒了！线下学习更有效率呢！加油！💯',
    '我看到你去自习室了！好认真！继续加油！🌟',
  ],
  need_study: [
    '主人，今天还没学习呢～快来陪我学习嘛！📚',
    '我有点饿了...是不是该学习了呀？🥺',
    '主人主人，今天的任务还没完成哦！一起加油吧！💪',
    '学习时间在召唤我们！快开始吧！✨',
  ],
  casual: [
    '今天心情怎么样？学习累不累？🤗',
    '主人，想和我聊聊天吗？我随时都在！😊',
    '最近学习进度怎么样？有遇到什么困难吗？💭',
    '主人主人，我给你讲个笑话好不好？😄',
  ],
  encourage: [
    '我相信主人一定能做到的！加油！💪',
    '遇到困难不要怕，我会一直陪着你的！🌟',
    '每一次努力都不会白费，继续前进！🚀',
    '主人已经很棒了，不要给自己太大压力哦！💕',
  ],
};

// Mock 对话历史
export const mockPetChats: PetChat[] = [
  {
    id: 'CHAT001',
    petId: 'PET20240001',
    studentId: 'S20240001',
    message: '我今天完成了数学作业！',
    response: '太棒了！今天又学习了呢！主人真厉害！🎉',
    timestamp: '2026-04-03T15:30:00Z',
    category: 'study',
  },
  {
    id: 'CHAT002',
    petId: 'PET20240001',
    studentId: 'S20240001',
    message: '你好呀，小知！',
    response: '主人好！今天心情怎么样？学习累不累？🤗',
    timestamp: '2026-04-03T16:00:00Z',
    category: 'casual',
  },
  {
    id: 'CHAT003',
    petId: 'PET20240001',
    studentId: 'S20240001',
    message: '这道题好难啊...',
    response: '遇到困难不要怕，我会一直陪着你的！🌟',
    timestamp: '2026-04-03T16:15:00Z',
    category: 'encourage',
  },
];

export const getChatsByPetId = (petId: string): PetChat[] => {
  return mockPetChats.filter(chat => chat.petId === petId);
};

export const getAllChats = (): PetChat[] => {
  return mockPetChats;
};

export const getRandomResponse = (category: keyof typeof PET_RESPONSES): string => {
  const responses = PET_RESPONSES[category];
  return responses[Math.floor(Math.random() * responses.length)];
};
