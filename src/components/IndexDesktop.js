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

const IndexDesktop = (props) => {
  const [showModal, toggleShowModal] = useState(false);
  const [markup, changeMarkup] = useState(null);
  const [section, setSection] = useState("welcome");
  const [width, setWidth] = useState(1300);
  const [showVideoModal, toggleShowVideoModal] = useState(false);
  const [watchVideoUrl, setWatchVideoUrl] = useState("")
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePill, setActivePill] = useState(0);

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

        window.fullpage_api.setAllowScrolling(false, "down");
        window.fullpage_api.setAllowScrolling(false, "up");
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
        active={!videoReady}
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
                  {/* <video
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
                  </video> */}
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
                                            style={{ maxWidth: "850px" }}
                                            className={"row mx-auto"}
                                          >
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
                                       setWatchVideoUrl("https://www.youtube.com/embed/4V1sIZthsgI")
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
                                       setWatchVideoUrl("https://www.youtube.com/embed/10zi2gIi8Lk")
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
                                    <b>individuelles Portfolio</b> zusammen. Den
                                    professionellen Transport und die
                                    klimageführte Lagerung in der Schweiz
                                    organisieren wir für Sie. "
                                  </p>
                                  <p className={"text-center"}>- Peter Irnich, Geschäftsführer</p>
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
                                      style={{color: "white"}}
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
                                  <div className={"col text-right"}> <a href={"https://www.berghauscie.de/blog/was-verbirgt-sich-hinter-en-primeur-bei-wein-investments"} target={"_blank"} className={"btn btn-sm"}>Mehr erfahren</a>
                                 </div>
                                  <div className={"col text-left"}> <a href={"https://calendly.com/berghausundcie/beratungsgesprach"} target={"_blank"} className={"btn btn-sm bg-cta"}>En Primeur reservieren</a>
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
                                        setWatchVideoUrl("https://www.youtube.com/embed/_Ftgc9UN_wI")
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
                                    Geschäftsführer Tristan A. Berghaus stellt sich den kritischen Fragen der "Investment-Babos". Klares Fazit der Investmentprofis: Wein ist noch interessanter als Luxus-Uhren und Oldtimer.
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
                  <center id="process-slide" className={"animated d-none"}>
                    <h2>
                      Spannender Prozess - wir erschließen Ihnen den Markt und
                      Sie profitieren davon.
                    </h2>
                    <div
                      className={"mt-n2 pb-3"}
                      style={{ fontSize: "15px", maxWidth: "800px" }}
                    >
                      Von der KI-gestützen Portfolioberatung über den Bezug, die
                      Lagerung und den Verkauf Ihrer Weine sind wir stets Ihr
                      engagierter Partner.
                    </div>
                    <div
                      id="pills-card"
                      style={{
                        backgroundColor: pillsCardColors[activePill],
                        maxWidth: "800px",
                      }}
                      {...swipeHandlers}
                    >
                      <div class="pills">
                        <div
                          onClick={() => setActivePill(0)}
                          className={
                            "pills-item " + (activePill == 0 && "active")
                          }
                          data-color="#A38CC2"
                          onclick="select(this)"
                        >
                          <span class="icon-home">
                            <Ai width={"24px"} strokewidth={3}></Ai>
                          </span>
                          <div class="title">Start</div>
                        </div>

                        <div
                          onClick={() => setActivePill(1)}
                          className={
                            "pills-item " + (activePill == 1 && "active")
                          }
                          data-color="#597549"
                          onclick="select(this)"
                        >
                          <span class="icon-heart">
                            <VirtualAssistant2 width={"24px"} strokewidth={3} />
                          </span>
                          <div class="title">Beratung</div>
                        </div>

                        <div
                          onClick={() => setActivePill(2)}
                          className={
                            "pills-item " + (activePill == 2 && "active")
                          }
                          data-color="#91AABF"
                          onclick="select(this)"
                        >
                          <span class="icon-search">
                            <StorageUnit width={"24px"} strokewidth={3} />
                          </span>
                          <div class="title">Lagerung</div>
                        </div>

                        <div
                          onClick={() => setActivePill(3)}
                          className={
                            "pills-item " + (activePill == 3 && "active")
                          }
                          data-color="#80C488"
                          onclick="select(this)"
                        >
                          <span class="icon-profile">
                            <Handout width={"24px"} strokewidth={3} />
                          </span>
                          <div class="title">Verkauf</div>
                        </div>
                      </div>
                      {pillContent[activePill]}
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
                      wineTelligence
                    </h2>
                    <h3
                      className={"text-white pb-5"}
                      style={{ fontSize: "18px" }}
                    >
                      Erhalten Sie eine erste Portfolio-Indikation auf der Basis
                      von künstlicher Intelligenz.
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
