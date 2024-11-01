'use client';
import Modal from 'react-bootstrap/Modal';
import "./book-call-modal.css";
import Image from "next/image";
import {useEffect, useState} from "react";


function BookCallModal({show, setShow, showSuccess, setShowSuccess}) {

   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [phoneCallBack, setPhoneCallBack] = useState('');
   const [phoneIsoCallBack, setPhoneIsoCallBack] = useState('');
   const handleClose = () => {
      setShow(false);
      setTimeout(() => {
         setShowSuccess(false);
      }, 1000)
   };

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
      formData.append('phone', phone);
      try {
         const response = await fetch(`${process.env.NEXT_PUBLIC_API}/message/send/`, {
            method: "POST",
            body: formData
         });
         if (!response.ok) {
            console.log(response);
         } else {
            setShowSuccess(true);
         }
      } catch (e) {
         console.log(e)
      }
   }

   const urlQueryParams = new URLSearchParams({
      keys: 'top_header_phone,top_header_phone_iso'
   })

   useEffect(() => {
      const fetchData = async () => {
         try {
            let res = await fetch(`${process.env.NEXT_PUBLIC_API}/salon/settings?${urlQueryParams.toString()}`, {cache: 'no-store'});
            if (!res.ok) {
               throw new Error(`Request failed with status ${res.status}`);
            }
            let data = await res.json();
            setPhoneCallBack(data.top_header_phone);
            setPhoneIsoCallBack(data.top_header_phone_iso);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      }

      fetchData();
   }, [])

   return (
      <Modal
         className="modal-book-call"
         show={show}
         onHide={handleClose}
         centered
      >
         {showSuccess ?
            <Image
               src="/img/success-book-call.png"
               alt="close"
               sizes="100vw"
               className="success-book-call-img"
               width={0}
               height={0}
            /> : null
         }
         <div className="row p-0 m-0">
            <div className="col-12 p-0 m-0 corner-icon-wrapper">
               <Image
                  src="/img/square-triangle-right.png"
                  alt="close"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{width: '80px', height: 'auto'}}
               />
            </div>
         </div>
         <div className="row py-5 mx-1 book-call">
            <div className="row">
               <div className="col-12 book-call__heading btn-wrapper">
                  <button className="close" onClick={handleClose}>
                     <Image
                        src="/img/icon-close.png"
                        alt="close"
                        width={26}
                        height={26}
                     />
                  </button>
               </div>
            </div>
            {showSuccess ?
               <div className="row px-5 success-wrapper">
                  <div className="col-12 col-md-7">
                     <div className="section-heading">
                        Дякуємо за звернення!
                     </div>
                     <div className="success-content">
                        Наш адміністратор незабаром зв'яжеться з вами, щоб надати всю необхідну інформацію
                     </div>
                  </div>
                  <div className="col-12 col-md-5"></div>
               </div> :
               <div>
                  <div className="col-12">
                     <div className="col-12 p-5 pb-0 pt-0 book-call__heading">Залиште свої контактні данні</div>
                  </div>
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
                  <div className="row">
                     <div className="col-12 p-5 pb-0 pt-5 pt-xl-0 book-call__heading phone-us">
                        Або зателефонуйте нам за номером <a className="phone" href={`tel:${phoneIsoCallBack}`}>{phoneCallBack}</a>
                     </div>
                  </div>
               </div>
            }
         </div>
         {/*<Modal.Header closeButton></Modal.Header>*/}
         {/*<Modal.Header>*/}
         {/*   <Modal.Title>Залиште свої контактні данні</Modal.Title>*/}
         {/*</Modal.Header>*/}
         {/*<Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>*/}
         {/*<Modal.Footer>*/}
         {/*   <Button variant="secondary" onClick={handleClose}>*/}
         {/*      Close*/}
         {/*   </Button>*/}
         {/*   <Button variant="primary" onClick={handleClose}>*/}
         {/*      Save Changes*/}
         {/*   </Button>*/}
         {/*</Modal.Footer>*/}
      </Modal>
   );
}

export default BookCallModal;