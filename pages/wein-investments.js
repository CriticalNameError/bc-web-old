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

import LandingFooter from "../src/components/Footer/LandingFooter";
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
    <p className={"h3 text-primary"}>Potentialanalyse</p>
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
    <p className={"h3 text-primary"}>Lückenlose Provenienz</p>
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
    <p className={"h3 text-primary"}>Zustand & Lagerung</p>
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
                <i
                  className="fas fa-seedling ml-2"
                  style={{ color: primary_t60, fontSize: "1em" }}
                ></i>
                <i
                  className="fas fa-seedling ml-2 animated fadeInLeft"
                  style={{ color: primary_t80, fontSize: "2.5em" }}
                ></i>
                <i
                  className="fas fa-seedling ml-2 animated fadeInLeft slower"
                  style={{ color: primary, fontSize: "5em" }}
                ></i>
              </div>

              <div
                class="animated fadeIn slower mx-auto"
                style={{ maxWidth: "750px", fontSize: "18px" }}
              >
                <h1>
                  <span
                    style={{
                      wordBreak: "break-word",
                      hyphens: "auto",
                    }}
                  >
                    Wein&shy;investments
                  </span>
                </h1>
                <p>
                  Warum Wein nicht nur Genuss, sondern auch stabile Renditen
                  bringen kann.
                </p>
                <a
                  className={"move-down"}
                  href={"#livex"}
                  style={{ cursor: "pointer" }}
                >
                  <i
                    class="fas fa-chevron-down fa-2x animated infinite pulse"
                    style={{ cursor: "pointer", color: primary }}
                  ></i>
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
              <h2 className={"h2"}>
                Wie entwickelte sich der Liv-ex Fine Wine 1000 Index?
              </h2>
              <p style={{ fontSize: "18px" }}>
                Stabile Wertentwicklung bei geringer Volatilität
              </p>
              <div className={"card p-4"}>
                <WineDaxSap />
                <p className={"mt-4 pull-right"} style={{ fontSize: "12px" }}>
                  * im Vergleich zum Vorjahresdurchschnitt
                </p>
              </div>
            </div>
          </div>

          <div>
            <div
              class="container text-center pb-5 mt-5"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <h2 className={"h2"}>
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
                    <i
                      class="now-ui-icons sport_user-run mb-3 round-icon-lg"
                      style={{ color: primary }}
                    ></i>
                    <p>
                      <h3 className={"mb-0"}>Potentialanalyse</h3>
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
                    <i
                      class="now-ui-icons tech_watch-time mb-3 round-icon-lg"
                      style={{ color: primary }}
                    ></i>
                    <p>
                      <h3 className={"mb-0"}>Lückenlose Provenienz</h3>
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
                    <i
                      class="now-ui-icons ui-2_like mb-3 round-icon-lg"
                      style={{ color: primary }}
                    ></i>
                    <p>
                      <h3 className={"mb-0"}>Zustand & Lagerung</h3>
                      <b className={"text-primary"}>mehr erfahren</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="container text-center pb-5 mt-5">
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={"mb-3"}>
                <h2 className={"h2"}>
                  Wie läuft ein{" "}
                  <span
                    style={{
                      wordBreak: "break-word",
                      hyphens: "auto",
                    }}
                  >
                    Wein&shy;investment
                  </span>{" "}
                  bei Berghaus & Cie. ab?
                </h2>
              </div>

              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  
                  iconStyle={{ background: primary, color: "#fff" }}
                  icon={
                    <i
                      class="now-ui-icons sport_user-run text-white"
                      style={{
                        color: primary,
                        fontSize: "30px",
                        padding: "13px",
                      }}
                    ></i>
                  }
                >
                  <h3 className="vertical-timeline-element-title">Beratung</h3>

                  <p>
                    Wir sind für Sie da und entwickeln gemeinsam Ihre ganz
                    persönliche Anlagestrategie.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                 
                  iconStyle={{ background: primary, color: "#fff" }}
                  icon={
                    <i
                      class="now-ui-icons sport_user-run text-white"
                      style={{
                        color: primary,
                        fontSize: "30px",
                        padding: "13px",
                      }}
                    ></i>
                  }
                >
                  <h3 className="vertical-timeline-element-title">
                    Kaufabwicklung
                  </h3>

                  <p>
                    Über unser globales Netzwerk beziehen wir Ihre Weine mit
                    lückenloser Provenienz zu besten Konditionen.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                 
                  iconStyle={{ background: primary, color: "#fff" }}
                  icon={
                    <i
                      class="now-ui-icons sport_user-run text-white"
                      style={{
                        color: primary,
                        fontSize: "30px",
                        padding: "13px",
                      }}
                    ></i>
                  }
                >
                  <h3 className="vertical-timeline-element-title">Transport</h3>

                  <p>
                    Nach dem Kauf werden Ihre exquisiten Weine professionell und
                    sicher in unser Lager transportiert.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                 
                  iconStyle={{ background: primary, color: "#fff" }}
                  icon={
                    <i
                      class="now-ui-icons sport_user-run text-white"
                      style={{
                        color: primary,
                        fontSize: "30px",
                        padding: "13px",
                      }}
                    ></i>
                  }
                >
                  <h3 className="vertical-timeline-element-title">Lagerung</h3>
                  <h4 className="vertical-timeline-element-subtitle"></h4>
                  <p>
                    In unserem Weinlager können Ihre Weine versichert und unter
                    besten klimatischen Bedingungen optimal ausreifen.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  
                  iconStyle={{ background: primary, color: "#fff" }}
                  icon={
                    <i
                      class="now-ui-icons sport_user-run text-white"
                      style={{
                        color: primary,
                        fontSize: "30px",
                        padding: "13px",
                      }}
                    ></i>
                  }
                >
                  <h3 className="vertical-timeline-element-title">Verkauf</h3>

                  <p>
                    Wir behalten die Reifung und Wertentwicklung Ihres Wein im
                    Blick, damit Sie ihn zum bestmöglichen Zeitpunkt veräußern
                    können.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>

          <div class="container mt-md-n5 mt-sm-5 pt-5 mb-sm-5 pb-5">
            <h2>
              Was Sie vorab wissen sollten ...
            </h2>

            <Accordion allowZeroExpanded={true} className={"mt-4 card"}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Anlagehorizont</AccordionItemButton>
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
                  <AccordionItemButton>Marktdaten</AccordionItemButton>
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
            <h3 className={"mt-5"}>Haftungsausschluss</h3>
            <p className={"text-justify"}>
              Die Firma Berghaus & Cie. GmbH ist ein Weinhandelsunternehmen, das
              Kunden zu ihren Weinen Vergleichswerte in der preislichen
              Entwicklung zur Verfügung stellt. Berghaus & Cie. ist kein
              Finanzdienstleister oder -berater. Berghaus & Cie. verkauft Weine
              nur in für Privatpersonen vertretbaren Mengen. Für individuelle
              steuerliche Fragen wenden Sie sich bitte an einen Steuerberater.
              Es gelten die Allgemeinen Geschäftsbedingungen der Berghaus & Cie.
              GmbH, eine aktuelle Fassung finden Sie unter
              https://www.berghaus-cie.com/agb.
            </p>
          </div>
        </div>
      </>
      );
      <LandingFooter />
    </>
  );
};

export default WineInvestments;
