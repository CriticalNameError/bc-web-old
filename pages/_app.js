// import App from 'next/app'

import '../public/assets/css/demo.css';
import '../public/assets/css/now-ui-dashboard.css';
import "bootstrap/dist/css/bootstrap.css";
import "../public/assets/scss/now-ui-dashboard.scss?v1.2.0";

import LandingNavbar from "../src/components/Navbars/LandingNavbar";;
function MyApp({ Component, pageProps }) {
    
    return <><LandingNavbar {...pageProps} /><Component {...pageProps} /></>
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp