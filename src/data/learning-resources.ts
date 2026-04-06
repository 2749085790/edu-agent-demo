import { LearningResourcePackage, TeachingVideo, ProblemExample } from '@/types';

/**
 * 诊断-学习-练习闭环 Mock 数据
 * 关联教辅讲解视频、知识点总结、例题和练习题
 * 形成完整的学习路径
 */

// 讲解视频库
export const teachingVideos: { [key: string]: TeachingVideo[] } = {
  '辅助线构造': [
    {
      id: 'VID001',
      title: '几何中常见的辅助线构造方法（第一讲）',
      knowledgePointId: 'KP_AUXILIARY_LINE',
      duration: 840, // 14分钟
      difficulty: 'beginner',
      url: 'https://example.com/video/auxiliary-line-1',
      thumbnail: '/thumbnails/auxiliary-line-1.jpg',
      description: '讲解几何中最常见的5种辅助线构造方法：延长线、平行线、垂直线、角平分线、中线。通过经典例题深化理解。',
    },
    {
      id: 'VID002',
      title: '辅助线构造的高级技巧（第二讲）',
      knowledgePointId: 'KP_AUXILIARY_LINE',
      duration: 920, // 15分钟
      difficulty: 'intermediate',
      url: 'https://example.com/video/auxiliary-line-2',
      thumbnail: '/thumbnails/auxiliary-line-2.jpg',
      description: '深入讲解在复杂几何题中如何快速判断应该作哪种辅助线。包含翻折法、对称法等特殊技巧。',
    },
    {
      id: 'VID003',
      title: '辅助线构造常见误区与解决方案',
      knowledgePointId: 'KP_AUXILIARY_LINE',
      duration: 680, // 11分钟
      difficulty: 'intermediate',
      url: 'https://example.com/video/auxiliary-line-3',
      thumbnail: '/thumbnails/auxiliary-line-3.jpg',
      description: '分析学生在作辅助线时的常见错误，如作错方向、遗漏条件等，并提供系统的解决方案。',
    },
  ],
  '相似三角形判定': [
    {
      id: 'VID004',
      title: '相似三角形的三种判定方法',
      knowledgePointId: 'KP_SIMILAR_TRIANGLE',
      duration: 1020, // 17分钟
      difficulty: 'beginner',
      url: 'https://example.com/video/similar-triangle-1',
      thumbnail: '/thumbnails/similar-triangle-1.jpg',
      description: '系统讲解相似三角形的AA、SAS、SSS三种判定方法。通过对比演示，帮助学生明确各种方法的适用场景。',
    },
    {
      id: 'VID005',
      title: '相似三角形在实际问题中的应用',
      knowledgePointId: 'KP_SIMILAR_TRIANGLE',
      duration: 850, // 14分钟
      difficulty: 'intermediate',
      url: 'https://example.com/video/similar-triangle-2',
      thumbnail: '/thumbnails/similar-triangle-2.jpg',
      description: '讲解如何在梯形、平行四边形等综合图形中识别相似三角形，以及如何利用相似性求解未知量。',
    },
  ],
  '圆的性质应用': [
    {
      id: 'VID006',
      title: '圆的基本性质与定理总结',
      knowledgePointId: 'KP_CIRCLE_PROPERTY',
      duration: 1200, // 20分钟
      difficulty: 'beginner',
      url: 'https://example.com/video/circle-property-1',
      thumbnail: '/thumbnails/circle-property-1.jpg',
      description: '全面总结圆的12个基本性质和定理，包括弦心距、圆周角、圆心角等。通过动画演示加深理解。',
    },
    {
      id: 'VID007',
      title: '圆与其他图形的综合应用',
      knowledgePointId: 'KP_CIRCLE_PROPERTY',
      duration: 950, // 16分钟
      difficulty: 'intermediate',
      url: 'https://example.com/video/circle-property-2',
      thumbnail: '/thumbnails/circle-property-2.jpg',
      description: '讲解圆与三角形、四边形的各种结合题型，以及如何系统地分析这类综合问题。',
    },
  ],
};

