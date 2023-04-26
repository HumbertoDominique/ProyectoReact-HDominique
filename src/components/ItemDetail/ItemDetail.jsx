import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product }) => {
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
          <div className={styles.botonArea}>
            <button className={styles.boton}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
