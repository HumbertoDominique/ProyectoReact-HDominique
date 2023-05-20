import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";
import styles from "./FormCheckout.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

export const FormCheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();

    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );
    clearCart();
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      confirmEmail: "",
      phone: "",
    },

    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .max(20, "El nombre no puede superar los 20 caracteres"),
      email: Yup.string()
        .email("Debe ingresar un email válido")
        .required("Este campo es obligatorio"),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref("email")], "El correo suministrado no coincide")
        .required("Este campo es obligatorio"),
      phone: Yup.number(
        "Se requiere que ingrese un número de contacto"
      ).required("Este campo es obligatorio"),
    }),
    validateOnChange: true,
  });

  return (
    <div>
      {orderId ? (
        <div className={styles.contenedorPadre}>
          <div className={styles.formSuccess}>
            <h3 className={styles.space}>¡Compra realizada con éxito!</h3>
            <p className={styles.space}>
              Tu orden de compra es la siguiente: {orderId}
            </p>
            <h4 className={styles.space}>¡Muchas gracias por tu compra!</h4>
            <Link to="/itemList/">
              <Button variant="contained" className={styles.buttonSuccess}>
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <FormCheckout
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );
};

export default FormCheckoutContainer;
