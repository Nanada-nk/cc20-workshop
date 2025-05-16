/** @format */

import ProductCard from "./ProductCard.jsx";
import { useState } from "react";

function ProductList(props) {
  const {products} = props
  return (
    <div className="w=2/3 bg-orange-300 flex-1/2">
      <h2>Product List</h2>
      <ProductCard />
    </div>
  );
}

export default ProductList;
