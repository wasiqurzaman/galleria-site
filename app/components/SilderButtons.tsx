"use client";

import Image from "next/image";
import { useSwiper } from "swiper/react";

type Props = {
  imageName: string;
  artist: string;
};

export default function SilderButtons({ imageName, artist }: Props) {
  const swiper = useSwiper();
  return (
    <div className="w-full bg-slate-300/80 flex gap-5 items-center px-10 mt-[200px] py-[25px] justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="heading3">{imageName}</h3>
        <p className="subhead2 font-regualar">{artist}</p>
      </div>
      <div className="flex items-center gap-10">
        <button onClick={() => swiper.slidePrev()}>
          <Image
            src="/assets/shared/icon-back-button.svg"
            alt="prev slide button icon"
            width={25}
            height={25}
            className="w-[25px] h-[25px]"
          />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <Image
            src="/assets/shared/icon-next-button.svg"
            alt="prev slide button icon"
            width={25}
            height={25}
            className="w-[25px] h-[25px]"
          />
        </button>
      </div>
    </div>
  );
}
