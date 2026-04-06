'use client';

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

interface RadarChartProps {
  data: { [key: string]: number };
}

export default function RadarChartComponent({ data }: RadarChartProps) {
  // 将对象转换为 Recharts 需要的数组格式
  const chartData = Object.entries(data).map(([name, value]) => ({
    name,
    value: Math.min(value, 100), // 确保值不超过100
  }));

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 text-slate-500">
        暂无数据
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart
        data={chartData}
        margin={{ top: 20, right: 100, bottom: 20, left: 100 }}
      >
        <PolarGrid stroke="#e2e8f0" />
        <PolarAngleAxis
          dataKey="name"
          tick={{ fontSize: 12, fill: '#64748b' }}
          angle={90}
          type="number"
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{ fontSize: 11, fill: '#94a3b8' }}
        />
        <Radar
          name="当前评分"
          dataKey="value"
          stroke="#0369a1"
          fill="#0369a1"
          fillOpacity={0.6}
          dot={{ r: 4, fill: '#0369a1' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          formatter={(value) => `${value}分`}
          labelStyle={{ color: '#1e293b' }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
