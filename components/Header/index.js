import "./style.css";

const Header = () => {
   return (
      <header>
         <div className="container">
            <div className="row py-4">
               <div className="header-wrapper">
                  <img className="header-stripe-vertical" src='/img/header-stripe-vertical.png' alt="Дитяча перукарня"/>
                  <div className="col-lg-2 site-logo">
                     <a href="/">
                        <img src="/img/logo.png" alt="Дитяча перукарня"/>
                     </a>
                  </div>
                  <div className="site-nav">
                     <ul>
                        <li>Про нас</li>
                        <li>Послуги</li>
                        <li>Переваги</li>
                        <li>Запитання</li>
                        <li>Відгуки</li>
                        <li>Контакти</li>
                     </ul>
                  </div>
                  <div className="telephone">
                     <a className="phone" href="tel:+38O978O74O9O">+38 (O97) 8O7 4O 9O</a>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
