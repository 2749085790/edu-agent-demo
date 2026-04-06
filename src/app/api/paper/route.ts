import { NextRequest, NextResponse } from 'next/server';
import { getTargetedPaperByStudentId } from '@/data/targeted-paper';

/**
 * POST /api/paper/generate-targeted
 * 生成漏洞靶向组卷
 * 
 * 请求体：
 * {
 *   studentId: string;                    // 学生ID
 *   diagnosticReportId?: string;          // 诊断报告ID（可选）
 *   subjectId?: string;                   // 科目ID（可选）
 *   paperSize?: number;                   // 试卷题目数量（可选，默认5）
 * }
 * 
 * 响应：TargetedPaper JSON
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentId, diagnosticReportId, subjectId, paperSize = 5 } = body;

    if (!studentId) {
      return NextResponse.json(
        { success: false, error: '缺少必需参数: studentId' },
        { status: 400 }
      );
    }

    // 获取目标试卷
    const paper = getTargetedPaperByStudentId(studentId);

    // 如果指定了试卷大小，截取相应数量的题目
    if (paperSize && paperSize < paper.problems.length) {
      paper.problems = paper.problems.slice(0, paperSize);
      paper.totalEstimatedTime = paper.problems.reduce((sum, p) => sum + p.estimatedTime, 0);
    }

    return NextResponse.json({
      success: true,
      data: paper,
      metadata: {
        studentId,
        diagnosticReportId,
        subjectId,
        generatedAt: new Date().toISOString(),
        mode: 'mock',
        message: '当前为 Mock 模式，配置真实学情系统后可生成个性化试卷',
      },
    });
  } catch (error) {
    console.error('生成漏洞靶向组卷失败:', error);
    return NextResponse.json(
      { success: false, error: '生成试卷失败，请稍后重试' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/paper/generate-targeted?studentId=S20240001
 * 获取已生成的漏洞靶向组卷
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const studentId = searchParams.get('studentId');

    if (!studentId) {
      return NextResponse.json(
        { success: false, error: '缺少必需参数: studentId' },
        { status: 400 }
      );
    }

    const paper = getTargetedPaperByStudentId(studentId);

    return NextResponse.json({
      success: true,
      data: paper,
    });
  } catch (error) {
    console.error('获取漏洞靶向组卷失败:', error);
    return NextResponse.json(
      { success: false, error: '获取试卷失败，请稍后重试' },
      { status: 500 }
    );
  }
}
