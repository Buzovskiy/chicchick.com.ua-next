'use client';
import {useState} from "react";
import BookCallModal from "@/components/BookCall/modal";

const BookBtn = () => {
   const [show, setShow] = useState(false);
   const [showSuccess, setShowSuccess] = useState(false);
   return (
      <>
         <div className="row site-btn-wrapper">
            <div className="col text-center">
               <button
                  onClick={() => setShow(true)}
                  className="site-btn">
                  Замовити візит
               </button>
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

export default BookBtn