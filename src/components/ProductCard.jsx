/** @format */

import { useState } from "react";

function ProductCard(props) {
  const [showDesc, setShowDesc] = useState(false);

  const {
    addToCart,
    productItem: { id, category, description, image, price, rating, title }
  } = props;

  return (
    <div className="card w-96 shadow-sm py-4 bg-white">
      <figure className="h-40">
        <img src={image} alt={title} className="h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm text-pink-500 text-center">{category}</p>
        <p
          className={`cursor-pointer ${showDesc ? "" : "line-clamp-2"}`}
          onClick={() => setShowDesc((prv) => !prv)}>
          {description}
        </p>
        <p className="text-slate-700 text-2xl">฿{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"
          onClick={()=>addToCart(id,title,price)}
          >Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
