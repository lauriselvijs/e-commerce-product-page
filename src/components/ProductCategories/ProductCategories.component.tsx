import React from "react";
import {
  ProductCategoriesStyle,
  ProductCategoriesItemStyle,
} from "./ProductCategories.style";

const CATEGORIES = [
  { categoryName: "Collections", href: "/collections" },
  { categoryName: "Men", href: "/men" },
  { categoryName: "Women", href: "/women" },
  { categoryName: "About", href: "/about" },
  { categoryName: "Contact", href: "/contact" },
];

const ProductCategories = () => {
  const productCategoriesItems = CATEGORIES.map(
    ({ categoryName, href }, index) => (
      <ProductCategoriesItemStyle key={index} href={href}>
        {categoryName}
      </ProductCategoriesItemStyle>
    )
  );

  return (
    <ProductCategoriesStyle>{productCategoriesItems}</ProductCategoriesStyle>
  );
};

export default ProductCategories;
