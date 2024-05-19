import {Fragment} from "react";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OurService from "@/components/OurService";
import BookCall from "@/components/BookCall";
import WhyUs from "@/components/WhyUs";
import Gift from "@/components/Gift";
import Team from "@/components/Team";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import GalleryMain from "@/components/GalleryMain";

export default function Home() {
   return (
      <Fragment>
         <Hero/>
         <AboutUs/>
         <OurService/>
         <BookCall/>
         <WhyUs/>
         <Gift/>
         <Team/>
         {/*<Schedule/>*/}
         {/*<FAQ/>*/}
         {/*<GalleryMain/>*/}
      </Fragment>
   );
}
