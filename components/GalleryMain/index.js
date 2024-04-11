import React from 'react';
import './style.css'


const GalleryMain = () => {
   return (
      <div className="container gallery-main">
         <div className="row py-5">
            <div className="section-heading">Галерея наших робіт</div>
            <div className="gallery-main__wrapper">
               <div className="group-1">
                  <div className="image-container"><img src="/img/gallery-main/photo-1.png" alt=""/></div>
               </div>
               <div className="group-2">
                  <div className="image-container"><img src="/img/gallery-main/photo-2.png" alt=""/></div>
                  <div className="image-container"><img src="/img/gallery-main/photo-3.png" alt=""/></div>
                  <div className="image-container"><img src="/img/gallery-main/photo-4.png" alt=""/></div>
                  <div className="image-container"><img src="/img/gallery-main/photo-5.png" alt=""/></div>
               </div>
               <div className="group-3">
                  <div className="image-container"><img src="/img/gallery-main/photo-6.png" alt=""/></div>
                  <div className="gallery-main__link">
                     <a href="#">До галереї</a>
                     <img src="/img/gallery-main/arrow-right.png" alt=""/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default GalleryMain;
