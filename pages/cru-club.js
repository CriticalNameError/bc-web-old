import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import CustomModal from "../src/helpers/CustomModal";
import { ImageFromCms } from "helpers/utils";
import dynamic from "next/dynamic";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Head from "next/head";
import "react-accessible-accordion/dist/fancy-example.css";
import BComment from "icons/b-comment";
import DownArrow from "icons/down-arrow";
import LandingFooter from "../src/components/Footer/LandingFooter";
import Magnifier from "icons/magnifier";
import TimeMachine from "icons/time-machine";
import Athletics from "icons/athletics";
import BarArrowStraight from "icons/bar-arrow-straight";
import Delivery from "icons/delivery";
import GiftExchange from "icons/gift-exchange";
import RightArrow from "icons/right-arrow";
import HandsHeart from "icons/hands-heart";
import BMeeting from "icons/b-meeting";
import Questionaire from "icons/questionnaire";
import MobilePhone from "icons/mobile-phone";
import Diamond from "icons/diamond";
import StorageUnit from "icons/storage-unit";
import World from "icons/world";

import {
  primary,
  primary_t80,
  primary_t50,
  primary_t60,
} from "helpers/colorScheme";

import WineDaxSap from "../src/components/WineDaxSap";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { cta } from "helpers/colorScheme";
import { Col, Modal, ModalBody, ModalFooter, Row } from "reactstrap";

let potentialanalyse_markup = (
  <div className={"p-4"}>
    <p className={"h5 text-primary"}>Potentialanalyse</p>
    In die Beurteilung und die Auswahl der Weine fließen bei Berghaus & Cie.
    unterschiedliche Faktoren ein. Hierzu gehören, z. B. die Reputation des
    Weinguts, die Bewertungen der einzelnen Jahrgänge durch renommierte
    Weinkritiker, Rezensionen aus gängigen Fachzeitschriften, die Entwicklung
    vergleichbarer Weine und Jahrgänge sowie die digitale Analyse der
    Entwicklungen am Weinmarkt der vergangenen Jahre.
    <br />
    <br />
    Auf Basis all dieser Informationen lässt sich sehr gut einschätzen, ob sich
    ein bestimmter Wein für ein Wein Investment lohnt.
  </div>
);
let provenienz_markup = (
  <div className={"p-4"}>
    <p className={"h5 text-primary"}>Lückenlose Provenienz</p>
    Unseren strengen Selektionskriterien erfüllen nur hochklassige Weine mit
    lückenloser Provenienz. Berghaus & Cie. bezieht diese entweder direkt vom
    Weingut oder von autorisierten Händlern. Nur so können wir sicherstellen,
    dass Sie ausschließlich Original-Weine erhalten.
    <br />
    <br />
    Darüber hinaus ist der Nachweis einer lückenlosen Provenienz eine
    wesentliche Voraussetzung für einen guten Wiederverkaufspreis. Aus diesem
    Grund lagern wir die Weine in einem professionellen Weinlager ein.
  </div>
);
let zustand_lagerung_markup = (
  <div className={"p-4"}>
    <p className={"h5 text-primary"}>Zustand & Lagerung</p>
    Der Zustand des Weins und dessen Lagerung, vorzugsweise in den Original-
    Holzkisten des Weinguts, spielen eine wesentliche Rolle. Das Hauptaugenmerk
    liegt hierbei auf der vorhandenen Füllmenge, dem Zustand der Flasche, des
    Korkens und des Etiketts.
    <br />
    <br />
    Um den bestmöglichen Verkaufspreis zu erzielen ist es unerlässlich, dass der
    Wein bei konstanten Temperaturen und einer Luftfeuchtigkeit von ca. 65 % in
    einem klimatisierten Weinlager professionell eingelagert wird.
  </div>
);

