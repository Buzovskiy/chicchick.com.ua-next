import whyUsData from './whyUsData';
import './style.css'
import Image from "next/image";
import BlocksMobile from "@/components/WhyUs/BlocksMobile";


const WhyUs = () => {
   return (
      <div className="container section why-us" id="whyUs">
         <div className="row">
            <div className="section-heading">Чому Батьки вибирають нас</div>
            <div className="blocks">
               {whyUsData.map((items_set, set_i) => items_set.map((item, i) => (
                  <div key={set_i + i} className="block-wrapper">
                     <Image
                        src={'/img/why-choose-us/' + item.img}
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="ДИТЯЧІ ПЕРУКАРНІ"
                        styles={{'height': 'auto', 'width': 'auto'}}
                     />
                     <div className="block-text">{item.text}</div>
                  </div>
               )))}
            </div>
            <div className="why-us__blocks-mobile">
               <BlocksMobile/>
            </div>
         </div>
      </div>
   )
}

export default WhyUs