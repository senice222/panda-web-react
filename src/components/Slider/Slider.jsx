import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Slider.scss';

export const Slider = () => {
    return (
        <div style={{overflowX: "visible"}}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Артем!</SwiperSlide>
                <SwiperSlide>П</SwiperSlide>
                <SwiperSlide>И</SwiperSlide>
                <SwiperSlide>Д</SwiperSlide>
                <SwiperSlide>О</SwiperSlide>
                <SwiperSlide>Р</SwiperSlide>
            </Swiper>
        </div>
    )
}