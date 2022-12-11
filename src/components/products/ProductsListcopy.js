import MyPropSummary from './MyPropSummary';

const ProductsListcopy = (props) => {
  return (
    <div>
      {props.products.map((p) => (
        <MyPropSummary product={p} key={p._id} />
      ))}
    </div>
  );
};

export default ProductsListcopy;
