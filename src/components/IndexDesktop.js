import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic";
import { Chrono } from "react-chrono";
import { ImageFromCms } from "helpers/utils";
import LandingFooter from "components/Footer/LandingFooter";
import CustomModal from "../helpers/CustomModal";
import Ai from "../icons/ai";
import VirtualAssistant2 from "../icons/virtual-assistant-2";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "react-vertical-timeline-component/style.min.css";
import BMeeting from "icons/b-meeting";
import Podium from "icons/podium";
import Questionaire from "icons/questionnaire";
import MobilePhone from "icons/mobile-phone";
import WineList from "icons/wine-list";
import StorageUnit from "icons/storage-unit";
import World from "icons/world";
import Handshake from "icons/handshake";
import DeliveryFast from "icons/delivery-fast";
import Handout from "icons/handout";
import LogIn from "icons/log-in";
import DownArrow from "icons/down-arrow";
import CheckSingle from "icons/check-single";
import LogoSublineLavendel from "icons/logo_subline_lavendel";
import { primary, primary_t50, primary_t80, cta } from "helpers/colorScheme";
import GoogleAnalytics from "helpers/GoogleAnalytics";
import CtaButton from "components/CtaButton";
// import SelectCalendlyDate from "components/SelectCalendlyDate";
import "react-accessible-accordion/dist/fancy-example.css";
import Award1 from "icons/award_1";
import Award2 from "icons/award_2";
import Award3 from "icons/award_3";
import Partner1 from "icons/partner_1";
import Partner2 from "icons/partner_2";
import Partner3 from "icons/partner_3";
import ATime from "icons/a-time";
import MockupLanding from "icons/mockup_landing";
import PlayAudio from "components/PlayPodcast";
import OfferPromotionSlider from "components/OfferPromotionSlider";
import ReactFullpage from "@fullpage/react-fullpage";
import router, { withRouter } from "next/router";
import Particles from "react-tsparticles";
import PreferencesForm from "components/PreferencesForm";
import RightArrow from "icons/right-arrow";
import ReactPlayer from "react-player";
import Anagram100 from "icons/Anagram-100";
import Atom from "icons/atom";
import Security from "icons/security";
import TriangleRight1 from "icons/triangle-right-1";
// import Swiper from "swiper";
import { useSwipeable } from "react-swipeable";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemHeading,
} from "react-accessible-accordion";
import LoadingOverlay from "react-loading-overlay";
import Head from "next/head";

const songs = [
  {
    url: "path/to/mp3",
    cover: "path/to/jpeg",
    artist: {
      name: "Metallica",
      song: "Fuel",
    },
  },
  {
    url: "path/to/your/mp3",
    artist: {
      name: "X Japan",
      song: "Art of Life",
    },
  },
];

const config = {
  delta: 10, // min distance(px) before a swipe starts. *See Notes*
  preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
  trackTouch: true, // track touch input
  trackMouse: false, // track mouse input
  rotationAngle: 0, // set a rotation angle
  swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
  touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
};

const DynamicLivexPriceChart = dynamic(() => import("./LivexPriceChart"), {
  ssr: false,
});

const DynamicLiveData = dynamic(() => import("./LiveData"), {
  ssr: false,
});

function mod(n, m) {
  return ((n % m) + m) % m;
}

