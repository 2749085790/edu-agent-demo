'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BookOpen, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary-600" />
            <div>
              <div className="text-xl font-bold text-primary-800">杨择学</div>
              <div className="text-xs text-slate-500">AI督学Agent</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-700 hover:text-primary-600 font-medium">
              首页
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-700 hover:text-primary-600 font-medium">
                学生端 <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <Link href="/diagnosis" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">学情诊断</Link>
                <Link href="/plan" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">学习计划</Link>
                <Link href="/analysis" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">错因分析</Link>
                <Link href="/targeted-paper" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">漏洞靶向组卷</Link>
                <Link href="/learning-path" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">学习资源中心</Link>
                <div className="border-t border-slate-200 my-1"></div>
                <Link href="/pet-companion" className="block px-4 py-2 hover:bg-purple-50 text-purple-700 font-semibold">🐾 学习伙伴</Link>
                <Link href="/pet-manor" className="block px-4 py-2 hover:bg-green-50 text-green-700 font-semibold">🏡 宠物庄园</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-slate-700 hover:text-primary-600 font-medium">
                家长端 <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <Link href="/parent-report" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">学习报告</Link>
                <Link href="/growth-radar" className="block px-4 py-2 hover:bg-slate-50 text-slate-700">成长雷达</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-blue-700 hover:text-blue-900 font-semibold">
                🏫 学校端 <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <Link href="/school" className="block px-4 py-2 hover:bg-blue-50 text-blue-700 font-semibold">🌐 三方联动生态</Link>
                <div className="border-t border-slate-200 my-1"></div>
                <Link href="/school/ai-teaching" className="block px-4 py-2 hover:bg-blue-50 text-blue-700">📚 AI备课平台</Link>
                <Link href="/school/analytics" className="block px-4 py-2 hover:bg-purple-50 text-purple-700">📊 学情管理系统</Link>
                <Link href="/school/homework" className="block px-4 py-2 hover:bg-green-50 text-green-700">✍️ 作业布置与批改</Link>
                <Link href="/school/communication" className="block px-4 py-2 hover:bg-orange-50 text-orange-700">💬 家校沟通中心</Link>
              </div>
            </div>
            <Link href="/operations" className="text-slate-700 hover:text-primary-600 font-medium">
              运营看板
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-indigo-700 hover:text-indigo-900 font-semibold">
                🎯 面试Demo <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <Link href="/analytics" className="block px-4 py-2 hover:bg-blue-50 text-blue-700 font-semibold">📊 数据看板</Link>
                <Link href="/ab-test" className="block px-4 py-2 hover:bg-purple-50 text-purple-700 font-semibold">🧪 A/B测试</Link>
                <Link href="/prd" className="block px-4 py-2 hover:bg-green-50 text-green-700 font-semibold">📄 PRD文档</Link>
                <Link href="/competitor" className="block px-4 py-2 hover:bg-orange-50 text-orange-700 font-semibold">📈 竞品分析</Link>
                <Link href="/sow" className="block px-4 py-2 hover:bg-cyan-50 text-cyan-700 font-semibold">📋 工作说明书</Link>
                <Link href="/sor" className="block px-4 py-2 hover:bg-pink-50 text-pink-700 font-semibold">📖 需求规格书</Link>
                <Link href="/demo-script" className="block px-4 py-2 hover:bg-indigo-50 text-indigo-700 font-semibold">🎬 演示脚本</Link>
                <Link href="/ai-config" className="block px-4 py-2 hover:bg-purple-50 text-purple-700 font-semibold">🤖 AI功能配置</Link>
              </div>
            </div>
            <Link href="/chat" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 font-medium">
              AI助手
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-2 space-y-1">
            <Link href="/" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">首页</Link>
            <p className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase">学生端</p>
            <Link href="/diagnosis" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded ml-2">学情诊断</Link>
            <Link href="/plan" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded ml-2">学习计划</Link>
            <Link href="/analysis" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded ml-2">错因分析</Link>
            <Link href="/targeted-paper" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded ml-2">漏洞靶向组卷</Link>
            <Link href="/learning-path" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded ml-2">学习资源中心</Link>
            <Link href="/pet-companion" className="block px-3 py-2 text-purple-700 hover:bg-purple-50 rounded ml-2 font-semibold">🐾 学习伙伴</Link>
            <Link href="/pet-manor" className="block px-3 py-2 text-green-700 hover:bg-green-50 rounded ml-2 font-semibold">🏡 宠物庄园</Link>
            <p className="px-3 py-2 text-xs font-semibold text-slate-600 uppercase mt-2">家长端</p>
            <Link href="/parent-report" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded ml-2">学习报告</Link>
            <Link href="/growth-radar" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded ml-2">成长雷达</Link>
            <Link href="/operations" className="block px-3 py-2 text-slate-700 hover:bg-slate-50 rounded">运营看板</Link>
            <Link href="/chat" className="block px-3 py-2 bg-primary-600 text-white rounded text-center mt-4">AI助手</Link>
          </div>
        </div>
      )}
    </header>
  );
}
