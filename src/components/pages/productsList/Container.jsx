import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

const Container = () => {
  const [contador, setContador] = useState(0);

  console.log("El componente se actualiza");
  useEffect(() => {
    console.log("Se hace la peticion a la API");
  }, []);

  return <ProductsList contador={contador} setContador={setContador} />;
};

export default Container;
