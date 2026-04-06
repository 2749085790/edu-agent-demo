import { ErrorAnalysis, ErrorCase } from '@/types';

export const mockErrorDistribution: ErrorAnalysis[] = [
  { errorType: '概念不清', count: 12, percentage: 35 },
  { errorType: '计算失误', count: 8, percentage: 24 },
  { errorType: '审题错误', count: 7, percentage: 21 },
  { errorType: '时间不足', count: 4, percentage: 12 },
  { errorType: '其他', count: 3, percentage: 8 },
];

export const mockErrorCases: ErrorCase[] = [
  {
    id: 'e1',
    subject: '数学',
    question: '已知△ABC和△DEF,AB=DE,AC=DF,∠B=∠E,求证:△ABC≌△DEF',
    studentAnswer: '直接使用SAS判定全等',
    correctAnswer: '题目给出的是SSA条件,不能直接判定全等,需要补充条件或改用其他方法',
    errorType: '概念不清',
    aiExplanation: '该同学混淆了SAS和SSA的判定条件。SAS要求两边及夹角对应相等,而本题给出的角不是夹角。这是典型的"边边角"陷阱题。',
    relatedKnowledge: '三角形全等判定定理(SAS/ASA/AAS/SSS)'
  },
  {
    id: 'e2',
    subject: '物理',
    question: '一个物体质量为2kg,受到10N的水平拉力,摩擦力为2N,求加速度',
    studentAnswer: 'a = F/m = 10/2 = 5m/s²',
    correctAnswer: 'a = (F-f)/m = (10-2)/2 = 4m/s²',
    errorType: '审题错误',
    aiExplanation: '该同学忽略了摩擦力的影响,直接用拉力计算。正确做法应先求合力F合=F-f,再代入牛顿第二定律。',
    relatedKnowledge: '牛顿第二定律、受力分析'
  }
];
