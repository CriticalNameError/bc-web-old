import Liquidswipe from "react-liquidswipe";
import React, { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import MockupLanding from "icons/mockup_landing";
import dynamic from "next/dynamic";
import UpArrow from "icons/up-arrow";
import SwipeUp from "icons/swipe-up";
import { useRouter } from "next/router";
import ReactFullpage from "@fullpage/react-fullpage";
import {
  primary,
  primary_t80,
  primary_t50,
  primary_t60,
  cta,
} from "helpers/colorScheme";
import ReactPlayer from "react-player";

const DynamicLivexPriceChart = dynamic(
  () => import("../src/components/LivexPriceChart"),
  {
    ssr: false,
  }
);

const IndexMobile = () => {
  const lqsw = useRef(null);
  const [isActive, setActive] = useState("welcome");
  const router = useRouter();
  const [section, setSection] = useState("welcome");
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      document.getElementById("swipe-up-btn").classList.add("fadeIn");
      document.getElementById("swipe-up-btn").classList.remove("invisible");
    }, 2500)
    setTimeout(() => {
      document.getElementById("swipe-up-btn").classList.remove("fadeIn");
      document.getElementById("swipe-up-btn").classList.add("bounce", "infinite");
    }, 3500);
  }, []);

  useEffect(() => {
    if (isActive == "chart") {
      document.getElementById("logo-svg").classList.remove("text-white");
      document.getElementById("logo-svg").classList.add("text-primary");
      document.getElementById("menu-svg").classList.remove("text-white");
      document.getElementById("menu-svg").classList.add("text-primary");
    } else if (isActive == "letsgo") {
      document.getElementById("logo-svg").classList.add("text-white");
      document.getElementById("logo-svg").classList.remove("text-primary");
      document.getElementById("menu-svg").classList.add("text-white");
      document.getElementById("menu-svg").classList.remove("text-primary");
    } else {
      document.getElementById("logo-svg").classList.remove("text-white");
      document.getElementById("logo-svg").classList.add("text-primary");
      document.getElementById("menu-svg").classList.remove("text-white");
      document.getElementById("menu-svg").classList.add("text-primary");
    }
  }, [isActive]);

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
      <div className={"col-12"}>
        <h1 style={{ fontSize: "35px", marginTop: "60px" }}>
          Realer Wert,
          <br />
          digital geklärt
        </h1>
        <br />
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Yp7ybNX1Dy4"
            muted={false}
            //playing={isPlaying}
            light={
              "https://bcassets.s3.amazonaws.com/static/images/bc_team.original.png"
            }
            controls={true}
            width={"90%"}
            height={"260px"}
            //height={"200px"}
            className={"mx-auto"}
          />
        </div>
        <a href={"#winetelligence"}>
          <button className={"btn text-white mt-5"} style={{ background: cta }}>
            Zur wineTelligence
          </button>
        </a>
      </div>
      <div
        className={"text-center mt-auto"}
        style={{ width: "100%", bottom: "50px" }}
      >
        <a href={"#facts"}>
          <button
            id={"swipe-up-btn"}
            className={"btn  btn-sm p-2 animated invisible slower"}
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
      </div>
    </div>,
    <div
      style={{
        color: "white",
      }}
      id={"facts"}
      className={"section snapscroll-section bg-primary text-white row text-center  m-0"}
    >
      <div className={"col-12 my-auto"}>
        <h1 style={{ fontSize: "35px" }}>Wein kann sich sehen lassen</h1>
       
        <div style={{ width: "300px", height: "200px" }}>
          <DynamicLivexPriceChart mode={"light"} height={"60vh"}/>
        </div>
      </div>
      <div
        className={"text-center mt-auto"}
        style={{ width: "100%", bottom: "20px" }}
      >
        <a href={"#winetelligence"}>
          <button
            className={"btn  btn-sm text-white p-2"}
            style={{
              fontSize: "10px",
              borderRadius: "30px",
              background: "rgba(255,255,255,0.3)",
            }}
            href={"#winetelligence"}
          >
            <UpArrow width={"25px"} strokewidth={3} />
          </button>
        </a>
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
      <div
        className={"text-center mb-auto"}
        style={{ width: "100%", bottom: "20px" }}
      >
        {/* <a href={"#facts"}>
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
        </a> */}
      </div>
      <div className={"col-12 my-auto"}>
        <h1 style={{ fontSize: "35px" }}>wineTelligence</h1>
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

export default IndexMobile;
