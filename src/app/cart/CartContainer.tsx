import type { NextPage } from "next";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
} from "@mui/material";
import ProductContainer from "./ProductContainer";
import Image from "next/image";

const CartContainer: NextPage = () => {
  return (
    <div className="self-stretch flex-1 bg-gray-200 [backdrop-filter:blur(80px)] overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] items-center justify-start gap-[0.63rem] text-left text-[0.75rem] text-black font-noto-sans-kr">
      <div className="relative text-[2.5rem] font-medium">장바구니</div>
      <div className="self-stretch rounded-large bg-gray-100 overflow-hidden flex flex-row py-[0.63rem] px-[1.25rem] items-start justify-center text-[0.88rem]">
        <div className="flex-1 overflow-hidden flex flex-row py-[0rem] px-[2.5rem] items-center justify-end gap-[24.06rem]">
          <div className="relative font-light">상품정보</div>
          <div className="relative font-light">상품금액</div>
        </div>
      </div>
      {/* <div className="self-stretch rounded-large bg-gray-100 overflow-hidden flex flex-row py-[0.63rem] px-[1.25rem] items-start justify-center">
        <div className="flex-1 overflow-hidden flex flex-row py-[0rem] pr-[0.94rem] pl-[2.5rem] items-center justify-start gap-[2.19rem]">
          <Image
            className="relative rounded-small w-[8rem] h-[8rem] shrink-0 object-cover"
            alt=""
            src="../testimg-2@2x.png"
          />
          <div className="overflow-hidden flex flex-col py-[0.94rem] px-[0rem] items-start justify-center gap-[0.31rem]">
            <div className="relative text-[1.25rem] font-medium">
              개지리는 종건급 상품
            </div>
            <FormControl className="self-stretch" variant="standard">
              <InputLabel color="warning">N개</InputLabel>
              <Select color="warning" size="medium" label="N개" />
              <FormHelperText />
            </FormControl>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
              <div className="relative">{`상품 옵션1 : `}</div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-end gap-[0.94rem] text-tomato-100">
                <div className="relative font-medium">옵션명</div>
                <Image
                  className="relative w-[0.85rem] h-[0.35rem] shrink-0"
                  alt=""
                  src="../group-12.svg"
                />
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start">
              <div className="relative">{`상품 옵션2 : `}</div>
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-end gap-[0.94rem] text-tomato-100">
                <div className="relative font-medium">옵션명</div>
                <Image
                  className="relative w-[0.85rem] h-[0.35rem] shrink-0"
                  alt=""
                  src="../group-12.svg"
                />
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
                  <span className="text-[1.56rem]">
                    {" "}
                    x 상품가격 399,999원 =
                  </span>
                </span>
                <span className="text-[1.56rem]">
                  <span className="text-tomato-100">
                    <span>{` `}</span>
                  </span>
                </span>
                <span className="text-tomato-100">
                  <span className="font-medium">9,999,999원</span>
                </span>
              </div>
            </div>
            <Image
              className="relative w-[0.79rem] h-[0.79rem] shrink-0"
              alt=""
              src="../group-2.svg"
            />
          </div>
        </div>
      </div> */}
      <ProductContainer product_name="개지리는 종건급 상품 2" />
      <ProductContainer product_name="개지리는 종건급 상품 3" />
      <div className="self-stretch flex-1 overflow-hidden flex flex-col py-[0.63rem] px-[0rem] items-center justify-end gap-[0.63rem] text-[1.56rem] text-white">
        <div className="rounded-base bg-tomato-200 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] w-[20rem] h-[4.06rem] shrink-0 overflow-hidden flex flex-row p-[0.63rem] box-border items-center justify-center">
          <b className="relative">구매하기</b>
        </div>
        <div className="self-stretch rounded-large bg-gray-100 overflow-hidden flex flex-row py-[0.63rem] px-[1.25rem] items-start justify-center text-[1.13rem] text-black">
          <div className="flex-1 overflow-hidden flex flex-row py-[0rem] px-[2.5rem] items-center justify-end">
            <div className="relative">
              <span>
                <span>총 상품가격 :</span>
              </span>
              <span className="font-medium text-tomato-100">
                <span>{` `}</span>
                <span>999,999,999원</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
