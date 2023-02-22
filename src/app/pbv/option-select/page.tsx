import type { NextPage } from "next";

import Header from "src/components/Header";
import Footer from "src/components/Footer";
import JGCCustomPBVBanner from "src/components/JGCCustomPBVBanner";
import CarOptionsContainer from "src/components/CarOptionsContainer";

import Image from "next/image";

const JGCCustomPBVSelect: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-[2.5rem] text-white font-noto-sans-kr">
      <Header />
      <JGCCustomPBVBanner />

      <div className="self-stretch overflow-hidden flex flex-col py-[0.63rem] px-[0rem] items-center justify-center text-[2.25rem] text-black">
        <div className="overflow-hidden flex flex-col p-[0.63rem] items-start justify-start gap-[1.56rem]">
          <div className="overflow-hidden flex flex-col items-center justify-center text-[1rem]">
            <div className="relative font-thin">개인용 PBV / 캠핑</div>
          </div>
          <div className="relative font-medium">공통 옵션 선택</div>
          <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-center justify-center gap-[10rem] text-[1.5rem]">
            <div className="rounded-base shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] rounded-md overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] border-t-0  items-center justify-center border-r-[0.5px] border-solid border-darkturquoise border-b-[0.8px] border-l-[0.5px]">
              <div className="relative font-light">{`차체 프레임 선택 >`}</div>
            </div>
            <div className="rounded-base shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] rounded-md overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] border-t-0 items-center justify-center border-r-[0.5px] border-solid border-darkturquoise border-b-[0.8px] border-l-[0.5px]">
              <div className="relative font-light">{`차체 크기 선택 >`}</div>
            </div>
            <div className="rounded-base shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] rounded-md overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] border-t-0 items-center justify-center border-r-[0.5px] border-solid border-darkturquoise border-b-[0.8px] border-l-[0.5px]">
              <div className="relative font-light">{`\${공통 옵션} 선택 >`}</div>
            </div>
          </div>
          <div className="relative font-medium">캠핑용 차량 옵션 선택</div>
          <div className="self-stretch overflow-hidden flex flex-row py-[1.88rem] px-[0.63rem] items-center justify-center gap-[10rem] text-[1.5rem]">
            <div className="rounded-base shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] rounded-md overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] items-center justify-center border-t-0 border-r-[0.5px] border-solid border-darkturquoise border-b-[0.8px] border-l-[0.5px]">
              <div className="relative font-light">{`옵션1 선택 >`}</div>
            </div>
            <div className="rounded-base shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] rounded-md overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] items-center justify-center border-t-0 border-r-[0.5px] border-solid border-darkturquoise border-b-[0.8px] border-l-[0.5px]">
              <div className="relative font-light">{`옵션2 선택 >`}</div>
            </div>
            <div className="rounded-base shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] rounded-md overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] items-center justify-center border-t-0 border-r-[0.5px] border-solid border-darkturquoise border-b-[0.8px] border-l-[0.5px]">
              <div className="relative font-light">{`옵션3 선택 >`}</div>
            </div>
            <div className="rounded-base shadow-[0px_4px_6px_rgba(0,_0,_0,_0.25)] rounded-md overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] items-center justify-center border-t-0 border-r-[0.5px] border-solid border-darkturquoise border-b-[0.8px] border-l-[0.5px]">
              <div className="relative font-light">{`옵션4 선택 >`}</div>
            </div>
          </div>

          <div className="relative text-[2rem] font-medium">
            나의 커스텀 차량 옵션 확인하기
          </div>
          <CarOptionsContainer />

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JGCCustomPBVSelect;
