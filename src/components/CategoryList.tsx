"use client";

const CategoryList = ({ title }: { title: string }) => {
  return (
    <div className="overflow-hidden flex flex-col py-[1.94rem] pr-[2.5rem] pl-[4.06rem] items-start justify-start gap-[1.25rem]">
      <div className="relative font-medium">{title}</div>
      <div className="overflow-hidden flex flex-col py-[0.25rem] px-[0.44rem] items-start justify-center gap-[0.5rem] text-[0.88rem]">
        <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="relative font-light">항목1</div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
            <div className="relative font-light">{`>`}</div>
          </div>
        </div>
        <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem] cursor-pointer">
          <div className="relative font-light">항목2</div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
            <div className="relative font-light">{`>`}</div>
          </div>
        </div>
        <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="relative font-light">항목3</div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
            <div className="relative font-light">{`>`}</div>
          </div>
        </div>
        <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="relative font-light">항목4</div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
            <div className="relative font-light">{`>`}</div>
          </div>
        </div>
        <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="relative font-light">항목5</div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
            <div className="relative font-light">{`>`}</div>
          </div>
        </div>
        <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="relative font-light">항목6</div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
            <div className="relative font-light">{`>`}</div>
          </div>
        </div>
        <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="relative font-light">항목7</div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
            <div className="relative font-light">{`>`}</div>
          </div>
        </div>
        <div className="w-[6.88rem] overflow-hidden flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="relative font-light">항목8</div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-center">
            <div className="relative font-light">{`>`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
