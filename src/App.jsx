/** @format */

import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import CartSummary from "./components/CartSummary.jsx";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  // cart = {id, price,title quantity}

  const fetchProducts = () => {
    fetch("http://localhost:8000/products")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (id,title,price) => {
    let idx = carts.findIndex(el => el.id === id) // not found = -1
    if(idx === -1) {
      let newItem = { id: id, title: title, price: price, quantity: 1 };
      setCarts([...carts, newItem]);
    } else {
      const cloneCart = [...carts]
      cloneCart[idx].quantity += 1
      setCarts(cloneCart)
    }

  };

  return (
    <div className="min-h-screen flex flex-col px-4">
      <Header itemCount={carts.length} />
      <div className="flex flex-1">
        <ProductList products={products} addToCart={addToCart} />
        <CartSummary carts={carts} />
      </div>
    </div>
  );
}

export default App;
