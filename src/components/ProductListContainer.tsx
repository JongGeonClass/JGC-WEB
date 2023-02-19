"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ProductList from "./ProductList";

const ProductListContainer = ({
  title,
  accent,
}: {
  title: string;
  accent?: boolean;
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
      <ProductList pagination={{ page: 1, pageSize: 3 }} />
    </>
  );
};

export default ProductListContainer;
