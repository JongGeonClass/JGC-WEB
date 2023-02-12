import type { NextPage } from "next";
import Image from "next/image";
import Ellipse1 from "public/svg/Ellipse1.svg";

const LoginCard: NextPage = () => {
  return (
    <div className="relative h-[46.88rem] w-[34.38rem] rounded-lg bg-white shadow-[0px_5px_6px_3px_rgba(0,_0,_0,_0.25)]">
      <div className="absolute top-[calc(50%_-_311px)] left-[calc(50%_-_260px)] box-border flex h-[37.5rem] w-[32.5rem] flex-col items-center justify-start gap-[0.75rem] overflow-hidden px-[0.63rem] pt-[1.25rem] pb-[0rem] text-left font-noto-sans-kr text-[0.75rem] text-darkturquoise">
        <b className="relative inline-block h-[5rem] shrink-0 self-stretch text-center text-[1.88rem] uppercase leading-[1.63rem] tracking-[0.46px]">
          로그인
        </b>
        <div className="flex flex-col items-center justify-center gap-[2.19rem] overflow-hidden px-[0rem] pt-[1.25rem] pb-[0.63rem]">
          <input
            className="rounded-small box-border flex w-[25rem] flex-col items-start justify-start border-b-[0.5px] border-solid border-black bg-gainsboro-200 [border:none]"
            type="text"
            maxLength={30}
            minLength={6}
            required
          />
          <input
            className="rounded-small box-border flex w-[25rem] flex-col items-start justify-start border-b-[0.5px] border-solid border-black bg-gainsboro-200 [border:none]"
            type="password"
            maxLength={30}
            minLength={4}
            required
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[0.63rem] self-stretch overflow-hidden py-[0rem] px-[3.13rem] text-black">
          <div className="flex flex-row items-center justify-start gap-[0.63rem] self-stretch overflow-hidden">
            <Image
              className="relative h-[1.25rem] w-[1.25rem] shrink-0"
              alt=""
              src={Ellipse1}
            />
            <div className="relative font-thin leading-[1.5rem] tracking-[0.15px]">
              아이디 기억하기
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center justify-end self-stretch overflow-hidden p-[0.63rem]">
            <div className="relative font-thin leading-[1.5rem] tracking-[0.15px]">
              아이디 / 비밀번호 찾기
            </div>
          </div>
        </div>
        <div className="rounded-small box-border flex h-[3.44rem] w-[25rem] shrink-0 flex-col items-center justify-center overflow-hidden border-[1px] border-solid border-darkturquoise py-[0.5rem] px-[1.38rem] text-[1.13rem]">
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            {/* <Image
                className="relative hidden h-[1.38rem] w-[1.13rem] shrink-0"
                alt=""
                src="../masked-icon.svg"
              /> */}
            <div className="relative font-medium uppercase leading-[1.63rem] tracking-[0.46px]">
              로그인
            </div>
            {/* <Image
                className="relative hidden h-[1.38rem] w-[1.13rem] shrink-0"
                alt=""
                src="../masked-icon1.svg"
              /> */}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0.19rem] overflow-hidden py-[0.63rem] px-[0.31rem] text-black">
          <div className="relative font-thin uppercase leading-[1.63rem] tracking-[0.46px]">
            아직 회원이 아니신가요?
          </div>
          <div className="relative font-medium uppercase leading-[1.63rem] tracking-[0.46px] text-darkturquoise">
            회원가입
          </div>
          <div className="relative font-thin uppercase leading-[1.63rem] tracking-[0.46px]">
            하러가기
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
