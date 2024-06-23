import Image from "next/image";
import './style.css'


const Schedule = () => {
   return (
      <div className="container section schedule">
         <div className="row">
            <div className="col-12">
               <div className="section-heading">Графік роботи майстрів</div>
               <div className="schedule__wrapper">
                  <div className="schedule__choose-salon">
                     <div className="schedule__subtitle">Обери салон</div>
                     <div className="schedule__salon-btn-wrapper">
                        <button className="site-btn active">
                           Kadorr City Mail, вул. Генуезька 24 б
                        </button>
                        <button className="site-btn">
                           вул. Каманіна, 16 а/6, 45 Жемчужина
                        </button>
                     </div>
                     <div className="schedule__book-visit desktop">
                        <div className="schedule__subtitle">
                           Запишись до свого майстра!
                        </div>
                        <button className="site-btn">
                           Замовити візит
                        </button>
                     </div>
                  </div>
                  <div className="schedule__choose-day">
                     <div className="schedule__subtitle">Обери день візиту</div>
                     <div className="schedule__days-list">
                        <button className="site-btn active">
                           ПН
                        </button>
                        <button className="site-btn">
                           ВТ
                        </button>
                        <button className="site-btn">
                           СР
                        </button>
                        <button className="site-btn">
                           ЧТ
                        </button>
                        <button className="site-btn">
                           ПТ
                        </button>
                        <button className="site-btn">
                           СБ
                        </button>
                        <button className="site-btn">
                           НД
                        </button>
                     </div>
                     <div className="schedule__masters-wrapper">
                        <div className="schedule__master-container">
                           <div className="master-title">
                              Тетяна
                           </div>
                           <Image
                              src="/img/Tetyana.png"
                              alt="Замовити візит"
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="master-img"
                              style={{'width': '100%', 'height': 'auto'}}
                           />
                        </div>
                        <div className="schedule__master-container">
                           <div className="master-title">
                              Тетяна
                           </div>
                           <Image
                              src="/img/Tetyana.png"
                              alt="Замовити візит"
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="master-img"
                              style={{'width': '100%', 'height': 'auto'}}
                           />
                        </div>
                        <div className="schedule__master-container">
                           <div className="master-title">
                              Тетяна
                           </div>
                           <Image
                              src="/img/Tetyana.png"
                              alt="Замовити візит"
                              width={0}
                              height={0}
                              sizes="100vw"
                              className="master-img"
                              style={{'width': '100%', 'height': 'auto'}}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="schedule__book-visit mobile">
                     <div className="schedule__subtitle">
                        Запишись до свого майстра!
                     </div>
                     <button className="site-btn">
                        <Image
                           src="/img/schedule-stripe.png"
                           alt="Замовити візит"
                           width="231"
                           height="44"
                        />
                        Замовити візит
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Schedule;
