import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import PhotoUser from "../../assets/img_photo.png";
import PhotoUser2 from "../../assets/img_photo_testi.png";

// import required modules
import { Pagination } from "swiper";
import Testimoni from "../atoms/molecules/Testimoni";

export default function Slider() {
  return (
    <>
      <div
        className="d-none d-lg-block"
        style={{ marginTop: 20, height: "100%" }}
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={70}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Testimoni image={PhotoUser} />
          </SwiperSlide>
          <SwiperSlide>
            <Testimoni image={PhotoUser2} />
          </SwiperSlide>
          <SwiperSlide>
            <Testimoni image={PhotoUser} />
          </SwiperSlide>
          <SwiperSlide>
            <Testimoni image={PhotoUser2} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className=" d-lg-none container">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Testimoni image={PhotoUser} />
          </SwiperSlide>
          <SwiperSlide>
            <Testimoni image={PhotoUser2} />
          </SwiperSlide>
          <SwiperSlide>
            <Testimoni image={PhotoUser} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
