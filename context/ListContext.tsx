"use client"
import { createContext, useContext } from 'react';

export type MyContextType = {
  Add: (newValue: any[]) => void;
  Discard: (newValue: any[]) => void;
  Cart: any[] | [];
  Productos: any[] | [];
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default MyContext;