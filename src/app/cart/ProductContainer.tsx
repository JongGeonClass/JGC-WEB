import { CartItem } from "@/types";
import type { NextPage } from "next";
import Image from "next/image";
import testimg1 from "public/testimg-1.png";

const ProductContainer: NextPage<Partial<CartItem>> = ({
  id,
  brand_id,
  brand_name,
  categories,
  product_name,
  product_price,
  amount,
  title_image_s3,
  created_time,
}: Partial<CartItem>) => {
  return (
    <div className="self-stretch rounded-lg bg-gray-100 overflow-hidden flex flex-row py-[0.63rem] px-[1.25rem] items-start justify-center text-left text-[0.75rem] text-black font-noto-sans-kr">
      <div className="flex-1 overflow-hidden flex flex-row py-[0rem] pr-[0.94rem] pl-[2.5rem] items-center justify-start gap-[2.19rem]">
        <Image
          className="relative rounded-sm w-[8rem] h-[8rem] shrink-0 object-cover"
          alt=""
          src={testimg1}
        />
        <div className="overflow-hidden flex flex-col py-[0.94rem] px-[0rem] items-start justify-center gap-[0.31rem]">
          <div className="relative text-[1.25rem] font-medium">
            {product_name}
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
            <div className="relative">{`상품 수량 : `}</div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-end gap-[0.94rem] text-tomato-100">
              <div className="relative font-medium">N개</div>
              {/* <Image
                className="relative w-[0.85rem] h-[0.35rem] shrink-0"
                alt=""
                src="../group-12.svg"
              /> */}
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
            <div className="relative">{`상품 옵션1 : `}</div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-end gap-[0.94rem] text-tomato-100">
              <div className="relative font-medium">옵션명</div>
              {/* <Image
                className="relative w-[0.85rem] h-[0.35rem] shrink-0"
                alt=""
                src="../group-12.svg"
              /> */}
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
            <div className="relative">{`상품 옵션2 : `}</div>
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-end gap-[0.94rem] text-tomato-100">
              <div className="relative font-medium">옵션명</div>
              {/* <Image
                className="relative w-[0.85rem] h-[0.35rem] shrink-0"
                alt=""
                src="../group-12.svg"
              /> */}
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-row p-[0.63rem] items-center justify-end gap-[0.63rem]">
          <div className="self-stretch overflow-hidden flex flex-col p-[0.63rem] items-end justify-center gap-[0.63rem]">
            <div className="relative font-medium">{`상품가격 : 399,999원 `}</div>
            <div className="self-stretch relative box-border h-[0.06rem] shrink-0 border-t-[1px] border-solid border-darkgray" />
            <div className="relative">
              <span className="font-light">
                <span className="text-black">{`수량 `}</span>
                <span className="text-tomato-100">N개</span>
                <span className=""> x 상품가격 399,999원 =</span>
              </span>
              <span className="text-[1.56rem]">
                <span className="text-tomato-100">
                  <span>{` `}</span>
                </span>
              </span>
              <span className="text-tomato-100">
                <span className="font-medium text-[1.56rem]">9,999,999원</span>
              </span>
            </div>
          </div>
          {/* <Image
            className="relative w-[0.79rem] h-[0.79rem] shrink-0"
            alt=""
            src="../group-2.svg"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
