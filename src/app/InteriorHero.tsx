import type { NextPage } from "next";
import Image from "next/image";
import HeroButton from "public/svg/HeroButton.svg";
import Chevron2 from "public/svg/Chevron2.svg";
import InteriorHeroImage from "public/newimg1.png";
import Link from "next/link";

const InteriorHero: NextPage = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-[0.63rem] self-stretch overflow-hidden py-[1.56rem] px-[0.63rem] text-left font-noto-sans-kr text-[3rem] text-black">
      <Image
        className="relative h-[32.13rem] w-[68.63rem] shrink-0 object-cover"
        alt=""
        src={InteriorHeroImage}
      />
      <div className="flex flex-1 flex-col items-center justify-center gap-[3.13rem] self-stretch overflow-hidden p-[0.63rem]">
        <div className="relative uppercase leading-[1.63rem] tracking-[0.46px]">
          인테리어는 필수
        </div>
        <div className="relative text-[1.25rem] px-8">
          <p className="[margin-block-start:0] [margin-block-end:0px] text-center">
            소중한 나의 차량, 새로운 경험을 위한 인테리어 상품을 들여봐요.{" "}
            <br />
            여러 차내 인테리어 상품들을 내 손에!
          </p>
        </div>
        <Link
          className="flex flex-col items-center justify-center overflow-hidden rounded border-[1px] border-solid border-tomato-100 py-[0.5rem] px-[1.38rem] font-components-button-large1 text-[0.94rem] text-tomato-200 [text-decoration:none]"
          href="products"
        >
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <Image
              className="relative h-[1.5rem] w-[1.5rem] shrink-0"
              alt=""
              src={Chevron2}
            />
            <div className="relative font-medium uppercase leading-[1.63rem] tracking-[0.46px]">
              인테리어 상품
            </div>
            <Image
              className="relative hidden h-[1.38rem] w-[1.13rem] shrink-0"
              alt=""
              src={HeroButton}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InteriorHero;
