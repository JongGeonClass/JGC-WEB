import type { NextPage } from "next";
import Image from "next/image";

import star1 from "public/svg/star-1.svg";
import emptyStar from "public/svg/star-5.svg";

type ReviewContainerType = {
  dateRange: string;
  reviewerName: string;
  reviewText: string;
  reviewRating: number;
};

const ReviewContainer: NextPage<ReviewContainerType> = ({
  dateRange,
  reviewerName,
  reviewText,
  reviewRating,
}) => {
  const date = new Date(dateRange);
  return (
    <div className="overflow-hidden w-full flex flex-row py-[0rem] items-start justify-start text-center text-[0.69rem] text-black font-noto-sans-kr">
      <div className="w-full shrink-0 overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-between gap-[0.63rem]">
        <div>
          <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-start justify-start">
            <div className="relative font-light text-lg">
              {date.toISOString().split("T")[0]}
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start gap-[0.63rem] text-[1.13rem]">
            <div className="relative font-medium text-xl">{reviewerName}</div>
            <div className="relative text-[1rem] text-left">{reviewText}</div>
          </div>
        </div>
        <div className="flex flex-row p-[0.63rem] items-start justify-start gap-[0.63rem]">
          {reviewRating &&
            Array(reviewRating)
              .fill(0)
              .map((_, i) => {
                return (
                  <Image
                    className="relative w-[2.5rem] h-[2.5rem] shrink-0"
                    alt=""
                    src={star1}
                    key={1 + i}
                  />
                );
              })}
          {reviewRating < 5 &&
            Array(5 - reviewRating)
              .fill(0)
              .map((_, i) => {
                return (
                  <Image
                    className="relative w-[2.5rem] h-[2.5rem] shrink-0"
                    alt=""
                    src={emptyStar}
                    key={6 + i}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
