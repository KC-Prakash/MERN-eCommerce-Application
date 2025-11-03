import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";

const ProductSlider = (props) => {
  return (
    <div className="productSlider py-5 pt-10">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={20}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="CatSlider"
      >
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem></ProductItem>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
