import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import dynamic from "next/dynamic";
import { Chrono } from "react-chrono";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { primary, primary_t50, primary_t80 } from "helpers/colorScheme";
// core components

import LandingFooter from "components/Footer/LandingFooter";

class Index extends React.Component {
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
          sectionsColor={["#ebecf1", "#ebecf1", "#ebecf1"]}
          navigation
          responsiveWidth={991}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <div>
                <div id="fullpage-wrapper">
                  <div className="section section1 mt-5 fp-auto-width-responsive">
                    <div class="container mt-n5  mt-md-n5 mt-sm-5 text-center">
                      <div class="row pb-2">
                        <div
                          className={
                            "col-md-12 col-sm-12 mt-5 text-center animated zoomIn slower"
                          }
                        >
                          <img
                            src={"/assets/img/bc_anagram_80.png"}
                            width={"150px"}
                            height={"180px"}
                            className={"d-inline"}
                          />
                        </div>
                        <div class="col-md-12 col-sm-12 text-center my-auto animated fadeIn slower">
                          <h2 class="text-left d-inline heading mb-4">
                            Exquisite Weine -<br />{" "}
                            {"Ihr Investment ist unsere "}
                            <span
                              style={{
                                fontFamily: " 'Nothing You Could Do', cursive;",
                                fontSize: "1.25em",
                              }}
                            >
                              Passion
                            </span>
                            .
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-5">
                      <div
                        className="text-center mx-auto p-sm-5 p-0"
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
                  <div className="section fp-auto-width-responsive">
                    <div class="container mt-sm-5">
                      <div class="row">
                        <div
                          class="col-md-1 text-center"
                          style={{ zIndex: 100 }}
                        >
                          <i
                            class="far fa-gem round-icon"
                            style={{ color: primary }}
                          ></i>
                        </div>
                        <div class="col-md-5  mb-sm-5">
                          <div class="info info-horizontal pr-md-5">
                            <div class="">
                              <p
                                className={
                                  "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2"
                                }
                              >
                                <h4 class="text-center mt-0">
                                  Exquisite Weine
                                </h4>
                                Wir bieten Ihnen hochklassige und seltene Weine
                                für Ihr persönliches Weininvestment. Durch unser
                                großes Einkaufsnetzwerk profitieren Sie von
                                attraktiven Einstiegspreisen. Dies erlaubt ein
                                größeres Wachstum Ihres Kapitals.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-md-1 text-center "
                          style={{ zIndex: 100 }}
                        >
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
                                  "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2"
                                }
                              >
                                <h4 class="text-center mt-0">
                                  Individuelles Wein-Portfolio
                                </h4>
                                Wir stellen Ihnen ein eigens für Sie kuratiertes
                                Portfolio an hochwertigen Weinen zusammen. Auf
                                Wunsch bringen wir zusätzlich Ihren persönlichen
                                Geschmack und Ihre individuellen Präferenzen als
                                treibenden Faktor mit ein.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-md-n5">
                        <div
                          class="col-md-1 text-center"
                          style={{ zIndex: 100 }}
                        >
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
                                  "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2"
                                }
                              >
                                <h4 class="text-center mt-0">
                                  Persönliches Online-Depot
                                </h4>
                                Sie haben zu jeder Zeit und von jedem Ort aus,
                                ob per App oder über die Website, die
                                Möglichkeit auf Ihr persönliches Online-Depot
                                zuzugreifen und sich über die Entwicklung Ihres
                                Investments zu informieren.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-md-1 text-center"
                          style={{ zIndex: 100 }}
                        >
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
                                  "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2"
                                }
                              >
                                <h4 class="text-center mt-0">
                                  Fundierte Beratung
                                </h4>
                                Grundlage für den Erfolg Ihres Weininvestments
                                ist eine umfassende Beratung, die Ihre
                                speziellen Wünsche und Bedürfnisse in den
                                Mittelpunkt stellt. Ob Einsteiger oder Profi,
                                wir bieten in jeden Fall die passende Beratung.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-md-n5">
                        <div
                          class="col-md-1 text-center"
                          style={{ zIndex: 100 }}
                        >
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
                                  "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2"
                                }
                              >
                                <h4 class="text-center mt-0">
                                  Professionelle Lagerung
                                </h4>
                                Ihr Wein wird fachgerecht in Belgien
                                eingelagert. Optimale klimatische Bedingungen
                                sorgen dafür, dass er bestmöglich ausreift.
                                Zudem ist das Lager als Umsatzsteuerlager
                                deklariert. Das bedeutet, solange der Wein das
                                Lager nicht verlässt, wird keine Mehrwertsteuer
                                erhoben.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div
                          class="col-md-1 text-center"
                          style={{ zIndex: 100 }}
                        >
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
                                  "text-justify card p-3 ml-lg-n4 ml-xl-n5 mt-md-2 mt-n2"
                                }
                              >
                                <h4 class="text-center mt-0">
                                  Globales Netzwerk
                                </h4>
                                Wein ist ein endliches Gut und die
                                internationale Nachfrage nach gereiften
                                hochwertigen Weinen nimmt mit den Jahren zu. Wir
                                unterstützen Sie dabei, Ihre Weine zum besten
                                Zeitpunkt zu veräußern und bieten Ihnen den
                                Zugang zu unserem weltweiten Netzwerk an
                                Verkaufskanälen.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"row mt-md-n5  text-center"}>
                        <div
                          className="text-center mx-auto p-sm-5 p-0 "
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
                  <div className="section fp-auto-width-responsive ">
                    <div class="container">
                      <h4 class="text">Der Ablauf</h4>
                      <VerticalTimeline animate={false}>
                        {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#efefef', color: "#888" }}
    contentArrowStyle={{ borderRight: '7px solid #efefef ' }}
    date={<><b className={"vertical-timeline-item-title"}>Kontakt</b>
       <div className={"vertical-timeline-description"}>
      Treten Sie mit uns in Kontakt. Gerne beantworten wir Ihre Fragen und beraten Sie unverbindlich.
    </div> 
    </>}
    position={"right"}
    iconStyle={{ background: 'rgb(197, 183, 192) ', color: 'white', borderColor: "red !important" }}
    icon={<i class="fas fa-user-friends fa-fw icn" style={{marginTop:"10px", marginLeft: "8px"}}></i>}
  >
    <div className={"vertical-timeline-description-inv"}>
      Treten Sie mit uns in Kontakt. Gerne beantworten wir Ihre Fragen und beraten Sie unverbindlich.
    </div> 
  </VerticalTimelineElement> */}

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
                              <div className={"vertical-timeline-description text-justify"}>
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
                          <div className={"vertical-timeline-description-inv text-justify"}>
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
                              <div className={"vertical-timeline-description text-justify"}>
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
                            boxShadow: "0 1px 15px 1px black",
                          }}
                          icon={
                            <i
                              class="fas fa-handshake fa-fw  icn"
                              style={{ marginTop: "10px", marginLeft: "8px" }}
                            ></i>
                          }
                        >
                          <div className={"vertical-timeline-description-inv text-justify"}>
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
                              <div className={"vertical-timeline-description text-justify"}>
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
                          <div className={"vertical-timeline-description-inv text-justify"}>
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
                            <>
                              <b className={"vertical-timeline-item-title"}>
                                Versicherte Lagerung
                              </b>
                              <div className={"vertical-timeline-description text-justify"}>
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
                          <div className={"vertical-timeline-description-inv text-justify"}>
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
                              <div className={"vertical-timeline-description text-justify"}>
                                Wir helfen Ihnen dabei, Ihr Portfolio ständig zu
                                erweitern und den Gegebenheiten seitens Ihrer
                                persönlichen Ziele oder seitens des Marktes
                                anzupassen.
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
                              class="fas fa-chart-line fa-fw icn"
                              style={{ marginTop: "10px", marginLeft: "8px" }}
                            ></i>
                          }
                        >
                          <div className={"vertical-timeline-description-inv text-justify"}>
                            Wir helfen Ihnen dabei, Ihr Portfolio ständig zu
                            erweitern und den Gegebenheiten seitens Ihrer
                            persönlichen Ziele oder seitens des Marktes
                            anzupassen.
                          </div>
                        </VerticalTimelineElement>

                        {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#efefef', color: "#888" }}
    contentArrowStyle={{ borderRight: '7px solid #efefef ' }}
    date={<><b className={"vertical-timeline-item-title"}>Rendite</b>
        <div className={"vertical-timeline-description"}>Die Erlöse aus Ihren Investments erhalten Sie unkompliziert und schnellstmöglich gutgeschrieben.
 </div> 
    </>}
    position={"right"}
    iconStyle={{ background: 'rgb(197, 183, 192) ', color: 'white', borderColor: "red !important" }}
    icon={<i class="fas fa-hand-holding-usd fa-fw icn" style={{marginTop:"10px", marginLeft: "8px"}}></i>}
  >
    <div className={"vertical-timeline-description-inv"}>Die Erlöse aus Ihren Investments erhalten Sie unkompliziert und schnellstmöglich gutgeschrieben.
 </div> 
  </VerticalTimelineElement> */}
                        <br />
                      </VerticalTimeline>
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

export default Index;
