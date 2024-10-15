// pages/api/addProduct.js
import prisma from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    // Obtener el cuerpo de la solicitud
    const { id, name, description, image, amount, price, unitPrice, stock, marca, subname, rubro, subtitle, urlCategory, urlProduct, titleCategory, pricears } = await req.json();

    // Crear un nuevo producto en la base de datos
    const newProduct = await prisma.product.create({
      data: {
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
        pricears,
      },
    });

    // Devolver una respuesta exitosa
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error adding product' }, { status: 500 });
  }
}
