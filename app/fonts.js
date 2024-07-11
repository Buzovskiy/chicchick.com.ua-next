import localFont from 'next/font/local';


const ShantellSans = localFont({
   src: '../public/fonts/Shantell_Sans/ShantellSans-VariableFont_BNCE,INFM,SPAC,wght.ttf',
   variable: '--shantell-sans-font'
});

const EvolventaRegular = localFont({
   src: '../public/fonts/evolventa/Evolventa-Regular.ttf',
   variable: '--evolventa-ragular-font'
});

export {ShantellSans, EvolventaRegular};