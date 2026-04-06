import { TargetedPaper } from '@/types';

/**
 * 漏洞靶向组卷 Mock 数据
 * 根据学生诊断报告自动生成补漏试卷
 * 针对高错误率知识点出同类变形题
 */

export const mockTargetedPaper: TargetedPaper = {
  id: 'TP20240315001',
  studentId: 'S20240001',
  generatedAt: '2024-03-15T10:30:00Z',
  
  // 分析出的薄弱知识点
  weakPoints: [
    {
      knowledgePoint: '辅助线构造',
      errorRate: 0.68,
      errorTypes: [
        { type: '方法不当', count: 5 },
        { type: '思路不清', count: 3 },
        { type: '计算错误', count: 1 },
      ],
      correctCount: 4,
      totalCount: 12,
    },
    {
      knowledgePoint: '相似三角形判定',
      errorRate: 0.55,
      errorTypes: [
        { type: '概念混淆', count: 4 },
        { type: '方法误用', count: 2 },
      ],
      correctCount: 5,
      totalCount: 11,
    },
    {
      knowledgePoint: '圆的性质应用',
      errorRate: 0.43,
      errorTypes: [
        { type: '知识点遗漏', count: 3 },
      ],
      correctCount: 4,
      totalCount: 7,
    },
  ],
  
  // 精选补漏题目（5道）
  problems: [
    {
      id: 'PROB001',
      title: '三角形辅助线构造（变形1）',
      content: `在△ABC中，D为BC上一点，BD=2DC。
              若AB=AC=5，BC=6，求AD的长度。
              提示：考虑作延长线或平行线辅助`,
      difficulty: 'medium',
      targetWeakPoint: '辅助线构造',
      keywords: ['辅助线', '延长线', '平行线', '等腰三角形'],
      estimatedTime: 8,
    },
    {
      id: 'PROB002',
      title: '三角形辅助线构造（变形2）',
      content: `在△ABC中，∠ABC=60°，AB=4，BC=5。
              P是AC上一点，且BP平分∠ABC。
              求AP:PC的比值。
              提示：利用角平分线性质，可能需要作辅助线`,
      difficulty: 'medium',
      targetWeakPoint: '辅助线构造',
      keywords: ['角平分线', '辅助线', '比例'],
      estimatedTime: 10,
    },
    {
      id: 'PROB003',
      title: '相似三角形判定（变形1）',
      content: `在梯形ABCD中，AB∥CD，AC、BD交于O点。
              已知AB=8，CD=4，求△AOB与△COD的相似比。
              并计算OA:OC的比值。`,
      difficulty: 'medium',
      targetWeakPoint: '相似三角形判定',
      keywords: ['相似三角形', '梯形', '平行线', '相似比'],
      estimatedTime: 9,
    },
    {
      id: 'PROB004',
      title: '圆的性质综合应用',
      content: `在圆O中，弦AB=8，圆心O到弦AB的距离为3。
              C是圆上一点，∠ACB=30°。
              求：(1) 圆的半径 (2) 圆心角∠AOB
              (3) 若P是劣弧AB上一点，求∠APB的度数`,
      difficulty: 'medium',
      targetWeakPoint: '圆的性质应用',
      keywords: ['圆心到弦的距离', '圆周角', '圆心角', '弦长'],
      estimatedTime: 12,
    },
    {
      id: 'PROB005',
      title: '综合题：辅助线+相似+圆',
      content: `在⊙O中，AB是直径，C、D是圆上两点，
              且CD⊥AB于E点。已知AE=2，EB=8。
              求：(1) 圆的半径 (2) 弦CD的长度
              (3) 若F是AC的中点，求OF的长度`,
      difficulty: 'hard',
      targetWeakPoint: '辅助线构造',
      keywords: ['综合应用', '垂直弦', '圆的性质', '直径', '辅助线'],
      estimatedTime: 15,
    },
  ],
  
  // 补漏试卷总预估时间
  totalEstimatedTime: 54,
  
  // 引导文案
  guidedFocus: `根据您的诊断报告分析，发现以下高频错误：
  
  🔴 核心薄弱点：
  • 辅助线构造（错误率68%）- 在几何证明中，正确的辅助线可以让问题豁然开朗。本试卷精选5道变形题，帮助您掌握常见的辅助线方法。
  • 相似三角形判定（错误率55%）- 混淆了相似的条件和判定方法。本试卷强化AA相似、SAS相似等判定方法的应用。
  
  📋 推荐学习顺序：
  1. 完成试卷中的5道题（预计54分钟）
  2. 对照讲解视频理解解题思路
  3. 做完后查看错因分析，理解为什么出错
  
  💡 学习建议：
  • 建议在2天内完成，每天做2-3道题
  • 重点关注题目的辅助线构造思路，不要急着看答案
  • 对每个错误都要问"为什么错了"，而不只是记住答案
  
  预计完成此试卷后，这两个知识点的掌握度可提升20-30%！
  `,
};

// 根据学生ID返回不同的试卷（用于演示多学生场景）
export function getTargetedPaperByStudentId(studentId: string): TargetedPaper {
  // 目前只支持一个学生的 Mock 数据
  if (studentId === 'S20240001') {
    return mockTargetedPaper;
  }
  
  // 如果有其他学生ID，返回相同的试卷（实际应用中应返回不同的试卷）
  return {
    ...mockTargetedPaper,
    studentId,
    id: `TP${Date.now()}`,
  };
}
