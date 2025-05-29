/** @format */

import CartItem from "./CartItem.jsx";

function CartSummary(props) {
  const { carts, decQuantity, addToCart } = props;
  // console.log('CartSummary',carts)
  let total = carts.reduce((a, c) => (a += c.price * c.quantity), 0);
  let vat = total * 0.07;
  let finalTotal = total + vat;
  return (
    <div className="p-2 bg-[#feffde] shadow-lg shadow-[#b5966b]">
      <h2 className="text-2xl py-2 font-bold text-[#6b3e26]">Cart Item</h2>
      {carts.length === 0 && (
        <p className="font-bold text-[#6b3e26]">Empty cart...</p>
      )}
      <div>
        {carts.map((el) => (
          <CartItem
            key={el.id}
            item={el}
            decQuantity={decQuantity}
            addToCart={addToCart}
          />
        ))}
      </div>
      {/* <pre>{JSON.stringify(carts,null,2)}</pre> */}
      {carts.length > 0 && (
        <>
          <div className="divider font-bold text-[#6b3e26]">Total</div>
          <div className="flex justify-between px-1.5 flex-1">
            <div className="font-bold text-lg">Total</div>
            <p className="text-lg text-[#6b3e26]">฿{total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between px-1.5 flex-1">
            <div className="font-bold text-lg text-[#6b3e26]">VAT</div>
            <p className="text-lg text-[#6b3e26]">฿{vat.toFixed(2)}</p>
          </div>
          <div className="flex justify-between px-1.5 flex-1">
            <div className="font-bold text-lg text-[#6b3e26]">Final Total</div>
            <p className="text-lg flex items-center underline decoration-double font-bold text-[#ca8787] skeleton bg-[#ffefef] px-1 py-0.5">
              ฿{finalTotal.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default CartSummary;
