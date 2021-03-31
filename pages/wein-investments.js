import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

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

class WineInvestments extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <>
        <ReactFullpage
          anchors={["firstPage", "secondPage", "thirdPage"]}
          sectionsColor={[
            "#ebecf1",
            "#ebecf1",
            "#ebecf1",
            "#ebecf1",
            "#ebecf1",
            "#ebecf1",
          ]}
          navigation
          responsiveWidth={991}
          scrollOverflow={true}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div>
                <div id="fullpage-wrapper">
                  <div className="section fp-auto-height-responsive section1 mt-5 pt-5 mt-md-0 pt-md-0">
                    <div class="container animated fadeIn slower">
                      <div class="row pb-2">
                        <div class="col-md-12 col-sm-12 text-left my-auto text-center pt-4">
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
                        <div class="col-md-12 col-sm-12  text-center ">
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
                          <p class="text-left d-inline h3">
                            Warum Wein nicht nur Genuss, sondern auch stabile
                            Renditen bringen kann.
                          </p>
                        </div>

                        <div class="col-md-12 col-sm-12 text-center">
                          <div
                            className={"row text-center"}
                            style={{ position: "fixed", left: "48%" }}
                          >
                            <div
                              className="text-center mx-auto p-5"
                              onClick={() => fullpageApi.moveSectionDown()}
                              style={{ cursor: "pointer" }}
                            >
                              <a className={"move-down"}>
                                <i
                                  class="fas fa-chevron-down fa-3x animated infinite pulse"
                                  style={{ cursor: "pointer", color: primary }}
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section fp-auto-height-responsive section1 ">
                    <div class="container mt-md-n5 mt-sm-0">
                      <div
                        className={
                          "pb-5 pb-md-0 mb-3 mb-md-n5 pt-5 pt-md-5 mt-5 mt-md-0 "
                        }
                      >
                        <h2 className={"heading"}>
                          Die Zahlen sprechen für sich...
                        </h2>
                        <p className={"h5"}>
                          Der Liv-Ex Fine{" "}
                          <br className={"d-inline d-lg-none"} /> Wine 1000
                          Index
                        </p>
                      </div>
                    </div>

                    <div
                      className="container-fluid px-0 mx-0"
                      style={{ marginLeft: "-20px" }}
                    >
                      <WineDaxSap />
                      <div className={"pull-right"}>
                        <p
                          className={
                            "chart-info-text text-justify mr-1 mr-sm-3 mr-md-5 pr-1 pr-md-3 pr-lg-5 pl-5 pt-3 pt-md-0 pl-md-0 text-right mr-md-5"
                          }
                        >
                          <div className={"mr-0 mr-md-5 text-justify"}>
                            <p className={"h5 text-right chart-info-headline"}>
                              Stabile <br className={"d-inline d-lg-none"} />{" "}
                              Wertentwicklung <br /> bei geringer Volatilität
                            </p>
                            <p>
                              Ein Blick auf die letzten 16 Jahre des Liv-Ex Fine
                              Wine 1000 Index zeigt, dass Wein aufgrund seiner
                              stabilen Wertzuwächse eine echte Alternative zu
                              traditionellen Sachanlagen darstellt.
                            </p>
                          </div>
                        </p>
                      </div>
                      <br />
                      <i className={"pull-right pr-2 pr-md-4"}>
                        * im Vergleich zum Vorjahresdurchschnitt
                      </i>
                    </div>

                    <div class="container mt-md-n5 mt-sm-0">
                      <div
                        className={"row text-center"}
                        style={{ position: "fixed", left: "48%" }}
                      >
                        <div
                          className="text-center mx-auto p-5"
                          onClick={() => fullpageApi.moveSectionDown()}
                          style={{ cursor: "pointer" }}
                        >
                          <a className={"move-down"}>
                            <i
                              class="fas fa-chevron-down fa-3x animated infinite pulse"
                              style={{ cursor: "pointer", color: primary }}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="section fp-auto-height-responsive text-center">
                    <div class="container mt-md-n5 mt-sm-0 tect-center">
                      <h2>Was steckt dahinter?</h2>
                      <p>
                        Hochklassige Weine werden aufgrund einfacher
                        Wirkmechanismen im Laufe der Jahre immer wertvoller. Das
                        macht Wein für langfristig planende Anleger zu einer
                        attraktiven Anlagemöglichkeit.
                      </p>

                      <div class="row pt-5 pb-0">
                        <div class="col-md-4 col-sm-12 text-center">
                          <i
                            class="now-ui-icons sport_user-run mb-3 round-icon-lg"
                            style={{ color: primary }}
                          ></i>
                          <p>Geringe Mengen</p>
                        </div>
                        <div class="col-md-4 col-sm-12 text-center">
                          <i
                            class="now-ui-icons tech_watch-time mb-3 round-icon-lg"
                            style={{ color: primary }}
                          ></i>
                          <p>Reifung</p>
                        </div>
                        <div class="col-md-4 col-sm-12 text-center mb-5 ms-md-0">
                          <i
                            class="now-ui-icons ui-2_like mb-3 round-icon-lg"
                            style={{ color: primary }}
                          ></i>
                          <p>Angebot & Nachfrage</p>
                        </div>
                      </div>
                      <div
                        className={"row text-center"}
                        style={{ position: "fixed", left: "48%" }}
                      >
                        <div
                          className="text-center mx-auto p-5"
                          onClick={() => fullpageApi.moveSectionDown()}
                          style={{ cursor: "pointer" }}
                        >
                          <a className={"move-down"}>
                            <i
                              class="fas fa-chevron-down fa-3x animated infinite pulse"
                              style={{ cursor: "pointer", color: primary }}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* <div className="slide">
                  <h3>Slide 2.1</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.2</h3>
                </div>
                <div className="slide">
                  <h3>Slide 2.3</h3>
                </div> */}
                  </div>
                  <div className="section fp-auto-height-responsive">
                    <div class="container mt-md-n5 mt-sm-0">
                      <div className={"row"}>
                        <div
                          className={"col-12 text-center"}
                          style={{ zIndex: 400 }}
                        >
                          <i
                            class="now-ui-icons sport_user-run mb-n3 ml-n3 round-icon-lg"
                            style={{ color: primary }}
                          ></i>
                        </div>
                        <div class="col-md-8 offset-md-2 col-sm-12">
                          <div class="info info-horizontal">
                            <div class="card p-3">
                              <h3 class="">Geringe Mengen</h3>
                              <p class="text-justify">
                                Es kein neues Phänomen, die besten Weine der
                                Welt besitzen zu wollen, sie zu sammeln und in
                                sie zu investieren. <br />
                                <br />
                                Weltweit gibt es in allen hochklassigen
                                Weinbaugebieten strenge Richtlinien und Regeln,
                                um sowohl die Qualität zu kontrollieren als auch
                                die Produktion zu begrenzen. Premiumweine, die
                                gleichzeitig auch investmentwürdige Weine sind,
                                machen weniger als 1 % der Produktion
                                hochklassiger Weine weltweit aus.
                                <br />
                                <br />
                                Die Tatsache, das exquisite Weine nur in einem
                                begrenzten Umfang zu Verfügung stehen und diese
                                Menge darüber hinaus aufgrund des Konsums einem
                                natürlichen Schwund unterliegt, hat die Preise
                                für die besten Weine schon immer steigen lassen.
                                <br />
                                <br />
                                Das weltweite Netzwerk von Berghaus & Cie.
                                bietet Ihnen einen exklusiven Zugang zu
                                erstklassigen und seltenen Weine, die für ein
                                Weininvestment oder den unmittelbaren
                                Trinkgenuss bestens geeignet sind.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={"row text-center"}
                      style={{ position: "fixed", left: "48%" }}
                    >
                      <div
                        className="text-center mx-auto p-5"
                        onClick={() => fullpageApi.moveSectionDown()}
                        style={{ cursor: "pointer" }}
                      >
                        <a className={"move-down"}>
                          <i
                            class="fas fa-chevron-down fa-3x animated infinite pulse"
                            style={{ cursor: "pointer", color: primary }}
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="section fp-auto-height-responsive">
                    <div class="container mt-md-n5 mt-sm-0">
                      <div className={"row"}>
                        <div
                          className={"col-12 text-center"}
                          style={{ zIndex: 400 }}
                        >
                          <i
                            class="now-ui-icons tech_watch-time mb-n3 ml-n3 round-icon-lg"
                            style={{ color: primary }}
                          ></i>
                        </div>

                        <div class="col-md-8 offset-md-2 col-sm-12">
                          <div class="info info-horizontal">
                            <div class="card p-3">
                              <h3 class="">Reifung</h3>
                              <p class="text-justify">
                                Viele hochwertige Weine haben ein
                                Entwicklungspotenzial, welches sie erst nach
                                vielen Jahren und teilweise sogar erst
                                Jahrzehnten angemessener Lagerung voll
                                ausschöpfen können. Daher sollte Wein, um seine
                                Qualität nicht negativ zu beeinflussen, stets
                                unter idealen Bedingungen gelagert werden.
                                <br />
                                <br />
                                Für die optimale Reifung von Wein ist die
                                richtige Lagerung entscheidend. Konstante
                                Temperaturen und eine Luftfeuchtigkeit von ca.
                                65 % sind hierbei die wesentlichen Faktoren.
                                <br />
                                <br />
                                Jeder Wein reift anders. Wir behalten die
                                individuelle Entwicklung Ihres Wein stets im
                                Blick, um den besten Verkaufszeitpunkt zu
                                finden.
                                <br />
                                <br />
                                Berghaus & Cie. bietet Ihnen die Möglichkeit,
                                Ihre Weine in einem ideal klimatisierten und
                                gesicherten Lager in Belgien einzulagern. Das
                                sind beste Voraussetzungen für einen
                                Weiterverkauf oder den Trinkgenuss nach einer
                                angemessenen Lagerdauer.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={"row text-center"}
                      style={{ position: "fixed", left: "48%" }}
                    >
                      <div
                        className="text-center mx-auto p-5"
                        onClick={() => fullpageApi.moveSectionDown()}
                        style={{ cursor: "pointer" }}
                      >
                        <a className={"move-down"}>
                          <i
                            class="fas fa-chevron-down fa-3x animated infinite pulse"
                            style={{ cursor: "pointer", color: primary }}
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="section fp-auto-height-responsive">
                    <div class="container mt-md-n5 mt-sm-5">
                      <div className={"row"}>
                        <div
                          className={"col-12 text-center"}
                          style={{ zIndex: 400 }}
                        >
                          <i
                            class="now-ui-icons ui-2_like mb-n3 ml-n3 round-icon-lg"
                            style={{ color: primary }}
                          ></i>
                        </div>
                        <div class="col-md-8 offset-md-2 col-sm-12">
                          <div class="info info-horizontal">
                            <div class="card p-3">
                              <h3 class="">Angebot & Nachfrage</h3>
                              <p class="text-justify">
                                Angebot und Nachfrage bestimmen, wie überall,
                                auch bei hochklassigen Weinen den Markt. Je
                                besser ein Wein mit dem Alter wird, desto
                                begehrenswerter - und damit wertvoller - wird
                                er.
                                <br />
                                <br />
                                Der Konsum von guten Weinen und die Seltenheit
                                bestimmter Jahrgänge treibt den Preis weiter
                                nach oben. Immer mehr Investoren suchen nach
                                einer immer geringer werdenden Anzahl von
                                Flaschen. Diese Situation verschärft sich noch
                                durch eine ständig wachsende weltweite Nachfrage
                                nach diesem besonderen Vermögenswert.
                                <br />
                                <br />
                                Für ein erfolgreiches Weininvestment ist es
                                wesentlich, den Aspekt Angebot und Nachfrage
                                immer im Blick zu behalten.
                                <br />
                                <br />
                                Wir von Berghaus & Cie. nehmen uns Zeit für Sie
                                und beraten Sie so ausführlich wie Sie es sich
                                wünschen. Wir empfehlen Ihnen die Weine, die für
                                Ihr persönliches Weinportfolio am besten
                                geeignet sind.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={"row text-center"}
                      style={{ position: "fixed", left: "48%" }}
                    >
                      <div
                        className="text-center mx-auto p-5"
                        onClick={() => fullpageApi.moveSectionDown()}
                        style={{ cursor: "pointer" }}
                      >
                        <a className={"move-down"}>
                          <i
                            class="fas fa-chevron-down fa-3x animated infinite pulse"
                            style={{ cursor: "pointer", color: primary }}
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className={"section fp-auto-height-responsive"}
                    style={{ backgroundColor: "#ebecf1" }}
                  >
                    <div class="container mt-md-n5 mt-sm-5 mb-sm-5 pb-5">
                      <h2 class="text-left d-inline heading">
                        Was ist noch wichtig zu wissen?
                      </h2>
    
                      <Accordion allowZeroExpanded={true} className={"pt-4"}>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              Anlagehorizont
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Wichtig zu wissen: Wein ist keine kurzfristige
                              Anlage. Anleger, die auf schnelle Gewinne aus
                              sind, sollten sich von Wein fernhalten. Beim
                              Weininvestment ist Zeit der entscheidende
                              Schlüssel zum Erfolg.
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionItemHeading>
                            <AccordionItemButton>
                              Marktdaten
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <p>
                              Weinbörse Liv-ex – Übersicht über Performance und
                              Wertentwicklung
                            </p>
                            <p>
                              Liv-Ex (Londons International Vintners Exchange)
                              wurde im Jahr 2000 durch die beiden Börsenmakler
                              Justin Gibbs und James Miles gegründet. Die
                              Wein-Handelsplattform mit Sitz in London startete
                              mit 10 Gründungsmitgliedern und dem Ziel, den
                              Markt für hochklassige und exquisite Weine
                              transparenter, effizienter und sicherer zu
                              gestalten.
                            </p>
                            <p>
                              Heute bietet Liv-ex die größte Datenbank im Wein
                              Sektor und präsentiert diverse Indizes, an denen
                              sich die gesamte Branche orientiert. Liv-Ex zählt
                              mittlerweile 400 Mitglieder in 36 Ländern. Die
                              Services von Liv-Ex stehen ausschließlich Händlern
                              zur Verfügung. Berghaus & Cie. nutzt diese
                              zuverlässige Quelle, um Ihnen qualitativ
                              aufbereitete Marktzahlen und Analysen
                              bereitzustellen
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
                              Der einfachste Weg, die zweifelsfreie Herkunft
                              eines Weines nachzuweisen, ist die Lagerung in
                              Holzkisten (OHK) unter Zollverschluss in einem
                              Zolllager. Berghaus & Cie. nutzt ein Zolllager in
                              Belgien, das strengen Regeln unterliegt. Das
                              Ergebnis ist ein Prüfpfad für jeden unter
                              Zollverschluss eingelagerten Wein, der Ihnen eine
                              solide Methode zur Rückverfolgung der Herkunft
                              bietet.
                            </p>
                            <p>
                              Darüberhinaus bietet Ihnen unser Zolllager durch
                              sorgfältige Regulierung von Temperatur,
                              Feuchtigkeit und anderen mikroklimatischen
                              Faktoren die optimale Umgebung für die Lagerung
                              Ihrer Weine.
                            </p>
                            <p>
                              Weine, die unter Zollverschluss gelagert werden,
                              sind nicht mehrwertsteuerpflichtig, da sie als "im
                              Transit" betrachtet werden. Eine Kiste Wein kann
                              mehrmals den Besitzer wechseln, ohne das Zolllager
                              jemals zu verlassen, wodurch das Risiko von
                              Schäden und Störungen beseitigt wird. Als Besitzer
                              von Wein, der in einem Zolllager gelagert wird,
                              erhalten Sie ein Zertifikat, das Ihr Eigentum als
                              physisches Gut belegt – das ein bedeutender
                              Vorteil gegenüber nicht-physischen Gütern wie
                              Aktien, die außer dem Papier, auf dem sie gedruckt
                              sind, keinen inhärenten Wert besitzen.{" "}
                            </p>
                          </AccordionItemPanel>
                        </AccordionItem>
                      </Accordion>
                      <h3 className={"mt-5"}>Haftungsausschluss</h3>
                      <p className={"text-justify"}>
                        Die Firma Berghaus & Cie. GmbH ist ein
                        Weinhandelsunternehmen, das Kunden zu ihren Weinen
                        Vergleichswerte in der preislichen Entwicklung zur
                        Verfügung stellt. Berghaus & Cie. ist kein
                        Finanzdienstleister oder -berater. Berghaus & Cie. verkauft
                        Weine nur in für Privatpersonen vertretbaren Mengen. Für
                        individuelle steuerliche Fragen wenden Sie sich bitte an
                        einen Steuerberater. Es gelten die Allgemeinen
                        Geschäftsbedingungen der Berghaus & Cie. GmbH, eine
                        aktuelle Fassung finden Sie unter
                        https://www.berghaus-cie.com/agb.
                      </p>
                    </div>
                  </div>

                  <div
                    className={
                      "section fp-auto-height fp-auto-height-responsive p-5"
                    }
                    style={{
                      backgroundImage:
                        "linear-gradient(" +
                        primary_t50 +
                        " 0%, " +
                        primary_t80 +
                        " 100%)",
                    }}
                  >
                    <LandingFooter />
                  </div>
                </div>
              </div>
            );
          }}
        />
      </>
    );
  }
}

export default WineInvestments;
