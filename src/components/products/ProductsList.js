import ProductSummary from './ProductSummary';

const ProductsList = (props) => {
  return (
    <div>
      {props.products.map((p) => (
        <ProductSummary product={p} key={p._id} />
      ))}
    </div>
  );
};

export default ProductsList;
