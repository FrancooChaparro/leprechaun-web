import { Product } from "@/types/types";

export async function addBagProduct(Product: Product) {
    console.log(Product, "producto");
    
    const response = await fetch(`http://localhost:3000/api/addBagProduct`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Product),
    });
    const data = await response.json();
    return data;
  }