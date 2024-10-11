import { Product } from "@/types/types"

export const bagCheckoutAction = async ({ cart, total }: { cart: Product[], total: any }) => {
    const ClientPedido =  cart.map((e: Product) => ({
        cantidad: e.amount,
        nombreProducto: e.name,
        id: e.id,
        PrecioProducto: e.price
    }));
    return {
        ClientPedido, PrecioTotal : total
    };
};