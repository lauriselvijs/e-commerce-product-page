import { IProduct } from "../../../types/Product";

export interface ProductGallery {
  currentImg: string;
  showGalleryOverlay: boolean;
  gallery: IProduct["product_gallery"];
}
