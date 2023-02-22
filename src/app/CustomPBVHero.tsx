import type { NextPage } from "next";
import Image from "next/image";
import HeroButton from "public/svg/HeroButton.svg";
import Chevron1 from "public/svg/Chevron1.svg";
import CustomPBVHeroImage from "public/newimg2.png";
import Link from "next/link";

const CustomPBVHero: NextPage = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-[0.63rem] self-stretch overflow-hidden py-[1.56rem] px-[0.63rem] text-left font-noto-sans-kr text-[3rem] text-black">
      <div className="flex flex-1 flex-col items-center justify-center gap-[3.13rem] self-stretch overflow-hidden py-[1.88rem] px-[0.63rem]">
        <div className="relative uppercase leading-[1.63rem] tracking-[0.46px]">
          세상에 하나뿐인 자동차
        </div>
        <div className="relative text-[1.25rem] px-20">
          <p className="[margin-block-start:0] [margin-block-end:0px] text-center">
            Astride와 함께 세상에 하나뿐인 자동차를 내 손으로! 내가 상상한
            차량을 손쉽게 만들어봐요.
          </p>
        </div>
        <Link
          className="flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded border-[1px] border-solid border-tomato-100 bg-[transparent] py-[0.5rem] px-[1.38rem] [text-decoration:none]"
          href="pbv"
        >
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <Image
              className="relative hidden h-[1.38rem] w-[1.13rem] shrink-0"
              alt=""
              src={HeroButton}
            />
            <div className="relative text-left font-components-button-large1 text-[0.94rem] font-medium uppercase leading-[1.63rem] tracking-[0.46px] text-tomato-200">
              커스텀 PBV
            </div>
            <Image
              className="relative h-[1.5rem] w-[1.5rem] shrink-0"
              alt=""
              src={Chevron1}
            />
          </div>
        </Link>
      </div>
      <Image
        className="relative h-[32.13rem] w-[68.69rem] shrink-0 object-cover"
        alt=""
        src={CustomPBVHeroImage}
      />
    </div>
  );
};

export default CustomPBVHero;
