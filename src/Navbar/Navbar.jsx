import CartWidget from "../CartWinget/CartWidget";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "aquamarine",
      }}
    >
      <img
        src="https://res.cloudinary.com/dkrenmz5w/image/upload/v1680459106/LOGO_KORA_pv7coq.jpg"
        alt="Logo_KORA_accesorios"
        style={{ width: "60px", height: "60px", margin: "8px" }}
      />
      <ul style={{ display: "flex", gap: "30px" }}>
        <li>Brazaletes</li>
        <li>Zarcillos</li>
        <li>Collares</li>
        <li>Broches</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
