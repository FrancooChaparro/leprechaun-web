// pages/api/products.js
import prisma from "@/lib/prisma"

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    try {
      const products = await prisma.product.findMany()
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' })
    }
  } else {
    // Manejar otros métodos HTTP (por si intentan enviar otro tipo de solicitud)
    res.setHeader("Allow", ["GET"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
