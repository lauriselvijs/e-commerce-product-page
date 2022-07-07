import React, { MouseEvent, useState } from "react";
import {
  ProductPageGalleryFooter,
  ProductPageGalleryImg,
  ProductPageGalleryStyle,
  ProductPageGalleryThumbnail,
  ProductPageGalleryThumbnailBtn,
} from "./ProductPageGallery.style";
import FirstProductImage from "../../asset/images/image-product-1.jpg";
import SecondProductImage from "../../asset/images/image-product-2.jpg";
import ThirdProductImage from "../../asset/images/image-product-3.jpg";
import FourthProductImage from "../../asset/images/image-product-4.jpg";

import FirstProductImageThumbnail from "../../asset/images/image-product-1-thumbnail.jpg";
import SecondProductImageThumbnail from "../../asset/images/image-product-2-thumbnail.jpg";
import ThirdProductImageThumbnail from "../../asset/images/image-product-3-thumbnail.jpg";
import FourthProductImageThumbnail from "../../asset/images/image-product-4-thumbnail.jpg";

const PRODUCT_IMAGE_GALLERY = [
  { image: FirstProductImage, thumbnail: FirstProductImageThumbnail },
  { image: SecondProductImage, thumbnail: SecondProductImageThumbnail },
  { image: ThirdProductImage, thumbnail: ThirdProductImageThumbnail },
  { image: FourthProductImage, thumbnail: FourthProductImageThumbnail },
];

const ProductPageGallery = () => {
  const [productImage, setProductImage] = useState<string>(
    PRODUCT_IMAGE_GALLERY[0].image
  );
  const [selectedImage, setSelectedImage] = useState<string>(
    PRODUCT_IMAGE_GALLERY[0].image
  );

  const onProductPageGalleryThumbnailBtnClick = (image: string) => {
    setProductImage(image);
  };

  const productThumbnailGallery = PRODUCT_IMAGE_GALLERY.map(
    ({ thumbnail, image }) => (
      <ProductPageGalleryThumbnailBtn
        selected={image === productImage}
        onClick={() => onProductPageGalleryThumbnailBtnClick(image)}
        key={thumbnail}
      >
        <ProductPageGalleryThumbnail
          selected={image === productImage}
          width={63}
          height={64}
          src={thumbnail}
          alt="Product thumbnail"
        />
      </ProductPageGalleryThumbnailBtn>
    )
  );

  return (
    <ProductPageGalleryStyle>
      <ProductPageGalleryImg
        width={396}
        height={396}
        src={productImage}
        alt="Product"
      />
      <ProductPageGalleryFooter>
        {productThumbnailGallery}
      </ProductPageGalleryFooter>
    </ProductPageGalleryStyle>
  );
};

export default ProductPageGallery;
