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
import ContactUs from "components/ContactUs";
import BMeeting from "icons/b-meeting";
import Podium from "icons/podium";
import Questionaire from "icons/questionnaire";
import MobilePhone from "icons/mobile-phone";
import Diamond from "icons/diamond";
import StorageUnit from "icons/storage-unit";
import World from "icons/world";
import Handshake from "icons/handshake";
import DeliveryFast from "icons/delivery-fast";
import Handout from "icons/handout";
import LogIn from "icons/log-in";
import DownArrow from "icons/down-arrow";
import LogoSublineLavendel from "icons/logo_subline_lavendel";
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
  const [maxServicesCardHeight, setMaxServicesCardHeight] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
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
      <ContactUs showButton={true} />
      <CustomModal
        markup={markup}
        showModal={showModal}
        toggleShowModal={toggleShowModal}
      ></CustomModal>
      <div className={"container-fluid"}>
        <div className="row" style={{ height: "100vh" }}>
          <div className={"col-12 my-auto text-center  "}>
            <div className={"mb-3 mb-md-4 animated zoomIn slower"}>
              <span
                style={{ display: "inline-block" }}
                className={"text-primary"}
              >
                <LogoSublineLavendel width={width > 500 ? "550px" : "250px"} />
              </span>
              {/* <ImageFromCms
                title={"logo_subline_lavendel"}
                width={width > 500 ? 550 : 250}
                jpegquality={5}
              ></ImageFromCms> */}
            </div>

            <div
              class="animated fadeIn slower mx-auto"
              style={{ maxWidth: "750px" }}
            >
              <p
                className={"h3"}
                //style={{fontSize: "24px"}}
              >
                Wir verbinden die traditionelle Welt der exquisiten Weine mit
                der modernen Investmentwelt.
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
          {/* <div
            class="container text-center pb-5"
            id={"services"}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <h2 className={"h2"}>
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
          </div> */}

          <section
            className={"mx-auto text-center"}
            data-aos="fade-up"
            id={"services"}
            data-aos-anchor-placement="center-bottom"
            style={{ maxWidth: "1200px" }}
          >
            <h2 className={"h3"}>Was dürfen Sie von uns erwarten?</h2>
            <p
              className={"mx-auto"}
              style={{ fontSize: "18px", maxWidth: "750px" }}
            >
              Berghaus & Cie. bietet Ihnen Zugang zu den besten Weinen der Welt
              für Ihr persönliches Weininvestment. Wir unterstützen Sie beim
              Vermögensaufbau durch den Erwerb von Sachwerten – kompetent,
              transparent und mit Unterstützung modernster Technologien.
            </p>

            <ImageFromCms
              title={"team_formal"}
              width={Math.min(width * 0.85, 950)}
              fill={width > 991 ? "1200x550" : "600x430"}
              jpegquality={80}
              classes={"animated fadeIn img img-raised mb-3"}
            />
          </section>

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
                      Bedürfnisse in den Mittelpunkt stellt. Ob Einsteiger oder
                      Profi, wir bieten in jedem Fall die passende Beratung.
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
                      Einstiegspreisen. Dies erlaubt ein größeres Wachstum Ihres
                      Kapitals.
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
                    <h3 class="text-center mt-0 h5">Individuelles Portfolio</h3>
                    <div className={"text-left"}>
                      Wir stellen Ihnen ein eigens für Sie kuratiertes Portfolio
                      an hochwertigen Weinen zusammen. Auf Wunsch bringen wir
                      zusätzlich Ihren persönlichen Geschmack und Ihre
                      individuellen Präferenzen als treibenden Faktor mit ein.
                    </div>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-1 text-center" style={{ zIndex: 100 }}>
              <span class="round-icon text-white">
                <span style={{ width: "30px", height: "30px" }}>
                  <MobilePhone width={"30px"} height={"30px"} strokewidth={3} />
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
                      Sie haben zu jeder Zeit und von jedem Ort aus, ob per App
                      oder über die Website, die Möglichkeit auf Ihr
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
                  <StorageUnit width={"30px"} height={"30px"} strokewidth={3} />
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
                      Ihr Wein wird fachgerecht in Belgien eingelagert. Optimale
                      klimatische Bedingungen sorgen dafür, dass er bestmöglich
                      ausreift. Zudem ist das Lager als Umsatzsteuerlager
                      deklariert. Das bedeutet, solange der Wein das Lager nicht
                      verlässt, wird keine Mehrwertsteuer erhoben.
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
                      Nachfrage nach gereiften hochwertigen Weinen nimmt mit den
                      Jahren zu. Wir unterstützen Sie dabei, Ihre Weine zum
                      besten Zeitpunkt zu veräußern und bieten Ihnen den Zugang
                      zu unserem weltweiten Netzwerk an Verkaufskanälen.
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class="container text-center pb-5 mt-5"
            style={{ overflowX: "hidden" }}
          >
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={"mb-3"}
            >
              <h2 className={"h3"}>
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
                  <BMeeting
                    className={"text-white timeline-icon"}
                    width={"30px"}
                    height={"30px"}
                    strokewidth={3}
                    style={{ padding: "13px" }}
                  />

                  // <i
                  //   class="now-ui-icons sport_user-run text-white timeline-icon"
                  //   style={{
                  //     color: primary,
                  //     fontSize: "30px",
                  //     padding: "13px",
                  //   }}
                  // ></i>
                }
              >
                <h3 className="vertical-timeline-element-title h5">Beratung</h3>

                <p style={{ fontSize: "14px" }}>
                  Wir sind für Sie da und entwickeln gemeinsam Ihre ganz
                  persönliche Anlagestrategie.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: primary, color: "#fff" }}
                icon={
                  <Handshake
                    className={"text-white timeline-icon"}
                    width={"30px"}
                    height={"30px"}
                    strokewidth={3}
                    style={{ padding: "13px" }}
                  />
                  // Handshake
                  // <i
                  //   class="now-ui-icons sport_user-run text-white timeline-icon"
                  //   style={{
                  //     color: primary,
                  //     fontSize: "30px",
                  //     padding: "13px",
                  //   }}
                  // ></i>
                }
              >
                <h3 className="vertical-timeline-element-title h5">
                  Kaufabwicklung
                </h3>

                <p style={{ fontSize: "14px" }}>
                  Über unser globales Netzwerk beziehen wir Ihre Weine mit
                  lückenloser Provenienz zu besten Konditionen.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: primary, color: "#fff" }}
                icon={
                  <DeliveryFast
                    className={"text-white timeline-icon"}
                    width={"30px"}
                    height={"30px"}
                    strokewidth={3}
                    style={{ padding: "13px" }}
                  />
                  // <i
                  //   class="now-ui-icons sport_user-run text-white timeline-icon"
                  //   style={{
                  //     color: primary,
                  //     fontSize: "30px",
                  //     padding: "13px",
                  //   }}
                  // ></i>
                }
              >
                <h3 className="vertical-timeline-element-title h5">
                  Transport
                </h3>

                <p style={{ fontSize: "14px" }}>
                  Nach dem Kauf werden Ihre exquisiten Weine professionell und
                  sicher in unser Lager transportiert.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: primary, color: "#fff" }}
                icon={
                  <StorageUnit
                    className={"text-white timeline-icon"}
                    width={"30px"}
                    height={"30px"}
                    strokewidth={3}
                    style={{ padding: "13px" }}
                  />
                  // <i
                  //   class="now-ui-icons sport_user-run text-white timeline-icon"
                  //   style={{
                  //     color: primary,
                  //     fontSize: "30px",
                  //     padding: "13px",
                  //   }}
                  // ></i>
                }
              >
                <h3 className="vertical-timeline-element-title h5">Lagerung</h3>
                <h4 className="vertical-timeline-element-subtitle"></h4>
                <p style={{ fontSize: "14px" }}>
                  In unserem Weinlager können Ihre Weine versichert und unter
                  besten klimatischen Bedingungen optimal ausreifen.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                iconStyle={{ background: primary, color: "#fff" }}
                icon={
                  <Handout
                    className={"text-white timeline-icon"}
                    width={"30px"}
                    height={"30px"}
                    strokewidth={3}
                    style={{ padding: "13px" }}
                  />
                  // <i
                  //   class="now-ui-icons sport_user-run text-white timeline-icon"
                  //   style={{
                  //     color: primary,
                  //     fontSize: "30px",
                  //     padding: "13px",
                  //   }}
                  // ></i>
                }
              >
                <h3 className="vertical-timeline-element-title h5">Verkauf</h3>

                <p style={{ fontSize: "14px" }}>
                  Wir behalten die Reifung und Wertentwicklung Ihres Wein im
                  Blick, damit Sie ihn zum bestmöglichen Zeitpunkt veräußern
                  können.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>

        <div>
          <div class="container text-center pb-5 mt-5">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={"mb-3"}
            >
              <ImageFromCms
                title={width > 600 ? "mockup_all" : "mockup_mobile"}
                width={width > 991 ? (width > 1500 ? 1100 : 950) : 300}
                jpegquality={30}
              />
              <a href={"https://weindepot.berghaus-cie.com/register"}>
                <button
                  className={"btn btn-primary p-3 px-5"}
                  style={{ fontSize: "18px" }}
                >
                  {/* <span
                    className={
                      "now-ui-icons objects_spaceship p-1 pr-2 pt-0 mt-n1"
                    }
                  ></span> */}
                  <span className={"p-1 pl-0 pr-3"}>
                    {" "}
                    <LogIn
                      width={"30px"}
                      height={"30px"}
                      strokewidth={3}
                      style={{ display: "inline-block" }}
                    />
                  </span>
                  Jetzt Weindepot eröffnen
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="container text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
          >
            <span style={{ fontSize: "18px" }}>
              Wenn Sie noch mehr wissen möchten, schauf Sie auf
              <br />
            </span>
            <a href={"wein-investments"}>
              <button
                className={"btn btn-primary mt-4 p-3 px-5"}
                style={{ fontSize: "18px" }}
              >
                Weininvestments
              </button>
            </a>
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
