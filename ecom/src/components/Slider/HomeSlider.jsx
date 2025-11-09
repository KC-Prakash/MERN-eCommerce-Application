import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import 'swiper/css/effect-fade';

const HomeSlider = () => {
  return (
    <>
      <div className="homeSlider py-5">
        <div className="container">
          <Swiper
            loop={true}
            navigation={true}
            effect={"fade"}
            modules={[EffectFade, Autoplay, Navigation]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="sliderHome"
          >
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="../src/assets/Sliders/Slider-1.png"
                  alt="Slider 1"
                  className="w-full"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="../src/assets/Sliders/Slider-2.png"
                  alt="Slider 2"
                  className="w-full"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="../src/assets/Sliders/Slider-3.png"
                  alt="Slider 3"
                  className="w-full"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="../src/assets/Sliders/Slider-4.png"
                  alt="Slider 4"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
