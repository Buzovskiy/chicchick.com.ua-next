'use client';
import {useState} from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
   const [topMenuClass, topMenuClassSet] = useState('');
   const topMenuClickHandler = (event) => {
      event.preventDefault();
      topMenuClassSet(topMenuClass ? '' : 'active');
   }

   return (
      <>
         <header>
            <div className="container">
               <div className="row pt-4">
                  <div className="header-wrapper">
                     <div className="col-lg-2 site-logo">
                        <a href="/">
                           <Image
                              width={0}
                              height={0}
                              sizes='100vw'
                              src="/img/logo.png"
                              alt="Дитяча перукарня"
                              style={{width: '100%'}}
                           />
                        </a>
                     </div>
                     <div className="site-nav">
                        <ul>
                           <li><Link href="#aboutUs">ПРО НАС</Link></li>
                           <li><Link href="#ourService">Послуги</Link></li>
                           <li><Link href="#whyUs">Переваги</Link></li>
                           <li><Link href="#FAQ">Запитання</Link></li>
                           <li><Link href="#ourTeam">команда</Link></li>
                           <li><Link href="#footer">Контакти</Link></li>
                        </ul>
                     </div>
                     <div className="telephone">
                        <a className="phone" href="tel:+38O978O74O9O">+38 (O97) 8O7 4O 9O</a>
                     </div>
                  </div>
                  <div className="header-wrapper--mobile">
                     <div className="header-top--mobile">
                        <Link href="/" title="Додому" className="logo--mobile">
                           <Image
                              width={131}
                              height={39}
                              src="/img/logo.png"
                              alt="Дитяча перукарня"
                           />
                        </Link>
                        <Link href="tel:+38O978O74O9O" className="phone--mobile">
                           <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{"width": "36px", "height": "36px"}}
                              src="/img/phone-icon.png"
                              alt="Подзвонити"
                           />
                        </Link>
                        <span onClick={topMenuClickHandler} className="header-btn">
                           <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{"width": "43px", "height": "32px"}}
                              src="/img/menu-icon.png"
                              alt="Дитяча перукарня"
                              className={`menu-open ${topMenuClass}`}
                           />
                           <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{"width": "43px", "height": "32px"}}
                              src="/img/menu-icon-close.png"
                              alt="Дитяча перукарня"
                              className={`menu-close ${topMenuClass}`}
                           />
                        </span>
                     </div>
                     <div className={`top-menu--mobile ${topMenuClass}`}>
                        <Image
                           width={0}
                           height={0}
                           sizes="100vw"
                           style={{width: 'auto', height: 'auto', maxHeight: '100%'}}
                           src="/img/top-menu-stripe.png"
                           alt="Дитяча перукарня"
                           className="header-stripe"
                        />
                        <ul>
                           <li><Link id="home" className="menu-item" href="#aboutUs">Про нас</Link></li>
                           <li><Link id="about" className="menu-item" href="#ourService">Послуги</Link></li>
                           <li><Link id="contact" className="menu-item" href="#whyUs">Переваги</Link></li>
                           <li><Link id="contact" className="menu-item" href="#FAQ">Запитання</Link></li>
                           <li><Link id="contact" className="menu-item" href="#ourTeam">команда</Link></li>
                           <li><Link id="contact" className="menu-item" href="#footer">Контакти</Link></li>
                        </ul>
                        <Image
                           width={0}
                           height={0}
                           sizes="100vw"
                           style={{width: '100%', height: 'auto'}}
                           src="/img/top-menu-stripe-bottom.png"
                           alt="Дитяча перукарня"
                           className="header-stripe-bottom"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>

   );
};

export default Header;
