import ItemList from "./ItemList";
import { products } from "../../productsMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryName
    );

    const task = new Promise((resolve, reject) => {
      resolve(categoryName ? productsFiltered : products);
    });

    task.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
