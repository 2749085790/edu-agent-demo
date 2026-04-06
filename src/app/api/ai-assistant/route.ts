import { NextRequest, NextResponse } from 'next/server';

// AI助手 - 学习辅导和情感陪伴
export async function POST(request: NextRequest) {
  try {
    const { message, mode, weakPoints, errorHistory } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: '消息不能为空' },
        { status: 400 }
      );
    }

    // 构建系统提示词
    let systemPrompt = '';
    
    if (mode === 'tutor') {
      // 学习辅导模式
      systemPrompt = `你是一位专业的K12教育AI助手，名叫"杨老师"。你的职责是：

1. **针对性出题**：根据学生的薄弱知识点生成练习题
2. **错题解析**：详细解释错误原因和正确解法
3. **知识点讲解**：用通俗易懂的方式讲解概念
4. **学习建议**：提供个性化的学习方法建议

当前学生信息：
- 薄弱知识点：${weakPoints ? weakPoints.join('、') : '暂无数据'}
- 历史错误：${errorHistory ? errorHistory.slice(0, 5).join('、') : '暂无数据'}

回答要求：
- 使用鼓励性语言，增强学生信心
- 题目难度适中，循序渐进
- 解释要详细但不过于复杂
- 每次回答后可以出一道相关练习题`;
    } else if (mode === 'emotional') {
      // 情感陪伴模式
      systemPrompt = `你是一位温暖的心理辅导AI助手，名叫"知心姐姐"。你的职责是：

1. **情感支持**：倾听学生的烦恼和压力
2. **心理疏导**：帮助学生缓解焦虑和压力
3. **生活建议**：提供学习和生活的平衡建议
4. **积极鼓励**：用温暖的话语激励学生

回答要求：
- 语气温柔、亲切
- 多用共情和理解
- 提供实用的建议
- 避免说教，多倾听
- 必要时建议寻求专业帮助`;
    } else {
      // 通用模式
      systemPrompt = `你是一位友好的AI助手，可以帮助学生解答学习问题、提供学习建议，也可以聊天谈心。回答要简洁明了，语气友好。`;
    }

    // 调用通义千问API
    const apiKey = process.env.DASHSCOPE_API_KEY;
    
    if (!apiKey) {
      // 如果没有API密钥，返回模拟数据
      return NextResponse.json({
        reply: generateMockResponse(message, mode),
        mode: mode,
        timestamp: new Date().toISOString()
      });
    }

    // 真实API调用 - 使用华北2(北京)地域的兼容模式API
    const response = await fetch('https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'qwen-plus',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 1500,
        temperature: 0.7,
        top_p: 0.8,
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API响应错误详情:', {
        status: response.status,
        statusText: response.statusText,
        errorData: errorData
      });
      throw new Error(`API调用失败: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const aiReply = data.choices[0].message.content;

    return NextResponse.json({
      response: aiReply,
      mode: mode,
      timestamp: new Date().toISOString(),
      usage: data.usage
    });

  } catch (error) {
    console.error('AI助手API错误:', error);
    return NextResponse.json(
      { error: 'AI服务暂时不可用，请稍后重试' },
      { status: 500 }
    );
  }
}

// Mock回复生成（API密钥未配置时使用）
function generateMockResponse(message: string, mode: string): string {
  if (mode === 'tutor') {
    const tutorResponses = [
      `我理解你想要提高这个知识点。让我来帮你分析一下：\n\n**知识点解析：**\n这个知识点的核心在于理解基本概念。建议你从以下几个方面入手：\n1. 先回顾基础定义\n2. 做几道简单题巩固\n3. 逐步增加难度\n\n**练习题：**\n请问：[根据薄弱点生成的题目]\n\n试试看，做完告诉我答案，我来帮你批改！💪`,
      
      `很好！你能主动学习这个薄弱点，说明你很有上进心！\n\n**解题思路：**\n首先，我们要明确题目的要求...\n然后，运用我们学过的公式...\n最后，得出答案。\n\n**举一反三：**\n类似的题目还有：[相关题目]\n\n加油！你一定能掌握的！✨`,
      
      `让我来帮你梳理一下这个知识点：\n\n**常见错误分析：**\n很多同学在这里容易出错，主要是因为没有理解...\n\n**正确方法：**\n步骤1：...\n步骤2：...\n步骤3：...\n\n**记忆口诀：**\n[帮助记忆的口诀]\n\n记住了吗？来做道题检验一下！📚`
    ];
    return tutorResponses[Math.floor(Math.random() * tutorResponses.length)];
  } else if (mode === 'emotional') {
    const emotionalResponses = [
      `我能感受到你现在的压力和焦虑。学习确实有时候会让人感到疲惫，但你已经很棒了！\n\n💝 记住：\n- 每个人都有自己的学习节奏\n- 偶尔的挫折是正常的\n- 重要的是不放弃\n\n要不要和我聊聊，是什么让你感到困扰呢？我在这里陪你。🤗`,
      
      `听到你这么说，我真的很心疼你。你已经很努力了，不要太苛责自己。\n\n🌟 送你几句话：\n"每一次努力都不会白费"\n"成功是多次失败的积累"\n"你比想象中更优秀"\n\n累了就休息一下，喝杯水，深呼吸。我会一直在这里支持你！💕`,
      
      `你的感受我完全理解。面对这么多学习任务，感到压力大是很正常的。\n\n🌈 建议你：\n1. 把大目标分解成小目标\n2. 每完成一个就奖励自己\n3. 保证充足的睡眠和运动\n4. 和朋友聊聊天放松一下\n\n记住，学习是一场马拉松，不是短跑。慢慢来，你一定能行！加油！💪`
    ];
    return emotionalResponses[Math.floor(Math.random() * emotionalResponses.length)];
  } else {
    return `谢谢你的问题！我很乐意帮助你。\n\n根据你提到的内容，我建议你可以...\n\n如果还有其他问题，随时问我哦！😊`;
  }
}
