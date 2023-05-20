import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Counter.module.css";

const Counter = ({ sumar, restar, counter, onAdd, cart }) => {
  return (
    <div>
      <Grid container flex justifyContent={"center"} alignItems={"center"}>
        <Grid item md={4} sm={12}>
          <Button variant="contained" color="error" onClick={restar}>
            -
          </Button>
        </Grid>
        <Grid item md={4} sm={12}>
          <h3>{counter}</h3>
        </Grid>
        <Grid item md={4} sm={12}>
          <Button variant="contained" color="success" onClick={sumar}>
            +
          </Button>
        </Grid>
        <Grid item md={4} sm={12}>
          <Link to="/itemList/">
            <Button className={styles.button} variant="contained">
              Regresar
            </Button>
          </Link>
        </Grid>
        <Grid item md={4} sm={12}>
          <Button
            className={styles.buttonAdd}
            variant="contained"
            onClick={() => onAdd(counter)}
          >
            Agregar al carrito
          </Button>
        </Grid>
        {cart.length > 0 && (
          <Grid item md={4} sm={12}>
            <Link to="/checkout/">
              <Button className={styles.button} variant="contained">
                Ir a pagar
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Counter;
