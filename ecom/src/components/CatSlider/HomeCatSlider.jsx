import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <>
      <div className='HomeCatSlider py-5'>
        <div className="container">
          <Swiper
            slidesPerView={6}
            spaceBetween={20}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="CatSlider"
          >
            <SwiperSlide>
              <Link to={'/'}>
                <div className="item p-3 bg-white text-center flex items-center justify-center flex-col">
                  <img src="../src/assets/CatSliders/cat1.png" className='w-[80px]' />
                  <h3 className='p-2 text-[16px] font-bold link transition'>Casuals</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/'}>
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img src="../src/assets/CatSliders/cat2.png" className='w-[80px]' />
                  <h3 className='p-2 text-[16px] font-bold link transition'>Denims</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/'}>
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img src="../src/assets/CatSliders/cat3.png" className='w-[80px]' />
                  <h3 className='p-2 text-[16px] font-bold link transition'>Cargos</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/'}>
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img src="../src/assets/CatSliders/cat4.png" className='w-[80px]' />
                  <h3 className='p-2 text-[16px] font-bold link transition'>Floral</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/'}>
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img src="../src/assets/CatSliders/cat5.png" className='w-[80px]' />
                  <h3 className='p-2 text-[16px] font-bold link transition'>Jacfort</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/'}>
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img src="../src/assets/CatSliders/cat6.png" className='w-[80px]' />
                  <h3 className='p-2 text-[16px] font-bold link transition'>Falls</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/'}>
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img src="../src/assets/CatSliders/cat7.png" className='w-[80px]' />
                  <h3 className='p-2 text-[16px] font-bold link transition'>Crop Tops</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/'}>
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img src="../src/assets/CatSliders/cat8.png" className='w-[80px]' />
                  <h3 className='p-2 text-[16px] font-bold link transition'>Crop</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/'}>
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img src="../src/assets/CatSliders/cat9.png" className='w-[80px]' />
                  <h3 className='p-2 text-[16px] font-bold link transition'>Bells</h3>
                </div>
              </Link>
            </SwiperSlide><SwiperSlide>
              <Link to={'/'}>
                <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                  <img src="../src/assets/CatSliders/cat10.png" className='w-[80px]' />
                  <h3 className='p-2 text-[16px] font-bold link transition'>Shorts</h3>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default HomeCatSlider