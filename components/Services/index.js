import Image from "next/image";
import './style.css'
import {notFound} from "next/navigation";
import {getServicesBySlug} from "@/api/ServicesAPI";


const Services = async (props) => {
   const params = props.params;
   const response = await getServicesBySlug(params.slug);
   if (response.status === 404) notFound();
   const service_category = await response.json();

   return (
      <div className="container services-list">
         <div className="row py-4 gx-3 gy-5">
            {service_category.services.map(service => (
               <div className="col-6 col-lg-4" key={service.id}>
                  <div className="service-item">
                     <div className="image-wrapper">
                        <Image
                           src={service.imageUrl}
                           alt="Замовити візит"
                           fill={true}
                           sizes="'100vw'"
                        />
                     </div>
                     <div className="description-wrapper">
                        <div className="heading">{service.title}</div>
                        <div className="description">{service.description}</div>
                     </div>
                     <div className="prices-wrapper">
                        <div className="price">{service.price}</div>
                        {service.price2 && <div className="price">{service.price2}</div>}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Services;
