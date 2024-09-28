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
  urlCategory: string;
  urlProduct: string;
  titleCategory: string;
  pricears: string;
}
export interface Categorias {
  id: number;
  nombre: string;
  url: string;
  imageBlur: string;
}

 export interface ProductCardProps { //Card en shoop
    id: string;
    name: string;
    description: string;
    image: string;
    price: number;
    compose: Product;
    amount: number;
    urlProduct: string;
   pricears: string;
  }

 
