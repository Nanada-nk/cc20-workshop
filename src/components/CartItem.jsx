/** @format */

function CartItem(props) {
const {item : {id,title,price,quantity}} = props

  console.log(props.item)
  return (
    <div className="flex justify-between px-1.5">
      <p>{title.split(" ")[0] + title.split(" ")[1]}</p>
      <div className="flex gap-0.5">
        <p className="border w-5 h-5 flex justify-center items-center cursor-pointer">
          -
        </p>
        <p className="border w-5 h-5 flex justify-center items-center cursor-pointer">
          +
        </p>
      </div>
      <p>
        {quantity} * ฿{price}
      </p>
    </div>
  );
}

export default CartItem;
