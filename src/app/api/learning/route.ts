import { NextRequest, NextResponse } from 'next/server';
import { getLearningResourcesByWeakPoint, getAllLearningResourcesByStudent } from '@/data/learning-resources';

/**
 * GET /api/learning/resources/:weakPointId
 * 获取某个薄弱知识点的学习资源包
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { weakPointId: string } }
) {
  try {
    const weakPointId = params.weakPointId;

    if (!weakPointId) {
      return NextResponse.json(
        { success: false, error: '缺少必需参数: weakPointId' },
        { status: 400 }
      );
    }

    const resources = getLearningResourcesByWeakPoint(weakPointId);

    return NextResponse.json({
      success: true,
      data: resources,
    });
  } catch (error) {
    console.error('获取学习资源失败:', error);
    return NextResponse.json(
      { success: false, error: '获取学习资源失败，请稍后重试' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/learning/resources?studentId=S20240001
 * 获取学生的所有学习资源包
 * 
 * 查询参数：
 * - studentId: 学生ID（必需）
 * - status?: 资源状态过滤 ('assigned' | 'in-progress' | 'completed')
 */
export async function GET_STUDENT_RESOURCES(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const studentId = searchParams.get('studentId');
    const status = searchParams.get('status');

    if (!studentId) {
      return NextResponse.json(
        { success: false, error: '缺少必需参数: studentId' },
        { status: 400 }
      );
    }

    let resources = getAllLearningResourcesByStudent(studentId);

    // 按状态过滤
    if (status) {
      resources = resources.filter((r) => r.status === status);
    }

    return NextResponse.json({
      success: true,
      data: resources,
      total: resources.length,
    });
  } catch (error) {
    console.error('获取学生学习资源失败:', error);
    return NextResponse.json(
      { success: false, error: '获取学习资源失败，请稍后重试' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/learning/start
 * 开始学习某个薄弱知识点
 * 
 * 请求体：
 * {
 *   studentId: string;
 *   weakPointId: string;
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentId, weakPointId } = body;

    if (!studentId || !weakPointId) {
      return NextResponse.json(
        { success: false, error: '缺少必需参数: studentId 或 weakPointId' },
        { status: 400 }
      );
    }

    // 获取资源包
    const resources = getLearningResourcesByWeakPoint(weakPointId);

    // 更新状态为 in-progress
    resources.status = 'in-progress';
    resources.learningPath.currentPhase = 1; // 开始第一阶段

    return NextResponse.json({
      success: true,
      data: resources,
      message: '已开始学习，祝您学习愉快！',
    });
  } catch (error) {
    console.error('开始学习失败:', error);
    return NextResponse.json(
      { success: false, error: '开始学习失败，请稍后重试' },
      { status: 500 }
    );
  }
}

/**
 * PATCH /api/learning/mark-phase-complete
 * 标记学习阶段完成
 * 
 * 请求体：
 * {
 *   resourcePackageId: string;
 *   currentPhase: number;
 *   timeSpent: number;               // 实际用时（分钟）
 * }
 */
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { resourcePackageId, currentPhase, timeSpent } = body;

    if (!resourcePackageId || !currentPhase || timeSpent === undefined) {
      return NextResponse.json(
        { success: false, error: '缺少必需参数' },
        { status: 400 }
      );
    }

    // 这里应该从数据库更新，现在仅返回模拟数据
    const resources = getLearningResourcesByWeakPoint('WP_AUXILIARY_LINE_001');

    resources.learningPath.currentPhase = currentPhase + 1;
    resources.learningPath.completedTime = (resources.learningPath.completedTime || 0) + timeSpent;

    // 如果完成所有阶段，标记为已完成
    if (currentPhase >= resources.learningPath.phase) {
      resources.status = 'completed';
    }

    return NextResponse.json({
      success: true,
      data: resources,
      message: `第 ${currentPhase} 阶段学习完成，继续加油！`,
    });
  } catch (error) {
    console.error('标记阶段完成失败:', error);
    return NextResponse.json(
      { success: false, error: '标记完成失败，请稍后重试' },
      { status: 500 }
    );
  }
}
