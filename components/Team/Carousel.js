'use client';
import {useState, useEffect} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules';
import teamData from "@/components/Team/teamData";
import Image from "next/image";
import {getStaff} from "@/api/StaffAPI";
import styles from "./team.module.css";


const Carousel = () => {
   const [items, setItems] = useState([]);

   useEffect(() => {
      const fetchItems = async () => {
         const response = await getStaff();
         const items = await response.json();
         setItems(items);
      }
      fetchItems().catch(console.error);
   }, []);

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
            {items.map((item, i) => (
               <SwiperSlide key={i}>
                  <div className="item">
                     <div className={styles.photo}>
                        <Image
                           src={item.imageUrl}
                           width={0}
                           height={0}
                           sizes="100vw"
                           alt="ДИТЯЧІ ПЕРУКАРНІ"
                        />
                     </div>
                     <div className={styles.name}>{item.name}</div>
                     <div className={styles.description}>{item.description}</div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}

export default Carousel;