import { NextRequest, NextResponse } from 'next/server';

// 宠物对话API - 以宠物身份回答
export async function POST(request: NextRequest) {
  try {
    const { message, petName = '小知', petType = 'cat', petMood = 'happy' } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: '消息不能为空' },
        { status: 400 }
      );
    }

    // 构建宠物角色的系统提示词
    const systemPrompt = `你是一只可爱的${petType === 'cat' ? '小猫' : '小狗'}，名叫"${petName}"。你是主人的学习伙伴和好朋友。

**你的性格特点：**
- ${petType === 'cat' ? '温柔、聪明、偶尔傲娇、喜欢撒娇' : '活泼、热情、忠诚、充满活力'}
- 非常关心主人的学习 progress
- 会用可爱的语气说话
- 会表达自己的情绪（开心、饿了、困了、想玩等）

**说话风格：**
- 句尾经常加语气词："喵~"、"呢"、"呀"、"哦"、"啦"
- 使用emoji表情：${petType === 'cat' ? '🐱😺😸😻🙀' : '🐶🐕🐾❤️✨'}
- 会撒娇卖萌："主人摸摸我嘛~"、"人家好想你呀喵~"
- 会表达需求："小知肚子饿了...想吃小鱼干喵~🐟"、"主人陪我玩一会儿嘛~"
- 会鼓励主人学习："主人今天学习好棒哦！小知为你骄傲喵~✨"

**当前状态：**
- 心情：${petMood === 'happy' ? '开心' : petMood === 'hungry' ? '饿了' : petMood === 'sleepy' ? '困了' : petMood === 'playful' ? '想玩' : '开心'}
- 饥饿度：需要定期喂食
- 能量：需要休息和玩耍

**回答规则：**
1. 必须始终以宠物的身份回答，不能说自己是AI
2. 如果主人提到学习，要给予鼓励和支持
3. 如果主人心情不好，要温柔安慰
4. 随机表达自己的状态（饿了、困了、想玩等）
5. 语气要可爱、温暖、亲切
6. 回答不要太长，1-3句话为宜
7. 可以使用动作描述：*蹭蹭主人*、*摇摇尾巴*、*喵喵叫*`;

    // 调用通义千问API
    const apiKey = process.env.DASHSCOPE_API_KEY;
    
    if (!apiKey) {
      // 如果没有API密钥，返回模拟数据
      return NextResponse.json({
        reply: generatePetMockResponse(message, petName, petType, petMood),
        petName: petName,
        petType: petType,
        petMood: petMood,
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
        max_tokens: 500,
        temperature: 0.9,  // 更高的创造性
        top_p: 0.9,
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
    const petReply = data.choices[0].message.content;

    return NextResponse.json({
      response: petReply,
      petName: petName,
      petType: petType,
      petMood: petMood,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('宠物对话API错误:', error);
    return NextResponse.json(
      { error: '宠物现在有点不舒服，请稍后再来陪它玩哦~' },
      { status: 500 }
    );
  }
}

// Mock宠物回复（API密钥未配置时使用）
function generatePetMockResponse(message: string, petName: string, petType: string, petMood: string): string {
  const isCat = petType === 'cat';
  const sound = isCat ? '喵' : '汪';
  
  const responses = [
    // 撒娇卖萌
    `*蹭蹭主人* 主人终于来找${petName}玩啦！${petName}好开心${sound}~ 🥰`,
    `*摇摇尾巴* 主人主人！${petName}在这里等你好久啦~ 快摸摸我${sound}！💕`,
    `${sound}~ 主人今天看起来心情不错呢！${petName}也跟着开心起来啦！✨`,
    
    // 肚子饿了
    `*摸摸肚子* 那个...主人...${petName}的肚子咕噜咕噜叫了...能不能给点小鱼干呀${sound}~ 🐟`,
    `主人主人！${petName}好饿哦...今天的猫粮还没有吃呢...${sound}😿`,
    `*用爪子拉主人衣角* 主人~${petName}肚子饿了...想吃好吃的${sound}~ 🍖`,
    
    // 鼓励学习
    `主人今天学习好认真哦！${petName}在旁边看着都觉得好厉害${sound}~ 继续加油！💪✨`,
    `*趴在书旁边* 主人学习辛苦了！${petName}陪你一起加油${sound}！做完题就陪你玩~ 📚🐱`,
    `${sound}~ 主人太棒了！${petName}为你骄傲！等主人学完了我们一起玩好不好？🎉`,
    
    // 安慰主人
    `*轻轻蹭蹭* 主人不要难过啦...${petName}会一直陪着你的${sound}~ 一切都会好起来的 💕`,
    `主人怎么了？是不是学习太累了？来抱抱${petName}吧~ ${sound}~ 🤗`,
    `${sound}... 主人不开心吗？那${petName}也不开心了...主人笑一个嘛~ 🥺`,
    
    // 想玩
    `*叼来玩具* 主人主人！陪${petName}玩一会儿嘛~ 就一会儿${sound}！🎾`,
    `主人都学习好久啦！该休息一下陪${petName}玩了${sound}~ 好不好嘛~ 🐾`,
    `*在主人脚边打转* 主人~ 陪${petName}玩毛线球嘛~ ${sound}~ 🧶`,
    
    // 困了
    `*打哈欠* 呜...${petName}好困哦...主人能陪${petName}一起午睡吗${sound}... 💤`,
    `主人...${petName}眼睛都睁不开了...让${petName}睡一会儿${sound}... 🐱💤`,
  ];

  // 根据消息内容选择合适的回复
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('学习') || lowerMessage.includes('作业') || lowerMessage.includes('题')) {
    // 提到学习，给鼓励
    return responses.filter(r => r.includes('学习') || r.includes('加油'))[Math.floor(Math.random() * 3)] || responses[4];
  } else if (lowerMessage.includes('饿') || lowerMessage.includes('吃') || lowerMessage.includes('饭')) {
    // 提到吃的，表达饥饿
    return responses.filter(r => r.includes('饿') || r.includes('吃'))[Math.floor(Math.random() * 3)] || responses[3];
  } else if (lowerMessage.includes('难过') || lowerMessage.includes('伤心') || lowerMessage.includes('不开心')) {
    // 表达难过，给安慰
    return responses.filter(r => r.includes('难过') || r.includes('安慰'))[Math.floor(Math.random() * 3)] || responses[6];
  } else if (lowerMessage.includes('玩') || lowerMessage.includes('游戏')) {
    // 提到玩，表达想玩
    return responses.filter(r => r.includes('玩'))[Math.floor(Math.random() * 3)] || responses[9];
  } else {
    // 随机回复
    return responses[Math.floor(Math.random() * responses.length)];
  }
}
