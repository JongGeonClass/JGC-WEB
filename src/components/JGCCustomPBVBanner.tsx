import Image from "next/image";

import background from "public/background-banner-temp.png";

const JGCCustomPBVBanner = () => {
  return (
    <div className="self-stretch content-center flex relative h-[20rem] shrink-0 overflow-hidden text-[2.5rem] text-white">
      <Image
        className="absolute top-[calc(50%_-_160px)] left-[calc(50%_-_960px)] w-[160rem] h-[20rem] object-cover"
        alt=""
        src={background}
      />
      <div className="absolute top-[8.19rem] left-[46.81rem] font-light">
        맞춤형 PBV 커스터마이징 
      </div>
    </div>
  );
}

export default JGCCustomPBVBanner;