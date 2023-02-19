import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Background from "public/background-temp.png";
import Main from "./main";

const JGCCart = () => {
  return (
    <div className="relative bg-white w-full h-[67.5rem] overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <div className="self-stretch flex-1 relative bg-gainsboro-100 overflow-hidden">
        <Image
          className="absolute top-[0rem] left-[0rem] w-[120rem] h-[56.88rem] object-cover"
          alt=""
          src={Background}
        />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default JGCCart;
