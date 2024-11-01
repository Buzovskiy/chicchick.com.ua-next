'use client';
import {useState, useEffect, useReducer} from 'react';
import Image from "next/image";
import './style.css'
import BookCallModal from "@/components/BookCall/modal";


function salonReducer(state, action) {
   if (action.type === 'init') {
      const salons = action.salonsList;
      const salonKey = 0;
      const days = salons[salonKey].days;
      const dayKey = 0;
      const staffs = days[dayKey].staff;
      return {...state, salons, salonKey, days, dayKey, staffs};
   } else if (action.type === 'click_salon') {
      const salonKey = action.salonKey;
      const days = state.salons[salonKey].days;
      const dayKey = 0;
      const staffs = days[dayKey].staff;
      return {...state, salonKey, days, dayKey, staffs};
   } else if (action.type === 'click_day') {
      const dayKey = action.dayKey;
      const staffs = state.days[dayKey].staff;
      return {...state, dayKey, staffs};
   }
   return {};
}


const initialSalonState = {
   salons: [],
   salonKey: '', // key of the salon in a list which comes from json
   days: [],
   dayKey: '',
   staffs: [],
}


const Schedule = () => {
   const [show, setShow] = useState(false);
   const [showSuccess, setShowSuccess] = useState(false);

   const [salonState, salonDispatch] = useReducer(salonReducer, initialSalonState, undefined);

   useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_API}/salon/list/`, {cache: 'no-store'})
         .then((response) => {
            if (response.ok) {
               response.json().then((salonsList) => {
                  salonDispatch({type: 'init', salonsList: salonsList});
               });
            } else {
               console.log('error');
            }
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);

   const handleClickSalon = (e) => {
      salonDispatch({type: 'click_salon', salonKey: e.target.dataset.salonKey});
   }

   const handleClickDay = (e) => {
      salonDispatch({type: 'click_day', dayKey: e.target.dataset.dayKey});
   }

   return (

      <>
         <div className="container section schedule">
            <div className="row">
               <div className="col-12">
                  <div className="section-heading">Графік роботи майстрів</div>
                  <div className="schedule__wrapper">
                     <div className="schedule__choose-salon">
                        <div className="schedule__subtitle">Обери салон</div>
                        <div className="schedule__salon-btn-wrapper">
                           {salonState.salons.map((salon, i) => (
                              <button
                                 key={salon.id}
                                 data-salon-key={i}
                                 className={`site-btn ${i === +salonState.salonKey ? 'active' : ''}`}
                                 onClick={handleClickSalon}
                              >
                                 {salon.address}
                              </button>
                           ))}
                        </div>
                        <div className="schedule__book-visit desktop">
                           <div className="schedule__subtitle">
                              Запишись до свого майстра!
                           </div>
                           <button
                              onClick={() => setShow(true)}
                              className="site-btn">
                              Замовити візит
                           </button>
                        </div>
                     </div>
                     <div className="schedule__choose-day">
                        <div className="schedule__subtitle">Обери день візиту</div>
                        <div className="schedule__days-list">
                           {salonState.days.map((day, i) => (
                              <button
                                 key={day.id}
                                 className={`site-btn ${i === +salonState.dayKey ? 'active' : ''}`}
                                 data-day-key={i}
                                 onClick={handleClickDay}
                              >
                                 {day['titleShort']}
                              </button>
                           ))}
                        </div>
                        <div className="schedule__masters-wrapper">
                           {salonState.staffs.map((master, i) => (
                              <div key={master.id} className="schedule__master-container">
                                 <div className="master-title">
                                    {master.name}
                                 </div>
                                 <Image
                                    src={master.imageUrl}
                                    alt="Замовити візит"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="master-img"
                                    style={{'width': '100%', 'height': 'auto'}}
                                 />
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="schedule__book-visit mobile">
                        <div className="schedule__subtitle">
                           Запишись до свого майстра!
                        </div>
                        <button
                           onClick={() => setShow(true)}
                           className="site-btn">
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
         <BookCallModal
            show={show}
            setShow={setShow}
            showSuccess={showSuccess}
            setShowSuccess={setShowSuccess}
         />
      </>
   )
}

export default Schedule;
