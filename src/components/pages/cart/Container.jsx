import { useEffect, useState } from "react";
import ProductsList from "../productsList/ProductsList";
import { products } from "../../../productsMock";
import { useParams } from "react-router";

const Container = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? productosFiltrados : products);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  return <ProductsList items={items} />;
};

export default Container;
