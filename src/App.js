import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/itemList/" element={<ItemListContainer />} />
          <Route
            path="/itemList/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>La ruta no existe</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
