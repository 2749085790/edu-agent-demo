'use client';

import Link from 'next/link';
import { ArrowLeft, Bot, Cat, MessageSquare, Mic, Sparkles, Key } from 'lucide-react';

export default function AIConfigPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* 顶部导航 */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/" 
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                AI功能配置指南
              </h1>
              <p className="text-sm text-slate-600">接入通义千问API，启用智能对话</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* 功能介绍 */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">🤖 AI功能总览</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Bot className="h-6 w-6" />
                <h3 className="font-bold text-lg">AI学习助手</h3>
              </div>
              <ul className="space-y-1 text-sm">
                <li>✓ 根据薄弱知识点出题</li>
                <li>✓ 错题详细解析</li>
                <li>✓ 知识点讲解</li>
                <li>✓ 学习方法建议</li>
              </ul>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Cat className="h-6 w-6" />
                <h3 className="font-bold text-lg">AI宠物对话</h3>
              </div>
              <ul className="space-y-1 text-sm">
                <li>✓ 角色扮演（小猫/小狗）</li>
                <li>✓ 撒娇卖萌互动</li>
                <li>✓ 学习鼓励陪伴</li>
                <li>✓ 语音通话（萌萌声线）</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 配置步骤 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Key className="h-6 w-6 text-blue-600" />
            配置步骤（5分钟完成）
          </h2>

          <div className="space-y-6">
            {/* 步骤1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-2">获取通义千问API密钥</h3>
                <p className="text-slate-700 mb-3">
                  访问阿里云DashScope平台，注册账号并创建API密钥。
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-sm text-blue-900 font-semibold mb-2">操作步骤：</p>
                  <ol className="space-y-1 text-sm text-blue-800">
                    <li>1. 访问：<a href="https://dashscope.console.aliyun.com/apiKey" target="_blank" className="underline font-semibold">https://dashscope.console.aliyun.com/apiKey</a></li>
                    <li>2. 注册/登录阿里云账号</li>
                    <li>3. 点击"创建API密钥"</li>
                    <li>4. 复制生成的API密钥（以sk-开头）</li>
                  </ol>
                </div>

                <div className="mt-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-sm text-yellow-900">
                    <strong>💡 提示：</strong>新用户有免费额度（约100万次调用），足够测试使用。
                  </p>
                </div>
              </div>
            </div>

            {/* 步骤2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-2">配置环境变量</h3>
                <p className="text-slate-700 mb-3">
                  在项目根目录创建 <code className="bg-slate-100 px-2 py-1 rounded">.env.local</code> 文件
                </p>
                
                <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                  <p className="text-slate-500"># .env.local 文件内容</p>
                  <p className="mt-2">
                    <span className="text-purple-400">DASHSCOPE_API_KEY</span>=
                    <span className="text-yellow-300">sk-your-api-key-here</span>
                  </p>
                </div>

                <div className="mt-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                  <p className="text-sm text-red-900">
                    <strong>⚠️ 注意：</strong>不要将API密钥提交到Git仓库！确保 .env.local 已在 .gitignore 中。
                  </p>
                </div>
              </div>
            </div>

            {/* 步骤3 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-2">重启开发服务器</h3>
                <p className="text-slate-700 mb-3">
                  配置完成后，重启Next.js开发服务器使环境变量生效。
                </p>
                
                <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-sm">
                  <p className="text-slate-500"># 在终端执行</p>
                  <p className="mt-2">
                    <span className="text-blue-400">Ctrl</span> + <span className="text-blue-400">C</span> 停止服务器
                  </p>
                  <p className="mt-1">
                    <span className="text-yellow-300">npm</span> run dev
                  </p>
                </div>
              </div>
            </div>

            {/* 步骤4 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 mb-2">测试AI功能</h3>
                <p className="text-slate-700 mb-3">
                  访问以下页面测试AI对话功能：
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Link 
                    href="/pet-chat"
                    className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-3"
                  >
                    <Cat className="h-6 w-6" />
                    <div>
                      <div className="font-bold">AI宠物对话</div>
                      <div className="text-sm opacity-90">测试宠物角色扮演</div>
                    </div>
                  </Link>
                  
                  <Link 
                    href="/chat"
                    className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-3"
                  >
                    <Bot className="h-6 w-6" />
                    <div>
                      <div className="font-bold">AI学习助手</div>
                      <div className="text-sm opacity-90">测试学习辅导功能</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 功能对比 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">📊 功能对比</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-4">功能</th>
                  <th className="py-3 px-4 text-center">Mock模式</th>
                  <th className="py-3 px-4 text-center bg-green-50">AI模式（推荐）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">宠物对话</td>
                  <td className="py-3 px-4 text-center text-yellow-600">预设回复</td>
                  <td className="py-3 px-4 text-center bg-green-50 font-semibold text-green-600">智能角色扮演 ✓</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">学习辅导</td>
                  <td className="py-3 px-4 text-center text-yellow-600">固定模板</td>
                  <td className="py-3 px-4 text-center bg-green-50 font-semibold text-green-600">个性化出题 ✓</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">语音通话</td>
                  <td className="py-3 px-4 text-center text-green-600">✓ 支持</td>
                  <td className="py-3 px-4 text-center bg-green-50 font-semibold text-green-600">✓ 支持</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-semibold">对话连贯性</td>
                  <td className="py-3 px-4 text-center text-red-600">✗ 无记忆</td>
                  <td className="py-3 px-4 text-center bg-green-50 font-semibold text-green-600">✓ 上下文理解</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">用户体验</td>
                  <td className="py-3 px-4 text-center text-yellow-600">⭐⭐⭐</td>
                  <td className="py-3 px-4 text-center bg-green-50 font-semibold text-green-600">⭐⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* API费用说明 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">💰 API费用说明</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-2">免费额度</h3>
              <p className="text-sm">新用户赠送约100万次调用</p>
              <p className="text-2xl font-bold mt-2">¥0</p>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-2">超出后费用</h3>
              <p className="text-sm">qwen-plus模型</p>
              <p className="text-2xl font-bold mt-2">¥0.008/千tokens</p>
            </div>
            
            <div className="bg-white/20 rounded-lg p-4">
              <h3 className="font-bold mb-2">预估月费</h3>
              <p className="text-sm">1000用户/日</p>
              <p className="text-2xl font-bold mt-2">¥200-500</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-sm">
              <strong>💡 成本优化建议：</strong>
              1) 使用缓存减少重复调用；
              2) 设置合理的max_tokens限制；
              3) 非高峰时段使用更便宜的模型；
              4) 对简单问题使用本地规则引擎。
            </p>
          </div>
        </div>

        {/* 常见问题 */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">❓ 常见问题</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-2">Q: 没有API密钥可以使用吗？</h3>
              <p className="text-slate-700">
                A: 可以！系统内置了Mock模式，使用预设回复模拟AI对话。虽然效果不如真实AI，
                但可以完整演示产品功能。建议面试前配置API密钥以获得最佳效果。
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-2">Q: API调用失败怎么办？</h3>
              <p className="text-slate-700">
                A: 系统会自动降级到Mock模式，不会影响使用。请检查：
                1) API密钥是否正确；2) 网络连接是否正常；3) 账户余额是否充足。
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-2">Q: 语音通话不工作？</h3>
              <p className="text-slate-700">
                A: 语音功能使用浏览器原生Web Speech API，无需额外配置。
                请确保：1) 使用Chrome/Edge浏览器；2) 允许浏览器播放声音；
                3) 设备音量已开启。
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-2">Q: 如何切换宠物声线？</h3>
              <p className="text-slate-700">
                A: 在宠物对话页面，可以选择小猫或小狗。系统会自动调整语音参数：
                小猫声线（高音调1.6）、小狗声线（中高音调1.3）。
              </p>
            </div>
          </div>
        </div>

        {/* 技术支持 */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h2 className="text-2xl font-bold mb-4">📞 技术支持</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold mb-2">官方文档</h3>
              <ul className="space-y-1 text-sm">
                <li>• <a href="https://help.aliyun.com/zh/dashscope/" target="_blank" className="underline">通义千问文档</a></li>
                <li>• <a href="https://nextjs.org/docs" target="_blank" className="underline">Next.js文档</a></li>
                <li>• <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis" target="_blank" className="underline">Web Speech API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2">快速链接</h3>
              <ul className="space-y-1 text-sm">
                <li>• <Link href="/pet-chat" className="underline">AI宠物对话</Link></li>
                <li>• <Link href="/chat" className="underline">AI学习助手</Link></li>
                <li>• <Link href="/analytics" className="underline">产品数据看板</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
