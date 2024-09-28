import { NextRequest, NextResponse } from "next/server";
import api from "@/models/api"
import { Product } from "./types/types";

const categorias = ['pulimentos', 'ceras', 'sellador-acrilico', 'desengrasantes', 'accesorios', 'backing', 'cepillos', 'acondicionador-exterior', 'shampoo', 'acondicionador-interior', 'pintura-removible', 'microfibras', 'sellador-ceramico', 'pad']

export async function middleware(request: NextRequest) {
    const { pathname } = new URL(request.url);

    //projects details
    if (pathname.startsWith("/shoop/")) {
        const slug = pathname.replace("/shoop/", "");
        const slugExists = categorias.includes(slug);

        if (!slugExists) {
            return NextResponse.redirect(new URL("/shoop", request.url));
        }
    }


    // if (pathname.startsWith("/products/")) {
    //     const slug = pathname.replace("/products/", "");
    //     const arr: Product[] = await api.match.list()
    //     const listadoURL = arr.map(e=> e.urlProduct)
    //     const slugExists = listadoURL.includes(slug)
    //     console.log(listadoURL);
        
    //     if (!slugExists) {
    //         return NextResponse.redirect(new URL("/shoop", request.url));
    //     }
    // }

    return NextResponse.next();
}