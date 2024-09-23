export interface Product {
  id: string;
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
  subtitle: string;
}
export interface Categorias {
  id: number;
  nombre: string;
}

 export interface ProductCardProps { //Card en shoop
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    compose: Product;
    amount: number;
  }

 
