'use client';
import './style.css'
import {useState} from "react";
import BookCallModal from "@/components/BookCall/modal";


const BookCall = () => {
   const [show, setShow] = useState(false);
   const [showSuccess, setShowSuccess] = useState(true);
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');

   const handleChangeName = (event) => {
      setName(event.target.value);
   }

   const handleChangePhone = (event) => {
      setPhone(event.target.value);
   }

   const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phone', name);
      try {
         const response = await fetch(`${process.env.NEXT_PUBLIC_API}/message/send/`, {
            method: "POST",
            body: formData
         });
         if (!response.ok) {
            console.log(response);
         } else {
            setShow(true);
            setName('');
            setPhone('');
         }
      } catch (e) {
         console.log(e)
      }
   }

   return (
      <>
         <div className="container section" id="bookCall">
            <div className="row py-5 mx-1 book-call">
               <div className="col-12 book-call__heading">Замовити зворотний дзвінок</div>
               <div className="col-12 p-5 pb-0 book-call__form-wrapper">
                  <form action="#" onSubmit={onSubmit}>
                     <div className="row">
                        <div className="col-12 col-xl-4 input-section">
                           <label htmlFor="BookCallName">Ваше Ім’я</label>
                           <input required id="BookCallName" type="text" placeholder="ВАШЕ ІМ’Я"
                                  onChange={handleChangeName}
                                  name="name" value={name}
                           />
                        </div>
                        <div className="col-12 col-xl-4 input-section">
                           <label htmlFor="BookCallPhone">Номер телефону</label>
                           <input required id="BookCallPhone" type="text" placeholder="НОМЕР ТЕЛЕФОНУ"
                                  onChange={handleChangePhone}
                                  name="phone" value={phone}
                           />
                        </div>
                        <div className="col-12 col-xl-4 button-wrapper">
                           <button className="site-btn">Замовити</button>
                        </div>
                     </div>
                  </form>
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

export default BookCall