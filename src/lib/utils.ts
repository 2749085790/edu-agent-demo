import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('zh-CN');
}

export function getMasteryColor(mastery: string): string {
  switch (mastery) {
    case 'mastered': return 'text-green-600 bg-green-50';
    case 'learning': return 'text-amber-600 bg-amber-50';
    case 'weak': return 'text-red-600 bg-red-50';
    default: return 'text-gray-600 bg-gray-50';
  }
}

export function getMasteryLabel(mastery: string): string {
  switch (mastery) {
    case 'mastered': return '已掌握';
    case 'learning': return '待巩固';
    case 'weak': return '薄弱';
    default: return '未知';
  }
}

export function getPriorityColor(priority: string): string {
  switch (priority) {
    case 'high': return 'text-red-700 bg-red-50 border-red-200';
    case 'medium': return 'text-amber-700 bg-amber-50 border-amber-200';
    case 'low': return 'text-blue-700 bg-blue-50 border-blue-200';
    default: return 'text-gray-700 bg-gray-50 border-gray-200';
  }
}

export function getPriorityLabel(priority: string): string {
  switch (priority) {
    case 'high': return '高优先级';
    case 'medium': return '中优先级';
    case 'low': return '低优先级';
    default: return '未设置';
  }
}
