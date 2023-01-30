import LandingFooter from "components/Footer/LandingFooter";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta name="robots" content="noindex,nofollow" /> */}
          <meta charset="utf-8" />
          {/* <link rel="shortcut icon" href="../public/assets/favicon.ico" /> */}
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta http-equiv="Content-Security-Policy" content=" object-src 'none'; 'unsafe-inline'"/>
          {/* <link rel="manifest" href="/manifest.json" /> */}

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat&family=La+Belle+Aurore&family=Nothing+You+Could+Do&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Qwigley&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Fuggles&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
            rel="stylesheet"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
            integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
            crossorigin=""
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Whisper&display=swap"
            rel="stylesheet"
          />

          <title key={"title"}>Ihr Wein Investment - professionell, transparent, zeitgemäß.</title>

          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
            crossorigin="anonymous"
          />
  <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/63d393d2c2f1ac1e202fdf91/1gnp7is08';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();`,
      }}>
      
      </script>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
          <link rel="manifest" href="/site.webmanifest" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Sacramento&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Taviraj&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.6/jquery.fullPage.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/aos@next/dist/aos.css"
          />

          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />


<script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-243075706-1"
          ></script>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", 'UA-243075706-1');`,
            }}
          />




        </Head>
        <body>
          <Main />
          <NextScript />
         
          <script
            src="https://nethunt.com/service/automation/forms/620a4817eab7f0495a741161?embed=script"
            async="async"
          ></script>{" "}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
