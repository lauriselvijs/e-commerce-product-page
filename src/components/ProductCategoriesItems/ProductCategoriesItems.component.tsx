import React from "react";
import { CATEGORIES } from "../../constants/Categories.const";
import { ProductCategoriesItemStyle } from "./ProductCategoriesItems.style";

const ProductCategoriesItems = () => {
  const productCategoriesItems = CATEGORIES.map(
    ({ categoryName, href }, index) => (
      <ProductCategoriesItemStyle key={index} href={href}>
        {categoryName}
      </ProductCategoriesItemStyle>
    )
  );

  return <>{productCategoriesItems}</>;
};

export default ProductCategoriesItems;
