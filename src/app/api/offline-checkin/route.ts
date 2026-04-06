import { NextRequest, NextResponse } from 'next/server';
import { getRecordsByStudentId, hasCheckedInToday } from '@/data/checkin-records';
import { OfflineCheckInRequest } from '@/types';

// GET /api/offline-checkin?studentId=S20240001
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');

    if (!studentId) {
      return NextResponse.json(
        { success: false, message: 'Student ID is required' },
        { status: 400 }
      );
    }

    const records = getRecordsByStudentId(studentId).filter(r => r.type === 'offline');
    const hasCheckedIn = hasCheckedInToday(studentId, 'offline');

    return NextResponse.json({ 
      success: true, 
      data: {
        records,
        hasCheckedInToday: hasCheckedIn
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/offline-checkin
export async function POST(request: NextRequest) {
  try {
    const body: OfflineCheckInRequest = await request.json();
    
    // 验证必填字段
    if (!body.studentId || !body.petId || !body.reservationCode) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 检查今日是否已打卡
    if (hasCheckedInToday(body.studentId, 'offline')) {
      return NextResponse.json(
        { success: false, message: 'Already checked in today' },
        { status: 400 }
      );
    }

    // Mock 创建打卡记录
    const newRecord = {
      id: `CHECK${Date.now()}`,
      studentId: body.studentId,
      petId: body.petId,
      type: 'offline' as const,
      location: body.location || '未知门店',
      reservationCode: body.reservationCode,
      reward: {
        type: 'toy' as const,
        amount: 1,
      },
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(
      { 
        success: true, 
        data: newRecord, 
        message: 'Check-in successful! Earned 1 toy 🎁' 
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
