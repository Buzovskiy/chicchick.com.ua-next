import Services from "@/components/Services";

const Page = ({params}) => {
   console.log(params.slug);
   return  <Services/>
}

export default Page;