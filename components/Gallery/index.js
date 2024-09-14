'use client';
import {useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from 'next/image';
import styles from "./Gallery.module.css";


export default function App({galleryData}) {
   const [index, setIndex] = useState(-1);

   const handleClick = (e) => {
      const index = e.target.dataset.index;
      setIndex(+index);
   };

   return (
      <>
         {galleryData.map(({id, src}, i) => (
            <div key={id} className='col-lg-3 col-md-4 col-sm-6 col-6'>
               <div className={styles['image-wrapper']}>
                  <Image
                     src={src}
                     alt='ChicChick'
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                     fill={true}
                     style={{objectFit: 'cover'}}
                     data-index={i}
                     onClick={handleClick}
                  />
               </div>
            </div>
         ))}
         <Lightbox
            slides={galleryData}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
         />
      </>
   );
}