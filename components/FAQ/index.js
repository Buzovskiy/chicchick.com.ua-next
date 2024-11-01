'use client';
import {useState, useEffect} from "react";
import './style.css'
import Image from "next/image";


const FAQ = () => {
   const [activeId, setActiveId] = useState(null);
   const [questions, setQuestions] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         let res = await fetch(`${process.env.NEXT_PUBLIC_API}/faq/`, {cache: 'no-store'})
         let data = await res.json()
         setQuestions(data)
      }

      fetchData().catch(console.error);
   }, [])

   const handleClick = (id) => {
      setActiveId(id === activeId ? null: id);
   };

   return (
      <div className="container section faq" id="FAQ">
         <div className="row">
            <div className="section-heading">Найпоширеніші запитання батьків</div>
            <div className="faq__blocks-wrapper">
               {questions.map(item => (
                  <div key={item.id} className={'faq__wrapper' + ' ' + (item.id === activeId ? 'active': '')}>
                     <div className="faq__question-block" onClick={() => handleClick(item.id)}>
                        <div className="faq__icon left">
                           <Image
                              src={item.icon}
                              alt="Замовити візит"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{'width': '100%', 'height': 'auto'}}
                           />
                        </div>
                        <div className="faq__question">{item.question}</div>
                        <div className="faq__icon right"><img src="/img/faq/faq-icon-right.png" alt=""/></div>
                     </div>
                     <div className="faq__answer-block">
                        <div className="faq__answer-block__left"></div>
                        <div
                           className="faq__answer-block__center"
                           dangerouslySetInnerHTML={{__html: item.answer}}
                        ></div>
                        <div className="faq__answer-block-right"></div>
                     </div>
                  </div>
               ))}

            </div>
         </div>
      </div>
   )
}

export default FAQ;
