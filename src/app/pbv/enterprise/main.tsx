import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import car from "public/car.png";
import plane from "public/plane.png";
import fire from "public/fire.png";

const ImageBox = ({ src, text }: { src: StaticImageData, text: string }) => {
  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-col items-center justify-center gap-[0.94rem]"
      autoFocus
    >
      <div className="overflow-hidden flex flex-col items-center justify-center gap-[0.94rem]">
        <Image
          className="relative w-[11.99rem] h-[auto] shrink-0 object-cover opacity-60"
          alt=""
          src={src}
        />
        <div className="relative text-[1.25rem] font-noto-sans-kr text-black text-left">
          {text}
        </div>
      </div>
    </button>
  );
}

const Main = () => {
  return (
    <div className="self-stretch flex-1 overflow-hidden flex flex-col py-[0.63rem] px-[0rem] items-center justify-center text-[2rem]">
      <div className="flex-1 w-[81.25rem] overflow-hidden flex flex-col p-[0.63rem] box-border items-center justify-center gap-[3.13rem]">
        <div className="flex flex-col items-center justify-center gap-[0.94rem]">
          <div className="relative font-thin text-[1.25rem]">기업용 PBV 선택</div>
          <div className="relative font-light">어떤 용도의 차량인가요?</div>
        </div>

        <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-center justify-center gap-[9.38rem] text-[1.25rem]">

          <ImageBox src={car} text="일반/거주" />
          <ImageBox src={plane} text="여행" />
          <ImageBox src={fire} text="캠핑" />

        </div>

        <div className="relative font-thin text-[0.85rem]">다른용도로 만들기 {'>'}</div>
      </div>
    </div>
  );
};

export default Main;