function siteUrl(url){
   return process.env.NEXT_PUBLIC_HOST.replace(/\/$/) + '/' + url.replace(/^\//);
}

export {siteUrl};