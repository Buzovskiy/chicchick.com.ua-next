import {Fragment} from "react";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OurService from "@/components/OurService";

export default function Home() {
   return (
      <Fragment>
         <Hero/>
         <AboutUs/>
         <OurService/>
      </Fragment>
   );
}
