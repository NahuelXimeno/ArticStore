import { useState } from "react";
import Bar from "./components/layout/navbar/Navbar";
import Container from "./components/pages/productsList/Container";

const App = () => {
  const [montado, setMontado] = useState(false);
  const [nombre] = useState("productos");

  return (
    <div>
      <Bar />

      {montado && <Container nombre={nombre} />}

      <button onClick={() => setMontado(!montado)}>Montar componente</button>
    </div>
  );
};

export default App;
