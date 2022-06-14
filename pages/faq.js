import React, { useState, useEffect } from "react";

import "react-vertical-timeline-component/style.min.css";

import "react-accessible-accordion/dist/fancy-example.css";
import BComment from "icons/b-comment";
import DownArrow from "icons/down-arrow";
import LandingFooter from "../src/components/Footer/LandingFooter";

import RightArrow from "icons/right-arrow";
import BulbAnimated from "../src/icons/bulb-animated";
import {
  primary,
  primary_t80,
  primary_t50,
  primary_t60,
} from "helpers/colorScheme";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <>
      <div className={"container mx-auto"}>
        <div className="row">
          <div
            className={
              "col-12 my-auto text-center animated fadeIn slower mt-md-4"
            }
          >
            <div
              className={"mb-3 mb-md-4 text-primary"}
              style={{ marginTop: "150px" }}
            >
              <span
                style={{ filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.07))" }}
              >
                <BulbAnimated
                  width={"170px"}
                  height={"170px"}
                  strokewidth={4}
                />
              </span>
              {/* <i
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
                ></i> */}
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
                Auf den Punkt gebracht - unsere Antworten auf die am häufigsten
                gestellten Fragen.
              </p>
              {/* <a
                className={"move-down"}
                href={"#list"}
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

        <div class=" mt-sm-5 pt-5 mb-sm-5 pb-5">
          <div
            // data-aos="fade-up"
            // data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
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
                    Für wen empfiehlt sich ein Weininvestment?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Weininvestments eignen sich hervorragend für die
                    Diversifizierung des Gesamtportfolios mit einem exklusiven
                    Sachwert und können über einen langfristigen
                    Investitionshorizont von 10 bis 15 Jahren eine
                    durchschnittliche Rendite von etwa 8% bis 10% p.a.
                    (kapitalertragssteuerfrei) erzielen. Dabei korrelieren
                    Weininvestments kaum mit dem Kapitalmarkt.
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
                    Muss ich ein Weinprofi sein, um in Wein zu investieren?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Berghaus & Cie. unterstützt Sie dabei, Ihr persönliches
                    Wein-Portfolio zusammenzustellen. Sie müssen kein Weinprofi
                    oder ausgewiesener Weinliebhaber sein, um erfolgreich in
                    Wein zu investieren.
                  </p>
                  <p>
                    Abgestimmt auf Ihre Wünsche und Bedürfnisse wie
                    Investitionssumme, Anlagehorizont, persönliche Vorlieben,
                    etc. entwickeln wir gemeinsam mit Ihnen die passende
                    Anlagestrategie. Darüber hinaus kümmern wir uns um den
                    fachgerechten Transport und die professionelle Einlagerung
                    Ihrer Weine im Genfer Zollfreihafen.
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
                    Welche Investitionssumme ist für den Anfang sinnvoll?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Im Gegensatz zu anderen alternativen Anlageklassen wie
                    Kunst, Oldtimer oder Uhren ist die Einstiegshürde bei Wein
                    vergleichsweise niedrig. Der Kaufpreis eines exquisiten
                    Weins (hohes Entwicklungspotential, sehr renommiertes
                    Weingut) liegt im Schnitt bei ca. 250 € pro Flasche, d. h.
                    ca. 1.500 Euro pro Kiste.
                  </p>
                  <p>
                    Für die Zusammenstellung eines ausgewogenen Wein-Portfolios,
                    empfehlen wir den Erwerb von 5 bis 15 verschiedenen Weinen.
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
                    Wem gehört der Wein nach der Kaufabwicklung?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Bei einem Weininvestment über Berghaus & Cie. sind Sie zu
                    100 % Eigentümer Ihres Weines. Sie investieren in ein
                    physisches Gut bzw. in einen Sachwert. Dies ist ein
                    bedeutender Vorteil gegenüber nicht-physischen
                    Investmentprodukten wie Rentenpapieren, Bausparverträgen
                    oder Lebensversicherungen, die außer dem Papier, auf dem sie
                    gedruckt sind, keinen inhärenten Wert besitzen.
                  </p>
                  <p>
                    Als Besitzer erhalten Sie eine Auflistung Ihrer Weine,
                    sobald diese im Genfer Zollfreihafen eingelagert wurden. Die
                    Rechnung ist Ihr persönlicher Eigentumsnachweis. Sie dient
                    Ihnen auch als Nachweis Ihres Herausgabeanspruches gegenüber
                    dem Weinlager.
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
                    Benötige ich einen eigenen Weinkeller?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Nein, Sie benötigen keinen eigenen Weinkeller. Berghaus &
                    Cie. bietet Ihnen die Möglichkeit, Ihre Weine fachgerecht
                    einzulagern. Investmentweine sollte unbedingt klimatisiert
                    gelagert und insbesondere vor Licht und Erschütterungen
                    geschützt werden.
                  </p>
                  <p>
                    Um dies sicherzustellen, haben wir unsere Lagerstätte im
                    Genfer Zollfreihafen sehr sorgfältig ausgewählt. Nur so ist
                    gewährleistet, dass Ihre Weine unter den bestmöglichen
                    Bedingungen reifen und ihr gesamtes geschmackliches
                    Potential entwickeln können.
                  </p>
                  <p>
                    Darüber hinaus kann durch die Einlagerung bei Berghaus &
                    Cie. die lückenlose Provenienz Ihrer Weine nachgewiesen
                    werden. Dies ist ein Kriterium, das beim späteren Verkauf
                    von zentraler Bedeutung ist.
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
                    Gegen welche Risiken sind meine Weine versichert?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Bei Berghaus & Cie. sind Ihre Weine während der Verweildauer
                    in unserem Weinlager gegen Beschädigungen oder andere
                    wertmindernde Umstände versichert. Die Versicherungssumme
                    richtet sich nach dem aktuellen Wert. Insbesondere sind die
                    Weine gegen Einbruchdiebstahl/Raub, Brand- und Wasserschäden
                    versichert.
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
                    Kann ich den Wein auch selbst trinken?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Grundsätzlich ist dies möglich, denn Sie sind Eigentümer der
                    Weine. Wenn Sie Ihren Wein zu einem besonderen Anlass selbst
                    verzehren möchten, dann senden wir Ihnen den Wein aus dem
                    Weinlager - versichert und fachgerecht transportiert - an
                    Ihre Wunschadresse zu.
                  </p>
                  <p>
                    Sie sollten jedoch bedenken, dass die Umsatzsteuer fällig
                    wird, sobald der Wein den Lagerraum des Genfer
                    Zollfreihafens verlässt.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <h3 className={"mt-5 text-center"} style={{ fontSize: "24px" }}>
            Haftungsausschluss
          </h3>
          <p className={"text-justify"}>
            Berghaus & Cie. berät seine Kunden unabhängig. Der Wert eines Weines
            kann steigen oder fallen. Berghaus & Cie. garantiert keine bestimmte
            Wertentwicklung der Weine. Die Vorschläge von Berghaus & Cie. an den
            Kunden sind lediglich Vorschläge. Der Kunde entscheidet frei über
            deren Kauf. In die Vorschläge von Berghaus & Cie. fließen die
            Erfahrungen der Mitarbeiter, aktuelle Marktentwicklungen,
            Kritikerbewertungen sowie historische Marktentwicklungen mit ein.
            Weiterhin kann und darf Berghaus & Cie. nicht steuerlich
            hinsichtlich möglicher Gewinne aus dem Verkauf von Wein beraten und
            empfiehlt den Kunden einen Steuerberater diesbezüglich zu
            kontaktieren. Es gelten die Allgemeinen Geschäftsbedingungen der
            Berghaus & Cie. GmbH, eine aktuelle Fassung finden Sie unter{" "}
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
  );
};

export default Faq;
