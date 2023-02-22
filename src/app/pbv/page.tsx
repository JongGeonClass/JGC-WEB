import type { NextPage } from "next";

import Header from "src/components/Header";
import Footer from "src/components/Footer";
import JGCCustomPBVBanner from "src/components/JGCCustomPBVBanner";

import Main from "./main";

const JGCCustomPBV: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[67.5rem] overflow-hidden flex flex-col items-start justify-start text-left text-[1.25rem] text-black font-noto-sans-kr">
      <Header />
      <JGCCustomPBVBanner />
      <Main />
      <Footer />
    </div>
  );
};

export default JGCCustomPBV;
