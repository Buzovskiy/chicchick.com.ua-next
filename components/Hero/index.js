import "./style.css"
import Image from "next/image";


const Hero = () => {
   return (
      <div className="container hero">
         <div className="row">
            <div className="col-md-7 order-2 order-md-1 hero-left">
               <div className="hero-left__logo">
                  <Image
                     src="/img/chicchick_square.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: "100%", height: "auto"}}
                     alt="ДИТЯЧІ ПЕРУКАРНІ"
                  />
               </div>
               <div className="hero-left__tagline order-1">Дитячі перукарні в Одесі</div>
               <div className="hero-left__button order-3">
                  <button className="site-btn">Запис на стрижку</button>
               </div>
               <div className="hero-left__tagline-2 order-4">
                  Перевiрене мiсце для дiтей та батькiв, де кожна стрижка &mdash; це весела пригода!
               </div>
               <div className="hero-left__working-hours order-2">
                  <div className="hero-left__working-hours__time">
                     <Image
                        src="/img/calendar.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="ДИТЯЧІ ПЕРУКАРНІ"
                     />
                     <span>10:00-19:00</span>
                  </div>
               </div>
            </div>
            <div className="col-md-5 order-1 order-md-2 hero-right">
               <div className="girl-wrapper">
                  <Image
                     src="/img/hero-girl.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     alt="ДИТЯЧІ ПЕРУКАРНІ"
                     className="hero-right__hero-girl"
                  />
                  <Image
                     src="/img/hero-girl-mobile.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     alt="ДИТЯЧІ ПЕРУКАРНІ"
                     className="hero-girl--mobile"
                  />
                  <Image
                     src="/img/chicchick_square-mobile.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     style={{width: "85%", height: "auto"}}
                     alt="ДИТЯЧІ ПЕРУКАРНІ"
                     className="chicchick-square--mobile"
                  />
               </div>
            </div>
            <div className="col-12 order-3 hero-bottom">
               <Image
                  src="/img/hero-stripe-bottom.png"
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="ДИТЯЧІ ПЕРУКАРНІ"
                  className="hero-bottom__hero-stripe-bottom"
               />
            </div>
         </div>
      </div>
   )
}

export default Hero