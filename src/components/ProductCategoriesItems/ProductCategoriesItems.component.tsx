import React from "react";
import { ProductCategoriesItemStyle } from "./ProductCategoriesItems.style";

const CATEGORIES = [
  { categoryName: "Collections", href: "/collections" },
  { categoryName: "Men", href: "/men" },
  { categoryName: "Women", href: "/women" },
  { categoryName: "About", href: "/about" },
  { categoryName: "Contact", href: "/contact" },
];

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
