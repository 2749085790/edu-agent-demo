import { NextRequest, NextResponse } from 'next/server';
import { getChatsByPetId, getRandomResponse } from '@/data/pet-chat';
import { getPetById } from '@/data/pets';
import { PET_SYSTEM_PROMPTS, PetChatRequest } from '@/types';

// GET /api/pet-chat?petId=PET20240001
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const petId = searchParams.get('petId');

    if (!petId) {
      return NextResponse.json(
        { success: false, message: 'Pet ID is required' },
        { status: 400 }
      );
    }

    const chats = getChatsByPetId(petId);
    return NextResponse.json({ success: true, data: chats });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/pet-chat/send
export async function POST(request: NextRequest) {
  try {
    const body: PetChatRequest = await request.json();
    
    // 验证必填字段
    if (!body.petId || !body.studentId || !body.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 获取宠物信息
    const pet = getPetById(body.petId);
    if (!pet) {
      return NextResponse.json(
        { success: false, message: 'Pet not found' },
        { status: 404 }
      );
    }

    // Mock AI回复（实际应调用OpenAI API）
    const systemPrompt = PET_SYSTEM_PROMPTS[pet.petType];
    const response = getRandomResponse('casual');

    const newChat = {
      id: `CHAT${Date.now()}`,
      petId: body.petId,
      studentId: body.studentId,
      message: body.message,
      response,
      timestamp: new Date().toISOString(),
      category: 'casual' as const,
    };

    return NextResponse.json(
      { 
        success: true, 
        data: newChat,
        message: 'Message sent successfully'
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
