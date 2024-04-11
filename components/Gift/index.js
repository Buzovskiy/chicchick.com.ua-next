import './style.css'


const Gift = () => {
   return (
      <div className="container gift">
         <div className="row py-5">
            <div className="section-heading">Подаруй першу зачіску в СHic Chick</div>
            <div className="row gift__container">
               <div className="col-lg-5 gift__description">
                  <div>
                     <p>
                        Перша зачіска - це особлива подія для кожного, і ми хочемо, щоб ваш малюк запам'ятав цей день із
                        посмішкою на обличчі!
                     </p>
                     <p>
                        В Chic Chick ми робимо все, щоб ця подія залишилася вам і вашому малюку назавжди в пам'яті!
                     </p>
                  </div>
               </div>
               <div className="col-lg-7 gift__description">
                  <img src="/img/gift_image.png" alt=""/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Gift;
