import './style.css'


const OurService = () => {
   return (
      <div className="container our-service">
         <div className="row py-4">
            <div className="section-heading">Наші Послуги</div>
            <div className="section-blocks">
               <div className="block">
                  <a href="#">
                     <div className="photo-wrapper"><img src="/img/our-service/boys.png" alt=""/></div>
                     <div className="title">Хлопчики</div>
                  </a>
               </div>
               <div className="block">
                  <a href="#">
                     <div className="photo-wrapper"><img src="/img/our-service/girls.png" alt=""/></div>
                     <div className="title">Дівчата</div>
                  </a>
               </div>
               <div className="block">
                  <a href="#">
                     <div className="photo-wrapper"><img src="/img/our-service/adult.png" alt=""/></div>
                     <div className="title">Дорослі</div>
                  </a>
               </div>
               <div className="block">
                  <a href="#">
                     <div className="photo-wrapper"><img src="/img/our-service/first-barber.png" alt=""/></div>
                     <div className="title">Перша стрижка</div>
                  </a>
               </div>
               <div className="block">
                  <a href="#">
                     <div className="photo-wrapper"><img src="/img/our-service/hairstyle.png" alt=""/></div>
                     <div className="title">Зачіски</div>
                  </a>
               </div>
               <div className="block">
                  <a href="#">
                     <div className="photo-wrapper"><img src="/img/our-service/products.png" alt=""/></div>
                     <div className="title">Догляд за волоссям</div>
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OurService