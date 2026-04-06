# 杨择学AI督学Agent 🎓

> 查漏补缺 · 只刷不会 · 用AI为孩子铺就最快的路

<div align="center">

**一个基于AI的智能教育平台,融合虚拟宠物激励系统,帮助学生高效学习**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## ✨ 核心功能

### 🤖 AI智能督学
- **智能诊断**: 自动分析学生薄弱知识点
- **个性化出题**: 根据错误历史生成针对性练习
- **学习路径**: 制定最优学习计划和复习策略
- **情感陪伴**: AI助手提供学习鼓励和心理疏导

### 🐾 虚拟宠物系统
- **宠物养成**: 孵化、喂养、升级宠物
- **学习激励**: 完成学习任务获得奖励
- **AI对话**: 宠物以角色扮演方式与学生互动
- **语音通话**: 可爱的小猫/小狗声线语音交互

### 📊 数据可视化
- **成长雷达**: 11维度能力评估可视化
- **学习分析**: 实时追踪学习进度和效果
- **家长报告**: 自动生成学情分析报告
- **A/B测试**: 产品功能数据驱动优化

### 🎮 互动农场
- **3D场景**: Three.js实现的沉浸式农场
- **种植收获**: 通过学习获得种植奖励
- **装扮系统**: 宠物服装和农场装饰

---

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0
- npm >= 9.0

### 安装步骤

```bash
# 1. 克隆项目
git clone https://github.com/YOUR_USERNAME/edu-agent-demo.git
cd edu-agent-demo

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp .env.example .env.local
# 编辑 .env.local 填入你的API密钥

# 4. 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

---

## 🔧 技术栈

### 前端框架
- **Next.js 14** - React全栈框架
- **React 18** - UI组件库
- **TypeScript** - 类型安全
- **TailwindCSS** - 样式框架

### 3D与可视化
- **Three.js** - 3D渲染
- **@react-three/fiber** - React Three渲染器
- **@react-three/drei** - Three工具集
- **Recharts** - 数据可视化图表

### AI集成
- **通义千问API** - 智能对话和学习辅导
- **Web Speech API** - 浏览器语音合成

### 动画与交互
- **GSAP** - 高性能动画库
- **Lucide React** - 图标库

---

## 📁 项目结构

```
edu-agent-demo/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API路由
│   │   │   ├── ai-assistant/  # AI助手API
│   │   │   ├── pet-chat-ai/   # 宠物对话API
│   │   │   └── ...
│   │   ├── chat/              # AI助手页面
│   │   ├── pet-chat/          # 宠物对话页面
│   │   ├── analytics/         # 数据看板
│   │   ├── growth-radar/      # 成长雷达
│   │   └── ...
│   ├── components/            # 组件
│   │   ├── layout/           # 布局组件
│   │   ├── pet/              # 宠物组件
│   │   ├── manor/            # 农场组件
│   │   └── radar/            # 雷达图组件
│   ├── data/                 # Mock数据
│   ├── utils/                # 工具函数
│   │   └── speech.ts         # 语音合成
│   └── types/                # TypeScript类型
├── public/                   # 静态资源
│   └── manifest.json        # PWA配置
├── .env.example             # 环境变量示例
└── package.json
```

---

## 🎯 核心功能演示

### 1. AI学习助手
```
访问: /chat
功能: 学习辅导 + 情感陪伴
模式: 
  - 学习辅导: 根据薄弱点出题讲解
  - 情感陪伴: 心理疏导和鼓励
```

### 2. 宠物语音对话
```
访问: /pet-chat
功能: AI宠物角色扮演
特色: 
  - 小猫声线 (pitch=1.9, 超可爱)
  - 随机语气词: "喵~" / "喵呜~" / "咪呜~"
  - 撒娇卖萌互动
```

### 3. 成长雷达报告
```
访问: /growth-radar
功能: 11维度能力评估
维度:
  - 认知能力: 空间想象、逻辑推理、计算能力...
  - 学习行为: 专注度、自主性、纠错能力...
  - 学科能力: 基础知识、应用能力、创新思维
```

---

## ⚙️ 配置说明

### 环境变量

创建 `.env.local` 文件:

```bash
# 通义千问API配置
DASHSCOPE_API_KEY=sk-your-api-key-here

# 应用配置
NEXT_PUBLIC_APP_NAME=杨择学AI教育平台
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### 获取API密钥

1. 访问 [阿里云DashScope](https://dashscope.console.aliyun.com/)
2. 注册/登录账号
3. 开通DashScope服务
4. 创建API密钥
5. 复制到 `.env.local`

**注意**: API密钥不会提交到Git,请妥善保管。

---

## 📱 PWA支持

本项目支持PWA(渐进式Web应用),可以安装到手机桌面:

### iOS
1. 用Safari打开网站
2. 点击"分享"按钮
3. 选择"添加到主屏幕"

### Android
1. 用Chrome打开网站
2. 点击菜单按钮
3. 选择"添加到主屏幕"

---

## 🚀 部署上线

### Vercel (推荐)

```bash
# 1. 推送到GitHub
git push origin main

# 2. 在 vercel.com 导入项目
# 3. 配置环境变量
# 4. 自动部署完成
```

### 自建服务器

```bash
# 构建生产版本
npm run build

# 启动服务
npm start
```

详细部署指南请查看 [DEPLOYMENT.md](DEPLOYMENT.md)

---

## 📊 项目数据

| 指标 | 数量 |
|------|------|
| 页面数量 | 20+ |
| API接口 | 10+ |
| 代码行数 | 20,000+ |
| Mock数据 | 50+ 条 |
| 3D场景 | 1 个 |
| AI模型 | 通义千问 |

---

## 🎓 面试Demo说明

本项目专为**AI产品经理面试**设计,展示:

- ✅ **产品思维**: 完整的产品文档体系
- ✅ **数据分析**: 数据看板和A/B测试案例
- ✅ **技术理解**: AI API集成和3D可视化
- ✅ **用户体验**: 虚拟宠物激励系统
- ✅ **商业洞察**: 竞品分析和商业模式

### 演示脚本
访问 `/demo-script` 查看3分钟演示脚本。

---

## 📝 文档

- [产品需求文档 (PRD)](src/app/prd/page.tsx)
- [竞品分析](src/app/competitor/page.tsx)
- [A/B测试案例](src/app/ab-test/page.tsx)
- [数据看板](src/app/analytics/page.tsx)
- [演示脚本](src/app/demo-script/page.tsx)
- [部署指南](DEPLOYMENT.md)

---

## 🤝 贡献

欢迎提交Issue和Pull Request!

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证

本项目基于 MIT 协议开源。

---

## 👨‍💻 作者

**杨择学**

- GitHub: [@your-github](https://github.com/your-github)
- 项目链接: https://github.com/YOUR_USERNAME/edu-agent-demo

---

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [通义千问](https://help.aliyun.com/zh/dashscope/)
- [TailwindCSS](https://tailwindcss.com/)

---

<div align="center">

**⭐ 如果这个项目对您有帮助,请给个Star!**

© 2026 杨择学 | 用 ❤️ 做教育

</div>
