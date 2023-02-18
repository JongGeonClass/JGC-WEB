"use client";
import { axiosInstance } from "@/utils/axios";
import Link from "next/link";
import React, { MouseEventHandler } from "react";

const LogoutWrapper = () => {
  const onLogout: MouseEventHandler<HTMLAnchorElement> = (event) => {
    axiosInstance
      .post("/auth/logout")
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <Link
      className="relative text-[inherit] [text-decoration:none]"
      onClick={onLogout}
      href="/"
    >
      로그아웃
    </Link>
  );
};

export default LogoutWrapper;
