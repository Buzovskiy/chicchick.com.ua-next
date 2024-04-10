import { Shantell_Sans } from "next/font/google";
import localFont from 'next/font/local';

const ShantellSans = Shantell_Sans({
   subsets: ['cyrillic', 'cyrillic-ext', 'latin'],
   variable: '--shantell-sans-font'
});

const EvolventaRegular = localFont({
   src: '../public/fonts/evolventa/Evolventa-Regular.ttf',
   variable: '--evolventa-ragular-font'
});

export {ShantellSans, EvolventaRegular};