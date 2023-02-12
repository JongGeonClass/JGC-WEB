import { NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Background from "public/background-temp.png";
import LoginCard from "./LoginCard";

const JGCLandingPage: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[67.5rem] overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <div className="self-stretch flex-1 relative bg-gainsboro-100 overflow-hidden">
        <Image
          className="absolute top-[0rem] left-[0rem] h-[56.88rem] w-[120rem] object-cover"
          alt=""
          src={Background}
        />
        <form
          className="absolute top-[3.44rem] left-[41.25rem] w-[37.5rem] h-[50rem]"
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
