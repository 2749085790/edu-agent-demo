import { StudyPlan } from '@/types';

export const mockPlan: StudyPlan = {
  week: '2024年第14周 (4.1-4.7)',
  completionRate: 68,
  timeAllocation: [
    { subject: '数学', hours: 5.5 },
    { subject: '物理', hours: 3.5 },
    { subject: '英语', hours: 2.5 },
  ],
  tasks: [
    { id: 't1', date: '2024-04-01', subject: '数学', topic: '三角形全等判定专项练习', priority: 'high', duration: 45, completed: true, type: 'practice' },
    { id: 't2', date: '2024-04-02', subject: '物理', topic: '力学受力分析复习', priority: 'high', duration: 40, completed: true, type: 'review' },
    { id: 't3', date: '2024-04-03', subject: '数学', topic: '相似三角形性质预习', priority: 'medium', duration: 35, completed: true, type: 'preview' },
    { id: 't4', date: '2024-04-04', subject: '英语', topic: 'Unit5 词汇记忆', priority: 'medium', duration: 30, completed: false, type: 'practice' },
    { id: 't5', date: '2024-04-05', subject: '数学', topic: '勾股定理应用题', priority: 'high', duration: 50, completed: false, type: 'practice' },
    { id: 't6', date: '2024-04-06', subject: '物理', topic: '欧姆定律实验题', priority: 'medium', duration: 45, completed: false, type: 'practice' },
    { id: 't7', date: '2024-04-07', subject: '数学', topic: '本周错题回顾', priority: 'high', duration: 40, completed: false, type: 'review' },
  ]
};
