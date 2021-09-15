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
import CheckSingle from "icons/check-single";
import LogoSublineLavendel from "icons/logo_subline_lavendel";
import { primary, primary_t50, primary_t80 } from "helpers/colorScheme";
import GoogleAnalytics from "helpers/GoogleAnalytics";
import CtaButton from "components/CtaButton";
import { InlineWidget, openPopupWidget } from "react-calendly";
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

const Index = (props) => {
  const [showModal, toggleShowModal] = useState(false);
  const [markup, changeMarkup] = useState(null);
  const [width, setWidth] = useState(0);
  const [maxServicesCardHeight, setMaxServicesCardHeight] = useState(null);
  const [finishedLoadingDocument, toggleFinishedLoadingDocument] =
    useState(false);
  const [cookieConsentVisible, toggleCookieConsentVisible] = useState(
    props.cookieConsentVisible
  );
  useEffect(() => {
    toggleCookieConsentVisible(props.cookieConsentVisible);
  }, [props.cookieConsentVisible]);
  useEffect(() => {
    toggleFinishedLoadingDocument(true);
  }, []);
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
      <div className={"container-fluid px-0"} style={{ overflowX: "hidden" }}>
        <div className="row" style={{ height: "100vh" }}>
          <div className={"col-12 my-auto text-center  "}>
            <div
              className={"mx-auto"}
              // style={{ maxWidth: "750px" }}
            >
              <div className={"mt-md-4 animated zoomIn slower"}>
                <span
                  style={{
                    display: "inline-block",
                    minHeight: "130px",
                    marginTop: "150px",
                  }}
                  className={"text-primary"}
                >
                  <LogoSublineLavendel
                    width={width > 500 ? "400px" : "250px"}
                  />
                </span>
                {/* <ImageFromCms
                title={"logo_subline_lavendel"}
                width={width > 500 ? 550 : 250}
                jpegquality={5}
              ></ImageFromCms> */}
              </div>

              <div
                // className={
                //   " pl-md-4 animate__animated animate__delay-1s animate__fadeInLeft animate__slow"
                // }
                className={"pl-md-4 animated fadeIn slower"}
              >
                <h1 className={" "} style={{ fontSize: "30px" }}>
                  Investieren Sie in einen genussvollen Sachwert <br /> mit
                  einem attraktiven Renditepotential.
                </h1>{" "}
                <br />
                <div className={"row"}>
                  <div className={"col-6 text-right"}>
                    <div
                      className={"text-left ml-md-auto"}
                      style={{ fontSize: "19px", width: "300px" }}
                    >
                      <br />
                      <CheckSingle
                        width={"25px"}
                        height={"30px"}
                        strokewidth={3}
                      />{" "}
                      ohne spezielles Vorwissen <br />
                      <CheckSingle
                        width={"25px"}
                        height={"30px"}
                        strokewidth={3}
                      />{" "}
                      sparen Sie wertvolle Zeit <br />
                      <CheckSingle
                        width={"25px"}
                        height={"30px"}
                        strokewidth={3}
                      />{" "}
                      bequem von zuhause aus <br />
                      <br />
                    </div>

                    <a href={"#appointment"}>
                      {/* <CtaButton children={<span style={{fontSize: "18px"}}>Jetzt starten</span>}/> */}
                      <button
                        className={
                          "mx-auto btn bg-cta p-3 px-5 animated infinite pulse slower"
                        }
                        style={{ fontSize: "18px" }}
                      >
                        Erstgespräch vereinbaren
                      </button>
                    </a>
                  </div>
                  <br />

                  <div className={"col-6 text-left"}>
                    <ImageFromCms
                      title={width > 600 ? "mockup_mobile" : "mockup_mobile"}
                      width={width > 991 ? (width > 1500 ? 275 : 235) : 200}
                      jpegquality={30}
                    />
                  </div>
                </div>
                <div
                  // className={
                  //   "animate__animated animate__delay-1s animate__fadeInRight animate__slow"
                  // }
                  className={"animated fadeIn slower"}
                >
                  {/* <ImageFromCms
                    title={width > 600 ? "mockup_mobile" : "mockup_mobile"}
                    width={width > 991 ? (width > 1500 ? 475 : 295) : 250}
                    jpegquality={30}
                  /> */}
                </div>
                {/* <span>
                  <a href={"https://weindepot.berghaus-cie.com/register"}>

                    <button
                      className={
                        "mx-auto btn bg-cta p-3 px-5 animated infinite pulse slower"
                      }
                      style={{ fontSize: "18px" }}
                    >
                      Erstgespräch vereinbaren
                    </button>
                  </a>
                </span> */}
              </div>

              <a
                className={"move-down mt-n3"}
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
                In nur fünf Schritten zu Ihrem persönlichen Weininvestment bei
                Berghaus & Cie.
                {/* Wie läuft ein{" "}
                <span
                  style={{
                    wordBreak: "break-word",
                    hyphens: "auto",
                  }}
                >
                  Wein&shy;investment
                </span>{" "}
                bei Berghaus & Cie. ab? */}
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
                }
              >
                <h3 className="vertical-timeline-element-title h5">
                  1. Beratung
                </h3>

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
                }
              >
                <h3 className="vertical-timeline-element-title h5">
                  2. Kaufabwicklung
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
                }
              >
                <h3 className="vertical-timeline-element-title h5">
                  3. Transport
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
                }
              >
                <h3 className="vertical-timeline-element-title h5">
                  4. Lagerung
                </h3>
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
                }
              >
                <h3 className="vertical-timeline-element-title h5">
                  5. Verkauf
                </h3>

                <p style={{ fontSize: "14px" }}>
                  Wir behalten die Reifung und Wertentwicklung Ihres Wein im
                  Blick, damit Sie ihn zum bestmöglichen Zeitpunkt veräußern
                  können.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>

        <div class=" text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
            style={{ backgroundColor: "rgb(191, 157, 226)" }}
          >
            <div style={{ overflow: "hidden" }}>
              <svg
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "#ffffff",
                  width: "146%",
                  height: 80,
                  transform: "scaleX(-1)",
                  marginBottom: "-1px",
                  marginLeft: "-1px",
                }}
              >
                <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
              </svg>
            </div>
            <div className={"text-white"}>
              <h3>Unsere Auszeichnungen</h3>
              <div className={"d-flex justify-content-between px-md-5"}>
                <div
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  }}
                >
                  <ImageFromCms
                    title={"award_1"}
                    height={width > 50 ? 115 : 75}
                    jpegquality={25}
                  ></ImageFromCms>
                </div>
                <div
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  }}
                >
                  <ImageFromCms
                    title={"award_2"}
                    height={width > 50 ? 112 : 75}
                    jpegquality={25}
                  ></ImageFromCms>
                </div>
                <div
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  }}
                >
                  <ImageFromCms
                    title={"award_3"}
                    height={width > 50 ? 115 : 75}
                    jpegquality={25}
                  ></ImageFromCms>
                </div>
              </div>
            </div>

            <div style={{ overflow: "hidden" }}>
              <svg
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "#ffffff",
                  width: "197%",
                  height: 67,
                  transform: "rotate(180deg) scaleX(-1)",
                  marginBottom: "-1px",
                  marginLeft: "-1px",
                }}
              >
                <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="container text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
          >
            <div className={" text-center"}>
              <div style={{ fontSize: "26px" }}>Ihr digitales Weindepot</div>
              <br />
              <br />

              <ImageFromCms
                title={width > 600 ? "mockup_all" : "mockup_all"}
                width={width > 991 ? (width > 1500 ? 775 : 535) : 200}
                jpegquality={30}
              />

              <div
                className={
                  "d-flex w-50 mx-auto justify-content-between px-md-6"
                }
                style={{ fontSize: "19px" }}
              >
                <div>
                  <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
                  intuitiv
                </div>
                <div>
                  <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
                  transparent
                </div>
                <div>
                  <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
                  mobil
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
            style={{ backgroundColor: "rgb(191, 157, 226)" }}
          >
            <div style={{ overflow: "hidden" }}>
              <svg
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "#ffffff",
                  width: "146%",
                  height: 80,
                  transform: "scaleX(-1)",
                  marginBottom: "-1px",
                  marginLeft: "-1px",
                }}
              >
                <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
              </svg>
            </div>
            <div className={"text-white"}>
              <h3>Unsere Partner</h3>
              <div className={"d-flex justify-content-between px-md-5"}>
                <div
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  }}
                >
                  <ImageFromCms
                    title={"partner_1"}
                    height={width > 50 ? 115 : 75}
                    jpegquality={25}
                  ></ImageFromCms>
                </div>
                <div
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  }}
                >
                  <ImageFromCms
                    title={"partner_2"}
                    height={width > 50 ? 112 : 75}
                    jpegquality={25}
                  ></ImageFromCms>
                </div>
                <div
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  }}
                >
                  <ImageFromCms
                    title={"partner_3"}
                    height={width > 50 ? 115 : 75}
                    jpegquality={25}
                  ></ImageFromCms>
                </div>
              </div>
            </div>

            <div style={{ overflow: "hidden" }}>
              <svg
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  fill: "#ffffff",
                  width: "197%",
                  height: 67,
                  transform: "rotate(180deg) scaleX(-1)",
                  marginBottom: "-1px",
                  marginLeft: "-1px",
                }}
              >
                <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          className={"text-center mt-sm-5 pt-5 mb-sm-5 pb-5"}
         
        >
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
            
          >
            <div id={"appointment"}>
             <InlineWidget 
             
             url="https://calendly.com/berghausundcie/15-minutiges-erstgesprach" 
             pageSettings={{
              backgroundColor: 'ffffff',
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: '714F9B',
              textColor: '2c2c2c'
            }}
             />
             </div>
            {/* <div class="row">
              <div class="col-md-5">
                <h2 class="title">Erstgespräch vereinbaren</h2>
                <h4 class="">
                  You need more information? Check what other persons are saying
                  about our product. They are very happy with their purchase.
                </h4>
                <div class="info info-horizontal">
                  <div class="icon icon-info">
                    <i class="now-ui-icons location_pin"></i>
                  </div>
                  <div class="">
                    <h4 class="info-title">Find us at the office</h4>
                    <p class="">
                      Bld Mihail Kogalniceanu, nr. 8, <br />
                      7652 Bucharest, <br />
                      Romania
                    </p>
                  </div>
                </div>
                <div class="info info-horizontal">
                  <div class="icon icon-info">
                    <i class="now-ui-icons tech_mobile"></i>
                  </div>
                  <div class="">
                    <h4 class="info-title">Give us a ring</h4>
                    <p class="">
                      Michael Jordan <br />
                      +40 762 321 762 <br />
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
              </div>
              <div class="ml-auto mr-auto col-md-5">
                <div class="card-contact card-raised card">
                  <form id="contact-form1" method="post" role="form" class="">
                    <div class="text-center card-header">
                      <h4 class="card-title">Terminkalender</h4>
                    </div>
                    <div class="card-body">
                      <div class="row">
                        <div class="pr-2 col-md-6">
                          <label>First name</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="now-ui-icons users_circle-08"></i>
                              </span>
                            </div>
                            <input
                              aria-label="First Name..."
                              autocomplete="given-name"
                              placeholder="First Name..."
                              type="text"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="pl-2 col-md-6">
                          <div class="form-group">
                            <label>Last name</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <i class="now-ui-icons text_caps-small"></i>
                                </span>
                              </div>
                              <input
                                aria-label="Last Name..."
                                autocomplete="family-name"
                                placeholder="Last Name..."
                                type="text"
                                class="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Email address</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="now-ui-icons ui-1_email-85"></i>
                            </span>
                          </div>
                          <input
                            autocomplete="email"
                            placeholder="Email Here..."
                            type="email"
                            class="form-control"
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label>Your message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="6"
                          class="form-control"
                        ></textarea>
                      </div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" />
                              <span class="form-check-sign"></span>I'm not a
                              robot
                            </label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <button
                            type="submit"
                            class="btn-round pull-right btn btn-info"
                          >
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default Index;
