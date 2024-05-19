'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';
import teamData from "@/components/Team/teamData";
import Image from "next/image";
import styles from "./team.module.css";


const Carousel = () => {
   return (
      <>
         <Swiper
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles.swiper}
            slidesPerView={1}
            breakpoints={{
               400: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
               },
               1400: {
                  slidesPerView: 4,
                  spaceBetween: 30,
               },
            }}
         >
            {teamData.map((item, i) => (
               <SwiperSlide key={i}>
                  <div className="item">
                     <div className={styles.photo}>
                        <Image
                           src={'/img/team/' + item.img}
                           width={0}
                           height={0}
                           sizes="100vw"
                           alt="ДИТЯЧІ ПЕРУКАРНІ"
                        />
                     </div>
                     <div className={styles.name}>{item.name}</div>
                     <div className={styles.description}>{item.text}</div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}

export default Carousel;