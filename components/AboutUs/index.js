import './style.css'


const AboutUs = () => {
   return (
      <div className="container about-us">
         <div className="row py-4">
            <div className="section-heading">
               <div className="about-us-logo"><img src="/img/logo-about.png" alt=""/></div>
               <span className="about-us-heading-text">– це місце, де</span>
               <div className="about-us-square-triangle"><img src="/img/square-triangle-right.png" alt=""/></div>
            </div>
            <div className="section-blocks">
               <div className="section-blocks__row row1">
                  <img className="square-red" src="/img/square-red.png" alt=""/>
                  <div className="row1__first text-block"><div>наші <span className="highlighted">досвідчені перукарі</span> вміють працювати з будь-якими стрижками, включаючи найнеслухняніше волосся</div></div>
                  <div className="row1__second"><img src="/img/about-us/about-us-row-1.png" alt=""/></div>
                  <div className="row1__third text-block"><div>Здійснюємо <span className="highlighted">мрії</span> маленьких та дорослих</div>
                  </div>
               </div>
               <div className="section-blocks__row row2">
                  <div className="row2__first"><img src="/img/about-us/about-us-row-2-left.png" alt=""/></div>
                  <div className="row2__second text-block"><div>Понад <span className="highlighted">6 років</span> наші чуйні майстрині допомагають дітям виразити свою <span className="highlighted">унікальність</span> через волосся, підібрати найкращий образ, враховуючи уподобання <span className="highlighted">кожної дитини</span></div></div>
                  <div className="row2__third"><img src="/img/about-us/about-us-row-2-right.png" alt=""/></div>
               </div>
               <div className="section-blocks__row row3">
                  <div className="row3__first text-block"><div><span className="highlighted">Наша мета</span> – не просто стрижка, а враження та посмішки на обличчях дітей. Через кожну стрижку ми даруємо радість та незабутні миті спільного часу</div></div>
                  <div className="row3__second text-block">дивуємо і даруємо посмішки </div>
               </div>
               <div className="section-blocks__row row4">
                  <div className="row4__first text-block">
                     <img className="about-us__triangle-right" src="/img/triangle-right.png" alt=""/>
                     <div>безліч різноманітних послуг для <span className="highlighted">дітей</span> та <span
                        className="highlighted">дорослих</span></div>
                  </div>
                  <div className="row4__second"><img src="/img/about-us/about-us-row-4.png" alt=""/></div>
                  <div className="row4__third text-block"><div><span className="highlighted">ми віримо</span>, що візит до перукаря це не тільки шлях до створення кращого вигляду та комфорту, але і ключ до самоповаги та успішного образу</div></div>
                  <img className="about-us-stripe" src="/img/about-us/stripe.png" alt=""/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutUs