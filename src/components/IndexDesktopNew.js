import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic";
import { Chrono } from "react-chrono";
import { ImageFromCms } from "helpers/utils";
import LandingFooter from "components/Footer/LandingFooter";
import CustomModal from "../helpers/CustomModal";
import Ai from "../icons/ai";
import VirtualAssistant2 from "../icons/virtual-assistant-2";
import BarArrowStraight from "../icons/bar-arrow-straight";
import Security from "../icons/security";
import StorageUnit from "../icons/storage-unit";
import Diamond from "../icons/diamond";
import Measurement from "../icons/measurement";
import Safe from "../icons/safe";
import CountUp from "react-countup";
import TriangelUp1 from "../icons/triangle-up-1";
import VisibilitySensor from "react-visibility-sensor";
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

export const getServerSideProps = async (mail) => {
  let res = await fetch(
    "https://nethunt.com/service/automation/hooks/643877dc748a28000afe2193",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: mail }),
    }
  );
  res = await res.json();
  console.log(res);

  return res;
};

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

const IndexDesktopNew = (props) => {
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

  // useEffect(() => {
  //   let videoElement = document.getElementById("video-background");

  //   videoElement.onloadeddata = function () {
  //     //Video should now be loaded but we can add a second check

  //     toggleVideoReady(true);
  //     console.log(videoElement.readyState);
  //     videoElement.play();

  //     let swiper = new Swiper(".swiper", {

  //       direction: "horizontal",
  //       loop: true,
  //       autoHeight: false,
  //       centeredSlides: true,
  //       slidesPerView: 1,
  //       slideToClickedSlide: true,

  //       autoplay: {
  //         delay: 3500,
  //         disableOnInteraction: true,
  //       },

  //       breakpoints: {
  //         640: {
  //           slidesPerView: 2,
  //           spaceBetween: 40,
  //         },
  //         992: {
  //           slidesPerView: 3,
  //           spaceBetween: 40,
  //         },
  //       },

  //       pagination: {
  //         el: ".swiper-pagination",
  //         clickable: true,
  //       },

  //       navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //       },

  //     });
  //   };
  // }, [finishedLoadingDocument]);

  // useEffect(
  //   (props) => {
  //     let vn = document.getElementById("vert-nav");
  //     if (section == "letsgo") {
  //       let vn = document.getElementById("vert-nav");
  //       vn.classList.add("fadeOut");
  //       try {
  //         vn.style.zIndex = "-1";
  //       } catch (error) {
  //         console.log(error);
  //       }

  //     } else {
  //       try {
  //         vn.classList.remove("fadeOut");
  //         window.fullpage_api.setAllowScrolling(true, "down");
  //         window.fullpage_api.setAllowScrolling(true, "up");
  //         vn.classList.add("fadeIn");

  //         vn.style.zIndex = "100";
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     if (section == "welcome") {
  //       try {
  //         document.getElementById("welcome-slide").classList.remove("fadeOut");
  //         document
  //           .getElementById("welcome-slide")
  //           .classList.add("d-block", "fadeIn");
  //       } catch {
  //         console.log("not fadedOut yet");
  //       }
  //     } else {
  //       try {
  //         document.getElementById("welcome-slide").classList.remove("fadeIn");

  //         document.getElementById("welcome-slide").classList.add("fadeOut");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     if (section == "facts") {
  //       try {
  //         document.getElementById("facts-slide").classList.remove("fadeOut");
  //         document
  //           .getElementById("facts-slide")
  //           .classList.add("d-block", "fadeIn");
  //       } catch {
  //         console.log("not fadedOut yet");
  //       }
  //     } else {
  //       try {
  //         document.getElementById("facts-slide").classList.remove("fadeIn");

  //         document.getElementById("facts-slide").classList.add("fadeOut");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     if (section == "process") {
  //       try {
  //         document.getElementById("process-slide").classList.remove("fadeOut");
  //         document
  //           .getElementById("process-slide")
  //           .classList.add("d-block", "fadeIn");
  //       } catch {
  //         console.log("not fadedOut yet");
  //       }
  //     } else {
  //       try {
  //         document.getElementById("process-slide").classList.remove("fadeIn");

  //         document.getElementById("process-slide").classList.add("fadeOut");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     if (section == "faq") {
  //       try {
  //         document.getElementById("faq-slide").classList.remove("fadeOut");
  //         document.getElementById("faq-slide").classList.add("fadeIn");
  //       } catch {
  //         console.log("not fadedOut yet");
  //       }
  //     } else {
  //       try {
  //         document.getElementById("faq-slide").classList.remove("fadeIn");

  //         document.getElementById("faq-slide").classList.add("fadeOut");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     if (section == "book-appointment") {
  //       try {
  //         document.getElementById("calendly-slide").classList.remove("fadeOut");
  //         document.getElementById("calendly-slide").classList.add("fadeIn");
  //       } catch {
  //         console.log("not fadedOut yet");
  //       }
  //     } else {
  //       try {
  //         document.getElementById("calendly-slide").classList.remove("fadeIn");

  //         document.getElementById("calendly-slide").classList.add("fadeOut");
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //   },
  //   [section]
  // );

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
                    width: "350px!important",
                  }}
                />
              </div>
            </div>
            <div class="col-lg-5 col-md-7 me-lg-auto position-relative">
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

      <div class="">
        {/* <div class="" style={{ display: "flex", minHeight: "100vh" }}>
       
          <div className="row" style={{ margin: "auto 0 auto 0" }}>
            <div className="col mx-5" style={{ margin: "auto" }}>
              <div class="content-center" style={{ maxWidth: "1020px" }}>
                <div class="about-description text-center">
                  <div class="features-3">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12 mr-auto ml-auto">
                          <h1 class="title text-dark">
                            Einzigartiger Wein. Einzigartiges Investment.
                          </h1>
                          <h4 class="text-dark">
                            Grade in turbulenten Zeiten überzeugen
                            Weininvestments durch kontinulierlich hohe Renditen
                            und sind somit mehr als nur ein Instrument zur
                            Vermögenssicherung.
                          </h4>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div
                            class="info p-3 mr-0 info-horizontal mt-0"
                            style={{ maxWidth: "100%" }}
                          >
                            <div class="icon ">
                              <span
                                style={{ paddingTop: "15px", display: "block" }}
                              >
                                <Security
                                  width={"45px"}
                                  height={"45px"}
                                  strokewidth={2}
                                />
                              </span>
                            </div>
                            <div class="description">
                              <h4 class="info-title">Felsenfeste Anlage</h4>
                              <p class="description">
                                Wertstabil und keine Korrelation mit dem
                                Kapitalmarkt
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div
                            class="info p-3 mr-0 info-horizontal mt-0"
                            style={{ maxWidth: "100%" }}
                          >
                            <div class="icon ">
                              <span
                                style={{ paddingTop: "15px", display: "block" }}
                              >
                                <StorageUnit
                                  width={"45px"}
                                  height={"45px"}
                                  strokewidth={2}
                                />
                              </span>
                            </div>
                            <div class="description">
                              <h4 class="info-title">Echter Sachwert</h4>
                              <p class="description">
                                Kein Fonds, keine Verbriefung, sondern zu 100%
                                Ihr Eigentum
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div
                            class="info p-3 mr-0 info-horizontal mt-0"
                            style={{ maxWidth: "100%" }}
                          >
                            <div class="icon ">
                              <span
                                style={{ paddingTop: "15px", display: "block" }}
                              >
                                <BarArrowStraight
                                  width={"45px"}
                                  height={"45px"}
                                  strokewidth={2}
                                />
                              </span>
                            </div>
                            <div class="description">
                              <h4 class="info-title">Rendite 8 - 12 % p.a.</h4>
                              <p class="description">
                                Profitieren Sie von der attratktiven Rendite
                                eines Weininvestments
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-12 p-3 card text-center cta-animated-gradient">
                          <span style={{ fontSize: "2em" }}>
                            Interaktive Investment-Simulation starten
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5" style={{ margin: "auto" }}>
              <center>
                <div
                  className={"card  p-4"}
                  style={{
                    width: "300px",
                    display: "block",
                    marginBottom: "-150px",
                    marginLeft: "330px",
                  }}
                >
                  <span className={"d-block text-dark"}>
                    Portfolio-Entwicklung
                  </span>
                  <span style={{ fontSize: "3em", color: "green" }}>
                    <span
                      style={{ display: "inline-block", marginTop: "-5px" }}
                    >
                      <TriangelUp1 width={"30px"} height={"30px"} />
                    </span>
                    <CountUp
                      start={0}
                      end={178}
                      redraw={true}
                      duration={4}
                      separator="."
                      decimals={0}
                      decimal=","
                      prefix=""
                      suffix=" %"
                      // onEnd={() => console.log("Ended! 👏")}
                      // onStart={() => console.log("Started! 💨")}
                    >
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </span>
                  <span className={"description d-block text-dark"}>
                    bei 7.6 % p.a. <br /> 2008-2022
                  </span>
                </div>
                <img
                  id={""}
                  src={"/finewineselection.png"}
                  width={"100%"}
                  style={{ filter: "drop-shadow(2px 2px 4px black)" }}
                />
              </center>
            </div>
          </div>

         

          <div
            class="marquee p-4"
            style={{ background: "rgba(255,255,255,0.41)", zIndex: 1000 }}
          >
            <div class="inner pt-3">
              <p class="text">
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Partner1 height={"50px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Partner2 height={"50px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Award1 height={"50px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Award2 height={"50px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Award3 height={"50px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <img
                    src={
                      "https://bcassets.s3.amazonaws.com/static/images/RBC-Logo-2017_web-removebg-preview_1.original.png"
                    }
                    style={{ width: "190px", marginRight: "80px" }}
                  />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Partner3 height={"40px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Partner1 height={"50px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Partner2 height={"50px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Award1 height={"50px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Award2 height={"50px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Award3 height={"50px"} />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <img
                    src={
                      "https://bcassets.s3.amazonaws.com/static/images/RBC-Logo-2017_web-removebg-preview_1.original.png"
                    }
                    style={{ width: "190px", marginRight: "80px" }}
                  />
                </span>
                <span
                  style={{
                    padding: "10px",
                    borderRadius: "7px",
                    marginRight: "120px",
                  }}
                >
                  <Partner3 height={"40px"} />
                </span>
              </p>
            </div>
          </div>
        </div> */}

        <div class="features-6" style={{ height: "100vh", display: "flex" }}>
          <div class="mx-1 my-auto mx-md-5" style={{ maxWidth: "100%" }}>
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h1 class="title text-dark">
                  Einzigartiger Wein. Einzigartiges Investment.
                </h1>
                <h4 class="text-dark">
                  Grade in turbulenten Zeiten überzeugen Weininvestments durch
                  kontinulierlich hohe Renditen und sind somit mehr als nur ein
                  Instrument zur Vermögenssicherung.
                </h4>
              </div>
            </div>

            <div class="row">
              <div class="col-md-3">
                <div class="info info-horizontal" style={{ boxShadow: "none" }}>
                  <div class="icon ">
                    <Diamond width={"32px"} height={"32px"} strokewidth={3} />
                  </div>
                  <div class="description">
                    <h5 class="info-title">For Developers</h5>
                    <p className={"p-0"}>
                      The moment you use Now UI Kit, you know you’ve never felt
                      anything like it. With a single use, this powerfull UI Kit
                      lets you do more than ever before.{" "}
                    </p>
                  </div>
                </div>

                <div class="info info-horizontal" style={{ boxShadow: "none" }}>
                  <div class="icon">
                    <Security width={"32px"} height={"32px"} strokewidth={3} />
                  </div>
                  <div class="description">
                    <h4 class="info-title">For Designers</h4>
                    <p className={"p-0"}>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="">
                  <center>
                    <div
                      className={"card  p-4"}
                      style={{
                        width: "300px",
                        display: "block",
                        marginBottom: "-150px",
                        marginLeft: "330px",
                      }}
                    >
                      <span className={"d-block text-dark"}>
                        Portfolio-Entwicklung
                      </span>
                      <span style={{ fontSize: "3em", color: "green" }}>
                        <span
                          style={{ display: "inline-block", marginTop: "-5px" }}
                        >
                          <TriangelUp1 width={"30px"} height={"30px"} />
                        </span>
                        <CountUp
                          start={0}
                          end={178}
                          redraw={true}
                          duration={4}
                          separator="."
                          decimals={0}
                          decimal=","
                          prefix=""
                          suffix=" %"
                          // onEnd={() => console.log("Ended! 👏")}
                          // onStart={() => console.log("Started! 💨")}
                        >
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </span>
                      <span className={"description d-block text-dark"}>
                        bei 7.6 % p.a. <br /> 2008-2022
                      </span>
                    </div>
                    <img
                      id={""}
                      src={"/finewineselection.png"}
                      width={"100%"}
                      style={{ filter: "drop-shadow(2px 2px 4px black)" }}
                    />
                  </center>
                </div>
                <div class="mx-auto card text-center cta-animated-gradient">
                  <span style={{ fontSize: "2em", width: "200px" }}>
                    Interaktive Investment-Simulation starten
                  </span>
                </div>
              </div>

              <div class="col-md-3">
                <div class="info info-horizontal" style={{ boxShadow: "none" }}>
                  <div class="icon">
                    <StorageUnit
                      width={"32px"}
                      height={"32px"}
                      strokewidth={3}
                    />
                  </div>
                  <div class="description">
                    <h5 class="info-title">Bootstrap Grid</h5>
                    <p className={"p-0"}>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>

                <div class="info info-horizontal" style={{ boxShadow: "none" }}>
                  <div class="icon">
                    <BarArrowStraight
                      width={"32px"}
                      height={"32px"}
                      strokewidth={3}
                    />
                  </div>
                  <div class="description">
                    <h4 class="info-title">Example Pages Included</h4>
                    <p className={"p-0"}>
                      Divide details about your product or agency work into
                      parts. Write a few lines about each one. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="marquee p-4"
          style={{ background: "rgba(255,255,255,0.41)", zIndex: 1000 }}
        >
          <div class="inner pt-3">
            <p class="text">
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Partner1 height={"50px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Partner2 height={"50px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Award1 height={"50px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Award2 height={"50px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Award3 height={"50px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <img
                  src={
                    "https://bcassets.s3.amazonaws.com/static/images/RBC-Logo-2017_web-removebg-preview_1.original.png"
                  }
                  style={{ width: "190px", marginRight: "80px" }}
                />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Partner3 height={"40px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Partner1 height={"50px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Partner2 height={"50px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Award1 height={"50px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Award2 height={"50px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Award3 height={"50px"} />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <img
                  src={
                    "https://bcassets.s3.amazonaws.com/static/images/RBC-Logo-2017_web-removebg-preview_1.original.png"
                  }
                  style={{ width: "190px", marginRight: "80px" }}
                />
              </span>
              <span
                style={{
                  padding: "10px",
                  borderRadius: "7px",
                  marginRight: "120px",
                }}
              >
                <Partner3 height={"40px"} />
              </span>
            </p>
          </div>
        </div>

        <div class="section">
          <div class="projects-5 pt-0">
            <div class="container">
              <div class="row" style={{ marginTop: "30px" }}>
                <div class="col-md-8 ml-auto mr-auto text-center">
                  <h6
                    class="category text-muted"
                    style={{ fontSize: "1.14em" }}
                  >
                    Weininvestmens 101
                  </h6>
                  <h2 class="title">Das Wichtigste zum Thema Weininvestment</h2>
                  

                  {/* <VisibilitySensor>
                    {({ isVisible }) => {
                      if(isVisible){
                        return <DynamicLivexPriceChart
                        mobile={false}
                        height={"450px"}
                      />
                      }else{
                        return <></>
                      }
                      
                    }}
                  </VisibilitySensor> */}

<VisibilitySensor>
      {({isVisible}) =>
        <div style={{minHeight: "500px"}}><h4 class="description">
        This is the paragraph where you can write more details about
        your projects. Keep you user engaged by providing meaningful
        information.
      </h4>{isVisible ? <DynamicLivexPriceChart
          mobile={false}
          height={"450px"}
        /> : <></>}</div>
      }
    </VisibilitySensor>

                  <div class="section-space"></div>
                </div>
                {/* <center>
                  <div className={"card  p-4"} style={{
                    width: "300px",
                    display: "block",
                    marginBottom: "-150px",
                    marginLeft: "500px",
                  }}>
                    <span className={"d-block"}>Portfolio-Entwicklung</span>
                    <span style={{fontSize: "3em", color: "green"}}>
                      <span style={{display: "inline-block", marginTop: "-5px"}}>
                        <TriangelUp1 width={"30px"} height={"30px"}/>
                      </span>
                    <CountUp
                      start={0}
                      end={146}
                      redraw={true}
                      duration={3}
                      separator="."
                      decimals={0}
                      decimal=","
                      prefix=""
                      suffix=" %"
                      // onEnd={() => console.log("Ended! 👏")}
                      // onStart={() => console.log("Started! 💨")}
                    >
                      {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
                    </CountUp>
                    </span>
                    <span className={"description d-block"}>bei 7.6 % p.a. <br/> 2008-2022</span>
                  </div>
                  <img
                    id={""}
                    src={"/finewineselection.png"}
                    width={"100%"}
                    style={{ filter: "drop-shadow(2px 2px 4px black)" }}
                  />
                </center> */}
              </div>
            </div>
            <div class="row px-5">
              <div class="col-md-8">
                <div className={"video-wrapper-explainer"}>
                  <video
                    className={"video-explainer"}
                    autoPlay
                    loop
                    muted
                    constrols
                  >

                    
                    <source
                      src={
                        "https://bcassets.s3.eu-west-1.amazonaws.com/bc_explainer_desktop.mp4"
                      }
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  <div className={"header-explainer"}>
                    <span
                      onClick={() => {
                        // toggleShowVideoModal(true);
                        // playVideoAfterDelay();
                        // document
                        //   .getElementById(
                        //     "video-background"
                        //   )
                        //   .pause();
                      }}
                    >
                      <span
                        class="play-btn mx-auto"
                        href="#"
                        style={{
                          transform: props.mobile ? "scale(0.9)" : "scale(1.2)",

                          background: "transparent",
                          cursor: "pointer",
                        }}
                      >
                        <div
                          className={"animated pulse infinite slower"}
                          style={{
                            textAlign: "center",
                            color: cta,
                            paddingLeft: "10px",
                            paddingTop: "25px",
                          }}
                        >
                          <TriangleRight1 width={"50px"} strokewidth={3} />
                        </div>
                      </span>
                      <br />

                      <b style={{ fontSize: "18px" }}>Video abspielen</b>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="info p-3 mr-0 info-horizontal mt-0"
                  style={{ maxWidth: "100%" }}
                >
                  <div class="icon ">
                    <span style={{ paddingTop: "15px", display: "block" }}>
                      <Diamond width={"45px"} height={"45px"} strokewidth={2} />
                    </span>
                  </div>
                  <div class="description">
                    <h4 class="info-title">Raritäten mit globaler Nachfrage</h4>
                    <p class="description">
                      Hochklassige Weine werden in geringen Mengen produziert,
                      um Qualitätsstandards halten zu können. Dem limitierten
                      Angebot steht jedoch eine globale Nachfrage entgegen, die
                      für Preissteigerungen sorgt.
                    </p>
                  </div>
                </div>
                <div
                  class="info p-3 mt-3 info-horizontal mr-0"
                  style={{ maxWidth: "100%" }}
                >
                  <div class="icon ">
                    <span style={{ paddingTop: "15px", display: "block" }}>
                      <Measurement
                        width={"45px"}
                        height={"45px"}
                        strokewidth={2}
                      />
                    </span>
                  </div>
                  <div class="description">
                    <h4 class="info-title">Individuelle Portfolioberatung</h4>
                    <p class="description">
                      Ihre Bedürfnisse als Anleger stehen im Zentrum. Daher
                      stimmen wir unser Portfolioempfehlung optimal auf Ihre
                      Präferenzen ab.
                    </p>
                  </div>
                </div>
                <div
                  class="info p-3 mt-3 mr-0 info-horizontal"
                  style={{ maxWidth: "100%" }}
                >
                  <div class="icon ">
                    <span style={{ paddingTop: "15px", display: "block" }}>
                      <Safe width={"45px"} height={"45px"} strokewidth={2} />
                    </span>
                  </div>
                  <div class="description">
                    <h4 class="info-title">
                      Hochprofessionelle Lagerung in der Schweiz
                    </h4>
                    <p class="description">
                      Ihr Wein wird im Genfer Zollfreihafen eingelagert. Dort
                      besteht eine temperaturgeführte Lagerung. Zudem ist Ihr
                      Wein stets entsprechend seines aktuellen Werts versichert.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={"container"}>
              <div
                className="section"
                style={{
                  marginTop: "80px",
                }}
              >
                <center>
                  <h6
                    class="category text-muted"
                    style={{ fontSize: "1.14em" }}
                  >
                    Customer Stories
                  </h6>
                  <h2 class="title text-center pb-4">
                    Unser Antrieb sind unsere Kunden
                  </h2>
                </center>
                <section class="py-4 position-relative">
                  <div
                    id="carousel-testimonials"
                    class="carousel slide carousel-team"
                  >
                    {testis[0]}
                  </div>
                </section>
                <div class="separator-line separator-primary"></div>
                <section class="py-4 position-relative">
                  <div
                    id="carousel-testimonials"
                    class="carousel slide carousel-team"
                  >
                    {testis[1]}
                  </div>
                </section>
                <div class="separator-line separator-primary"></div>
                <section class="py-4 position-relative">
                  <div
                    id="carousel-testimonials"
                    class="carousel slide carousel-team"
                  >
                    {testis[2]}
                  </div>
                </section>
              </div>
            </div>

            <div class="projects-3" data-background-color="white">
              <div class="container w-100">
                <div class="row">
                  <div class="col-md-8 ml-auto mr-auto text-center">
                    <h6
                      class="category text-muted"
                      style={{ fontSize: "1.14em" }}
                    >
                      Das Unternehmen Berghaus & Cie.
                    </h6>
                    <h2 class="title text-dark">
                      Ihr Spezialist für Weininvestments
                    </h2>
                  </div>
                </div>
                <div class="section-story-overview">
                  <div class="row">
                    <div class="col-md-6">
                      <div
                        class="image-container image-left"
                        style={{
                          backgroundImage:
                            "url('https://images.pexels.com/photos/3461205/pexels-photo-3461205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                        }}
                      >
                        <p
                          class="blockquote blockquote-primary text-dark"
                          style={{ borderColor: "#ececec" }}
                        >
                          "Amber Interiors is available to assist in all aspects
                          of a project from start to finish including consulting
                          with Architects and Builders"
                        </p>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div
                        class="image-container image-right"
                        style={{
                          backgroundImage:
                            "url('https://images.pexels.com/photos/840996/pexels-photo-840996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                        }}
                      ></div>
                      <h6 class="category text-primary ">Design</h6>
                      <h4 class="card-title text-dark">Coco Kelley</h4>
                      <p className={"text-dark"}>
                        Amber Lewis’s interior design blog takes you inside the
                        creative workings of her Los Angeles–based studio. Keep
                        an eye on this website for an industry insider’s point
                        of view.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="section-story-overview">
                  <div class="row">
                    <div class="col-md-6">
                      <div
                        class="image-container image-left"
                        style={{
                          backgroundImage:
                            "url('https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                        }}
                      >
                        <p
                          class="blockquote blockquote-primary text-dark"
                          style={{ borderColor: "#ececec" }}
                        >
                          "We provide a simple, approachable way to decorate
                          your desired space with ease. Each e-décor is
                          completely individualized"
                        </p>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div
                        class="image-container image-right"
                        style={{
                          backgroundImage:
                            "url('https://images.pexels.com/photos/5919577/pexels-photo-5919577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                        }}
                      ></div>
                      <h6 class="category text-primary">E-Decor</h6>
                      <h4 class="card-title text-dark">Red Trad</h4>
                      <p className={"text-dark"}>
                        We designed this new build family home located in Santa
                        Monica with a mission to make the large size of the
                        property, feel cozy, collected, and unique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container">
              <center>
                <h6
                  class="category text-muted text-center"
                  style={{ fontSize: "1.14em" }}
                >
                  Einzeln angefertigte Portfolios
                </h6>
                <h2 class="title text-dark text-center">
                  Portfolios, die wir individuell für unsere Kunden
                  zusammengestellt haben
                </h2>
              </center>

              <div class="card">
                <div class="card-header p-0">
                  <ul
                    class="nav nav-tabs nav-tabs-neutral justify-content-center"
                    role="tablist"
                    style={{ backgroundColor: "#bfac82" }}
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#home1"
                        role="tab"
                        aria-selected="false"
                      >
                        10.000 €
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#profile1"
                        role="tab"
                        aria-selected="true"
                      >
                        25.000 €
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#messages1"
                        role="tab"
                        aria-selected="false"
                      >
                        100.000 €
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        data-toggle="tab"
                        href="#settings1"
                        role="tab"
                        aria-selected="false"
                      >
                        500.000 €
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="tab-content text-center">
                    <div
                      class="tab-pane animated fadeIn"
                      id="home1"
                      role="tabpanel"
                    >
                      <p>
                        {" "}
                        Der Kunde ist Unternehmer aus Köln und möchte sein
                        Portfolio durch ein Weininvestment in Höhe von 25.000 €
                        weiter diversifizieren. Das derzeitige Portfolio setzt
                        vor allem auf Indexfonds, Edelmetalle und Immobilien.
                        Der Kunde beschreibt sein Risikoprofil als moderat bis
                        konservativ. Schlussendlich hat der Kunde entsprechend
                        unserer Empfehlung vor allem in die Regionen Bordeaux
                        und Burgund investiert. Ein kleiner Anteil geht in die
                        Toskana. Von riskanteren Werten aus der neuen Welt haben
                        wir im Sinne des Kunden abgesehen.
                      </p>
                      <div className={"row"}>
                        <div className={"col col-sm-12 col-xl-6"}>
                          <img
                            className={"mx-auto"}
                            src={"/case25kpie.svg"}
                            style={{
                              boxShadow: "none",
                              maxWidth: "100%",
                            }}
                          ></img>
                        </div>
                        <div className={"col col-sm-12 col-xl-6"}>
                          <img
                            className={"mx-auto"}
                            src={"/case25klist.svg"}
                            style={{
                              boxShadow: "none",
                              maxWidth: "100%",
                            }}
                          ></img>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane active animated fadeIn"
                      id="profile1"
                      role="tabpanel"
                    >
                      <p>
                        {" "}
                        Der Kunde ist Unternehmer aus Köln und möchte sein
                        Portfolio durch ein Weininvestment in Höhe von 25.000 €
                        weiter diversifizieren. Das derzeitige Portfolio setzt
                        vor allem auf Indexfonds, Edelmetalle und Immobilien.
                        Der Kunde beschreibt sein Risikoprofil als moderat bis
                        konservativ. Schlussendlich hat der Kunde entsprechend
                        unserer Empfehlung vor allem in die Regionen Bordeaux
                        und Burgund investiert. Ein kleiner Anteil geht in die
                        Toskana. Von riskanteren Werten aus der neuen Welt haben
                        wir im Sinne des Kunden abgesehen.
                      </p>
                      <div className={"row"}>
                        <div className={"col col-sm-12 col-xl-6"}>
                          <img
                            className={"mx-auto"}
                            src={"/case25kpie.svg"}
                            style={{
                              boxShadow: "none",
                              maxWidth: "100%",
                            }}
                          ></img>
                        </div>
                        <div className={"col col-sm-12 col-xl-6"}>
                          <img
                            className={"mx-auto"}
                            src={"/case25klist.svg"}
                            style={{
                              boxShadow: "none",
                              maxWidth: "100%",
                            }}
                          ></img>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane animated fadeIn"
                      id="messages1"
                      role="tabpanel"
                    >
                      <p>
                        {" "}
                        Der Kunde ist Unternehmer aus Köln und möchte sein
                        Portfolio durch ein Weininvestment in Höhe von 25.000 €
                        weiter diversifizieren. Das derzeitige Portfolio setzt
                        vor allem auf Indexfonds, Edelmetalle und Immobilien.
                        Der Kunde beschreibt sein Risikoprofil als moderat bis
                        konservativ. Schlussendlich hat der Kunde entsprechend
                        unserer Empfehlung vor allem in die Regionen Bordeaux
                        und Burgund investiert. Ein kleiner Anteil geht in die
                        Toskana. Von riskanteren Werten aus der neuen Welt haben
                        wir im Sinne des Kunden abgesehen.
                      </p>
                      <div className={"row"}>
                        <div className={"col col-sm-12 col-xl-6"}>
                          <img
                            className={"mx-auto"}
                            src={"/case25kpie.svg"}
                            style={{
                              boxShadow: "none",
                              maxWidth: "100%",
                            }}
                          ></img>
                        </div>
                        <div className={"col col-sm-12 col-xl-6"}>
                          <img
                            className={"mx-auto"}
                            src={"/case25klist.svg"}
                            style={{
                              boxShadow: "none",
                              maxWidth: "100%",
                            }}
                          ></img>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane animated fadeIn"
                      id="settings1"
                      role="tabpanel"
                    >
                      <p>
                        {" "}
                        Der Kunde ist Unternehmer aus Köln und möchte sein
                        Portfolio durch ein Weininvestment in Höhe von 25.000 €
                        weiter diversifizieren. Das derzeitige Portfolio setzt
                        vor allem auf Indexfonds, Edelmetalle und Immobilien.
                        Der Kunde beschreibt sein Risikoprofil als moderat bis
                        konservativ. Schlussendlich hat der Kunde entsprechend
                        unserer Empfehlung vor allem in die Regionen Bordeaux
                        und Burgund investiert. Ein kleiner Anteil geht in die
                        Toskana. Von riskanteren Werten aus der neuen Welt haben
                        wir im Sinne des Kunden abgesehen.
                      </p>
                      <div className={"row"}>
                        <div className={"col col-sm-12 col-xl-6"}>
                          <img
                            className={"mx-auto"}
                            src={"/case25kpie.svg"}
                            style={{
                              boxShadow: "none",
                              maxWidth: "100%",
                            }}
                          ></img>
                        </div>
                        <div className={"col col-sm-12 col-xl-6"}>
                          <img
                            className={"mx-auto"}
                            src={"/case25klist.svg"}
                            style={{
                              boxShadow: "none",
                              maxWidth: "100%",
                            }}
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="section d-flex"
              style={{
                background:
                  "linear-gradient(15deg,hsl(42deg 25% 18%) 0%,hsl(42deg 26% 45%) 30%,hsl(41deg 33% 62%) 58%,hsl(41deg 35% 75%) 83%,hsl(41deg 47% 93%) 100%)",
                marginTop: "80px",
                height: "100vh",
              }}
            >
              <center style={{ margin: "auto auto auto auto" }}>
                <h2
                  className={"text-white"}
                  // style={{
                  //   filter: "drop-shadow(3px 5px 2px rgb(255 255 255 / 0.08))",
                  // }}
                >
                  Portfolio-Indikation in 2 Minuten!
                </h2>
                <h3 className={"text-white pb-5"} style={{ fontSize: "18px" }}>
                  Erhalten Sie innerhalb von 2 Minuten eine erste
                  Portfolio-Indikation auf der Basis Ihrer Präferenzen dank
                  unserer wineTelligence.
                </h3>
                <PreferencesForm />
              </center>

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

            <center
              id="faq-slide"
              style={{ marginTop: "80px" }}
              className={"animated"}
            >
              <h2>Häufig gestellte Fragen</h2>
              <div style={{ width: "800px" }}>
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
                          Wein Investments eignen sich hervorragend für die
                          Diversifizierung des Gesamtportfolios mit einem
                          exklusiven Sachwert und können über einen
                          langfristigen Investitionshorizont von 10 bis 15
                          Jahren eine durchschnittliche Rendite von etwa 8% bis
                          10% p.a. (kapitalertragssteuerfrei) erzielen. Dabei
                          korrelieren Wein Investments kaum mit dem
                          Kapitalmarkt.
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
                          persönliches Wein-Portfolio zusammenzustellen. Sie
                          müssen kein Weinprofi oder ausgewiesener Weinliebhaber
                          sein, um erfolgreich in Wein zu investieren.
                        </p>
                        <p>
                          Abgestimmt auf Ihre Wünsche und Bedürfnisse wie
                          Investitionssumme, Anlagehorizont, persönliche
                          Vorlieben, etc. entwickeln wir gemeinsam mit Ihnen die
                          passende Anlagestrategie. Darüber hinaus kümmern wir
                          uns um den fachgerechten Transport und die
                          professionelle Einlagerung Ihrer Weine im Genfer
                          Zollfreihafen.
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
                          Welche Investitionssumme ist für den Anfang sinnvoll?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Im Gegensatz zu anderen alternativen Anlageklassen wie
                          Kunst, Oldtimer oder Uhren ist die Einstiegshürde bei
                          Wein vergleichsweise niedrig. Der Kaufpreis eines
                          exquisiten Weins (hohes Entwicklungspotential, sehr
                          renommiertes Weingut) liegt im Schnitt bei ca. 250 €
                          pro Flasche, d. h. ca. 1.500 Euro pro Kiste.
                        </p>
                        <p>
                          Für die Zusammenstellung eines ausgewogenen
                          Wein-Portfolios, empfehlen wir den Erwerb von 5 bis 15
                          verschiedenen Weinen.
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
                          Bei einem Wein Investment über Berghaus & Cie. sind
                          Sie zu 100 % Eigentümer Ihres Weines. Sie investieren
                          in ein physisches Gut bzw. in einen Sachwert. Dies ist
                          ein bedeutender Vorteil gegenüber nicht-physischen
                          Investmentprodukten wie Rentenpapieren,
                          Bausparverträgen oder Lebensversicherungen, die außer
                          dem Papier, auf dem sie gedruckt sind, keinen
                          inhärenten Wert besitzen.
                        </p>
                        <p>
                          Als Besitzer erhalten Sie eine Auflistung Ihrer Weine,
                          sobald diese im Genfer Zollfreihafen eingelagert
                          wurden. Die Rechnung ist Ihr persönlicher
                          Eigentumsnachweis. Sie dient Ihnen auch als Nachweis
                          Ihres Herausgabeanspruches gegenüber dem Weinlager.
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
                          Gegen welche Risiken sind meine Weine versichert?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Bei Berghaus & Cie. sind Ihre Weine während der
                          Verweildauer in unserem Weinlager gegen Beschädigungen
                          oder andere wertmindernde Umstände versichert. Die
                          Versicherungssumme richtet sich nach dem aktuellen
                          Wert. Insbesondere sind die Weine gegen
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
                    Berghaus & Cie. berät seine Kunden unabhängig. Der Wert
                    eines Weines kann steigen oder fallen. Berghaus & Cie.
                    garantiert keine bestimmte Wertentwicklung der Weine. Die
                    Vorschläge von Berghaus & Cie. an den Kunden sind lediglich
                    Vorschläge. Der Kunde entscheidet frei über deren Kauf. In
                    die Vorschläge von Berghaus & Cie. fließen die Erfahrungen
                    der Mitarbeiter, aktuelle Marktentwicklungen,
                    Kritikerbewertungen sowie historische Marktentwicklungen mit
                    ein. Weiterhin kann und darf Berghaus & Cie. nicht
                    steuerlich hinsichtlich möglicher Gewinne aus dem Verkauf
                    von Wein beraten und empfiehlt den Kunden einen
                    Steuerberater diesbezüglich zu kontaktieren. Es gelten die
                    Allgemeinen Geschäftsbedingungen der Berghaus & Cie. GmbH,
                    eine aktuelle Fassung finden Sie unter{" "}
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

            <div
              class="container subscribe-line subscribe-line-white"
              style={{ border: "1px solid #bfac82", marginTop: "160px" }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-md-8 pl-5">
                    <h4 class="title mt-0">
                      Erhalten Sie einmal im Monat wertvolle Insights zu
                      Weininvestments
                    </h4>
                    <p class="">
                      Einmal im Monat berichten wir in unserem Newsletter über
                      den Markt der exquisiten Weine, Trends und Opportunitäten.
                      <br />
                      <br />
                      Als kleines Dankeschön erhlaten Sie nach dem Abonnieren
                      unseres Newsletters unseren Investment-Guide
                    </p>
                  </div>
                  <div class="col-md-4">
                    <img
                      src={
                        "https://bcassets.s3.amazonaws.com/static/images/smartmockups_l6nip5yn.original.jpg"
                      }
                      width={"100%"}
                    />
                  </div>
                  <div class="col-md-12">
                    <div class="card card-plain card-form-horizontal">
                      <div class="card-body">
                        <form method="" action="">
                          <div class="row">
                            <div class="col-sm-8">
                              <div
                                class="input-group"
                                style={{ fontSize: "2em" }}
                              >
                                <div class="input-group-prepend">
                                  <span
                                    class="input-group-text"
                                    style={{ fontSize: "0.8em" }}
                                  >
                                    <i class="now-ui-icons ui-1_email-85"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Ihre Email..."
                                />
                              </div>
                            </div>
                            <div class="col-sm-4">
                              <button
                                type="button"
                                onClick={() =>
                                  getServerSideProps("test@test1111.de")
                                }
                                class="btn btn-primary  btn-round btn-block cta-animated-gradient"
                                style={{ fontSize: "1.6em" }}
                              >
                                Newsletter abonnieren
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="container">
             
              <div class="row mt-5">
                <div class="col-md-5 ml-auto mt-5">
                  <div class="info info-horizontal">
                    <div class="icon icon-warning">
                      <i class="now-ui-icons users_single-02"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Work With Any Team</h4>
                      <p class="description">
                        Whether it’s for work or even the next family vacation,
                        Trello helps your team.
                      </p>
                    </div>
                  </div>
                  <div class="info info-horizontal">
                    <div class="icon icon-warning">
                      <i class="now-ui-icons business_chart-bar-32"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">A Productivity Platform</h4>
                      <p class="description">
                        Integrate the apps your team already uses directly into
                        your workflow.
                      </p>
                    </div>
                  </div>
                  <div class="info info-horizontal">
                    <div class="icon icon-warning">
                      <i class="now-ui-icons arrows-1_refresh-69"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Always In Sync</h4>
                      <p class="description">
                        No matter where you are, Trello stays in sync across all
                        of your devices.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-5 mr-auto">
                  <div
                    class="card card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url('https://media.winefolly.com/wine-collecting-1982-lafite-rothschild-bordeaux.jpg')",
                    }}
                  >
                    <div class="card-body">
                      <h2 class="card-title">Trello lets you work.</h2>
                      <p class="card-description text-white">
                        Trello’s boards, lists, and cards enable you to organize
                        and prioritize your projects in a fun, flexible and
                        rewarding way.
                      </p>
                      <label class="badge badge-neutral">Trello</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="about-team team-4">
            <div class="container">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                  <h2 class="title">We are nerd rockstars</h2>
                  <h4 class="description">
                    This is the paragraph where you can write more details about
                    your team. Keep you user engaged by providing meaningful
                    information.
                  </h4>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-6 col-lg-7 ml-auto mr-auto">
                  <div class="card card-profile card-plain">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="card-image">
                          <a href="#pablo">
                            <img
                              class="img img-raised rounded"
                              src="https://media.winefolly.com/wine-collecting-1982-lafite-rothschild-bordeaux.jpg"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-7">
                        <div class="card-body">
                          <h4 class="card-title">Ella Evelyn</h4>
                          <h6 class="category">Air Crew Member</h6>
                          <p class="card-description">
                            Think in the morning. Act in the noon. Eat in the
                            evening. Sleep in the night......
                          </p>
                          <div class="card-footer">
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-twitter"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-facebook"
                            >
                              <i class="fab fa-facebook-square"></i>
                            </a>
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-google"
                            >
                              <i class="fab fa-google"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-7 ml-auto mr-auto">
                  <div class="card card-profile card-plain">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="card-image">
                          <a href="#pablo">
                            <img
                              class="img img-raised rounded"
                              src="https://media.winefolly.com/wine-collecting-1982-lafite-rothschild-bordeaux.jpg"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-7">
                        <div class="card-body">
                          <h4 class="card-title">Mila Skylar</h4>
                          <h6 class="category">Architect</h6>
                          <p class="card-description">
                            Love cures people - both the ones who give it and
                            the ones who receive it...
                          </p>
                          <div class="card-footer">
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-linkedin"
                            >
                              <i class="fab fa-linkedin"></i>
                            </a>
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-facebook"
                            >
                              <i class="fab fa-facebook-square"></i>
                            </a>
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-dribbble"
                            >
                              <i class="fab fa-dribbble"></i>
                            </a>
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-google"
                            >
                              <i class="fab fa-google"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-7 ml-auto mr-auto">
                  <div class="card card-profile card-plain">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="card-image">
                          <a href="#pablo">
                            <img
                              class="img img-raised rounded"
                              src="https://media.winefolly.com/wine-collecting-1982-lafite-rothschild-bordeaux.jpg"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-7">
                        <div class="card-body">
                          <h4 class="card-title">Daniel Carter</h4>
                          <h6 class="category">Aviation Inspector</h6>
                          <p class="card-description">
                            Keep your face always toward the sunshine - and
                            shadows will fall behind you...
                          </p>
                          <div class="card-footer">
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-youtube"
                            >
                              <i class="fa fab-youtube"></i>
                            </a>
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-twitter"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-instagram"
                            >
                              <i class="fab fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-7 ml-auto mr-auto">
                  <div class="card card-profile card-plain">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="card-image">
                          <a href="#pablo">
                            <img
                              class="img img-raised rounded"
                              src="https://media.winefolly.com/wine-collecting-1982-lafite-rothschild-bordeaux.jpg"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-md-7">
                        <div class="card-body">
                          <h4 class="card-title">Dylan Wyatt</h4>
                          <h6 class="category">Conservation Scientist</h6>
                          <p class="card-description">
                            There is only one corner of the universe you can be
                            certain of improving, and that's your own self...
                          </p>
                          <div class="card-footer">
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-linkedin"
                            >
                              <i class="fab fa-linkedin"></i>
                            </a>
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-facebook"
                            >
                              <i class="fab fa-facebook-square"></i>
                            </a>
                            <a
                              href="#pablo"
                              class="btn btn-icon btn-neutral btn-google"
                            >
                              <i class="fab fa-google"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="about-office">
            <div class="container">
              <div class="row text-center">
                <div class="col-md-8 ml-auto mr-auto">
                  <h2 class="title">Our office is our second home</h2>
                  <h4 class="description">
                    Here are some pictures from our office. You can see the
                    place looks like a palace and is fully equiped with
                    everything you need to get the job done.
                  </h4>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <img
                    class="rounded img-raised"
                    alt="Raised Image"
                    src="https://media.winefolly.com/wine-collecting-1982-lafite-rothschild-bordeaux.jpg"
                  />
                </div>
                <div class="col-md-4">
                  <img
                    class="rounded img-raised"
                    alt="Raised Image"
                    src="https://media.winefolly.com/wine-collecting-1982-lafite-rothschild-bordeaux.jpg"
                  />
                </div>
                <div class="col-md-4">
                  <img
                    class="rounded img-raised"
                    alt="Raised Image"
                    src="https://media.winefolly.com/wine-collecting-1982-lafite-rothschild-bordeaux.jpg"
                  />
                </div>
                <div class="col-md-6">
                  <img
                    class="rounded img-raised"
                    alt="Raised Image"
                    src="https://media.winefolly.com/wine-collecting-1982-lafite-rothschild-bordeaux.jpg"
                  />
                </div>
                <div class="col-md-6">
                  <img
                    class="rounded img-raised"
                    alt="Raised Image"
                    src="https://media.winefolly.com/wine-collecting-1982-lafite-rothschild-bordeaux.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="about-contact">
            <div class="container">
              <div class="row">
                <div class="col-md-8 mr-auto ml-auto">
                  <h2 class="text-center title">Want to work with us?</h2>
                  <h4 class="text-center description">
                    Divide details about your product or agency work into parts.
                    Write a few lines about each one and contact us about any
                    further collaboration. We will get back to you in a couple
                    of hours.
                  </h4>
                  
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(IndexDesktopNew);
