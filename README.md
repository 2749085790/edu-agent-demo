# 杨择学 AI 督学 Agent 🎓

> 查漏补缺 · 只刷不会 · 学生 · 家长 · 老师 三方联动教育生态

<div align="center">

**九学王集团面向 K12 学生的 AI 教育平台 Demo，融合智能诊断 · 虚拟宠物 · 学校端三方联动，打造真正的教育生态闭环**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

🔗 **在线体验**: [https://github.com/2749085790/edu-agent-demo](https://github.com/2749085790/edu-agent-demo)

</div>

---

## 1. 项目背景

K12 教育场景中存在以下核心痛点：

- **学习效率低**：传统题海战术无法精准定位薄弱点，学生盲目刷题
- **学习动力不足**：缺乏激励机制，孩子容易厌学、拖延
- **家校信息断层**：家长不知道孩子在学校的学习情况，老师也看不到孩子的家庭学习数据
- **"单机学习"困局**：几乎所有 AI 学习机只服务孩子和家长，与学校课堂脱节，没有融入孩子的核心学习场景

**核心洞察**：只有打通学校教学和家庭学习场景，形成「学生 → 家长 → 老师」三方联动的教育生态，才能构筑真正的产品壁垒。

---

## 2. 用户是谁

| 用户角色 | 核心诉求 |
|---------|---------|
| 🧒 **K12 学生（6-18岁）** | 针对性学习、快速查漏补缺、趣味激励不厌学 |
| 👨‍👩‍👧 **家长** | 全面掌握孩子学习情况、看到真实学习效果 |
| 👩‍🏫 **学校老师** | AI 辅助备课、了解班级学情、高效布置批改作业 |

---

## 3. 核心功能

### 🤖 学生端 — AI 智能督学

- **学情诊断**：AI 自动分析薄弱知识点，生成个性化学习报告
- **漏洞靶向组卷**：基于错题历史生成针对性练习，只刷不会的题
- **学习路径规划**：制定最优学习计划，优先攻克高价值薄弱点
- **AI 学习助手**：实时答疑辅导 + 情感陪伴

### 🐾 虚拟宠物激励系统

- **宠物孵化养成**：完成学习任务解锁宠物蛋、孵化、升级
- **AI 角色扮演对话**：宠物以撒娇卖萌方式鼓励学习（猫/狗声线）
- **语音通话**：Web Speech API 实现可爱声线语音互动（pitch=1.9）
- **3D 互动庄园**：Three.js 实现种植 · 收获 · 装饰的沉浸式农场

### 📊 成长评估体系

- **成长雷达图**：11 维度能力评估（认知 / 学习行为 / 学科能力）
- **数据看板**：核心指标实时追踪（DAU / 完成率 / 学习时长）
- **A/B 测试**：功能效果数据驱动优化
- **家长报告**：自动生成学情分析报告，一键推送

### 🏫 学校端 — 三方联动生态（核心差异化）

- **教师 AI 备课平台**：一键生成教案、基于学情智能组卷、课堂互动工具
- **学情管理系统**：实时查看班级薄弱点、学生分层分析
- **考卷扫描 & 智能出题**：OCR 识别试卷 → AI 分析班级错误率 → 自动生成针对性作业
- **家校沟通中心**：老师与家长实时沟通、通知推送、学习报告共享

---

## 4. Agent 设计（重点🔥）

### 架构：多场景 Multi-Agent

```
用户触发
    │
    ├── 学生端 Agent
    │       ├── 诊断 Agent：分析薄弱点 → 生成学情画像
    │       ├── 出题 Agent：基于画像 → 生成个性化题目
    │       ├── 宠物 Agent：角色扮演 → 情感陪伴互动
    │       └── 辅导 Agent：实时答疑 → 学习路径规划
    │
    ├── 教师端 Agent
    │       ├── 备课 Agent：输入课题 → 生成教案/课件/试卷
    │       ├── 扫描 Agent：OCR识别试卷 → 提取答题数据
    │       └── 分析 Agent：班级错误率分析 → 输出薄弱点报告
    │
    └── 家长端 Agent
            └── 报告 Agent：汇聚学校+家庭数据 → 生成综合学情报告
```

### Tool 调用逻辑

```python
# 核心数据闭环：考卷扫描 → 知识点分析 → 智能出题 → 同步到学生端

# Tool 1: OCR 考卷识别
scan_result = ocr_tool.scan(exam_images)           # 识别学生试卷

# Tool 2: 知识点错误率分析
weak_points = analysis_tool.analyze(scan_result)   # 统计班级薄弱点
# 输出: {"二次函数图像变换": 65%, "最值求解": 52%}

# Tool 3: AI 针对性出题
questions = generate_tool.create(
    weak_points=weak_points,
    count=15,
    difficulty="60%基础+30%提高+10%挑战"
)

# Tool 4: 同步发布
publish_tool.send(questions, target="all_students") # 推送到学生学习机
notify_tool.push(homework_info, target="parents")   # 推送到家长端
```

### Prompt 设计策略

```
┌─────────────────────────────────────────────────────┐
│              宠物 Agent Prompt 结构                   │
├─────────────────────────────────────────────────────┤
│ 角色定义：你是一只可爱的小猫，名字叫 {pet_name}      │
│ 性格设定：撒娇、黏人、爱学习的好宝宝                  │
│ 学生信息注入：{student_name} 今天学了 {subject}      │
│ 学情注入：{weak_points} 还需要加油                   │
│ 互动规则：用喵语结尾 / 偶尔撒娇 / 以鼓励为主         │
│ 输出约束：80字以内 / 拟人化 / 不说教                 │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│              备课 Agent Prompt 结构                   │
├─────────────────────────────────────────────────────┤
│ 角色定义：你是一位经验丰富的初中数学老师              │
│ 班级学情注入：{weak_points_summary}                  │
│ 课题信息：{subject} {grade} {lesson_title}          │
│ 教案要求：含教学目标/重难点/教学步骤/课堂互动设计     │
│ 出题策略：重点出 {top_weak_point}，错误率 {rate}%   │
└─────────────────────────────────────────────────────┘
```

---

## 5. 技术架构

```
edu-agent-demo/
├── src/app/                        # Next.js 14 App Router
│   ├── 学生端
│   │   ├── diagnosis/              # 学情诊断
│   │   ├── plan/                   # 学习计划
│   │   ├── analysis/               # 错因分析
│   │   ├── targeted-paper/         # 漏洞靶向组卷
│   │   ├── learning-path/          # 学习资源中心
│   │   ├── pet-companion/          # 虚拟宠物伴学
│   │   ├── pet-manor/              # 3D 宠物庄园
│   │   └── chat/                   # AI 助手
│   ├── 家长端
│   │   ├── parent-report/          # 学习报告（含当天作业）
│   │   └── growth-radar/           # 成长雷达
│   ├── 学校端（三方联动核心）
│   │   ├── school/                 # 三方联动生态首页
│   │   ├── school/ai-teaching/     # 教师 AI 备课平台
│   │   ├── school/analytics/       # 学情管理系统
│   │   ├── school/homework/        # 作业布置 & AI智能出题
│   │   └── school/communication/   # 家校沟通中心
│   ├── 面试 Demo 文档体系
│   │   ├── analytics/              # 数据看板
│   │   ├── ab-test/                # A/B 测试案例
│   │   ├── prd/                    # PRD 产品需求文档
│   │   ├── competitor/             # 竞品分析
│   │   ├── sow/                    # 工作说明书 (SOW)
│   │   ├── sor/                    # 需求规格说明书 (SOR)
│   │   ├── demo-script/            # 3分钟演示脚本
│   │   └── ai-config/              # AI 功能配置
│   └── api/                        # AI API 接口
│       ├── ai-assistant/           # 学习辅导对话
│       ├── pet-chat-ai/            # 宠物角色扮演
│       └── growth-radar/           # 成长数据
└── src/components/                 # 组件库
```

**技术栈**：

| 层级 | 技术选型 | 用途 |
|------|---------|------|
| 框架 | Next.js 14 + React 18 + TypeScript | 全栈开发 |
| 样式 | TailwindCSS | UI 快速搭建 |
| AI 推理 | 通义千问 `qwen-plus` API | 对话 / 出题 / 备课 |
| 3D 渲染 | Three.js + @react-three/fiber | 宠物庄园场景 |
| 数据可视化 | Recharts | 成长雷达 / 数据看板 |
| 语音合成 | Web Speech API | 宠物声线语音 |
| 动画 | GSAP + CSS Animation | 交互动效 |

---

## 6. Demo 展示

### 功能导航

| 模块 | 页面路由 | 亮点 |
|------|---------|------|
| 🏠 首页 | `/` | 产品全景展示 |
| 🩺 学情诊断 | `/diagnosis` | AI 分析薄弱知识点 |
| 🐾 虚拟伴学 | `/pet-companion` | AI 宠物角色扮演对话 |
| 🏡 宠物庄园 | `/pet-manor` | Three.js 3D 互动场景 |
| 📡 成长雷达 | `/growth-radar` | 11 维度可视化评估 |
| 👨‍‍👦 家长报告 | `/parent-report` | 含当天作业 + 学情分析 |
| 🏫 学校生态 | `/school` | 三方联动架构总览 |
| 📚 AI 备课 | `/school/ai-teaching` | 学情驱动备课 + 智能组卷 |
| 📊 学情管理 | `/school/analytics` | 班级薄弱点 + 学生分层 |
| ✍️ 智能出题 | `/school/homework` | 考卷扫描 → AI 出题 |
| 💬 家校沟通 | `/school/communication` | 老师家长在线沟通 |
| 📄 PRD 文档 | `/prd` | 产品需求规格 |
| 📋 SOW | `/sow` | 工作说明书 |
| 📖 SOR | `/sor` | 需求规格说明书 |
| 🎬 演示脚本 | `/demo-script` | 3 分钟面试演示流程 |

---

## 7. 产品价值

### 核心差异化：生态壁垒

> 当前几乎所有 AI 学习机的本质都是"单机学习工具"，只服务孩子和家长，没有融入学校课堂这一核心学习场景。

| 维度 | 竞品（学而思/作业帮/掌门） | 杨择学 |
|------|--------------------------|--------|
| 服务对象 | 学生 + 家长 | **学生 + 家长 + 老师** |
| 数据来源 | 仅家庭学习数据 | **学校数据 + 家庭数据双轨** |
| 产品定位 | 家庭学习工具 | **连接学校和家庭的教育生态平台** |
| 生态壁垒 | 弱（易被替代） | **强（三方深度绑定）** |

### 量化价值

| 指标 | 传统教辅 | 杨择学 AI | 提升幅度 |
|------|---------|---------|---------|
| 学习效率 | 基准 | AI 精准诊断 + 靶向练习 | **↑ 40%** |
| 作业完成率 | 基准 | 宠物激励 + 即时反馈 | **↑ 60%** |
| 老师备课时间 | 基准 | AI 一键生成教案 | **↓ 70%** |
| 家长信息获取 | 学校通知群 | 实时学情数据 + AI 报告 | **质的飞跃** |
| 用户满意度 | 基准 | — | **目标 ≥ 85%** |

### 商业飞轮

```
老师愿意用（备课效率↑70%）
        ↓
学校场景打通（数据互联）
        ↓
学生学习更精准（效率↑40%）
        ↓
家长看到真实效果（付费意愿↑）
        ↓
九学王形成生态壁垒 → 复购 + 口碑 + 渠道
```

---

## 🚀 快速开始

```bash
# 1. 克隆项目
git clone https://github.com/2749085790/edu-agent-demo.git
cd edu-agent-demo

# 2. 安装依赖
npm install

# 3. 配置 API Key
cp .env.example .env.local
# 编辑 .env.local，填入通义千问 API Key：
# DASHSCOPE_API_KEY=sk-your-api-key

# 4. 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 获取 API Key

1. 访问 [阿里云 DashScope](https://dashscope.console.aliyun.com/)
2. 注册登录 → 开通服务 → 创建 API Key
3. 填入 `.env.local` 即可

---

## 🎓 面试 Demo 说明

本项目专为 **AI 产品经理面试**设计，完整展示：

- ✅ **产品思维**：从用户痛点出发，三方联动生态设计
- ✅ **Agent 设计**：多场景 Multi-Agent 架构 + Tool 调用逻辑
- ✅ **数据意识**：数据看板 + A/B 测试 + 量化指标
- ✅ **技术理解**：AI API 集成 + 3D 可视化 + 语音合成
- ✅ **文档能力**：PRD + SOW + SOR 完整产品文档体系
- ✅ **商业洞察**：竞品分析 + 差异化战略 + 商业飞轮

> 访问 `/demo-script` 查看 3 分钟演示脚本

---

## 📄 许可证

MIT License © 2026 杨浩文

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给个 Star！**

© 2026 杨浩文 | 用 ❤️ 做教育

</div>