const IndexDesktop = (props) => {
  const [showModal, toggleShowModal] = useState(false);
  const [markup, changeMarkup] = useState(null);
  const [section, setSection] = useState("welcome");
  const [width, setWidth] = useState(1300);
  const [showTestimonal, setShowTestimonial] = useState(0);
  const [showVideoModal, toggleShowVideoModal] = useState(false);
  const [watchVideoUrl, setWatchVideoUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePill, setActivePill] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(false);
  const [maxServicesCardHeight, setMaxServicesCardHeight] = useState(null);
  const [finishedLoadingDocument, toggleFinishedLoadingDocument] =
    useState(false);
  const [videoReady, toggleVideoReady] = useState(false);
  const [cookieConsentVisible, toggleCookieConsentVisible] = useState(
    props.cookieConsentVisible
  );
  const [inputPosition, setInputPosition] = useState(50);
  // useEffect(() => {
  //   if (width < 1100) {
  //     router.push("/index-mobile");
  //   }
  // }, [width]);
  useEffect(() => {
    toggleCookieConsentVisible(props.cookieConsentVisible);
  }, [props.cookieConsentVisible]);
  useEffect(() => {
    try {
      toggleFinishedLoadingDocument(true);
      let vn = document.getElementById("vert-nav");
      let ct = document.getElementById("contact");

      // document.getElementById("side-cta").style.display = "none";

      vn.style.boxShadow = "none";
      vn.classList.toggle("bg-white");
      vn.classList.remove("pt-5");
      vn.classList.remove("py-5");
      ct.classList.add("d-none");
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    let videoElement = document.getElementById("video-background");

    videoElement.onloadeddata = function () {
      //Video should now be loaded but we can add a second check

      toggleVideoReady(true);
      console.log(videoElement.readyState);
      videoElement.play();

      let swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        autoHeight: false,
        centeredSlides: true,
        slidesPerView: 1,
        slideToClickedSlide: true,

        autoplay: {
          delay: 3500,
          disableOnInteraction: true,
        },
        // Responsive breakpoints

        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        /*scrollbar: {
          el: '.swiper-scrollbar',
        },*/
      });
    };
  }, [finishedLoadingDocument]);

  useEffect(
    (props) => {
      let vn = document.getElementById("vert-nav");
      if (section == "letsgo") {
        let vn = document.getElementById("vert-nav");
        vn.classList.add("fadeOut");
        try {
          vn.style.zIndex = "-1";
        } catch (error) {
          console.log(error);
        }

        // window.fullpage_api.setAllowScrolling(false, "down");
        // window.fullpage_api.setAllowScrolling(false, "up");
      } else {
        try {
          vn.classList.remove("fadeOut");
          window.fullpage_api.setAllowScrolling(true, "down");
          window.fullpage_api.setAllowScrolling(true, "up");
          vn.classList.add("fadeIn");

          vn.style.zIndex = "100";
        } catch (error) {
          console.log(error);
        }
      }

      if (section == "welcome") {
        try {
          document.getElementById("welcome-slide").classList.remove("fadeOut");
          document
            .getElementById("welcome-slide")
            .classList.add("d-block", "fadeIn");
        } catch {
          console.log("not fadedOut yet");
        }
      } else {
        try {
          document.getElementById("welcome-slide").classList.remove("fadeIn");

          document.getElementById("welcome-slide").classList.add("fadeOut");
        } catch (error) {
          console.log(error);
        }
      }

      if (section == "facts") {
        try {
          document.getElementById("facts-slide").classList.remove("fadeOut");
          document
            .getElementById("facts-slide")
            .classList.add("d-block", "fadeIn");
        } catch {
          console.log("not fadedOut yet");
        }
      } else {
        try {
          document.getElementById("facts-slide").classList.remove("fadeIn");

          document.getElementById("facts-slide").classList.add("fadeOut");
        } catch (error) {
          console.log(error);
        }
      }

      if (section == "process") {
        try {
          document.getElementById("process-slide").classList.remove("fadeOut");
          document
            .getElementById("process-slide")
            .classList.add("d-block", "fadeIn");
        } catch {
          console.log("not fadedOut yet");
        }
      } else {
        try {
          document.getElementById("process-slide").classList.remove("fadeIn");

          document.getElementById("process-slide").classList.add("fadeOut");
        } catch (error) {
          console.log(error);
        }
      }

      if (section == "faq") {
        try {
          document.getElementById("faq-slide").classList.remove("fadeOut");
          document.getElementById("faq-slide").classList.add("fadeIn");
        } catch {
          console.log("not fadedOut yet");
        }
      } else {
        try {
          document.getElementById("faq-slide").classList.remove("fadeIn");

          document.getElementById("faq-slide").classList.add("fadeOut");
        } catch (error) {
          console.log(error);
        }
      }

      if (section == "book-appointment") {
        try {
          document.getElementById("calendly-slide").classList.remove("fadeOut");
          document.getElementById("calendly-slide").classList.add("fadeIn");
        } catch {
          console.log("not fadedOut yet");
        }
      } else {
        try {
          document.getElementById("calendly-slide").classList.remove("fadeIn");

          document.getElementById("calendly-slide").classList.add("fadeOut");
        } catch (error) {
          console.log(error);
        }
      }

      //  console.log(window.fullpage_api.getActiveSection())
    },
    [section]
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    const getMaximumServicesCardHeight = () => {
      let cards = document.getElementsByClassName("services-card");
      //let cardsHeights = cards.map(c => c.style.height);
      let cardsArr = Array.prototype.slice.call(cards);
      let cardHeight = cardsArr.map((c) => c.clientHeight);
      setMaxServicesCardHeight(Math.max(...cardHeight));
    };
    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleResize();
    getMaximumServicesCardHeight();
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", getMaximumServicesCardHeight);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", getMaximumServicesCardHeight);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const testimonials = {
    stengel: (
      <div>
        {" "}
        <b>Warum investieren Sie in Sachwerte?</b>
        <br />
        <br />
        Ich investiere in Sachwerte, da diese einen natürlichen Inflationsschutz
        bieten. Sachwerte sind unabhängig von Nominalwerten und haben einen
        inhärenten Wert. Dies gilt insbesondere für bekannte Marken, da diese
        einen Sammlerwert besitzen und zudem ein breiteres Publikum
        interessieren. Hier bleibt die Nachfrage kontinuierlich hoch.
        <br />
        <br />
        <b>Warum haben Sie sich für ein Weininvestment entschieden?</b> <br />
        <br />
        Als Finanzfachmann beschäftigte ich mich seit vielen Jahrzehnten mit den
        unterschiedlichsten Anlagemöglichkeiten. In der Assetklasse “Sachwerte”
        habe ich mich insbesondere für Wein entschieden, da die Weine meines
        Portfolios teilweise schon seit Jahrhunderten zu Spitzenpreisen
        gehandelt werden. Zudem ist Wein der einzige Sachwert, bei dem sich die
        Qualität durch die Lagerung verbessert. Durch den Konsum sinkt
        kontinuierlich das Angebot, während die Nachfrage mit Eintritt der
        Trinkreife steigt und sich infolgedessen der Wert der Weine erhöht.
        <br />
        <br />
        <b>Warum haben Sie sich für Berghaus & Cie. entschieden? </b>
        <br />
        <br />
        Die kompetente und freundliche Beratung des Teams hat mich von Beginn an
        angesprochen. Neben dem stets angenehmen persönlichen Austausch
        ermöglicht mir gleichzeitig das digitale Weindepot von Berghaus & Cie.
        einen detaillierten Überblick meines Portfolios. Zudem vertraue ich auf
        die professionelle Lagerung in der Schweiz mit der auch steuerliche
        Vorteile einhergehen.{" "}
      </div>
    ),
    neuhaus: (
      <>
        <b>Warum investieren Sie in Sachwerte?</b>
        <br />
        <br />
        Als Certified Financial Planner und Vermögensverwalter habe ich einen
        Teil meines Vermögens in Sachwerte investiert, die nicht mit dem
        Kapitalmarkt korrelieren. Diese setzte ich als stabilisierende
        Beimischung in meiner Asset Allocation ein, denn bei einer ähnlichen
        Rendite sind sie wesentlich weniger volatil als beispielsweise Aktien.
        Reduziertes Kursrisiko bei gleichem Ertrag optimiert somit mein
        Rendite-Risiko-Verhältnis im Portfolio. Gerade in inflationären Zeiten
        erweisen sich Sachwerte als besonders substantiell in der
        Vermögenssicherung.
        <br />
        <br />
        <b>Warum haben Sie sich für ein Weininvestment entschieden?</b> 
        <br />
        <br />
        Bei meinen Sachwertinvestments ist es mir wichtig, immer auch im
        absoluten Luxussegment zu investieren. Die Weine im Angebot von Berghaus
        &amp; Cie. zählen teilweise seit Jahrhunderten zu den aller edelsten
        Tropfen und stellen ein Luxuskonsumgut dar. Zudem hat mich große
        Transparenz und gute Handelbarkeit von Wein über die Börse Liv-Ex und
        den Place de Bordeaux angesprochen.
        <br />
        <br />
        <b>Warum haben Sie sich für Berghaus &amp; Cie. entschieden?</b> 
        <br />
        <br />
        Das Team von Berghaus &amp; Cie. hat mich durch die guten
        Kapitalmarktkenntnisse auf der einen Seite und die herausragende
        Weinexpertise auf der anderen Seite überzeugt. Zudem war mir eine
        Beratung auf “Deutsch” sowie die Einlagerung in Kontinentaleuropa in der
        Schweiz sehr wichtig. Die damit einhergehenden steuerlichen Vorteile
        runden den Service für mich als Steuerberater ab.
      </>
    ),
  };

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      console.log("User Swiped!", eventData);
      if (eventData.dir == "Right" && activePill > 0) {
        setActivePill(activePill - 1);
      }
      if (
        eventData.dir == "Left" &&
        activePill < Object.keys(pillContent).length - 1
      ) {
        setActivePill(activePill + 1);
      }
      if (
        eventData.dir == "Left" &&
        activePill == Object.keys(pillContent).length - 1
      ) {
        moveDownAfterDelay();
      }
    },
    ...config,
  });

  const playVideoAfterDelay = () =>
    setTimeout(() => {
      document.getElementById("explainer-video").play();
    }, 1000);

  const pillContent = {
    0: (
      <Row className={"w-100"} style={{ height: "300px" }}>
        <Col xs={6} className={"my-auto text-light offset-1"}>
          <h3 className={"text-left"}>
            {" "}
            <Ai width={"34px"} strokewidth={3}></Ai> Start
          </h3>
          <Row>
            <Col xs={10}>
              <p className={"text-justify"}>
                Unsere wineTelligence ist der Kick-Starter für Ihr Wein
                Investment. Mit ihr erhalten Sie in kürzester Zeit eine erste
                Portfolio-Indikation auf der Basis von künstlicher Intelligenz.
              </p>
            </Col>
            <Col xs={1} className={"my-auto text-light"}>
              {" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setActivePill(activePill + 1)}
              >
                <RightArrow width={"20px"} strokewidth={4} />
              </span>
            </Col>
          </Row>
        </Col>
        <Col
          xs={5}
          style={{
            height: "300px",
            backgroundImage:
              "url('https://bcassets.s3.amazonaws.com/static/images/ai_bg.original.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0px 0px 15px 0px",
          }}
        ></Col>
      </Row>
    ),
    1: (
      <Row className={"w-100"} style={{ height: "300px" }}>
        <Col xs={6} className={"my-auto text-light offset-1"}>
          <h3 className={"text-left"}>
            <VirtualAssistant2 width={"34px"} strokewidth={3} /> Beratung
          </h3>
          <Row>
            <Col xs={10}>
              <p className={"text-justify"}>
                Für alle weiteren Fragen zum Ablauf Ihres Investments generell,
                sowie für Fragen zur Weinauswahl, Lagerung und Verkauf stehen
                wir Ihnen gerne zur Verfügung. Buchen Sie einfach einen
                kostenlosen Beratungstermin mit uns.
                <br />
                <br />
                <a
                  href={"https://calendly.com/berghausundcie/beratungsgesprach"}
                  target={"_blank"}
                >
                  <button
                    className={"btn btn-sm text-white"}
                    style={{ background: cta }}
                  >
                    Beratungsgespräch vereinbaren
                  </button>
                </a>
              </p>
            </Col>
            <Col xs={1} className={"my-auto text-light"}>
              {" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setActivePill(activePill + 1)}
              >
                <RightArrow width={"20px"} strokewidth={4} />
              </span>
            </Col>
          </Row>
        </Col>
        <Col
          xs={5}
          style={{
            height: "300px",
            backgroundImage:
              "url('https://bcassets.s3.amazonaws.com/static/images/berghaus_consultation.original.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0px 0px 15px 0px",
          }}
        ></Col>
      </Row>
    ),
    2: (
      <Row className={"w-100"} style={{ height: "300px" }}>
        <Col xs={6} className={"my-auto text-light offset-1"}>
          <h3 className={"text-left"}>
            <StorageUnit width={"34px"} strokewidth={3} /> Lagerung
          </h3>
          <Row>
            <Col xs={10}>
              <p className={"text-justify"}>
                Nach der Bezahlung Ihrer Weine werden diese innerhalb von 3-6
                Wochen in den Genfer Zollfreihafen transportiert. Dort lagern
                Sie ab jetzt zu 100% versichert sowie klima- und
                temperaturgeführt.{" "}
              </p>
            </Col>
            <Col xs={1} className={"my-auto text-light"}>
              {" "}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setActivePill(activePill + 1);
                  console.log("Klicked!");
                }}
              >
                <RightArrow width={"20px"} strokewidth={4} />
              </span>
            </Col>
          </Row>
        </Col>
        <Col
          xs={5}
          style={{
            height: "300px",
            backgroundImage:
              "url('https://bcassets.s3.amazonaws.com/static/images/storage.original.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0px 0px 15px 0px",
          }}
        ></Col>
      </Row>
    ),
    3: (
      <Row className={"w-100"} style={{ height: "300px" }}>
        <Col xs={6} className={"my-auto text-light offset-1"}>
          <h3 className={"text-left"}>
            {" "}
            <Handout width={"34px"} strokewidth={3} /> Verkauf
          </h3>
          <Row>
            <Col xs={10}>
              <p className={"text-justify"}>
                Sofern Sie dies wünschen, übernehmen wir nach einer empfohlenen
                Lagerdauer von etwa 5-10 Jahren den Verkauf Ihrer Weine. Wir
                kennen den Markt und setzen uns dafür ein, den Wein zum
                Bestpreis für Sie zu veräußern.
              </p>
            </Col>
            <Col xs={1} className={"my-auto text-light"}>
              {" "}
              <a href={"#letsgo"}>
                <span style={{ cursor: "pointer", color: "white" }}>
                  <RightArrow width={"20px"} strokewidth={4} />
                </span>
              </a>
            </Col>
          </Row>
        </Col>
        <Col
          xs={5}
          style={{
            height: "300px",
            backgroundImage:
              "url('https://bcassets.s3.amazonaws.com/static/images/harvest.original.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "0px 0px 15px 0px",
          }}
        ></Col>
      </Row>
    ),
  };

  const pillsCardColors = ["#A38CC2", "#597549", "#91AABF", "#80C488"];

  const testis = [
    <div class="carousel-inner ">
      <div class="carousel-item active animated fadeIn slow">
        <div class="container">
          <div class="row my-auto">
            <div class="col-md-5 p-2 pb-md-5 ms-lg-auto">
              <div class="my-auto">
                <img
                  class="w-100 border-radius-md my-auto"
                  src="https://bcassets.s3.amazonaws.com/static/images/Dr.-Ruediger-von-Stengel.jpg_186589999-square.original.png"
                  alt="First slide"
                  style={{
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
                    transform: "scaleX(-1)",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
            <div class="col-lg-5 col-md-7 me-lg-auto position-relative">
              <p class="text-sm font-weight-bold mb-1">- Customer Story</p>
              <div class="rating p">
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
              </div>
              <h3 class="text-dark">
                Die kompetente und freundliche Beratung des Teams hat mich von
                Beginn an angesprochen.
              </h3>
              <p class="my-4">
                <i>
                  "Neben dem stets angenehmen persönlichen Austausch ermöglicht
                  mir gleichzeitig das digitale Weindepot von Berghaus & Cie.
                  einen detaillierten Überblick meines Portfolios..."
                  <a
                    className={"text-primary"}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTestimonial("stengel")}
                  >
                    {" "}
                    weiterlesen
                  </a>
                  <br />
                </i>
              </p>
              <div class="author">
                <div>
                  <div class="name ps-2">
                    <b>Dr. Rüdiger von Stengel</b>
                    <div>
                      <small>
                        Gesellschafter - Art-Invest Real Estate Management GmbH
                        & Co. KG
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-25 ms-auto opacity-2 mt-n8">
                <svg
                  width="110px"
                  height="110px"
                  viewBox="0 0 270 270"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>quote-down</title>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z"
                      fill="#48484A"
                      fill-rule="nonzero"
                      transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div class="carousel-inner ">
      <div class="carousel-item active animated fadeIn slow">
        <div class="container">
          <div class="row my-auto">
            <div class="col-md-5 p-2 pb-md-5 ms-lg-auto">
              <div class="my-auto">
                <img
                  class="w-100 border-radius-md my-auto"
                  src="https://bcassets.s3.amazonaws.com/static/images/neuhaus_hq.original.png"
                  alt="First slide"
                  style={{
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
                    transform: "scaleX(-1)",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
            <div class="col-lg-5 col-md-7 me-lg-auto position-relative">
              <p class="text-sm font-weight-bold mb-1">- Customer Story</p>
              <div class="rating p">
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
              </div>
              <h3 class="text-dark">
                Als Certified Financial Planner und Vermögensverwalter habe ich
                [...] in Sachwerte investiert, die nicht mit dem Kapitalmarkt
                korrelieren.
              </h3>
              <p class="my-4">
                <i>
                  "Das Team von Berghaus &amp; Cie. hat mich durch die guten
                  Kapitalmarktkenntnisse auf der einen Seite und die
                  herausragende Weinexpertise auf der anderen Seite
                  überzeugt..."
                  <a
                    className={"text-primary"}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTestimonial("neuhaus")}
                  >
                    {" "}
                    weiterlesen
                  </a>
                  <br />
                </i>
              </p>
              <div class="author">
                <div>
                  <div class="name ps-2">
                    <b>Achim Neuhaus, CFP</b>
                    <div>
                      <small>
                        Vermögensverwalter
                        <br />
                        Inhaber Neuhaus & Partner
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-25 ms-auto opacity-2 mt-n8">
                <svg
                  width="110px"
                  height="110px"
                  viewBox="0 0 270 270"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>quote-down</title>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z"
                      fill="#48484A"
                      fill-rule="nonzero"
                      transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div class="carousel-inner ">
      <div class="carousel-item active animated fadeIn slow">
        <div class="container">
          <div class="row my-auto">
            <div class="col-md-5 p-2 pb-md-5 ms-lg-auto">
              <div class="my-auto">
                <img
                  class="w-100 border-radius-md my-auto"
                  src="https://bcassets.s3.amazonaws.com/static/images/removal.ai_tmp-63fb993394b3e.original.png"
                  alt="First slide"
                  style={{
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
                    transform: "scaleX(-1)",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
            <div class="col-lg-5 col-md-7 me-lg-auto position-relative">
              <p class="text-sm font-weight-bold mb-1">- Customer Story</p>
              <div class="rating p">
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
                <i class="fas fa-star text-warning" aria-hidden="true"></i>
              </div>
              <h3 class="text-dark">
                Eine spannende Geschäftsidee, die mich schnell überzeugt hat.
              </h3>
              <p class="my-4">
                <i>
                  "Wo sonst passen Hobby, Passion und Portfolio-Beimischung so
                  gut zusammen?"
                  {/* <a
                    className={"text-primary"}
                    style={{ cursor: "pointer" }}
                    onClick={() => setActiveTestimonial("stengel")}
                  >
                    {" "}
                    weiterlesen
                  </a> */}
                  <br />
                </i>
              </p>
              <div class="author">
                <div>
                  <div class="name ps-2">
                    <b>Dr. Dirk Ehle</b>
                    <div>
                      <small>
                        Board Member, Advisor, Business Angel
                        <br />
                        ehem. CEO Bayer Animal Health
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-25 ms-auto opacity-2 mt-n8">
                <svg
                  width="110px"
                  height="110px"
                  viewBox="0 0 270 270"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>quote-down</title>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path
                      d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z"
                      fill="#48484A"
                      fill-rule="nonzero"
                      transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) "
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap-reboot.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap-grid.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      </Head>
      <LoadingOverlay
        active={false}
        fadeSpeed={100}
        styles={{
          overlay: (base) => ({
            ...base,
            background: "rgba(255, 255, 255, 1)",
            zIndex: 3000,
            textAlign: "center",
            position: "fixed",
            width: "100%",
            top: 0,
            left: 0,
            height: "100%",
          }),
          spinner: (base) => ({
            ...base,
            width: "100px",
            "& svg circle": {
              stroke: primary,
            },
          }),
          content: (base) => ({
            ...base,
            color: "black",
          }),
        }}
        spinner
      ></LoadingOverlay>

      <Modal
        className={"modal-xl modal-dialog-centered modal-transparent"}
        isOpen={watchVideoUrl}
        toggle={() => {
          setWatchVideoUrl("");
        }}
        style={{ border: 0, backgroundColor: "transparent" }}
      >
        <ModalBody
          className={"p-0 m-0 animated fadeIn slow bg-white"}
          style={{ border: 0 }}
        >
          <iframe
            width="100%"
            height="700px"
            src={watchVideoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            autoplay
          ></iframe>
        </ModalBody>
        {/* <ModalFooter
                  className={"text-center"}
                  style={{ background: "transparent", borderTop: 0 }}
                >
                  <button
                    onClick={() => {
                      fullpageApi.moveTo(4);
                      toggleShowVideoModal(false);
                      document.getElementById("video-background").play();
                    }}
                    className={
                      "mx-auto btn btn-lg bg-cta mt-4 p-3 animated headShake slower infinite "
                    }
                    style={{ fontSize: "18px" }}
                  >
                    wineTelligence ausprobieren
                  </button>
                </ModalFooter> */}
      </Modal>

      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        sectionsColor={["transparent", "transparent", "#bfac82"]}
        anchors={[
          "welcome",
          "facts",
          "process",
          "letsgo",
          "faq",
          "book-appointment",
          "fp-footer",
        ]}
        // autoScrolling={false}
        touchSensitivity={5}
        onLeave={(a, b, c) => {
          setSection(b["anchor"]);
          console.log(a, b["anchor"], c);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <>
              <Modal
                className={"modal-xl modal-dialog-centered modal-transparent"}
                isOpen={activeTestimonial}
                toggle={() => {
                  setActiveTestimonial(false);
                }}
                style={{ border: 0, backgroundColor: "transparent" }}
              >
                <ModalBody
                  className={"p-1 p-md-4 m-0 animated fadeIn slow bg-white"}
                  style={{ border: 0 }}
                >
                  {testimonials[activeTestimonial]}
                </ModalBody>
              </Modal>
              <Modal
                className={"modal-xl modal-dialog-centered modal-transparent"}
                isOpen={showVideoModal}
                toggle={() => {
                  toggleShowVideoModal(!showVideoModal);
                  document.getElementById("explainer-video").pause();
                  document.getElementById("video-background").play();
                }}
                style={{ border: 0, backgroundColor: "transparent" }}
              >
                <ModalBody
                  className={"p-0 m-0 animated fadeIn slow bg-white"}
                  style={{ border: 0 }}
                >
                  <video
                    id="explainer-video"
                    style={{
                      minWidth: "100%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                    webkit-playsinline
                    playsinline
                    controls
                  >
                    <source
                      src="https://bcassets.s3.eu-west-1.amazonaws.com/bc_explainer_desktop.mp4"
                      type="video/mp4"
                    />
                  </video>
                </ModalBody>
                <ModalFooter
                  className={"text-center"}
                  style={{ background: "transparent", borderTop: 0 }}
                >
                  <button
                    onClick={() => {
                      fullpageApi.moveTo(4);
                      toggleShowVideoModal(false);
                      document.getElementById("video-background").play();
                    }}
                    className={
                      "mx-auto btn btn-lg bg-cta mt-4 p-3 animated headShake slower infinite "
                    }
                    style={{ fontSize: "18px" }}
                  >
                    wineTelligence ausprobieren
                  </button>
                </ModalFooter>
              </Modal>
              <ReactFullpage.Wrapper>
                <div className="section">
                  <video
                    autoplay
                    loop
                    id="video-background"
                    className={"d-none"}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      minWidth: "100%",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: "-100",
                    }}
                    muted
                    webkit-playsinline
                    playsinline
                  >
                    <source
                      src="https://bcassets.s3.eu-west-1.amazonaws.com/bc_background_lq.mp4#t=14,44"
                      type="video/mp4"
                    />
                  </video>

                  <div
                    className={" px-0 "}
                    style={{
                      overflowX: "hidden",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      minWidth: "100%",
                      width: "100%",
                      height: "100%",
                      // background: "rgba(255,255,255,0.85)",
                      // backgroundSize: "2px 2px",
                      // zIndex: "-200",
                      // backgroundImage:
                      //   "linear-gradient(to right, rgba(255,255,255, 0.7) 1.5px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 3px, transparent 1px)",
                    }}
                    id={"welcome-slide"}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        minWidth: "100%",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: "0",
                        color: "white",
                        background: "rgba(255,255,255,0.75)",
                      }}
                    ></div>
                    <div className="row h-100">
                      <div
                        className={"col-12 my-auto text-center  "}
                        style={{ zIndex: 500 }}
                      >
                        <div
                          className={"mx-auto my-auto"}
                          // style={{ maxWidth: "750px" }}
                        >
                          <div className={"pl-md-4 mt-2 slower"}>
                            <div className={"row mt-3"}>
                              <div className={"col-12 text-right  slower"}>
                                <div
                                  className={"text-center mx-auto"}
                                  style={{
                                    // width: "50%",
                                    position: "relative",
                                  }}
                                >
                                  {/* <span className={"blink_me"} style={{position: "absolute", top: "15px", left: "15px"}}></span> */}
                                  {/* <img
                                  src={
                                    "https://bcassets.s3.amazonaws.com/static/images/Mouton_Rothschild_2016.width-450.jpegquality-10.png"
                                  }
                                  style={{
                                    height: "300px",
                                    position: "absolute",
                                    left: "25px",
                                    top: "70px",
                                    filter:
                                      "drop-shadow(rgba(0, 0, 0, 0.77) 10px 10px 10px)",
                                    animation: "float 6s ease-in-out infinite",
                                  }}
                                ></img>

                                <DynamicLiveData /> */}
                                  <Row>
                                    <Col>
                                      <div className={" my-auto"}>
                                        {videoReady && (
                                          <>
                                            <span
                                              className={
                                                "p-3 pb-1 pt-0 mb-n3 fade-in-container"
                                              }
                                              style={{
                                                filter:
                                                  "drop-shadow(rgba(100, 100, 100, 0.6) 1px 1px 2px)",
                                                fontSize: "65px",
                                                fontFamily: "'Whisper, cursive",
                                              }}
                                            >
                                              {" "}
                                              <span
                                                className={"fade-in-span pr-3"}
                                                style={{
                                                  fontFamily:
                                                    "'Whisper', cursive",
                                                }}
                                              >
                                                Disruptiv{" "}
                                              </span>
                                              <span
                                                className={"fade-in-span"}
                                                style={{
                                                  fontFamily:
                                                    "'Whisper', cursive",
                                                }}
                                              >
                                                Traditionell.
                                              </span>
                                            </span>
                                            <h1
                                              className={
                                                "pb-0 mb-3 fade-in-container"
                                              }
                                              style={{
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              <span
                                                className={"fade-in-span pr-1"}
                                              >
                                                Ihr
                                              </span>
                                              <span
                                                className={"fade-in-span pr-1"}
                                              >
                                                Wein Investment
                                              </span>
                                              {/* <span className={"fade-in-span pr-1"} >in</span>
                                         <span className={"fade-in-span pr-1"} >den</span>
                                         <span className={"fade-in-span pr-1"} >besten</span>
                                         <span className={"fade-in-span pr-1"} >Händen</span> */}
                                              <span
                                                className={"fade-in-span pr-1"}
                                              >
                                                -
                                              </span>
                                              <span
                                                className={"fade-in-span pr-1"}
                                              >
                                                professionell,
                                              </span>
                                              <span
                                                className={"fade-in-span pr-1"}
                                              >
                                                transparent,{" "}
                                              </span>
                                              <span
                                                className={"fade-in-span pr-1"}
                                              >
                                                zeitgemäß.
                                              </span>
                                            </h1>
                                          </>
                                        )}
                                        <center>
                                          <h2
                                            className={"mb-5"}
                                            style={{
                                              fontSize: "16px",
                                              maxWidth: "650px",
                                            }}
                                          >
                                            Berghaus & Cie. ermöglicht Ihnen das
                                            zielgerichtete Investieren in den
                                            Markt der exquisiten Weine, einen
                                            der spezialisiertesten Märkte der
                                            Welt.
                                          </h2>
                                        </center>

                                        <span
                                          onClick={() => {
                                            toggleShowVideoModal(true);
                                            playVideoAfterDelay();
                                            document
                                              .getElementById(
                                                "video-background"
                                              )
                                              .pause();
                                          }}
                                        >
                                          <span
                                            class="play-btn mx-auto"
                                            href="#"
                                            style={{
                                              transform: props.mobile
                                                ? "scale(0.9)"
                                                : "scale(1.2)",

                                              background: "transparent",
                                              cursor: "pointer",
                                            }}
                                          >
                                            <div
                                              className={
                                                "animated pulse infinite slower"
                                              }
                                              style={{
                                                textAlign: "center",
                                                color: cta,
                                                paddingLeft: "10px",
                                                paddingTop: "25px",
                                              }}
                                            >
                                              <TriangleRight1
                                                width={"50px"}
                                                strokewidth={3}
                                              />
                                            </div>
                                          </span>
                                          <br />

                                          <b style={{ fontSize: "18px" }}>
                                            Video abspielen
                                          </b>
                                        </span>
                                      </div>
                                      <div
                                        className={
                                          "text-center mt-md-5 pt-2 px-5 mx-auto py-3"
                                        }
                                      >
                                        <div
                                          className={
                                            "text-center pt-3 justify-content-between"
                                          }
                                          style={{
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                            lineHeight: "1.5em",
                                          }}
                                        >
                                          <span className={"mr-3"}>
                                            <WineList
                                              width={"25px"}
                                              height={"30px"}
                                              strokewidth={3}
                                            />{" "}
                                            Zugang zu den weltbesten Weinen
                                          </span>

                                          <span className={"mr-3"}>
                                            <Atom
                                              width={"25px"}
                                              height={"30px"}
                                              strokewidth={3}
                                            />{" "}
                                            KI-unterstützte Portfolioberatung
                                          </span>

                                          <span>
                                            <Security
                                              width={"25px"}
                                              height={"30px"}
                                              strokewidth={3}
                                            />{" "}
                                            echte Sachwerte
                                          </span>
                                        </div>

                                        {/* <CtaButton children={<span style={{fontSize: "18px"}}>Jetzt starten</span>}/> */}
                                        <div>
                                          <button
                                            onClick={() =>
                                              fullpageApi.moveTo(4)
                                            }
                                            className={
                                              "mr-auto btn bg-cta p-3 mt-4"
                                            }
                                            style={{ fontSize: "18px" }}
                                          >
                                            wineTelligence ausprobieren
                                          </button>
                                        </div>

                                        <div className={"mt-3"}>
                                          <center>
                                            <h3
                                              className={"text-left "}
                                              style={{
                                                paddingLeft: "15px",
                                                maxWidth: "850px",
                                                fontSize: "13px",
                                              }}
                                            >
                                              Partner und Awards
                                            </h3>
                                          </center>
                                          <div
                                            style={{ maxWidth: "950px" }}
                                            className={"row mx-auto"}
                                          >
                                            <div className={"col text-center"}>
                                              <span
                                                style={{
                                                  padding: "10px",
                                                  borderRadius: "7px",
                                                }}
                                              >
                                                <img
                                                  src={
                                                    "https://bcassets.s3.amazonaws.com/static/images/RBC-Logo-2017_web-removebg-preview_1.original.png"
                                                  }
                                                  style={{ minWidth: "100px" }}
                                                />
                                              </span>
                                            </div>
                                            <div className={"col text-center"}>
                                              <span
                                                style={{
                                                  padding: "10px",
                                                  borderRadius: "7px",
                                                }}
                                              >
                                                <Partner3 height={"20px"} />
                                              </span>
                                            </div>
                                            <div className={"col text-center"}>
                                              <span
                                                style={{
                                                  padding: "10px",
                                                  borderRadius: "7px",
                                                }}
                                              >
                                                <Partner1 height={"25px"} />
                                              </span>
                                            </div>
                                            <div className={"col text-center"}>
                                              <span
                                                style={{
                                                  padding: "10px",
                                                  borderRadius: "7px",
                                                }}
                                              >
                                                <Partner2 height={"25px"} />
                                              </span>
                                            </div>

                                            <div className={"col text-center"}>
                                              <span
                                                style={{
                                                  padding: "10px",
                                                  borderRadius: "7px",
                                                }}
                                              >
                                                <Award1 height={"25px"} />
                                              </span>
                                            </div>

                                            <div className={"col text-center"}>
                                              <span
                                                style={{
                                                  padding: "10px",
                                                  borderRadius: "7px",
                                                }}
                                              >
                                                <Award2 height={"25px"} />
                                              </span>
                                            </div>

                                            <div className={"col text-center"}>
                                              <span
                                                style={{
                                                  padding: "10px",
                                                  borderRadius: "7px",
                                                }}
                                              >
                                                <Award3 height={"25px"} />
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Col>

                                    {/* <ReactPlayer
                                      url="https://www.youtube.com/watch?v=Yp7ybNX1Dy4"
                                      muted={false}
                                      playing={isPlaying}
                                      light={
                                        // "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png"
                                        "https://bcassets.s3.amazonaws.com/static/images/chateau_illu.original.png"
                                      }
                                      //light={true}
                                      controls={true}
                                      width={"100%"}
                                      height={"300px"}
                                      className={"mx-auto my-auto"}
                                      pip={true}
                                      style={{
                                        // background:
                                        // "linear-gradient(15deg,hsl(42deg 25% 18%) 0%,hsl(42deg 26% 45%) 30%,hsl(41deg 33% 62%) 58%,hsl(41deg 35% 75%) 83%,hsl(41deg 47% 93%) 100%)",
                                       
                                        borderRadius: "7px",
                                       
                                       
                                        
                                      }}
                                    >
                                      
                                    </ReactPlayer> */}
                                  </Row>

                                  {/* <Row
                                  className={
                                    "text-center card-overlay-from-transp mx-0"
                                  }
                                  style={{
                                    minHeight: "200px",
                                    borderDadius: "0.25rem",
                                    height: "200px",
                                  }}
                                >
                                  <div
                                    className={""}
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      textAlign: "center",
                                      width: "100%",
                                      height: "100%",
                                    }}
                                  >
                                    {" "}
                                    <DynamicLiveData />
                                  </div>

                                  <Col
                                    className={"my-auto overlay_text"}
                                    style={{
                                      fontSize: "27px",
                                      position: "relative",
                                      zIndex: "2",
                                    }}
                                  >
                                    <span
                                      style={{
                                        position: "absolute",
                                        top: "-10px",
                                        left: "15px",
                                      }}
                                      className={"blink_me"}
                                    ></span>
                                    <div className={"mx-auto text-center p-2"}>
                                      {" "}
                                    </div>
                                    Mein Depot
                                    <br />
                                    <center
                                      className={"mx-auto"}
                                      style={{
                                        fontSize: "13px",
                                        fontWeight: "normal",
                                        maxWidth: "350px",
                                      }}
                                    >
                                      Ihre persönliches Depot mit den
                                      wichtigsten Hintergrundinformationen auf
                                      einen Blick.
                                    </center>
                                  </Col>
                                </Row> */}

                                  {/* <div
                                  className={""}
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    textAlign: "center",
                                    width: "100%",
                                    height: "100%",
                                  }}
                                >
                                  {" "}
                                  <DynamicLiveData />
                                </div> */}
                                </div>
                              </div>

                              <br />
                            </div>
                            <div
                              // className={
                              //   "animate__animated animate__delay-1s animate__fadeInRight animate__slow"
                              // }
                              className={"animated fadeIn slower"}
                            ></div>
                          </div>
                        </div>

                        {/* <div class=" text-center w-100 animated fadeIn slower">
                      <div
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                        className={"mb-3"}
                        // style={{ backgroundColor: "rgb(191, 157, 226)" }}
                      >
                 

                        <div
                          className={"row animated fadeInUp slower text-left"}
                        >
                          <h3
                            className={"col-md-8 offset-md-2 mb-3"}
                            style={{ fontSize: "18px" }}
                          >
                            Unsere Auszeichnungen
                          </h3>
                          <br />
                          <div
                            style={{}}
                            className={
                              "d-flex justify-content-between col-md-8 offset-md-2 pt-1 mt-1"
                            }
                          >
                            <div
                              style={{
                                padding: "10px",
                                borderRadius: "7px",
                                backgroundColor: "white",
                                boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
                              }}
                            >
                              <Award1 height={"60px"} />
                           
                            </div>
                            <div
                              style={{
                                padding: "10px",
                                borderRadius: "7px",
                                backgroundColor: "white",
                                boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
                              }}
                            >
                              <Award2 height={"60px"} />
                            
                            </div>
                            <div
                              style={{
                                padding: "10px",
                                borderRadius: "7px",
                                backgroundColor: "white",
                                boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
                              }}
                            >
                              <Award3 height={"60px"} />
                           
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className={"p-4 text-center w-100"}
                    style={{ position: "absolute", bottom: "15px" }}
                  >
                    <a
                      className={"move-down"}
                      href={"#services"}
                      style={{ cursor: "pointer" }}
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      <span
                        className={"animated infinite pulse"}
                        style={{ cursor: "pointer", color: primary }}
                      >
                        <DownArrow
                          width={"40px"}
                          height={"40px"}
                          strokewidth={4}
                          style={{ display: "inline-block" }}
                        />
                      </span>
                    </a>
                  </div>
                </div>

                <div
                  className="section "
                  style={{
                    backgroundImage: "linear-gradient(#f8f8f8, #c0ad82)",
                  }}
                >
                  <center id="facts-slide" className={"animated d-none"}>
                    <h2>
                      Exquisiter Wein - stabiler Sachwert mit attraktiver
                      Rendite
                    </h2>
                    <div
                      className={"mt-n2 pb-3"}
                      style={{ fontSize: "15px", maxWidth: "100vw" }}
                    >
                      Berghaus & Cie. lebt die Anlage in exquisite Weine. Unsere
                      Experten unterstützen Sie beim Aufbau Ihrer eigenen
                      Weinsammlung über den günstigen Bezug der Weine, die
                      ideale Lagerung und den strategischen Verkauf der Weine.
                    </div>
                    <div
                      className={"p-2"}
                      style={{
                        width: "100%",
                        height: "600px",
                        // background: "#232526",
                        // background:
                        //   "-webkit-linear-gradient(to right, #232526, #414345)",
                        // backgroundImage:
                        //   "linear-gradient(to right, #232526, #414345)",
                        // fontFamily: "monospace",
                      }}
                    >
                      {/* <div style={{ padding: "20px" }}>
                        <DynamicLivexPriceChart
                          height={"500px"}
                          mode={"light"}
                        />
                      </div> */}

                      <div
                        class="wrapper-swiper"
                        style={{
                          height: "100%",
                          background: "none",
                          backgroundColor: "none",
                        }}
                      >
                        <div class="swiper">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <div class="content-wrapper">
                                <div class="content">
                                  <img
                                    id={"img-tristan"}
                                    src="https://bcassets.s3.amazonaws.com/static/images/berghaus_cie_tb.original.jpg"
                                    width={"100%"}
                                  />

                                  <br />
                                  <p
                                    className={"mt-3 p-3 text-left"}
                                    style={{ color: "#444" }}
                                  >
                                    <div
                                      id={"btn-tristan"}
                                      className={"btn btn-primary pull-right"}
                                      style={{
                                        backgroundColor: "red",
                                        color: "white",
                                        height: "40px",
                                        marginTop: "-120px",
                                      }}
                                      onClick={() => {
                                        setWatchVideoUrl(
                                          "https://www.youtube.com/embed/4V1sIZthsgI"
                                        );
                                      }}
                                    >
                                      <span
                                        className={"d-inline-block"}
                                        style={{ fontSize: "15px" }}
                                      >
                                        <TriangleRight1 width={"20px"} />
                                      </span>
                                      Video abspielen
                                    </div>
                                    "Die Anlage in exquisite Weine ist
                                    einzigartig, denn Sie ermöglicht es Ihnen,
                                    diversifiziert in einen faszinierenden
                                    Sachwert zu investieren, der sich stetig mit
                                    rund <b>8 - 10 % p.a.</b> verzinst."
                                  </p>
                                  <p>- Tristan A. Berghaus, Geschäftsführer</p>
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="content-wrapper">
                                <div class="content">
                                  <img
                                    id={"img-peter"}
                                    src="https://bcassets.s3.amazonaws.com/static/images/berghaus_cie_pi.original.jpg"
                                    width={"100%"}
                                  />

                                  <br />
                                  <p
                                    className={"mt-3 p-3 text-left"}
                                    style={{ color: "#444" }}
                                  >
                                    <div
                                      className={"btn btn-primary pull-right"}
                                      style={{
                                        backgroundColor: "red",
                                        color: "white",
                                        height: "40px",
                                        marginTop: "-120px",
                                      }}
                                      onClick={() => {
                                        setWatchVideoUrl(
                                          "https://www.youtube.com/embed/10zi2gIi8Lk"
                                        );
                                      }}
                                    >
                                      <span
                                        className={"d-inline-block"}
                                        style={{ fontSize: "15px" }}
                                      >
                                        <TriangleRight1 width={"20px"} />
                                      </span>
                                      Video abspielen
                                    </div>
                                    <p
                                      className={"p-3 text-left"}
                                      style={{ color: "#444" }}
                                    >
                                      "Wir sind von Beginn an an Ihrer Seite und
                                      stellen Ihnen ein{" "}
                                      <b>individuelles Portfolio</b> zusammen.
                                      Den professionellen Transport und die
                                      klimageführte Lagerung in der Schweiz
                                      organisieren wir für Sie. "
                                    </p>
                                    <p className={"text-center"}>
                                      - Peter Irnich, Geschäftsführer
                                    </p>
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div class="swiper-slide">
                              <div class="content-wrapper">
                                <div class="content">
                                  <div class="swiper-avatar">
                                    {/* <img
                                      src="https://bcassets.s3.amazonaws.com/static/images/vortrag_wein_berghaus_cie.original.jpg"
                                      width={"100%"}
                                    /> */}
                                    <a
                                      // href="https://www.berghauscie.de/blog/was-verbirgt-sich-hinter-en-primeur-bei-wein-investments"
                                      // taget={"_blank"}
                                      class="badgeOffer"
                                      style={{ color: "white" }}
                                    >
                                      <svg viewBox="0 0 210 210">
                                        <g stroke="none" fill="none">
                                          <path
                                            d="M22,104.5 C22,58.9365081 58.9365081,22 104.5,22 C150.063492,22 187,58.9365081 187,104.5"
                                            id="top"
                                          ></path>
                                          <path
                                            d="M22,104.5 C22,150.063492 58.9365081,187 104.5,187 C150.063492,187 187,150.063492 187,104.5"
                                            id="bottom"
                                          ></path>
                                        </g>
                                        <circle
                                          cx="105"
                                          cy="105"
                                          r="62"
                                          stroke="currentColor"
                                          stroke-width="1"
                                          fill="none"
                                        />
                                        <text
                                          width="200"
                                          font-size="18"
                                          fill="currentColor"
                                        >
                                          <textPath
                                            startOffset="50%"
                                            text-anchor="middle"
                                            alignment-baseline="middle"
                                            xlinkHref="#top"
                                          >
                                            Save the Date!
                                          </textPath>
                                        </text>
                                        <text
                                          width="200"
                                          font-size="18"
                                          fill="currentColor"
                                        >
                                          <textPath
                                            startOffset="50%"
                                            text-anchor="middle"
                                            alignment-baseline="middle"
                                            xlinkHref="#bottom"
                                          >
                                            ...ab Anfang Mai!
                                          </textPath>
                                        </text>
                                      </svg>
                                      <span>En Primeur</span>
                                    </a>
                                  </div>
                                  <p
                                    className={"mt-3 p-3 text-left"}
                                    style={{ color: "#444" }}
                                  >
                                    <b>En Primeur ist die Gelegenheit</b> zu
                                    optimalen Konditionen in Wein zu
                                    investieren. Dabei handelt es sich um den
                                    Verkauf des Weins, der sich noch beim
                                    Château im Fass befindet. Möchten Sie sich
                                    Ihre Allokation sichern? Sprechen Sie uns
                                    einfach an!
                                  </p>
                                  <div className={"row pb-2"}>
                                    <div className={"col text-right"}>
                                      {" "}
                                      <a
                                        href={
                                          "https://www.berghauscie.de/blog/was-verbirgt-sich-hinter-en-primeur-bei-wein-investments"
                                        }
                                        target={"_blank"}
                                        className={"btn btn-sm"}
                                      >
                                        Mehr erfahren
                                      </a>
                                    </div>
                                    <div className={"col text-left"}>
                                      {" "}
                                      <a
                                        href={
                                          "https://nethunt.com/service/automation/forms/63b6992bbbdbb30008fdd07f"
                                        }
                                        target={"_blank"}
                                        className={"btn btn-sm bg-cta"}
                                      >
                                        En Primeur reservieren
                                      </a>
                                    </div>
                                  </div>
                                  {/* <p class="cite">- Alison Tetrick, Cyclist</p> */}
                                </div>
                              </div>
                            </div>

                            <div class="swiper-slide">
                              <div class="content-wrapper">
                                <div class="content">
                                  <img
                                    id={"img-tristan1"}
                                    src="https://bcassets.s3.amazonaws.com/static/images/babos.original.png"
                                    width={"100%"}
                                  />

                                  {/* <iframe
                                    id={"vid-tristan1"}
                                    className={"d-none"}
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/_Ftgc9UN_wI"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                  ></iframe> */}

                                  <br />
                                  <p
                                    className={"mt-3 p-3 text-left"}
                                    style={{ color: "#444" }}
                                  >
                                    <div
                                      id={"btn-tristan1"}
                                      className={"btn btn-primary pull-right"}
                                      style={{
                                        backgroundColor: "red",
                                        color: "white",
                                        height: "40px",
                                        marginTop: "-120px",
                                      }}
                                      onClick={() => {
                                        setWatchVideoUrl(
                                          "https://www.youtube.com/embed/_Ftgc9UN_wI"
                                        );
                                      }}
                                    >
                                      <span
                                        className={"d-inline-block"}
                                        style={{ fontSize: "15px" }}
                                      >
                                        <TriangleRight1 width={"20px"} />
                                      </span>
                                      Video abspielen
                                    </div>
                                    Geschäftsführer Tristan A. Berghaus stellt
                                    sich den kritischen Fragen der
                                    "Investment-Babos". Klares Fazit der
                                    Investmentprofis: Wein ist noch
                                    interessanter als Luxus-Uhren und Oldtimer.
                                  </p>
                                  <p>- Tristan A. Berghaus, Geschäftsführer</p>
                                </div>
                              </div>
                            </div>

                            <div class="swiper-slide">
                              <div class="content-wrapper">
                                <div class="content">
                                  <div class="swiper-avatar">
                                    <img
                                      src="https://bcassets.s3.amazonaws.com/static/images/performance_example.original.png"
                                      width={"100%"}
                                    />
                                  </div>
                                  <p
                                    className={"mt-3 p-3 text-left"}
                                    style={{ color: "#444" }}
                                  >
                                    <b>Eine gute Weinauswahl ist das A und O</b>{" "}
                                    für den Anlageerfolg. Der Weinmarkt ist
                                    stets in Bewegung - wir helfen Ihnen bei der
                                    Navigation im Markt und zeigen Ihnen Weine
                                    mit großem Renditepotential.
                                  </p>
                                  <a
                                    href={
                                      "https://www.berghauscie.de/blog/Weinauktionen"
                                    }
                                    target={"_blank"}
                                  >
                                    <span
                                      className={
                                        "btn btn-primary pull-right mb-2 mt-n2"
                                      }
                                    >
                                      Lengendäre Weinauktionen
                                    </span>
                                  </a>
                                  {/* <p class="cite">- Alison Tetrick, Cyclist</p> */}
                                </div>
                              </div>
                            </div>
                            <div class="swiper-slide">
                              <div class="content-wrapper">
                                <div class="content">
                                  <div class="swiper-avatar">
                                    <img
                                      src="https://bcassets.s3.amazonaws.com/static/images/romanee.original.jpg"
                                      width={"100%"}
                                    />
                                  </div>
                                  <p
                                    className={"mt-3 p-3 text-left"}
                                    style={{ color: "#444" }}
                                  >
                                    <b>Jeder weiß, was Wein ist.</b> Aber wissen
                                    Sie beispielsweise auch, was sich wirklich
                                    hinter einem Versicherungspapier oder einer
                                    Kryptowährung verbirgt? Wir glauben, dass
                                    Sie Ihre Geldanlage durchschauen sollten und
                                    dass exquisiter Wein die beste Alternative
                                    zu undurchsichtigen Finanzprodukten und
                                    Anlageklassen darstellt.
                                  </p>
                                  {/* <p class="cite">- Alison Tetrick, Cyclist</p> */}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="swiper-nav-wrapper">
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                            <div class="swiper-button-next"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </center>
                  <div
                    className={"p-4 text-center w-100"}
                    style={{ position: "absolute", bottom: "15px" }}
                  >
                    <a
                      className={"move-down"}
                      href={"#services"}
                      style={{ cursor: "pointer" }}
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      <span
                        className={"animated infinite pulse"}
                        style={{ cursor: "pointer", color: primary }}
                      >
                        <DownArrow
                          width={"40px"}
                          height={"40px"}
                          strokewidth={4}
                          style={{ display: "inline-block" }}
                        />
                      </span>
                    </a>
                  </div>
                </div>

                <div
                  className="section "
                  style={{
                    backgroundImage: "linear-gradient(#f8f8f8, #c0ad82)",
                  }}
                >
                  <section class="py-4 position-relative">
                    <div
                      id="carousel-testimonials"
                      class="carousel slide carousel-team"
                    >
                      {testis[showTestimonal % 3]}

                      <a
                        class="carousel-control-prev text-darker"
                        href="#carousel-testimonials"
                        role="button"
                        data-slide="prev"
                        style={{ color: primary, transform: "scale(1.5)" }}
                        onClick={() => {
                          setShowTestimonial(
                            mod(showTestimonal - 1, testis.length)
                          );
                        }}
                      >
                        <i
                          style={{ color: primary, transform: "scale(1.5)" }}
                          class="fas fa-chevron-left"
                        ></i>
                        <span
                          style={{ color: primary, transform: "scale(1.5)" }}
                          class="sr-only"
                        >
                          Previous
                        </span>
                      </a>
                      <a
                        class="carousel-control-next text-darker"
                        href="#carousel-testimonials"
                        role="button"
                        data-slide="next"
                        style={{ color: primary, transform: "scale(1.5)" }}
                        onClick={() => {
                          setShowTestimonial(
                            mod(showTestimonal + 1, testis.length)
                          );
                        }}
                      >
                        <i
                          style={{ color: primary, transform: "scale(1.5)" }}
                          class="fas fa-chevron-right"
                        ></i>
                        <span
                          style={{ color: primary, transform: "scale(1.5)" }}
                          class="sr-only"
                        >
                          Previous
                        </span>
                      </a>
                    </div>
                  </section>

                  <div
                    className={"p-4 text-center w-100"}
                    style={{ position: "absolute", bottom: "15px" }}
                  >
                    <a
                      className={"move-down"}
                      href={"#services"}
                      style={{ cursor: "pointer" }}
                      onClick={() => fullpageApi.moveSectionDown()}
                    >
                      <span
                        className={"animated infinite pulse"}
                        style={{ cursor: "pointer", color: primary }}
                      >
                        <DownArrow
                          width={"40px"}
                          height={"40px"}
                          strokewidth={4}
                          style={{ display: "inline-block" }}
                        />
                      </span>
                    </a>
                  </div>
                </div>

                <div
                  className="section"
                  style={{
                    background:
                      "linear-gradient(15deg,hsl(42deg 25% 18%) 0%,hsl(42deg 26% 45%) 30%,hsl(41deg 33% 62%) 58%,hsl(41deg 35% 75%) 83%,hsl(41deg 47% 93%) 100%)",
                  }}
                  id={"letsgo-slide"}
                >
                  <button
                    className={"btn bnt-md text-white"}
                    style={{
                      background: "rgba(255,255,255,0.15)",

                      position: "absolute",
                      top: "20px",
                      left: "20px",
                    }}
                    onClick={() => fullpageApi.moveSectionUp()}
                  >
                    Nach oben
                  </button>
                  <center>
                    <h2
                      className={"text-white"}
                      // style={{
                      //   filter: "drop-shadow(3px 5px 2px rgb(255 255 255 / 0.08))",
                      // }}
                    >
                      Portfolio-Indikation in 2 Minuten!
                    </h2>
                    <h3
                      className={"text-white pb-5"}
                      style={{ fontSize: "18px" }}
                    >
                      Erhalten Sie innerhalb von 2 Minuten eine erste
                      Portfolio-Indikation auf der Basis Ihrer Präferenzen dank
                      unserer wineTelligence.
                    </h3>
                    <PreferencesForm />
                  </center>
                  <button
                    className={"btn bnt-md text-white"}
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                    }}
                    onClick={() => fullpageApi.moveSectionDown()}
                  >
                    Zu den FAQs
                  </button>
                  <Particles
                    id="tsparticles"
                    style={{ position: "absolute", left: 0, top: 0 }}
                    options={{
                      fullScreen: { enable: false, zIndex: 0 },
                      background: {
                        color: {
                          value: "transparent",
                        },
                      },
                      fpsLimit: 40,
                      interactivity: {
                        events: {
                          onClick: {
                            enable: true,
                            mode: "grab",
                          },
                          onHover: {
                            enable: true,
                            mode: "grab",
                          },
                          resize: true,
                        },
                        modes: {
                          bubble: {
                            distance: 400,
                            duration: 20,
                            opacity: 0.8,
                            size: 40,
                          },
                          push: {
                            quantity: 0,
                          },
                          repulse: {
                            distance: 200,
                            duration: 0.9,
                          },
                          grab: {
                            distance: 200,
                            duration: 1,
                            color: "white",
                          },
                        },
                      },
                      particles: {
                        color: {
                          value: "#b29f74",
                        },
                        links: {
                          color: "#b29f74",
                          distance: 210,
                          enable: true,
                          opacity: 0.6,
                          width: 1,
                        },
                        collisions: {
                          enable: true,
                        },
                        move: {
                          direction: "none",
                          enable: true,
                          outMode: "bounce",
                          random: false,
                          speed: 1,
                          straight: false,
                        },
                        number: {
                          density: {
                            enable: true,
                            area: 800,
                          },
                          value: 30,
                          limit: 80,
                        },
                        opacity: {
                          value: 0.6,
                        },
                        shape: {
                          type: "circle",
                          opacity: 0.6,
                          stroke: {
                            width: 1,
                            color: "red",
                          },
                          size: {
                            value: 10,
                            random: true,
                            // anim: {
                            //   enable: true,
                            //   speed: 10,
                            //   size_min: 10,
                            //   sync: false
                            // }
                          },
                        },
                        // size: {
                        //   random: true,
                        //   value: 5,
                        // },
                      },
                      detectRetina: true,
                    }}
                  />
                </div>
                <div className="section">
                  <center id="faq-slide" className={"animated"}>
                    <h2>Häufig gestellte Fragen</h2>
                    <div style={{ width: "800px", height: "500px" }}>
                      <div
                        className={"container mx-auto"}
                        style={{ maxWidth: "800px" }}
                      >
                        <Accordion
                          allowZeroExpanded={true}
                          className={"mt-4 card"}
                          id={"list"}
                        >
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                {" "}
                                <span
                                  className={"text-primary mr-2"}
                                  style={{ display: "inline-block" }}
                                >
                                  <RightArrow
                                    width={"20px"}
                                    height={"20px"}
                                    strokewidth={4}
                                  />
                                </span>
                                Für wen empfiehlt sich ein Wein Investment?
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Wein Investments eignen sich hervorragend für
                                die Diversifizierung des Gesamtportfolios mit
                                einem exklusiven Sachwert und können über einen
                                langfristigen Investitionshorizont von 10 bis 15
                                Jahren eine durchschnittliche Rendite von etwa
                                8% bis 10% p.a. (kapitalertragssteuerfrei)
                                erzielen. Dabei korrelieren Wein Investments
                                kaum mit dem Kapitalmarkt.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                {" "}
                                <span
                                  className={"text-primary mr-2"}
                                  style={{ display: "inline-block" }}
                                >
                                  <RightArrow
                                    width={"20px"}
                                    height={"20px"}
                                    strokewidth={4}
                                  />
                                </span>
                                Muss ich ein Weinprofi sein, um in Wein zu
                                investieren?
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Berghaus & Cie. unterstützt Sie dabei, Ihr
                                persönliches Wein-Portfolio zusammenzustellen.
                                Sie müssen kein Weinprofi oder ausgewiesener
                                Weinliebhaber sein, um erfolgreich in Wein zu
                                investieren.
                              </p>
                              <p>
                                Abgestimmt auf Ihre Wünsche und Bedürfnisse wie
                                Investitionssumme, Anlagehorizont, persönliche
                                Vorlieben, etc. entwickeln wir gemeinsam mit
                                Ihnen die passende Anlagestrategie. Darüber
                                hinaus kümmern wir uns um den fachgerechten
                                Transport und die professionelle Einlagerung
                                Ihrer Weine im Genfer Zollfreihafen.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                {" "}
                                <span
                                  className={"text-primary mr-2"}
                                  style={{ display: "inline-block" }}
                                >
                                  <RightArrow
                                    width={"20px"}
                                    height={"20px"}
                                    strokewidth={4}
                                  />
                                </span>
                                Welche Investitionssumme ist für den Anfang
                                sinnvoll?
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Im Gegensatz zu anderen alternativen
                                Anlageklassen wie Kunst, Oldtimer oder Uhren ist
                                die Einstiegshürde bei Wein vergleichsweise
                                niedrig. Der Kaufpreis eines exquisiten Weins
                                (hohes Entwicklungspotential, sehr renommiertes
                                Weingut) liegt im Schnitt bei ca. 250 € pro
                                Flasche, d. h. ca. 1.500 Euro pro Kiste.
                              </p>
                              <p>
                                Für die Zusammenstellung eines ausgewogenen
                                Wein-Portfolios, empfehlen wir den Erwerb von 5
                                bis 15 verschiedenen Weinen.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                {" "}
                                <span
                                  className={"text-primary mr-2"}
                                  style={{ display: "inline-block" }}
                                >
                                  <RightArrow
                                    width={"20px"}
                                    height={"20px"}
                                    strokewidth={4}
                                  />
                                </span>
                                Wem gehört der Wein nach der Kaufabwicklung?
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Bei einem Wein Investment über Berghaus & Cie.
                                sind Sie zu 100 % Eigentümer Ihres Weines. Sie
                                investieren in ein physisches Gut bzw. in einen
                                Sachwert. Dies ist ein bedeutender Vorteil
                                gegenüber nicht-physischen Investmentprodukten
                                wie Rentenpapieren, Bausparverträgen oder
                                Lebensversicherungen, die außer dem Papier, auf
                                dem sie gedruckt sind, keinen inhärenten Wert
                                besitzen.
                              </p>
                              <p>
                                Als Besitzer erhalten Sie eine Auflistung Ihrer
                                Weine, sobald diese im Genfer Zollfreihafen
                                eingelagert wurden. Die Rechnung ist Ihr
                                persönlicher Eigentumsnachweis. Sie dient Ihnen
                                auch als Nachweis Ihres Herausgabeanspruches
                                gegenüber dem Weinlager.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>

                          <AccordionItem>
                            <AccordionItemHeading>
                              <AccordionItemButton>
                                {" "}
                                <span
                                  className={"text-primary mr-2"}
                                  style={{ display: "inline-block" }}
                                >
                                  <RightArrow
                                    width={"20px"}
                                    height={"20px"}
                                    strokewidth={4}
                                  />
                                </span>
                                Gegen welche Risiken sind meine Weine
                                versichert?
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <p>
                                Bei Berghaus & Cie. sind Ihre Weine während der
                                Verweildauer in unserem Weinlager gegen
                                Beschädigungen oder andere wertmindernde
                                Umstände versichert. Die Versicherungssumme
                                richtet sich nach dem aktuellen Wert.
                                Insbesondere sind die Weine gegen
                                Einbruchdiebstahl/Raub, Brand- und Wasserschäden
                                versichert.
                              </p>
                            </AccordionItemPanel>
                          </AccordionItem>
                        </Accordion>

                        <h3
                          className={"mt-5 text-center"}
                          style={{ fontSize: "18px", color: "#555" }}
                        >
                          Haftungsausschluss
                        </h3>
                        <p
                          className={"text-justify"}
                          style={{ fontSize: "12px", color: "#555" }}
                        >
                          Berghaus & Cie. berät seine Kunden unabhängig. Der
                          Wert eines Weines kann steigen oder fallen. Berghaus &
                          Cie. garantiert keine bestimmte Wertentwicklung der
                          Weine. Die Vorschläge von Berghaus & Cie. an den
                          Kunden sind lediglich Vorschläge. Der Kunde
                          entscheidet frei über deren Kauf. In die Vorschläge
                          von Berghaus & Cie. fließen die Erfahrungen der
                          Mitarbeiter, aktuelle Marktentwicklungen,
                          Kritikerbewertungen sowie historische
                          Marktentwicklungen mit ein. Weiterhin kann und darf
                          Berghaus & Cie. nicht steuerlich hinsichtlich
                          möglicher Gewinne aus dem Verkauf von Wein beraten und
                          empfiehlt den Kunden einen Steuerberater diesbezüglich
                          zu kontaktieren. Es gelten die Allgemeinen
                          Geschäftsbedingungen der Berghaus & Cie. GmbH, eine
                          aktuelle Fassung finden Sie unter{" "}
                          <a
                            className={"text-dark"}
                            href={
                              "https://www.berghauscie.de/legal/allgemeine-geschaeftsbedingungen"
                            }
                          >
                            https://www.berghaus-cie.com/legal/allgemeine-geschaeftsbedingungen
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </center>
                </div>

                <div className={"section"}>
                  <div
                    id={"calendly-slide"}
                    className={"animated text-center mt-sm-5 pt-5 mb-sm-5 pb-5"}
                  >
                    <h3 style={{ fontSize: "24px" }} className={"mt-3 mb-2"}>
                      <span className={"pr-2"}></span>
                      Gespräch vereinbaren
                    </h3>
                    <p className={"mb-3"} style={{ fontSize: "15px" }}>
                      Wünschen Sie eine persönliche Beratung? <br /> Gerne
                      beantworten wir Ihre Fragen im Rahmen eines kostenfreien
                      Beratungstermins.
                    </p>
                    <img
                      className={"img img-responsive my-2"}
                      src={
                        "https://bcassets.s3.amazonaws.com/static/images/berghaus_consultation.original.png"
                      }
                      style={{ maxWidth: "450px" }}
                    />
                    <a
                      href={
                        "https://calendly.com/berghausundcie/beratungsgesprach"
                      }
                      target={"_blank"}
                    >
                      <br />
                      <button
                        className={"btn btn-lg text-white"}
                        style={{ background: cta }}
                      >
                        Gespräch vereinbaren
                      </button>
                    </a>
                    {/* <SelectCalendlyDate width={"60%"} /> */}
                  </div>
                </div>

                <div className="section fp-auto-height">
                  <div>
                    <LandingFooter />
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  );
};

export default withRouter(IndexDesktop);
