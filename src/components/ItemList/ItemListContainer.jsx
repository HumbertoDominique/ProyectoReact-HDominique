import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { HashLoader } from "react-spinners";
import styles from "./ItemList.module.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const itemCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );

      consulta = itemCollectionFiltered;
    } else {
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            ...prod.data(),
            id: prod.id,
          };
        });

        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 ? (
        <div>
          <div className={styles.loader}>
            <HashLoader color="#d74a4a" />
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
