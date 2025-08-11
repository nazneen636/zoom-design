import ProductCard from "../common/ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

// import required modules
import { Navigation, Grid } from "swiper/modules";
import { MdPlayArrow } from "react-icons/md";
import { useGetAllProductQuery } from "../../Features/api/ProductApi";
import ProductCardSkeleton from "../common/ProductSkeleton";
const Popular = () => {
  const { data, isLoading } = useGetAllProductQuery();
  console.log(data);
  if (isLoading) {
    return (
      <div className="container">
        <h2 className="mb-12 font-bold text-2xl text-[#0F1137]">
          Most Popular Items
        </h2>
        <div className="grid grid-cols-4 gap-6 ">
          {[...Array(4)].map((_) => (
            <ProductCardSkeleton />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="container mb-[100px]!">
      <div className="relative">
        <h2 className="mb-12 font-bold text-2xl text-[#0F1137]">
          Most Popular Items
        </h2>
        <Swiper
          spaceBetween={30}
          grid={{
            rows: 2,
            fill: "row",
          }}
          navigation={{ prevEl: ".prev", nextEl: ".next" }}
          modules={[Navigation, Grid]}
          slidesPerView={4}
          // style={{ paddingRight: 0 }}
        >
          {" "}
          {data?.products.map((product) => (
            <SwiperSlide>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* arrow */}

        <div className="flex gap-0 absolute right-0 top-4">
          <div
            className={`prev text-[#A1A6BF] hover:text-[#0F1137] text-2xl cursor-pointer transition-all rotate-180`}
          >
            <span>
              <MdPlayArrow />
            </span>
          </div>
          <div
            className={`next text-[#A1A6BF] hover:text-[#0F1137] text-2xl cursor-pointer transition-all`}
          >
            <span>
              <MdPlayArrow />
            </span>
          </div>
        </div>

        {/* arrow */}
      </div>
    </div>
  );
};

export default Popular;
