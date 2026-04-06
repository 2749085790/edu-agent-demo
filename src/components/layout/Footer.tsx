import { Brain, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-6 w-6 text-primary-400" />
            <span className="text-lg font-bold">杨择学 AI督学Agent</span>
          </div>
          <p className="text-slate-400 mb-2">查漏补缺 · 只刷不会 · 用AI为孩子铺就最快的路</p>
          <p className="text-slate-500 text-sm">
            © 2026 杨择学 | 用 <Heart className="h-4 w-4 inline text-red-500" /> 做教育
          </p>
        </div>
      </div>
    </footer>
  );
}
