'use client';
import {useState} from "react";
import './style.css'
import Image from "next/image";


const FAQ = () => {
   const [active, setActive] = useState('');
   const activeHandler = () => setActive( active ? '': 'active');

   return (
      <div className="container section faq" id="FAQ">
         <div className="row">
            <div className="section-heading">Найпоширеніші запитання батьків</div>
            <div className="faq__blocks-wrapper">
               <div className={'faq__wrapper' + ' ' + active}>
                  <div className="faq__question-block" onClick={activeHandler}>
                     <div className="faq__icon left">
                        <Image
                           src="/img/faq/faq-1.png"
                           alt="Замовити візит"
                           width={0}
                           height={0}
                           sizes="100vw"
                           style={{'width': '100%', 'height': 'auto'}}
                        />
                     </div>
                     <div className="faq__question">Які стрижки може зробити хлопець в Chic Chick?</div>
                     <div className="faq__icon right"><img src="/img/faq/faq-icon-right.png" alt=""/></div>
                  </div>
                  <div className="faq__answer-block">
                     <div className="faq__answer-block__left"></div>
                     <div className="faq__answer-block__center">
                        Насправді, наші майстра можуть реалізувати будь-які ваші побажання з приводу нової зачіски. Це,
                        наприклад:
                        • спортивна стрижка
                        • модельна стрижка
                        • подовжена стрижка
                        • фігурне вистригання у вигляді різноманітних малюнків
                        Chic Chick — це найкращий вибір як для усіляких експериментів з волоссям, так і для регулярні
                        корекції вже існуючої зачіски.
                     </div>
                     <div className="faq__answer-block-right"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FAQ;
