// import { useParams } from "react-router-dom";
import ProductPageGallery from "../../components/ProductPageGallery";
import ProductPageGalleryOverlay from "../../components/ProductPageGalleryOverlay";
import ProductPageProductDesc from "../../components/ProductPageProductDesc";
import { PageStyle } from "../../styles/components/Page";

const ProductPage = () => {
  // const { productId } = useParams();

  // console.log(productId);

  return (
    <PageStyle>
      <ProductPageGallery />
      <ProductPageGalleryOverlay />
      <ProductPageProductDesc />
    </PageStyle>
  );
};

export default ProductPage;
