import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useCart } from "../pages/context/CartContext";

const CartWidget: React.FC = () => {
  const { getTotalItems } = useCart();
  const total = getTotalItems(); // Gets the updated total of items in the cart

  return (
    <Link to="/cartpage">
      <Badge badgeContent={total} showZero color="primary">
        <BsFillCartCheckFill size="30px" color="beige" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
