import { DiagnosisResult } from '@/types';

export const mockDiagnosis: DiagnosisResult = {
  subject: '数学',
  overallScore: 72,
  diagnosedAt: '2024-04-01 14:30',
  aiSummary: '张明轩同学在代数部分表现良好,但几何证明题存在明显薄弱。建议重点强化三角形全等判定和相似三角形知识点,预计2周可见成效。',
  radarData: [
    { skill: '计算能力', score: 85 },
    { skill: '逻辑思维', score: 70 },
    { skill: '空间想象', score: 55 },
    { skill: '应用题理解', score: 68 },
    { skill: '证明推理', score: 50 },
    { skill: '数据分析', score: 75 },
  ],
  knowledgePoints: [
    { name: '一元二次方程', mastery: 'mastered', score: 90, exercises: 45, accuracy: 88 },
    { name: '函数基础', mastery: 'mastered', score: 85, exercises: 38, accuracy: 85 },
    { name: '三角形全等', mastery: 'weak', score: 45, exercises: 22, accuracy: 52 },
    { name: '相似三角形', mastery: 'weak', score: 48, exercises: 18, accuracy: 55 },
    { name: '勾股定理', mastery: 'learning', score: 68, exercises: 30, accuracy: 70 },
    { name: '概率统计', mastery: 'learning', score: 72, exercises: 25, accuracy: 76 },
  ]
};
