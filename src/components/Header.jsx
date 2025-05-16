/** @format */

import CartCount from "./CartCount";

function Header(props) {
  const {itemCount} = props
  return (
    <div className="flex justify-between h-20 bg-amber-500">
      <div>Logo, Brand</div>
      <CartCount itemCount={itemCount}/>
    </div>
  );
}

export default Header;
