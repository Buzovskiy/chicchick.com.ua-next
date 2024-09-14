'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import Image from "next/image";
import React from "react";


const GalleryMainSwiper = ({galleryData}) => {
   return (
      <Swiper
         slidesPerView={'auto'}
         spaceBetween={20}
         pagination={{
            clickable: true,
         }}
         modules={[Pagination]}
      >
         {galleryData.map((photo, i) => (
            <SwiperSlide key={i}>
               <Image
                  src={photo.src}
                  alt="Замовити візит"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{'width': '100%', 'height': '100%'}}
               />
            </SwiperSlide>
         ))}
      </Swiper>
   )
}

export default GalleryMainSwiper