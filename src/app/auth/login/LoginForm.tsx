"use client";

import { axiosInstance } from "@/utils/axios";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Ellipse1 from "public/svg/Ellipse1.svg";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

const LoginForm: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    axiosInstance
      .post(`/auth/login`, data)
      .then((response) => {
        router.push("/");
      })
      .catch((error) => console.error(error));
  return (
    <form
      className="absolute top-[3.44rem] left-[41.25rem] w-[37.5rem] h-[50rem] rounded-sm"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="absolute top-[1.56rem] left-[1.56rem] rounded-sm bg-white shadow-[0px_5px_6px_3px_rgba(0,_0,_0,_0.25)] w-[34.38rem] h-[46.88rem]">
        <div className="absolute top-[calc(50%_-_311px)] left-[calc(50%_-_260px)] w-[32.5rem] h-[37.5rem] overflow-hidden flex flex-col pt-[1.25rem] px-[0.63rem] pb-[0rem] box-border items-center justify-start gap-[0.75rem] text-left text-[0.75rem] text-darkturquoise font-noto-sans-kr">
          <b className="self-stretch relative text-[1.88rem] tracking-[0.46px] leading-[1.63rem] uppercase inline-block text-center h-[5rem] shrink-0">
            로그인
          </b>
          <div className="overflow-hidden flex flex-col pt-[0.75rem] px-[0rem] pb-[0.63rem] items-center justify-center gap-[2.19rem]">
            <input
              className="pl-2.5 border-0 bg-gainsboro-200 rounded-small box-border h-10 w-[25rem] flex flex-col items-start justify-start border-b-[0.5px] border-solid border-black"
              type="text"
              maxLength={30}
              minLength={4}
              placeholder="아이디를 올바르게 입력해주세요."
              required
              {...register("username", { required: true })}
            />
            {errors.username && <span>아이디를 입력해주세요.</span>}
            <input
              className="pl-2.5 border-0 bg-gainsboro-200 rounded-small box-border h-10 w-[25rem] flex flex-col items-start justify-start border-b-[0.5px] border-solid border-black"
              type="password"
              maxLength={30}
              minLength={4}
              placeholder="비밀번호를 올바르게 입력해주세요."
              required
              {...register("password", { required: true })}
            />
            {errors.password && <span>비밀번호를 입력해주세요.</span>}
          </div>
          <div className="self-stretch overflow-hidden flex flex-row py-[0rem] px-[3.13rem] items-start justify-start gap-[0.63rem] text-black">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[0.63rem]">
              <Image
                className="relative w-[1.25rem] h-[1.25rem] shrink-0"
                alt=""
                src={Ellipse1}
              />
              <div className="relative tracking-[0.15px] leading-[1.5rem] font-thin">
                아이디 기억하기
              </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-row p-[0.63rem] items-center justify-end">
              <div className="relative tracking-[0.15px] leading-[1.5rem] font-thin">
                아이디 / 비밀번호 찾기
              </div>
            </div>
          </div>
          <button className="rounded-md box-border w-[25rem] h-[3.44rem] shrink-0 overflow-hidden flex flex-col py-[0.5rem] px-[1.38rem] items-center justify-center text-[1.13rem] border-[1.5px] border-solid border-darkturquoise bg-transparent">
            <div className="flex flex-row items-center justify-center gap-[0.5rem]">
              <div className="relative tracking-[0.46px] leading-[1.63rem] uppercase font-medium text-darkturquoise">
                <b>로그인</b>
              </div>
            </div>
          </button>
          <div className="overflow-hidden flex flex-row py-[0.63rem] px-[0.31rem] items-center justify-center gap-[0.19rem] text-black">
            <div className="relative tracking-[0.46px] leading-[1.63rem] uppercase font-thin">
              아직 회원이 아니신가요?
            </div>
            <div className="relative tracking-[0.46px] leading-[1.63rem] uppercase font-medium text-darkturquoise">
              회원가입
            </div>
            <div className="relative tracking-[0.46px] leading-[1.63rem] uppercase font-thin">
              하러가기
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
