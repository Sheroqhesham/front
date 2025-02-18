import { useNavigate } from 'react-router-dom';
import Card from '../../UI/card/Card';
import CardActions from '../../UI/card/CardActions';
import CardBody from '../../UI/card/CardBody';
  

const ProductSummary = (props) => {
  // use the navigate function provided by the useNavigate react router hook
  const navigate = useNavigate();

  const btnOnClickHandler = () => {
    navigate(`/properties/${props.product._id}`);
  };

  return (
      <CardBody>
        <h3 class = "Center">{props.product.Name}</h3>
        <h3>{props.product.Description}</h3>
        <h5>{props.product.Price} EGP</h5>
        <img
        className="object-scale-down h-[200px]"
        src = {props.product.ImgURL}
        alt = {props.product.Name}/>
        <a href="/ViewUsersPage">
            <button class="buttonsama"><h2>Rent</h2></button>
      </a>
      </CardBody>
  );
};

export default ProductSummary;
