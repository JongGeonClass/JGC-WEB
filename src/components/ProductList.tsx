"use client";
import { useProducts } from "@/hooks/useProduct";
import { ProductsListDto, useProductsDto } from "@/types";
import type { NextPage } from "next";
import Image from "next/image";
import testimg1 from "public/testimg-1.png";
const ProductList: NextPage<useProductsDto> = (dto: useProductsDto) => {
  const { data, isLoading, isError } = useProducts(dto);
  return (
    <div className="self-stretch overflow-hidden flex flex-row py-[0.63rem] px-[0.94rem] items-center justify-center gap-[3.13rem] text-left text-[1.25rem] text-black font-noto-sans-kr">
      <div className="overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem] cursor-pointer">
        <Image
          className="relative w-[18.75rem] h-[18.75rem] shrink-0 object-cover"
          alt=""
          src={testimg1}
        />
        <div className="overflow-hidden flex flex-col items-center justify-start gap-[0.94rem]">
          <div className="relative font-medium">상품1</div>
          <div className="relative text-[1rem]">상품에 대한 설명 짧게</div>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem]">
        <Image
          className="relative w-[18.75rem] h-[18.75rem] shrink-0 object-cover"
          alt=""
          src={testimg1}
        />
        <div className="overflow-hidden flex flex-col items-center justify-start gap-[0.94rem]">
          <div className="relative font-medium">상품2</div>
          <div className="relative text-[1rem]">상품에 대한 설명 짧게</div>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem]">
        <Image
          className="relative w-[18.75rem] h-[18.75rem] shrink-0 object-cover"
          alt=""
          src={testimg1}
        />
        <div className="overflow-hidden flex flex-col items-center justify-start gap-[0.94rem]">
          <div className="relative font-medium">상품3</div>
          <div className="relative text-[1rem]">상품에 대한 설명 짧게</div>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem]">
        <Image
          className="relative w-[18.75rem] h-[18.75rem] shrink-0 object-cover"
          alt=""
          src={testimg1}
        />
        <div className="overflow-hidden flex flex-col items-center justify-start gap-[0.94rem]">
          <div className="relative font-medium">상품4</div>
          <div className="relative text-[1rem]">상품에 대한 설명 짧게</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
