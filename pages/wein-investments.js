import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import CustomModal from "../src/helpers/CustomModal";
import { ImageFromCms } from "helpers/utils";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "react-accessible-accordion/dist/fancy-example.css";
import BComment from "icons/b-comment";
import DownArrow from "icons/down-arrow";
import LandingFooter from "../src/components/Footer/LandingFooter";
import Search from "icons/search";
import TimeMachine from "icons/time-machine";
import Athletics from "icons/athletics";
import Statistics from "icons/statistics";
import PaperDiploma from "icons/paper-diploma";
import ThumbUp from "icons/thumb-up";
import RightArrow from "icons/right-arrow";
import BottleWine from "icons/bottle-wine";
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
  return (
    <>
     
      <>
        <CustomModal
          markup={markup}
          showModal={showModal}
          toggleShowModal={toggleShowModal}
        ></CustomModal>
        <div className={"container-fluid"}>
          <div className="row" style={{ height: "100vh" }}>
            <div
              className={"col-12 my-auto text-center animated fadeIn slower "}
            >
              <div className={"mb-3 mb-md-4"}>
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
                  style={{ color: primary_t60, fontSize: "2em" }}
                ></i>
                <i
                  className="fas fa-seedling ml-2 animated fadeInLeft"
                  style={{ color: primary_t80, fontSize: "5em" }}
                ></i>
                <i
                  className="fas fa-seedling ml-2 animated fadeInLeft slower"
                  style={{ color: primary, fontSize: "10em" }}
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
                <a
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
                </a>
              </div>
            </div>
          </div>

          <div>
            <div
              class="container text-center pb-5 "
              id={"livex"}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <h2 className={"h3"} style={{ fontSize: "24px" }}>
                Wie entwickelte sich der Liv-ex Fine Wine 1000 Index?
              </h2>
              <p style={{ fontSize: "18px" }}>
                Stabile Wertentwicklung bei geringer Volatilität
              </p>
              <div className={"card p-4 pb-5"}>
                <WineDaxSap />
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
                    <Search width={"30px"} height={"30px"} strokewidth={3} />
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
                Diese drei Aspekte spielen für ein erfolgreiches Weininvestment
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
                        <Statistics
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
            <h2 style={{ fontSize: "24px" }}>
              Was Sie vorab wissen sollten ...
            </h2>

            <Accordion allowZeroExpanded={true} className={"mt-4 card"}>
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
                    Anlagehorizont
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Wichtig zu wissen: Wein ist keine kurzfristige Anlage.
                    Anleger, die auf schnelle Gewinne aus sind, sollten sich von
                    Wein fernhalten. Beim Weininvestment ist Zeit der
                    entscheidende Schlüssel zum Erfolg.
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
                    Marktdaten
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Weinbörse Liv-ex – Übersicht über Performance und
                    Wertentwicklung
                  </p>
                  <p>
                    Liv-Ex (Londons International Vintners Exchange) wurde im
                    Jahr 2000 durch die beiden Börsenmakler Justin Gibbs und
                    James Miles gegründet. Die Wein-Handelsplattform mit Sitz in
                    London startete mit 10 Gründungsmitgliedern und dem Ziel,
                    den Markt für hochklassige und exquisite Weine
                    transparenter, effizienter und sicherer zu gestalten.
                  </p>
                  <p>
                    Heute bietet Liv-ex die größte Datenbank im Wein Sektor und
                    präsentiert diverse Indizes, an denen sich die gesamte
                    Branche orientiert. Liv-Ex zählt mittlerweile 400 Mitglieder
                    in 36 Ländern. Die Services von Liv-Ex stehen ausschließlich
                    Händlern zur Verfügung. Berghaus & Cie. nutzt diese
                    zuverlässige Quelle, um Ihnen qualitativ aufbereitete
                    Marktzahlen und Analysen bereitzustellen
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
                    Herkunft, Lagerbedingungen und Mehrsteuer
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Der einfachste Weg, die zweifelsfreie Herkunft eines Weines
                    nachzuweisen, ist die Lagerung in Holzkisten (OHK) unter
                    Zollverschluss in einem Zolllager. Berghaus & Cie. nutzt ein
                    Zolllager in Belgien, das strengen Regeln unterliegt. Das
                    Ergebnis ist ein Prüfpfad für jeden unter Zollverschluss
                    eingelagerten Wein, der Ihnen eine solide Methode zur
                    Rückverfolgung der Herkunft bietet.
                  </p>
                  <p>
                    Darüberhinaus bietet Ihnen unser Zolllager durch sorgfältige
                    Regulierung von Temperatur, Feuchtigkeit und anderen
                    mikroklimatischen Faktoren die optimale Umgebung für die
                    Lagerung Ihrer Weine.
                  </p>
                  <p>
                    Weine, die unter Zollverschluss gelagert werden, sind nicht
                    mehrwertsteuerpflichtig, da sie als "im Transit" betrachtet
                    werden. Eine Kiste Wein kann mehrmals den Besitzer wechseln,
                    ohne das Zolllager jemals zu verlassen, wodurch das Risiko
                    von Schäden und Störungen beseitigt wird. Als Besitzer von
                    Wein, der in einem Zolllager gelagert wird, erhalten Sie ein
                    Zertifikat, das Ihr Eigentum als physisches Gut belegt – das
                    ein bedeutender Vorteil gegenüber nicht-physischen Gütern
                    wie Aktien, die außer dem Papier, auf dem sie gedruckt sind,
                    keinen inhärenten Wert besitzen.{" "}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>

            <div class="container text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
              <span style={{ fontSize: "18px" }}>
                Für alle weiteren Fragen stehen wir Ihnen gerne per Mail oder
                telefonisch zur Verfügung.
                <br />
              </span>
              <a onClick={() => toggleShowContactModal(!showContactModal)}>
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

      <LandingFooter />
    </>
  );
};

export default WineInvestments;
