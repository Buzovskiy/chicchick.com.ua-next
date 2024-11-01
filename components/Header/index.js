'use client';
import {useEffect, useState} from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import {siteUrl} from "@/utils/urls";

const Header = () => {
   const [topMenuClass, topMenuClassSet] = useState('');
   const [phone, setPhone] = useState('');
   const [phoneIso, setPhoneIso] = useState('');

   const topMenuClickHandler = (event) => {
      event.preventDefault();
      topMenuClassSet(topMenuClass ? '' : 'active');
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
            setPhone(data.top_header_phone);
            setPhoneIso(data.top_header_phone_iso);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      }

      fetchData();
   }, [])

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
                           <li><Link href={siteUrl('#aboutUs')}>ПРО НАС</Link></li>
                           <li><Link href={siteUrl("#ourService")}>Послуги</Link></li>
                           <li><Link href={siteUrl("#whyUs")}>Переваги</Link></li>
                           <li><Link href={siteUrl("#FAQ")}>Запитання</Link></li>
                           <li><Link href={siteUrl("#ourTeam")}>команда</Link></li>
                           <li><Link href={siteUrl("#footer")}>Контакти</Link></li>
                        </ul>
                     </div>
                     <div className="telephone">
                        <a className="phone" href={`tel:${phoneIso}`}>{phone}</a>
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
                        <Link href={`tel:${phoneIso}`} className="phone--mobile">
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
                           <li><Link id="home" className="menu-item" href={siteUrl('#aboutUs')}>Про нас</Link></li>
                           <li><Link id="about" className="menu-item" href={siteUrl('#ourService')}>Послуги</Link></li>
                           <li><Link id="contact" className="menu-item" href={siteUrl('#whyUs')}>Переваги</Link></li>
                           <li><Link id="contact" className="menu-item" href={siteUrl('#FAQ')}>Запитання</Link></li>
                           <li><Link id="contact" className="menu-item" href={siteUrl('#ourTeam')}>команда</Link></li>
                           <li><Link id="contact" className="menu-item" href={siteUrl('#footer')}>Контакти</Link></li>
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
