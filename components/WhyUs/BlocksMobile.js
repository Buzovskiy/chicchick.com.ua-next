'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import whyUsData from './whyUsData';
import Image from "next/image";


const BlocksMobile = () => {
   return (
      <>
         <Swiper
            autoHeight={true}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="why-us-swiper"
         >
            {whyUsData.map((items_set, set_i) => (
               <SwiperSlide key={set_i}>
                  {items_set.map((item, i) => (
                     <div key={set_i + i} className="block-wrapper">
                        <Image
                           src={'/img/why-choose-us/' + item.img}
                           width={50}
                           height={50}
                           sizes="100vw"
                           alt="ДИТЯЧІ ПЕРУКАРНІ"
                        />
                        <div className="block-text">{item.text}</div>
                     </div>
                  ))}
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}

export default BlocksMobile;