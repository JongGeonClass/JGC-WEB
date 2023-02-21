"use client";
import { useProducts } from "@/hooks/useProduct";
import { Category, PaginationDto, useProductsDto } from "@/types";
import { Alert, CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import testimg1 from "public/testimg-1.png";
const ProductList: NextPage<{
  pagination: PaginationDto;
  category?: Category;
}> = ({
  pagination,
  category,
}: {
  pagination: PaginationDto;
  category?: Category;
}) => {
  const { data, isLoading, isError } = useProducts({
    pagination,
    categoryId: category?.id,
  });
  if (isLoading) {
    return (
      <div className="self-stretch overflow-hidden flex flex-row py-[0.63rem] px-[0.94rem] items-center justify-center gap-[3.13rem] text-left text-[1.25rem] text-black font-noto-sans-kr">
        <CircularProgress />
      </div>
    );
  } else if (isError) {
    return (
      <div className="self-stretch overflow-hidden flex flex-row py-[0.63rem] px-[0.94rem] items-center justify-center gap-[3.13rem] text-left text-[1.25rem] text-black font-noto-sans-kr">
        <Alert severity="error">상품 목록을 불러올 수 없습니다.</Alert>
      </div>
    );
  }
  return (
    <div className="self-stretch overflow-hidden flex flex-row py-[0.63rem] px-[0.94rem] items-center justify-center gap-[3.13rem] text-left text-[1.25rem] text-black font-noto-sans-kr">
      {data?.products.map((product, idx) => {
        return (
          <Link
            className="overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem] cursor-pointer [text-decoration:none]"
            key={idx}
            href={{
              pathname: `/products/${product.id}`,
              query: { category: category?.name },
            }}
          >
            <Image
              className="relative w-[18.75rem] h-[18.75rem] shrink-0 object-cover"
              alt=""
              src={testimg1}
            />
            <div className="overflow-hidden flex flex-col items-center justify-start gap-[0.94rem] text-black">
              <div className="relative font-medium">{product.name}</div>
              <div className="relative text-[1rem]">{product.brand_name}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
