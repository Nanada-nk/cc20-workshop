/** @format */

import { ShoppingBasket } from "lucide-react";

function CartCount(props) {
  const { itemCount } = props;
  return (
    <div className="relative cursor-pointer hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out">
      <ShoppingBasket size={40} className="text-[#fdf5c9] " />
      {itemCount !== 0 && (
        <p className="absolute top-6 -right-2 bg-red-600 w-5 h-5 rounded-full grid place-content-center text-sm text-white">
          {itemCount}
        </p>
      )}
    </div>
  );
}

export default CartCount;
