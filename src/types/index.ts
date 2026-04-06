export interface Student {
  id: string;
  name: string;
  grade: string;
  school: string;
  avatar: string;
  subjects: string[];
  weakSubjects: string[];
  studyStreak: number;
  totalStudyHours: number;
}

export interface DiagnosisResult {
  subject: string;
  overallScore: number;
  knowledgePoints: KnowledgePoint[];
  radarData: { skill: string; score: number }[];
  aiSummary: string;
  diagnosedAt: string;
}

export interface KnowledgePoint {
  name: string;
  mastery: 'mastered' | 'learning' | 'weak';
  score: number;
  exercises: number;
  accuracy: number;
}

export interface StudyPlan {
  week: string;
  tasks: DailyTask[];
  completionRate: number;
  timeAllocation: { subject: string; hours: number }[];
}

export interface DailyTask {
  id: string;
  date: string;
  subject: string;
  topic: string;
  priority: 'high' | 'medium' | 'low';
  duration: number;
  completed: boolean;
  type: 'practice' | 'review' | 'preview';
}

export interface ErrorAnalysis {
  errorType: string;
  count: number;
  percentage: number;
}

export interface ErrorCase {
  id: string;
  subject: string;
  question: string;
  studentAnswer: string;
  correctAnswer: string;
  errorType: string;
  aiExplanation: string;
  relatedKnowledge: string;
}

export interface ParentReport {
  week: string;
  studyHours: number;
  tasksCompleted: number;
  focusScore: number;
  scoreTrend: { date: string; score: number }[];
  knowledgeComparison: { topic: string; before: number; after: number }[];
  teacherComment: string;
  aiSuggestions: string[];
}

