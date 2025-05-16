/** @format */

import CartCount from "./CartCount";

function Header() {
  return (
    <div className="flex justify-between h-15 bg-amber-400">
      <div>Logo, Brand</div>
      <CartCount />
    </div>
  );
}

export default Header;
