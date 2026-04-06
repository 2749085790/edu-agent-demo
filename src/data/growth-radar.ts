import { GrowthRadarReport, RadarDimension } from '@/types';

/**
 * 学情成长雷达 Mock 数据
 * 为家长和老师生成可视化的成长报告
 * 用雷达图展示学生月度能力变化
 */

// 雷达图维度定义
export const radarDimensions: RadarDimension[] = [
  // 认知能力类
  {
    id: 'DIM_SPATIAL',
    name: '空间想象力',
    category: 'cognitive',
    description: '立体几何、图形变换能力',
    targetScore: 85,
  },
  {
    id: 'DIM_LOGIC',
    name: '逻辑推理力',
    category: 'cognitive',
    description: '推理论证、问题分析能力',
    targetScore: 85,
  },
  {
    id: 'DIM_COMPUTE',
    name: '计算能力',
    category: 'cognitive',
    description: '数值运算、公式应用能力',
    targetScore: 90,
  },
  {
    id: 'DIM_EXPRESS',
    name: '表达能力',
    category: 'cognitive',
    description: '数学表述、解题步骤清晰度',
    targetScore: 80,
  },

  // 学习行为类
  {
    id: 'DIM_FOCUS',
    name: '专注度',
    category: 'behavioral',
    description: '学习专注时间、抗干扰能力',
    targetScore: 85,
  },
  {
    id: 'DIM_AUTONOMY',
    name: '自主性',
    category: 'behavioral',
    description: '主动学习、独立解决问题能力',
    targetScore: 80,
  },
  {
    id: 'DIM_ERROR_CORRECTION',
    name: '纠错能力',
    category: 'behavioral',
    description: '改正错题、反思总结能力',
    targetScore: 85,
  },
  {
    id: 'DIM_TRANSFER',
    name: '知识迁移力',
    category: 'behavioral',
    description: '将知识应用于新问题的能力',
    targetScore: 75,
  },

  // 学科能力类
  {
    id: 'DIM_FOUNDATION',
    name: '基础知识掌握',
    category: 'subject',
    description: '数学基本概念、定理掌握度',
    targetScore: 90,
  },
  {
    id: 'DIM_APPLICATION',
    name: '应用能力',
    category: 'subject',
    description: '知识在实际题目中的应用',
    targetScore: 80,
  },
  {
    id: 'DIM_INNOVATION',
    name: '创新思维',
    category: 'subject',
    description: '灵活变通、创意解题能力',
    targetScore: 70,
  },
];

