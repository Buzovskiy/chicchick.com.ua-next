import {Fragment} from "react";
import {notFound} from 'next/navigation'
import GalleryWrapper from "@/components/Gallery";


export default async function GalleryPage() {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API}/gallery/`, {cache: 'no-store'});
   if (!response.ok)
      notFound();
   const galleryData = await response.json();

   return (
      <Fragment>
         <div className="container">
            <div className="row py-4 g-4">
               <GalleryWrapper galleryData={galleryData}/>
            </div>
         </div>
      </Fragment>
   );
}
