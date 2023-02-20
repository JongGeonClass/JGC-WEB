import { Category, PaginationDto } from "@/types";
import React from "react";
import ProductList from "./ProductList";

const ProductListContainer = ({
  title,
  accent,
  pagination,
  stack,
  category,
}: {
  title: string;
  accent?: boolean;
  pagination: PaginationDto;
  stack?: boolean;
  category?: Category;
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
      <ProductList pagination={pagination} categoryId={category?.id} />
      {stack && (
        <ProductList
          pagination={{ ...pagination, page: pagination.page + 1 }}
          categoryId={category?.id}
        />
      )}
    </>
  );
};

export default ProductListContainer;
