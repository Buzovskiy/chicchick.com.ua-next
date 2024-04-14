import Link from 'next/link';

import './style.css'


const BreadCrumbs = ({breadCrumbSegment}) => {
   return (
      <div className="container breadcrumb">
         <div className="row p-3">
            <div className="wrapper">
               <Link href='/'><img src="/img/house.png" alt=""/></Link>
               {'>'} {breadCrumbSegment}
            </div>
         </div>
      </div>
   )
}

export default BreadCrumbs;
