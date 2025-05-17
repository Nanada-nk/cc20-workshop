/** @format */

function CartItem(props) {
const {addToCart,decQuantity,item : {id,title,price,quantity}} = props


  console.log(props.item)
  return (
    <div className="grid grid-cols-1 text-center xl:grid-cols-3 py-1">
      <p className="text-lg text-[#6b3e26] xl:text-start">{title.split(" ")[0] + title.split(" ")[1]}</p>
      <div className="flex justify-center gap-0.5">
        <p className="btn w-1 h-7 bg-[#ffcb85] border-none hover:bg-[#ffc5d9] hover:animate-pulse skeleton"
        onClick={()=>decQuantity(id)}
        >-
        </p>
        <p className="btn w-1 h-7 bg-[#ffcb85] border-none hover:bg-[#ffc5d9] hover:animate-pulse skeleton"
        onClick={()=>addToCart(id)}
        >+
        </p>
      </div>
      <p className="text-lg text-[#6b3e26] xl:text-end">
        {quantity} * ฿{price}
      </p>
    </div>
  );
}

export default CartItem;
