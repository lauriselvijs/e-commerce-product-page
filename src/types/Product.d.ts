import { IGallery } from "./Gallery.d";

export interface IProduct {
  product_id: string;
  product_company: string;
  product_name: string;
  product_desc: string;
  product_price: number;
  product_currency: string;
  product_disc: number | null;
  product_price_with_disc: number | null;
  product_qty: number;
  product_gallery: IGallery[];
  product_attr: IProductAttr | null;
}

export interface IProductAttr {
  text_attr: IProductTextAttr[] | null;
  swatch_attr: IProductSwatchAttr[] | null;
}

export interface IProductTextAttr {
  name: string;
  value: string[] | number[];
}

export interface IProductSwatchAttr {
  color_name: string;
  color_hex_code: string;
}
