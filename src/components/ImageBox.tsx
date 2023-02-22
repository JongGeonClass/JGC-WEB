"use client";
import Image, { StaticImageData } from "next/image";
import { PBVData } from "@/types";
import Link from "next/link";

const ImageBox = ({
  src,
  text,
  setPbvType,
}: {
  src: StaticImageData;
  text: string;
  setPbvType: (value: any) => void;
}) => {
  return (
    <Link
      className="[text-decoration:none]"
      href="/pbv/option-select"
      onClick={() => {
        setPbvType((state: PBVData) => {
          return { ...state, purpose: text };
        });
      }}
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] overflow-hidden flex flex-col items-center justify-center gap-[0.94rem]"
        autoFocus
      >
        <div className="overflow-hidden flex flex-col items-center justify-center gap-[0.94rem]">
          <Image
            className="relative w-[11.99rem] h-[auto] shrink-0 object-cover opacity-60"
            alt=""
            src={src}
          />
          <div className="relative text-[1.25rem] font-noto-sans-kr text-black text-left">
            {text}
          </div>
        </div>
      </button>
    </Link>
  );
};

export default ImageBox;
