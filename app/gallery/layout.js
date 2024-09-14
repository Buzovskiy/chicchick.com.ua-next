import BreadCrumbs from "@/components/BreadCrumbs";
import {getMetaTagBySlug} from "@/api/MetaTagsAPI";


export async function generateMetadata({params, searchParams}, parent) {
   const response = await getMetaTagBySlug('gallery');

   const metaTag = await (async () => {
      if (response.ok){
         return response.json();
      } else{
         const parentData = await parent;
         return {metaTitle: parentData.title, metaDescription: parentData.description};
      }
   })();


   return {
      title: metaTag.metaTitle,
      description: metaTag.metaDescription
   }
}

const Layout = ({children}) => {
   return (
      <>
         <BreadCrumbs breadCrumbSegment={"Галерея"} />
         {children}
      </>
   )
}

export default Layout;