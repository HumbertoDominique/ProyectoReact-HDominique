import CounterContainer from "../Counter/CounterContainer";
import styles from "./ItemDetail.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ItemDetail = ({ product, onAdd, cantidadTotal, cart }) => {
  return (
    <div className={styles.contenedorPadre}>
      <div className={styles.contenedor}>
        <img src={product.img} alt="" className={styles.imgCardDetail} />
        <div className={styles.contenedorTexto}>
          <h2 className={styles.tituloCardDetail}>{product.title}</h2>
          <div className={styles.textoCardDetail}>
            <span>{product.description}</span>
          </div>
          <div className={styles.precioCardDetail}>
            <span>Precio: {product.price} CLP</span>
          </div>
          {product.stock > 0 ? (
            <div
              className={styles.botonArea}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <CounterContainer
                stock={product.stock}
                onAdd={onAdd}
                initial={cantidadTotal}
                cart={cart}
              />
            </div>
          ) : (
            <div className={styles.noStock}>
              <h2 className={styles.space}>¡Lo sentimos!</h2>
              <p className={styles.space}>
                En este momento no tenemos stock disponible.
              </p>
              <Link to="/itemList/">
                <Button variant="contained" className={styles.button}>
                  Regresar
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

//COLOCAR BOTON PARA REGRESAR, UTILIZAR RENDER CONDICIONAL
export default ItemDetail;
