/** @format */

import { LoaderPinwheel } from "lucide-react";
import React from "react";

function ModalCard({ productItem, onClose }) {
  return (
    <div className="modal modal-open modal-middle">
      <div className="modal-box bg-white">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={onClose} // ✅ เพิ่ม onClick เพื่อปิด modal โยนของไปหาแม่ หน้า ProductCard
        >
          ✕
        </button>

        {productItem ? (
          <>
            <h3 className="font-bold text-2xl pt-2 text-[#6b3e26]">
              {productItem.title}
            </h3>
            <img
              className="w-full my-4 rounded"
              src={productItem.image}
              alt={productItem.title}
            />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[#6b3e26] font-bold text-lg sm:text-xl skeleton bg-[#ffdede] p-1">
                  Price: {productItem.price} THB
                </p>
                <div className="text-sm text-[#b5966b] p-1">
                  Rate : {productItem.rating.rate} || Count :{" "}
                  {productItem.rating.count}
                </div>
              </div>
              <button
                className="btn bg-red-500 text-lg sm:text-xl text-white"
                onClick={onClose} // ✅ เพิ่ม onClick เพื่อปิด modal โยนของไปหาแม่ หน้า ProductCard
              >
                close
              </button>
            </div>
          </>
        ) : (
          <div className="flex gap-2 justify-center items-center h-40">
            <LoaderPinwheel size={40} className="animate-spin" />
            <p className="text-red-500 font-bold text-4xl">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalCard;
