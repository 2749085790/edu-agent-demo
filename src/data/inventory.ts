import { Inventory, InventoryItem } from '@/types';

// Mock 背包数据
export const mockInventory: Inventory = {
  studentId: 'STU2024001',
  items: [
    { itemId: 'hoe_basic', quantity: 1 },
    { itemId: 'watering_can', quantity: 1 },
    { itemId: 'seed_knowledge', quantity: 5 },
    { itemId: 'seed_wisdom', quantity: 3 },
    { itemId: 'seed_math', quantity: 8 },
    { itemId: 'seed_english', quantity: 6 },
    { itemId: 'food-fish', quantity: 10 },
    { itemId: 'food-milk', quantity: 5 },
    { itemId: 'fertilizer_basic', quantity: 3 },
  ],
  capacity: 50,
};

// 获取道具数量
export const getItemQuantity = (inventory: Inventory, itemId: string): number => {
  const item = inventory.items.find(i => i.itemId === itemId);
  return item ? item.quantity : 0;
};

// 添加道具
export const addItem = (inventory: Inventory, itemId: string, quantity: number = 1): Inventory => {
  const updated = { ...inventory, items: [...inventory.items] };
  const existing = updated.items.find(i => i.itemId === itemId);
  
  if (existing) {
    existing.quantity += quantity;
  } else {
    updated.items.push({ itemId, quantity });
  }
  
  return updated;
};

// 移除道具
export const removeItem = (inventory: Inventory, itemId: string, quantity: number = 1): Inventory => {
  const updated = { ...inventory, items: [...inventory.items] };
  const existing = updated.items.find(i => i.itemId === itemId);
  
  if (!existing) {
    throw new Error(`背包中不存在道具: ${itemId}`);
  }
  
  if (existing.quantity < quantity) {
    throw new Error(`道具数量不足: ${itemId}`);
  }
  
  existing.quantity -= quantity;
  
  // 移除数量为0的道具
  updated.items = updated.items.filter(i => i.quantity > 0);
  
  return updated;
};

// 检查是否有足够道具
export const hasEnoughItems = (inventory: Inventory, itemId: string, quantity: number): boolean => {
  return getItemQuantity(inventory, itemId) >= quantity;
};

// 获取背包道具总数
export const getTotalItemsCount = (inventory: Inventory): number => {
  return inventory.items.reduce((sum, item) => sum + item.quantity, 0);
};

// 获取背包使用率
export const getInventoryUsage = (inventory: Inventory): number => {
  return (getTotalItemsCount(inventory) / inventory.capacity) * 100;
};
