import React from 'react'
import "./style.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import TopCarouselData from "../topCarouselData/TopCarouselData"

function TopCarousel() {

    const data = [
        `Discover Digital Excellence`,
        "Got a Project in Mind",
        "Transform Your Business Today",
    ];

    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}

            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay]}
            className="mySwiper"
        >

            {
                data.map((item, id) => {
                    return (
                        <SwiperSlide key={id}><TopCarouselData data={item} /></SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default TopCarousel