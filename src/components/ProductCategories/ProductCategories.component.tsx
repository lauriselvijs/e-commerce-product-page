import React, { useMemo } from "react";
import {
  ProductCategoriesStyle,
  ProductCategoriesItemStyle,
} from "./ProductCategories.style";

const CATEGORIES = ["Collections", "Men", "Women", "About", "Contact"];

const ProductCategories = () => {
  const productCategoriesItems = CATEGORIES.map((category, index) => (
    <ProductCategoriesItemStyle key={index}>
      {category}
    </ProductCategoriesItemStyle>
  ));

  return (
    <ProductCategoriesStyle>{productCategoriesItems}</ProductCategoriesStyle>
  );
};

export default ProductCategories;
