import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./FormCheckout.module.css";

const FormCheckout = ({ handleSubmit, handleChange, errors, values }) => {
  return (
    <div className={styles.contenedorPadre}>
      <div className={styles.form}>
        <Grid container flex justifyContent={"center"} alignItems={"center"}>
          <h2>Por favor ingresa tus datos de contacto.</h2>
        </Grid>
        <form action="" onSubmit={handleSubmit}>
          <Grid container spacing={2} flex justifyContent={"center"}>
            <Grid item xs={11} sm={7}>
              <TextField
                id="standard-basic"
                label="Nombre"
                variant="standard"
                fullWidth
                name="nombre"
                onChange={handleChange}
                error={errors.nombre ? true : false}
                helperText={errors.nombre}
              />
            </Grid>
            <Grid item xs={11} sm={7}>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                fullWidth
                name="email"
                onChange={handleChange}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={11} sm={7}>
              <TextField
                id="standard-basic"
                label="Confirme su Email"
                variant="standard"
                fullWidth
                name="confirmEmail"
                onChange={handleChange}
                error={errors.confirmEmail ? true : false}
                helperText={errors.confirmEmail}
              />
            </Grid>
            <Grid item xs={11} sm={7}>
              <TextField
                id="standard-basic"
                label="Teléfono"
                variant="standard"
                fullWidth
                name="phone"
                onChange={handleChange}
                error={errors.phone ? true : false}
                helperText={errors.phone}
              />
            </Grid>
            <Grid item xs={6} md={6} textAlign={"end"}>
              <Link to="/checkout">
                <Button
                  className={styles.button}
                  type="submit"
                  variant="contained"
                >
                  Regresar
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6} md={6} textAlign={"start"}>
              <Button
                className={styles.buttonAdd}
                type="submit"
                variant="contained"
              >
                Comprar
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default FormCheckout;
