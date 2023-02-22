import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import med from "public/med.png";
import bus from "public/bus.png";
import space from "public/space.png";
import box from "public/box.png";

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
          <div className="relative font-thin text-[1.25rem]">개인용 PBV 선택</div>
          <div className="relative font-light">어떤 용도의 차량인가요?</div>
        </div>

        <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-center justify-center gap-[9.38rem] text-[1.25rem]">

          <ImageBox src={med} text="의료" />
          <ImageBox src={bus} text="대중교통" />
          <ImageBox src={space} text="커뮤니티 공간" />
          <ImageBox src={box} text="배송" />

        </div>

        <div className="relative font-thin text-[0.85rem]">다른용도로 만들기 {'>'}</div>
      </div>
    </div>
  );
};

export default Main;