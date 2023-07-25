import { CATEGORIES } from "../../constants/Categories.const";
import { ProductCategoriesItemStyle } from "./ProductCategoriesItems.style";
import { Link, useLocation } from "react-router-dom";

const ProductCategoriesItems = () => {
  const location = useLocation();

  const productCategoriesItems = CATEGORIES.map(
    ({ categoryName, href }, index) => (
      <ProductCategoriesItemStyle
        $selected={location.pathname.includes(href)}
        key={index}
      >
        <Link to={href}>{categoryName}</Link>
      </ProductCategoriesItemStyle>
    )
  );

  return <>{productCategoriesItems}</>;
};

export default ProductCategoriesItems;
