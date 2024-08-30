"use client";
import React, { useState, FC, ReactNode, useEffect } from "react";
import MyContext, { MyContextType } from "./ListContext"
import { products } from "@/models/products";
import { Product } from "@/types/types";
import api from "@/models/api";

interface MyProviderProps {
  children: ReactNode;
}



const MyProvider: FC<MyProviderProps> = ({ children }) => {
  
  const [Cart, setCart] = useState<Product[]>([]);
  const [Productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const listProduct = await api.match.list();
        // setProductos(listProduct); 
         setProductos(products); 

      } catch (err) {
        console.error("Error fetching products:", err);
      } 
    };
  
    fetchProducts(); 
  }, []);


  const Add = (newValue: Product, cantidad: number = 1) => {
    const productInCart = Cart.find((item: Product) => item.id === newValue.id);
  
    if (productInCart) {
      const updatedCart = Cart.map((item: Product) =>
        item.id === newValue.id
          ? {
              ...item,
              amount: item.amount + cantidad,
              price: item.unitPrice * (item.amount + cantidad), 
            }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([
        ...Cart,
        { ...newValue, amount: cantidad, price: newValue.unitPrice * cantidad }, 
      ]);
    }
  };
  

  // const AddCard = (newValue: Product, cantidad: number) => {
  //   const productInCart = Cart.find((item: Product) => item.id === newValue.id);

  //   if (productInCart) {
  //     const updatedCart = Cart.map((item: Product) =>
  //       item.id === newValue.id
  //         ? {
  //             ...item,
  //             amount: item.amount + cantidad,
  //             price: item.price + newValue.price * cantidad, 
  //           }
  //         : item
  //     );
  //     setCart(updatedCart);
  //   } else {
  //     setCart([
  //       ...Cart,
  //       { ...newValue, amount: cantidad, price: newValue.price * cantidad }, 
  //     ]);
  //   }
  // };
  

  // const Add = (newValue: Product) => {
  //   const productInCart = Cart.find((item:Product) => item.id === newValue.id);
    
  //   if (productInCart) {
  //     const updatedCart = Cart.map((item:Product) =>
  //       item.id === newValue.id ? { ...item, amount: item.amount + 1, price: item.unitPrice * (item.amount+1) } : item
  //     );
  //     setCart(updatedCart);

  //   } else {
  //     setCart([...Cart, { ...newValue }]);

  //   }
  // };
  
  const Discard = (itemToRemove: number) => {
    setCart((prevCart: Product[]) => prevCart.filter(item => item.id !== itemToRemove));
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
 Productos,
 Discard,
 Add,
 Subir, 
 Bajar,
//  AddCard
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
