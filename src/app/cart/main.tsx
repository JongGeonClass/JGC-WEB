"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import CartContainer from "./CartContainer";

const Main = () => {
  const queryClient = new QueryClient();

  return (
    <div className="absolute top-[0rem] left-[0rem] w-[120rem] h-[56.88rem] overflow-hidden flex flex-col py-[0rem] px-[25rem] box-border items-center justify-center">
      <QueryClientProvider client={queryClient}>
        <CartContainer />
      </QueryClientProvider>
    </div>
  );
};

export default Main;
