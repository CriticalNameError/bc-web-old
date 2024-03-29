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
import SelectCalendlyDate from "components/SelectCalendlyDate";

import Award1 from "icons/award_1";
import Award2 from "icons/award_2";
import Award3 from "icons/award_3";
import Partner1 from "icons/partner_1";
import Partner2 from "icons/partner_2";
import Partner3 from "icons/partner_3";
import ATime from "icons/a-time";
import MockupLanding from "icons/mockup_landing";
import PlayAudio from "components/PlayPodcast";
import OfferPromotionSlider from "components/OfferPromotionSlider";



const songs = [
  {
    url: 'path/to/mp3',
    cover: 'path/to/jpeg',
    artist: {
      name: 'Metallica',
      song: 'Fuel'
    }
  },
  {
    url: 'path/to/your/mp3',
    artist: {
      name: 'X Japan',
      song: 'Art of Life'
    }
  }
];


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
      <CustomModal
        markup={markup}
        showModal={showModal}
        toggleShowModal={toggleShowModal}
      ></CustomModal>
      <div className={"container-fluid px-0"} style={{ overflowX: "hidden" }}>
        <div className="row">
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
                    filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.07))",
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
                className={"pl-md-4 mt-3 animated fadeIn slower"}
              >
                <h1 className={" "} style={{ fontSize: "24px" }}>
                  Investieren Sie in einen genussvollen Sachwert <br /> mit
                  einem attraktiven Renditepotential.
                </h1>{" "}
                <br />
                <div className={"row mt-3"}>
                  <div className={"col-6 text-right animated fadeIn slower"}>
                    <MockupLanding
                      width={width > 991 ? (width > 1500 ? 235 : 205) : 200}
                    />
                    {/* <ImageFromCms
                      title={width > 600 ? "mockup_mobile" : "mockup_mobile"}
                      width={width > 991 ? (width > 1500 ? 235 : 205) : 200}
                      jpegquality={10}
                    /> */}
                  </div>
                  <div className={"col-6 text-left mt-md-4"}>
                    <div
                      className={"text-left"}
                      style={{
                        fontSize: "18px",
                        width: "400px",
                        lineHeight: "1.5em",
                      }}
                    >
                      <br />
                      <CheckSingle
                        width={"25px"}
                        height={"30px"}
                        strokewidth={3}
                      />{" "}
                      ohne spezielle Vorkenntnisse <br />
                      <CheckSingle
                        width={"25px"}
                        height={"30px"}
                        strokewidth={3}
                      />{" "}
                      sparen Sie Ihre wertvolle Zeit <br />
                      <CheckSingle
                        width={"25px"}
                        height={"30px"}
                        strokewidth={3}
                      />{" "}
                      durchschnittliche Rendite 7 % p.a. <br />
                      <br />
                    </div>

                    {/* <CtaButton children={<span style={{fontSize: "18px"}}>Jetzt starten</span>}/> */}
                    <button
                      onClick={() => props.toggleShowCalendlyModal(true)}
                      className={
                        "mr-auto btn bg-cta p-2 animated infinite pulse slower"
                      }
                      style={{ fontSize: "18px" }}
                    >
                      Erstgespräch vereinbaren
                    </button>
                  </div>
                  <br />
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

              {/* <a
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
              </a> */}
            </div>
          </div>

          <div class=" text-center w-100 animated fadeIn slower">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={"mb-3"}
              // style={{ backgroundColor: "rgb(191, 157, 226)" }}
            >
              {/* <div style={{ overflow: "hidden" }}>
                <svg
                  preserveAspectRatio="none"
                  viewBox="0 0 1200 120"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fill: "#ffffff",
                    width: "196%",
                    height: 50,
                    transform: "scaleX(-1)",
                    marginBottom: "-1px",
                    marginLeft: "-1px",
                  }}
                >
                  <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                </svg>
              </div> */}

              <div className={"row animated fadeInUp slower text-left"}>
                <h3
                  className={"col-md-8 offset-md-2 mb-3"}
                  style={{ fontSize: "18px" }}
                >
                  Unsere Auszeichnungen
                </h3>
                <br />
                <div
                  style={{}}
                  className={
                    "d-flex justify-content-between col-md-8 offset-md-2 pt-1 mt-1"
                  }
                >
                  <div
                    style={{
                      padding: "10px",
                      borderRadius: "7px",
                      backgroundColor: "white",
                      boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
                    }}
                  >
                    <Award1 height={"60px"} />
                    {/* <ImageFromCms
                      title={"award_1"}
                      height={width > 50 ? 80 : 75}
                      jpegquality={17}
                    ></ImageFromCms> */}
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      borderRadius: "7px",
                      backgroundColor: "white",
                      boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
                    }}
                  >
                    <Award2 height={"60px"} />
                    {/* <ImageFromCms
                      title={"award_2"}
                      height={width > 50 ? 80 : 75}
                      jpegquality={17}
                    ></ImageFromCms> */}
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      borderRadius: "7px",
                      backgroundColor: "white",
                      boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
                    }}
                  >
                    <Award3 height={"60px"} />
                    {/* <ImageFromCms
                      title={"award_3"}
                      height={width > 50 ? 80 : 75}
                      jpegquality={17}
                    ></ImageFromCms> */}
                  </div>
                </div>
              </div>

              {/* <div style={{ overflow: "hidden" }}>
                <svg
                  preserveAspectRatio="none"
                  viewBox="0 0 1200 120"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    fill: "#ffffff",
                    width: "197%",
                    height: 50,
                    transform: "rotate(180deg) scaleX(-1)",
                    marginBottom: "-1px",
                    marginLeft: "-1px",
                  }}
                >
                  <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <section
            className={"mx-auto text-center mt-md-5"}
            data-aos="fade-up"
            id={"services"}
            data-aos-anchor-placement="center-bottom"
            style={{ maxWidth: "1200px" }}
          >
            <h2 className={"h3"} style={{ fontSize: "24px" }}>
              Was dürfen Sie von uns erwarten?
            </h2>
            <p
              className={"mx-auto"}
              style={{ fontSize: "18px", maxWidth: "750px" }}
            >
              Berghaus & Cie. bietet Ihnen Zugang zu den besten Weinen der Welt
              für Ihr persönliches Weininvestment. Wir unterstützen Sie beim
              Vermögensaufbau durch den Erwerb von Sachwerten – kompetent,
              transparent und mit Unterstützung modernster Technologien.
            </p>
            <div className={"card"} style={{maxWidth: "950px"}}>
            <ImageFromCms
              title={"team_formal"}
              width={Math.min(width * 0.85, 950)}
              fill={width > 991 ? "1200x650" : "600x430"}
              jpegquality={40}
              classes={"animated fadeIn img  mb-3"}
            />
            
            <PlayAudio />
            </div>
            <div className={"mt-5"}>
              <div className={"mb-3 mt-md-5"} style={{ fontSize: "24px" }}>
                Exquisite Jahrgänge aus unserem aktuellen Sortiment
              </div>
              <OfferPromotionSlider />
            </div>
          </section>
        </div>

        <div>
          <div
            class="container text-center pb-5 mt-5 pt-4"
            style={{ overflowX: "hidden" }}
          >
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={"mb-3 mt-md-5"}
            >
              <h2 className={"h3"} style={{ fontSize: "24px" }}>
                In fünf einfachen Schritten zu Ihrem persönlichen Weininvestment
                bei Berghaus & Cie.
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
                <h3
                  className="vertical-timeline-element-title h5"
                  style={{ fontSize: "18px" }}
                >
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
                <h3
                  className="vertical-timeline-element-title h5"
                  style={{ fontSize: "18px" }}
                >
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
                <h3
                  className="vertical-timeline-element-title h5"
                  style={{ fontSize: "18px" }}
                >
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
                <h3
                  className="vertical-timeline-element-title h5"
                  style={{ fontSize: "18px" }}
                >
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
                <h3
                  className="vertical-timeline-element-title h5"
                  style={{ fontSize: "18px" }}
                >
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

        <div class="container text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
          >
            <div className={" text-center"}>
              <div style={{ fontSize: "24px" }}>Ihr digitales Weindepot</div>
              <br />
              <br />

              <ImageFromCms
                title={width > 600 ? "mockup_all" : "mockup_all"}
                width={width > 991 ? (width > 1500 ? 775 : 535) : 200}
                jpegquality={5}
              />

              <div
                className={"row w-50 mx-auto px-md-6 mt-2"}
                style={{ fontSize: "18px" }}
              >
                <div className={"col-md-4 text-left"}>
                  <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
                  intuitiv
                </div>
                <div className={"col-md-4 text-center"}>
                  <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
                  transparent
                </div>
                <div className={"col-md-4 text-right"}>
                  <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
                  mobil
                </div>
              </div>
              <div className={"mt-5"} style={{ fontSize: "18px" }}>
                Hier finden Sie aktuelle Markttrends, Branchenneuheiten,
                Hintergrundinformationen zu Weingütern und ein breites Sortiment
                an exquisiten Weinen. Darüber hinaus können Sie im Weindepot Ihr
                Wein-Portfolio verwalten. Auf diese Weise haben Sie Ihr
                persönliches Weininvestment stets im Blick.
              </div>
            </div>
          </div>
        </div>

        <div class=" text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
          >
            {/* <div style={{ overflow: "hidden" }}>
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
            </div> */}
            <div>
              <h3 style={{ fontSize: "24px" }}>Unsere Partner</h3>
              <div style={{}} className={"row"}>
                <div className={"col-md-4 text-center"}>
                  <span
                    style={{
                      padding: "35px",
                      borderRadius: "7px",
                      backgroundColor: "white",
                      boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
                    }}
                  >
                    <Partner3 height={"60px"} />
                  </span>
                </div>
                <div className={"col-md-4 text-center"}>
                  <span
                    style={{
                      padding: "35px",
                      borderRadius: "7px",
                      backgroundColor: "white",
                      boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
                    }}
                  >
                    <Partner1 height={"60px"} />
                  </span>
                </div>
                <div className={"col-md-4 text-center"}>
                  <span
                    style={{
                      padding: "35px",
                      borderRadius: "7px",
                      backgroundColor: "white",
                      boxShadow: "0 1px 15px 1px rgb(39 39 39 / 10%)",
                    }}
                  >
                    <Partner2 height={"60px"} />
                  </span>
                </div>
              </div>
            </div>

            {/* <div style={{ overflow: "hidden" }}>
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
            </div> */}
          </div>
        </div>

        <div className={"text-center mt-sm-5 pt-5 mb-sm-5 pb-5"}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
          >
            <h3 style={{ fontSize: "24px" }} className={"mt-3 mb-2"}>
              <span className={"pr-2"}></span>
              Erstgespräch vereinbaren
            </h3>
            <p className={"mb-3"} style={{ fontSize: "18px" }}>
              "Wie Sie mit Berghaus & Cie. einfach und professionell in Wein
              investieren können."
            </p>

            <SelectCalendlyDate width={"60%"} />
          </div>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default Index;
