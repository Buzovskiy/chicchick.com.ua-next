import BreadCrumbs from "@/components/BreadCrumbs";

const Layout = ({children}) => {
  return (
     <>
        <BreadCrumbs breadCrumbSegment={'ДОРОСЛІ ТА ПІДЛІТКИ'}/>
        {children}
     </>
  )
}

export default Layout;