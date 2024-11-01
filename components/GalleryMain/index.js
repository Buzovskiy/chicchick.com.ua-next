import React from 'react';
import './style.css'
import Image from "next/image";
import GalleryMainSwiper from "@/components/GalleryMain/GaleryMainSwiper";
import {notFound} from "next/navigation";


const GalleryMain = async () => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API}/gallery?limit=6`, {cache: 'no-store'});
   const galleryData = await response.json();

   return (
      <div className="container section gallery-main">
         <div className="row">
            <div className="section-heading">Галерея наших робіт</div>
            <div className="gallery-main__wrapper desktop">
               {galleryData.length > 0 &&
                  <>
                     <div className="group-1">
                        <div className="image-container">
                           <Image
                              src={galleryData[0].src}
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
                              src={galleryData[1].src}
                              alt="Замовити візит"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{'width': '100%', 'height': 'auto'}}
                           />
                        </div>
                        <div className="image-container">
                           <Image
                              src={galleryData[2].src}
                              alt="Замовити візит"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{'width': '100%', 'height': 'auto'}}
                           />
                        </div>
                        <div className="image-container">
                           <Image
                              src={galleryData[3].src}
                              alt="Замовити візит"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{'width': '100%', 'height': 'auto'}}
                           />
                        </div>
                        <div className="image-container">
                           <Image
                              src={galleryData[4].src}
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
                              src={galleryData[5].src}
                              alt="Замовити візит"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{'width': '100%', 'height': 'auto'}}
                           />
                        </div>
                        <div className="gallery-main__link">
                           <a href="/gallery">До галереї</a>
                           <Image
                              src="/img/gallery-main/arrow-right.png"
                              alt="Замовити візит"
                              width={0}
                              height={0}
                              sizes="100vw"
                           />
                        </div>
                     </div>
                  </>
               }
            </div>
            <div className="gallery-main__wrapper mobile">
               <GalleryMainSwiper galleryData={galleryData}/>
               <div className="gallery-main__link">
                  <a href="/gallery">До галереї</a>
                  <Image
                     src="/img/gallery-main/arrow-right.png"
                     alt="Замовити візит"
                     width={0}
                     height={0}
                     sizes="100vw"
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default GalleryMain;
