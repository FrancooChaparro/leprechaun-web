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
        const listProduct = await api.match.list();
        setProductos(listProduct); // Establecer los productos en el estado
      } catch (err) {
        console.error("Error fetching products:", err);
      } 
    };
  
    fetchProducts(); // Llama a la función para obtener los productos
  }, []);
  

  const AddCard = (newValue: Product, cantidad: number) => {
    console.log(newValue, "newvalue");
    console.log(Cart, "amount");
    
    const productInCart = Cart.find((item: Product) => item.id === newValue.id);

    if (productInCart) {
      const updatedCart = Cart.map((item: Product) =>
        item.id === newValue.id
          ? {
              ...item,
              amount: item.amount + cantidad,
              price: item.price + newValue.price * cantidad, // Calcula el nuevo precio total
            }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([
        ...Cart,
        { ...newValue, amount: cantidad, price: newValue.price * cantidad }, // Establece el precio total basado en la cantidad
      ]);
    }
  };
  

  const Add = (newValue: Product) => {
    
    const productInCart = Cart.find((item:Product) => item.id === newValue.id);
    
    if (productInCart) {
      // Si el producto ya está en el carrito, incrementa su cantidad
      const updatedCart = Cart.map((item:Product) =>
        item.id === newValue.id ? { ...item, amount: item.amount + 1, price: 3000 * (item.amount+1) } : item
      );
      setCart(updatedCart);

    } else {
      // Si el producto no está en el carrito, agrégalo
      setCart([...Cart, { ...newValue }]);

    }
  };
  
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
 AddCard
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
