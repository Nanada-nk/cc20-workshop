/** @format */

import CartItem from "./CartItem.jsx";

function CartSummary(props) {
  const { carts } = props;
  console.log(carts)
  return (
    <div className="w-1/3 bg-yellow-200">
      <h2 className="text-2xl rounded-2xl py-2 text-slate-600">Cart Item :</h2>
      <div className="flex flex-col gap-2">
        {carts.map(el => (
          <CartItem key={el.id} item={el} />
        ))}
      </div>
      <pre>{JSON.stringify(carts,null,2)}</pre>
    </div>
  );
}

export default CartSummary;
