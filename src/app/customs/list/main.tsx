import Image from 'next/image';

import CarOptionsContainer from '@/components/CarOptionsContainer';
import cancel from 'public/svg/cancel.svg';

const CustomBox = ({ carName }: { carName: string }) => {
  return (
    <div className="flex flex-grow-0 order-1 flex-col align-center gap-2">
      <div className="flex flex-row w-auto h-14 items-center justify-center gap-3 align-center px-2.5 pr-5 bg-gray-100 [backdrop-filter:blur(80px)] rounded-2xl text-[1.13rem] text-black font-noto-sans-kr font-medium">
        {carName}
        <Image
          className="z-10"
          alt=""
          src={cancel}
        />
      </div>
      <CarOptionsContainer />
    </div>
  );
};

const Main = () => {
  return (
    <div className="absolute top-[0rem] left-[0rem] w-[120rem] h-[56.88rem] overflow-hidden flex flex-col py-[0rem] px-[25rem] box-border items-center justify-center">
      <div className="self-stretch flex-1 bg-gray-200 [backdrop-filter:blur(80px)] overflow-hidden flex flex-col py-[0.63rem] px-[2.5rem] justify-start gap-[0.63rem] text-left text-[0.75rem] text-black font-noto-sans-kr">
        <CustomBox carName="개지리는 종건급 차량"/>
      </div>
    </div>
  );
};

export default Main;