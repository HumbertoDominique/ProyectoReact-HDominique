import { useEffect, useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, cart, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  useEffect(() => {
    setCounter(initial);
  }, [initial]);

  const sumar = () => {
    counter < stock
      ? setCounter(counter + 1)
      : Swal.fire({
          title: "¡Lo sentimos!",
          text: "stock no disponible",
          width: 300,
          height: 200,
        });
  };

  const restar = () => {
    counter > 1
      ? setCounter(counter - 1)
      : Swal.fire({
          text: "Seleccione al menos 1 unidad",
          width: 300,
          height: 200,
        });
  };
  return (
    <div>
      <Counter
        sumar={sumar}
        restar={restar}
        counter={counter}
        onAdd={onAdd}
        cart={cart}
      />
    </div>
  );
};

export default CounterContainer;
