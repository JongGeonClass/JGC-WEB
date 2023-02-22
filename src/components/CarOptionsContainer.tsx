import type { NextPage } from "next";

const CarOptionsContainer: NextPage = () => {
  return (
    <div className="self-stretch overflow-hidden flex flex-col p-[0.63rem] items-center justify-start gap-[0.63rem] text-left text-[1.13rem] text-black font-noto-sans-kr">

      <div className="overflow-hidden flex flex-row items-start justify-start gap-[0.63rem]">
        <div className="self-stretch overflow-hidden flex flex-col p-[0.63rem] items-center justify-center">
          <div className="relative font-light">커스텀 차량 이름 :</div>
        </div>

        <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-col p-[0.63rem] items-center justify-center text-gray-400">
          <div className="relative font-light">차량 이름을 입력하세요..</div>
        </div>
      </div>

      <div className="overflow-hidden flex flex-row p-[0.63rem] items-start justify-center gap-[0.63rem] text-[1.25rem]">
        <div className="rounded-lg bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start text-[1.38rem] text-tomato">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <b className="relative">공통옵션</b>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">차체 프레임 :</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light">프레임 옵션 1</div>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">차체 크기 :</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light">크기 옵션 1</div>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">공통 옵션:</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light">공통 옵션 2</div>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg bg-snow shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start text-[1.38rem] text-tomato">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <b className="relative">캠핑용 차량 옵션</b>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">옵션1 :</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light"> 옵션 1</div>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">옵션2 :</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light"> 옵션 2</div>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">옵션3 :</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light"> 옵션 3</div>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">옵션4 :</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light"> 옵션 4</div>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">옵션5 :</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light"> 옵션 5</div>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">옵션6 :</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light"> 옵션 6</div>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">옵션7 :</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light"> 옵션 7</div>
            </div>
          </div>
          <div className="w-[26.75rem] overflow-hidden flex flex-row p-[0.63rem] box-border items-start justify-start mt-[-0.62rem]">
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-start justify-start">
              <div className="relative font-light">옵션8 :</div>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col p-[0.63rem] items-end justify-start">
              <div className="relative font-light"> 옵션 8</div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-base bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-col py-[0.94rem] rounded-md px-[5rem] items-start justify-start text-[1.5rem] text-red-500 border-r-[0.5px] border-solid border-tomato border-b-[0.8px] border-l-[0.5px] border-t-0">
        <div className="relative font-medium text-red-500">커스텀 저장하기</div>
      </div>
      
    </div>
  );
};

export default CarOptionsContainer;
