import { IProduct } from "../../../types/Product";

export interface IProductGallery {
  showGalleryOverlay: boolean;
  gallery: IProduct["product_gallery"];
}
