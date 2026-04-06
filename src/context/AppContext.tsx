'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Student, ChatMessage } from '@/types';
import { mockStudent } from '@/data/student';

interface AppContextType {
  currentStudent: Student;
  chatMessages: ChatMessage[];
  addChatMessage: (message: ChatMessage) => void;
  clearChat: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentStudent] = useState<Student>(mockStudent);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const addChatMessage = (message: ChatMessage) => {
    setChatMessages(prev => [...prev, message]);
  };

  const clearChat = () => {
    setChatMessages([]);
  };

  return (
    <AppContext.Provider value={{ currentStudent, chatMessages, addChatMessage, clearChat }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
