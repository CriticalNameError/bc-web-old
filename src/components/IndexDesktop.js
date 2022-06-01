import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import dynamic from "next/dynamic";
import { Chrono } from "react-chrono";
import { ImageFromCms } from "helpers/utils";
import LandingFooter from "components/Footer/LandingFooter";
import CustomModal from "../helpers/CustomModal";
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
import SelectCalendlyDate from "components/SelectCalendlyDate";
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
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
  AccordionItemHeading,
} from "react-accessible-accordion";

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
  const [isPlaying, setIsPlaying] = useState(true);
  const [maxServicesCardHeight, setMaxServicesCardHeight] = useState(null);
  const [finishedLoadingDocument, toggleFinishedLoadingDocument] =
    useState(false);
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

      document.getElementById("side-cta").style.display = "none";

      vn.style.boxShadow = "none";
      vn.classList.toggle("bg-white");
      vn.classList.remove("pt-5");
      vn.classList.remove("py-5");
      ct.classList.add("d-none");
    } catch (error) {
      console.log(error);
    }
  }, []);

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
    document.getElementById("video-background").play();
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

  const playVideoAfterDelay = () =>
    setTimeout(() => {
      document.getElementById("explainer-video").play();
    }, 1000);

  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      sectionsColor={["transparent", "transparent", "#bfac82"]}
      anchors={[
        "welcome",
        "facts",
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
                className={"p-0 m-0 animated fadeIn slow"}
                style={{ border: 0, backgroundColor: "transparent" }}
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
                  plays-inline
                  controls
                >
                  <source
                    src="https://bcassets.s3.eu-west-1.amazonaws.com/Newsletter+Teaser.mp4"
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
                    fullpageApi.moveTo(3);
                    toggleShowVideoModal(false);
                    document.getElementById("video-background").play();
                  }}
                  className={"mx-auto btn btn-lg bg-cta p-3 mt-4"}
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
                  style={{
                    position: "absolute",
                    // filter: "grayscale(1)",
                    top: 0,
                    left: 0,
                    minWidth: "100%",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: "-100",
                  }}
                  muted
                  plays-inline
                >
                  <source
                    src="https://bcassets.s3.eu-west-1.amazonaws.com/Newsletter+Teaser.mp4#t=14,44"
                    type="video/mp4"
                  />
                </video>
                <div
                  className={" px-0 animated"}
                  style={{
                    overflowX: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    minWidth: "100%",
                    width: "100%",
                    height: "100%",
                    background: "rgba(255,255,255,0.85)",
                  }}
                  id={"welcome-slide"}
                >
                  <div className="row h-100">
                    <div className={"col-12 my-auto text-center  "}>
                      <div
                        className={"mx-auto my-auto"}
                        // style={{ maxWidth: "750px" }}
                      >
                        <div className={"pl-md-4 mt-2 animated fadeIn slower"}>
                          <div className={"row mt-3"}>
                            <div
                              className={
                                "col-12 text-right animated fadeIn slower"
                              }
                            >
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
                                    <div className={"animated fadeIn my-auto"}>
                                      <h1
                                        className={"p-3 pb-1 pt-0 mb-n3"}
                                        style={{
                                          color: "#333",
                                          filter:
                                            "drop-shadow(rgba(100, 100, 100, 0.6) 1px 1px 2px)",
                                          fontSize: "65px",
                                          fontFamily: "'Whisper', cursive",
                                        }}
                                      >
                                        {" "}
                                        Disruptiv Traditionell
                                      </h1>
                                      <div
                                        className={"pb-5 mb-3"}
                                        style={{ fontSize: "15px" }}
                                      >
                                        Ihr Weininvestment in den besten Händen
                                        - professionell, transparent, zeitgemäß.{" "}
                                      </div>
                                      <span
                                        onClick={() => {
                                          toggleShowVideoModal(true);
                                          playVideoAfterDelay();
                                          document
                                            .getElementById("video-background")
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

                                        <b>Video abspielen</b>
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
                                          onClick={() => fullpageApi.moveTo(3)}
                                          className={
                                            "mr-auto btn bg-cta p-2 mt-4"
                                          }
                                          style={{ fontSize: "18px" }}
                                        >
                                          wineTelligence ausprobieren
                                        </button>
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

              <div className="section dotted-background" >
                <center id="facts-slide" className={"animated d-none"}>
                  <h2>
                    Exquisiter Wein - stabiler Sachwert mit attraktiver Rendite
                  </h2>
                  <div
                    className={"mt-n2 pb-3"}
                    style={{ fontSize: "15px", maxWidth: "800px" }}
                  >
                    Stabiles Wachstum und jährliche Renditen im zweistelligen
                    Prozentbereich - die Index-Entwicklung des Livex 1000
                    verdeutlicht das Potential der Sachanlage Wein.
                  </div>
                  <div style={{ width: "800px", height: "500px", border: "1px solid grey", paddingTop: "15px" }}>
                    <DynamicLivexPriceChart height={"500px"} />
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
                    Ihr unverbindlicher Portfoliovorschlag in wenigen Sekunden.
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
                              Für wen empfiehlt sich ein Weininvestment?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Ein Weininvestment empfiehlt sich besonders für
                              all diejenigen, die ihr Portfolio abrunden wollen
                              und ein alternatives Investment mit einem mittel-
                              bis langfristiges Anlagehorizont (ca. 5 bis 10
                              Jahre) und der Aussicht auf eine gute Rendite
                              suchen.
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
                              Bei einem Weininvestment über Berghaus & Cie. sind
                              Sie zu 100 % Eigentümer Ihres Weines. Sie
                              investieren in ein physisches Gut bzw. in einen
                              Sachwert. Dies ist bedeutender Vorteil gegenüber
                              nicht- physischen Gütern wie Aktien, die außer dem
                              Papier, auf dem sie gedruckt sind, keinen
                              inhärenten Wert besitzen.
                            </p>
                            <p>
                              Als Besitzer erhalten Sie, sobald die Weine in
                              unserem Weinlager eingelagert werden, eine
                              Auflistung Ihrer Weine. Diese Auflistung ist in
                              Kombination mit der Rechnung Ihr persönlicher
                              Eigentumsnachweis und dient Ihnen auch als
                              Nachweis Ihres Herausgabeanspruches gegenüber dem
                              Weinlager.
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
                              Kann ich den Wein auch selbst trinken?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Selbstverständlich. Wenn Sie Ihren Wein zu einem
                              besonderen Anlass, z. B. zu einer Hochzeit, einem
                              Jubiläum, einem runden Geburtstag, einer Taufe
                              oder Ähnlichem selbst verzehren möchten, dann
                              senden wir ihnen den Wein aus dem Weinlager gerne
                              - versichert und fachgerecht transportiert - an
                              Ihre Wunschadresse zu.
                            </p>
                            <p>
                              Sie sollten jedoch bedenken, dass die
                              Mehrwertsteuer fällig wird, wenn der Wein das
                              Umsatzsteuerlager verlässt.
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
                              Bei Berghaus & Cie. sind Ihre Weine während des
                              Transports und der Verweildauer in unserem
                              Weinlager gegen Beschädigungen oder andere
                              wertmindernde Umstände versichert. Die
                              Versicherungssumme richtet sich nach dem
                              Bezugspreis.
                            </p>
                            <p>
                              Sollten Sie nach einiger Zeit wünschen, dass Ihre
                              Weine höher versichert werden, um der
                              Marktentwicklung Rechnung zu tragen, ist das
                              selbstverständlich möglich. Gerne passen wir die
                              Versicherungssumme für sie an.
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
                              Welche Anlagedauer ist für Weininvestments
                              empfehlenswert?
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Im Allgemeinen entspricht die Anlagedauer eines
                              Weines seiner jeweiligen Reifedauer. Diese hängt
                              von verschiedenen Faktoren ab wie, z. B. der
                              Rebsorte und der Art des Anbaus. Die
                              Flaschenreifung bei Spitzenweinen kann zwischen
                              fünf und fünfzehn Jahren, in Einzelfällen aber
                              auch mehr betragen.
                            </p>
                            <p>
                              Berghaus & Cie. empfiehlt Ihnen nur Weine, die das
                              Potential haben ihrem persönlichen Anlagehorizont
                              zu entsprechen. Denn die Reifedauer spielt bei
                              Weininvestments eine zentrale Rolle. Nur dann,
                              wenn aus einem besonderen Jahrgang nach der
                              Reifung ein einzigartiger Wein geworden ist, lässt
                              sich ein attraktiver Wiederverkaufspreis
                              realisieren.
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
                        Die Firma Berghaus & Cie. GmbH ist ein
                        Weinhandelsunternehmen, das Kunden zu ihren Weinen
                        Vergleichswerte in der preislichen Entwicklung zur
                        Verfügung stellt. Berghaus & Cie. ist kein
                        Finanzdienstleister oder -berater. Berghaus & Cie.
                        verkauft Weine nur in für Privatpersonen vertretbaren
                        Mengen. Für individuelle steuerliche Fragen wenden Sie
                        sich bitte an einen Steuerberater. Es gelten die
                        Allgemeinen Geschäftsbedingungen der Berghaus & Cie.
                        GmbH, eine aktuelle Fassung finden Sie unter{" "}
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
                  <p className={"mb-3"} style={{ fontSize: "18px" }}>
                    Wünschen Sie eine persönliche Beratung? Gerne beantorten wir
                    Ihnre Fragen im Rahmen eines Beratungstermins.
                  </p>

                  <SelectCalendlyDate width={"60%"} />
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
    // <>
    //   <CustomModal
    //     markup={markup}
    //     showModal={showModal}
    //     toggleShowModal={toggleShowModal}
    //   ></CustomModal>
    //   <div className={"container-fluid px-0"} style={{ overflowX: "hidden" }}>
    //     <div className="row">
    //       <div className={"col-12 my-auto text-center  "}>
    //         <div
    //           className={"mx-auto"}
    //           // style={{ maxWidth: "750px" }}
    //         >
    //           <div className={"mt-md-4 animated zoomIn slower"}>
    //             <span
    //               style={{
    //                 display: "inline-block",
    //                 minHeight: "130px",
    //                 marginTop: "150px",
    //                 filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.07))",
    //               }}
    //               className={"text-primary"}
    //             >
    //               <LogoSublineLavendel
    //                 width={width > 500 ? "400px" : "250px"}
    //               />
    //             </span>
    //             {/* <ImageFromCms
    //             title={"logo_subline_lavendel"}
    //             width={width > 500 ? 550 : 250}
    //             jpegquality={5}
    //           ></ImageFromCms> */}
    //           </div>

    //           <div
    //             // className={
    //             //   " pl-md-4 animate__animated animate__delay-1s animate__fadeInLeft animate__slow"
    //             // }
    //             className={"pl-md-4 mt-3 animated fadeIn slower"}
    //           >
    //             <h1 className={" "} style={{ fontSize: "24px" }}>
    //               Investieren Sie in einen genussvollen Sachwert <br /> mit
    //               einem attraktiven Renditepotential.
    //             </h1>{" "}
    //             <br />
    //             <div className={"row mt-3"}>
    //               <div className={"col-6 text-right animated fadeIn slower"}>
    //                 <MockupLanding
    //                   width={width > 991 ? (width > 1500 ? 235 : 205) : 200}
    //                 />
    //                 {/* <ImageFromCms
    //                   title={width > 600 ? "mockup_mobile" : "mockup_mobile"}
    //                   width={width > 991 ? (width > 1500 ? 235 : 205) : 200}
    //                   jpegquality={10}
    //                 /> */}
    //               </div>
    //               <div className={"col-6 text-left mt-md-4"}>
    //                 <div
    //                   className={"text-left"}
    //                   style={{
    //                     fontSize: "18px",
    //                     width: "400px",
    //                     lineHeight: "1.5em",
    //                   }}
    //                 >
    //                   <br />
    //                   <CheckSingle
    //                     width={"25px"}
    //                     height={"30px"}
    //                     strokewidth={3}
    //                   />{" "}
    //                   ohne spezielle Vorkenntnisse <br />
    //                   <CheckSingle
    //                     width={"25px"}
    //                     height={"30px"}
    //                     strokewidth={3}
    //                   />{" "}
    //                   sparen Sie Ihre wertvolle Zeit <br />
    //                   <CheckSingle
    //                     width={"25px"}
    //                     height={"30px"}
    //                     strokewidth={3}
    //                   />{" "}
    //                   durchschnittliche Rendite 7 % p.a. <br />
    //                   <br />
    //                 </div>

    //                 {/* <CtaButton children={<span style={{fontSize: "18px"}}>Jetzt starten</span>}/> */}
    //                 <button
    //                   onClick={() => props.toggleShowCalendlyModal(true)}
    //                   className={
    //                     "mr-auto btn bg-cta p-2 animated infinite pulse slower"
    //                   }
    //                   style={{ fontSize: "18px" }}
    //                 >
    //                   Erstgespräch vereinbaren
    //                 </button>
    //               </div>
    //               <br />
    //             </div>
    //             <div
    //               // className={
    //               //   "animate__animated animate__delay-1s animate__fadeInRight animate__slow"
    //               // }
    //               className={"animated fadeIn slower"}
    //             >
    //               {/* <ImageFromCms
    //                 title={width > 600 ? "mockup_mobile" : "mockup_mobile"}
    //                 width={width > 991 ? (width > 1500 ? 475 : 295) : 250}
    //                 jpegquality={30}
    //               /> */}
    //             </div>
    //             {/* <span>
    //               <a href={"https://weindepot.berghaus-cie.com/register"}>

    //                 <button
    //                   className={
    //                     "mx-auto btn bg-cta p-3 px-5 animated infinite pulse slower"
    //                   }
    //                   style={{ fontSize: "18px" }}
    //                 >
    //                   Erstgespräch vereinbaren
    //                 </button>
    //               </a>
    //             </span> */}
    //           </div>

    //           {/* <a
    //             className={"move-down mt-n3"}
    //             href={"#services"}
    //             style={{ cursor: "pointer" }}
    //           >
    //             <span
    //               className={"animated infinite pulse"}
    //               style={{ cursor: "pointer", color: primary }}
    //             >
    //               <DownArrow
    //                 width={"30px"}
    //                 height={"30px"}
    //                 strokewidth={3}
    //                 style={{ display: "inline-block" }}
    //               />
    //             </span>
    //           </a> */}
    //         </div>
    //       </div>

    //       <div class=" text-center w-100 animated fadeIn slower">
    //         <div
    //           data-aos="fade-up"
    //           data-aos-anchor-placement="center-bottom"
    //           className={"mb-3"}
    //           // style={{ backgroundColor: "rgb(191, 157, 226)" }}
    //         >
    //           {/* <div style={{ overflow: "hidden" }}>
    //             <svg
    //               preserveAspectRatio="none"
    //               viewBox="0 0 1200 120"
    //               xmlns="http://www.w3.org/2000/svg"
    //               style={{
    //                 fill: "#ffffff",
    //                 width: "196%",
    //                 height: 50,
    //                 transform: "scaleX(-1)",
    //                 marginBottom: "-1px",
    //                 marginLeft: "-1px",
    //               }}
    //             >
    //               <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
    //             </svg>
    //           </div> */}

    //           <div className={"row animated fadeInUp slower text-left"}>
    //             <h3
    //               className={"col-md-8 offset-md-2 mb-3"}
    //               style={{ fontSize: "18px" }}
    //             >
    //               Unsere Auszeichnungen
    //             </h3>
    //             <br />
    //             <div
    //               style={{}}
    //               className={
    //                 "d-flex justify-content-between col-md-8 offset-md-2 pt-1 mt-1"
    //               }
    //             >
    //               <div
    //                 style={{
    //                   padding: "10px",
    //                   borderRadius: "7px",
    //                   backgroundColor: "white",
    //                   boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
    //                 }}
    //               >
    //                 <Award1 height={"60px"} />
    //                 {/* <ImageFromCms
    //                   title={"award_1"}
    //                   height={width > 50 ? 80 : 75}
    //                   jpegquality={17}
    //                 ></ImageFromCms> */}
    //               </div>
    //               <div
    //                 style={{
    //                   padding: "10px",
    //                   borderRadius: "7px",
    //                   backgroundColor: "white",
    //                   boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
    //                 }}
    //               >
    //                 <Award2 height={"60px"} />
    //                 {/* <ImageFromCms
    //                   title={"award_2"}
    //                   height={width > 50 ? 80 : 75}
    //                   jpegquality={17}
    //                 ></ImageFromCms> */}
    //               </div>
    //               <div
    //                 style={{
    //                   padding: "10px",
    //                   borderRadius: "7px",
    //                   backgroundColor: "white",
    //                   boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
    //                 }}
    //               >
    //                 <Award3 height={"60px"} />
    //                 {/* <ImageFromCms
    //                   title={"award_3"}
    //                   height={width > 50 ? 80 : 75}
    //                   jpegquality={17}
    //                 ></ImageFromCms> */}
    //               </div>
    //             </div>
    //           </div>

    //           {/* <div style={{ overflow: "hidden" }}>
    //             <svg
    //               preserveAspectRatio="none"
    //               viewBox="0 0 1200 120"
    //               xmlns="http://www.w3.org/2000/svg"
    //               style={{
    //                 fill: "#ffffff",
    //                 width: "197%",
    //                 height: 50,
    //                 transform: "rotate(180deg) scaleX(-1)",
    //                 marginBottom: "-1px",
    //                 marginLeft: "-1px",
    //               }}
    //             >
    //               <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
    //             </svg>
    //           </div> */}
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <section
    //         className={"mx-auto text-center mt-md-5"}
    //         data-aos="fade-up"
    //         id={"services"}
    //         data-aos-anchor-placement="center-bottom"
    //         style={{ maxWidth: "1200px" }}
    //       >
    //         <h2 className={"h3"} style={{ fontSize: "24px" }}>
    //           Was dürfen Sie von uns erwarten?
    //         </h2>
    //         <p
    //           className={"mx-auto"}
    //           style={{ fontSize: "18px", maxWidth: "750px" }}
    //         >
    //           Berghaus & Cie. bietet Ihnen Zugang zu den besten Weinen der Welt
    //           für Ihr persönliches Weininvestment. Wir unterstützen Sie beim
    //           Vermögensaufbau durch den Erwerb von Sachwerten – kompetent,
    //           transparent und mit Unterstützung modernster Technologien.
    //         </p>
    //         <div className={"card"} style={{maxWidth: "950px"}}>
    //         <ImageFromCms
    //           title={"team_formal"}
    //           width={Math.min(width * 0.85, 950)}
    //           fill={width > 991 ? "1200x650" : "600x430"}
    //           jpegquality={40}
    //           classes={"animated fadeIn img  mb-3"}
    //         />

    //         <PlayAudio />
    //         </div>
    //         <div className={"mt-5"}>
    //           <div className={"mb-3 mt-md-5"} style={{ fontSize: "24px" }}>
    //             Exquisite Jahrgänge aus unserem aktuellen Sortiment
    //           </div>
    //           <OfferPromotionSlider />
    //         </div>
    //       </section>
    //     </div>

    //     <div>
    //       <div
    //         class="container text-center pb-5 mt-5 pt-4"
    //         style={{ overflowX: "hidden" }}
    //       >
    //         <div
    //           data-aos="fade-up"
    //           data-aos-anchor-placement="center-bottom"
    //           className={"mb-3 mt-md-5"}
    //         >
    //           <h2 className={"h3"} style={{ fontSize: "24px" }}>
    //             In fünf einfachen Schritten zu Ihrem persönlichen Weininvestment
    //             bei Berghaus & Cie.
    //             {/* Wie läuft ein{" "}
    //             <span
    //               style={{
    //                 wordBreak: "break-word",
    //                 hyphens: "auto",
    //               }}
    //             >
    //               Wein&shy;investment
    //             </span>{" "}
    //             bei Berghaus & Cie. ab? */}
    //           </h2>
    //         </div>

    //         <VerticalTimeline>
    //           <VerticalTimelineElement
    //             className="vertical-timeline-element--work"
    //             iconStyle={{ background: primary, color: "#fff" }}
    //             icon={
    //               <BMeeting
    //                 className={"text-white timeline-icon"}
    //                 width={"30px"}
    //                 height={"30px"}
    //                 strokewidth={3}
    //                 style={{ padding: "13px" }}
    //               />
    //             }
    //           >
    //             <h3
    //               className="vertical-timeline-element-title h5"
    //               style={{ fontSize: "18px" }}
    //             >
    //               1. Beratung
    //             </h3>

    //             <p style={{ fontSize: "14px" }}>
    //               Wir sind für Sie da und entwickeln gemeinsam Ihre ganz
    //               persönliche Anlagestrategie.
    //             </p>
    //           </VerticalTimelineElement>
    //           <VerticalTimelineElement
    //             className="vertical-timeline-element--work"
    //             iconStyle={{ background: primary, color: "#fff" }}
    //             icon={
    //               <Handshake
    //                 className={"text-white timeline-icon"}
    //                 width={"30px"}
    //                 height={"30px"}
    //                 strokewidth={3}
    //                 style={{ padding: "13px" }}
    //               />
    //             }
    //           >
    //             <h3
    //               className="vertical-timeline-element-title h5"
    //               style={{ fontSize: "18px" }}
    //             >
    //               2. Kaufabwicklung
    //             </h3>

    //             <p style={{ fontSize: "14px" }}>
    //               Über unser globales Netzwerk beziehen wir Ihre Weine mit
    //               lückenloser Provenienz zu besten Konditionen.
    //             </p>
    //           </VerticalTimelineElement>
    //           <VerticalTimelineElement
    //             className="vertical-timeline-element--work"
    //             iconStyle={{ background: primary, color: "#fff" }}
    //             icon={
    //               <DeliveryFast
    //                 className={"text-white timeline-icon"}
    //                 width={"30px"}
    //                 height={"30px"}
    //                 strokewidth={3}
    //                 style={{ padding: "13px" }}
    //               />
    //             }
    //           >
    //             <h3
    //               className="vertical-timeline-element-title h5"
    //               style={{ fontSize: "18px" }}
    //             >
    //               3. Transport
    //             </h3>

    //             <p style={{ fontSize: "14px" }}>
    //               Nach dem Kauf werden Ihre exquisiten Weine professionell und
    //               sicher in unser Lager transportiert.
    //             </p>
    //           </VerticalTimelineElement>
    //           <VerticalTimelineElement
    //             className="vertical-timeline-element--work"
    //             iconStyle={{ background: primary, color: "#fff" }}
    //             icon={
    //               <StorageUnit
    //                 className={"text-white timeline-icon"}
    //                 width={"30px"}
    //                 height={"30px"}
    //                 strokewidth={3}
    //                 style={{ padding: "13px" }}
    //               />
    //             }
    //           >
    //             <h3
    //               className="vertical-timeline-element-title h5"
    //               style={{ fontSize: "18px" }}
    //             >
    //               4. Lagerung
    //             </h3>
    //             <h4 className="vertical-timeline-element-subtitle"></h4>
    //             <p style={{ fontSize: "14px" }}>
    //               In unserem Weinlager können Ihre Weine versichert und unter
    //               besten klimatischen Bedingungen optimal ausreifen.
    //             </p>
    //           </VerticalTimelineElement>
    //           <VerticalTimelineElement
    //             className="vertical-timeline-element--education"
    //             iconStyle={{ background: primary, color: "#fff" }}
    //             icon={
    //               <Handout
    //                 className={"text-white timeline-icon"}
    //                 width={"30px"}
    //                 height={"30px"}
    //                 strokewidth={3}
    //                 style={{ padding: "13px" }}
    //               />
    //             }
    //           >
    //             <h3
    //               className="vertical-timeline-element-title h5"
    //               style={{ fontSize: "18px" }}
    //             >
    //               5. Verkauf
    //             </h3>

    //             <p style={{ fontSize: "14px" }}>
    //               Wir behalten die Reifung und Wertentwicklung Ihres Wein im
    //               Blick, damit Sie ihn zum bestmöglichen Zeitpunkt veräußern
    //               können.
    //             </p>
    //           </VerticalTimelineElement>
    //         </VerticalTimeline>
    //       </div>
    //     </div>

    //     <div class="container text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
    //       <div
    //         data-aos="fade-up"
    //         data-aos-anchor-placement="center-bottom"
    //         className={"mb-3"}
    //       >
    //         <div className={" text-center"}>
    //           <div style={{ fontSize: "24px" }}>Ihr digitales Weindepot</div>
    //           <br />
    //           <br />

    //           <ImageFromCms
    //             title={width > 600 ? "mockup_all" : "mockup_all"}
    //             width={width > 991 ? (width > 1500 ? 775 : 535) : 200}
    //             jpegquality={5}
    //           />

    //           <div
    //             className={"row w-50 mx-auto px-md-6 mt-2"}
    //             style={{ fontSize: "18px" }}
    //           >
    //             <div className={"col-md-4 text-left"}>
    //               <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
    //               intuitiv
    //             </div>
    //             <div className={"col-md-4 text-center"}>
    //               <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
    //               transparent
    //             </div>
    //             <div className={"col-md-4 text-right"}>
    //               <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
    //               mobil
    //             </div>
    //           </div>
    //           <div className={"mt-5"} style={{ fontSize: "18px" }}>
    //             Hier finden Sie aktuelle Markttrends, Branchenneuheiten,
    //             Hintergrundinformationen zu Weingütern und ein breites Sortiment
    //             an exquisiten Weinen. Darüber hinaus können Sie im Weindepot Ihr
    //             Wein-Portfolio verwalten. Auf diese Weise haben Sie Ihr
    //             persönliches Weininvestment stets im Blick.
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div class=" text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
    //       <div
    //         data-aos="fade-up"
    //         data-aos-anchor-placement="center-bottom"
    //         className={"mb-3"}
    //       >

    //         <div>
    //           <h3 style={{ fontSize: "24px" }}>Unsere Partner</h3>
    //           <div style={{}} className={"row"}>
    //             <div className={"col-md-4 text-center"}>
    //               <span
    //                 style={{
    //                   padding: "35px",
    //                   borderRadius: "7px",
    //                   backgroundColor: "white",
    //                   boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
    //                 }}
    //               >
    //                 <Partner3 height={"60px"} />
    //               </span>
    //             </div>
    //             <div className={"col-md-4 text-center"}>
    //               <span
    //                 style={{
    //                   padding: "35px",
    //                   borderRadius: "7px",
    //                   backgroundColor: "white",
    //                   boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
    //                 }}
    //               >
    //                 <Partner1 height={"60px"} />
    //               </span>
    //             </div>
    //             <div className={"col-md-4 text-center"}>
    //               <span
    //                 style={{
    //                   padding: "35px",
    //                   borderRadius: "7px",
    //                   backgroundColor: "white",
    //                   boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
    //                 }}
    //               >
    //                 <Partner2 height={"60px"} />
    //               </span>
    //             </div>
    //           </div>
    //         </div>

    //       </div>
    //     </div>

    //     <div className={"text-center mt-sm-5 pt-5 mb-sm-5 pb-5"}>
    //       <div
    //         data-aos="fade-up"
    //         data-aos-anchor-placement="center-bottom"
    //         className={"mb-3"}
    //       >
    //         <h3 style={{ fontSize: "24px" }} className={"mt-3 mb-2"}>
    //           <span className={"pr-2"}></span>
    //           Erstgespräch vereinbaren
    //         </h3>
    //         <p className={"mb-3"} style={{ fontSize: "18px" }}>
    //           "Wie Sie mit Berghaus & Cie. einfach und professionell in Wein
    //           investieren können."
    //         </p>

    //         <SelectCalendlyDate width={"60%"} />
    //       </div>
    //     </div>
    //   </div>

    // </>
  );
};

export default withRouter(IndexDesktop);
