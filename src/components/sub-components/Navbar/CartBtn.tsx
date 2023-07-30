import React from "react";
import { BsCart2 } from "react-icons/bs";

const CartBtn = () => {
  return (
    <div className="relative bg-gray-200 rounded-full hover:cursor-pointer lg:flex items-center justify-center p-3 hidden">
      <BsCart2 size={20} />
      <p className="bg-red-500 rounded-full w-[20px] h-[20px] text-[14px] flex items-center justify-center absolute top-0  right-1">
        0
      </p>
    </div>
  );
};

export default CartBtn;
