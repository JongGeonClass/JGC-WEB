import { NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Background from "public/background-temp.png";
import LoginCard from "./LoginCard";

const JGCLandingPage: NextPage = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <Header />
      <div className="relative flex h-[56.88rem] flex-1 justify-center self-stretch overflow-hidden bg-gainsboro-100">
        <Image
          className="absolute top-[0rem] left-[0rem] z-auto h-[56.88rem] w-[120rem] object-cover"
          alt=""
          src={Background}
        />
        <form
          className="flex h-[50rem] w-[37.5rem] items-center justify-center"
          method="post"
        >
          <LoginCard />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default JGCLandingPage;
