import Header from "src/components/Header";
import Footer from "src/components/Footer";
import JGCCustomPBVBanner from "src/components/JGCCustomPBVBanner";
import Main from "./main";

const JGCCustomPBVSelect = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-[2.5rem] text-white font-noto-sans-kr">
      <Header />
      <JGCCustomPBVBanner />
      <Main />
      <Footer />
    </div>
  );
};

export default JGCCustomPBVSelect;
