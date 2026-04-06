import { ParentReport } from '@/types';

export const mockReport: ParentReport = {
  week: '2024年第13周 (3.25-3.31)',
  studyHours: 12.5,
  tasksCompleted: 18,
  focusScore: 82,
  scoreTrend: [
    { date: '3.25', score: 70 },
    { date: '3.26', score: 72 },
    { date: '3.27', score: 71 },
    { date: '3.28', score: 75 },
    { date: '3.29', score: 76 },
    { date: '3.30', score: 78 },
    { date: '3.31', score: 80 },
  ],
  knowledgeComparison: [
    { topic: '一元二次方程', before: 75, after: 88 },
    { topic: '三角形全等', before: 45, after: 58 },
    { topic: '函数基础', before: 70, after: 82 },
    { topic: '相似三角形', before: 42, after: 52 },
  ],
  teacherComment: '明轩本周学习态度积极,数学成绩有明显提升。几何部分仍需加强练习,建议周末安排专项训练。物理受力分析有进步,继续保持!',
  aiSuggestions: [
    '每天安排20分钟几何证明题练习,重点突破三角形全等判定',
    '建立错题本,每周回顾一次本周错题',
    '物理实验题要多画图辅助理解,建议观看实验视频加深印象',
    '保持当前学习节奏,预计下次考试数学可提升至80-85分'
  ]
};