export interface RiskAlert {
  studentId: string;
  studentName: string;
  riskType: 'churn' | 'stagnation' | 'decline';
  riskLevel: 'high' | 'medium' | 'low';
  lastActive: string;
  suggestion: string;
  handled: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

// ==================== 模块1: 漏洞靶向组卷类型 ====================

export interface WeakPointDetail {
  knowledgePoint: string;
  errorRate: number;
  errorTypes: {
    type: string;
    count: number;
  }[];
  correctCount: number;
  totalCount: number;
}

export interface ProblemOption {
  id: string;
  title: string;
  content: string;
  difficulty: 'easy' | 'medium' | 'hard';
  targetWeakPoint: string;
  keywords: string[];
  estimatedTime: number;
}

export interface TargetedPaper {
  id: string;
  studentId: string;
  generatedAt: string;
  weakPoints: WeakPointDetail[];
  problems: ProblemOption[];
  totalEstimatedTime: number;
  guidedFocus: string;
}

// ==================== 模块2: 诊断-学习-练习闭环类型 ====================

export interface TeachingVideo {
  id: string;
  title: string;
  knowledgePointId: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  url: string;
  thumbnail?: string;
  description: string;
}

export interface ProblemExample {
  id: string;
  title: string;
  problem: string;
  solution: string;
  explanation: string;
}

export interface LearningResourcePackage {
  id: string;
  studentId: string;
  weakPointId: string;
  knowledgePoint: string;
  status: 'assigned' | 'in-progress' | 'completed';
  resources: {
    videos: TeachingVideo[];
    summary: string;
    examples: ProblemExample[];
    practiceProblemIds: string[];
  };
  learningPath: {
    phase: number;
    currentPhase: number;
    estimatedTotalTime: number;
    completedTime?: number;
  };
  createdAt: string;
  dueDate?: string;
}

// ==================== 模块3: 学情成长雷达类型 ====================

export interface RadarDimension {
  name: string;
  id: string;
  category: 'cognitive' | 'behavioral' | 'subject';
  description: string;
  targetScore: number;
}

export interface RadarSnapshot {
  dimensionId: string;
  score: number;
  timestamp: string;
  trend?: 'up' | 'down' | 'stable';
  changeRate?: number;
}

export interface StudentGrowthRadar {
  id: string;
  studentId: string;
  period: {
    startDate: string;
    endDate: string;
  };
  dimensions: RadarDimension[];
  snapshots: {
    [dimensionId: string]: RadarSnapshot[];
  };
  summary: {
    overallTrend: 'improving' | 'stable' | 'declining';
    strengths: string[];
    needsImprovement: string[];
    monthlyGrowthRate: number;
    recommendations: string[];
  };
  monthlyComparison?: {
    currentMonth: { [key: string]: number };
    previousMonth: { [key: string]: number };
    monthBeforeLast?: { [key: string]: number };
  };
}

export interface GrowthRadarReport {
  studentId: string;
  studentName: string;
  reportGeneratedAt: string;
  radarData: StudentGrowthRadar;
  parentView: {
    headline: string;
    highlights: string[];
    actionItems: string[];
  };
  teacherView: {
    classRanking?: {
      overallRank: number;
      totalStudents: number;
      improvementRank: number;
    };
    interventionNeeded?: boolean;
    suggestedAction?: string;
  };
}

// ==================== 宠物陪伴学习系统 ====================

// 宠物类型
export type PetType = 'cat' | 'dog';

// 宠物成长阶段
export type PetStage = 'egg' | 'baby' | 'teen' | 'adult';

// 宠物实体
export interface Pet {
  id: string;                    // PET20240001
  studentId: string;             // 关联学生
  petType: PetType;              // 'cat' | 'dog'
  petName: string;               // 宠物名字
  stage: PetStage;               // 成长阶段
  level: number;                 // 等级 (1-100)
  experience: number;            // 当前经验值
  experienceToNext: number;      // 升级所需经验
  feedCount: number;             // 喂养次数（线上打卡）
  toyCount: number;              // 玩具数量（线下打卡）
  currentOutfit: string[];       // 当前装备的衣服/配饰ID
  unlockedOutfits: string[];     // 已解锁的装饰ID
  hatchDate: string;             // 孵化日期
  lastFeedDate: string;          // 最后喂养日期
  lastOfflineCheckIn: string;    // 最后线下打卡日期
  createdAt: string;
}

// 宠物装饰
export interface PetOutfit {
  id: string;                    // OUTFIT_CAT_001
  petType: PetType;              // 适用宠物类型
  name: string;                  // 装饰名称
  type: 'clothes' | 'accessory'; // 衣服或配饰
  toyCost: number;               // 所需玩具数量
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  image: string;                 // 装饰图片URL
  description: string;
}

// 宠物对话
export interface PetChat {
  id: string;
  petId: string;
  studentId: string;
  message: string;               // 学生消息
  response: string;              // 宠物回复
  timestamp: string;
  category: 'study' | 'encourage' | 'casual' | 'reminder';
}

// 打卡记录
export interface CheckInRecord {
  id: string;                    // CHECK20240301
  studentId: string;
  petId: string;
  type: 'online' | 'offline';    // 线上/线下
  location?: string;             // 线下门店名称
  reservationCode?: string;      // 预约码
  reward: {
    type: 'feed' | 'toy';        // 奖励类型
    amount: number;              // 奖励数量
  };
  timestamp: string;
}

// 宠物创建请求
export interface PetCreateRequest {
  studentId: string;
  petType: PetType;
  petName: string;
}

// 线下打卡请求
export interface OfflineCheckInRequest {
  studentId: string;
  petId: string;
  reservationCode: string;
  location?: string;
}

// 宠物对话请求
export interface PetChatRequest {
  petId: string;
  studentId: string;
  message: string;
}

// 装饰兑换请求
export interface OutfitRedeemRequest {
  petId: string;
  studentId: string;
  outfitId: string;
}

// ==========================================
// 3D虚拟宠物庄园系统
// ==========================================

// 3D宠物
export interface Pet3D {
  id: string;
  studentId: string;
  name: string;
  modelUrl: string;           // GLTF模型URL
  position: { x: number; y: number; z: number };
  rotation: number;
  currentAnimation: 'idle' | 'walk' | 'eat' | 'play' | 'sleep';
  hunger: number;             // 饥饿度 0-100
  happiness: number;          // 快乐度 0-100
  energy: number;             // 能量 0-100
  lastFeedTime: string;
  lastPlayTime: string;
}

// 庄园
export interface Manor {
  id: string;
  studentId: string;
  level: number;              // 庄园等级
  size: { width: number; height: number };
  plots: PlantPlot[];         // 种植地块
  decorations: Decoration[];  // 装饰物
  unlockedAreas: string[];    // 已解锁区域
  coins: number;              // 庄园金币
}

// 种植地块
export interface PlantPlot {
  id: string;
  manorId: string;
  position: { x: number; y: number };
  crop?: Crop;
  plantedAt?: string;
  isUnlocked: boolean;
}

// 作物
export interface Crop {
  id: string;
  name: string;               // "学习树"、"知识花"等
  seedId: string;
  growthStage: number;        // 0-4阶段
  maxStages: number;
  plantedAt: string;
  readyAt: string;
  isReady: boolean;
  reward?: {
    type: string;
    value: string;
  };
}

// 道具
export interface Item {
  id: string;
  name: string;
  type: 'tool' | 'seed' | 'fertilizer' | 'food' | 'decoration';
  icon: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  price?: number;             // 商店价格
}

// 背包
export interface Inventory {
  studentId: string;
  items: InventoryItem[];
  capacity: number;
}

export interface InventoryItem {
  itemId: string;
  quantity: number;
}

// 装饰物
export interface Decoration {
  id: string;
  name: string;
  type: 'tree' | 'fence' | 'fountain' | 'bench' | 'lamp';
  position: { x: number; y: number; z: number };
  modelUrl: string;
  unlocked: boolean;
}

// 打卡奖励
export interface CheckInReward {
  type: 'online' | 'offline';
  rewards: {
    tools: string[];          // 道具ID
    seeds: string[];
    coins: number;
  };
}

// 种植操作
export interface PlantAction {
  plotId: string;
  seedId: string;
  studentId: string;
}

// 收获操作
export interface HarvestAction {
  plotId: string;
  studentId: string;
}

// 宠物互动
export interface PetInteraction {
  petId: string;
  studentId: string;
  type: 'feed' | 'play' | 'pet';
  itemId?: string;            // 使用的道具ID
}
