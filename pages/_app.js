// import App from 'next/app'

import "../public/assets/css/demo.css";
import "../public/assets/css/now-ui-dashboard.css";
import "bootstrap/dist/css/bootstrap.css";
import "../public/assets/scss/now-ui-dashboard.scss?v1.2.0";
import { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../src/helpers/apolloClient";
import ContactUs from "components/ContactUs.js";
import CookieConsent from "components/CookieConsent";
import LandingNavbar from "../src/components/Navbars/LandingNavbar";
import AOS from "aos";
import { CookiesProvider } from "react-cookie";
import "aos/dist/aos.css";
import HttpsRedirect from "react-https-redirect";
import SelectCalendylDateModal from "../src/components/SelectCalendlyDateModal";
import CtaFixed from "../src/components/CtaFixed";
import LandingFooter from "components/Footer/LandingFooter";
import MobileNavbar from "../src/components/Navbars/MobileNavbar";
function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const [showCookieModal, toggleShowCookieModal] = useState(true);
  const [showCalendlyModal, toggleShowCalendlyModal] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <CookiesProvider>
      <CookieConsent
        showModal={showCookieModal}
        toggleShowModal={toggleShowCookieModal}
      />
      <ApolloProvider client={apolloClient}>
        <HttpsRedirect>
        
       
          {width > 800 ? (
            <>
              <CtaFixed toggleShowCalendlyModal={toggleShowCalendlyModal} />
              <SelectCalendylDateModal
                showModal={showCalendlyModal}
                toggleShowCalendlyModal={toggleShowCalendlyModal}
              />

              <LandingNavbar {...pageProps} />
            </>
          ) : <MobileNavbar {...pageProps}/>}
          {!showCookieModal && (
            <>
            <Component
              {...pageProps}
              toggleShowCalendlyModal={toggleShowCalendlyModal}
            />
             {width > 800 && (
            <div className={"d-none d-md-block"}>
            <LandingFooter />
           
          </div>)}
          </>
          )}
          {/* <Component {...pageProps} cookieConsentVisible={showCookieModal}/> */}
        </HttpsRedirect>
      </ApolloProvider>
    </CookiesProvider>
  );
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

export default MyApp;
