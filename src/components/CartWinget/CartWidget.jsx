import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={1} color="warning">
        <ShoppingBasketIcon sx={{ fontSize: "40px" }} />
      </Badge>
    </div>
  );
};

export default CartWidget;
