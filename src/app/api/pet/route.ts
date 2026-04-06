import { NextRequest, NextResponse } from 'next/server';
import { getPetByStudentId, getAllPets, calculatePetStage } from '@/data/pets';
import { PetCreateRequest } from '@/types';

// GET /api/pet?studentId=S20240001
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');

    if (studentId) {
      const pet = getPetByStudentId(studentId);
      if (!pet) {
        return NextResponse.json(
          { success: false, message: 'Pet not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, data: pet });
    }

    const allPets = getAllPets();
    return NextResponse.json({ success: true, data: allPets });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/pet/create
export async function POST(request: NextRequest) {
  try {
    const body: PetCreateRequest = await request.json();
    
    // 验证必填字段
    if (!body.studentId || !body.petType || !body.petName) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 检查是否已有宠物
    const existingPet = getPetByStudentId(body.studentId);
    if (existingPet) {
      return NextResponse.json(
        { success: false, message: 'Student already has a pet' },
        { status: 400 }
      );
    }

    // 创建新宠物
    const newPet = {
      id: `PET${Date.now()}`,
      studentId: body.studentId,
      petType: body.petType,
      petName: body.petName,
      stage: 'egg' as const,
      level: 1,
      experience: 0,
      experienceToNext: 100,
      feedCount: 0,
      toyCount: 0,
      currentOutfit: [],
      unlockedOutfits: [],
      hatchDate: new Date().toISOString(),
      lastFeedDate: new Date().toISOString(),
      lastOfflineCheckIn: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json(
      { success: true, data: newPet, message: 'Pet created successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PATCH /api/pet/feed
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { petId, type } = body;

    if (!petId || !type) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock 更新逻辑
    return NextResponse.json(
      { 
        success: true, 
        message: `${type === 'online' ? 'Feed' : 'Check-in'} successful`,
        data: {
          experienceGained: type === 'online' ? 50 : 30,
          reward: type === 'online' ? 'feed' : 'toy'
        }
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
