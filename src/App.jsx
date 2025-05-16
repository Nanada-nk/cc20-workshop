/** @format */

import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import CartSummary from "./components/CartSummary.jsx";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <ProductList />
        <CartSummary />
      </div>
    </div>
  );
}

export default App;
