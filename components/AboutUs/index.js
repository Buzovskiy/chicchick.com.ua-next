import './style.css';
import Image from "next/image";


const AboutUs = () => {
   return (
      <div className="container about-us">
         <div className="row py-4">
            <div className="section-heading">
               <div className="about-us-logo">
                  <Image
                     src="/img/logo-about.png"
                     width={0}
                     height={0}
                     sizes="100vw"
                     alt="ДИТЯЧІ ПЕРУКАРНІ"
                  />
               </div>
               <span className="about-us-heading-text">– це місце, де</span>
               <div className="about-us-square-triangle">
                  <Image
                     src="/img/square-triangle-right.png"
                     width={87}
                     height={80}
                     sizes="100vw"
                     alt="ДИТЯЧІ ПЕРУКАРНІ"
                  />
               </div>
            </div>
            <div className="section-blocks">
               <div className="section-blocks__row row1">
                  <div className="row1__first text-block">
                     <Image
                        src="/img/square-red.png"
                        width={70}
                        height={70}
                        alt="ДИТЯЧІ ПЕРУКАРНІ"
                        className="square-red"
                     />
                     <div>наші <span className="highlighted">досвідчені перукарі</span> вміють працювати з будь-якими
                        стрижками, включаючи найнеслухняніше волосся
                     </div>
                  </div>
                  <div className="row1__second">
                     <Image
                        src="/img/about-us/about-us-row-1.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        // fill={true}
                        // style={{width: "100%", height: "auto"}}
                        alt="ДИТЯЧІ ПЕРУКАРНІ"
                     />
                  </div>
                  <div className="row1__third text-block">
                     <div>Здійснюємо <span className="highlighted">мрії</span> маленьких та дорослих</div>
                  </div>
               </div>
               <div className="section-blocks__row row2">
                  <div className="row2__first">
                     <Image
                        src="/img/about-us/about-us-row-2-left.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="ДИТЯЧІ ПЕРУКАРНІ"
                     />
                  </div>
                  <div className="row2__second text-block">
                     <div>Понад <span className="highlighted">6 років</span> наші чуйні майстрині допомагають дітям
                        виразити свою <span className="highlighted">унікальність</span> через волосся, підібрати
                        найкращий образ, враховуючи уподобання <span className="highlighted">кожної дитини</span></div>
                  </div>
                  <div className="row2__third">
                     <Image
                        src="/img/about-us/about-us-row-2-right.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="ДИТЯЧІ ПЕРУКАРНІ"
                     />
                  </div>
               </div>
               <div className="section-blocks__row row3">
                  <div className="row3__first text-block">
                     <div><span className="highlighted">Наша мета</span> – не просто стрижка, а враження та посмішки на
                        обличчях дітей. Через кожну стрижку ми даруємо радість та незабутні миті спільного часу
                     </div>
                  </div>
                  <div className="row3__second text-block">дивуємо і даруємо посмішки</div>
               </div>
               <div className="section-blocks__row row4">
                  <div className="row4__first text-block">
                     <Image
                        src="/img/triangle-right.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="ДИТЯЧІ ПЕРУКАРНІ"
                        className="about-us__triangle-right"
                     />
                     <div>безліч різноманітних послуг для <span className="highlighted">дітей</span> та <span
                        className="highlighted">дорослих</span></div>
                  </div>
                  <div className="row4__second">
                     <Image
                        src="/img/about-us/about-us-row-4.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt="ДИТЯЧІ ПЕРУКАРНІ"
                     />
                  </div>
                  <div className="row4__third text-block">
                     <div><span className="highlighted">ми віримо</span>, що візит до перукаря це не тільки шлях до
                        створення кращого вигляду та комфорту, але і ключ до самоповаги та успішного образу
                     </div>
                  </div>
                  {/*<img className="about-us-stripe" src="/img/about-us/stripe.png" alt=""/>*/}
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutUs