import BreadCrumbs from "@/components/BreadCrumbs";

const Layout = ({children}) => {
   return (
      <>
         <BreadCrumbs breadCrumbSegment={"перша стрижка"} />
         {children}
      </>
   )
}

export default Layout;