import ItemList from "./ItemList";

const ItemListContainer = () => {
  let saludo = "Bienvenido a KORA Accesorios";

  return (
    <div>
      <ItemList saludo={saludo} />
    </div>
  );
};

export default ItemListContainer;