// 知识点总结
export const knowledgeSummaries: { [key: string]: string } = {
  '辅助线构造': `# 辅助线构造完全指南

## 核心概念
辅助线是在原几何图形的基础上，根据题意添加的线段或其他几何元素，目的是为了使题目的已知条件和求证目标更加清晰，便于解题。

## 五大常见辅助线类型

### 1. 延长线法
- **应用场景**：需要构造三点共线或延长已有线段
- **例子**：将边AB延长到C点，使BC=AB

### 2. 平行线法
- **应用场景**：需要利用相似三角形或平行线性质
- **例子**：过某点作已知直线的平行线

### 3. 垂直线法
- **应用场景**：需要利用直角三角形的性质
- **例子**：从顶点向对边作垂直线（高）

### 4. 倍长中线法
- **应用场景**：涉及中线且需要转换关系
- **例子**：延长中线，使新线段等于中线长度

### 5. 角平分线法
- **应用场景**：需要利用角平分线性质
- **例子**：利用角平分线的对边分比例关系

## 解题思路
1. **观察图形**：找出已知条件和求证目标
2. **分析关系**：确定需要什么样的辅助线
3. **作辅助线**：按照方法作出辅助线
4. **证明结论**：利用辅助线和已知条件求证

## 常见错误
❌ 不分析就乱作辅助线
❌ 作了辅助线但没有充分利用
❌ 忽视题目中的隐含条件
  `,

  '相似三角形判定': `# 相似三角形判定方法详解

## 三种判定方法

### 方法1：AA相似
**定理**：两个角分别相等的两个三角形相似

**符号**：∠A = ∠A'，∠B = ∠B' ⟹ △ABC ∼ △A'B'C'

**优势**：最容易使用，只需验证两个角

**适用场景**：
- 有平行线的题目
- 直角三角形
- 已知两个角的题目

### 方法2：SAS相似
**定理**：两边成比例且夹角相等的两个三角形相似

**符号**：AB/A'B' = AC/A'C'，∠A = ∠A' ⟹ △ABC ∼ △A'B'C'

**优势**：利用边长的比例关系

**适用场景**：
- 已知边长比例的题目
- 需要计算具体长度的题目

### 方法3：SSS相似
**定理**：三边成比例的两个三角形相似

**符号**：AB/A'B' = BC/B'C' = AC/A'C' ⟹ △ABC ∼ △A'B'C'

**优势**：当所有边的比例都已知时最直接

**适用场景**：
- 已知所有边长或能计算出所有边长
- 需要全面验证相似性

## 判定步骤
1. **识别三角形**：明确要比较的两个三角形
2. **选择方法**：根据已知条件选择最适合的判定方法
3. **验证条件**：逐项验证判定条件
4. **得出结论**：确认相似关系

## 相似三角形的性质
- 相似三角形的对应角相等
- 相似三角形的对应边成比例
- 相似三角形的周长比等于相似比
- 相似三角形的面积比等于相似比的平方
  `,

  '圆的性质应用': `# 圆的性质与定理总结

## 基本概念
- **圆心**：O
- **半径**：r
- **直径**：2r
- **弧**：圆周上两点间的部分
- **弦**：连接圆周上两点的线段

## 重要定理

### 1. 圆心到弦的距离
圆心到弦的距离越短，弦越长。等腰三角形的高就是圆心到底边的距离。

**计算公式**：d² + (L/2)² = r²
其中d为圆心到弦的距离，L为弦长，r为半径

### 2. 圆周角定理
圆周角等于它所对圆心角的一半

**推论1**：同弧所对的圆周角相等
**推论2**：半圆所对的圆周角是直角

### 3. 弦切角定理
弦切角等于它所夹的弧所对的圆周角

### 4. 圆幂定理
从圆外一点引割线与切线，切线长度的平方等于割线与圆相交两点到该点的距离之积

### 5. 相交弦定理
两条弦在圆内相交，一条弦被分成的两段长度的积等于另一条弦被分成的两段长度的积

## 解题思路
1. **确定圆心和半径**
2. **利用已知角度或长度**
3. **建立几何关系**
4. **建立方程求解**

## 常见题型
- 求圆的半径或直径
- 求圆心角或圆周角
- 求弦长
- 圆与三角形/四边形的综合题
  `,
};

