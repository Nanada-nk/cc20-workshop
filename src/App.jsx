/** @format */

import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import CartSummary from "./components/CartSummary.jsx";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [error, setError] = useState(null)

  // cart = {id, price,title quantity}

  // const fetchProducts = () => {
  //   fetch("http://localhost:8000/products")
  //   fetch("./db/products.json")
  //     .then((r) => r.json())
  //     .then((data) => setProducts(data));
  // };



    const fetchProducts = () => {
    fetch('./db/products.json')
      .then(resp => resp.json())
      .then(data => setProducts(data.products))
      .catch(err => setError(err))
  }

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
    // console.log('decQuantity',decQuantity)
  }

  // const incQuantity = (id) => {
  //   let idx = carts.findIndex(el => el.id === id) // not found = -1
  //   const clonedCart = [...carts]
  //   clonedCart[idx].quantity +=1
  // }
  // setCarts(cloneCart)
  // ใช้ addToCart แทน เพราะทำงานเหมือนกัน

  if(error) {
    return <div className="text-5xl">Error : {error}</div>
  }

  return (
    <div>
      <Header itemCount={carts.length} />
      <div className="grid grid-cols-[4fr_1fr] gap-4 relative top-25">
        {/* <img src="../public/vite.svg" alt="image" /> */}
        <ProductList products={products} addToCart={addToCart} carts={carts} decQuantity={decQuantity}/>
        <CartSummary carts={carts} decQuantity={decQuantity} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
