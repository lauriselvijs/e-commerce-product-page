import { IProduct } from "../types/Product.d";

export interface Cart {
  productQtyToCart: number;
  cart: IProduct[];
}
