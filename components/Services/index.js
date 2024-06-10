import Image from "next/image";
import './style.css'


const ServiceItem = () => {
   return (
      <div className="col-sm-6 col-lg-4">
         <div className="service-item">
            <div className="image-wrapper">
               <Image
                  src="/img/haircut.png"
                  alt="Замовити візит"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{'width': '100%', 'height': 'auto'}}
               />
            </div>
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