// 模拟学生成长雷达报告
export const mockGrowthRadarReport: GrowthRadarReport = {
  studentId: 'S20240001',
  studentName: '杨浩文',
  reportGeneratedAt: '2026-04-03T14:30:00Z',

  radarData: {
    id: 'RADAR20240315001',
    studentId: 'S20240001',
    period: {
      startDate: '2026-03-03',
      endDate: '2026-04-03',
    },

    dimensions: radarDimensions,

    snapshots: {
      // 当前月份（3月）数据
      'DIM_SPATIAL': [
        {
          dimensionId: 'DIM_SPATIAL',
          score: 72,
          timestamp: '2026-04-03',
          trend: 'up',
          changeRate: 8,
        },
      ],
      'DIM_LOGIC': [
        {
          dimensionId: 'DIM_LOGIC',
          score: 68,
          timestamp: '2026-04-03',
          trend: 'up',
          changeRate: 5,
        },
      ],
      'DIM_COMPUTE': [
        {
          dimensionId: 'DIM_COMPUTE',
          score: 82,
          timestamp: '2026-04-03',
          trend: 'stable',
          changeRate: 1,
        },
      ],
      'DIM_EXPRESS': [
        {
          dimensionId: 'DIM_EXPRESS',
          score: 75,
          timestamp: '2026-04-03',
          trend: 'up',
          changeRate: 3,
        },
      ],
      'DIM_FOCUS': [
        {
          dimensionId: 'DIM_FOCUS',
          score: 78,
          timestamp: '2026-04-03',
          trend: 'up',
          changeRate: 6,
        },
      ],
      'DIM_AUTONOMY': [
        {
          dimensionId: 'DIM_AUTONOMY',
          score: 70,
          timestamp: '2026-04-03',
          trend: 'up',
          changeRate: 4,
        },
      ],
      'DIM_ERROR_CORRECTION': [
        {
          dimensionId: 'DIM_ERROR_CORRECTION',
          score: 76,
          timestamp: '2026-04-03',
          trend: 'up',
          changeRate: 7,
        },
      ],
      'DIM_TRANSFER': [
        {
          dimensionId: 'DIM_TRANSFER',
          score: 62,
          timestamp: '2026-04-03',
          trend: 'down',
          changeRate: -2,
        },
      ],
      'DIM_FOUNDATION': [
        {
          dimensionId: 'DIM_FOUNDATION',
          score: 78,
          timestamp: '2026-04-03',
          trend: 'up',
          changeRate: 5,
        },
      ],
      'DIM_APPLICATION': [
        {
          dimensionId: 'DIM_APPLICATION',
          score: 72,
          timestamp: '2026-04-03',
          trend: 'up',
          changeRate: 6,
        },
      ],
      'DIM_INNOVATION': [
        {
          dimensionId: 'DIM_INNOVATION',
          score: 58,
          timestamp: '2026-04-03',
          trend: 'stable',
          changeRate: 0,
        },
      ],
    },

    summary: {
      overallTrend: 'improving',
      strengths: ['计算能力', '基础知识掌握', '表达能力'],
      needsImprovement: ['知识迁移力', '创新思维', '逻辑推理力'],
      monthlyGrowthRate: 4.6,
      recommendations: [
        '🎯 重点突破"知识迁移力"，通过做变形题提升应用能力',
        '💡 加强创新思维训练，建议每周完成2道创新题',
        '📈 继续保持"计算能力"的优势，同时提升"逻辑推理力"',
        '🔄 利用错题本做好错因反思，提升纠错能力',
        '⏰ 建议每天坚持30分钟专注学习，逐步提升专注度目标',
      ],
    },

    monthlyComparison: {
      currentMonth: {
        '空间想象力': 72,
        '逻辑推理力': 68,
        '计算能力': 82,
        '表达能力': 75,
        '专注度': 78,
        '自主性': 70,
        '纠错能力': 76,
        '知识迁移力': 62,
        '基础知识掌握': 78,
        '应用能力': 72,
        '创新思维': 58,
      },
      previousMonth: {
        '空间想象力': 64,
        '逻辑推理力': 63,
        '计算能力': 81,
        '表达能力': 72,
        '专注度': 72,
        '自主性': 66,
        '纠错能力': 69,
        '知识迁移力': 64,
        '基础知识掌握': 73,
        '应用能力': 66,
        '创新思维': 58,
      },
      monthBeforeLast: {
        '空间想象力': 58,
        '逻辑推理力': 58,
        '计算能力': 78,
        '表达能力': 68,
        '专注度': 65,
        '自主性': 60,
        '纠错能力': 62,
        '知识迁移力': 58,
        '基础知识掌握': 68,
        '应用能力': 58,
        '创新思维': 55,
      },
    },
  },

  // 家长视角
  parentView: {
    headline: '🌟 孩子这个月的成长很不错！超过目标进度5%',
    highlights: [
      '计算能力保持高水平（82分），是孩子的核心竞争力',
      '逻辑推理力进步明显，相比上月提升5分，趋势良好',
      '学习专注度提升6分，说明孩子学习态度有进步',
      '纠错能力提升7分，错题反思做得很认真',
      '总体月度成长率4.6%，整体发展均衡',
    ],
    actionItems: [
      '📚 继续鼓励孩子保持学习热情，尤其是在计算和基础知识方面的优势',
      '🎯 适当增加变形题和综合应用题的练习，强化知识迁移能力',
      '⏱️ 建议制定每日30分钟专注学习计划，帮助孩子进一步提升专注度',
      '💬 每周和孩子交流一次学习心得，了解他在新知识点学习中的困惑',
      '🏆 当孩子达到阶段目标时，给予鼓励和适当奖励，强化正向反馈',
    ],
  },

  // 老师视角
  teacherView: {
    classRanking: {
      overallRank: 12,
      totalStudents: 45,
      improvementRank: 8,
    },
    interventionNeeded: false,
    suggestedAction: '学生各项能力均衡发展，建议继续现有教学策略。重点关注知识迁移力和创新思维的培养，可通过跨章节综合题来提升。',
  },
};

// 获取成长雷达报告
export function getGrowthRadarReport(studentId: string): GrowthRadarReport {
  if (studentId === 'S20240001') {
    return mockGrowthRadarReport;
  }

  // 如果是其他学生，返回修改后的数据
  return {
    ...mockGrowthRadarReport,
    studentId,
    studentName: '学生' + studentId,
    reportGeneratedAt: new Date().toISOString(),
  };
}

// 获取对比数据（多月份对比）
export function getMonthlyComparisonData(studentId: string) {
  return mockGrowthRadarReport.radarData.monthlyComparison;
}
