import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  clearCartWithAlert,
  deleteProductById,
  total,
  cantidadTotal,
  navigate,
  addQuantityById,
  subQuantityById,
}) => {
  return (
    <div className={styles.contenedorPadre}>
      <div className={styles.infoCart}>
        <div className={styles.cartTitle}>
          <h2>Descripción del carrito</h2>
        </div>
        <div className={styles.infoBlock}>
          <h3>Cantidad de productos:</h3>
          <div>{cantidadTotal}</div>
        </div>
        <div className={styles.infoBlock}>
          <h3>Precio acumulado:</h3>
          <div>{total}</div>
        </div>
        <div className={styles.infoBlock}>
          <h3>Costo de envío:</h3>
          <div>
            <p>Gratis</p>
          </div>
        </div>
        <div className={styles.infoBlock}>
          <h3>Precio final:</h3>
          <div>{total}</div>
        </div>
      </div>
      <div className={styles.displayCart}>
        <div className={styles.cartProducts}>
          <table className={styles.tableProducts} align="center">
            <caption className={styles.captionProducts} align="top">
              Artículos agregados ({cantidadTotal})
            </caption>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className={styles.products}
                    bgcolor="#e495e4"
                  >
                    <th scope="row" align="center">
                      <div>
                        <img
                          src={item.img}
                          alt=""
                          className={styles.imgProducts}
                        />
                      </div>
                    </th>
                    <td align="center">
                      <p>{item.title}</p>
                    </td>
                    <td align="center">
                      <p>{item.price} CLP</p>
                    </td>
                    <td align="center">
                      <p>Unidades: {item.quantity}</p>
                    </td>
                    <td align="center">
                      <Button
                        variant="contained"
                        className={styles.buttonAdd}
                        onClick={() => addQuantityById(item.id)}
                      >
                        +
                      </Button>
                    </td>
                    <td align="center">
                      <Button
                        variant="contained"
                        className={styles.buttonMinus}
                        onClick={() => subQuantityById(item.id)}
                      >
                        -
                      </Button>
                    </td>
                    <td align="center">
                      <Button
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={() => deleteProductById(item.id)}
                      >
                        Borrar
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.cartOptions}>
          {cart.length > 0 ? (
            <div className={styles.buttonOptions}>
              <Button
                className={styles.buttonOption}
                onClick={clearCartWithAlert}
                variant="contained"
              >
                Vaciar carrito
              </Button>
              <Button
                className={styles.buttonOption}
                variant="contained"
                onClick={() => navigate("/checkout")}
              >
                Terminar la compra
              </Button>
            </div>
          ) : (
            <Link to="/itemList">
              <Button className={styles.buttonOption} variant="contained">
                Agrega productos
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
