import { NextRequest, NextResponse } from 'next/server';
import { getAllOutfits, getOutfitById, getOutfitsByPetType } from '@/data/pet-outfits';
import { getPetById } from '@/data/pets';
import { OutfitRedeemRequest } from '@/types';

// GET /api/pet-shop/outfits?petType=cat
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const petType = searchParams.get('petType');

    if (petType) {
      const outfits = getOutfitsByPetType(petType as 'cat' | 'dog');
      return NextResponse.json({ success: true, data: outfits });
    }

    const allOutfits = getAllOutfits();
    return NextResponse.json({ success: true, data: allOutfits });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/pet-shop/redeem
export async function POST(request: NextRequest) {
  try {
    const body: OutfitRedeemRequest = await request.json();
    
    // 验证必填字段
    if (!body.petId || !body.studentId || !body.outfitId) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 获取宠物和装饰信息
    const pet = getPetById(body.petId);
    const outfit = getOutfitById(body.outfitId);

    if (!pet) {
      return NextResponse.json(
        { success: false, message: 'Pet not found' },
        { status: 404 }
      );
    }

    if (!outfit) {
      return NextResponse.json(
        { success: false, message: 'Outfit not found' },
        { status: 404 }
      );
    }

    // 检查是否已拥有
    if (pet.unlockedOutfits.includes(body.outfitId)) {
      return NextResponse.json(
        { success: false, message: 'Already owns this outfit' },
        { status: 400 }
      );
    }

    // 检查玩具数量
    if (pet.toyCount < outfit.toyCost) {
      return NextResponse.json(
        { success: false, message: 'Not enough toys' },
        { status: 400 }
      );
    }

    // Mock 兑换逻辑
    return NextResponse.json(
      { 
        success: true, 
        message: `Successfully redeemed ${outfit.name}!`,
        data: {
          outfit,
          toysSpent: outfit.toyCost,
          remainingToys: pet.toyCount - outfit.toyCost
        }
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

// PATCH /api/pet-shop/equip
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { petId, outfitId, action } = body; // action: 'equip' | 'unequip'

    if (!petId || !outfitId || !action) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock 装备逻辑
    return NextResponse.json(
      { 
        success: true, 
        message: `Outfit ${action === 'equip' ? 'equipped' : 'unequipped'} successfully`
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
