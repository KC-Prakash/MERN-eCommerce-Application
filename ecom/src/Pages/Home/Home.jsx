import React from 'react'
import HomeSlider from '../../components/Slider/HomeSlider'
import HomeCatSlider from '../../components/CatSlider/HomeCatSlider'
import { TbTruckDelivery } from "react-icons/tb";
import AdsSlider from '../../components/AdsSlider/AdsSlider';

const Home = () => {
  return (
    <>
      <HomeSlider></HomeSlider>
      <HomeCatSlider></HomeCatSlider>

      <section className="py-10 bg-white">
        <div className="container">
          <div className="FreeShipping w-full py-2 mb-5 p-8 border flex items-center justify-between rounded-xl">
            <div className="col1 flex items-center gap-4">
              <TbTruckDelivery className='text-[50px]'></TbTruckDelivery>
              <span className='text-[25px] font-[600]'>FREE SHIPPING</span>
            </div>
            <div className="col2 flex items-center gap-4">
              <p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and over 399/-</p>
            </div>
            <div className="col3 flex items-center gap-4">
              <p className='text-[30px] font-bold'>ONLY 399/-</p>
            </div>
          </div>

          <AdsSlider items={4}></AdsSlider>

        </div>
      </section>
    </>
  )
}

export default Home