import CartItem from "./CartItem.jsx"

function CartSummary() {
  return (
    <div className="w-1/3 bg-yellow-300">
      <h2>Cart Item :</h2>
      <CartItem />
    </div>
  )
}

export default CartSummary