import { IProduct } from "../types/Product.d";

export interface ICart {
  productQtyToCart: number;
  cart: IProduct[];
}
