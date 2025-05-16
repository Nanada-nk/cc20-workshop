/** @format */

import ProductCard from "./ProductCard.jsx";
import { useState } from "react";

function ProductList(props ) {
  const {products  , addToCart} = props
  console.log(products[0])
  return (
    <div className="w=2/3 bg-orange-300 ps-2 ">
      <h2 className="text-2xl rounded-2xl py-2 text-slate-600">Product List</h2>

      <div className="flex gap-3 flex-wrap">

      {
        products.map(el => (

          <ProductCard key={el.id} productItem={el} addToCart={addToCart} />
        ))
      }

      </div>




      {/* <pre>{JSON.stringify(products,null,2)}</pre> */}
    </div>
  );
}

export default ProductList;
