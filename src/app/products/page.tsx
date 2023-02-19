import type { NextPage } from "next";
import background from "public/background-temp.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import ProductListContainer from "@/components/ProductListContainer";
import Main from "./main";

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
      <Main />
      <Footer />
    </div>
  );
};

export default JGCProduct;
