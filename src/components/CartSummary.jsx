import CartItem from "./CartItem.jsx"

function CartSummary(props) {
  const {carts} = props
  return (
    <div className="w-1/3 bg-yellow-200">
      <h2>Cart Item :</h2>
      <CartItem />
    </div>
  )
}

export default CartSummary