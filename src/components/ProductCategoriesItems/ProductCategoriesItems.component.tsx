import { CATEGORIES } from "../../constants/Categories.const";
import { ProductCategoriesItemStyle } from "./ProductCategoriesItems.style";
import { Link } from "react-router-dom";

const ProductCategoriesItems = () => {
  const productCategoriesItems = CATEGORIES.map(
    ({ categoryName, href }, index) => (
      <ProductCategoriesItemStyle key={index}>
        <Link to={href}>{categoryName}</Link>
      </ProductCategoriesItemStyle>
    )
  );

  return <>{productCategoriesItems}</>;
};

export default ProductCategoriesItems;
