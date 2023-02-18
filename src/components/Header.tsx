import { isAuthenticated } from "@/utils/auth";
import type { NextPage } from "next";
import Link from "next/link";
import LogoutWrapper from "./LogoutWrapper";

const Header: NextPage = () => {
  const authData = isAuthenticated();
  return (
    <div className="box-border flex w-full flex-row items-start justify-start gap-[0.63rem] p-[0.63rem] text-left font-noto-sans-kr text-[1.25rem] text-black">
      <div className="flex flex-row items-center justify-start gap-[3.13rem] overflow-hidden py-[0.63rem] px-[1.88rem]">
        <Link
          className="relative h-[4.38rem] w-[21rem] shrink-0 cursor-pointer bg-[transparent] bg-[url(../../public/logo.png)] bg-cover bg-[top] bg-no-repeat p-0 [border:none]"
          href=""
        />
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
        {authData.isAuthenticated ? (
          <>
            <Link
              className="relative text-[inherit] [text-decoration:none]"
              href="user"
            >
              마이 페이지
            </Link>
            <LogoutWrapper />
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
