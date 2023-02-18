import type { NextPage } from "next";
import background from "public/background-temp.png";
import ProductListContainer from "@/components/ProductListContainer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const JGCProduct: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-[1.25rem] text-black font-noto-sans-kr">
      <Header />
      <div className="self-stretch relative h-[20rem] shrink-0 overflow-hidden text-[2.5rem] text-white">
        <Image
          className="absolute top-[calc(50%_-_160px)] left-[calc(50%_-_960px)] w-[160rem] h-[20rem] object-cover"
          alt=""
          src={background}
        />
        <div className="absolute top-[8.13rem] left-[46.56rem] font-light">
          나만을 위한 PBV 인테리어
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-start justify-start gap-[0.63rem]">
        <div className="overflow-hidden flex flex-col py-[1.94rem] pr-[2.5rem] pl-[4.06rem] items-start justify-start gap-[1.25rem]">
          <div className="relative font-medium">인테리어 상품</div>
          <div className="overflow-hidden flex flex-col py-[0.25rem] px-[0.44rem] items-start justify-center gap-[0.5rem] text-[0.88rem]">
            <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="relative font-light">항목1</div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
                <div className="relative font-light">{`>`}</div>
              </div>
            </div>
            <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem] cursor-pointer">
              <div className="relative font-light">항목2</div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
                <div className="relative font-light">{`>`}</div>
              </div>
            </div>
            <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="relative font-light">항목3</div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
                <div className="relative font-light">{`>`}</div>
              </div>
            </div>
            <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="relative font-light">항목4</div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
                <div className="relative font-light">{`>`}</div>
              </div>
            </div>
            <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="relative font-light">항목5</div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
                <div className="relative font-light">{`>`}</div>
              </div>
            </div>
            <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="relative font-light">항목6</div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
                <div className="relative font-light">{`>`}</div>
              </div>
            </div>
            <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="relative font-light">항목7</div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
                <div className="relative font-light">{`>`}</div>
              </div>
            </div>
            <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="relative font-light">항목8</div>
              <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
                <div className="relative font-light">{`>`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] items-start justify-start gap-[0.63rem] text-[3.13rem] text-tomato-100">
          <b className="relative">
            <span>추천</span>
            <span className="text-black"> 상품</span>
          </b>
          <ProductListContainer />
          <div className="relative font-medium text-black">상품 목록</div>
          <ProductListContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JGCProduct;
