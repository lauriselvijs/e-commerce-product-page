import React from "react";
import ProductPageGallery from "../../components/ProductPageGallery";
import ProductPageProductDesc from "../../components/ProductPageProductDesc";
import { PageStyle } from "../../styles/shared/Page.style";

const ProductPage = () => {
  return (
    <PageStyle>
      <ProductPageGallery />
      <ProductPageProductDesc />
    </PageStyle>
  );
};

export default ProductPage;
