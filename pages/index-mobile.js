import Liquidswipe from "react-liquidswipe";
import React, { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import MockupLanding from "icons/mockup_landing";
import dynamic from "next/dynamic";
import ArrowLeft from "icons/arrow-left";
import {useRouter} from 'next/router'
import ReactFullpage from "@fullpage/react-fullpage";
import {
  primary,
  primary_t80,
  primary_t50,
  primary_t60,
  cta,
} from "helpers/colorScheme";

const DynamicLivexPriceChart = dynamic(
  () => import("../src/components/LivexPriceChart"),
  {
    ssr: false,
  }
);

const IndexMobile = () => {
  const lqsw = useRef(null);
  const [isActive, setActive] = useState("welcome");
  const router = useRouter()
  const [section, setSection] = useState("welcome");

  useEffect(()=>{
    if(isActive == "chart"){
      document.getElementById("logo-svg").classList.remove("text-white")
      document.getElementById("logo-svg").classList.add("text-primary")
      document.getElementById("menu-svg").classList.remove("text-white")
      document.getElementById("menu-svg").classList.add("text-primary")

    }else if(isActive == "letsgo"){
      document.getElementById("logo-svg").classList.add("text-white")
      document.getElementById("logo-svg").classList.remove("text-primary")
      document.getElementById("menu-svg").classList.add("text-white")
      document.getElementById("menu-svg").classList.remove("text-primary")

    }else{
      document.getElementById("logo-svg").classList.remove("text-white")
      document.getElementById("logo-svg").classList.add("text-primary")
      document.getElementById("menu-svg").classList.remove("text-white")
      document.getElementById("menu-svg").classList.add("text-primary")
    }
    
  }, [isActive])
  
  let components = [
    <div
      id={"start"}
      style={{
        
      

        background: "white",
       
       
      }}
      className={"section animated fadeIn row text-center m-0"}
    >
      <div className={"col-12 "}>
        <h1 style={{ fontSize: "35px" }}>
          Realer Wert,
          <br />
          digital geklärt
        </h1>
        <br />
        <div>
          <MockupLanding width={200} />
        </div>
        <button
          className={"btn text-white"}
          style={{ background: cta }}
          onClick={() => setActive(2)}
        >
          Zur wineTelligence
        </button>
      </div>
    </div>,
    <div
      style={{
       
      
        color: "white",
      }}
      id={"facts"}
      className={"section bg-primary row text-center  m-0"}
    >
      <div className={"col-12 "} >
        
        <h1 style={{ fontSize: "35px" }}>Assets im Vergleich</h1>
        Der Chart wird hier nicht gut funktionieren. Zu detailreich für's Handy!
        <div style={{ width: "300px", height: "200px" }}>
          <DynamicLivexPriceChart />
        </div>
      </div>
      <div className={"text-left mt-auto mx-4"} style={{width: "100%"}}>
        <button
          className={"btn  btn-sm text-white p-2"}
          style={{ fontSize: "10px", borderRadius: "30px", background: "rgba(255,255,255,0.3)" }}
          onClick={() => setActive(0)}
        >
           <ArrowLeft width={"25px"} strokewidth={3}/>
        </button>
        </div>
    </div>,
    <div
      style={{
       
       
        background:
          "linear-gradient(15deg,hsl(42deg 25% 18%) 0%,hsl(42deg 26% 45%) 30%,hsl(41deg 33% 62%) 58%,hsl(41deg 35% 75%) 83%,hsl(41deg 47% 93%) 100%)",
        color: "white",
      }}
      id={"winetelligence"}
      className={"row section text-center m-0"}
    >
      <div className={"col-12 "} >
  
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
      <div className={"text-left mt-auto mx-4"} style={{width: "100%"}}>
        <button
          className={"btn  btn-sm text-white p-2"}
          style={{ fontSize: "10px", borderRadius: "30px", background: "rgba(255,255,255,0.3)" }}
          onClick={() => setActive(1)}
        >
           <ArrowLeft width={"25px"} strokewidth={3}/>
        </button>
        </div>
    </div>,
  ];

  return (
    <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    sectionsColor={["transparent", "transparent", "#bfac82"]}
    anchors={[
      "welcome",
      "chart",
      "letsgo",
      // "faq",
      // "book-appointment",
      // "fp-footer",
    ]}
    // autoScrolling={false}
    touchSensitivity={5}
    // onLeave={(a, b, c) => {
    //   setActive(b["anchor"]);
    //   console.log(a, b["anchor"], c);
    // }}
    render={({ state, fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
          {components}
          </ReactFullpage.Wrapper>
        </>
      )
      
}}
/>)}

export default IndexMobile;
