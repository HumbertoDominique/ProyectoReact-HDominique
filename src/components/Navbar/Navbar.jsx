import CartWidget from "../CartWinget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={styles.estilosNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dkrenmz5w/image/upload/v1680459106/LOGO_KORA_pv7coq.jpg"
            alt="Logo_KORA_accesorios"
            style={{ width: "60px", height: "60px" }}
          />
        </Link>
        <div>
          <ul className={styles.ul}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
              to="/itemList/"
            >
              Todos
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
              to="/itemList/category/brazaletes"
            >
              Brazaletes
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
              to="/itemList/category/broches"
            >
              Broches
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
              to="/itemList/category/collares"
            >
              Collares
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
              to="/itemList/category/zarcillos"
            >
              Zarcillos
            </NavLink>
          </ul>
        </div>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
