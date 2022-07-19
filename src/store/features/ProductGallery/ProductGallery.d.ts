import { IProduct } from "../../../types/Product";

export interface IProductGallery {
  currentImg: string;
  showGalleryOverlay: boolean;
  gallery: IProduct["product_gallery"];
}
