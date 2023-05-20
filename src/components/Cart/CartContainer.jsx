import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const {
    cart,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity,
    addQuantityById,
    subQuantityById,
  } = useContext(CartContext);

  let total = getTotalPrice();

  const navigate = useNavigate();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "¿Desea vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("El carrito está vacío", "", "success");
      }
    });
  };

  let cantidadTotal = getTotalQuantity();

  return (
    <div>
      <Cart
        navigate={navigate}
        total={total}
        clearCartWithAlert={clearCartWithAlert}
        cart={cart}
        deleteProductById={deleteProductById}
        cantidadTotal={cantidadTotal}
        addQuantityById={addQuantityById}
        subQuantityById={subQuantityById}
      />
    </div>
  );
};

export default CartContainer;
