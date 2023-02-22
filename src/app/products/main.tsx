"use client";

import CategoryList from "@/components/CategoryList";
import ProductListContainer from "@/components/ProductListContainer";
import { Category } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const defaultCategory: Category = {
  id: 0,
  name: "",
  description: "",
};

const Main = () => {
  const queryClient = new QueryClient();
  const [category, setCategory] = React.useState<Category>(defaultCategory);

  const isCategorySelected = category != defaultCategory;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-start justify-start gap-[0.63rem]">
        <CategoryList
          title={"인테리어 상품"}
          currentCategory={category}
          chooseCategory={setCategory}
        />
        <div className="flex-1 overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] items-start justify-start gap-[0.63rem] text-[3.13rem] text-tomato-100">
          {isCategorySelected || (
            <ProductListContainer
              title="추천 상품"
              pagination={{ page: 0, pageSize: 4 }}
              accent
            />
          )}
          <ProductListContainer
            title="상품 목록"
            pagination={{ page: 0, pageSize: 4 }}
            category={category}
            stack={isCategorySelected}
          />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Main;
