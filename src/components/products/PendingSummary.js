import { useNavigate } from 'react-router-dom';
  

const ProductSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const btnOnClickHandler = () => {
    navigate(`/products/${props.product._id}`);
  };


  return (
    <div class="containerseif">
      <div class="cardBody">
        <h1 className="font-bold">{props.product.Name}</h1>
        <h2 className="font-bold">{props.product.Price}</h2>
        <h4>{props.product.Description}</h4>
        <button class="banbuttonseif"><h2>Approve</h2></button>
        <button class="banbuttonseif"><h2>Decline</h2></button>
      </div>
    </div>
  );
};

export default ProductSummary;
