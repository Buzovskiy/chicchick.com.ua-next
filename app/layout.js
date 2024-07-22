import {ShantellSans, EvolventaRegular} from "@/app/fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

import '@/styles/bootstrap-grid.css';
import "@/styles/reset.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "@/styles/globals.css";
import {getMetaTagBySlug} from "@/api/MetaTagsAPI";


export async function generateMetadata({params, searchParams}, parent) {
   const response = await getMetaTagBySlug('main');
   const defaultData = {metaTitle: 'Chic Chick', metaDescription: 'Chic Chick'};
   const metaTag = response.ok ? await response.json(): defaultData;

   return {
      title: metaTag.metaTitle,
      description: metaTag.metaDescription,
      openGraph: {
         images: [process.env.NEXT_PUBLIC_HOST+'/img/og-image.png'],
      },
   }
}

export default function RootLayout({children}) {

   return (
      <html lang="uk">
      <head>
         <link rel="icon" href="/favicon.ico?1" sizes="any"/>
      </head>
      <body className={`${EvolventaRegular.variable} ${ShantellSans.variable}`}>
      <Image
         width={0}
         height={0}
         src="/img/body-stripe-vertical.png"
         alt="Дитяча перукарня"
         sizes="100wv"
         className="body-stripe-vertical"
         style={{'width': '92px', 'height': '481px'}}
      />
      <Header/>
      {children}
      <Footer/>
      </body>
      </html>
   );
}