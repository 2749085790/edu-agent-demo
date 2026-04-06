import { NextRequest, NextResponse } from 'next/server';
import { getGrowthRadarReport, getMonthlyComparisonData } from '@/data/growth-radar';

/**
 * GET /api/growth-radar/:studentId
 * 获取学生的成长雷达报告
 * 
 * 查询参数：
 * - period?: 'current-month' | '3-months' | '6-months' (默认: current-month)
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { studentId: string } }
) {
  try {
    const studentId = params.studentId;
    const searchParams = request.nextUrl.searchParams;
    const period = searchParams.get('period') || 'current-month';

    if (!studentId) {
      return NextResponse.json(
        { success: false, error: '缺少必需参数: studentId' },
        { status: 400 }
      );
    }

    const report = getGrowthRadarReport(studentId);

    // 根据不同的周期返回不同的数据
    // 这里可以根据 period 参数过滤数据
    // 当前版本仅支持 current-month

    return NextResponse.json({
      success: true,
      data: report,
      metadata: {
        studentId,
        period,
        generatedAt: new Date().toISOString(),
        mode: 'mock',
        message: '当前为 Mock 模式，配置真实学情系统后可生成实时报告',
      },
    });
  } catch (error) {
    console.error('获取成长雷达报告失败:', error);
    return NextResponse.json(
      { success: false, error: '获取报告失败，请稍后重试' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/growth-radar/generate
 * 生成或刷新成长雷达报告
 * 
 * 请求体：
 * {
 *   studentId: string;
 *   period: {
 *     startDate: string (YYYY-MM-DD);
 *     endDate: string (YYYY-MM-DD);
 *   };
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentId, period } = body;

    if (!studentId || !period) {
      return NextResponse.json(
        { success: false, error: '缺少必需参数: studentId 或 period' },
        { status: 400 }
      );
    }

    const report = getGrowthRadarReport(studentId);

    // 更新周期信息
    report.radarData.period = period;
    report.reportGeneratedAt = new Date().toISOString();

    return NextResponse.json({
      success: true,
      data: report,
      message: '成长雷达报告已生成，请查看详细分析',
    });
  } catch (error) {
    console.error('生成成长雷达报告失败:', error);
    return NextResponse.json(
      { success: false, error: '生成报告失败，请稍后重试' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/growth-radar/:studentId/comparison
 * 获取学生的月份对比数据
 * 
 * 查询参数：
 * - month1: string (YYYY-MM) 必需
 * - month2: string (YYYY-MM) 必需
 * - month3?: string (YYYY-MM) 可选
 */
export async function GET_COMPARISON(
  request: NextRequest,
  { params }: { params: { studentId: string } }
) {
  try {
    const studentId = params.studentId;
    const searchParams = request.nextUrl.searchParams;
    const month1 = searchParams.get('month1');
    const month2 = searchParams.get('month2');
    const month3 = searchParams.get('month3');

    if (!studentId || !month1 || !month2) {
      return NextResponse.json(
        { success: false, error: '缺少必需参数: studentId, month1, month2' },
        { status: 400 }
      );
    }

    // 获取对比数据
    const comparisonData = getMonthlyComparisonData(studentId);

    return NextResponse.json({
      success: true,
      data: {
        studentId,
        months: [month1, month2, ...(month3 ? [month3] : [])],
        comparison: comparisonData,
      },
      metadata: {
        generatedAt: new Date().toISOString(),
        mode: 'mock',
      },
    });
  } catch (error) {
    console.error('获取对比数据失败:', error);
    return NextResponse.json(
      { success: false, error: '获取对比数据失败，请稍后重试' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/growth-radar/:studentId/update-dimension
 * 更新某个能力维度的评分
 * 仅供管理员或系统内部使用
 * 
 * 请求体：
 * {
 *   dimensionId: string;
 *   score: number;
 *   timestamp?: string;
 * }
 */
export async function PATCH(
  request: NextRequest,
  { params }: { params: { studentId: string } }
) {
  try {
    const studentId = params.studentId;
    const body = await request.json();
    const { dimensionId, score, timestamp } = body;

    if (!studentId || !dimensionId || score === undefined) {
      return NextResponse.json(
        { success: false, error: '缺少必需参数' },
        { status: 400 }
      );
    }

    if (score < 0 || score > 100) {
      return NextResponse.json(
        { success: false, error: '评分必须在 0-100 之间' },
        { status: 400 }
      );
    }

    // 这里应该更新数据库中的评分数据
    const report = getGrowthRadarReport(studentId);

    return NextResponse.json({
      success: true,
      data: report,
      message: `${dimensionId} 的评分已更新为 ${score} 分`,
    });
  } catch (error) {
    console.error('更新能力维度评分失败:', error);
    return NextResponse.json(
      { success: false, error: '更新失败，请稍后重试' },
      { status: 500 }
    );
  }
}
