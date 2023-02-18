"use client";

import type { NextPage } from "next";
import { TextField, Input, Icon } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { axiosInstance } from "@/utils/axios";

type Inputs = {
  email: string;
  password: string;
  confirm_password: string;
  username: string;
  nickname: string;
};

type Payload = {
  email: string;
  password: string;
  username: string;
  nickname: string;
};

const RegistrationFormContainer: NextPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    axiosInstance
      .post(`/auth/signup`, data)
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
      <div className="absolute top-[1.56rem] left-[1.56rem] rounded-sm bg-white shadow-[0px_5px_6px_3px_rgba(0,_0,_0,_0.25)] w-[34.38rem] h-[46.88rem]" />
      <div className="absolute top-[calc(50%_-_350px)] left-[calc(50%_-_260px)] w-[32.5rem] h-[46.88rem] overflow-hidden flex flex-col pt-[1.25rem] px-[0.63rem] pb-[0rem] box-border items-center justify-start gap-[2.5rem] text-left text-[1.88rem] text-darkturquoise font-noto-sans-kr">
        <b className="self-stretch relative tracking-[0.46px] leading-[1.63rem] uppercase inline-block text-center h-[2.5rem] shrink-0">
          회원가입
        </b>
        <div className="overflow-hidden flex flex-col pt-[1.25rem] px-[0rem] pb-[0.63rem] items-center justify-center gap-[1.88rem] text-[0.75rem] text-text-secondary1">
          <TextField
            className="[border:none] bg-[transparent]"
            sx={{ width: 400 }}
            color="primary"
            variant="standard"
            type="text"
            label="아이디를 입력해주세요."
            size="medium"
            margin="none"
            required
            {...register("username", { required: true })}
          />
          <div className="rounded-xxs w-[25rem] flex flex-col items-start justify-start">
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              variant="standard"
              type="password"
              label="비밀번호를 입력해주세요."
              size="medium"
              margin="none"
              required
              {...register("password", {
                required: true,
                minLength: 4,
                maxLength: 30,
                pattern: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{4,30}$/,
              })}
            />
            <div className="self-stretch flex flex-col pt-[0.19rem] px-[0rem] pb-[0rem] items-start justify-start">
              <div className="self-stretch relative tracking-[0.4px] leading-[166%] font-light">
                <p className="[margin-block-start:0] [margin-block-end:0px]">{`비밀번호는 4자 이상 30자 이하이고, `}</p>
                <p className="m-0">{`알파벳 대소문자/숫자/특수문자로 이루어져 있어야 합니다. `}</p>
              </div>
            </div>
          </div>
          <TextField
            className="[border:none] bg-[transparent]"
            sx={{ width: 400 }}
            color="primary"
            variant="standard"
            type="password"
            label="비밀번호를 재입력해주세요."
            size="medium"
            margin="none"
            required
            {...register("confirm_password", {
              required: true,
              validate: (value) => value === watch("password"),
            })}
          />
          <TextField
            className="[border:none] bg-[transparent]"
            sx={{ width: 400 }}
            color="primary"
            variant="standard"
            type="email"
            label="이메일을 입력해주세요."
            size="medium"
            margin="none"
            required
            {...register("email", { required: true, pattern: /^\S+@\S+.\S$/i })}
          />
          <div className="rounded-xxs w-[25rem] flex flex-col items-start justify-start">
            <TextField
              className="[border:none] bg-[transparent] self-stretch"
              color="primary"
              variant="standard"
              type="text"
              label="닉네임을 입력해주세요."
              size="medium"
              margin="none"
              required
              {...register("nickname", { required: true })}
            />
            <div className="self-stretch flex flex-col pt-[0.19rem] px-[0rem] pb-[0rem] items-start justify-start">
              <div className="self-stretch relative tracking-[0.4px] leading-[166%] font-light">{`닉네임은 4자 이상 30자 이하의 영어/한글로 이루어져야 합니다. `}</div>
            </div>
          </div>
        </div>
        <button className="rounded-md box-border w-[25rem] h-[3.44rem] shrink-0 overflow-hidden flex flex-col py-[0.5rem] px-[1.38rem] items-center justify-center text-[1.13rem] border-[1px] border-solid border-darkturquoise bg-transparent">
          <div className="flex flex-row items-center justify-center gap-[0.5rem]">
            <div className="relative tracking-[0.46px] leading-[1.63rem] uppercase font-medium text-darkturquoise">
              <b>회원가입</b>
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default RegistrationFormContainer;
