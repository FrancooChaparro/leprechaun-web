"use client";
import React, { useState, FC, ReactNode } from "react";
import MyContext, { MyContextType } from "./ListContext"
import { products } from "@/models/products";

interface MyProviderProps {
  children: ReactNode;
}
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  amount: number;
  price: number;
}
const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [Cart, setCart] = useState<any>([]);
  const [Productos, setProductos] = useState<any>(products);

  const Add = (newValue: any) => {
    const productInCart = Cart.find((item:Product) => item.id === newValue.id);
  
    if (productInCart) {
      // Si el producto ya está en el carrito, incrementa su cantidad
      const updatedCart = Cart.map((item:Product) =>
        item.id === newValue.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agrégalo
      setCart([...Cart, { ...newValue }]);
    }
  };
  
  const Discard = (itemToRemove: any) => {
    setCart((prevCart: any[]) => prevCart.filter(item => item !== itemToRemove));
  };

  const Subir = (productId: number) => {
    const updatedCart = Cart.map((item: Product) =>
      item.id === productId
        ? { ...item, amount: item.amount + 1, price: item.price + (item.price / item.amount) }
        : item
    );
    setCart(updatedCart);
  };
  
  const Bajar = (productId: number) => {
    const updatedCart = Cart.map((item: Product) => 
      item.id === productId && item.amount > 1 
        ? { 
            ...item, 
            amount: item.amount - 1, 
            price: item.price - (item.price / item.amount) 
          } 
        : item
    );
    setCart(updatedCart);
  };
  
  const contextValue: MyContextType = {
 Cart,
 Discard,
 Add,
 Productos,
 Subir, 
 Bajar
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
