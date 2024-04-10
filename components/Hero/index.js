import "./style.css"


const Hero = () => {
   return (
      <div className="container hero">
         <div className="row py-4">
            <div className="col-lg-7 hero-left">
               <div className="hero-left__logo">
                  <img src="/img/chicchick_square.png" alt="Chic chick"/>
               </div>
               <div className="hero-left__tagline">Дитячі перукарні</div>
               <div className="hero-left__button"><button className="site-btn">Запис на стрижку</button></div>
               <div className="hero-left__tagline-2">
                  Перевiрене мiсце для дiтей та батькiв, де кожна стрижка &mdash; це весела пригода!
               </div>
               <div className="hero-left__working-hours">
                  <div className="hero-left__working-hours__time">
                     <img src="/img/calendar.png" alt=""/>
                     <span>10:00-19:00</span>
                  </div>
                  <div className="hero-left__working-hours__location">
                     <img className="img-location" src="/img/flag.png" alt=""/>
                     <span>Обери салон</span>
                     <img className="img-arrow" src="/img/arrow.png" alt=""/>
                  </div>
               </div>
            </div>
            <div className="col-lg-5 hero-right">
               <img className="hero-right__hero-girl" src="/img/hero-girl.png" alt=""/>
            </div>
            <div className="hero-bottom">
               <img className="hero-bottom__hero-stripe-bottom" src="/img/hero-stripe-bottom.png" alt=""/>
            </div>
         </div>
      </div>
   )
}

export default Hero