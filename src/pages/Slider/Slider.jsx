import React from 'react';
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import cod from '../../../public/call of duty.jpg'
import Doom from '../../../public/Doom.jpg'
import south from'../../../public/south of midnight.jpg'
import arrow from'../../../public/arrow_forward_ios_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import arrow1 from'../../../public/arrow_forward_ios_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg'


function Slider() {
    return (
        <div className='w-full h-[85%] '>
                <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper  relative"
      >
        <SwiperSlide>
        <div className='absolute w-[450px] h-[300px] flex flex-col justify-center items-start gap-5 fig1'>
            <span className='newse font-bold'>NEW SEASON</span>
            <h2 className='text-justify text-4xl font-bold'>Call of Duty: Black Ops 6-Season 02</h2>
            <h3 className='text-justify text-2xl '>Play With Game Pass and upgrade to Black Cell for exclusive content</h3>
            <div className='flex  gap-10'>
        <button className='h-[2rem] text-[15px] font-bold flex justify-center items-center btn1 '><p>JOIN GAME PASS</p> <span className='size-6 arrow'><img src={arrow} alt="" /></span> </button>
            <button className='btn2 h-[2rem] text-[17px] font-bold flex justify-center items-center'><p>BUY IT NOW </p><span className='size-6 arrow'><img src={arrow1} alt="" /></span></button>
            </div>
        </div>
        <img src={cod} alt="" />
       
        </SwiperSlide>
        <SwiperSlide>
        <div className='absolute w-[450px] h-[300px] flex flex-col justify-center items-start gap-5 fig1'>
            <span className='newse font-bold'>COMING SOON TO GAME PASS</span>
            <h2 className='text-justify text-4xl font-bold'>DOOM: The Dark Ages</h2>
            <h3 className='text-justify text-2xl '>Become the Slayer in a medival war against hell</h3>
            <div className='flex  gap-10'>
        <button className='h-[2rem] text-[15px] font-bold flex justify-center items-center btn1 '><p>RESERVE</p> <span className='size-6 arrow'><img src={arrow} alt="" /></span> </button>
            <button className='btn2 h-[2rem] text-[17px] font-bold flex justify-center items-center'><p>JOIN GAME PASS </p><span className='size-6 arrow'><img src={arrow1} alt="" /></span></button>
            </div>
        </div>
            <img src={Doom} alt="" /></SwiperSlide>
        <SwiperSlide>
        <div className='absolute w-[450px] h-[300px] flex flex-col justify-center items-start gap-5 fig1'>
            <span className='newse font-bold text-black'>PLAY FROM DAY ONE WITH GAME PASS</span>
            <h2 className='text-justify text-4xl font-bold text-black'>South of midnight</h2>
            <h3 className='text-justify text-2xl text-black'>Unravel the past</h3>
            <div className='flex  gap-10'>
        <button className='h-[2rem] text-[15px] font-bold flex justify-center items-center btn1  '><p>RESERVE</p> <span className='size-6 arrow'><img src={arrow} alt="" /></span> </button>
            <button className=' btn3 h-[2rem] text-[17px] font-bold flex justify-center items-center'><p className=' text-black'>JOIN GAME PASS </p><span className='size-6 arrow'><img src={arrow} alt="" /></span></button>
            </div>
        </div>
            <img src={south} alt="" /></SwiperSlide>
       
      </Swiper>
        </div>
    );
}

export default Slider;