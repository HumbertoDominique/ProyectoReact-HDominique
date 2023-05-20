import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import CartContainer from "./components/Cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import FormCheckoutContainer from "./components/FormCheckout/FormCheckoutContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/itemList/" element={<ItemListContainer />} />
            <Route
              path="/itemList/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<FormCheckoutContainer />} />
            <Route path="*" element={<h2>La ruta no existe</h2>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
