import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import dynamic from "next/dynamic";
import { Chrono } from "react-chrono";
import { ImageFromCms } from "helpers/utils";
import LandingFooter from "components/Footer/LandingFooter";
import CustomModal from "../src/helpers/CustomModal";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { primary, primary_t50, primary_t80 } from "helpers/colorScheme";
// core components

let geringe_mengen_markup = (
  <div className={"p-4"}>
    <p className={"h3 text-primary"}>Geringe Mengen</p>
    Weltweit gibt es in allen hochklassigen Weinbaugebieten strenge Richtlinien
    und Regeln, um sowohl die Qualität zu kontrollieren als auch die Produktion
    zu begrenzen.
    <br />
    <br />
    Exquisite Weine, die sich für ein Weininvestment eignen, stehen nur in einem
    sehr begrenzten Umfang (circa 1 % der weltweiten Weinproduktion) zu
    Verfügung.
  </div>
);
let reifung_markup = (
  <div className={"p-4"}>
    <p className={"h3 text-primary"}>Reifung</p>
    Viele hochwertige Weine haben ein Entwicklungspotenzial, welches sie erst
    nach Jahren und teilweise sogar erst nach Jahrzehnten angemessener Lagerung
    voll ausschöpfen können.
    <br />
    <br />
    Je besser ein Wein mit dem Alter wird, umso begehrenswerter und „wertvoller“
    wird er auch im monetären Sinn.
  </div>
);
let angebot_nachfrage_markup = (
  <div className={"p-4"}>
    <p className={"h3 text-primary"}>Angebot & Nachfrage</p>
    Angebot und Nachfrage bestimmen, wie überall, auch bei hochklassigen Weinen
    den Markt. Mit jeder Flasche, die konsumiert wird, reduziert sich das
    verfügbare Angebot der ohnehin seltenen Weine.
    <br />
    <br />
    Da im Laufe der Zeit der weltweiten Nachfrage ein immer geringer werdendes
    Angebot gegenüber steht, erhöht sich der Preis der Weine.
  </div>
);

