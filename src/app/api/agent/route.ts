import { NextRequest, NextResponse } from 'next/server';
import { AGENT_SYSTEM_PROMPT, AgentResponse } from '@/lib/agent-prompt';
import { exampleConversations } from '@/lib/agent-examples';

// OpenAI 兼容 API 配置
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const OPENAI_BASE_URL = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
const MODEL = process.env.OPENAI_MODEL || 'gpt-4';

// Mock AI Agent 响应数据（基于示例对话）
const mockAgentResponses: Record<string, AgentResponse> = {
  'default': exampleConversations[0].aiResponse, // 月考提分冲刺
  '月考': exampleConversations[0].aiResponse,
  '错题': exampleConversations[1].aiResponse,
  '不想学': exampleConversations[2].aiResponse,
  '家长': exampleConversations[3].aiResponse,
  '作业多': exampleConversations[4].aiResponse,
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, studentId, context } = body;

    // 如果配置了 OpenAI API Key，调用真实 API
    if (OPENAI_API_KEY) {
      const response = await fetch(`${OPENAI_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            {
              role: 'system',
              content: AGENT_SYSTEM_PROMPT,
            },
            {
              role: 'user',
              content: message,
            },
          ],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      });

      const data = await response.json();
      const aiContent = data.choices?.[0]?.message?.content || '';

      // 尝试解析 JSON 响应
      try {
        const parsedResponse: AgentResponse = JSON.parse(aiContent);
        return NextResponse.json({
          success: true,
          data: parsedResponse,
        });
      } catch {
        // 如果 AI 没有返回 JSON，使用默认格式
        return NextResponse.json({
          success: true,
          data: {
            currentProblem: aiContent,
            weakPoints: [],
            todaySuggestion: {
              focus: '',
              tasks: [],
              estimatedTotalMinutes: 0,
            },
            threeDayPlan: [],
            riskAlert: {
              level: 'low',
              type: 'stagnation',
              description: '',
              suggestion: '',
            },
            needIntervention: false,
            interventionSuggestion: '',
            encouragement: '',
          } as AgentResponse,
        });
      }
    }

    // Mock 模式：根据关键词匹配回复
    console.log('🤖 AI Agent 收到消息:', message);
    console.log('📊 学生 ID:', studentId);
    console.log('📝 上下文:', context);

    // 模拟延迟
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 根据消息内容选择合适的回复
    let responseData = mockAgentResponses.default;
    
    if (message.includes('月考') || message.includes('考试')) {
      responseData = mockAgentResponses['月考'];
    } else if (message.includes('题') || message.includes('不会做')) {
      responseData = mockAgentResponses['错题'];
    } else if (message.includes('不想学') || message.includes('烦')) {
      responseData = mockAgentResponses['不想学'];
    } else if (message.includes('家长')) {
      responseData = mockAgentResponses['家长'];
    } else if (message.includes('作业') || message.includes('时间')) {
      responseData = mockAgentResponses['作业多'];
    }

    return NextResponse.json({
      success: true,
      data: responseData,
      metadata: {
        studentId,
        timestamp: new Date().toISOString(),
        mode: 'mock',
        message: '当前为 Mock 模式，配置 OPENAI_API_KEY 后可启用真实 AI 能力',
      },
    });

  } catch (error) {
    console.error('❌ AI Agent 调用失败:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'AI 服务暂时不可用，请稍后重试',
        data: mockAgentResponses.default,
      },
      { status: 500 },
    );
  }
}

// GET 方法：返回 API 状态
export async function GET() {
  return NextResponse.json({
    service: 'AI Agent API',
    status: 'running',
    mode: OPENAI_API_KEY ? 'production' : 'mock',
    model: OPENAI_API_KEY ? MODEL : 'N/A',
    endpoints: {
      chat: 'POST /api/agent',
      body: {
        message: '用户消息',
        studentId: '学生ID（可选）',
        context: '上下文数据（可选）'
      }
    }
  });
}
