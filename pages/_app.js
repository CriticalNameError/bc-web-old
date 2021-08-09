// import App from 'next/app'

import "../public/assets/css/demo.css";
import "../public/assets/css/now-ui-dashboard.css";
import "bootstrap/dist/css/bootstrap.css";
import "../public/assets/scss/now-ui-dashboard.scss?v1.2.0";
import { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../src/helpers/apolloClient";
import ContactUs from "components/ContactUs.js";

import LandingNavbar from "../src/components/Navbars/LandingNavbar";
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <ApolloProvider client={apolloClient}>
      <LandingNavbar {...pageProps} />
      <Component {...pageProps} />
    </ApolloProvider>
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
