import './style.css'
import Image from "next/image";


const Footer = async () => {
   let social = []
   const responseSocial = await fetch(`${process.env.NEXT_PUBLIC_API}/social/`, {cache: "no-store"});
   if (responseSocial.ok === true) {
      social = await responseSocial.json()
   }

   let salons = []
   const responseSalons = await fetch(`${process.env.NEXT_PUBLIC_API}/salon/list/`, {cache: "no-store"});
   if (responseSalons.ok === true) {
      salons = await responseSalons.json()
   }

   return (
      <div className="container section footer" id="footer">
         <div className="row py-5">
            <div className="footer__wrapper">
               <div className="footer__social">
                  <div className="footer__logo-social-wrapper">
                     <div className="footer__logo">
                        <Image
                           src="/img/logo-footer.png"
                           alt="Замовити візит"
                           width={0}
                           height={0}
                           sizes="100vw"
                        />
                     </div>
                     <div className="footer__social__wrapper">
                        {social.map(item => (
                           <div key={item.id}>
                              <a href={item.link} title={item.title}>
                                 <Image
                                    className="icon-shadow"
                                    src={item.iconUrl}
                                    alt="Замовити візит"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{'width': '100%', 'height': 'auto'}}
                                 />
                              </a>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="footer__contacts">
                  <div className="footer__contacts__heading">
                     Запрошуємо вас за адресами
                  </div>
                  {salons.map(salon => (
                     <div className="footer__location" key={salon.id}>
                        <p className="address">{salon.address}</p>
                        {salon.phones.map(phone => (
                           <p className="telephone" key={phone.id}><a href={`tel:${phone.phoneIso}`}>{phone.phone}</a></p>
                        ))}
                     </div>
                  ))}
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
