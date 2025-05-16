/** @format */

import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import CartSummary from "./components/CartSummary.jsx";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  return (
    <div className="h-screen flex flex-col">
      <Header itemCount={carts.length}/>
      <div className="flex flex-1">
        <ProductList products={products} />
        <CartSummary carts={carts} />
      </div>
    </div>
  );
}

export default App;
