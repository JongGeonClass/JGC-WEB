"use client";
import { useProducts } from "@/hooks/useProduct";
import { PaginationDto } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ProductList from "./ProductList";

const ProductListContainer = ({
  title,
  accent,
  pagination,
}: {
  title: string;
  accent?: boolean;
  pagination: PaginationDto;
}) => {
  const titleArray = title.split(" ");
  return (
    <>
      <div className="relative font-medium text-black">
        {titleArray.map((cs, idx) => {
          return (
            <span
              key={idx}
              className={idx == 0 && accent ? "text-tomato-100" : ""}
            >{`${cs} `}</span>
          );
        })}
      </div>
      <ProductList pagination={pagination} />
    </>
  );
};

export default ProductListContainer;
