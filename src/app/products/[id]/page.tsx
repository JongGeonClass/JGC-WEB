import type { NextPage } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductViewContainer from "@/components/ProductViewContainer";
import Main from "./main";

const JGCProductSelect = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { category: string };
}) => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-[1.25rem] text-black font-noto-sans-kr">
      <Header />
      <Main params={params} searchParams={searchParams} />
      <Footer />
    </div>
  );
};

export default JGCProductSelect;
