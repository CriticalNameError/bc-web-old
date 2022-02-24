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

const DynamicLivexPriceChart = dynamic(
  () => import("../src/components/LivexPriceChart"),
  {
    ssr: false,
  }
);

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
    ein bestimmter Wein für ein Weininvestment lohnt.
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

const WineInvestments = () => {
  const [showModal, toggleShowModal] = useState(false);
  const [showContactModal, toggleShowContactModal] = useState(false);
  const [markup, changeMarkup] = useState(null);
  const [maxServicesCardHeight, setMaxServicesCardHeight] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      // setWidth(window.innerWidth);
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

  return (
    <>
      <>
        <CustomModal
          markup={markup}
          showModal={showModal}
          toggleShowModal={toggleShowModal}
        ></CustomModal>
        <div className={"container-fluid"}>
          <div className="row">
            <div
              className={
                "col-12 my-auto text-center animated fadeIn slower mt-md-4"
              }
            >
              <div className={"mb-3 mb-md-4"} style={{ marginTop: "150px" }}>
                {/* <span style={{ color: primary_t60, display: "inline-block" }}>
                  {" "}
                  <BottleWine
                    width={"30px"}
                    height={"30px"}
                    
                    strokewidth={3}
                  />
                </span>

                <span className={"animated fadeInLeft"} style={{ color: primary_t80, display: "inline-block" }}>
                  <BottleWine
                    width={"60px"}
                    height={"60px"}
                    
                    strokewidth={4}
                  />
                </span>
                <span className={"animated fadeInLeft slower"} style={{ color: primary, display: "inline-block" }}>
                  <BottleWine
                    width={"90px"}
                    height={"90px"}
                    
                    strokewidth={5}
                  />
                </span> */}
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
                {/* <h1>
                  <span
                    style={{
                      wordBreak: "break-word",
                      hyphens: "auto",
                    }}
                  >
                    Wein&shy;investments
                  </span>
                </h1> */}
                <p className={"h3"} style={{ fontSize: "24px" }}>
                  Warum Wein nicht nur Genuss, sondern auch stabile Renditen
                  bringen kann.
                </p>
                {/* <a
                  className={"move-down"}
                  href={"#livex"}
                  style={{ cursor: "pointer" }}
                >
                  <span
                    className={"animated infinite pulse"}
                    style={{ cursor: "pointer", color: primary }}
                  >
                    <DownArrow
                      width={"30px"}
                      height={"30px"}
                      strokewidth={3}
                      style={{ display: "inline-block" }}
                    />
                  </span>
                </a> */}
              </div>
            </div>
          </div>

          <div className={"mt-md-5 "}>
            <div
              class="container text-center pb-5 animated fadeIn slower"
              // data-aos="fade-up"
              // data-aos-anchor-placement="center-bottom"
            >
              <h2 className={"h3"} style={{ fontSize: "24px" }}>
                Wie entwickelte sich der Liv-ex Fine Wine 1000 Index?
              </h2>
              <p style={{ fontSize: "18px" }}>
                Stabile Wertentwicklung bei geringer Volatilität
              </p>
              <div className={"card p-4 pb-5"}>
                <DynamicLivexPriceChart />
                {/* <WineDaxSap /> */}
              </div>
            </div>
          </div>

          <div
            class="container text-center pb-5 mt-5"
            id={"services"}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h2 className={"h3"} style={{ fontSize: "24px" }}>
              Welche Faktoren bestimmen die{" "}
              <span
                style={{
                  wordBreak: "break-word",
                  hyphens: "auto",
                }}
              >
                Wert&shy;entwicklung
              </span>{" "}
              von Wein?
            </h2>
            <p style={{ fontSize: "18px" }}>
              Hochklassige Weine werden aufgrund einfacher Wirkmechanismen im
              Laufe der Jahre immer wertvoller.
            </p>
          </div>

          <div class="container mt-sm-n5 animated fadeIn slower">
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
                <div class="info info-horizontal">
                  <div class="card p-3">
                    <h5 class="">Geringe Mengen</h5>
                    <p class="text-left">
                      Weltweit gibt es in allen hochklassigen Weinbaugebieten
                      strenge Richtlinien und Regeln, um sowohl die Qualität zu
                      kontrollieren als auch die Produktion zu begrenzen.
                      <br />
                      <br />
                      Exquisite Weine, die sich für ein Weininvestment eignen,
                      stehen nur in einem sehr begrenzten Umfang (circa 1 % der
                      weltweiten Weinproduktion) zu Verfügung.
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
                <div class="info info-horizontal">
                  <div class="card p-3">
                    <h5 class="">Reifung</h5>
                    <p class="text-left">
                      Viele hochwertige Weine haben ein Entwicklungspotenzial,
                      welches sie erst nach Jahren und teilweise sogar erst nach
                      Jahrzehnten angemessener Lagerung voll ausschöpfen können.
                      <br />
                      <br />
                      Je besser ein Wein mit dem Alter wird, umso
                      begehrenswerter und „wertvoller“ wird er auch im monetären
                      Sinn.
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
                <div class="info info-horizontal">
                  <div class="card p-3">
                    <h5 class="">Angebot & Nachfrage</h5>
                    <p class="text-left">
                      Angebot und Nachfrage bestimmen, wie überall, auch bei
                      hochklassigen Weinen den Markt. Mit jeder Flasche, die
                      konsumiert wird, reduziert sich das verfügbare Angebot der
                      ohnehin seltenen Weine.
                      <br />
                      <br />
                      Da im Laufe der Zeit der weltweiten Nachfrage ein immer
                      geringer werdendes Angebot gegenüber steht, erhöht sich
                      der Preis der Weine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              class="container text-center pb-5 mt-5"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
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
                Drei Aspekte spielen für ein profitables Weininvestment eine
                zentrale Rolle.
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
                      <h3 className={"mb-0 mt-2"} style={{ fontSize: "18px" }}>
                        Zustand & Lagerung
                      </h3>
                      <b className={"text-primary"}>mehr erfahren</b>
                    </p>
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
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
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
                <div class="info info-horizontal pr-md-5">
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
                        Grundlage für den Erfolg Ihres Weininvestments ist eine
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
                <div class="info info-horizontal pr-md-5">
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
                        persönliches Weininvestment. Durch unser großes
                        Einkaufsnetzwerk profitieren Sie von attraktiven
                        Einstiegspreisen. Dies erlaubt ein größeres Wachstum
                        Ihres Kapitals.
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="row mt-md-n5 mx-auto"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              style={{ maxWidth: "1200px" }}
            >
              <div class="col-md-1 text-center" style={{ zIndex: 100 }}>
                <span class="round-icon text-white">
                  <span style={{ width: "30px", height: "30px" }}>
                    <Questionaire
                      width={"30px"}
                      height={"30px"}
                      strokewidth={3}
                    />
                  </span>
                </span>
              </div>
              <div class="col-md-5  mb-sm-5">
                <div class="info info-horizontal pr-md-5">
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
                      <h3 class="text-center mt-0 h5">
                        Individuelles Portfolio
                      </h3>
                      <div className={"text-left"}>
                        Wir stellen Ihnen ein eigens für Sie kuratiertes
                        Portfolio an hochwertigen Weinen zusammen. Auf Wunsch
                        bringen wir zusätzlich Ihren persönlichen Geschmack und
                        Ihre individuellen Präferenzen als treibenden Faktor mit
                        ein.
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-1 text-center" style={{ zIndex: 100 }}>
                <span class="round-icon text-white">
                  <span style={{ width: "30px", height: "30px" }}>
                    <MobilePhone
                      width={"30px"}
                      height={"30px"}
                      strokewidth={3}
                    />
                  </span>
                </span>
              </div>
              <div class="col-md-5 mb-sm-5">
                <div class="info info-horizontal pr-md-5">
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
                      <h3 class="text-center mt-0 h5">Digitales Weindepot</h3>
                      <div className={"text-left"}>
                        Sie haben zu jeder Zeit und von jedem Ort aus, ob per
                        App oder über die Website, die Möglichkeit auf Ihr
                        persönliches Online-Depot zuzugreifen und sich über die
                        Entwicklung Ihres Investments zu informieren.
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="row mt-md-n5 mx-auto"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              style={{ maxWidth: "1200px" }}
            >
              <div class="col-md-1 text-center" style={{ zIndex: 100 }}>
                <span class="round-icon text-white">
                  <span style={{ width: "30px", height: "30px" }}>
                    <StorageUnit
                      width={"30px"}
                      height={"30px"}
                      strokewidth={3}
                    />
                  </span>
                </span>
              </div>
              <div class="col-md-5  mb-sm-5">
                <div class="info info-horizontal pr-md-5">
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
                      <h3 class="text-center mt-0 h5">Optimale Lagerung</h3>
                      <div className={"text-left"}>
                        Ihr Wein wird fachgerecht in Belgien eingelagert.
                        Optimale klimatische Bedingungen sorgen dafür, dass er
                        bestmöglich ausreift. Zudem ist das Lager als
                        Umsatzsteuerlager deklariert. Das bedeutet, solange der
                        Wein das Lager nicht verlässt, wird keine Mehrwertsteuer
                        erhoben.
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-md-1 text-center" style={{ zIndex: 100 }}>
                <span class="round-icon text-white">
                  <span style={{ width: "30px", height: "30px" }}>
                    <World width={"30px"} height={"30px"} strokewidth={3} />
                  </span>
                </span>
              </div>
              <div class="col-md-5  mb-sm-5">
                <div class="info info-horizontal pr-md-5">
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
                      <h3 class="text-center mt-0 h5">Globales Netzwerk</h3>
                      <div className={"text-left"}>
                        Wein ist ein endliches Gut und die internationale
                        Nachfrage nach gereiften hochwertigen Weinen nimmt mit
                        den Jahren zu. Wir unterstützen Sie dabei, Ihre Weine
                        zum besten Zeitpunkt zu veräußern und bieten Ihnen den
                        Zugang zu unserem weltweiten Netzwerk an
                        Verkaufskanälen.
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className={"mt-5 text-center"} style={{ fontSize: "24px" }}>
              Haftungsausschluss
            </h3>
            <p className={"text-justify"}>
              Die Firma Berghaus & Cie. GmbH ist ein Weinhandelsunternehmen, das
              Kunden zu ihren Weinen Vergleichswerte in der preislichen
              Entwicklung zur Verfügung stellt. Berghaus & Cie. ist kein
              Finanzdienstleister oder -berater. Berghaus & Cie. verkauft Weine
              nur in für Privatpersonen vertretbaren Mengen. Für individuelle
              steuerliche Fragen wenden Sie sich bitte an einen Steuerberater.
              Es gelten die Allgemeinen Geschäftsbedingungen der Berghaus & Cie.
              GmbH, eine aktuelle Fassung finden Sie unter{" "}
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

export default WineInvestments;
