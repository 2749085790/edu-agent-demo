import { CheckInRecord } from '@/types';

export const mockCheckInRecords: CheckInRecord[] = [
  // 线上打卡记录
  {
    id: 'CHECK20240319001',
    studentId: 'S20240001',
    petId: 'PET20240001',
    type: 'online',
    reward: {
      type: 'feed',
      amount: 1,
    },
    timestamp: '2026-04-03T15:30:00Z',
  },
  {
    id: 'CHECK20240318001',
    studentId: 'S20240001',
    petId: 'PET20240001',
    type: 'online',
    reward: {
      type: 'feed',
      amount: 1,
    },
    timestamp: '2026-04-02T14:20:00Z',
  },
  {
    id: 'CHECK20240317001',
    studentId: 'S20240001',
    petId: 'PET20240001',
    type: 'online',
    reward: {
      type: 'feed',
      amount: 1,
    },
    timestamp: '2026-04-01T16:00:00Z',
  },
  
  // 线下打卡记录
  {
    id: 'CHECK20240318002',
    studentId: 'S20240001',
    petId: 'PET20240001',
    type: 'offline',
    location: '杨择学AI自习室（中关村店）',
    reservationCode: 'YZX20260402001',
    reward: {
      type: 'toy',
      amount: 1,
    },
    timestamp: '2026-04-02T16:00:00Z',
  },
  {
    id: 'CHECK20240315002',
    studentId: 'S20240001',
    petId: 'PET20240001',
    type: 'offline',
    location: '杨择学AI自习室（五道口店）',
    reservationCode: 'YZX20260330002',
    reward: {
      type: 'toy',
      amount: 1,
    },
    timestamp: '2026-03-30T17:30:00Z',
  },
  {
    id: 'CHECK20240319002',
    studentId: 'S20240002',
    petId: 'PET20240002',
    type: 'online',
    reward: {
      type: 'feed',
      amount: 1,
    },
    timestamp: '2026-04-03T10:00:00Z',
  },
];

export const getRecordsByStudentId = (studentId: string): CheckInRecord[] => {
  return mockCheckInRecords
    .filter(record => record.studentId === studentId)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

export const getRecordsByPetId = (petId: string): CheckInRecord[] => {
  return mockCheckInRecords
    .filter(record => record.petId === petId)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

export const getTodayRecords = (studentId: string): CheckInRecord[] => {
  const today = new Date().toDateString();
  return mockCheckInRecords.filter(record => {
    return record.studentId === studentId && 
           new Date(record.timestamp).toDateString() === today;
  });
};

export const hasCheckedInToday = (studentId: string, type: 'online' | 'offline'): boolean => {
  const todayRecords = getTodayRecords(studentId);
  return todayRecords.some(record => record.type === type);
};

export const getAllRecords = (): CheckInRecord[] => {
  return mockCheckInRecords.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
};

// 统计信息
export const getCheckInStats = (studentId: string) => {
  const records = getRecordsByStudentId(studentId);
  const onlineCount = records.filter(r => r.type === 'online').length;
  const offlineCount = records.filter(r => r.type === 'offline').length;
  const totalToys = records
    .filter(r => r.type === 'offline')
    .reduce((sum, r) => sum + r.reward.amount, 0);
  const totalFeeds = records
    .filter(r => r.type === 'online')
    .reduce((sum, r) => sum + r.reward.amount, 0);

  return {
    onlineCount,
    offlineCount,
    totalCount: records.length,
    totalToys,
    totalFeeds,
  };
};
