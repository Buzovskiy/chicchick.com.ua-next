import "./style.css";

const Team = () => {

   return (
      <div className="container team">
         <div className="row py-5">
            <div className="section-heading">Наша команда</div>
            <div className="row team__container">
               <div className="row team__item row-odd">
                  <div className="col-lg-4">
                     <div className="team__photo-wrapper">
                        <img src="/img/team/photo-bg.png" alt=""/>
                        <img className="team__photo" src="/img/team/team-1.png" alt=""/>
                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="team__description-wrapper">
                        <img src="/img/team/description-bg-yellow.png" alt=""/>
                        <img className="team__bg-front" src="/img/team/description-bg-front.png" alt=""/>
                        <img className="team__triangle" src="/img/team/triangle.png" alt=""/>
                        <img className="team__square" src="/img/team/square.png" alt=""/>
                        <div className="team__description-text">
                           <div>
                              <div className="team__description__heading">марина</div>
                              Я майстер перукар з досвідом роботи 10 років!
                              З дитинства мріяла працювати перукарем, але спочатку здобула вищу освіту, тільки після
                              цього
                              пішла за своєю мрією. Перші 5 років я працювала універсальним майстром опанувала багатьма
                              навичками, різними техніками фарбування, нарощування, відновлення та лікування волосся.
                              останні
                              5 років працюю з діточками, а також продовжує створювати образи для їх батьків!
                           </div>
                           <div className="team__stripe"></div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row team__item row-even">
                  <div className="col-lg-4">
                     <div className="team__photo-wrapper">
                        <img className="team__photo-bg" src="/img/team/photo-bg.png" alt=""/>
                        <img className="team__photo" src="/img/team/team-1.png" alt=""/>
                     </div>
                  </div>
                  <div className="col-lg-8 order-first">
                     <div className="team__description-wrapper">
                        <img className="team__bg-yellow" src="/img/team/description-bg-yellow.png" alt=""/>
                        <img className="team__bg-front" src="/img/team/description-bg-front.png" alt=""/>
                        <img className="team__triangle" src="/img/team/triangle.png" alt=""/>
                        <img className="team__square" src="/img/team/square.png" alt=""/>
                        <div className="team__description-text">
                           <div>
                              <div className="team__description__heading">марина</div>
                              Я майстер перукар з досвідом роботи 10 років!
                              З дитинства мріяла працювати перукарем, але спочатку здобула вищу освіту, тільки після
                              цього
                              пішла за своєю мрією. Перші 5 років я працювала універсальним майстром опанувала багатьма
                              навичками, різними техніками фарбування, нарощування, відновлення та лікування волосся.
                              останні
                              5 років працюю з діточками, а також продовжує створювати образи для їх батьків!
                           </div>
                           <div className="team__stripe"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Team;