const CruClub = () => {
  const [showModal, toggleShowModal] = useState(false);
  const [showContactModal, toggleShowContactModal] = useState(false);
  const [markup, changeMarkup] = useState(null);
  const [width, setWidth] = useState(null);
  const [maxServicesCardHeight, setMaxServicesCardHeight] = useState(null);
  const [age, toggleAge] = useState(false);
  const [agbs, toggleAgbs] = useState(false);
  const [dsgvo, toggleDsgvo] = useState(false);

  function setTextAnimation(
    delay,
    duration,
    strokeWidth,
    timingFunction,
    strokeColor,
    repeat
  ) {
    let paths = document.querySelectorAll(".anim-path");
    let mode = repeat ? "infinite" : "forwards";
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const length = path.getTotalLength();
      path.style["stroke-dashoffset"] = `${length}px`;
      path.style["stroke-dasharray"] = `${length}px`;
      path.style["stroke-width"] = `${strokeWidth}px`;
      path.style["stroke"] = `${strokeColor}`;
      path.style[
        "animation"
      ] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
      path.style["animation-delay"] = `${i * delay}s`;
    }
  }

  useEffect(() => {
    setTextAnimation(0.1, 3, 2, "linear", "#ffffff", false);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    let sidecta = document.getElementById("side-cta");
    sidecta.classList.add("d-none");
    // const getMaximumServicesCardHeight = () => {
    //   let cards = document.getElementsByClassName("services-card");
    //   //let cardsHeights = cards.map(c => c.style.height);
    //   let cardsArr = Array.prototype.slice.call(cards);
    //   let cardHeight = cardsArr.map((c) => c.clientHeight);
    //   setMaxServicesCardHeight(Math.max(...cardHeight));
    // };
    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title key={"title"}>
          Cru Club - Das Wein Abonnement der Extraklasse
        </title>
        <meta
          name="description"
          content="Wein kann man auch trinken: Der Cru Club ist die Community, die Ihren Weingenuss auf das nächste Ebene hebt."
          key="description"
        />
      </Head>
      <Modal
        className={"modal-xl modal-dialog-centered"}
        isOpen={showModal}
        style={{borderRadius: "8px"}}
        toggle={() => {
          toggleShowModal(false);
         
        }}
        
      >
        <ModalBody
          className={"p-3 m-0 animated fadeIn slow"}
          style={{ border: 0, }}
        >
          <div class="form-check">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox"
                onClick={() => toggleAge(!age)}
                checked={age}
              />
              <span class="form-check-sign"></span>
              Ich bin mindestens 18 Jahre alt
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox"
                checked={dsgvo}
                onClick={() => toggleDsgvo(!dsgvo)}
              />
              <span class="form-check-sign"></span>
              Ich akzeptiere die{" "}
              <a
                className={"text-dark"}
                href={"https://www.berghaus-cie.com/legal/datenschutz"}
              >
                Datenschutzrichtlinien
              </a>
              .
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                class="form-check-input"
                type="checkbox"
                onClick={() => toggleAgbs(!agbs)}
                checked={agbs}
              />
              <span class="form-check-sign"></span>
              Ich akzeptiere die{" "}
              <a
                className={"text-dark"}
                href={
                  "https://www.berghaus-cie.com/legal/allgemeine-geschaeftsbedingungen"
                }
              >
                Allgemeinen Geschäftsbedingungen
              </a>
              .
            </label>
          </div>
        </ModalBody>
        <ModalFooter
          className={"text-center bg-white"}
          style={{  borderTop: 0 }}
        >
          <div className={"mx-auto"}>
            <a href={showModal} target={"_blank"}>
            <button
              disabled={!age || !agbs || !dsgvo}
              href={showModal}
              className={
                "mx-auto btn btn-lg bg-cta p-3 mt-4 "
              }
              style={{ fontSize: "18px" }}
              
            >
              Zur Zahlung<br/><div style={{fontSize: "12px", marginTop: "-4px"}}>Sie werden zu Stripe weitergeletet</div>
            </button>
            </a>
          </div>
        </ModalFooter>
      </Modal>
      <>
        {/* <CustomModal
          markup={markup}
          showModal={showModal}
          toggleShowModal={toggleShowModal}
        ></CustomModal> */}

        <div class="page-header header-filter pb-5">
          <video
            id="cru-club-background-video"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              minWidth: "100%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            webkit-playsinline
            playsinline
            muted
            autoPlay
            loop
          >
            <source
              src="https://bcassets.s3.eu-west-1.amazonaws.com/video(2).mp4"
              type="video/mp4"
            />
          </video>
          <div
            class="page-header-image"
            // style={{
            //   backgroundImage:
            //     "url('https://bcassets.s3.amazonaws.com/static/images/javier-balseiro-jDU4yYk5Kgs-unsplash.original.jpg')",
            // }}
          ></div>

          <div
            class="container animated fadeIn slower text-right"
            style={{ height: "100vh" }}
          >
            <div class="row h-100">
              <div
                class="col-md-7 ml-auto text-right my-auto"
                style={{ zIndex: 1000 }}
              >
                <h1 class="title" style={{ fontSize: "24px", fontWeight: 200 }}>
                  Cru Club - Wein kann man übrigens auch trinken...
                </h1>
                <svg
                  width="100%"
                  height="183.001"
                  viewBox="0 0 827.4 183.001"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ filter: "drop-shadow(2px 4px 6px black)" }}
                >
                  <g
                    id="svgGroup"
                    stroke-linecap="round"
                    fill-rule="evenodd"
                    font-size="9pt"
                    stroke="none"
                    stroke-width="0.25mm"
                    fill="none"
                    style={{
                      stroke: "none",
                      strokeWidth: "0.25mm",
                      fill: "none",
                    }}
                  >
                    <path
                      class={"anim-path"}
                      d="M 43.984 180.769 A 101.849 101.849 0 0 0 65.7 183 Q 87 183 110.1 176.4 A 244.034 244.034 0 0 0 121.45 172.861 A 208.824 208.824 0 0 0 152.4 159.6 A 92.336 92.336 0 0 0 155.288 157.948 A 101.627 101.627 0 0 0 170.25 147 A 200.423 200.423 0 0 0 174.219 143.427 Q 177.155 140.71 179.59 138.211 A 94.462 94.462 0 0 0 183.9 133.5 Q 186.244 130.453 186.757 129.054 A 1.98 1.98 0 0 0 186.9 128.4 A 1.768 1.768 0 0 0 186.849 127.956 Q 186.708 127.412 186.175 127.26 A 1.728 1.728 0 0 0 185.7 127.2 Q 183.9 127.2 181.8 129.3 A 56.525 56.525 0 0 1 179.36 131.989 Q 178.003 133.398 176.371 134.936 A 129.679 129.679 0 0 1 172.65 138.3 Q 166.8 143.4 160.65 147.9 A 139.627 139.627 0 0 1 157.371 150.231 Q 153.254 153.065 150 154.8 A 160.53 160.53 0 0 1 149.867 154.873 A 171.257 171.257 0 0 1 113.1 169.5 Q 93.3 174.9 74.7 174.9 A 103.825 103.825 0 0 1 62.536 174.208 A 82.122 82.122 0 0 1 41.7 169.05 A 51.919 51.919 0 0 1 36.462 166.63 A 39.619 39.619 0 0 1 20.1 150.9 A 41.331 41.331 0 0 1 18.511 147.723 A 47.007 47.007 0 0 1 15.6 138.9 A 57.732 57.732 0 0 1 15.332 137.657 A 62.619 62.619 0 0 1 14.1 125.1 A 76.496 76.496 0 0 1 15.836 109.25 A 102.933 102.933 0 0 1 20.25 94.35 A 107.287 107.287 0 0 1 26.837 80.159 A 132.178 132.178 0 0 1 38.85 62.25 A 132.913 132.913 0 0 1 50.979 48.928 A 164.472 164.472 0 0 1 70.2 33.15 A 147.81 147.81 0 0 1 88.086 22.373 A 184.786 184.786 0 0 1 114.6 11.4 Q 120 9.6 130.8 7.8 Q 141.6 6 153.3 6 A 116.622 116.622 0 0 1 154.609 6.007 A 105.65 105.65 0 0 1 169.5 7.2 A 54.165 54.165 0 0 1 175.541 8.472 A 42.139 42.139 0 0 1 183.3 11.4 Q 189.3 14.4 192.15 19.95 Q 195 25.5 195 31.5 A 23.739 23.739 0 0 1 192.75 41.7 Q 190.5 46.5 186 49.5 A 20.23 20.23 0 0 0 184.487 50.647 Q 183.078 51.834 182.5 52.893 A 2.943 2.943 0 0 0 182.1 54.3 A 1.262 1.262 0 0 0 182.103 54.38 Q 182.144 55.027 182.866 55.164 A 2.352 2.352 0 0 0 183.3 55.2 A 5.284 5.284 0 0 0 183.905 55.164 Q 186.14 54.907 189.3 52.8 A 19.835 19.835 0 0 0 189.522 52.66 Q 191.093 51.649 193.097 49.958 A 70.268 70.268 0 0 0 195.15 48.15 A 27.283 27.283 0 0 0 197.417 45.828 A 21.514 21.514 0 0 0 200.4 41.4 Q 202.257 37.378 203.156 33.675 A 28.281 28.281 0 0 0 204 27 Q 204 20.4 200.4 15 A 20.066 20.066 0 0 0 198.259 12.33 Q 196.358 10.324 193.737 8.559 A 40.268 40.268 0 0 0 188.7 5.7 A 43.875 43.875 0 0 0 183.065 3.365 A 52.562 52.562 0 0 0 173.85 1.2 Q 165.6 0 156.9 0 A 177.574 177.574 0 0 0 155.254 0.008 A 161.769 161.769 0 0 0 131.4 1.95 A 199.03 199.03 0 0 0 127.509 2.605 Q 121.42 3.695 117.07 4.915 A 50.009 50.009 0 0 0 112.8 6.3 A 219.608 219.608 0 0 0 94.417 13.126 A 177.585 177.585 0 0 0 63.75 29.7 A 189.147 189.147 0 0 0 48.879 40.901 A 152.569 152.569 0 0 0 28.5 61.35 A 159.432 159.432 0 0 0 18.716 74.623 A 125.681 125.681 0 0 0 7.2 96.3 A 105.994 105.994 0 0 0 2.216 111.648 A 77.404 77.404 0 0 0 0 129.6 Q 0 135.9 1.35 141.75 A 77.916 77.916 0 0 0 1.93 144.096 A 68.335 68.335 0 0 0 4.8 152.7 Q 12.3 168.9 28.8 175.95 A 84.103 84.103 0 0 0 43.984 180.769 Z"
                      id="0"
                      vector-effect="non-scaling-stroke"
                    />
                    <path
                      class={"anim-path"}
                      d="M 210 105.9 L 216.6 91.2 Q 216.9 90.6 217.35 89.55 Q 217.775 88.559 218.066 88.236 A 0.96 0.96 0 0 1 218.1 88.2 Q 218.501 87.799 218.903 87.666 A 1.258 1.258 0 0 1 219.3 87.6 A 1.856 1.856 0 0 1 220.322 87.882 Q 220.659 88.097 220.914 88.477 A 2.953 2.953 0 0 1 221.1 88.8 A 2.862 2.862 0 0 1 221.386 89.829 Q 221.459 90.632 221.157 91.622 A 7.312 7.312 0 0 1 221.1 91.8 Q 220.5 95.1 222 98.4 Q 223.5 101.7 225.9 104.4 A 16.998 16.998 0 0 0 228.096 106.229 Q 229.261 107.055 230.701 107.842 A 37.16 37.16 0 0 0 232.8 108.9 Q 237.3 111 240.9 113.7 A 8.254 8.254 0 0 1 242.54 115.299 Q 244.253 117.555 243.6 120.6 A 19.713 19.713 0 0 1 241.225 126.572 Q 239.691 129.169 237.3 131.7 Q 232.2 137.1 227.1 143.1 A 91.937 91.937 0 0 0 222.17 148.889 A 79.858 79.858 0 0 0 220.65 150.9 Q 217.8 154.8 216.3 159 Q 216 159.9 215.85 160.8 Q 215.7 161.7 215.7 162.6 Q 215.7 168 221.4 168 A 9.303 9.303 0 0 0 222.744 167.894 Q 224.128 167.691 225.9 167.1 A 36.726 36.726 0 0 0 236.139 161.359 A 45.405 45.405 0 0 0 239.85 158.1 A 113.839 113.839 0 0 0 246.875 150.619 A 92.108 92.108 0 0 0 250.95 145.5 Q 254.974 140.048 256.639 137.517 A 36.992 36.992 0 0 0 257.1 136.8 A 58.431 58.431 0 0 1 257.872 135.669 Q 259.298 133.636 259.886 133.277 A 0.435 0.435 0 0 1 260.1 133.2 A 0.746 0.746 0 0 1 260.814 133.646 Q 261 134.018 261 134.7 A 5.368 5.368 0 0 1 260.58 136.751 A 7.038 7.038 0 0 1 260.1 137.7 Q 253.5 148.2 245.1 157.5 A 58.809 58.809 0 0 1 237.102 164.926 A 43.661 43.661 0 0 1 227.1 170.7 A 29.272 29.272 0 0 1 223.722 171.832 Q 221.194 172.5 219 172.5 Q 213.9 172.5 211.05 169.05 A 12.407 12.407 0 0 1 208.213 161.432 A 15.73 15.73 0 0 1 208.2 160.8 Q 208.2 156.3 210.3 152.1 A 71.199 71.199 0 0 1 215.759 142.684 A 84.583 84.583 0 0 1 218.85 138.45 A 299.321 299.321 0 0 1 223.607 132.485 Q 225.884 129.706 227.999 127.285 A 179.272 179.272 0 0 1 228.6 126.6 Q 231.159 123.274 231.535 120.82 A 5.408 5.408 0 0 0 231.6 120 A 6.514 6.514 0 0 0 230.739 116.85 Q 229.632 114.825 227.1 112.8 A 26.25 26.25 0 0 1 222.459 108.818 A 32.253 32.253 0 0 1 220.5 106.5 A 23.618 23.618 0 0 1 218.608 103.313 A 18.646 18.646 0 0 1 217.5 100.5 A 319.612 319.612 0 0 1 213.542 108.368 Q 209.944 115.294 205.35 123.45 A 220.33 220.33 0 0 1 196.939 137.23 A 174.799 174.799 0 0 1 190.2 146.7 Q 189.234 148.15 188.267 148.432 A 1.66 1.66 0 0 1 187.8 148.5 Q 187.017 148.5 186.916 147.592 A 2.625 2.625 0 0 1 186.9 147.3 A 2.554 2.554 0 0 1 187.076 146.381 A 3.136 3.136 0 0 1 187.2 146.1 A 4.465 4.465 0 0 1 187.355 145.822 Q 187.782 145.106 189 143.4 A 196.727 196.727 0 0 0 195.251 134.237 Q 198.216 129.601 200.554 125.279 A 115.366 115.366 0 0 0 201.6 123.3 Q 206.4 114 210 105.9 Z"
                      id="1"
                      vector-effect="non-scaling-stroke"
                    />
                    <path
                      class={"anim-path"}
                      d="M 292.5 152.1 L 293.1 149.4 Q 287.4 156.9 281.25 162.9 A 45.657 45.657 0 0 1 276.659 166.852 Q 274.07 168.779 271.509 170.003 A 23.918 23.918 0 0 1 269.1 171 A 31.6 31.6 0 0 1 266.148 172.025 Q 264.639 172.461 263.294 172.652 A 14.22 14.22 0 0 1 261.3 172.8 A 12.757 12.757 0 0 1 258.358 172.483 A 7.742 7.742 0 0 1 253.5 169.2 A 13.801 13.801 0 0 1 251.527 164.436 Q 251.1 162.478 251.1 160.2 Q 251.1 156 252 152.1 A 105.699 105.699 0 0 1 252.294 151.235 Q 253.016 149.131 254.831 144.003 A 3066.961 3066.961 0 0 1 255.15 143.1 Q 257.7 135.9 262.05 127.2 A 97.985 97.985 0 0 1 267.032 118.357 A 76.091 76.091 0 0 1 271.5 112.05 A 24.995 24.995 0 0 1 274.312 109.005 Q 275.93 107.542 277.577 106.708 A 9.697 9.697 0 0 1 282 105.6 Q 284.4 105.6 284.4 106.8 Q 284.4 107.794 283.577 108.788 A 5.969 5.969 0 0 1 283.2 109.2 A 91.191 91.191 0 0 0 276.688 118.107 A 117.312 117.312 0 0 0 271.95 126.15 Q 266.7 135.9 263.25 144.6 Q 260.525 151.471 259.578 155.723 A 24.544 24.544 0 0 0 259.2 157.8 Q 258.3 167.4 264.9 167.4 Q 269.398 167.4 274.364 164.131 A 33.14 33.14 0 0 0 277.05 162.15 Q 283.5 156.9 289.65 148.65 Q 295.8 140.4 300.3 131.4 Q 305.1 122.1 310.8 113.85 Q 316.5 105.6 322.5 105.6 Q 324.9 105.6 324.9 106.8 Q 324.9 107.794 324.077 108.788 A 5.969 5.969 0 0 1 323.7 109.2 A 91.191 91.191 0 0 0 317.188 118.107 A 117.312 117.312 0 0 0 312.45 126.15 Q 307.2 135.9 303.75 144.6 Q 301.025 151.471 300.078 155.723 A 24.544 24.544 0 0 0 299.7 157.8 Q 298.8 167.4 305.4 167.4 Q 310.969 167.4 316.751 163.129 A 34.716 34.716 0 0 0 318.9 161.4 A 93.281 93.281 0 0 0 330.095 149.758 A 104.986 104.986 0 0 0 331.8 147.6 Q 337.8 139.8 341.4 134.4 A 20.998 20.998 0 0 1 341.817 133.994 Q 342.581 133.272 342.852 133.207 A 0.21 0.21 0 0 1 342.9 133.2 A 0.746 0.746 0 0 1 343.614 133.646 Q 343.8 134.018 343.8 134.7 Q 343.8 135.9 342.9 137.4 Q 338.1 145.2 331.35 153.45 A 87.078 87.078 0 0 1 323.07 162.295 A 71.37 71.37 0 0 1 317.1 167.25 A 30.973 30.973 0 0 1 310.778 170.92 A 22.833 22.833 0 0 1 301.8 172.8 A 12.757 12.757 0 0 1 298.858 172.483 A 7.742 7.742 0 0 1 294 169.2 A 13.801 13.801 0 0 1 292.027 164.436 Q 291.6 162.478 291.6 160.2 Q 291.6 156 292.5 152.1 Z"
                      id="2"
                      vector-effect="non-scaling-stroke"
                    />
                    <path
                      class={"anim-path"}
                      d="M 446.284 180.769 A 101.849 101.849 0 0 0 468 183 Q 489.3 183 512.4 176.4 A 244.034 244.034 0 0 0 523.75 172.861 A 208.824 208.824 0 0 0 554.7 159.6 A 92.336 92.336 0 0 0 557.588 157.948 A 101.627 101.627 0 0 0 572.55 147 A 200.423 200.423 0 0 0 576.519 143.427 Q 579.455 140.71 581.89 138.211 A 94.462 94.462 0 0 0 586.2 133.5 Q 588.544 130.453 589.057 129.054 A 1.98 1.98 0 0 0 589.2 128.4 A 1.768 1.768 0 0 0 589.149 127.956 Q 589.008 127.412 588.475 127.26 A 1.728 1.728 0 0 0 588 127.2 Q 586.2 127.2 584.1 129.3 A 56.525 56.525 0 0 1 581.66 131.989 Q 580.303 133.398 578.671 134.936 A 129.679 129.679 0 0 1 574.95 138.3 Q 569.1 143.4 562.95 147.9 A 139.627 139.627 0 0 1 559.671 150.231 Q 555.554 153.065 552.3 154.8 A 160.53 160.53 0 0 1 552.167 154.873 A 171.257 171.257 0 0 1 515.4 169.5 Q 495.6 174.9 477 174.9 A 103.825 103.825 0 0 1 464.836 174.208 A 82.122 82.122 0 0 1 444 169.05 A 51.919 51.919 0 0 1 438.762 166.63 A 39.619 39.619 0 0 1 422.4 150.9 A 41.331 41.331 0 0 1 420.811 147.723 A 47.007 47.007 0 0 1 417.9 138.9 A 57.732 57.732 0 0 1 417.632 137.657 A 62.619 62.619 0 0 1 416.4 125.1 A 76.496 76.496 0 0 1 418.136 109.25 A 102.933 102.933 0 0 1 422.55 94.35 A 107.287 107.287 0 0 1 429.137 80.159 A 132.178 132.178 0 0 1 441.15 62.25 A 132.913 132.913 0 0 1 453.279 48.928 A 164.472 164.472 0 0 1 472.5 33.15 A 147.81 147.81 0 0 1 490.386 22.373 A 184.786 184.786 0 0 1 516.9 11.4 Q 522.3 9.6 533.1 7.8 Q 543.9 6 555.6 6 A 116.622 116.622 0 0 1 556.909 6.007 A 105.65 105.65 0 0 1 571.8 7.2 A 54.165 54.165 0 0 1 577.841 8.472 A 42.139 42.139 0 0 1 585.6 11.4 Q 591.6 14.4 594.45 19.95 Q 597.3 25.5 597.3 31.5 A 23.739 23.739 0 0 1 595.05 41.7 Q 592.8 46.5 588.3 49.5 A 20.23 20.23 0 0 0 586.787 50.647 Q 585.378 51.834 584.8 52.893 A 2.943 2.943 0 0 0 584.4 54.3 A 1.262 1.262 0 0 0 584.403 54.38 Q 584.444 55.027 585.166 55.164 A 2.352 2.352 0 0 0 585.6 55.2 A 5.284 5.284 0 0 0 586.205 55.164 Q 588.44 54.907 591.6 52.8 A 19.835 19.835 0 0 0 591.822 52.66 Q 593.393 51.649 595.397 49.958 A 70.268 70.268 0 0 0 597.45 48.15 A 27.283 27.283 0 0 0 599.717 45.828 A 21.514 21.514 0 0 0 602.7 41.4 Q 604.557 37.378 605.456 33.675 A 28.281 28.281 0 0 0 606.3 27 Q 606.3 20.4 602.7 15 A 20.066 20.066 0 0 0 600.559 12.33 Q 598.658 10.324 596.037 8.559 A 40.268 40.268 0 0 0 591 5.7 A 43.875 43.875 0 0 0 585.365 3.365 A 52.562 52.562 0 0 0 576.15 1.2 Q 567.9 0 559.2 0 A 177.574 177.574 0 0 0 557.554 0.008 A 161.769 161.769 0 0 0 533.7 1.95 A 199.03 199.03 0 0 0 529.809 2.605 Q 523.72 3.695 519.37 4.915 A 50.009 50.009 0 0 0 515.1 6.3 A 219.608 219.608 0 0 0 496.717 13.126 A 177.585 177.585 0 0 0 466.05 29.7 A 189.147 189.147 0 0 0 451.179 40.901 A 152.569 152.569 0 0 0 430.8 61.35 A 159.432 159.432 0 0 0 421.016 74.623 A 125.681 125.681 0 0 0 409.5 96.3 A 105.994 105.994 0 0 0 404.516 111.648 A 77.404 77.404 0 0 0 402.3 129.6 Q 402.3 135.9 403.65 141.75 A 77.916 77.916 0 0 0 404.23 144.096 A 68.335 68.335 0 0 0 407.1 152.7 Q 414.6 168.9 431.1 175.95 A 84.103 84.103 0 0 0 446.284 180.769 Z"
                      id="4"
                      vector-effect="non-scaling-stroke"
                    />
                    <path
                      class={"anim-path"}
                      d="M 615 173.1 Q 607.8 173.1 603.6 168.45 A 22.827 22.827 0 0 1 599.251 161.249 A 30.046 30.046 0 0 1 597.9 156.6 Q 596.4 149.4 596.7 141.9 A 111.616 111.616 0 0 1 598.234 129.924 Q 599.7 121.781 602.4 112.5 Q 607.2 96 614.85 78.75 Q 622.5 61.5 631.95 46.2 A 181.497 181.497 0 0 1 642.757 30.519 A 142.041 142.041 0 0 1 651.9 19.8 A 85.114 85.114 0 0 1 659.713 12.462 Q 666.215 7.129 672.6 4.5 A 37.178 37.178 0 0 1 674.856 3.558 Q 675.929 3.153 676.884 2.885 A 16.532 16.532 0 0 1 678.3 2.55 A 27.055 27.055 0 0 1 680.905 2.186 A 21.567 21.567 0 0 1 682.8 2.1 A 11.4 11.4 0 0 1 686.742 2.741 Q 689.921 3.906 691.627 7.189 A 13.661 13.661 0 0 1 692.4 9 A 10.573 10.573 0 0 1 693.262 11.514 Q 693.6 13.088 693.6 15 A 26.735 26.735 0 0 1 692.868 20.991 Q 692.225 23.781 691.018 26.852 A 60.855 60.855 0 0 1 688.8 31.8 Q 684.6 40.5 676.8 51.45 A 285.421 285.421 0 0 1 664.58 67.346 A 332.56 332.56 0 0 1 659.25 73.65 Q 649.5 84.9 639.6 95.25 Q 629.7 105.6 621.3 113.7 A 445.202 445.202 0 0 1 617.307 117.506 Q 611.625 122.85 607.8 126 A 114.769 114.769 0 0 0 606.345 136.758 A 92.23 92.23 0 0 0 606 144.6 A 46.342 46.342 0 0 0 606.647 152.536 A 33.719 33.719 0 0 0 609.15 160.8 A 13.013 13.013 0 0 0 611.686 164.585 Q 614.305 167.238 618.348 167.632 A 14.986 14.986 0 0 0 619.8 167.7 Q 626.957 167.7 633.818 162.068 A 34.797 34.797 0 0 0 633.9 162 A 76.468 76.468 0 0 0 644.372 151.409 A 87.83 87.83 0 0 0 646.65 148.5 A 339.216 339.216 0 0 0 650.764 142.903 Q 652.763 140.12 654.465 137.612 A 177.202 177.202 0 0 0 656.4 134.7 A 20.998 20.998 0 0 1 656.817 134.294 Q 657.581 133.572 657.852 133.507 A 0.21 0.21 0 0 1 657.9 133.5 A 0.746 0.746 0 0 1 658.614 133.946 Q 658.8 134.318 658.8 135 Q 658.8 136.2 657.9 137.7 Q 652.5 146.1 645.9 154.2 Q 639.3 162.3 631.5 167.7 A 30.717 30.717 0 0 1 622.7 171.991 A 27.065 27.065 0 0 1 615 173.1 Z M 624.229 105.899 A 731.132 731.132 0 0 0 626.25 103.8 Q 636.9 92.7 648.45 79.2 Q 660 65.7 669.6 52.65 A 179.787 179.787 0 0 0 676.023 43.357 Q 678.901 38.879 681.068 34.798 A 82.816 82.816 0 0 0 683.7 29.4 A 44.072 44.072 0 0 0 686.229 23.154 A 50.114 50.114 0 0 0 686.7 21.6 Q 687.9 17.4 687.9 13.8 A 13.368 13.368 0 0 0 687.71 11.432 Q 686.944 7.2 683.1 7.2 A 11.781 11.781 0 0 0 678.909 8.078 Q 673.295 10.234 665.41 17.691 A 154.183 154.183 0 0 0 665.4 17.7 Q 653.1 29.1 641.7 46.65 Q 630.3 64.2 621.75 83.55 A 229.398 229.398 0 0 0 612.945 106.632 A 187.398 187.398 0 0 0 609 120.9 Q 614.962 115.48 624.229 105.899 Z"
                      id="5"
                      vector-effect="non-scaling-stroke"
                    />
                    <path
                      class={"anim-path"}
                      d="M 690.3 152.1 L 690.9 149.4 Q 685.2 156.9 679.05 162.9 A 45.657 45.657 0 0 1 674.459 166.852 Q 671.87 168.779 669.309 170.003 A 23.918 23.918 0 0 1 666.9 171 A 31.6 31.6 0 0 1 663.948 172.025 Q 662.439 172.461 661.094 172.652 A 14.22 14.22 0 0 1 659.1 172.8 A 12.757 12.757 0 0 1 656.158 172.483 A 7.742 7.742 0 0 1 651.3 169.2 A 13.801 13.801 0 0 1 649.327 164.436 Q 648.9 162.478 648.9 160.2 Q 648.9 156 649.8 152.1 A 105.699 105.699 0 0 1 650.094 151.235 Q 650.816 149.131 652.631 144.003 A 3066.961 3066.961 0 0 1 652.95 143.1 Q 655.5 135.9 659.85 127.2 A 97.985 97.985 0 0 1 664.832 118.357 A 76.091 76.091 0 0 1 669.3 112.05 A 24.995 24.995 0 0 1 672.112 109.005 Q 673.73 107.542 675.377 106.708 A 9.697 9.697 0 0 1 679.8 105.6 Q 682.2 105.6 682.2 106.8 Q 682.2 107.794 681.377 108.788 A 5.969 5.969 0 0 1 681 109.2 A 91.191 91.191 0 0 0 674.488 118.107 A 117.312 117.312 0 0 0 669.75 126.15 Q 664.5 135.9 661.05 144.6 Q 658.325 151.471 657.378 155.723 A 24.544 24.544 0 0 0 657 157.8 Q 656.1 167.4 662.7 167.4 Q 667.198 167.4 672.164 164.131 A 33.14 33.14 0 0 0 674.85 162.15 Q 681.3 156.9 687.45 148.65 Q 693.6 140.4 698.1 131.4 Q 702.9 122.1 708.6 113.85 Q 714.3 105.6 720.3 105.6 Q 722.7 105.6 722.7 106.8 Q 722.7 107.794 721.877 108.788 A 5.969 5.969 0 0 1 721.5 109.2 A 91.191 91.191 0 0 0 714.988 118.107 A 117.312 117.312 0 0 0 710.25 126.15 Q 705 135.9 701.55 144.6 Q 698.825 151.471 697.878 155.723 A 24.544 24.544 0 0 0 697.5 157.8 Q 696.6 167.4 703.2 167.4 Q 708.769 167.4 714.551 163.129 A 34.716 34.716 0 0 0 716.7 161.4 A 93.281 93.281 0 0 0 727.895 149.758 A 104.986 104.986 0 0 0 729.6 147.6 Q 735.6 139.8 739.2 134.4 A 20.998 20.998 0 0 1 739.617 133.994 Q 740.381 133.272 740.652 133.207 A 0.21 0.21 0 0 1 740.7 133.2 A 0.746 0.746 0 0 1 741.414 133.646 Q 741.6 134.018 741.6 134.7 Q 741.6 135.9 740.7 137.4 Q 735.9 145.2 729.15 153.45 A 87.078 87.078 0 0 1 720.87 162.295 A 71.37 71.37 0 0 1 714.9 167.25 A 30.973 30.973 0 0 1 708.578 170.92 A 22.833 22.833 0 0 1 699.6 172.8 A 12.757 12.757 0 0 1 696.658 172.483 A 7.742 7.742 0 0 1 691.8 169.2 A 13.801 13.801 0 0 1 689.827 164.436 Q 689.4 162.478 689.4 160.2 Q 689.4 156 690.3 152.1 Z"
                      id="6"
                      vector-effect="non-scaling-stroke"
                    />
                    <path
                      class={"anim-path"}
                      d="M 750.6 174.3 Q 745.2 174.3 742.35 172.2 A 14.3 14.3 0 0 1 738.502 168.016 A 13.814 13.814 0 0 1 738 167.1 Q 736.8 164.1 736.2 160.95 Q 735.6 157.8 735.6 154.5 A 58.181 58.181 0 0 1 736.819 142.874 A 71.064 71.064 0 0 1 738.3 136.95 Q 741 127.8 744.75 119.4 A 492.662 492.662 0 0 1 747.457 113.438 Q 749.625 108.75 751.5 105 A 232.227 232.227 0 0 1 766.84 80.288 A 253.858 253.858 0 0 1 767.4 79.5 Q 776.4 66.9 787.35 57.75 Q 798.3 48.6 810 45.9 A 45.513 45.513 0 0 1 811.341 45.652 Q 812.063 45.53 812.7 45.45 Q 813.9 45.3 815.1 45.3 A 21.673 21.673 0 0 1 818.29 45.52 Q 819.931 45.765 821.28 46.282 A 10.224 10.224 0 0 1 823.2 47.25 A 10.414 10.414 0 0 1 825.407 49.139 A 8.226 8.226 0 0 1 827.1 52.2 A 1.277 1.277 0 0 0 827.188 52.66 A 1.568 1.568 0 0 0 827.25 52.8 A 1.445 1.445 0 0 1 827.372 53.138 A 1.225 1.225 0 0 1 827.4 53.4 A 5.491 5.491 0 0 1 827.358 54.114 Q 827.175 55.5 826.2 55.5 Q 825.375 55.5 824.802 53.484 A 12.479 12.479 0 0 1 824.7 53.1 A 2.24 2.24 0 0 0 823.948 51.85 Q 823.293 51.269 822.098 50.881 A 9.214 9.214 0 0 0 822 50.85 A 16.162 16.162 0 0 0 819.025 50.234 A 21.193 21.193 0 0 0 816.6 50.1 Q 806.7 50.1 796.65 58.5 A 103.87 103.87 0 0 0 785.882 68.989 A 137.754 137.754 0 0 0 777.3 79.65 Q 768 92.4 760.5 105.9 L 756.75 113.4 Q 753.9 119.1 750.75 126.3 Q 747.6 133.5 745.5 139.8 A 13.065 13.065 0 0 0 745.266 140.358 Q 744.432 142.5 745.5 142.5 A 0.535 0.535 0 0 0 745.824 142.365 Q 746.329 141.967 747 140.4 Q 752.193 128.285 759.188 120.33 A 54.129 54.129 0 0 1 759.75 119.7 A 97.984 97.984 0 0 1 768.161 111.442 A 79.129 79.129 0 0 1 774.9 106.2 Q 782.7 101.4 790.5 101.4 Q 796.2 101.4 800.1 104.55 Q 803.321 107.152 803.882 112.516 A 22.954 22.954 0 0 1 804 114.9 Q 804 120.3 801.9 126.6 A 51.776 51.776 0 0 1 799.946 131.353 Q 798 135.525 795 140.4 A 97.084 97.084 0 0 1 786.112 152.546 A 111.069 111.069 0 0 1 783.45 155.55 A 85.861 85.861 0 0 1 773.815 164.593 A 74.708 74.708 0 0 1 769.2 168 A 41.72 41.72 0 0 1 762.926 171.556 Q 758.996 173.33 755.151 173.91 A 25.696 25.696 0 0 1 754.5 174 A 11.841 11.841 0 0 1 753.642 174.183 Q 753.196 174.26 752.801 174.286 A 6.011 6.011 0 0 1 752.4 174.3 L 750.6 174.3 Z M 752.4 171 A 15.887 15.887 0 0 0 757.811 169.967 Q 762.159 168.391 767.181 164.41 A 59.009 59.009 0 0 0 768.3 163.5 A 88.804 88.804 0 0 0 781.32 149.47 A 102.378 102.378 0 0 0 784.05 145.65 A 70.54 70.54 0 0 0 788.401 138.424 Q 790.374 134.615 791.502 131.058 A 33.722 33.722 0 0 0 792.6 126.6 A 54.904 54.904 0 0 0 793.149 123.394 Q 793.368 121.812 793.451 120.413 A 27.46 27.46 0 0 0 793.5 118.8 A 27.397 27.397 0 0 0 793.352 115.829 Q 793.022 112.817 791.957 111.11 A 4.969 4.969 0 0 0 790.8 109.8 A 9.946 9.946 0 0 0 784.613 107.701 A 12.269 12.269 0 0 0 784.5 107.7 A 17.629 17.629 0 0 0 777.075 109.409 Q 774.188 110.738 771.3 113.1 A 61.557 61.557 0 0 0 762.905 121.508 A 75.246 75.246 0 0 0 759.15 126.45 Q 753.6 134.4 750 142.5 A 94.372 94.372 0 0 0 748.014 147.299 Q 746.119 152.288 745.5 156 A 35.65 35.65 0 0 0 745.184 157.817 A 29.812 29.812 0 0 0 745.05 158.85 Q 744.9 160.2 744.9 161.4 Q 744.9 171 752.4 171 Z"
                      id="7"
                      vector-effect="non-scaling-stroke"
                    />
                  </g>
                </svg>
                <h4 class="description" style={{ fontWeight: "bold" }}>
                  Werden Sie Teil der Cru Club - Community und erhalten Sie
                  regelmäßig erstklassige Weine, die wir exklusiv für Sie
                  kuratieren.
                </h4>
                <br />
                <div class="buttons">
                  {/* <a
                    href="#pablo"
                    class="btn btn-icon btn-link btn-neutral btn-lg"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#pablo"
                    class="btn btn-icon btn-link btn-neutral btn-lg"
                  >
                    <i class="fab fa-facebook-square"></i>
                  </a>
                  <a
                    href="#pablo"
                    class="btn btn-icon btn-link btn-neutral btn-lg"
                  >
                    <i class="fab fa-get-pocket"></i>
                  </a> */}
                  {/* <a
                    href="#intro"
                    style={{ zIndex: 1000, background: cta }}
                    class="btn btn-primary btn-lg mr-3"
                  >
                    Mehr erfahren
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="py-1 px-5 mt-5 position-relative pb-5" id={"intro"}>
          <div id="carousel-testimonials" class="carousel slide carousel-team">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container" style={{ maxWidth: "100%" }}>
                  <div class="row my-auto">
                    <div class="col-md-5 col-lg-6 p-2 pb-md-5 ms-lg-auto">
                      <div class="my-auto text-center">
                        <img
                          class=" border-radius-md my-auto"
                          src="https://bcassets.s3.amazonaws.com/static/images/berghaus_sqaure.original.png"
                          alt="First slide"
                          style={{
                            filter:
                              "drop-shadow(3px 5px 10px rgb(191 172 130 / 1))",
                            transform: "scaleX(-1)",
                            borderRadius: "50%",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-7 me-lg-auto position-relative my-auto">
                      <p class="text-md mb-1">// Cru Club</p>

                      <h3
                        style={{
                          fontSize: "40px",
                          lineHeight: "50px",
                          color: "#333",
                        }}
                      >
                        Einfach Unschlagbar: 3 oder 6 Spitzenweine pro Quartal -
                        frei Haus!
                        {/* Wein ist Lebensfreude - im Portfolio und im Glas! */}
                      </h3>
                      <p class="my-4">
                        <i style={{ fontSize: "16px" }}>
                          "Unsere gesamte Genussexpertise in einem
                          Wein-Abonemment: Mit unseren 3er- oder 6er-Kisten, die
                          wir mit viel Akribie für Sie kuratieren, möchten wir
                          sie einmal im Quartal beglücken und Ihren persönlichen
                          Wein-Cosmos erweitern. Lassen Sie sich positiv
                          überraschen! Jetzt abonnieren!"
                          {/* "Bei Berghaus & Cie. haben wir es täglich mit den
                          besten Weinen der Welt zu tun. Wir kennen die besten
                          Jahrgänge der besten Winzer in- und auswendig und
                          werden deshalb oft gefragt, ob wir denn auch privat
                          nur solche Weine trinken würden... <br />
                          <br /> Nein, natürlich nicht und dazu sage ich auch
                          immer, dass es schon im Bereich um 30 € hervorragende
                          Weine zum Genießen gibt. Ich persönlich trinke lieber
                          zwei besondere Weine im Monat als doppelt so viele
                          mittelmäßige. Dies ist die Quintessenz unseres Cru
                          Club!" */}
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
                            <b style={{ fontSize: "16px" }}>
                              Tristan A. Berghaus
                            </b>
                            <div>
                              <small style={{ fontSize: "13px" }}>
                                Geschäftsführer von Berghaus & Cie.
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
              <div class="carousel-item">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-5 p-lg-5 ms-lg-auto">
                      <div class="p-3">
                        <img
                          class="w-100 border-radius-md shadow"
                          src="../../assets/img/ivana.jpg"
                          alt="First slide"
                        />
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-7 me-lg-auto">
                      <p class="text-sm font-weight-bold mb-1">
                        - Customer Story
                      </p>
                      <h3 class="text-dark">
                        Awesome services! Fast and secure.
                      </h3>
                      <p class="my-4">
                        <i>
                          "Wealth creation is an evolutionarily recent
                          positive-sum game. Status is an old zero-sum game.
                          Those attacking wealth creation are often just seeking
                          status."
                        </i>
                      </p>
                      <div class="author align-items-center">
                        <div class="avatar rounded-circle shadow bg-gradient-dark">
                          <img
                            src={
                              "../../assets/img//logos/white-logos/logo-google-white.svg"
                            }
                            alt="logo"
                          />
                        </div>
                        <div class="name ps-2">
                          <span>Ivana Goerge</span>
                          <div>
                            <small>CFO - Google</small>
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
            </div>
          </div>
        </section>

        <div
          class="mb-5 mb-sm-3"
          style={{
            display: "flex",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              "url('https://bcassets.s3.amazonaws.com/static/images/pexels-engin-akyurt-8485685.original.jpg')",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              margin: 0,
              padding: "50px 0 50px 0",
              background: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <div>
              <div
                class="container text-center pb-5 mt-5"
                // data-aos="fade-up"
                // data-aos-anchor-placement="center-bottom"
              >
                <h2
                  className={"h3 mt-5"}
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Die Weine sind eine Überraschung - alles andere haben Sie fest
                  im Griff!
                </h2>
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Beim Cru Club steht die Freude am Wein an erster Stelle - wir
                  bieten Ihnen deshalb die volle Flexibilität.
                </p>

                <div class="row pt-5 pb-0">
                  <div class="col-md-4 col-sm-12 text-center ">
                    <div
                      className={"transp-card"}
                      onClick={() =>
                        changeMarkup(
                          potentialanalyse_markup,
                          toggleShowModal(true)
                        )
                      }
                    >
                      {/* <i
                      class="now-ui-icons sport_user-run mb-3 round-icon-lg"
                      style={{ color: primary }}
                    ></i> */}

                      <span class="round-icon-lg text-white">
                        <span style={{ width: "40px", height: "40px" }}>
                          <HandsHeart
                            width={"45px"}
                            height={"45px"}
                            strokewidth={3}
                          />
                        </span>
                      </span>

                      <p>
                        <h3
                          className={"mb-0 h5 mt-2"}
                          style={{ fontSize: "18px" }}
                        >
                          Jederzeit kündbar
                        </h3>
                        {/* <b className={"text-primary"}>mehr erfahren</b> */}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-12 text-center mt-5 mt-md-0">
                    <div
                      className={"transp-card"}
                      onClick={() =>
                        changeMarkup(provenienz_markup, toggleShowModal(true))
                      }
                    >
                      <span class="round-icon-lg text-white">
                        <span style={{ width: "40px", height: "40px" }}>
                          <Delivery
                            width={"40px"}
                            height={"40px"}
                            strokewidth={3}
                          />
                        </span>
                      </span>
                      <p>
                        <h3
                          className={"mb-0 h5 mt-2"}
                          style={{ fontSize: "18px" }}
                        >
                          Kostenloser Versand
                        </h3>
                        {/* <b className={"text-primary"}>mehr erfahren</b> */}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-12 text-center mt-5 mt-md-0 ">
                    <div
                      className={"transp-card"}
                      onClick={() =>
                        changeMarkup(
                          zustand_lagerung_markup,
                          toggleShowModal(true)
                        )
                      }
                    >
                      {" "}
                      {/* <i
                      class="now-ui-icons ui-2_like mb-3 round-icon-lg"
                      style={{ color: primary }}
                    ></i> */}
                      <span class="round-icon-lg text-white">
                        <span style={{ width: "40px", height: "40px" }}>
                          <GiftExchange
                            width={"40px"}
                            height={"40px"}
                            strokewidth={3}
                          />
                        </span>
                      </span>
                      <p>
                        <h3
                          className={"mb-0 mt-2"}
                          style={{ fontSize: "18px" }}
                        >
                          Geschenk in jeder Kiste
                        </h3>
                        {/* <b className={"text-primary"}>mehr erfahren</b> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="py-1 px-5 mt-5 position-relative pb-5" id={"intro"}>
          <div id="carousel-testimonials" class="carousel slide carousel-team">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container" style={{ maxWidth: "100%" }}>
                  <div class="row my-auto">
                    <div class="col-sm-12  col-lg-6 col-md-7 me-lg-auto position-relative my-auto">
                      <p class="text-md mb-1">// Quartalsweise 3 oder 6</p>

                      <div
                        style={{
                          fontSize: "40px",
                          lineHeight: "50px",
                        }}
                      >
                        Besondere Weine und solche, die Sie noch nie getrunken
                        haben!
                      </div>
                      <p class="my-4">
                        <i style={{ fontSize: "16px" }}>
                          Bei Berghaus & Cie. haben wir es täglich mit den
                          besten Weinen der Welt zu tun. Wir kennen die besten
                          Jahrgänge der besten Winzer in- und auswendig und
                          werden deshalb oft gefragt, welche Weine wir privat
                          trinken - erfahren Sie es im Cru Club!
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
                      {/* <div class="author">
                        <div>
                          <div class="name ps-2">
                            <b>Tristan A. Berghaus</b>
                            <div>
                              <small>Geschäftsführer von Berghaus & Cie.</small>
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
                      </div> */}
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-6 p-2 pb-md-5 ms-lg-auto">
                      <div class="my-auto text-center">
                        <img
                          class=" border-radius-md my-auto"
                          // id={"wineBox"}
                          src="https://bcassets.s3.amazonaws.com/static/images/weinkiste_freigestellt.original.png"
                          alt="First slide"
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            // borderRadius: "50%",
                            // animation: "float 3s infinite ease-in-out",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="carousel-item">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-md-5 p-lg-5 ms-lg-auto">
                      <div class="p-3">
                        <img
                          class="w-100 border-radius-md shadow"
                          src="../../assets/img/ivana.jpg"
                          alt="First slide"
                        />
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-7 me-lg-auto">
                      <p class="text-sm font-weight-bold mb-1">
                        - Unser Angebot an Sie
                      </p>
                      <h3 class="text-dark">
                        Awesome services! Fast and secure.
                      </h3>
                      <p class="my-4">
                        <i>
                          "Wealth creation is an evolutionarily recent
                          positive-sum game. Status is an old zero-sum game.
                          Those attacking wealth creation are often just seeking
                          status."
                        </i>
                      </p>
                      <div class="author align-items-center">
                        <div class="avatar rounded-circle shadow bg-gradient-dark">
                          <img
                            src={
                              "../../assets/img//logos/white-logos/logo-google-white.svg"
                            }
                            alt="logo"
                          />
                        </div>
                        <div class="name ps-2">
                          <span>Ivana Goerge</span>
                          <div>
                            <small>CFO - Google</small>
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
              </div> */}
            </div>
          </div>
        </section>

        {/* <section style={{ textAlign: "center" }}>
          <div className={"row"}>
          
            <div className={"col"}>
               <img
            id={"wineBox"}
            width={"650px"}
            src={
              "https://bcassets.s3.amazonaws.com/static/images/weinkiste_freigestellt.original.png"
            }
          />
            </div>
          </div>
         
        </section> */}

        <div
          class="pricing-3 mt-5 row mx-0 section-image"
          style={{
            backgroundSize: "cover",
            height: "100%",
            backgroundPosition: "center",
            backgroundImage:
              "url('https://bcassets.s3.amazonaws.com/static/images/pexels-andrea-piacquadio-3938891.original.jpg')",
          }}
          id="pricing-3"
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              display: "flex",
              background: "rgba(150,150,150,0.5)",
              overflowX: "hidden",
              padding: "30% 0 30% 0",
            }}
          >
            <div class="mx-auto my-auto" style={{ position: "relative" }}>
              <div class="row mx-0">
                <div class="col-md-6 ml-auto mr-auto text-center">
                  <h2 class="title text-white">Wie viel darf's sein?</h2>
                  <h4
                    class="description text-white"
                    style={{ fontWeight: "bold" }}
                  >
                    3 oder 6 Flaschen? So, oder so: Hoch- und Herunterstufen ist
                    jederzeit möglich!
                  </h4>
                  <div class="section-space"></div>
                </div>
              </div>
              <div class="row mx-0">
                <div class="col-md-4 ml-auto">
                  <div class="card card-pricing">
                    <div class="card-body">
                      <h5
                        class="category"
                        style={{ fontWeight: "bold", fontSize: "15px" }}
                      >
                        Junior
                      </h5>
                      <h1 class="card-title">
                        <span style={{ fontSize: "35px" }}>119 €</span>
                        <span style={{ fontSize: "25px" }}> /Quartal</span>
                      </h1>
                      <ul>
                        <li>3 Flaschen pro Quartal</li>
                        <li>rot, weiß, rosé und sparkling gemischt</li>
                        <li>Geschenk in jeder Kiste</li>
                        <li>jederzeit kündbar</li>
                        <li>kostenloser Versand</li>
                      </ul>
                      <a
                        onClick={()=>toggleShowModal("https://buy.stripe.com/dR63es5iQ0VL70AcMT")}
                        target={"_blank"}
                        class="w-100 btn btn-lg btn-primary text-white"
                        style={{background: primary_t50}}
                      >
                        Starten
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mr-auto">
                  <div
                    class="card card-pricing card-raised"
                    style={{ background: cta, color: "white" }}
                  >
                    <div class="card-body">
                      <h5
                        class="category text-white"
                        style={{ fontWeight: "bold", fontSize: "15px" }}
                      >
                        Premium
                      </h5>
                      <h1 class="card-title">
                        <span style={{ fontSize: "35px" }}>229 €</span>
                        <span style={{ fontSize: "25px" }}> /Quartal</span>
                      </h1>
                      <ul>
                        <li>6 Flaschen pro Quartal</li>
                        <li>rot, weiß, rosé und sparkling gemischt</li>
                        <li>Geschenk in jeder Kiste</li>
                        <li>jederzeit kündbar</li>
                        <li>kostenloser Versand</li>
                      </ul>
                      <a
                        onClick={()=>toggleShowModal("https://buy.stripe.com/cN26qEdPm6g5doY3ci")} 
                        style={{fontWeight: "bold"}}
                        class="w-100 btn btn-lg btn-neutral text-dark"
                      >
                        Starten
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
        ></script>
        <div class="elfsight-app-f1da221f-f38a-4674-bc52-8e8b8e8abdc4"></div>

        <div className="section pb-5 pt-5">
          <center id="faq-slide" className={"animated"}>
            <h2>Sind noch Fragen offen...?</h2>
            <div style={{ maxWidth: "800px", height: "100%" }}>
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
                        Was ist der Cru Club?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Im Drei-Monats-Takt gibt es ein für Sie kuratiertes
                        Weinpaket mit wahlweise 6 oder 3 Flaschen hochklassiger
                        Weine. Zudem werden Sie zu exklusive
                        Club-Veranstaltungen eingeladen.
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
                        Wann und wie wird der Wein ausgeliefert?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Die Pakete kommen jeweils zum Mitte des Monats März, Juni,
                        September und Dezember bei Ihnen an. Wir versenden alle
                        Pakete mit DHL. Sobald Ihr Paket unser Lager verlässt,
                        bekommen Sie von uns eine E-Mail mit den
                        Versandinformationen und Ihrem Versand-Tracking-Link. So
                        können Sie jederzeit einsehen, wo sich Ihr Paket gerade
                        befindet und wann es ankommt. Bei DHL können Sie einen
                        Wunschtag, einen Wunschort, einen Wunschnachbarn und
                        eine Wunschzeit bestimmen.Sie können auch eine
                        Packstation oder eine Filiale für die Lieferung
                        festlegen.
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
                        Wer entscheidet, welche Weine im Paket aufgenommen
                        werden?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Unsere Weine werden von Tristan Berghaus persönlich für
                        Sie kuratiert. Im Sommer gibt es weniger Rotwein und im
                        Winter mehr.
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
                        Kann ich eine Cru Club Mitgliedschaft verschenken?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Ja, das ist möglich. Bitte nenne die beschenkte Person
                        in der Lieferadresse.
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
                        In welche Länder wird das Paket geliefert?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Der Versand innerhalb Deutschlands ist kostenfrei. Für
                        den Versand nach Österreich und in die Schweiz werden
                        3,49€ inkl. MwSt berechnet. Individuelle Versandziele
                        können wir auf Anfrage anbieten.
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
                        Wie kann ich meine Mitgliedschaft bezahlen?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Die Mitgliedschaft kann per Kreditkarte oder SEPA
                        Lastschrift bezahlt werden. Die Mitgliedschaft wird
                        quartalsweise abgerechnet.
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
                        Kann ich Weine nachbestellen?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Natürlich, auf Anfrage können Weine als 6er-Karton
                        nachbestellt werden. Schreiben Sie uns einfach an
                        info@berghauscie.de.
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
                        Kann ich meine Mitgliedschaft pausieren?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Ihre Mitgliedschaft kann problemlos pausiert werden.
                        Senden Sie hierfür eine E-Mail an info@berghauscie.de
                        und teilen Sie uns mit, wie lange Sie Ihre
                        Mitgliedschaft pausieren möchten.
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
                        Was ist wenn ein Wein mir nicht schmeckt?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Das kann vorkommen. Jeder unserer Weine erfüllt die
                        hohen Qualitätsstandards von Tristan Berghaus und ist
                        auf seine eigene Art und Weise eine Erfahrung wert. Denn
                        wir möchten Ihnen die großartige Vielfalt der Weinwelt
                        präsentieren. Das muss aber nicht heißen, dass er jeden
                        Geschmack trifft. Dennoch wird Ihnen jeder Wein mehr und
                        mehr über Ihr Wein-Profil verraten. Letztlich ist es
                        genauso wertvoll herauszufinden, welcher Wein Ihnen
                        nicht schmeckt, wie welcher Wein genau Ihr Ding ist.
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
                        Mein Paket ist nicht angekommen.
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Es kann, wenn auch nur selten, vorkommen, dass ein Paket
                        beim Versand zu Bruch gegangen ist. Sie sehen diese
                        Meldung auch über Ihren DHL Tracking Link. In der Regel
                        wird das Paket dann von DHL an uns zurückgeschickt. Wir
                        informieren Sie sofort und senden Ihnen ein neues Paket
                        zu. Sollte Ihr Paket mit einer zerbrochenen Flasche
                        zugestellt werden, sagen Sie bitte Bescheid ud wir
                        senden Ihnen sofort kostenfrei einen Ersatz zu.
                      </p>
                      <p>
                        Sollte das Paket nicht zugestellt werden können, weil
                        sich die Adresse geändert hat oder Sie nicht anwesend
                        waren bzw. nicht im DHL Shop abholen konnten, wird das
                        Paket an uns zurückgesendet. In diesem Fall können Sie
                        ein neue Zustellung beauftragen. Schreiben Sie uns
                        hierzu einfach kurz eine E-Mail an
                        cru.club@berghauscie.de. Sollte das Paket unverschuldet
                        nicht zugestellt werden können, ist eine zweite
                        Zustellung für Sie immer kostenfrei.
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
                        Wie kann ich meine Mitgliedschaft kündigen?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Wir hoffen, dass wir Sie als wertvollen Kunden möglichst
                        lange auf Ihrer Wein-Reise begleiten dürfen. Falls Sie
                        mit etwas nicht zufrieden sind, sagen Sie uns unbedingt
                        Bescheid.
                      </p>
                      <p>
                        Sie können jederzeit Ihre Mitgliedschaft kündigen.
                        Schreiben Sie uns einfach eine E-Mail mit Ihren
                        Kundenangaben an info@berghauscie.de. Wir kümmern uns um
                        den Rest.
                      </p>
                      <p>
                        Beachten Sie bei Ihrer Kündigung, dass Sie vor dem 20.
                        des Versand-Monats kündigen, um kein Paket mehr zu
                        erhalten. Falls Sie nach dem 20. kündigen, bekommen Sie
                        noch ein Paket im Folgemonat. Danach ist Ihre
                        Mitgliedschaft aufgelöst.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </center>
        </div>
        {/* <div className={"container-fluid"}>
        

          <div class="container mt-sm-n5 animated fadeIn slower" id={"intro"}>
            <div className={"row mt-5"}>
              <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                <span class="round-icon text-white mb-n3">
                  <span style={{ width: "30px", height: "30px" }}>
                    <Magnifier width={"30px"} height={"30px"} strokewidth={3} />
                  </span>
                </span>
               
              </div>
              <div class="col-md-8 offset-md-2 col-sm-12">
                <div class=" info-horizontal">
                  <div class="card p-3">
                    <h5 class="">Geringe Mengen</h5>
                    <p class="text-left">
                      Weltweit gibt es in allen hochklassigen Weinbaugebieten
                      strenge Richtlinien und Regeln, um sowohl die Qualität zu
                      kontrollieren als auch die Produktion zu begrenzen.
                      Premiumweine, die gleichzeitig auch investmentwürdige
                      Weine sind, machen weniger als 1 % der Produktion
                      hochklassiger Weine weltweit aus.
                      <br />
                      <br />
                      Die Tatsache, das exquisite Weine nur in einem begrenzten
                      Umfang zu Verfügung stehen und diese Menge darüber hinaus
                      aufgrund des Konsums einem natürlichen Schwund unterliegt,
                      hat die Preise für die besten Weine schon immer steigen
                      lassen.
                      <br />
                      <br />
                      Das weltweite Netzwerk von Berghaus & Cie. bietet Ihnen
                      einen exklusiven Zugang zu erstklassigen und seltenen
                      Weine, die für ein Wein Investment bestens geeignet sind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-sm-n5 animated fadeIn slower">
            <div className={"row mt-5"}>
              <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                <span class="round-icon text-white mb-n3">
                  <span style={{ width: "30px", height: "30px" }}>
                    <TimeMachine
                      width={"30px"}
                      height={"30px"}
                      strokewidth={3}
                    />
                  </span>
                </span>
              
              </div>
              <div class="col-md-8 offset-md-2 col-sm-12">
                <div class=" info-horizontal">
                  <div class="card p-3">
                    <h5 class="">Lagerung</h5>
                    <p class="text-left">
                      Viele hochwertige Weine haben ein Entwicklungspotenzial,
                      welches sie erst nach vielen Jahren und teilweise sogar
                      erst Jahrzehnten angemessener Lagerung voll ausschöpfen
                      können. Daher sollte Wein, um seine Qualität nicht negativ
                      zu beeinflussen, stets unter idealen Bedingungen gelagert
                      werden.
                      <br />
                      <br />
                      Für die optimale Reifung von Wein ist die richtige
                      Lagerung entscheidend. Konstante Temperaturen und eine
                      Luftfeuchtigkeit von ca. 65 % sind hierbei die
                      wesentlichen Faktoren.
                      <br />
                      <br />
                      Jeder Wein reift anders. Wir behalten die individuelle
                      Entwicklung Ihres Wein stets im Blick, um den besten
                      Verkaufszeitpunkt zu finden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-sm-n5 animated fadeIn slower">
            <div className={"row mt-5"}>
              <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                <span class="round-icon text-white mb-n3">
                  <span style={{ width: "30px", height: "30px" }}>
                    <Athletics width={"30px"} height={"30px"} strokewidth={3} />
                  </span>
                </span>
               
              </div>
              <div class="col-md-8 offset-md-2 col-sm-12">
                <div class=" info-horizontal">
                  <div class="card p-3">
                    <h5 class="">Angebot & Nachfrage</h5>
                    <p class="text-left">
                      Angebot und Nachfrage bestimmen, wie überall, auch bei
                      hochklassigen Weinen den Preis. Je besser ein Wein mit dem
                      Alter wird, desto begehrenswerter - und damit wertvoller -
                      wird er.
                      <br />
                      <br />
                      Der Konsum von guten Weinen und die Seltenheit bestimmter
                      Jahrgänge treibt den Preis weiter nach oben. Immer mehr
                      Investoren suchen nach einer immer geringer werdenden
                      Anzahl von Flaschen. Diese Situation verschärft sich noch
                      durch eine ständig wachsende weltweite Nachfrage nach
                      diesem besonderen Vermögenswert.
                      <br />
                      <br />
                      Für ein erfolgreiches Wein Investment ist es wesentlich,
                      das Angebot und die Nachfrage immer im Blick zu behalten.
                      <br />
                      <br />
                      Wir von Berghaus & Cie. nehmen uns Zeit für Sie und
                      beraten Sie so ausführlich wie Sie es sich wünschen. Wir
                      empfehlen Ihnen die Weine, die für Ihr persönliches
                      Weinportfolio am besten geeignet sind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mod mb-5 mb-sm-3">
            <div class="mod-i">
              <div>
                <div
                  class="container text-center pb-5 mt-5"
                  // data-aos="fade-up"
                  // data-aos-anchor-placement="center-bottom"
                >
                  <h2 className={"h3 mt-5"} style={{ fontSize: "24px" }}>
                    Was macht ein{" "}
                    <span
                      style={{
                        wordBreak: "break-word",
                        hyphens: "auto",
                      }}
                    >
                      Wein&shy;investment
                    </span>{" "}
                    erfolgreich?
                  </h2>
                  <p style={{ fontSize: "18px" }}>
                    Drei Aspekte spielen für ein profitables Wein Investment
                    eine zentrale Rolle.
                  </p>

                  <div class="row pt-5 pb-0">
                    <div class="col-md-4 col-sm-12 text-center ">
                      <div
                        className={"transp-card"}
                        onClick={() =>
                          changeMarkup(
                            potentialanalyse_markup,
                            toggleShowModal(true)
                          )
                        }
                      >
                      

                        <span class="round-icon-lg text-white">
                          <span style={{ width: "40px", height: "40px" }}>
                            <BarArrowStraight
                              width={"45px"}
                              height={"45px"}
                              strokewidth={3}
                            />
                          </span>
                        </span>

                        <p>
                          <h3
                            className={"mb-0 h5 mt-2"}
                            style={{ fontSize: "18px" }}
                          >
                            Potentialanalyse
                          </h3>
                          <b className={"text-primary"}>mehr erfahren</b>
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12 text-center mt-5 mt-md-0">
                      <div
                        className={"transp-card"}
                        onClick={() =>
                          changeMarkup(provenienz_markup, toggleShowModal(true))
                        }
                      >
                        <span class="round-icon-lg text-white">
                          <span style={{ width: "40px", height: "40px" }}>
                            <PaperDiploma
                              width={"40px"}
                              height={"40px"}
                              strokewidth={3}
                            />
                          </span>
                        </span>
                        <p>
                          <h3
                            className={"mb-0 h5 mt-2"}
                            style={{ fontSize: "18px" }}
                          >
                            Lückenlose Provenienz
                          </h3>
                          <b className={"text-primary"}>mehr erfahren</b>
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12 text-center mt-5 mt-md-0 ">
                      <div
                        className={"transp-card"}
                        onClick={() =>
                          changeMarkup(
                            zustand_lagerung_markup,
                            toggleShowModal(true)
                          )
                        }
                      >
                       
                    
                        <span class="round-icon-lg text-white">
                          <span style={{ width: "40px", height: "40px" }}>
                            <ThumbUp
                              width={"40px"}
                              height={"40px"}
                              strokewidth={3}
                            />
                          </span>
                        </span>
                        <p>
                          <h3
                            className={"mb-0 mt-2"}
                            style={{ fontSize: "18px" }}
                          >
                            Zustand & Lagerung
                          </h3>
                          <b className={"text-primary"}>mehr erfahren</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-5 mt-sm-5 pt-5 mb-sm-5 pb-5 text-center">
          

            <div
              className={"row mx-auto pt-5"}
              // data-aos="fade-up"
              // data-aos-anchor-placement="center-bottom"
              style={{ maxWidth: "1200px" }}
            >
              <div class="col-md-1 text-center" style={{ zIndex: 100 }}>
                <span class="round-icon text-white">
                  <span style={{ width: "30px", height: "30px" }}>
                    <BMeeting width={"30px"} height={"30px"} strokewidth={3} />
                  </span>
                </span>
              </div>
              <div class="col-md-5 mb-sm-5">
                <div class=" info-horizontal pr-md-5">
                  <div class="">
                    <p
                      className={
                        "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2 services-card"
                      }
                      style={
                        maxServicesCardHeight
                          ? { minHeight: maxServicesCardHeight }
                          : {}
                      }
                    >
                      <h3 class="text-center mt-0 h5">Fundierte Beratung</h3>
                      <div className={"text-left"}>
                        Grundlage für den Erfolg Ihres Wein Investments ist eine
                        umfassende Beratung, die Ihre speziellen Wünsche und
                        Bedürfnisse in den Mittelpunkt stellt. Ob Einsteiger
                        oder Profi, wir bieten in jedem Fall die passende
                        Beratung.
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-1 text-center " style={{ zIndex: 100 }}>
                <span class="round-icon text-white">
                  <span style={{ width: "30px", height: "30px" }}>
                    <Diamond width={"30px"} height={"30px"} strokewidth={3} />
                  </span>
                </span>
              </div>
              <div class="col-md-5  mb-sm-5">
                <div class="info-horizontal pr-md-5">
                  <div class="">
                    <p
                      className={
                        "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2 services-card"
                      }
                      style={
                        maxServicesCardHeight
                          ? { minHeight: maxServicesCardHeight }
                          : {}
                      }
                    >
                      <h3 class="text-center mt-0 h5">Exquisite Weine</h3>
                      <div className={"text-left"}>
                        Wir bieten Ihnen hochklassige und seltene Weine für Ihr
                        persönliches Wein Investment. Durch unser großes
                        Einkaufsnetzwerk profitieren Sie von attraktiven
                        Einstiegspreisen. Dies erlaubt ein größeres Wachstum
                        Ihres Kapitals.
                      </div>
                    </p>
                  </div>
                </div>
              </div>
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
                  // style={{ maxWidth: "450px" }}
                />
                <a
                  href={"https://calendly.com/berghausundcie/beratungsgesprach"}
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
                
              </div>
            </div>

            <h3 className={"mt-5 text-center"} style={{ fontSize: "24px" }}>
              Haftungsausschluss
            </h3>
            <p className={"text-justify"}>
              Berghaus & Cie. berät seine Kunden unabhängig. Der Wert eines
              Weines kann steigen oder fallen. Berghaus & Cie. garantiert keine
              bestimmte Wertentwicklung der Weine. Die Vorschläge von Berghaus &
              Cie. an den Kunden sind lediglich Vorschläge. Der Kunde
              entscheidet frei über deren Kauf. In die Vorschläge von Berghaus &
              Cie. fließen die Erfahrungen der Mitarbeiter, aktuelle
              Marktentwicklungen, Kritikerbewertungen sowie historische
              Marktentwicklungen mit ein. Weiterhin kann und darf Berghaus &
              Cie. nicht steuerlich hinsichtlich möglicher Gewinne aus dem
              Verkauf von Wein beraten und empfiehlt den Kunden einen
              Steuerberater diesbezüglich zu kontaktieren. Es gelten die
              Allgemeinen Geschäftsbedingungen der Berghaus & Cie. GmbH, eine
              aktuelle Fassung finden Sie unter{" "}
              <a
                className={"text-dark"}
                href={
                  "https://www.berghaus-cie.com/legal/allgemeine-geschaeftsbedingungen"
                }
              >
                https://www.berghaus-cie.com/legal/allgemeine-geschaeftsbedingungen
              </a>
              .
            </p>
          </div>
        </div> */}
      </>
    </>
  );
};

export default CruClub;
