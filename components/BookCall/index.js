import './style.css'


const BookCall = () => {
   return (
      <div className="container book-call">
         <div className="row py-5">
            <div className="col-12 book-call__heading">Замовити зворотний дзвінок</div>
            <div className="col-12 p-5 book-call__form-wrapper">
               <div className="row">
                  <div className="col-4 input-section">
                     <label htmlFor="BookCallName">Ваше Ім’я</label>
                     <input id="BookCallName" type="text"/>
                  </div>
                  <div className="col-4 input-section">
                     <label htmlFor="BookCallPhone">Номер телефону</label>
                     <input id="BookCallPhone" type="text"/>
                  </div>
                  <div className="col-4 button-wrapper">
                     <button className="site-btn">Замовити</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BookCall