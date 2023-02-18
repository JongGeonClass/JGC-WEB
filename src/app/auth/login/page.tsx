import { NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Background from "public/background-temp.png";
import LoginForm from "./LoginForm";

const JGCLandingPage = () => {
  return (
    <div className="relative bg-white w-full h-[67.5rem] overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <div className="self-stretch flex-1 relative bg-gainsboro-100 overflow-hidden">
        <Image
          className="absolute top-[0rem] left-[0rem] h-[56.88rem] w-[120rem] object-cover"
          alt=""
          src={Background}
        />
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default JGCLandingPage;
