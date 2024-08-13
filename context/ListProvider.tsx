"use client";
import React, { useState, FC, ReactNode } from "react";
import MyContext, { MyContextType } from "./ListContext"
import { products } from "@/models/products";

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [Cart, setCart] = useState<any>([]);
  const [Productos, setProductos] = useState<any>(products);


  const Add = (newValue: any[]) => {
    setCart([...Cart, newValue]);
  };

  const Discard = (itemToRemove: any) => {
    setCart((prevCart: any[]) => prevCart.filter(item => item !== itemToRemove));
  };


  
  const contextValue: MyContextType = {
 Cart,
 Discard,
 Add,
 Productos
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
