import styles from "./Inicio.module.css";

const Inicio = () => {
  return (
    <div className={styles.inicio}>
      <img
        src="https://res.cloudinary.com/dkrenmz5w/image/upload/v1682468118/portada2_neodhz.jpg"
        alt="Imagen fondo Inicio"
        className={styles.imgInicio}
      />
      <div className={styles.logoBox}>
        <div className={styles.titulo}>
          <h1>Bienvenido</h1>
        </div>
        <img
          src="https://res.cloudinary.com/dkrenmz5w/image/upload/v1680459106/LOGO_KORA_pv7coq.jpg"
          alt="Logo de Kora Accesorios"
          width="300px"
        />
      </div>
    </div>
  );
};

export default Inicio;
