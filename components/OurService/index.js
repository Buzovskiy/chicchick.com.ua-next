'use client';
import {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
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
                     <Link href={`/services/${item.slug}`} alt="Стрижка">
                        <div className="photo-wrapper">
                           <Image
                              src={item.imageUrl}
                              alt={item.title}
                              width={0}
                              height={0}
                              style={{width: "100%", height: "auto"}}
                              sizes="100vw"
                           />
                        </div>
                        <div className="title">{item.title}</div>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default OurService