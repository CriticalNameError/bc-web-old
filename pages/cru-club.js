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
import PaperDiploma from "icons/paper-diploma";
import ThumbUp from "icons/thumb-up";
import RightArrow from "icons/right-arrow";
import BottleWine from "icons/bottle-wine";
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
import { Col, Row } from "reactstrap";

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

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
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
          Warum sind Wein Investments so gewinnbringend? Und worauf muss man
          achten?
        </title>
        <meta
          name="description"
          content="Wie funktioniert der Wein für Fine Wine bzw. die besten Weine der Welt? Worauf muss ich bei teurem Wein achten? Wo kann ich die besten Weine der Welt als Anlage kaufen und mit renditen schnell verkaufen?"
          key="description"
        />
      </Head>
      <>
        {/* <CustomModal
          markup={markup}
          showModal={showModal}
          toggleShowModal={toggleShowModal}
        ></CustomModal> */}

        <div class="page-header header-filter">
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

          <div class="container" style={{ height: "100vh" }}>
            <div class="row h-100">
              <div
                class="col-md-7 ml-auto text-right my-auto"
                style={{ zIndex: 1000 }}
              >

                <h1 class="title">Cur Club - Wein kann man übrigens auch trinken...</h1>
                <h4 class="description">
                  Werden Sie Teil unserer Cru Club - Community und erhalten Sie
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
                  <a href="#intro" class="btn btn-primary btn-lg mr-3">
                    Mehr erfahren
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="py-4 px-5 mt-5 position-relative" id={"intro"}>
          <div id="carousel-testimonials" class="carousel slide carousel-team">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="container">
                  <div class="row my-auto">
                    <div class="col-md-5 p-2 pb-md-5 ms-lg-auto">
                      <div class="my-auto">
                        <img
                          class="w-100 border-radius-md my-auto"
                          src="https://bcassets.s3.amazonaws.com/static/images/berghaus_sqaure.original.png"
                          alt="First slide"
                          style={{
                            filter: "drop-shadow(3px 5px 10px rgb(191 172 130 / 1))",
                            transform: "scaleX(-1)",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-lg-5 col-md-7 me-lg-auto position-relative">
                      <p class="text-md font-weight-bold mb-1">- Cru Club</p>

                      <h3 class="text-dark" style={{fontFamily: "'Whisper', cursive", fontSize: "50px"}}>
                        Wein ist Lebensfreude - im Portfolio und im Glas!
                      </h3>
                      <p class="my-4">
                        <i>
                          "Das Vinoversum ist unendlich groß. Als Teil der Cru
                          Club - Community erhalten Sie jedes Quartal eine
                          handverlesene, facettenreiche Wein-Selektion frei Haus, die wir
                          exklusiv für Sie kuratieren..."
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


        <div>
      <img class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-radius-xl border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0" src="https://bcassets.s3.amazonaws.com/static/images/Weinkiste.original.png"/>
    </div>


    <div class="pricing-3 row section-image" style={{backgroundSize: "cover", height: "70vh",backgroundImage: "url('https://bcassets.s3.amazonaws.com/static/images/pexels-cottonbro-studio-3171815.original.jpg')"}} id="pricing-3">
<div class="container my-auto">
<div class="row">
<div class="col-md-6 ml-auto mr-auto text-center">
<h2 class="title text-white">Wie viel darf's sein?</h2>
<h4 class="description text-white">3 oder 6 Flaschen? So, oder so: Hoch- und Herunterstufen ist jederzeit möglich!</h4>
<div class="section-space"></div>
</div>
</div>
<div class="row">
<div class="col-md-4 ml-auto">
<div class="card card-pricing">
<div class="card-body">
<h5 class="category">Student</h5>
<h1 class="card-title"><small></small>119 €<small> /Quartal</small></h1>
<ul>
<li>1 GB of space</li>
<li>Limited Support</li>
<li>Support at $25/hour</li>
<li>Limited cloud access</li>
</ul>
<a href="#pablo" class="btn btn-primary btn-round">
Get Started
</a>
</div>
</div>
</div>
<div class="col-md-4 mr-auto">
<div class="card card-pricing card-raised" style={{background: cta, color: "white"}}>
<div class="card-body">
<h5 class="category">Premium</h5>
<h1 class="card-title"><small></small>229 €<small> /Quartal</small></h1>
<ul>
<li>5 GB of space</li>
<li>UnLimited Support</li>
<li>Unlimited Downloads</li>
<li>Full cloud access</li>
</ul>
<a href="#pablo" class="btn btn-neutral btn-round">
Get Started
</a>
</div>
</div>
</div>
</div>
</div>
</div>


        <div className={"container-fluid"}>
          {/* <div className="row">
            <div
              className={
                "col-12 my-auto text-center animated fadeIn slower mt-md-4"
              }
            >
              <div className={"mb-3 mb-md-4"} style={{ marginTop: "150px" }}>
              
                <i
                  className="fas fa-seedling ml-2"
                  style={{
                    color: primary_t60,
                    fontSize: "2em",
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.07))",
                  }}
                ></i>
                <i
                  className="fas fa-seedling ml-2 animated fadeInLeft"
                  style={{
                    color: primary_t80,
                    fontSize: "5em",
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.07))",
                  }}
                ></i>
                <i
                  className="fas fa-seedling ml-2 animated fadeInLeft slower"
                  style={{
                    color: primary,
                    fontSize: "10em",
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.07))",
                  }}
                ></i>
              </div>

              <div
                class="animated fadeIn slower mx-auto"
                style={{ maxWidth: "750px" }}
              >
             
                <p className={"h3"} style={{ fontSize: "24px" }}>
                  Warum Wein nicht nur Genuss, sondern auch hervorragende
                  Renditen bringen kann
                </p>
             
              </div>
            </div>
          </div> */}

          <div class="container mt-sm-n5 animated fadeIn slower" id={"intro"}>
            <div className={"row mt-5"}>
              <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                <span class="round-icon text-white mb-n3">
                  <span style={{ width: "30px", height: "30px" }}>
                    <Magnifier width={"30px"} height={"30px"} strokewidth={3} />
                  </span>
                </span>
                {/* <i
                  class="fas fa-rocket mb-n3 ml-n3 round-icon"
                  style={{ color: primary }}
                ></i> */}
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
                {/* <i
                  class="fas fa-hands-helping mb-n3 ml-n3 round-icon"
                  style={{ color: primary }}
                ></i> */}
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
                {/* <i
                  class="fas fa-hands-helping mb-n3 ml-n3 round-icon"
                  style={{ color: primary }}
                ></i> */}
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
                        {/* <i
                      class="now-ui-icons sport_user-run mb-3 round-icon-lg"
                      style={{ color: primary }}
                    ></i> */}

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
                        {" "}
                        {/* <i
                      class="now-ui-icons ui-2_like mb-3 round-icon-lg"
                      style={{ color: primary }}
                    ></i> */}
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
            {/* <div class="container text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
              <span style={{ fontSize: "18px" }}>
                Für alle weiteren Fragen stehen wir Ihnen gerne per Mail oder
                telefonisch zur Verfügung.
                <br />
              </span>
              <a href={"#footer"}>
                <button
                  className={"btn btn-primary mt-4 p-3 px-5"}
                  style={{ fontSize: "18px" }}
                >
                  <span className={"p-1 pl-0 pr-3"}>
                    {" "}
                    <BComment
                      width={"30px"}
                      height={"30px"}
                      strokewidth={3}
                      style={{ display: "inline-block" }}
                    />
                  </span>
                  Jetzt kontaktieren
                </button>
              </a>
            </div> */}

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
                {/* <SelectCalendlyDate width={"60%"} /> */}
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
        </div>
      </>
    </>
  );
};

export default CruClub;
