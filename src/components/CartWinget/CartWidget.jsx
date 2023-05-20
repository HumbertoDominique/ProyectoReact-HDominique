import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity();

  return (
    <Link to="/cart">
      <div>
        <Badge badgeContent={total} color="error">
          <ShoppingBasketIcon color="action" sx={{ fontSize: "35px" }} />
        </Badge>
      </div>
    </Link>
  );
};

export default CartWidget;
