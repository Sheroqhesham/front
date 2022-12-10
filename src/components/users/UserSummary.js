import { useNavigate } from 'react-router-dom';

const ProductSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(`/Viewusersdel/${props.product._id}`);
  };

  return (
    <div class="containerseif">
      <div class="cardBody">
        <h1 className="font-bold">{props.product.Username}</h1>
        <h2>{props.product.Name}</h2>
        <button button onClick={OnClickHandler} class="banbuttonseif"><h2>BAN</h2></button>
      </div>
    </div>
  );
};

export default ProductSummary;
