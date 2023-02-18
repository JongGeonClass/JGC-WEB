import type { NextPage } from "next";
import Image from "next/image";
import HyundaiMobisLogo from "public/HyundaiMobisLogo.jpg";
import LIKELION_brandsymbol from "public/LIKELION_brandsymbol.png";

const Footer: NextPage = () => {
  return (
    <div className="box-border flex h-[3.75rem] shrink-0 flex-row items-center justify-start gap-[0.63rem] self-stretch overflow-hidden bg-white p-[0.63rem] text-left font-components-button-large1 text-[0.69rem] text-black">
      <div className="flex flex-row items-center justify-start self-stretch overflow-hidden py-[0.63rem] px-[1.88rem]">
        <div className="relative font-light uppercase leading-[1.63rem] tracking-[0.46px]">
          @ALOHA, 2023
        </div>
      </div>
      <div className="relative flex-1 text-center font-noto-sans-kr font-thin uppercase leading-[1.63rem] tracking-[0.46px]">{`[현대모비스 x likelion] mobility sw hackathon `}</div>
      <div className="flex flex-row items-center justify-end gap-[0.63rem] self-stretch overflow-hidden p-[0.63rem]">
        <Image
          className="relative h-[3.5rem] w-[7.5rem] shrink-0 object-cover"
          alt=""
          src={HyundaiMobisLogo}
        />
        <Image
          className="relative h-[3.5rem] w-[6.88rem] shrink-0 object-cover"
          alt=""
          src={LIKELION_brandsymbol}
        />
      </div>
    </div>
  );
};

export default Footer;
