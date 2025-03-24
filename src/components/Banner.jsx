import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import image from "../assets/snake-game-loading-screen.webp"
import video from "../assets/video.mp4";

function Banner() {
  return (
    <div className="w-[960px] mx-auto">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={image} alt="Snake Head" className="w-full h-[150px]" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
