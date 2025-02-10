
 export interface ProductsProps {
  items?: IProduct[];
}
export interface IProduct {
  id: number;
  title?: string;
  description?: string;
  stock?: number;
  images: string[];
  price: number;
  quantity?: number;
  discountPercentage: number;
  category?: string;
  rating?: number;
  brand: string;
}
export interface IProductQuery {
    page?: number,
    limit?: number
}




export interface ICustomer {
  id?: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  gender?:string;
}
