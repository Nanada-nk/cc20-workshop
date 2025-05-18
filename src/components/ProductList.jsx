/** @format */

import ModalCard from "./ModalCard.jsx";
import ProductCard from "./ProductCard.jsx";
import { useState } from "react";

function ProductList(props ) {
  const {products  , addToCart, carts, decQuantity} = props
  console.log(products[0])
  return (
    <div className="pl-4 pt-2">
      <h2 className="text-2xl py-2 font-bold text-[#ca8787]">Product List</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">

      {
        products.map(el => (

          <ProductCard key={el.id} productItem={el} addToCart={addToCart} carts={carts} decQuantity={decQuantity} />
        ))
      }

      </div>




      {/* <pre>{JSON.stringify(products,null,2)}</pre> */}
    </div>
  );
}

export default ProductList;
