// pages/api/addProduct.js
import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { id, name, description, image, amount, price, unitPrice, stock, marca, subname, rubro, subtitle, urlCategory, urlProduct, titleCategory, pricears } = req.body;
    
    try {
      const newProduct = await prisma.product.create({
        data: {
          id,
          name,
          description,
          image,
          amount,
          price,
          unitPrice,
          stock,
          marca,
          subname,
          rubro,
          subtitle,
          urlCategory,
          urlProduct,
          titleCategory,
          pricears
        }
      });
      
      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error adding product' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
