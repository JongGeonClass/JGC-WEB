"use client";

import type { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  Select,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import ReviewContainer from "@/components/ReviewContainer";
import testimg from "public/testimg-1.png";
import line1 from "public/svg/line-1.svg";
import star1 from "public/svg/star-1.svg";
import star5 from "public/svg/star-5.svg";
import group1 from "public/svg/group-1.svg";
import group11 from "public/svg/group-11.svg";
import testimg2 from "public/JGC-image.png";
import { useProduct } from "@/hooks/useProduct";
import { useReviews } from "@/hooks/useReview";
import { isValidUrl, numberWithCommas } from "@/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { addCart } from "@/hooks/useCart";
import { axiosInstance } from "@/utils/axios";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ProductViewContainer: NextPage<{
  id: string;
  category?: string;
}> = ({ id, category }: { id: string; category?: string }) => {
  const router = useRouter();
  const {
    data: productData,
    error: productError,
    isLoading: productIsLoading,
    isFetchedAfterMount: productIsFetchedAfterMount,
  } = useProduct(id);
  const {
    data: reviewData,
    error: reviewError,
    isLoading: reviewIsLoading,
  } = useReviews(id);

  const [productImage, setProductImage] = useState<StaticImageData | string>(
    testimg
  );

  const [productCount, setProductCount] = useState<number>(1);
  const [productDescription, setProductDescription] = useState(
    `### 상품 설명을 불러오고 있습니다..`
  );

  const purchaseProduct = () => {
    if (productCount > 0) {
      alert("구매가 완료되었습니다.");
      addCart({ productId: Number.parseInt(id), amount: productCount });
      router.push("/cart");
    } else {
      alert("구매할 수 없는 수량입니다.");
    }
  };
  if (productData && isValidUrl(productData.description_s3)) {
    axiosInstance
      .get(productData.description_s3)
      .then((res) => setProductDescription(res.data))
      .catch((err) => console.log(err));
  }

  if (reviewIsLoading || productIsLoading) return <CircularProgress />;
  if (reviewError || productError)
    return <Alert severity="error">에러가 발생했습니다.</Alert>;

  return (
    <div className="flex-1 flex flex-col pt-[0rem] pb-[0.63rem] items-start justify-center gap-[0.63rem] text-center text-[1.25rem] text-black font-noto-sans-kr">
      <div className="self-stretch overflow-hidden flex flex-row p-[0.63rem] items-start justify-center">
        <div className="relative box-border w-full h-[0.06rem] shrink-0 border-t-[1px] border-solid border-darkgray" />
      </div>
      <div className="overflow-hidden flex flex-col p-[0.63rem] items-center justify-center text-darkgray">
        <div className="relative font-light">{`카테고리명 > ${category}`}</div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center gap-[1.25rem] text-[0.75rem]">
        <Image
          className="relative w-[32rem] h-[32rem] shrink-0 object-cover"
          alt=""
          width={187.5}
          height={187.5}
          src={productData ? productData.title_image_s3 : productImage}
        />
        <div className="self-stretch overflow-hidden flex flex-col py-[0.63rem] px-[1.25rem] items-center justify-center gap-[0.63rem]">
          <div className="relative text-[2rem] text-left">
            {productData?.name}
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center gap-[1.25rem] text-left text-[0.94rem]">
            <div className="relative font-light">{productData?.brand_name}</div>
          </div>
          <div className="w-[22.88rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-center justify-start gap-[0.63rem] text-[0.63rem]">
            <div className="overflow-hidden flex flex-col py-[0rem] px-[0.88rem] items-start justify-start">
              <div className="relative">{reviewData?.length}개의 리뷰</div>
              <div className="relative text-[0.94rem] text-tomato-100">
                <span className="font-light">평균 별점</span>
                <span>{` `}</span>
                <span className="font-medium">
                  {reviewData?.length &&
                    (
                      reviewData?.reduce((prev, now) => {
                        return prev + now.score;
                      }, 0) / reviewData?.length
                    ).toFixed(1)}
                </span>
              </div>
            </div>
            <b className="flex-1 relative text-[1.88rem] text-right">
              {productData && numberWithCommas(productData.price)}원
            </b>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-center gap-[1.25rem] text-left text-[0.94rem]">
            <div className="relative font-light">배송정보</div>
            <Image
              className="relative w-[0.32rem] h-[0.98rem] shrink-0"
              alt=""
              src={line1}
            />
            <div className="relative font-light">{`배송비 3000 원 `}</div>
          </div>
          <div className="overflow-hidden flex flex-col p-[0.63rem] items-center justify-center gap-[0.31rem]">
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
                type="number"
                label="N개"
                placeholder="N개"
                size="medium"
                margin="none"
                onChange={(e) => {
                  if (Number.parseInt(e.target.value) <= 0) setProductCount(1);
                  else setProductCount(Number.parseInt(e.target.value));
                }}
                value={productCount}
                required
              />
            </div>
          </div>
          <div className="w-[22.81rem] h-[2.38rem] shrink-0 overflow-hidden flex flex-row py-[0rem] px-[0.63rem] box-border items-center justify-start gap-[0.63rem] text-tomato">
            <div className="flex-1 overflow-hidden flex flex-col py-[0rem] px-[0.63rem] items-start justify-start">
              <b className="relative inline-block w-[2.13rem] h-[1.13rem] shrink-0">
                총 {productCount}개
              </b>
            </div>
            <div className="overflow-hidden flex flex-col py-[0rem] px-[0.63rem] items-start justify-start text-[1.5rem]">
              <b className="relative">
                {productData
                  ? numberWithCommas(productData?.price * productCount)
                  : 0}
                원
              </b>
            </div>
          </div>
          <Button
            sx={{ width: 345 }}
            variant="contained"
            color="warning"
            onClick={() => purchaseProduct()}
          >
            구매하기
          </Button>
          <Link
            className="rounded bg-darkgray w-[21.56rem] h-[1.63rem] shrink-0 overflow-hidden flex flex-row py-[0rem] px-[0.63rem] box-border items-center justify-center text-white"
            href="/cart"
          >
            <b className="relative">장바구니</b>
          </Link>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row py-[2.5rem] px-[0.63rem] items-start justify-start">
        <div className="relative box-border w-full h-[0.06rem] shrink-0 border-t-[1px] border-solid border-darkgray" />
      </div>
      <div className="self-stretch overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem] text-[2.5rem]">
        <ReactMarkdown>{productDescription}</ReactMarkdown>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row pt-[2.5rem] px-[0.63rem] pb-[0rem] items-start justify-start">
        <div className="relative box-border w-full h-[0.06rem] shrink-0 border-t-[1px] border-solid border-darkgray" />
      </div>
      <div className="self-stretch overflow-hidden flex flex-row py-[0.44rem] px-[0rem] items-center justify-center text-[1.88rem]">
        <div className="relative">실제 구매자들의 리뷰</div>
      </div>
      {reviewData?.map((review, idx) => {
        return (
          <ReviewContainer
            dateRange={review.created_time}
            reviewerName={review.nickname}
            reviewRating={review.score}
            reviewText={review.content}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default ProductViewContainer;
