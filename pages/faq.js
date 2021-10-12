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
      <div className={"container mx-auto"} style={{width: "60%"}}>
        <div className="row">
          <div className={"col-12 my-auto text-center animated fadeIn slower mt-md-4"} >
            <div className={"mb-3 mb-md-4 text-primary"} style={{marginTop: "150px"}}>
              <BulbAnimated width={"170px"} height={"170px"} strokewidth={4} />
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
                Antworten auf die am häufigsten gestellte Fragen - sachlich und transparent.
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
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
          >
            <h2 style={{ fontSize: "24px" }}>
              Was Sie vorab wissen sollten ...
            </h2>

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
                    Wann empfiehlt sich ein Weininvestment besonders?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Ein Weininvestment empfiehlt sich besonders für alle, die
                    ihr Portfolio abrunden wollen und ein alternatives
                    Investment mit einem mittel- bis langfristiges
                    Anlagehorizont (ca. 5 bis 10 Jahre) und der Aussicht auf
                    eine gute Rendite suchen.
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
                    Ihrer Weine in einem speziellen Weinlager.
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
                    Weingut) liegt im Schnitt bei ca. 600 € pro Flasche, d. h.
                    ca. 4.000 Euro pro Kiste.
                  </p>
                  <p>
                    Für die Zusammenstellung eines ausgewogenen Wein-Portfolios,
                    empfehlen wir den Erwerb von 5 bis 8 verschiedenen Weinen.
                    Hierfür sollten Sie eine Investitionssumme zwischen 10.000
                    bis 15.000 € zur Verfügung haben.
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
                    physisches Gut bzw. in einen Sachwert. Dies ist bedeutender
                    Vorteil gegenüber nicht- physischen Gütern wie Aktien, die
                    außer dem Papier, auf dem sie gedruckt sind, keinen
                    inhärenten Wert besitzen.
                  </p>
                  <p>
                    Als Besitzer erhalten Sie, sobald die Weine in unserem
                    Weinlager eingelagert werden, eine Auflistung Ihrer Weine.
                    Diese Auflistung ist in Kombination mit der Rechnung Ihr
                    persönlicher Eigentumsnachweis und dient Ihnen auch als
                    Nachweis Ihres Herausgabeanspruches gegenüber dem Weinlager.
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
                    Selbstverständlich. Wenn Sie Ihren Wein zu einem besonderen
                    Anlass, z. B. zu einer Hochzeit, einem Jubiläum, einem
                    runden Geburtstag, einer Taufe oder Ähnlichem selbst
                    verzehren möchten, dann senden wir ihnen den Wein aus dem
                    Weinlager gerne - versichert und fachgerecht transportiert -
                    an Ihre Wunschadresse zu.
                  </p>
                  <p>
                    Sie sollten jedoch bedenken, dass die Mehrwertsteuer fällig
                    wird, wenn der Wein das Umsatzsteuerlager verlässt.
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
                    einzulagern. Denn Investmentweine sollte unbedingt
                    klimatisiert gelagert und insbesondere vor Licht und
                    Erschütterungen geschützt werden.
                  </p>
                  <p>
                    Um dies sicherzustellen, haben wir unsere Lagerstätten sehr
                    sorgfältig ausgewählt. Nur so ist gewährleistet, dass Ihre
                    Weine unter den bestmöglichen Bedingungen ausreifen und Ihr
                    gesamtes geschmackliches Potential entwickeln können.
                  </p>
                  <p>
                    Darüber hinaus kann durch die Einlagerung in unserem
                    Weinlager die lückenlose Provenienz Ihrer Wein nachgewiesen
                    werden, ein Punkt der beim späteren Verkauf von zentraler
                    Bedeutung ist.
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
                    Bei Berghaus & Cie. sind Ihre Weine während des Transports
                    und der Verweildauer in unserem Weinlager gegen
                    Beschädigungen oder andere wertmindernde Umstände
                    versichert. Die Versicherungssumme richtet sich nach dem
                    Bezugspreis.
                  </p>
                  <p>
                    Sollten Sie nach einiger Zeit wünschen, dass Ihre Weine
                    höher versichert werden, um der Marktentwicklung Rechnung zu
                    tragen, ist das selbstverständlich möglich. Gerne passen wir
                    die Versicherungssumme für sie an.
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
                    Welche Anlagedauer ist für Weininvestments empfehlenswert?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Im Allgemeinen entspricht die Anlagedauer eines Weines
                    seiner jeweiligen Reifedauer. Diese hängt von verschiedenen
                    Faktoren ab wie, z. B. der Rebsorte und der Art des Anbaus.
                    Die Flaschenreifung bei Spitzenweinen kann zwischen fünf und
                    fünfzehn Jahren, in Einzelfällen aber auch mehr betragen.
                  </p>
                  <p>
                    Berghaus & Cie. empfiehlt Ihnen nur Weine, die das Potential
                    haben ihrem persönlichen Anlagehorizont zu entsprechen. Denn
                    die Reifedauer spielt bei Weininvestments eine zentrale
                    Rolle. Nur dann, wenn aus einem besonderen Jahrgang nach der
                    Reifung ein einzigartiger Wein geworden ist, lässt sich ein
                    attraktiver Wiederverkaufspreis realisieren.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>

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

          <h3 className={"mt-5 text-center"} style={{ fontSize: "24px" }}>
            Haftungsausschluss
          </h3>
          <p className={"text-justify"}>
            Die Firma Berghaus & Cie. GmbH ist ein Weinhandelsunternehmen, das
            Kunden zu ihren Weinen Vergleichswerte in der preislichen
            Entwicklung zur Verfügung stellt. Berghaus & Cie. ist kein
            Finanzdienstleister oder -berater. Berghaus & Cie. verkauft Weine
            nur in für Privatpersonen vertretbaren Mengen. Für individuelle
            steuerliche Fragen wenden Sie sich bitte an einen Steuerberater. Es
            gelten die Allgemeinen Geschäftsbedingungen der Berghaus & Cie.
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

      <LandingFooter />
    </>
  );
};

export default Faq;
