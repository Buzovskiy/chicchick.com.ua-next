import './style.css'


const ServiceItem = () => {
   return (
      <div className="col-lg-4">
         <div className="service-item">
            <div className="image-wrapper"><img src="/img/haircut.png" alt=""/></div>
            <div className="description-wrapper">
               <div className="heading">Корекція довжини</div>
               <div className="description">
                  Миття + сушка волосся додатково 250 грн
               </div>
               <div className="price">
                  400...450 грн
               </div>
            </div>
         </div>
      </div>
   )
}


const Services = () => {
   return (
      <div className="container services-list">
         <div className="row py-4 gx-3 gy-5">
            <ServiceItem/>
            <ServiceItem/>
            <ServiceItem/>
            <ServiceItem/>
         </div>
      </div>
   )
}

export default Services;
