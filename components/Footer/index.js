import './style.css'


const Footer = () => {
   return (
      <div className="container footer">
         <div className="row py-5">
            <div className="footer__wrapper">
               <div className="footer__social">
                  <div className="footer__logo-social-wrapper">
                     <div className="footer__logo"><img src="/img/logo-footer.png" alt=""/></div>
                     <div className="footer__social__wrapper">
                        <div><a href="#"><img className="icon-shadow" src="/img/social-media/whatsapp.svg" alt=""/></a></div>
                        <div><a href="#"><img className="icon-shadow" src="/img/social-media/telegram.svg" alt=""/></a></div>
                        <div><a href="#"><img className="icon-shadow" src="/img/social-media/chat.svg" alt=""/></a></div>
                        <div><a href="#"><img className="icon-shadow" src="/img/social-media/instagram.svg" alt=""/></a></div>
                     </div>
                  </div>
               </div>
               <div className="footer__contacts">
                  <div className="footer__contacts__heading">
                     Запрошуємо вас за адресами
                  </div>
                  <div className="footer__location">
                     <p className="address">Kadorr City Mail 3 поверх, вул. Генуезька 24 б</p>
                     <p className="telephone"><a href="tel:+380978074090">+38(097)807 40 90</a></p>
                     <p className="telephone"><a href="tel:+380738074090">+38(073)807 40 90</a></p>
                  </div>
                  <div className="footer__location">
                     <p className="address">45 Жемчужина, вул. Каманіна, 16 а/6</p>
                     <p className="telephone"><a href="tel:+380978074090">+38(097)807 40 90</a></p>
                  </div>
                  <div className="designer">
                     <a target="_blank" title="Mail" href="mailto:design4u.bog.a@gmail.com">
                        Design by Bog.A <span>design4u.bog.a@gmail.com</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer;
