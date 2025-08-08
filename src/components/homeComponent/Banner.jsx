import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div>
      {" "}
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[...Array(5)].map((_) => (
          <SwiperSlide>
            <div className="w-full bg-gray-100">
              <img src={banner} alt="banner" className="object-cover w-full" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
