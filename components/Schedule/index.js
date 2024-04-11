import './style.css'


const Faq = () => {
   return (
      <div className="container schedule">
         <div className="row py-5">
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
                  <div className="schedule__book-visit">
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
                        <img className="master-img" src="/img/Tetyana.png" alt=""/>
                     </div>
                     <div className="schedule__master-container">
                        <div className="master-title">
                           Тетяна
                        </div>
                        <img className="master-img" src="/img/Tetyana.png" alt=""/>
                     </div>
                     <div className="schedule__master-container">
                        <div className="master-title">
                           Тетяна
                        </div>
                        <img className="master-img" src="/img/Tetyana.png" alt=""/>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Faq;
