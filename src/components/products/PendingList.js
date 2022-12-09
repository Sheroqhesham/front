import ProductSummary from './PendingSummary';

const PendingList = (props) => {
  return (
    <div>
      {props.products.map((p) => (
        <ProductSummary product={p} key={p._id} />
      ))}
    </div>
  );
};

export default PendingList;
