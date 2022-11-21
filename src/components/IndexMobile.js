import Liquidswipe from "react-liquidswipe";
import React, { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import MockupLanding from "icons/mockup_landing";
import dynamic from "next/dynamic";
import UpArrow from "icons/up-arrow";
import SwipeUp from "icons/swipe-up";
import Router from "next/router";
import { useRouter } from "next/router";
import ReactFullpage from "@fullpage/react-fullpage";
import PreferencesForm from "components/PreferencesForm";
import TriangleRight1 from "icons/triangle-right-1";
import RightArrow from "icons/right-arrow";
import router, { withRouter } from "next/router";
import LoadingOverlay from "react-loading-overlay";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ScrollSlider from "../components/ScrollSlider/ScrollSlider";
import Ai from "../icons/ai";
import Handout from "../icons/handout";
import VirtualAssistant2 from "../icons/virtual-assistant-2";
import StorageUnit from "../icons/storage-unit";
import { Row, Col } from "reactstrap";
import Swiper from "swiper";
import { useSwipeable } from "react-swipeable";
// import Swiper styles
//import 'swiper/css';
import {
  primary,
  primary_t80,
  primary_t50,
  primary_t60,
  cta,
} from "helpers/colorScheme";
import ReactPlayer from "react-player";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

const DynamicLivexPriceChart = dynamic(() => import("./LivexPriceChart"), {
  ssr: false,
});

const IndexMobile = (props) => {
  const lqsw = useRef(null);
  const [isActive, setActive] = useState("welcome");
  const router = useRouter();
  const [showVideoModal, toggleShowVideoModal] = useState(false);
  const [section, setSection] = useState("welcome");
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoReady, toggleVideoReady] = useState(false);
  const [activePill, setActivePill] = useState(0);
  const playVideoAfterDelay = () =>
    setTimeout(() => {
      document.getElementById("explainer-video").play();
    }, 1000);

  const config = {
    delta: 10, // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
    swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true }, // options for touch listeners (*See Details*)
  };

  const moveDownAfterDelay = () =>
    setTimeout(() => {
      router.push("#winetelligence");
    }, 700);

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

  useEffect(() => {
    let img = document.getElementById("background-img");
    img.onload = function () {
      toggleVideoReady(true);
    };
    // Bypass long loding times
    setTimeout(() => toggleVideoReady(true), 1000);

    setTimeout(() => {
      document.getElementById("swipe-up-btn").classList.add("fadeIn");
      document.getElementById("swipe-up-btn").classList.remove("invisible");
    }, 2500);
    setTimeout(() => {
      document.getElementById("swipe-up-btn").classList.remove("fadeIn");
      document
        .getElementById("swipe-up-btn")
        .classList.add("bounce", "infinite");
    }, 3500);
    // let videoElement = document.getElementById("video-background-mobile");
    // videoElement.play();
    // videoElement.addEventListener("loadeddata", (e) => {
    //   //Video should now be loaded but we can add a second check

    //   if (videoElement.readyState >= 3) {
    //     toggleVideoReady(true);
    //   }

    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      effect: "fade",
      loop: true,
      speed: 300,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  const pillContent = {
    0: (
      <Row style={{ height: "300px" }}>
        <Col xs={10} className={"my-auto text-light offset-1"}>
          <h3 className={"text-left"}>
            {" "}
            <Ai width={"34px"} strokewidth={3}></Ai> Start
          </h3>
          <Row>
            <Col xs={10}>
              <p className={"text-justify"}>
                Unsere wineTelligence ist der Kick-Starter für Ihr
                Wein Investment. Mit ihr erhalten Sie in kürzester Zeit eine erste Portfolio-Indikation auf der Basis von künstlicher
                Intelligenz.
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
      </Row>
    ),
    1: (
      <Row style={{ height: "300px" }}>
        <Col xs={10} className={"my-auto text-light offset-1"}>
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
      </Row>
    ),
    2: (
      <Row style={{ height: "300px" }}>
        <Col xs={10} className={"my-auto text-light offset-1"}>
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
      </Row>
    ),
    3: (
      <Row style={{ height: "300px" }}>
        <Col xs={10} className={"my-auto text-light offset-1"}>
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
              <a href={"#winetelligence"}>
                <span style={{ cursor: "pointer", color: "white" }}>
                  <RightArrow width={"20px"} strokewidth={4} />
                </span>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    ),
  };

  const pillsCardColors = ["#A38CC2", "#597549", "#91AABF", "#80C488"];

  //   const select = (el) => {
  //     var tabs = document.getElementsByClassName('pills-item');
  //     var activeEl = tabs[0];
  //     activeEl.classList.remove('active');
  //     activeEl = el;
  //     var cd = document.getElementById("pills-card")
  //     cd.style.background = activeEl.dataset.color;
  //     activeEl.classList.add('active');
  // }

  // select(activeEl);

  // useEffect(() => {
  //   if (isActive == "chart") {
  //     document.getElementById("logo-svg").classList.remove("text-white");
  //     document.getElementById("logo-svg").classList.add("text-primary");
  //     document.getElementById("menu-svg").classList.remove("text-white");
  //     document.getElementById("menu-svg").classList.add("text-primary");
  //   } else if (isActive == "letsgo") {
  //     document.getElementById("logo-svg").classList.add("text-white");
  //     document.getElementById("logo-svg").classList.remove("text-primary");
  //     document.getElementById("menu-svg").classList.add("text-white");
  //     document.getElementById("menu-svg").classList.remove("text-primary");
  //   } else {
  //     document.getElementById("logo-svg").classList.remove("text-white");
  //     document.getElementById("logo-svg").classList.add("text-primary");
  //     document.getElementById("menu-svg").classList.remove("text-white");
  //     document.getElementById("menu-svg").classList.add("text-primary");
  //   }
  // }, [isActive]);

  let components = [
    <div
      id={"start"}
      style={{
        background: "white",
      }}
      className={
        "section snapscroll-section animated fadeIn row text-center m-0"
      }
    >
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
        isOpen={showVideoModal}
        toggle={() => {
          toggleShowVideoModal(!showVideoModal);
          document.getElementById("explainer-video").pause();
          // document.getElementById("video-background-mobile").play();
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
              src="https://bcassets.s3.eu-west-1.amazonaws.com/bc_explainer_mobile.mp4"
              type="video/mp4"
            />
          </video>
        </ModalBody>
        <ModalFooter
          className={"text-center"}
          style={{ background: "transparent", borderTop: 0 }}
        >
          <div className={"mx-auto"}>
            <button
              onClick={() => {
                toggleShowVideoModal(false);
                // document.getElementById("video-background-mobile").play();
                moveDownAfterDelay();
              }}
              className={
                "mx-auto btn btn-lg bg-cta p-3 mt-4 animated headShake slower infinite"
              }
              style={{ fontSize: "18px" }}
            >
              wineTelligence ausprobieren
            </button>
          </div>
        </ModalFooter>
      </Modal>

      <LazyLoadImage
        alt={"background"}
        id={"background-img"}
        visibleByDefault={true}
        // src={"https://bcassets.s3.eu-west-1.amazonaws.com/background_bc.gif"} // use normal <img> attributes as props
        src={
          "https://bcassets.s3.eu-west-1.amazonaws.com/background_bg_small.gif"
        }
        width={"100%"}
        height={"100%"}
        style={{ objectFit: "cover" }}
        // placeholderSrc={placeholderUrl}
        // wrapperClassName={props.classes}
      />

      {/* <img
        id={"background-img"}
        src={
          "https://bcassets.s3.eu-west-1.amazonaws.com/background_bc.gif"
        }
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
      /> */}

      {/* <video
        autoplay
        loop
        muted
        webkit-playsinline
        playsinline
        id="video-background-mobile"
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
      >
        <source
          src="https://bcassets.s3.eu-west-1.amazonaws.com/bc_background_lq.mp4#t=14,44"
          type="video/mp4"
        />
      </video> */}
      <div
        className={" px-0 animated row m-0 p-0"}
        style={{
          overflowX: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          minWidth: "100%",
          width: "100%",
          height: "100%",
          backgroundSize: "2px 2px",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255, 0.7) 1.5px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 3px, transparent 1px)",
        }}
      >
        <div className={"my-auto col fade-in-container"}>
          <div
            className={"mb-0 pb-0"}
            style={{
              fontSize: "40px",
              fontFamily: "'Whisper', cursive",
              lineHeight: "35px",
            }}
          >
            <span className={"fade-in-span"}>Disruptiv</span>
            <br />
            <span className={"fade-in-span"}>Traditionell.</span>
          </div>

          <h1
            className={"fade-in-container mb-2 mt-2 pt-0"}
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >
            <span className={"fade-in-span pr-1"}>Ihr</span>
            <span className={"fade-in-span"}>Wein Investment -</span>

            <span className={"fade-in-span px-1"}>professionell, </span>
            <br />
            <span className={"fade-in-span pr-1"}>transparent, </span>
            <span className={"fade-in-span"}>zeitgemäß.</span>
          </h1>
          <h2 className={"mb-5"} style={{ fontSize: "12px" }}>
            Berghaus & Cie. ermöglicht Ihnen das zielgerichtete Investieren in
            den Markt der exquisiten Weine, einen der spezialisiertesten Märkte
            der Welt.
          </h2>

          <div>
            <span
              onClick={() => {
                toggleShowVideoModal(true);
                playVideoAfterDelay();
                // document.getElementById("video-background-mobile").pause();
              }}
            >
              <span
                class="play-btn mx-auto"
                href="#"
                style={{
                  transform: props.mobile ? "scale(0.75)" : "scale(1.2)",

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

              <b style={{ fontSize: "16px" }}>Video abspielen</b>
            </span>
          </div>
          <a href={"#winetelligence"}>
            <button
              className={"btn text-white mt-4 p-3"}
              style={{ background: cta, fontSize: "18px" }}
            >
              wineTelligence ausprobieren
            </button>
          </a>
        </div>
      </div>
      {/* <div
        className={"text-center"}
        style={{ width: "100%", bottom: "70px" }}
      >
        <a href={"#facts"}>
          <button
            id={"swipe-up-btn"}
            className={"btn btn-sm p-2 animated invisible slower"}
            style={{
              fontSize: "10px",
              borderRadius: "30px",
              color: "rgb(200,200,200)",
              //background: "rgba(100,100,100,0.1)",
              background: "white",
              boxShadow: "none",
            }}
            href={"#facts"}
          >
            <SwipeUp width={"32px"} strokewidth={3} />
          </button>
        </a>
      </div> */}
    </div>,
    <div
      style={{
        color: "#333",
        backgroundImage: "linear-gradient(#f8f8f8, #d9d1be)",
      }}
      id={"facts"}
      className={
        "section snapscroll-section row h-100 m-0 p-0  text-dark  text-center"
      }
    >
      <div className={"col-12 my-auto p-0"}>
        <h2 className={"px-1 pb-1 mb-1"} style={{ fontSize: "30px" }}>
          Starke Rendite
        </h2>
        <div className={"px-1 mb-2"} style={{ fontSize: "11px" }}>
          Der Liv-Ex 1000 - Index zeigt: Wein ist eine Sachanlage mit starken
          historischen Renditen.
        </div>

        <div
          className={"mx-auto card m-1"}
          style={{
            width: "96vw",
            fontFamily: "monospace",
            background: "#232526",
            background: "-webkit-linear-gradient(to right, #232526, #414345)",
            backgroundImage: "linear-gradient(to right, #232526, #414345)",
          }}
        >
          <DynamicLivexPriceChart
            mode={"light"}
            height={"60vh"}
            mobile={true}
          />
        </div>
      </div>
    </div>,

  

    <div
      style={{
        color: "#333",
        backgroundImage: "linear-gradient(#d9d1be, #c0ad82)",
      }}
      id={"steps"}
      className={
        "section snapscroll-section row h-100 m-0 p-0  text-dark  text-center"
      }
    >
      <div className={"col-12 my-auto p-0"}>
        <h1 className={"px-1 pb-1 mb-1"} style={{ fontSize: "30px" }}>
          Spannender Prozess
        </h1>
        <div className={"px-1 mb-3"} style={{ fontSize: "11px" }}>
          Mit nur wenigen Schritten werden Sie zum Weininvestor. Dabei
          erschließt sich Ihnen die Welt der exquisiten Weine.
        </div>

        <div
          id="pills-card"
          style={{ backgroundColor: pillsCardColors[activePill] }}
          {...swipeHandlers}
        >
          <div class="pills">
            <div
              onClick={() => setActivePill(0)}
              className={"pills-item " + (activePill == 0 && "active")}
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
              className={"pills-item " + (activePill == 1 && "active")}
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
              className={"pills-item " + (activePill == 2 && "active")}
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
              className={"pills-item " + (activePill == 3 && "active")}
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

        {/* <ScrollSlider/> */}
      </div>
    </div>,

    <div
      style={{
        background:
          "linear-gradient(15deg,hsl(42deg 25% 18%) 0%,hsl(42deg 26% 45%) 30%,hsl(41deg 33% 62%) 58%,hsl(41deg 35% 75%) 83%,hsl(41deg 47% 93%) 100%)",
        color: "white",
      }}
      id={"winetelligence"}
      className={"row section snapscroll-section text-center m-0"}
    >
      <div className={"col-12 my-auto"}>
        {/* <h1 style={{ fontSize: "35px" }}>wineTelligence</h1> */}
        <PreferencesForm mobile={true} />
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
      {/* <div className={"text-center mt-auto"} style={{ width: "100%" }}>
        <button
          className={"btn  btn-sm text-white p-2"}
          style={{
            fontSize: "10px",
            borderRadius: "30px",
            background: "rgba(255,255,255,0.3)",
          }}
          href={"#facts"}
        >
          <UpArrow width={"25px"} strokewidth={3} />
        </button>
      </div> */}
    </div>,
  ];

  return (
    // <ReactFullpage
    // //fullpage options
    // licenseKey={"YOUR_KEY_HERE"}
    // scrollBar={true}
    // autoScrolling={true}
    // //scrollingSpeed={1000} /* Options here */
    // sectionsColor={["transparent", "transparent", "#bfac82"]}
    // anchors={[
    //   "welcome",
    //   "chart",
    //   "letsgo",
    //   // "faq",
    //   // "book-appointment",
    //   // "fp-footer",
    // ]}
    // // autoScrolling={false}
    // //touchSensitivity={5}
    // // onLeave={(a, b, c) => {
    // //   setActive(b["anchor"]);
    // //   console.log(a, b["anchor"], c);
    // // }}
    // render={({ state, fullpageApi }) => {
    //   return (
    //     <>
    //       <ReactFullpage.Wrapper>
    <div className={"snapscroll-container"}>{components}</div>
  );
};

export default withRouter(IndexMobile);
