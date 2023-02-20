import ProductPageGallery from "../../components/ProductPageGallery";
import ProductPageGalleryOverlay from "../../components/ProductPageGalleryOverlay";
import ProductPageProductDesc from "../../components/ProductPageProductDesc";
import { PageStyle } from "../../styles/components/Page.style";

const ProductPage = () => {
  return (
    <PageStyle>
      <ProductPageGallery />
      <ProductPageGalleryOverlay />
      <ProductPageProductDesc />
    </PageStyle>
  );
};

export default ProductPage;
