import { RiskAlert } from '@/types';

export const mockMetrics = {
  totalStudents: 256,
  weeklyActive: 198,
  activeRate: 77.3,
  renewalRate: 89.5,
  highRiskCount: 12,
  mediumRiskCount: 28,
  lowRiskCount: 45,
};

export const mockRiskAlerts: RiskAlert[] = [
  { studentId: 'S20240089', studentName: '李晓明', riskType: 'churn', riskLevel: 'high', lastActive: '2024-03-28', suggestion: '3天未登录,建议立即联系家长了解情况', handled: false },
  { studentId: 'S20240156', studentName: '王小红', riskType: 'decline', riskLevel: 'high', lastActive: '2024-04-01', suggestion: '数学成绩连续2周下滑,需安排专项辅导', handled: false },
  { studentId: 'S20240203', studentName: '张伟', riskType: 'stagnation', riskLevel: 'medium', lastActive: '2024-03-31', suggestion: '学习进度停滞,建议调整学习计划难度', handled: false },
  { studentId: 'S20240078', studentName: '刘芳', riskType: 'churn', riskLevel: 'medium', lastActive: '2024-03-30', suggestion: '连续5天学习时长不足30分钟,需关注学习动机', handled: true },
  { studentId: 'S20240134', studentName: '陈强', riskType: 'decline', riskLevel: 'low', lastActive: '2024-04-01', suggestion: '物理成绩小幅波动,建议加强练习', handled: false },
];

export const mockActivityTrend = [
  { date: '周一', active: 180, completed: 520 },
  { date: '周二', active: 185, completed: 545 },
  { date: '周三', active: 175, completed: 498 },
  { date: '周四', active: 190, completed: 562 },
  { date: '周五', active: 195, completed: 580 },
  { date: '周六', active: 165, completed: 445 },
  { date: '周日', active: 170, completed: 478 },
];
