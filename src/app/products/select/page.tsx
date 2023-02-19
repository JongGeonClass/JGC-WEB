import type { NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductViewContainer from "@/components/ProductViewContainer";
import Image from "next/image";

const JGCProductSelect: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-[1.25rem] text-black font-noto-sans-kr">
      <Header />
      <div className="self-stretch overflow-hidden flex flex-row py-[0.63rem] px-[26.25rem] items-center justify-center">
        <ProductViewContainer />
      </div>
      <Footer />
    </div>
  );
};

export default JGCProductSelect;
