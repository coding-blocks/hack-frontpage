/* eslint-disable */

export default ({ app }) => {
  /*
  ** Only run on client-side and only in production mode
  */
  // if (process.env.NODE_ENV !== 'production') return

  /*
  ** Include Google Analytics Script
  */
  debugger
  var s = document.createElement( 'script' );
  s.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-83327907-12');
  document.body.appendChild( s );
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-83327907-12');

  /*
  ** Include Google Tag Manager Script
  */
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TWLQ78S');
}