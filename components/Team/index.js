import style from './team.module.css';
import Carousel from "@/components/Team/Carousel";

const Team = () => {

   return (
      <div className={'container'}>
         <div className="row py-5">
            <div>
               <div className="section-heading">Наша команда</div>
               <div className="team__container"><Carousel/></div>
            </div>
         </div>
      </div>
   );
};

export default Team;
