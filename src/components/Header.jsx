/** @format */

import { House } from "lucide-react";
import CartCount from "./CartCount";

function Header(props) {
  const { itemCount } = props;
  return (
    <div className=" h-25 shadow-lg shadow-[#feffde] bg-[#6b3e26] flex justify-between items-center px-4 z-50 fixed top-0 left-0 right-0">
      <div
        className="animate-pulse gap-4 flex justify-center items-center cursor-pointer hover:-translate-y-1 transition duration-300 ease-in-out"
        onClick={() => (window.location.href = "http://localhost:5175/")}>
        <House className="text-[#fdf5c9] size-13 sm:size-15 sm:duration-1000 " />
        <p className="text-3xl sm:text-5xl sm:duration-1000 text-white ">CC Shop</p>
      </div>
      
      <CartCount  itemCount={itemCount} />
    </div>
  );
}

export default Header;

