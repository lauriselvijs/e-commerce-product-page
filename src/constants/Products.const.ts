import FirstProductImage from "./../asset/images/image-product-1.jpg";
import SecondProductImage from "./../asset/images/image-product-2.jpg";
import ThirdProductImage from "./../asset/images/image-product-3.jpg";
import FourthProductImage from "./../asset/images/image-product-4.jpg";

import FirstProductImageThumbnail from "./../asset/images/image-product-1-thumbnail.jpg";
import SecondProductImageThumbnail from "./../asset/images/image-product-2-thumbnail.jpg";
import ThirdProductImageThumbnail from "./../asset/images/image-product-3-thumbnail.jpg";
import FourthProductImageThumbnail from "./../asset/images/image-product-4-thumbnail.jpg";

export const SHOES = {
  product_id: "fall-limited-edition-sneakers",
  product_company: "SNEAKER COMPANY",
  product_name: "Fall Limited Edition Sneakers",
  product_desc: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand everything
    the weather can offer.`,
  product_price: 250.0,
  product_currency: "USD",
  product_disc: 0.5,
  product_price_with_disc: 125.0,
  product_qty: 10,
  product_gallery: [
    { image: FirstProductImage, thumbnail: FirstProductImageThumbnail },
    { image: SecondProductImage, thumbnail: SecondProductImageThumbnail },
    { image: ThirdProductImage, thumbnail: ThirdProductImageThumbnail },
    { image: FourthProductImage, thumbnail: FourthProductImageThumbnail },
  ],
  product_attr: null,
};