// 知识点例题
export const knowledgeExamples: { [key: string]: ProblemExample[] } = {
  '辅助线构造': [
    {
      id: 'EXP001',
      title: '经典例题1：等腰三角形中的辅助线',
      problem: `在等腰三角形ABC中，AB=AC=10，BC=12。
                D是BC上一点，BD=4。
                求AD的长度。`,
      solution: `过A作AE⊥BC于E。
                由于△ABC是等腰三角形，E是BC的中点。
                所以BE = EC = 6。
                由勾股定理：AE² = AB² - BE² = 100 - 36 = 64
                所以AE = 8
                
                在Rt△AED中（D在E右边，ED = 2）：
                AD² = AE² + ED² = 64 + 4 = 68
                所以AD = 2√17`,
      explanation: `关键步骤分析：
                1. 识别等腰三角形的性质，垂足E是底边BC的中点
                2. 利用这一性质，先求出高AE
                3. 再利用勾股定理求解AD
                
                这道题的辅助线是垂直线，充分利用了等腰三角形"三线合一"的性质。`,
    },
    {
      id: 'EXP002',
      title: '经典例题2：梯形中的辅助线',
      problem: `在梯形ABCD中，AB∥DC，AB=8，DC=4，AD=5。
                求梯形ABCD的面积。`,
      solution: `过D作DE⊥AB于E，过C作CF⊥AB于F。
                则DEFC是矩形，EF = DC = 4。
                
                设AE = x，则BF = x（由于对称性）
                所以AB = AE + EF + FB
                8 = x + 4 + x
                2x = 4，x = 2
                
                在Rt△ADE中：
                DE² = AD² - AE² = 25 - 4 = 21
                DE = √21
                
                梯形面积 = (AB + DC)·DE/2 = (8+4)·√21/2 = 6√21`,
      explanation: `关键步骤分析：
                1. 通过向下作垂线，将梯形转化为矩形+两个直角三角形
                2. 利用对称性确定x值
                3. 计算高度，再用梯形面积公式
                
                这种"分解"的思想是处理复杂图形的常用方法。`,
    },
  ],
  '相似三角形判定': [
    {
      id: 'EXP003',
      title: '经典例题1：平行线产生的相似三角形',
      problem: `在△ABC中，DE∥BC（D在AB上，E在AC上）。
                AD = 3，DB = 6，AE = 2。
                求EC的长度。`,
      solution: `由于DE∥BC，根据平行线的性质：
                △ADE ∼ △ABC
                
                因此有对应边成比例：
                AD/AB = AE/AC
                3/(3+6) = 2/AC
                3/9 = 2/AC
                1/3 = 2/AC
                AC = 6
                
                所以EC = AC - AE = 6 - 2 = 4`,
      explanation: `关键概念：
                平行线在三角形中产生的相似三角形遵循比例关系
                AD/DB = AE/EC（平行线分线段成比例定理）
                
                本题直接应用这个定理：3/6 = 2/EC
                所以EC = 4`,
    },
  ],
  '圆的性质应用': [
    {
      id: 'EXP004',
      title: '经典例题1：圆心到弦的距离',
      problem: `在⊙O中，半径r=5，弦AB=8。
                求圆心O到弦AB的距离。`,
      solution: `过O作OD⊥AB于D。
                由圆的性质，垂足D是弦AB的中点。
                所以AD = AB/2 = 4
                
                在Rt△OAD中：
                OD² + AD² = OA²
                OD² + 16 = 25
                OD² = 9
                OD = 3
                
                所以圆心到弦的距离是3`,
      explanation: `关键性质：
                圆心到弦的垂线垂直平分这条弦
                这是圆的一个重要对称性质
                
                利用勾股定理求解最直接有效`,
    },
  ],
};

// 学习资源包（模块2的核心数据）
export const mockLearningResourcePackage: LearningResourcePackage = {
  id: 'LRP20240315001',
  studentId: 'S20240001',
  weakPointId: 'WP_AUXILIARY_LINE_001',
  knowledgePoint: '辅助线构造',
  status: 'assigned',
  
  resources: {
    videos: teachingVideos['辅助线构造'],
    summary: knowledgeSummaries['辅助线构造'],
    examples: knowledgeExamples['辅助线构造'],
    practiceProblemIds: ['PROB001', 'PROB002', 'PROB005'],
  },
  
  learningPath: {
    phase: 3, // 三个阶段
    currentPhase: 1, // 当前在第一阶段
    estimatedTotalTime: 120, // 预估总时长120分钟
  },
  
  createdAt: '2024-03-15T10:30:00Z',
  dueDate: '2024-03-17T23:59:59Z',
};

// 获取学习资源包（按薄弱知识点）
export function getLearningResourcesByWeakPoint(weakPointId: string): LearningResourcePackage {
  // 这里可以根据不同的薄弱知识点返回对应的资源包
  return mockLearningResourcePackage;
}

// 获取所有学习资源包（按学生）
export function getAllLearningResourcesByStudent(studentId: string): LearningResourcePackage[] {
  return [
    mockLearningResourcePackage,
    {
      ...mockLearningResourcePackage,
      id: 'LRP20240315002',
      weakPointId: 'WP_SIMILAR_TRIANGLE_001',
      knowledgePoint: '相似三角形判定',
      resources: {
        videos: teachingVideos['相似三角形判定'],
        summary: knowledgeSummaries['相似三角形判定'],
        examples: knowledgeExamples['相似三角形判定'],
        practiceProblemIds: ['PROB003'],
      },
    },
    {
      ...mockLearningResourcePackage,
      id: 'LRP20240315003',
      weakPointId: 'WP_CIRCLE_PROPERTY_001',
      knowledgePoint: '圆的性质应用',
      resources: {
        videos: teachingVideos['圆的性质应用'],
        summary: knowledgeSummaries['圆的性质应用'],
        examples: knowledgeExamples['圆的性质应用'],
        practiceProblemIds: ['PROB004'],
      },
    },
  ];
}
