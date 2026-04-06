/**
 * AI Agent 示例对话数据
 * 
 * 用途：演示用户输入与 AI 结构化输出
 * 数量：5 个典型场景
 * 格式：用户输入 + JSON 响应
 */

import { AgentResponse } from './agent-prompt';

export interface ExampleConversation {
  /** 场景标题 */
  scenario: string;
  /** 用户输入 */
  userInput: string;
  /** AI 响应 */
  aiResponse: AgentResponse;
}

export const exampleConversations: ExampleConversation[] = [
  // ============================================
  // 示例 1：月考提分冲刺
  // ============================================
  {
    scenario: '月考提分冲刺',
    userInput: '我下周数学月考，现在只能考 70 分左右，怎么快速提分到 85 分？',
    aiResponse: {
      currentProblem: '距离月考还有 1 周，时间紧迫。根据你目前 70 分的成绩，主要失分点在几何证明题和相似三角形应用题，这两类题型在月考中占比约 30-35 分。',
      weakPoints: [
        '三角形全等判定（掌握度 45%）',
        '相似三角形性质（掌握度 48%）',
        '几何证明题解题思路（练习量不足）',
      ],
      todaySuggestion: {
        focus: '突破几何证明题高频考点',
        tasks: [
          {
            subject: '数学',
            topic: '三角形全等判定专项练习（SAS/ASA/AAS/SSS）',
            duration: 40,
            method: '专项练习',
          },
          {
            subject: '数学',
            topic: '相似三角形性质复习+例题 5 道',
            duration: 35,
            method: '概念复习',
          },
          {
            subject: '数学',
            topic: '近 3 次考试几何题错题回顾',
            duration: 25,
            method: '错题回顾',
          },
        ],
        estimatedTotalMinutes: 100,
      },
      threeDayPlan: [
        {
          day: '第1天',
          focus: '三角形全等判定突破',
          keyTasks: [
            '完成 20 道全等判定专项练习题',
            '整理全等判定解题模板（4 种方法适用场景）',
            '错题回顾并标注错因',
          ],
        },
        {
          day: '第2天',
          focus: '相似三角形强化',
          keyTasks: [
            '复习相似三角形判定定理和性质',
            '完成 15 道相似三角形应用题',
            '总结"相似+全等"综合题解题思路',
          ],
        },
        {
          day: '第3天',
          focus: '真题模拟+查漏补缺',
          keyTasks: [
            '限时完成一套月考真题卷（60 分钟）',
            '批改并分析失分点',
            '针对性复习薄弱环节',
          ],
        },
      ],
      riskAlert: {
        level: 'medium',
        type: 'fatigue',
        description: '1 周冲刺强度较大，可能出现学习疲劳',
        suggestion: '建议每学习 40 分钟休息 10 分钟，保证每天 8 小时睡眠，适当运动放松',
      },
      needIntervention: true,
      interventionSuggestion: '建议家长本周每晚检查学习计划完成情况，给予鼓励和支持；建议督学老师周三进行一次模拟测试，评估复习效果并调整计划。',
      encouragement: '你已经意识到要主动提分，这是非常棒的开始！按照这个计划坚持 1 周，几何部分提升 10-15 分完全有可能。相信自己，你能行！💪',
    },
  },

  // ============================================
  // 示例 2：错因分析请求
  // ============================================
  {
    scenario: '错题求助与思路引导',
    userInput: '这道题我不会做：已知△ABC和△DEF，AB=DE，AC=DF，∠B=∠E，求证△ABC≌△DEF。我直接用了 SAS，但是错了。',
    aiResponse: {
      currentProblem: '这是一道典型的"边边角（SSA）"陷阱题。你错误地使用了 SAS 判定，但题目给出的角不是夹角，不能直接判定全等。这说明你对全等判定定理的适用条件还不够清晰。',
      weakPoints: [
        '全等判定定理适用条件混淆',
        'SSA 不能判定全等的理解',
        '几何证明题审题能力',
      ],
      todaySuggestion: {
        focus: '理清全等判定定理的适用条件',
        tasks: [
          {
            subject: '数学',
            topic: '复习 4 种全等判定方法（SAS/ASA/AAS/SSS）的适用条件',
            duration: 25,
            method: '概念复习',
          },
          {
            subject: '数学',
            topic: '完成 10 道"判断能否判定全等"的辨析题',
            duration: 30,
            method: '专项练习',
          },
          {
            subject: '数学',
            topic: '画思维导图：全等判定方法对比',
            duration: 20,
            method: '概念复习',
          },
        ],
        estimatedTotalMinutes: 75,
      },
      threeDayPlan: [
        {
          day: '第1天',
          focus: '全等判定定理梳理',
          keyTasks: [
            '复习教材中 4 种判定方法的证明过程',
            '完成辨析练习题 10 道',
            '制作判定方法对比表',
          ],
        },
        {
          day: '第2天',
          focus: 'SSA 陷阱题专项训练',
          keyTasks: [
            '完成 15 道 SSA 陷阱题',
            '总结"何时 SSA 可以判定全等"（直角三角形 HL）',
            '错题整理与错因分析',
          ],
        },
        {
          day: '第3天',
          focus: '综合应用+审题训练',
          keyTasks: [
            '完成 8 道全等证明综合题',
            '练习"读题→标记条件→选择判定方法"的审题流程',
            '回顾本周错题',
          ],
        },
      ],
      riskAlert: {
        level: 'low',
        type: 'stagnation',
        description: '概念理解存在误区，如不及时纠正可能影响后续几何学习',
        suggestion: '建议 3 天内完成专项训练，通过辨析题加深理解',
      },
      needIntervention: false,
      interventionSuggestion: '',
      encouragement: '犯错误是学习的最好机会！你通过这道题发现了自己对全等判定条件的理解盲区，这比做对 10 道题更有价值。继续加油！🌟',
    },
  },

  // ============================================
  // 示例 3：学习动机下降
  // ============================================
  {
    scenario: '学习动机下降干预',
    userInput: '我最近不想学习了，感觉怎么努力成绩都不提高，好烦啊。',
    aiResponse: {
      currentProblem: '你目前可能遇到了"学习平台期"，这是很正常的现象。从数据来看，你最近 2 周学习时长保持在每天 2 小时左右，但成绩提升不明显，这让你产生了挫败感。',
      weakPoints: [
        '学习成效感知不足',
        '学习方法可能需要调整',
        '学习目标和动力需要重新明确',
      ],
      todaySuggestion: {
        focus: '调整心态+优化学习方法',
        tasks: [
          {
            subject: '数学',
            topic: '回顾近 1 个月的进步（知识点掌握度变化）',
            duration: 15,
            method: '错题回顾',
          },
          {
            subject: '数学',
            topic: '尝试新的学习方法：番茄工作法（25 分钟学习 +5 分钟休息）',
            duration: 30,
            method: '专项练习',
          },
          {
            subject: '英语',
            topic: '轻松学习：看一集英语动画片，培养语感',
            duration: 20,
            method: '预习新课',
          },
        ],
        estimatedTotalMinutes: 65,
      },
      threeDayPlan: [
        {
          day: '第1天',
          focus: '心态调整+方法优化',
          keyTasks: [
            '查看学情报告，发现自己的进步',
            '尝试番茄工作法，降低学习压力',
            '设定小目标（如今日完成 3 个任务就奖励自己）',
          ],
        },
        {
          day: '第2天',
          focus: '找回学习成就感',
          keyTasks: [
            '选择擅长的科目/知识点，完成一套简单练习',
            '记录"我今天学会了什么"',
            '和同学/家长分享学习成果',
          ],
        },
        {
          day: '第3天',
          focus: '制定新的学习计划',
          keyTasks: [
            '重新评估当前学习方法的有效性',
            '和 AI 教练/老师讨论调整计划',
            '设定下周可达成的小目标',
          ],
        },
      ],
      riskAlert: {
        level: 'high',
        type: 'churn',
        description: '学习动机明显下降，存在放弃风险',
        suggestion: '立即降低学习难度，增加成就感体验；建议家长给予情感支持而非施压',
      },
      needIntervention: true,
      interventionSuggestion: '建议家长今晚和孩子进行一次轻松的对话，了解具体困难，不要批评或施压；建议督学老师明天安排一次面对面交流，帮助学生重新找到学习动力。',
      encouragement: '学习就像爬山，有时候会感觉一直在原地踏步，但其实你已经在不知不觉中走了很远。允许自己休息，但不要放弃。我在这里陪你一起想办法！🌈',
    },
  },

  // ============================================
  // 示例 4：家长咨询
  // ============================================
  {
    scenario: '家长咨询孩子学习情况',
    userInput: '我是张明轩的家长，想了解孩子最近的学习情况，以及我们在家能做什么帮助他？',
    aiResponse: {
      currentProblem: '张明轩同学最近学习状态整体良好，连续学习 21 天，本周学习时长 12.5 小时。数学成绩从 70 分提升至 75 分，但几何部分（三角形全等 45 分、相似三角形 48 分）仍存在明显薄弱。',
      weakPoints: [
        '几何证明题解题能力不足',
        '物理受力分析基础不牢',
        '学习时长分配不均衡（数学偏多，英语偏少）',
      ],
      todaySuggestion: {
        focus: '家长可配合的学习支持',
        tasks: [
          {
            subject: '数学',
            topic: '监督完成三角形全等专项练习（40 分钟）',
            duration: 40,
            method: '专项练习',
          },
          {
            subject: '综合',
            topic: '检查今日学习计划完成情况，给予鼓励',
            duration: 10,
            method: '错题回顾',
          },
          {
            subject: '英语',
            topic: '陪孩子听写 Unit 5 单词（15 个）',
            duration: 15,
            method: '专项练习',
          },
        ],
        estimatedTotalMinutes: 65,
      },
      threeDayPlan: [
        {
          day: '第1天',
          focus: '建立家庭学习氛围',
          keyTasks: [
            '为孩子创造安静的学习环境（关闭电视、手机静音）',
            '监督学习计划执行，但不干涉具体学习过程',
            '完成后给予肯定和鼓励',
          ],
        },
        {
          day: '第2天',
          focus: '关注几何学习进度',
          keyTasks: [
            '询问孩子今天学了什么几何知识',
            '鼓励孩子讲解一道题给您听（费曼学习法）',
            '记录孩子的进步和困难',
          ],
        },
        {
          day: '第3天',
          focus: '周末学习规划',
          keyTasks: [
            '和孩子一起查看本周学习报告',
            '讨论下周学习目标和计划',
            '适当安排放松活动（运动、阅读等）',
          ],
        },
      ],
      riskAlert: {
        level: 'low',
        type: 'stagnation',
        description: '几何部分进步缓慢，可能需要更多时间巩固',
        suggestion: '建议家长关注孩子的学习过程而非结果，多鼓励少批评；周末可安排 1-2 小时几何专项训练',
      },
      needIntervention: false,
      interventionSuggestion: '',
      encouragement: '您的关心是孩子进步的最大动力！建议多关注学习过程，少关注分数本身。孩子的每一点进步都值得肯定，相信在您的支持下，明轩会越来越好！👨‍👩‍👦',
    },
  },

  // ============================================
  // 示例 5：学习计划调整
  // ============================================
  {
    scenario: '学习计划调整请求',
    userInput: '今天学校作业特别多，写到 9 点了，AI 给我安排的学习计划完不成了，怎么办？',
    aiResponse: {
      currentProblem: '学校作业量大导致学习计划无法完成，这是常见情况。你的学习计划原定今日任务 3 项（总计 100 分钟），目前已完成 0 项，时间已到晚 9 点。',
      weakPoints: [
        '时间管理能力需要提升',
        '学校作业与额外学习的平衡',
        '学习计划弹性不足',
      ],
      todaySuggestion: {
        focus: '精简任务，保证睡眠',
        tasks: [
          {
            subject: '数学',
            topic: '仅完成最紧急的任务：三角形全等判定练习 10 题（原 20 题）',
            duration: 20,
            method: '专项练习',
          },
        ],
        estimatedTotalMinutes: 20,
      },
      threeDayPlan: [
        {
          day: '第1天（今天）',
          focus: '完成核心任务，尽早休息',
          keyTasks: [
            '仅完成 1 项最重要任务（20 分钟）',
            '9:30 前必须睡觉，保证 8 小时睡眠',
            '未完成的任务顺延到明天',
          ],
        },
        {
          day: '第2天',
          focus: '补回昨天任务+今日计划',
          keyTasks: [
            '优先补做昨天的三角形全等练习（剩余 10 题）',
            '完成今日计划中的相似三角形复习',
            '如果时间紧张，再次精简任务',
          ],
        },
        {
          day: '第3天',
          focus: '恢复原计划节奏',
          keyTasks: [
            '评估本周作业量规律',
            '和 AI 教练讨论调整学习计划（作业多的日子减少额外任务）',
            '制定弹性学习计划模板',
          ],
        },
      ],
      riskAlert: {
        level: 'medium',
        type: 'fatigue',
        description: '作业量大+额外学习可能导致过度疲劳，影响学习效率',
        suggestion: '保证睡眠优先，学习任务可以灵活调整；建议和学校老师沟通作业量问题',
      },
      needIntervention: false,
      interventionSuggestion: '',
      encouragement: '你已经很努力了！学校作业多不是你的错，学会合理分配时间比硬撑更重要。今天完成 1 项任务也是进步，早点休息，明天继续加油！😴✨',
    },
  },
];

// ============================================
// 使用示例
// ============================================

/**
 * 在 API 中使用示例：
 * 
 * import { exampleConversations } from '@/lib/agent-examples';
 * 
 * // 获取第一个示例
 * const example = exampleConversations[0];
 * console.log('用户输入:', example.userInput);
 * console.log('AI 响应:', example.aiResponse);
 * 
 * // 根据场景名称查找
 * const scenario = exampleConversations.find(e => e.scenario === '月考提分冲刺');
 */
