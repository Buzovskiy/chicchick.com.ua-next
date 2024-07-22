import BreadCrumbs from "@/components/BreadCrumbs";
import {getMetaTagBySlug} from "@/api/MetaTagsAPI";


export async function generateMetadata({params, searchParams}, parent) {
   const response = await getMetaTagBySlug('first_haircut');
   const metaTag = await (async () => {
      if (response.ok){
         return response.json();
      } else{
         return {metaTitle: (await parent).title, metaDescription: (await parent).description};
      }
   })();

   return {
      title: metaTag.metaTitle,
      description: metaTag.metaDescription,
   }
}

const Layout = ({children}) => {
   return (
      <>
         <BreadCrumbs breadCrumbSegment={"перша стрижка"} />
         {children}
      </>
   )
}

export default Layout;