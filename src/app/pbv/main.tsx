import Image from "next/image";
import Link from "next/link";

import enterpriseUsage from "public/enterpriseUsage.png";
import personalUsage from "public/personalUsage.png";

const Main = () => {
  return (
    <div className="self-stretch flex-1 overflow-hidden flex flex-col py-[0.63rem] px-[0rem] items-center justify-center text-[2rem]">
      <div className="flex-1 w-[81.25rem] overflow-hidden flex flex-col p-[0.63rem] box-border items-center justify-center gap-[3.13rem]">
        <div className="relative font-light">누구를 위한 차량인가요?</div>

        <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-center justify-center gap-[9.38rem] text-[1.25rem]">
          <Link href="/pbv/personal" className="[text-decoration:none]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-col items-center justify-center gap-[0.94rem]"
              autoFocus
            >
              <Image
                className="relative w-[11.99rem] h-[12.5rem] shrink-0 object-cover opacity-60"
                alt=""
                src={personalUsage}
              />
              <div className="relative text-[1.25rem] font-noto-sans-kr text-black text-left">
                개인용
              </div>
            </button>
          </Link>

          <Link href="/pbv/enterprise" className="[text-decoration:none]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-col items-center justify-center gap-[0.94rem] "
              autoFocus
            >
              <div className="overflow-hidden flex flex-col items-center justify-center gap-[0.94rem]">
                <Image
                  className="relative w-[25rem] h-[12.5rem] shrink-0 object-cover opacity-60"
                  alt=""
                  src={enterpriseUsage}
                />
                <div className="relative text-[1.25rem] font-noto-sans-kr text-black text-left">
                  기업용
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
