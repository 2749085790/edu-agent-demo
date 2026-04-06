# 杨择学 AI督学Agent Demo

> 查漏补缺 · 只刷不会 · 最快的路 · 用AI为孩子铺就成功之路

## 📖 项目简介

这是一个面向 K9 学生、家长、督学老师/AI自习室运营方的 AI 督学提分 Agent Demo,为杨择学面试展示而设计。

### 核心闭环
1. **学情诊断** - AI深度分析知识点掌握情况
2. **学习计划** - 个性化每日学习任务生成
3. **错因归因** - 智能识别错误类型并提供针对性解析
4. **学习督学** - 全程跟踪学习进度,预防流失
5. **家长报告** - 可视化学习成果,增强家长感知

## 🚀 快速开始

### 前置要求
- Node.js 18+ 
- npm 9+

### 安装运行

```bash
# 进入项目目录
cd edu-agent-demo

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 📁 项目结构

```
edu-agent-demo/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # 根布局
│   │   ├── page.tsx             # 首页
│   │   ├── diagnosis/           # 学情诊断页
│   │   ├── plan/                # 学习计划页
│   │   ├── analysis/            # 错因分析页
│   │   ├── parent-report/       # 家长报告页
│   │   ├── operations/          # 运营看板页
│   │   └── chat/                # AI对话页
│   ├── components/              # 组件
│   │   └── layout/              # 布局组件
│   ├── data/                    # Mock 数据
│   ├── lib/                     # 工具库
│   ├── types/                   # TypeScript 类型
│   └── context/                 # React Context
├── README.md
├── PRD.md
└── DEMO_SCRIPT.md
```

## 🛠 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图表**: Recharts
- **图标**: Lucide React
- **状态管理**: React Context

## 🔌 API 接口说明

### AI Agent 对话接口

**端点**: `POST /api/agent`

**请求体**:
```json
{
  "message": "我下周数学月考，怎么提分？",
  "studentId": "S20240001",
  "context": {
    "subject": "数学",
    "grade": "八年级"
  }
}
```

**响应格式**:
```json
{
  "success": true,
  "data": {
    "currentProblem": "当前问题判断",
    "learningStrategy": "学习策略",
    "todayAction": "今日行动建议",
    "expectedBenefit": "预期收益",
    "needIntervention": false,
    "interventionSuggestion": "介入建议"
  }
}
```

**环境变量配置**:

创建 `.env.local` 文件:
```env
# 配置后启用真实 AI 能力
OPENAI_API_KEY=your-api-key-here
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_MODEL=gpt-4
```

未配置 API Key 时自动使用 Mock 模式，不影响演示。

## 📄 页面说明

| 页面 | 路由 | 说明 |
|------|------|------|
| 首页 | `/` | 产品介绍、核心功能、数据亮点 |
| 学情诊断 | `/diagnosis` | 雷达图、知识点掌握度、AI诊断结论 |
| 学习计划 | `/plan` | 周计划、任务清单、进度跟踪 |
| 错因分析 | `/analysis` | 错因分布、典型错题、AI解析 |
| 家长报告 | `/parent-report` | 成绩趋势、知识点变化、教师评语 |
| 运营看板 | `/operations` | 风险预警、活跃度、续费率 |
| AI助手 | `/chat` | 对话式Agent、快捷提问 |

## 🎯 核心亮点

### 业务价值体现
- ✅ **提分**: 成绩趋势图、知识点掌握度变化
- ✅ **留存**: 连续学习天数、活跃度监控、流失预警
- ✅ **续费**: 续费率指标、家长满意度展示
- ✅ **家长可感知**: 可视化报告、AI评语、可执行建议

### 技术特点
- ✅ 完整"诊断-计划-执行-反馈"闭环，快速查漏补缺
- ✅ 所有页面含真实业务字段和 Mock 数据
- ✅ 预留 OpenAI 兼容 API 接口
- ✅ 组件化、可维护、TypeScript 类型安全
- ✅ 响应式设计,支持移动端

## 📊 数据说明

本项目使用 Mock 数据演示,所有数据均为模拟生成,可在 `src/data/` 目录下修改。

## 🔮 后续迭代

- [ ] 接入真实 OpenAI API
- [ ] 添加用户认证系统
- [ ] 对接真实学情数据库
- [ ] 增加更多科目和年级
- [ ] 优化 AI 对话体验
- [ ] 添加数据导出功能

## 📞 联系方式

项目用于杨择学 AI 产品经理面试展示。

---

**在最短的时间内查漏补缺,只刷不会的知识点,用AI为孩子铺就一条最快的路** 🎓
