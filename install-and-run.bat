@echo off
echo ========================================
echo 九学王 AI 督学 Agent - 安装脚本
echo ========================================
echo.

echo [1/3] 检查 Node.js 安装...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 未检测到 Node.js，请先安装 Node.js
    echo 下载地址: https://nodejs.org/
    pause
    exit /b 1
)
echo ✅ Node.js 已安装
node --version
echo.

echo [2/3] 安装项目依赖...
echo 这可能需要几分钟时间，请耐心等待...
echo.
npm install
if errorlevel 1 (
    echo.
    echo ❌ 依赖安装失败，请检查网络连接
    echo 尝试使用淘宝镜像: npm config set registry https://registry.npmmirror.com
    pause
    exit /b 1
)
echo.
echo ✅ 依赖安装成功
echo.

echo [3/3] 启动开发服务器...
echo.
npm run dev

pause
