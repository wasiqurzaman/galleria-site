"use client";

import Image from "next/image";
import { ImageData } from "../page";
import Link from "next/link";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import SilderButtons from "./SilderButtons";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

type Props = {
  images: ImageData[];
  initial: number | undefined;
};

export default function Sildes({ images, initial }: Props) {
  const [initialSilde, setInitialSlide] = useState(initial || 0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setcurrentImage] = useState(images[currentIndex || 0]);
  const [isViewing, setIsViewing] = useState(false);

  function handleSlideChange(swiper) {
    const current = swiper.activeIndex;
    setCurrentIndex(current);
    setcurrentImage(images[current]);
  }

  return (
    <div className="container mx-auto xl:px-0 flex flex-col gap-[100px]">
      <Swiper
        pagination={{
          type: "progressbar",
          el: ".custom-pagination",
        }}
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        className="w-full relative flex flex-col"
        initialSlide={initialSilde}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="pt-[100px] flex justify-between gap-[30px]">
              <div className="flex items-start relative">
                <div className="w-[420px] h-[560px] relative">
                  <Image
                    src={image.images.hero.large}
                    alt=""
                    width={300}
                    height={500}
                    className="w-full h-full"
                  />
                  <button
                    className="bg-black/50 px-[16px] py-[14px] flex items-center gap-[14px] absolute bottom-4 left-4"
                    onClick={() => setIsViewing(true)}
                  >
                    <Image
                      src="/assets/shared/icon-view-image.svg"
                      alt="view image icon"
                      width={15}
                      height={15}
                    />
                    <p className="font-primary text-white text-[10px] font-bold tracking-[2.14px] uppercase">
                      View Image
                    </p>
                  </button>
                </div>
                <div className="flex flex-col gap-[150px] justify-between items-center max-w-[345px]  absolute right-0 translate-x-[75%] h-[620px]">
                  <div className="flex flex-col gap-6 px-[45px] pb-[45px]  w-full bg-white">
                    <h1 className="heading1 ">{image.name}</h1>
                    <p>{image.artist.name}</p>
                  </div>
                  <div>
                    <Image
                      src={image.artist.image}
                      alt={`image of ${image.artist.name}`}
                      width={128}
                      height={128}
                      className="w-[128px] h-[128px]"
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-[40%] relative">
                <p className="display text-end">{image.year}</p>
                <div className="flex flex-col gap-[120px] w-[75%] absolute top-[115px]">
                  <p className="text-justify ">{image.description}</p>
                  <Link
                    href={image.source}
                    className="link2 uppercase underline"
                    target="_blank"
                  >
                    Go to source
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* custom pagination */}
        <div
          className="custom-pagination"
          style={{
            position: "relative",
            top: "200px",
            bottom: "0",
            left: "0",
            right: "0",
            height: "3px",
            background: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <span
            className="swiper-pagination-progressbar-fill"
            style={{ backgroundColor: "#ff2912", color: "red" }}
          ></span>
        </div>
        {/* slider buttons */}
        <SilderButtons
          imageName={currentImage.name}
          artist={currentImage.artist.name}
        />
      </Swiper>
      {isViewing && (
        <div className="w-screen screen fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center z-40">
          {/* overlay */}
          <div
            className="w-screen h-full bg-black/80 fixed top-0 left-0 bottom-0 right-0"
            onClick={() => setIsViewing(false)}
          ></div>
          {/* image */}
          <div className="w-auto h-auto top-0 left-0 bottom-0 right-0 flex flex-col gap-[20px] items-center justify-center z-50">
            <div className="flex justify-end w-full">
              <button className="" onClick={() => setIsViewing(false)}>
                Close
              </button>
            </div>
            <Image
              src={currentImage.images.gallery}
              alt=""
              width={800}
              height={800}
              className="h-[770px] w-auto"
              quality={100}
            />
          </div>
        </div>
      )}
    </div>
  );
}
