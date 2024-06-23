import './style.css'
import Image from "next/image";


const Gift = () => {
   return (
      <div className="container section gift">
         <div className="row">
            <div className="section-heading">Подаруй першу зачіску в СHic Chick</div>
            <div className="col-12 gift__container">
               <div className="row">
                  <div className="col-12 col-lg-5 order-2 order-lg-1 gift__description">
                     <div>
                        <p>
                           Перша зачіска - це особлива подія для кожного, і ми хочемо, щоб ваш малюк запам'ятав цей день
                           із
                           посмішкою на обличчі!
                        </p>
                        <p>
                           В Chic Chick ми робимо все, щоб ця подія залишилася вам і вашому малюку назавжди в пам'яті!
                        </p>
                     </div>
                  </div>
                  <div className="col-12 col-lg-7 order-1 order-lg-2 mb-5 mb-lg-0 gift__description">
                     <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        src="/img/gift_image.png"
                        alt="Дитяча перукарня"
                        style={{'width': '100%', 'height': 'auto'}}
                     />
                  </div>
               </div>

            </div>
         </div>
      </div>
   )
}

export default Gift;
