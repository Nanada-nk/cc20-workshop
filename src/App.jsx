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

  const decQuantity = (id) => {
    // ลดจำนวน Quantity ของ item ใน cart
    let idx = carts.findIndex(el => el.id === id) // not found = -1
    const clonedCart = [...carts]
    if(clonedCart[idx].quantity > 1) {
      clonedCart[idx].quantity -=1
    } else {
      clonedCart.splice(idx,1)
    }
    setCarts(clonedCart)
    console.log('decQuantity',decQuantity)
  }

  return (
    <div className="min-h-screen flex flex-col px-4">
      <Header itemCount={carts.length} />
      <div className="flex flex-1">
        <ProductList products={products} addToCart={addToCart} />
        <CartSummary carts={carts} decQuantity={decQuantity} />
      </div>
    </div>
  );
}

export default App;
