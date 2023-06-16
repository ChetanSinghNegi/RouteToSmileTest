import ProductItem from "./ProductItem";
const ProductList = (props) => {
  const allProducts = props.items;

  //rendering item through ProductItem Component
  return (
    <ul>
      {allProducts?.map((item) => {
        return <ProductItem item={item} deleting={props.deleting} />;
      })}
    </ul>
  );
};

export default ProductList;
