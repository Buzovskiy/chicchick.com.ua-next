'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import React from 'react';
import './style.css'
import Image from "next/image";


const GalleryMain = () => {
   return (
      <div className="container section gallery-main">
         <div className="row">
            <div className="section-heading">Галерея наших робіт</div>
            <div className="gallery-main__wrapper desktop">
               <div className="group-1">
                  <div className="image-container">
                     <Image
                        src="/img/gallery-main/photo-1.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': 'auto'}}
                     />
                  </div>
               </div>
               <div className="group-2">
                  <div className="image-container">
                     <Image
                        src="/img/gallery-main/photo-2.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': 'auto'}}
                     />
                  </div>
                  <div className="image-container">
                     <Image
                        src="/img/gallery-main/photo-3.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': 'auto'}}
                     />
                  </div>
                  <div className="image-container">
                     <Image
                        src="/img/gallery-main/photo-4.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': 'auto'}}
                     />
                  </div>
                  <div className="image-container">
                     <Image
                        src="/img/gallery-main/photo-5.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': 'auto'}}
                     />
                  </div>
               </div>
               <div className="group-3">
                  <div className="image-container">
                     <Image
                        src="/img/gallery-main/photo-6.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': 'auto'}}
                     />
                  </div>
                  <div className="gallery-main__link">
                     <a href="#">До галереї</a>
                     <Image
                        src="/img/gallery-main/arrow-right.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        // style={{'width': '100%', 'height': 'auto'}}
                     />
                  </div>
               </div>
            </div>


            <div className="gallery-main__wrapper mobile">
               <Swiper
                  slidesPerView={'auto'}
                  spaceBetween={20}
                  pagination={{
                     clickable: true,
                  }}
                  modules={[Pagination]}
               >
                  <SwiperSlide>
                     <Image
                        src="/img/gallery-main/photo-1.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': '100%'}}
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <Image
                        src="/img/gallery-main/photo-2.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': '100%'}}
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <Image
                        src="/img/gallery-main/photo-3.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': '100%'}}
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <Image
                        src="/img/gallery-main/photo-4.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': '100%'}}
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <Image
                        src="/img/gallery-main/photo-5.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': '100%'}}
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <Image
                        src="/img/gallery-main/photo-6.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': '100%'}}
                     />
                  </SwiperSlide>
               </Swiper>
               <div className="gallery-main__link">
                  <a href="#">До галереї</a>
                  <Image
                     src="/img/gallery-main/arrow-right.png"
                     alt="Замовити візит"
                     width={0}
                     height={0}
                     sizes="100vw"
                     // style={{'width': '100%', 'height': 'auto'}}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default GalleryMain;
