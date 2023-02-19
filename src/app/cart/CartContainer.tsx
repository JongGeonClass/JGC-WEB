import type { NextPage } from "next";
import ProductContainer from "./ProductContainer";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/types";
import CartList from "./CartList";

const CartContainer: NextPage = () => {
  return (
    <div className="self-stretch flex-1 bg-gray-200 [backdrop-filter:blur(80px)] overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] items-center justify-start gap-[0.63rem] text-left text-[0.75rem] text-black font-noto-sans-kr">
      <div className="relative text-[2.5rem] font-medium">장바구니</div>
      <div className="self-stretch rounded-lg bg-gray-100 overflow-hidden flex flex-row py-[0.63rem] px-[1.25rem] items-start justify-center text-[0.88rem]">
        <div className="flex-1 overflow-hidden flex flex-row py-[0rem] px-[2.5rem] items-center justify-end gap-[24.06rem]">
          <div className="relative font-light">상품정보</div>
          <div className="relative font-light">상품금액</div>
        </div>
      </div>
      <CartList />
    </div>
  );
};

export default CartContainer;
