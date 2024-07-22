import BreadCrumbs from "@/components/BreadCrumbs";
import {getServicesBySlug} from "@/api/ServicesAPI";

export async function generateMetadata({ params, searchParams }, parent) {
   const response = await getServicesBySlug(params.slug);
   const service = response.ok ? await response.json(): {};
   const ogImage = service.services?.[0].imageUrl;
   const ogImages = ogImage ? [ogImage] : (await parent).openGraph?.images

   return {
      title: service.metaTitle,
      description: service.metaDescription,
      openGraph: {
         images: [...ogImages],
      },
   }
}

const Layout = async ({children, params}) => {
   const response = await getServicesBySlug(params.slug);
   const service = await response.json();

   return (
      <>
         <BreadCrumbs breadCrumbSegment={service.title}/>
         {children}
      </>
   )
}

export default Layout;