const Index = () => {
  const [showModal, toggleShowModal] = useState(false);
  const [markup, changeMarkup] = useState(null);
  const [width, setWidth] = useState(0);
  const [maxServicesCardHeight, setMaxServicesCardHeight] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    const getMaximumServicesCardHeight = () => {
      let cards = document.getElementsByClassName("services-card");
      //let cardsHeights = cards.map(c => c.style.height);
      let cardsArr = Array.prototype.slice.call( cards );
      let cardHeight = cardsArr.map(c => c.clientHeight);
      setMaxServicesCardHeight(Math.max(...cardHeight));
      


    }
    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleResize();
    getMaximumServicesCardHeight()
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
      <CustomModal
        markup={markup}
        showModal={showModal}
        toggleShowModal={toggleShowModal}
      ></CustomModal>
      <div className={"container-fluid"}>
        <div className="row" style={{ height: "100vh" }}>
          <div className={"col-12 my-auto text-center animated fadeIn slower "}>
            <div className={"mb-3 mb-md-4"}>
              <ImageFromCms
                title={"logo_subline_lavendel"}
                width={350}
                jpegquality={5}
              ></ImageFromCms>
            </div>

            <div
              class="animated fadeIn slower mx-auto"
              style={{ maxWidth: "750px", fontSize: "18px" }}
            >
              <p>
                Wir verbinden die traditionelle Welt der exquisiten Weine mit
                der modernen Investmentwelt.
                <br /> <br />
                Berghaus & Cie. bietet Ihnen Zugang zu den besten Weinen der
                Welt für Ihr persönliches Weininvestment. Wir unterstützen Sie
                beim Vermögensaufbau durch den Erwerb von Sachwerten – fundiert,
                transparent und mit Unterstützung modernster Technologien.
              </p>

              {/* <h2 class="text-left d-inline heading mb-4">
                            Exquisite Weine -<br />{" "}
                            {"Ihr Investment ist unsere Passion."}
                            <span
                              style={{
                                fontFamily: " 'Nothing You Could Do', cursive;",
                                fontSize: "1.25em",
                              }}
                            >
                              Passion
                            </span>
                            . 
                          </h2>  */}

              <a
                className={"move-down"}
                href={"#services"}
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
            class="container text-center pb-5"
            id={"services"}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            
          >
            <h2 className={"h2"}>Welche Faktoren bestimmen die    <span
                        style={{
                          wordBreak: "break-word",
                          hyphens: "auto"
                        }}
                      >
                        Wert&shy;entwicklung
                      </span> von Wein?</h2>
            <p style={{fontSize: "18px" }}>
              Hochklassige Weine werden aufgrund einfacher Wirkmechanismen im
              Laufe der Jahre immer wertvoller.
            </p>

            <div class="row pt-5 pb-0">
              <div class="col-md-4 col-sm-12 text-center ">
                <div
                  className={"transp-card"}
                  onClick={() =>
                    changeMarkup(geringe_mengen_markup, toggleShowModal(true))
                  }
                >
                  <i
                    class="now-ui-icons sport_user-run mb-3 round-icon-lg"
                    style={{ color: primary }}
                  ></i>
                  <p>
                    <h3 className={"mb-0"}>Geringe Mengen</h3>
                    <b className={"text-primary"}>mehr erfahren</b>
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 text-center mt-5 mt-md-0">
                <div
                  className={"transp-card"}
                  onClick={() =>
                    changeMarkup(reifung_markup, toggleShowModal(true))
                  }
                >
                  <i
                    class="now-ui-icons tech_watch-time mb-3 round-icon-lg"
                    style={{ color: primary }}
                  ></i>
                  <p>
                    <h3 className={"mb-0"}>Reifung</h3>
                    <b className={"text-primary"}>mehr erfahren</b>
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 text-center mt-5 mt-md-0 ">
                <div
                  className={"transp-card"}
                  onClick={() =>
                    changeMarkup(
                      angebot_nachfrage_markup,
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
                    <h3 className={"mb-0"}>Angebot & Nachfrage</h3>
                    <b className={"text-primary"}>mehr erfahren</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section
            className={"mx-auto pt-5 text-center"}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            style={{ maxWidth: "1200px" }}
          >
            <h2 className={"h2"}>Was dürfen Sie von uns erwarten?</h2>
            <ImageFromCms
              title={"team_formal"}
              width={Math.min(width * 0.85, 1100)}
              fill={(width > 991? "1200x450" : "600x430")}
              jpegquality={80}
              classes={"animated fadeIn img img-raised mb-3"}
            />
          </section>

          <div className={"row mx-auto pt-5"} data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            style={{ maxWidth: "1200px" }}>
            <div class="col-md-1 text-center" style={{ zIndex: 100 }}>
              <i class="far fa-gem round-icon" style={{ color: primary }}></i>
            </div>
            <div class="col-md-5 mb-sm-5">
              <div class="info info-horizontal pr-md-5">
                <div class="">
                  <p
                    className={
                      "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2 services-card"
                    }
                    style={(maxServicesCardHeight? {minHeight: maxServicesCardHeight} : {})}
                  >
                    <h3 class="text-center mt-0 h4">Exquisite Weine</h3>
                    Wir bieten Ihnen hochklassige und seltene Weine für Ihr
                    persönliches Weininvestment. Durch unser großes
                    Einkaufsnetzwerk profitieren Sie von attraktiven
                    Einstiegspreisen. Dies erlaubt ein größeres Wachstum Ihres
                    Kapitals.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-1 text-center " style={{ zIndex: 100 }}>
              <i
                className="fas fa-boxes  round-icon"
                style={{ color: primary }}
              ></i>
            </div>
            <div class="col-md-5  mb-sm-5">
              <div class="info info-horizontal pr-md-5">
                <div class="">
                  <p
                    className={
                      "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2 services-card"
                    }
                    style={(maxServicesCardHeight? {minHeight: maxServicesCardHeight} : {})}
                  >
                    <h3 class="text-center mt-0 h4">
                      Individuelles Wein-Portfolio
                    </h3>
                    Wir stellen Ihnen ein eigens für Sie kuratiertes Portfolio
                    an hochwertigen Weinen zusammen. Auf Wunsch bringen wir
                    zusätzlich Ihren persönlichen Geschmack und Ihre
                    individuellen Präferenzen als treibenden Faktor mit ein.
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
              <i
                className="fas fa-mobile-alt round-icon"
                style={{ color: primary }}
              ></i>
            </div>
            <div class="col-md-5  mb-sm-5">
              <div class="info info-horizontal pr-md-5">
                <div class="">
                  <p
                    className={
                      "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2 services-card"
                    }
                    style={(maxServicesCardHeight? {minHeight: maxServicesCardHeight} : {})}
                  >
                    <h3 class="text-center mt-0 h4">Persönliches Online-Depot</h3>
                    Sie haben zu jeder Zeit und von jedem Ort aus, ob per App
                    oder über die Website, die Möglichkeit auf Ihr persönliches
                    Online-Depot zuzugreifen und sich über die Entwicklung Ihres
                    Investments zu informieren.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-1 text-center" style={{ zIndex: 100 }}>
              <i
                className="fas fa-hands-helping round-icon"
                style={{ color: primary }}
              ></i>
            </div>
            <div class="col-md-5 mb-sm-5">
              <div class="info info-horizontal pr-md-5">
                <div class="">
                  <p
                    className={
                      "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2 services-card"
                    }
                    style={(maxServicesCardHeight? {minHeight: maxServicesCardHeight} : {})}
                  >
                    <h3 class="text-center mt-0 h4">Fundierte Beratung</h3>
                    Grundlage für den Erfolg Ihres Weininvestments ist eine
                    umfassende Beratung, die Ihre speziellen Wünsche und
                    Bedürfnisse in den Mittelpunkt stellt. Ob Einsteiger oder
                    Profi, wir bieten in jedem Fall die passende Beratung.
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
              <i
                className="fas fa-warehouse round-icon"
                style={{ color: primary }}
              ></i>
            </div>
            <div class="col-md-5  mb-sm-5">
              <div class="info info-horizontal pr-md-5">
                <div class="">
                  <p
                    className={
                      "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2 services-card"
                    }
                    style={(maxServicesCardHeight? {minHeight: maxServicesCardHeight} : {})}
                  >
                    <h3 class="text-center mt-0 h4">Professionelle Lagerung</h3>
                    Ihr Wein wird fachgerecht in Belgien eingelagert. Optimale
                    klimatische Bedingungen sorgen dafür, dass er bestmöglich
                    ausreift. Zudem ist das Lager als Umsatzsteuerlager
                    deklariert. Das bedeutet, solange der Wein das Lager nicht
                    verlässt, wird keine Mehrwertsteuer erhoben.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-1 text-center" style={{ zIndex: 100 }}>
              <i
                className="fas fa-globe-europe round-icon"
                style={{ color: primary }}
              ></i>
            </div>
            <div class="col-md-5  mb-sm-5">
              <div class="info info-horizontal pr-md-5">
                <div class="">
                  <p
                    className={
                      "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2 services-card"
                    }
                    style={(maxServicesCardHeight? {minHeight: maxServicesCardHeight} : {})}
                  >
                    <h3 class="text-center mt-0 h4">Globales Netzwerk</h3>
                    Wein ist ein endliches Gut und die internationale Nachfrage
                    nach gereiften hochwertigen Weinen nimmt mit den Jahren zu.
                    Wir unterstützen Sie dabei, Ihre Weine zum besten Zeitpunkt
                    zu veräußern und bieten Ihnen den Zugang zu unserem
                    weltweiten Netzwerk an Verkaufskanälen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="section fp-auto-width-responsive ">
                    <div class="container">
                      <h4 class="text">Der Ablauf</h4>
                      <VerticalTimeline animate={false}>
              

                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{
                            background: "#efefef",
                            color: "#2c2c2c",
                          }}
                          contentArrowStyle={{
                            borderRight: "7px solid #efefef ",
                          }}
                          date={
                            <>
                              <b className={"vertical-timeline-item-title"}>
                                Individuelle Beratung
                              </b>
                              <div
                                className={
                                  "vertical-timeline-description text-justify"
                                }
                              >
                                Egal ob über die App oder telefonisch - wir sind
                                für Sie da und erarbeiten gemeinsam mit Ihnen
                                eine individuelle Anlagestrategie.
                              </div>
                            </>
                          }
                          position={"left"}
                          iconStyle={{
                            backgroundColor: primary,
                            color: "#fff",
                            boxShadow: "0 1px 15px 1px black",
                          }}
                          icon={
                            <i
                              class="fas fa-comments fa-fw icn"
                              style={{ marginTop: "10px", marginLeft: "8px" }}
                            ></i>
                          }
                        >
                          <div
                            className={
                              "vertical-timeline-description-inv text-justify"
                            }
                          >
                            Egal ob über die App oder telefonisch - wir sind für
                            Sie da und erarbeiten gemeinsam mit Ihnen eine
                            individuelle Anlagestrategie.
                          </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{
                            background: "#efefef",
                            color: "#2c2c2c",
                          }}
                          contentArrowStyle={{
                            borderRight: "7px solid #efefef ",
                          }}
                          date={
                            <>
                              <b className={"vertical-timeline-item-title"}>
                                Kaufabwicklung
                              </b>
                              <div
                                className={
                                  "vertical-timeline-description text-justify"
                                }
                              >
                                {" "}
                                Über unser globales Netzwerk können wir Ihre
                                persönliche Weinauswahl zu bestmöglichen
                                Konditionen beziehen.
                              </div>
                            </>
                          }
                          position={"right"}
                          iconStyle={{
                            backgroundColor: primary,
                            color: "#fff",
                            boxShadow: "0 1p <LandingFooter />
                              "vertical-timeline-description-inv text-justify"
                            }
                          >
                            {" "}
                            Über unser globales Netzwerk können wir Ihre
                            Traumweine zu bestmöglichen Konditionen beziehen.
                          </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{
                            background: "#efefef",
                            color: "#2c2c2c",
                          }}
                          contentArrowStyle={{
                            borderRight: "7px solid #efefef ",
                          }}
                          date={
                            <>
                              <b className={"vertical-timeline-item-title"}>
                                Sicherer Transport
                              </b>
                              <div
                                className={
                                  "vertical-timeline-description text-justify"
                                }
                              >
                                Ihre Weine werden fachgerecht und sicher in das
                                klimatisierte Umsatzsteuerlager transportiert.
                              </div>
                            </>
                          }
                          position={"left"}
                          iconStyle={{
                            backgroundColor: primary,
                            color: "#fff",
                            boxShadow: "0 1px 15px 1px black",
                          }}
                          icon={
                            <i
                              class="fas fa-truck fa-fw icn"
                              style={{ marginTop: "10px", marginLeft: "8px" }}
                            ></i>
                          }
                        >
                          <div
                            className={
                              "vertical-timeline-description-inv text-justify"
                            }
                          >
                            BIhre Weine werden fachgerecht und sicher in das
                            klimatisierte Umsatzsteuerlager transportiert.
                          </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{
                            background: "#efefef",
                            color: "#2c2c2c",
                          }}
                          contentArrowStyle={{
                            borderRight: "7px solid #efefef ",
                          }}
                          date={
                            <><div  className={
                              "vertical-timeline-description-inv text-justify"
                            }>
                                Hohe Werte wollen gut versichert sein. Die
                                Versicherung Ihrer Weine ist daher Teil unseres
                                Services für Sie.
                              </div>
                            </>
                          }
                          position={"right"}
                          iconStyle={{
                            backgroundColor: primary,
                            color: "#fff",
                            boxShadow: "0 1px 15px 1px black",
                          }}
                          icon={
                            <i
                              class="fas fa-shield-alt fa-fw icn"
                              style={{ marginTop: "10px", marginLeft: "8px" }}
                            ></i>
                          }
                        >
                          <div
                            className={
                              "vertical-timeline-description-inv text-justify"
                            }
                          >
                            Hohe Werte wollen gut versichert sein. Die
                            Versicherung Ihrer Weine ist daher Teil unseres
                            Services für Sie.
                          </div>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className="vertical-timeline-element--work"
                          contentStyle={{
                            background: "#efefef",
                            color: "#2c2c2c",
                          }}
                          contentArrowStyle={{
                            borderRight: "7px solid #efefef ",
                          }}
                          date={
                            <>
                              <b className={"vertical-timeline-item-title"}>
                                Portfolio-Entwicklung
                              </b>
                              <div
                                className={
                                  "vertical-timeline-description text-justify"
                                }
                              >
                                Wir helfen Ihnen d>abei, Ihr Portfolio ständig zu
                                erweitern und den Gegebenheiten seitens Ihrer
                                persönlichen Ziele oder seitens des Marktes
                                anzupassen.
                              </div>
                            </>
                          }
                        import LandingFooter from "components/Footer/LandingFooter";color: "#fff",
                            boxShadow: "0 1px 15px 1px black",
                          }}
                          icon={{ marginTop: "10px", marginLeft: "8px" }}
                            ></i>
                          }
                        >
                          <div
                            className={
                              "vertical-timeline-description-inv text-justify"
                            }
                          >
                            Wir helfen Ihnen dabei, Ihr Portfolio ständig zu
                            erweitern und den Gegebenheiten seitens Ihrer
                            persönlichen Ziele oder seitens des Marktes
                            anzupassen.
                          </div>
                        </VerticalTimelineElement>

       
                        <br />
                      </VerticalTimeline> 
                    </div>
                  </div>*/}
      </div>
      <LandingFooter />
    </>
  );
};

export default Index;
