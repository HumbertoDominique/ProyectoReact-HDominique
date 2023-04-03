import CartWidget from "../CartWinget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.estilosNavbar}>
      <img
        src="https://res.cloudinary.com/dkrenmz5w/image/upload/v1680459106/LOGO_KORA_pv7coq.jpg"
        alt="Logo_KORA_accesorios"
        style={{ width: "60px", height: "60px" }}
      />
      <div>
        <ul className={styles.ul}>
          <li>Brazaletes</li>
          <li>Broches</li>
          <li>Collares</li>
          <li>Zarcillos</li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};

export default Navbar;
