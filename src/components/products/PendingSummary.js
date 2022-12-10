import { useNavigate } from 'react-router-dom';
  

const ProductSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const OnClickHandler = () => {
    navigate(`/Viewpropertiesup/${props.product._id}`);
  };
  return (
    <div class="pcontainerseif">
      <div class="cardBody">
        <h1 className="font-bold">{props.product.Name}</h1>
        <h2 className="font-bold">{props.product.Price}</h2>
        <h4>{props.product.Description}</h4>
        <button onClick={OnClickHandler} className="approvebuttonseif"><h2>Approve</h2></button>
        <button className="banbuttonseif"><h2>Decline</h2></button>
      </div>
    </div>
  );
};

export default ProductSummary;
