"use client";

import ImageBox from "@/components/ImageBox";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { PBVData } from "@/types";
import car from "public/car.png";
import fire from "public/fire.png";
import plane from "public/plane.png";

const Main = () => {
  const [pbvType, setPbvType] = useLocalStorage<PBVData>("pbv", {});

  return (
    <div className="self-stretch flex-1 overflow-hidden flex flex-col py-[0.63rem] px-[0rem] items-center justify-center text-[2rem]">
      <div className="flex-1 w-[81.25rem] overflow-hidden flex flex-col p-[0.63rem] box-border items-center justify-center gap-[3.13rem]">
        <div className="flex flex-col items-center justify-center gap-[0.94rem]">
          <div className="relative font-thin text-[1.25rem]">
            기업용 PBV 선택
          </div>
          <div className="relative font-light">어떤 용도의 차량인가요?</div>
        </div>

        <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-center justify-center gap-[9.38rem] text-[1.25rem]">
          <ImageBox src={car} text="일반/거주" setPbvType={setPbvType} />
          <ImageBox src={plane} text="여행" setPbvType={setPbvType} />
          <ImageBox src={fire} text="캠핑" setPbvType={setPbvType} />
        </div>

        <div className="relative font-thin text-[0.85rem]">
          다른용도로 만들기 {">"}
        </div>
      </div>
    </div>
  );
};

export default Main;
