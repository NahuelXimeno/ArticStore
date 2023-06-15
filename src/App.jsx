import Layout from "./components/layout/Layout";

import Cart from "./components/pages/cart/Container";
import ProductDetail from "./components/pages/productDetail/Container";
import ProductsList from "./components/pages/productsList/Container";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductsList />} />

          <Route path="/category/:categoryName" element={<ProductsList />} />

          <Route path="/itemDetail/:id" element={<ProductDetail />} />

          <Route path="/carrito" element={<Cart />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
