/** @format */

import { useState } from "react";
import Swal from "sweetalert2";
import ModalCard from "./ModalCard.jsx";

function ProductCard(props) {
  const [showDesc, setShowDesc] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { decQuantity, carts, addToCart, productItem } = props;
  // console.log("cartssssssss", carts);
  const { id, category, description, image, price, rating, title } = productItem;
  // ตอนแรกอยู่ใน props ทั้งหมด จำเป็นต้องแยก เนื่องจาก modal มองไม่เห็น productItem 
  console.log('productItem >>>', productItem)

  const isInCart = carts.some((item) => item.id === id);
  // console.log("isInCart", isInCart);

  return (
    <div className="card m-2 bg-white shadow-lg shadow-[#b5966b] p-2">
      <figure className="h-45">
        <img src={image} alt={title} className="h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#6b3e26] text-center">{title}</h2>
        <p className="text-sm text-[#ffc5d9] text-center">{category}</p>
        <p
          className={`cursor-pointer ${showDesc ? "" : "line-clamp-2"}`}
          onClick={() => setShowDesc((prv) => !prv)}>
          {description}
        </p>
        <p className="text-2xl text-[#ca8787] font-extrabold">฿{price}</p>
        <div className="card-actions justify-end">
          {/* ======================================= ปุ่ม add to cart ============================ */}
          <button
            className="btn skeleton border-none text-sm p-1"
            style={{ backgroundColor: isInCart ? "#ca8787" : "#ffcb85" }}
            onClick={() => {
              if (carts.some((item) => item.id === id)) {
                decQuantity(id); // สมมติว่าเป็นฟังก์ชันลบสินค้า
              } else {
                addToCart(id, title, price);
              }
            }}>
            {isInCart ? "Remove" : "Add to Cart"}
          </button>
          {/* ======================================= ปุ่ม Detail... ============================ */}
          {/* ปุ่ม Detail... เพื่อเปิด Modal */}
          <button
            className="btn skeleton bg-[#f0ebe3] border-none "
            onClick={() => setSelectedProduct(productItem)} // กำหนด item ที่จะส่ง
          >
            Detail...
          </button>

          {/* แสดง Modal เมื่อ selectedProduct ไม่เป็น null */}
          {selectedProduct && (
            <ModalCard
              productItem={selectedProduct}
              onClose={() => setSelectedProduct(null)} //callback function ปิด modal
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

// มันเช็คแค่จำนวน carts.length ว่ามีสินค้าในตะกร้าหรือไม่ (ถ้ามีอย่างน้อย 1 ชิ้นจะแสดง 'remove' ทุก card) เลยทำให้ปุ่มทุกอันเปลี่ยนพร้อมกัน
// วิธีแก้ไข
// ต้องเช็คว่า สินค้านี้ (id) ถูกเพิ่มในตะกร้าหรือยัง (ไม่ใช่แค่เช็คว่ามีสินค้าในตะกร้าหรือไม่)
// สมมติ carts เป็น array ของสินค้าในตะกร้า (เช่น [ { id: 1, ... }, { id: 3, ... } ]) เราต้องเช็คว่ามีสินค้า id นี้ใน carts หรือไม่ เช่น
// js
// คัดลอก
// const isInCart = carts.some(item => item.id === id);
// แล้วใช้ isInCart แสดงปุ่มแทน
