"use client";

import type { NextPage } from "next";
import Image from "next/image";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  TextField,
  Button,
} from "@mui/material";
import ReviewContainer from "@/components/ReviewContainer";
import testimg from "public/testimg-1.png";
import line1 from "public/svg/line-1.svg";
import star1 from "public/svg/star-1.svg";
import star5 from "public/svg/star-5.svg";
import group1 from "public/svg/group-1.svg";
import group11 from "public/svg/group-11.svg";
import testimg2 from "public/JGC-image.png";

const ProductViewContainer: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col pt-[0rem] pb-[0.63rem] items-start justify-center gap-[0.63rem] text-center text-[1.25rem] text-black font-noto-sans-kr">
      <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-start justify-start">
        <div className="relative box-border w-[65.38rem] h-[0.06rem] shrink-0 border-t-[1px] border-solid border-darkgray" />
      </div>
      <div className="overflow-hidden flex flex-col p-[0.63rem] items-start justify-start text-darkgray">
        <div className="relative font-light">{`카테고리명 >`}</div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center gap-[1.25rem] text-[0.75rem]">
        <Image
          className="relative w-[32rem] h-[32rem] shrink-0 object-cover"
          alt=""
          src={testimg}
        />
        <div className="self-stretch overflow-hidden flex flex-col py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem]">
          <div className="relative text-[2rem] text-left">
            개지리는 종건급 상품
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center gap-[1.25rem] text-left text-[0.94rem]">
            <div className="relative font-light">브랜드명</div>
            <Image
              className="relative w-[0.32rem] h-[0.98rem] shrink-0"
              alt=""
              src={line1}
            />
            <div className="relative font-light">{`판매자명 `}</div>
          </div>
          <div className="w-[22.88rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-center justify-start gap-[0.63rem] text-[0.63rem]">
            <div className="overflow-hidden flex flex-col py-[0rem] px-[0.88rem] items-start justify-start">
              <div className="relative">N개의 리뷰</div>
              <div className="relative text-[0.94rem] text-tomato">
                <span className="font-light">평균 별점</span>
                <span>{` `}</span>
                <span className="font-medium">4.05</span>
              </div>
            </div>
            <b className="flex-1 relative text-[1.88rem] text-right">
              299,999원
            </b>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center gap-[1.25rem] text-left text-[0.94rem]">
            <div className="relative font-light">배송정보</div>
            <Image
              className="relative w-[0.32rem] h-[0.98rem] shrink-0"
              alt=""
              src={line1}
            />
            <div className="relative font-light">{`배송비 얼마얼마 그런 정보 `}</div>
          </div>
          <div className="overflow-hidden flex flex-col p-[0.63rem] items-center justify-center gap-[0.31rem]">
            <FormControl sx={{ width: 345 }} variant="outlined" required>
              <InputLabel color="primary" />
              <Select color="primary" size="medium" />
              <FormHelperText />
            </FormControl>
            <div className="rounded-lg box-border w-[21.56rem] h-[1.56rem] shrink-0 overflow-hidden flex flex-row p-[0.63rem] items-center justify-end gap-[0.63rem] text-tomato border-[0.5px] border-solid border-tomato">
              <div className="relative font-light">옵션1을 선택하세요</div>
              <Image
                className="relative w-[0.85rem] h-[0.35rem] shrink-0"
                alt=""
                src={group1}
              />
            </div>
            <div className="rounded-lg box-border w-[21.56rem] h-[1.56rem] shrink-0 overflow-hidden flex flex-row p-[0.63rem] items-center justify-end gap-[0.63rem] border-[0.5px] border-solid border-gray-300">
              <div className="relative font-light">옵션2을 선택하세요</div>
              <Image
                className="relative w-[0.85rem] h-[0.35rem] shrink-0"
                alt=""
                src={group11}
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-row py-[0rem] px-[0.25rem] items-center justify-center gap-[0.63rem] text-left">
              <div className="flex-1 relative font-light">
                수량을 선택하세요
              </div>
              <TextField
                className="[border:none] bg-[transparent]"
                sx={{ width: 70 }}
                color="primary"
                variant="standard"
                type="text"
                label="N개"
                placeholder="Placeholder"
                size="medium"
                margin="none"
                required
              />
            </div>
          </div>
          <div className="w-[22.81rem] h-[2.38rem] shrink-0 overflow-hidden flex flex-row py-[0rem] px-[0.63rem] box-border items-center justify-start gap-[0.63rem] text-tomato">
            <div className="flex-1 overflow-hidden flex flex-col py-[0rem] px-[0.63rem] items-start justify-start">
              <b className="relative inline-block w-[2.13rem] h-[1.13rem] shrink-0">
                총 N개
              </b>
            </div>
            <div className="overflow-hidden flex flex-col py-[0rem] px-[0.63rem] items-start justify-start text-[1.5rem]">
              <b className="relative">299,999원</b>
            </div>
          </div>
          <Button sx={{ width: 345 }} variant="contained" color="warning">
            Button
          </Button>
          <div className="rounded bg-darkgray w-[21.56rem] h-[1.63rem] shrink-0 overflow-hidden flex flex-row py-[0rem] px-[0.63rem] box-border items-center justify-center text-white">
            <b className="relative">장바구니</b>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row py-[2.5rem] px-[0.63rem] items-start justify-start">
        <div className="relative box-border w-[65.38rem] h-[0.06rem] shrink-0 border-t-[1px] border-solid border-darkgray" />
      </div>
      <div className="self-stretch overflow-hidden flex flex-col p-[0.63rem] items-start justify-start gap-[0.63rem] text-[2.5rem]">
        <div className="relative font-light">아래로는 상품 설명</div>
        <Image
          className="relative w-[32rem] h-[32rem] shrink-0 object-cover"
          alt=""
          src={testimg2}
        />
      </div>
      <div className="self-stretch overflow-hidden flex flex-row pt-[2.5rem] px-[0.63rem] pb-[0rem] items-start justify-start">
        <div className="relative box-border w-[65.38rem] h-[0.06rem] shrink-0 border-t-[1px] border-solid border-darkgray" />
      </div>
      <div className="self-stretch overflow-hidden flex flex-row py-[0.44rem] px-[0rem] items-center justify-center text-[1.88rem]">
        <div className="relative">실제 구매자들의 리뷰</div>
      </div>
      <ReviewContainer
        dateRange="23/02/18"
        reviewerName="문종건"
        reviewRating={star1}
        reviewText="정말 개쩌는 종건급 상품이로군요 개추드립니다."
        reviewStarImageUrl={star5}
      />
      <ReviewContainer
        dateRange="23/02/16"
        reviewerName="종건문"
        reviewRating={star1}
        reviewText="ㄹㅇㅋㅋ"
        reviewStarImageUrl={star5}
      />
      <ReviewContainer
        dateRange="23/02/15"
        reviewerName="Andrew MJK"
        reviewRating={star1}
        reviewText="이게 몰종건???"
        reviewStarImageUrl={star5}
      />
      <ReviewContainer
        dateRange="23/02/12"
        reviewerName="나는 문종건"
        reviewRating={star1}
        reviewText="진짜 개오지네"
        reviewStarImageUrl={star5}
      />
    </div>
  );
};

export default ProductViewContainer;