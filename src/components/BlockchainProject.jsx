import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectData } from "./Data";

import "swiper/css";
import "swiper/css/effect-coverflow";

import "../App.css";
import { EffectCoverflow, Pagination } from "swiper";

import ChainCard from "./ChainCard";

const BlockchainProject = () => {
  return (
    <div className="container px-6 mt-4" id="projects">
      <h2 className="title">Blockchain Projects</h2>
      <div className="relative w-full py-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {ProjectData.map((data) => (
            <SwiperSlide key={data.id}>
              <ChainCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlockchainProject;
