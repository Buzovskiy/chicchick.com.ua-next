import './style.css'


const BookCall = () => {
   return (
      <div className="container section" id="bookCall">
         <div className="row py-5 mx-1 book-call">
            <div className="col-12 book-call__heading">Замовити зворотний дзвінок</div>
            <div className="col-12 p-5 pb-0 book-call__form-wrapper">
               <div className="row">
                  <div className="col-12 col-xl-4 input-section">
                     <label htmlFor="BookCallName">Ваше Ім’я</label>
                     <input id="BookCallName" type="text" placeholder="ВАШЕ ІМ’Я"/>
                  </div>
                  <div className="col-12 col-xl-4 input-section">
                     <label htmlFor="BookCallPhone">Номер телефону</label>
                     <input id="BookCallPhone" type="text" placeholder="НОМЕР ТЕЛЕФОНУ"/>
                  </div>
                  <div className="col-12 col-xl-4 button-wrapper">
                     <button className="site-btn">Замовити</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BookCall