"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import med from "public/med.png";
import bus from "public/bus.png";
import space from "public/space.png";
import box from "public/box.png";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { PBVData } from "@/types";
import { useRouter } from "next/navigation";
import ImageBox from "@/components/ImageBox";

const Main = () => {
  const [pbvType, setPbvType] = useLocalStorage<PBVData>("pbv", {});
  const router = useRouter();
  if (!pbvType.type) {
    router.push("/pbv");
  }
  return (
    <div className="self-stretch flex-1 overflow-hidden flex flex-col py-[0.63rem] px-[0rem] items-center justify-center text-[2rem]">
      <div className="flex-1 w-[81.25rem] overflow-hidden flex flex-col p-[0.63rem] box-border items-center justify-center gap-[3.13rem]">
        <div className="flex flex-col items-center justify-center gap-[0.94rem]">
          <div className="relative font-thin text-[1.25rem]">
            개인용 PBV 선택
          </div>
          <div className="relative font-light">어떤 용도의 차량인가요?</div>
        </div>

        <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-center justify-center gap-[9.38rem] text-[1.25rem]">
          <ImageBox src={med} text="의료" setPbvType={setPbvType} />
          <ImageBox src={bus} text="대중교통" setPbvType={setPbvType} />
          <ImageBox src={space} text="커뮤니티 공간" setPbvType={setPbvType} />
          <ImageBox src={box} text="배송" setPbvType={setPbvType} />
        </div>

        <div className="relative font-thin text-[0.85rem]">
          다른용도로 만들기 {">"}
        </div>
      </div>
    </div>
  );
};

export default Main;
