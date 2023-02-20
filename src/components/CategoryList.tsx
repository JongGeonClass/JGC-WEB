"use client";

import { useCategories } from "@/hooks/useCategories";
import { Category } from "@/types";
import { CircularProgress } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const CategoryList = ({
  title,
  currentCategory,
  chooseCategory,
}: {
  title: string;
  currentCategory: Category;
  chooseCategory: Dispatch<SetStateAction<Category>>;
}) => {
  const { data, isLoading, isError } = useCategories();
  if (isLoading) return <CircularProgress />;
  return (
    <div className="overflow-hidden flex flex-col py-[1.94rem] pr-[2.5rem] pl-[4.06rem] items-start justify-start gap-[1.25rem]">
      <div className="relative font-medium">{title}</div>
      <div className="overflow-hidden flex flex-col py-[0.25rem] px-[0.44rem] items-start justify-center gap-[0.5rem] text-[0.88rem]">
        {data?.map((category, idx) => {
          return (
            <div
              className={`w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem] ${
                category == currentCategory && "text-tomato-100"
              }`}
              onClick={() => chooseCategory(category)}
              key={idx}
            >
              <div className="relative font-light">{category.name}</div>
              <div className="self-stretch flex-1 flex flex-col items-end justify-center">
                <div className="relative font-light">{`>`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
