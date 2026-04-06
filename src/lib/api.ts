// OpenAI 兼容 API 配置
export const config = {
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  openaiBaseUrl: process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1',
  model: process.env.OPENAI_MODEL || 'gpt-4',
};

// 预留 AI Agent 调用接口
export async function callAIAgent(prompt: string, context: any = {}) {
  // TODO: 接入真实 OpenAI 兼容 API
  // 当前返回 mock 响应
  
  console.log('AI Agent 调用:', { prompt, context, config });
  
  // 模拟延迟
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    content: `这是一个模拟的AI响应。在实际部署时,这里将调用 ${config.model} 模型处理您的请求。`,
    usage: { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0 }
  };
}

// 学情诊断 API
export async function diagnoseStudent(studentId: string, subjects: string[]) {
  // TODO: 实现真实诊断逻辑
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { status: 'success', message: '诊断完成' };
}

// 学习计划生成 API
export async function generatePlan(studentId: string, weakPoints: string[]) {
  // TODO: 实现真实计划生成逻辑
  await new Promise(resolve => setTimeout(resolve, 1800));
  return { status: 'success', message: '计划生成完成' };
}
