export interface Product {
  id: number | string;
  name: string;
  description: string;
  image: string;
  amount: number;
  price: number;
  unitPrice: number;
  stock: number;
  marca?: string;
  subname?: string;
  rubro?: string[];
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
    id: number;
    amount: number;
  }

 
