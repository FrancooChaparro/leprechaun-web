"use client"
import { Product } from '@/types/types';
import { createContext, useContext } from 'react';

export type MyContextType = {
  Add: (newValue: Product, cantidad?: number) => void;
  Discard: (newValue: string, amount: number) => void;
  ModalProduct: Product | null;
  message: string | null;
  Subir: (newValue: string) => void;
  Bajar: (newValue: string) => void;
  Cart: Product[];
  Productos: Product[];
  // AddCard: (newValue: Product, cantidad: number) => void;
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