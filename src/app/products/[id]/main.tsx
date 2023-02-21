"use client";
import ProductViewContainer from "@/components/ProductViewContainer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const Main = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { category: string };
}) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="self-stretch overflow-hidden flex flex-row py-[0.63rem] px-[26.25rem] items-center justify-center">
        <ProductViewContainer
          id={params.id}
          category={searchParams?.category}
        />
      </div>
    </QueryClientProvider>
  );
};

export default Main;
