"use client";
import React, { useState, FC, ReactNode, useEffect } from "react";
import MyContext, { MyContextType } from "./ListContext"
// import { products } from "@/models/products";
import { Product } from "@/types/types";
import api from "@/models/api";

interface MyProviderProps {
  children: ReactNode;
}


const MyProvider: FC<MyProviderProps> = ({ children }) => {
  
  // const [Cart, setCart] = useState<Product[]>([]);
  const [Cart, setCart] = useLocalStorage('cart', []);
  const [Productos, setProductos] = useState<Product[]>([]);
  const [message, setMessage] = useState<string | null>(null);
  const [ModalProduct, setModalProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const listProduct = await api.match.list();
        setProductos(listProduct); 
        //  setProductos(products); 

      } catch (err) {
        console.error("Error fetching products:", err);
      } 
    };
  
    fetchProducts(); 
  }, []);
  
  
  
  const Add = (newValue: Product, cantidad: number = 1) => {
    if (cantidad === 0)  { 
      setMessage("Debes agregar un numero de productos.")
      return "Debes agregar un numero de productos."

    }
    // Actualizar la lista de productos
    
    const updatedProducts = Productos.map((item: Product) =>
      item.id === newValue.id
        ? {
            ...item,
            stock: item.stock - cantidad, // Actualiza el stock del producto
          }
        : item
    );
    setProductos(updatedProducts);
    setModalProduct(newValue);
  
    // Buscar el producto en el carrito
    const productInCart = Cart.find((item: Product) => item.id === newValue.id);
  
    if (productInCart) {
      // Verificar si la cantidad solicitada es mayor que el stock disponible
      if (cantidad > productInCart.stock) {
        setMessage("No hay suficiente stock.")
        return "No hay suficiente stock."
      } 
  
      // Verificar si el stock es cero
      if (productInCart.stock === 0) {
        setMessage("No hay más stock.")
        return "No hay más stock."
      } 
  
      // Si todo está bien, actualiza el carrito
      const updatedCart = Cart.map((item: Product) =>
        item.id === newValue.id
          ? {
              ...item,
              amount: item.amount + cantidad,
              price: item.unitPrice * (item.amount + cantidad),
              stock: item.stock - cantidad,
            }
          : item
      );
      setCart(updatedCart);
      setModalProduct(newValue);
    } else {
      // Si el producto no está en el carrito, añadirlo
      if (cantidad > newValue.stock) {
        setMessage("No puedes añadir más de la cantidad disponible en stock.")
        return "No puedes añadir más de la cantidad disponible en stock."
      }
  
      setCart([
        ...Cart,
        { ...newValue, amount: cantidad, price: newValue.unitPrice * cantidad, stock: newValue.stock - cantidad },
      ]);
      setModalProduct(newValue);
      if (cantidad <= 1) {
        setMessage("Producto Añadido correctamente")
      } else {
        setMessage("Productos Añadido correctamente")

      }

    }
  };
  

  
  const Discard = (itemToRemove: string, amount: number) => {
    const stockInCart = Cart.find((item: Product) => item.id === itemToRemove )
    if (stockInCart) {
    setCart((prevCart: Product[]) => prevCart.filter(item => item.id !== itemToRemove));
    const updatedProducts = Productos.map((item: Product) =>
      item.id === itemToRemove
        ? {
            ...item,
            stock: stockInCart?.stock + amount, 
          }
        : item
    );
    setProductos(updatedProducts);
   }
  };


  const Subir = (productId: string) => {
    
    const updatedCart = Cart.map((item: Product) => {
      if (item.id === productId) {
        // Verifica si agregar uno más excedería el stock disponible
        if (item.stock === 0 ) {
          return item; 
        }
        setModalProduct(item);
        return {
          ...item,
          amount: item.amount + 1,
          price: item.price + item.unitPrice, // Actualiza el precio total
          stock: item.stock - 1, // Disminuye el stock al agregar uno
        };
      }
  
      
      return item;
    });
  
    setCart(updatedCart);

  };
  
  const Bajar = (productId: string) => {
    const updatedCart = Cart.map((item: Product) => {
      if (item.id === productId && item.amount > 1) {
        return {
          ...item,
          amount: item.amount - 1,
          price: item.price - item.unitPrice, // Restar el precio unitario del total
          stock: item.stock + 1, // Incrementar el stock disponible
        };
      }
      
      return item;
    });
    
    setCart(updatedCart);
  };
  

  /*WORKING*/

function useLocalStorage(key: string, initialValue: any) {
  // Estado inicial se toma de localStorage o usa el valor inicial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });

  // Función para actualizar el valor en localStorage
  const setValue = (value: any) => {
    try {
      // Permite que `value` sea una función
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      // Guarda en el estado y en localStorage
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting localStorage", error);
    }
  };

  return [storedValue, setValue];
}





  const contextValue: MyContextType = {
 Cart,
 Productos,
 message,
 Discard,
 Add,
 Subir, 
 Bajar,
 ModalProduct,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
