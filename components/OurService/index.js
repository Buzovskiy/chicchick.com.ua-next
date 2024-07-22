'use client';
import {useEffect, useState} from "react";
import './style.css'


const OurService = () => {

   const [items, setItems] = useState([]);

   useEffect(() => {
      const fetchItems = async () => {
         const response = await fetch(`${process.env.NEXT_PUBLIC_API}/services/`);
         const items = await response.json();
         setItems(items);
      }
      fetchItems().catch(console.error);
   }, []);

   return (
      <div className="container section our-service" id="ourService">
         <div className="row">
            <div className="section-heading">Наші Послуги</div>
            <div className="section-blocks">
               {items.map(item => (
                  <div className="block" key={item.id}>
                     <a href={`/services/${item.slug}`}>
                        <div className="photo-wrapper"><img src={item.imageUrl} alt={item.title}/></div>
                        <div className="title">{item.title}</div>
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default OurService