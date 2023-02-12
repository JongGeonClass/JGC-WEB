import { NextPage } from "next";
import CustomPBVHero from "./CustomPBVHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InteriorHero from "./InteriorHero";

const JGCLandingPage: NextPage = () => {
  return (
    <div className="relative flex w-full flex-col items-start justify-start overflow-hidden bg-white">
      <Header />
      <div className="flex flex-col items-center justify-center gap-[0.63rem] self-stretch overflow-hidden p-[0.63rem]">
        <CustomPBVHero />
        <InteriorHero />
      </div>
      <Footer />
    </div>
  );
};

export default JGCLandingPage;
