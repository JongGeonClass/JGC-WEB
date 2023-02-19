"use client";
import { useCart } from "@/hooks/useCart";
import { CartItem } from "@/types";
import { Alert, CircularProgress } from "@mui/material";
import ProductContainer from "./ProductContainer";

const dummyItem: CartItem = {
  id: 1,
  brand_id: 1,
  brand_name: "test",
  categories: [{ id: 1, name: "test" }],
  product_name: "test",
  product_price: 10000,
  amount: 1,
  title_image_s3: "test",
  created_time: "test",
};
const CartList = () => {
  const cartQuery = useCart();

  const { data, isLoading, isError } = cartQuery;
  const dummyItems = Array.from({ length: 10 }, (_, i) => ({
    ...dummyItem,
    id: i,
    product_name: `test ${i}`,
    product_price: Math.floor(Math.random() * 100000),
    amount: Math.floor(Math.random() * 10),
  }));

  if (isLoading) {
    return <CircularProgress color="inherit" />;
  } else if (isError) {
    return <Alert severity="error">장바구니를 불러올 수 없습니다.</Alert>;
  } else {
    if (data.length === 0)
      return <Alert severity="info">장바구니가 비어있습니다.</Alert>;
    return (
      <>
        {data.map((item, idx) => (
          <ProductContainer key={idx} {...item} />
        ))}
        <div className="self-stretch flex-1 overflow-hidden flex flex-col py-[0.63rem] px-[0rem] items-center justify-end gap-[0.63rem] text-[1.56rem] text-white">
          <div className="rounded-base bg-tomato-200 shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] w-[20rem] h-[4.06rem] shrink-0 overflow-hidden flex flex-row p-[0.63rem] box-border items-center justify-center">
            <b className="relative">구매하기</b>
          </div>
          <div className="self-stretch rounded-large bg-gray-100 overflow-hidden flex flex-row py-[0.63rem] px-[1.25rem] items-start justify-center text-[1.13rem] text-black">
            <div className="flex-1 overflow-hidden flex flex-row py-[0rem] px-[2.5rem] items-center justify-end">
              <div className="relative">
                <span>
                  <span>총 상품가격 :</span>
                </span>
                <span className="font-medium text-tomato-100">
                  <span>{` `}</span>
                  <span>
                    {data.reduce((prev, now) => {
                      return prev + now.product_price * now.amount;
                    }, 0)}
                    원
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <ProductContainer product_name="개지리는 종건급 상품 2" />
      <ProductContainer product_name="개지리는 종건급 상품 3" />
    </>
  );
};

export default CartList;
