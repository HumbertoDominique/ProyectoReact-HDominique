import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { HashLoader } from "react-spinners";
import styles from "./ItemDetail.module.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let loader = Object.keys(product);

  const { agregarAlCarrito, getQuantityById, cart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const refDoc = doc(itemCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Producto agregado`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      {loader.length === 0 ? (
        <div>
          <div className={styles.loader}>
            <HashLoader color="#d74a4a" />
          </div>
        </div>
      ) : (
        <ItemDetail
          product={product}
          onAdd={onAdd}
          cantidadTotal={cantidadTotal}
          cart={cart}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
