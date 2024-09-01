'use client';
import './style.css'
import Image from "next/image";
import BookCallModal from "@/components/BookCall/modal";
import {useState} from "react";


const FirstHaircut = () => {
   const [show, setShow] = useState(false);
   const [showSuccess, setShowSuccess] = useState(false);

   return (
      <>
         <div className="container services-list first-haircut">
            <div className="row py-4 g-lg-5">
               <div className="col-lg-4 order-2 order-lg-1 first-col-container">
                  <div className="image-1-wrapper">
                     <Image
                        src="/img/first-haircut/image-1.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': 'auto'}}
                     />
                  </div>
                  <div className="image-3-wrapper">
                     <Image
                        src="/img/first-haircut/image-3.png"
                        alt="Замовити візит"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{'width': '100%', 'height': 'auto'}}
                     />
                  </div>
               </div>
               <div className="col-lg-8 order-1 order-lg-2">
                  <div className="description-wrapper">
                     <div className="section-top">
                        <div className="section-heading first">Найпоширеніші запитання батьків</div>
                        <p>
                           Особливий момент в житті вашої дитини – перший візит до парикмахера
                        </p>
                        <p>
                           ми зробимо цей день особливим і приємним для вас та вашого малюка та подаруємо сертифікат,
                           щоби
                           ця унікальна подія залишилася в пам’яті!
                        </p>
                     </div>
                     <div className="section-bottom">
                        <Image
                           src="/img/first-haircut/image-2.png"
                           alt="Замовити візит"
                           width={0}
                           height={0}
                           sizes="100vw"
                           style={{'height': 'auto'}}
                        />
                        <div className="first-haircut__book-call-btn__wrapper">
                           <button
                              className="first-haircut__book-call-btn site-btn"
                              onClick={() => setShow(true)}
                           >Замовити візит
                           </button>
                        </div>
                        <div className="section-heading second">Ми радимо вам:</div>
                        <ul>
                           <li>Створіть позитивний настрій</li>
                           <li>
                              Розкажіть вашій дитині, що сьогодні вона стане справжньою зіркою моди
                           </li>
                           <li>
                              Поділіться своїм захопленням та покажіть, як весело і цікаво буде провести час у нашому
                              салоні
                           </li>
                           <li>на всяк випадок, змінну футболку, якщо волосся попаде на одежу</li>
                           <li>
                              Врахуйте особливості волосся. Якщо у вашої дитини довге волосся, розгляньте можливість
                              зробити його коротше перед стрижкою, щоб зменшити тривалість процесу та зробити його більш
                              комфортним
                           </li>
                           <li>
                              Зробіть наш салон місцем гри. У нашому салоні є багато різноманітних іграшок та книжок,
                              які
                              допоможуть розслабити вашу дитину та зробити процес стрижки більш веселим
                           </li>
                           <li>
                              не забудьте взяти з собою соску, пляшечку, улюблену іграшку, з якою дитині буде спокійніше
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <BookCallModal
            show={show}
            setShow={setShow}
            showSuccess={showSuccess}
            setShowSuccess={setShowSuccess}
         />
      </>
   )
}

export default FirstHaircut;
