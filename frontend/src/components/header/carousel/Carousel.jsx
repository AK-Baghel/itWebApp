import React from 'react'
import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import "swiper/css/effect-fade";


function Carousel() {

    const data = [
        "https://img.global.news.samsung.com/ca/wp-content/uploads/2021/07/73_Professional-Service_Note20_VDI-workspace.jpg",
        "https://c1.wallpaperflare.com/preview/966/256/882/layout-man-ux-website.jpg",
        "https://e1.pxfuel.com/desktop-wallpaper/626/499/desktop-wallpaper-software-web-development.jpg"
    ];

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            effect={"fade"}
            speed={1500}
            autoplay={{ delay: 3000 }}
            pagination={{
                clickable: true,
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
            className="mySwiper"
        >

            {
                data.map((item, id) => {
                    return (
                        <SwiperSlide key={id}><img className='new' src={item} alt="" /></SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default Carousel