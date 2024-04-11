import './style.css'


const FAQ = () => {
   return (
      <div className="container faq">
         <div className="row py-5">
            <div className="section-heading">Найпоширеніші запитання батьків</div>
            <div className="faq__blocks-wrapper">
               <div className="faq__wrapper active">
                  <div className="faq__question-block">
                     <div className="faq__icon left"><img src="/img/faq/faq-1.png" alt=""/></div>
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
               <div className="faq__wrapper">
                  <div className="faq__question-block">
                     <div className="faq__icon left"><img src="/img/faq/faq-1.png" alt=""/></div>
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
