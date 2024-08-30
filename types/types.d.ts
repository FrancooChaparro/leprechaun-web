export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  amount: number;
  price: number;
  unitPrice: number;
}
export interface Categorias {
  id: number;
  nombre: string;
}

 export interface ProductCardProps { //Card en shoop
    name: string;
    description: string;
    image: string;
    price: number;
    compose: Product;
  }

 
