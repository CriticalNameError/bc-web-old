import Liquidswipe from "react-liquidswipe";
import React from "react";
import Particles from "react-tsparticles";
import MockupLanding from "icons/mockup_landing";
import dynamic from "next/dynamic";
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

let components = [
  <div
    style={{
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",

      background: "white",
      position: "relative",
      height: "100%",
    }}
    className={"animated fadeIn row text-center my-auto pr-3"}
  >
    <div className={"col-12 my-auto"} style={{ position: "absolute" }}>
      <h1 style={{ fontSize: "35px" }}>
        Realer Wert,
        <br />
        digital geklärt
      </h1>
      <br />
      <div>
        <MockupLanding width={200} />
      </div>
    </div>
  </div>,
  <div
    style={{
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      color: "white",
    }}
    className={"bg-primary row text-center my-auto "}
  >
    <div className={"col-12 my-auto"} style={{ position: "absolute" }}>
      <h1 style={{ fontSize: "35px" }}>Assets im Vergleich</h1>
      Der Chart wird hier nicht gut funktionieren. Zu detailreich für's Handy!
      <div style={{ width: "300px", height: "200px" }}>
        <DynamicLivexPriceChart />
      </div>
    </div>
  </div>,
  <div
    style={{
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",

      background:
        "linear-gradient(15deg,hsl(42deg 25% 18%) 0%,hsl(42deg 26% 45%) 30%,hsl(41deg 33% 62%) 58%,hsl(41deg 35% 75%) 83%,hsl(41deg 47% 93%) 100%)",
      color: "white",
    }}
    className={"row text-center my-auto"}
  >
    <div className={"col-12 my-auto"} style={{ position: "absolute" }}>
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
  </div>,
];

const IndexMobile = () => {
  return (
    <Liquidswipe
      components={components}
      style={{
        height: "100vh",
        width: "100vw",
        margin: "0",
        borderRadius: "0px",
      }}
    />
  );
};

export default IndexMobile;
