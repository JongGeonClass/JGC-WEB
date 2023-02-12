import type { NextPage } from "next";
import Link from "next/link";

const Header: NextPage = () => {
  return (
    <div className="box-border flex w-[120rem] flex-row items-start justify-start gap-[0.63rem] overflow-hidden p-[0.63rem] text-left font-noto-sans-kr text-[1.25rem] text-black">
      <div className="flex flex-row items-center justify-start gap-[3.13rem] overflow-hidden py-[0.63rem] px-[1.88rem]">
        <button className="relative h-[4.38rem] w-[21rem] shrink-0 cursor-pointer bg-[transparent] bg-[url(../../public/logo.png)] bg-cover bg-[top] bg-no-repeat p-0 [border:none]" />
        <Link
          className="relative text-[inherit] [text-decoration:none]"
          href="products"
        >
          인테리어 상품
        </Link>
        <Link
          className="relative text-[inherit] [text-decoration:none]"
          href="pbv"
        >
          커스텀 PBV
        </Link>
        <Link
          className="relative text-[inherit] [text-decoration:none]"
          href=""
        >
          중고 거래
        </Link>
      </div>
      <div className="flex flex-1 flex-row items-center justify-end gap-[3.13rem] self-stretch overflow-hidden py-[0.63rem] px-[1.88rem]">
        <Link
          className="relative text-[inherit] [text-decoration:none]"
          href="auth/signup"
        >
          회원가입
        </Link>
        <Link
          className="relative text-[inherit] [text-decoration:none]"
          href="auth/login"
        >
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Header;
