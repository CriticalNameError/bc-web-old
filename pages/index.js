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
    url: "path/to/mp3",
    cover: "path/to/jpeg",
    artist: {
      name: "Metallica",
      song: "Fuel",
    },
  },
  {
    url: "path/to/your/mp3",
    artist: {
      name: "X Japan",
      song: "Art of Life",
    },
  },
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
        <div
          // className={
          //   " pl-md-4 animate__animated animate__delay-1s animate__fadeInLeft animate__slow"
          // }
          className={"animated fadeIn slower text-center"}
          style={{ marginTop: width > 991 ? "25vh" : "18vh" }}
        >
          <span
            className={"text-center px-3 px-md-0"}
            style={{
              //fontFamily: "'Nothing You Could Do', cursive",
              fontSize: width > 991 ? "43px" : "23px",
              fontWeight: "200",
              //color: "#bfac86",
              //textShadow: "rgb(76 69 55) 1px 1px 1.5px",
            }}
          >
            Die ganze Welt des Weines - <br />
            verkörpert durch ein einzigartiges Ensemble.
          </span>{" "}
        </div>

        <div class=" text-center w-100 animated fadeIn slower mb-md-4">
          <div
            className={"mb-3 mt-5"}
            // style={{ backgroundColor: "rgb(191, 157, 226)" }}
          >
            <ImageFromCms
              title={"weinensemble"}
              width={Math.min(width * 0.65, 650)}
              //fill={width > 991 ? "1200x650" : "600x430"}
              jpegquality={15}
              classes={"animated fadeIn img  mb-3"}
            />
          </div>
          <span style={{ fontWeight: "200", fontSize: "35px" }}>119,00 €</span>
          <br />
          <span>
            <b>inkl. Versand</b> und MwSt.
          </span>
          <br />
          <span className={"px-3 px-md-0"}>
            <b>Garantierte Zustellung bis spätestens 20.12.2021</b>
          </span>
          <br />
          <a
            href={"https://buy.stripe.com/bIY9CQaDa33Tfx66op"}
            target={"_blank"}
          >
            <button
              class="mr-auto btn bg-cta p-3 animated infinite pulse slower"
              style={{ fontSize: "18px" }}
            >
              Jetzt vorbestellen!
            </button>
          </a>
        </div>
        <br />
        <br />
        <div>
          <section
            className={"mx-auto text-center mt-md-5"}
            style={{ maxWidth: "1200px" }}
          >
            <h2 className={"h3"} style={{ fontSize: "24px" }}>
              Lassen Sie sich begeistern!
            </h2>
            <p
              className={"mx-auto px-3 px-md-0"}
              style={{ fontSize: "18px", maxWidth: "950px" }}
            >
              Wir freuen uns, Ihnen ein ganz besonderes Weinensemble anbieten zu
              drüfen. Dieses besteht aus drei Weinen, die einerseits nicht
              unterschiedlicher sein könnten und die andererseits perfekt
              aufeinander abgestimmt sind. Mit dieser Auswahl unternehmen Sie
              eine spannede Reise durch die Weinwelt. <br />
              <br />
              Wir wünschen viel (Gaumen-)Freude
              <br />
              <br />
              <span
                className={"text-center "}
                style={{
                  fontFamily: "'Nothing You Could Do', cursive",
                  fontSize: "24px",
                }}
              >
                {width > 991 ? (
                  "Tristan Berghaus, Peter Irnich und Martin Dammrath"
                ) : (
                  <span>
                    Tristan Berghaus,
                    <br /> Peter Irnich und <br />
                    Martin Dammrath
                  </span>
                )}
                
              </span>
            </p>

            <div
              class="row mx-auto mt-3 mt-md-5 pt-md-5"
              style={{ maxWidth: "1200px" }}
            >
              <div
                className={
                  "col-md-4 col-sm-12 mx-2 mx-sm-n3 mb-sm-0 my-sm-auto py-3" +
                  (width < 768 ? " text-center" : "")
                }
                style={{ zIndex: 1000 }}
              >
                <ImageFromCms
                  title={"brim"}
                  width={150}
                  jpegquality={30}
                  classes={"animated fadeIn img  p-4 "}
                />
                <br />
                94 / 100 Punkte (Andrew Caillard)
                <br />
                Grand Cru
                {/* <img
                    src={"/assets/img/tristan_berghaus_berghaus_cie.png"}
                    class={"img-raised"}
                    width="350px"
                  ></img> */}
              </div>

              <div class="col-md-8 col-sm-12 text-left card mt-sm-4 mx-3 p-3 pt-5 pt-sm-4 ">
                <h2
                  class="text-left d-inline heading mt-sm-3 h3 "
                  style={{ fontSize: "24px", fontWeight: "200" }}
                >
                  Brimoncourt Champagner, 0.75l
                </h2>

                <h5 className={"mt-2"} style={{ fontSize: "18px" }}>
                  <span style={{}}>
                    „Champagner ist wohl die glückhafteste Inspirationsquelle.”
                    – Mark Twain
                  </span>
                </h5>
                <b>Degustationsnotiz</b>
                <br />
                <p>
                  Der von Chardonnay dominierte Champagner weist sehr feine
                  Aromen auf. Mit seiner Frische, seiner runden Textur sowie dem
                  feinfruchtigen Abgang ist der Schaumwein ein idealer Begleiter
                  zum Aperitif. Seine helle Farbe und die Aromen von frischer
                  Grapefruit, Tonic und Zitrone machen den cremigen Champagner
                  zu einer sehr attraktiven und eleganten Erfrischung.
                </p>
                <b>Das Weingut</b>
                <br />
                <p>
                  Im Jahre 2008 erweckte Alexandre Cornot das Weingut
                  Brimoncourt zu neuem Leben. In der Gemeinde Aÿ, dem
                  historischen Herz der Champagne, liegen die Weinberge des
                  Hauses. Das hervorragend Terroir spiegelt sich in jedem
                  Champagner von Brimoncourt wieder.
                </p>

                <br />
              </div>
            </div>

            <div
              class="row mx-auto mt-3 mt-md-5"
              style={{ maxWidth: "1200px" }}
            >
              <div
                className={
                  "col-md-4 col-sm-12 mx-2 mx-sm-n3 mb-sm-0 my-sm-auto py-3" +
                  (width < 768 ? " text-center" : "")
                }
                style={{ zIndex: 1000 }}
              >
                <ImageFromCms
                  title={"juff"}
                  width={150}
                  //fill={width > 991 ? "200x400" : "200x400"}
                  jpegquality={30}
                  classes={"animated fadeIn p-4 "}
                />
                <br />
                94 / 100 Punkte (James Suckling)
                <br />
                Großes Gewächs, VDP
                {/* <img
                    src={"/assets/img/tristan_berghaus_berghaus_cie.png"}
                    class={"img-raised"}
                    width="350px"
                  ></img> */}
              </div>

              <div class="col-md-8 col-sm-12 text-left card mt-sm-4 mx-3 p-3 pt-5 pt-sm-4 ">
                <h2
                  class="text-left d-inline heading mt-sm-3 h3 mb-2"
                  style={{ fontSize: "24px", fontWeight: "200" }}
                >
                  Juffer Sonnenuhr GG 2018, 0.75 l
                </h2>

                <h5 className={"mt-2"} style={{ fontSize: "18px" }}>
                  <span>
                    „Es lebe die Freiheit! Es lebe der Wein!“ – Johann W. von
                    Goethe
                  </span>
                </h5>
                <b>Degustationsnotiz</b>
                <br />
                <p>
                  Ungemein mineralisch und dicht zeigt sich das Bouquet dieses
                  Weines. Ganz viel kühle Pfirsichfrucht, begleitet von frischem
                  Apfel und allerlei Zitrusaromen zeigen sich zuerst. Die dichte
                  Mineralität und die faszinierend herben Noten kommen im
                  „zweiten Aufzug“ so richtig zur Geltung. Am Gaumen ist der
                  Wein trocken wunderbar druckvoll, lebendig und anfangs noch
                  regelrecht stürmisch. Saftig, mit schöner Frucht und richtig
                  viel Mineralität ist auch der Abgang.
                </p>
                <b>Das Weingut</b>
                <br />
                <p>
                  Das Weingut Fritz Haag liegt im Kernstück der Mittelmosel und
                  blickt auf eine lange Geschichte zurück: 1605 wurde es
                  erstmals urkundlich erwähnt. Die weltberühmte Weinbergslage
                  „Brauneberger Juffer Sonnenuhr“, die vielleicht beste Lage der
                  trockenen Weine an der Mosel, zählte bereits Napoleon zu den
                  Perlen der Moselregion. Seit 2005 führt Oliver Haag das
                  VDP-Weingut und setzt bei der möglichst biologischen
                  Weinbereitung ausnahmslos auf höchste Qualität.
                </p>

                <br />
              </div>
            </div>

            <div
              class="row mx-auto mt-3 mt-md-5"
              style={{ maxWidth: "1200px" }}
            >
              <div
                className={
                  "col-md-4 col-sm-12 mx-2 mx-sm-n3  mb-sm-0 my-sm-auto py-3" +
                  (width < 768 ? " text-center" : "")
                }
                style={{ zIndex: 1000 }}
              >
                <ImageFromCms
                  title={"cant"}
                  width={150}
                  //fill={width > 991 ? "200x600" : "200x600"}
                  jpegquality={30}
                  classes={"animated fadeIn img p-4 "}
                />
                <br />
                92 / 100 Punkte (James Suckling)
                <br />
                Grand Cru Classé en 1855
                {/* <img
                    src={"/assets/img/tristan_berghaus_berghaus_cie.png"}
                    class={"img-raised"}
                    width="350px"
                  ></img> */}
              </div>

              <div class="col-md-8 col-sm-12 text-left card mt-sm-4 mx-3 p-3 pt-5 pt-sm-4 ">
                <h2
                  class="text-left d-inline heading mt-sm-3 h3 mb-2"
                  style={{ fontSize: "24px", fontWeight: "200" }}
                >
                  Château Cantemerle 2012, 0.75 l:
                </h2>

                <h5 className={"mt-2"} style={{ fontSize: "18px" }}>
                  <span>
                    „Le vin entre et la raison sort.” – frz. Sprichwort
                  </span>{" "}
                </h5>
                <b>Degustationsnotiz</b>
                <br />
                <p>
                  Ein hervorragender Wein mit dichter, rubin-violetter Farbe,
                  geringer Säure und weit überdurchschnittlicher Tiefe. Der
                  Château Cantemerle besticht durch seine Eleganz und seinem
                  reinen Stil. Es dominieren florale Noten und Aromen von
                  Heidelbeere und Schwarzkirsche. Der Wein mit mittlerem Körper
                  und leichten Tanninen eignet sich hervorragend als Begleiter
                  zu einem festlichen Dinner
                </p>
                <b>Das Weingut</b>
                <br />
                <p>
                  Das traditionsreiche und sehr bekannte Weingut aus Haut-Médoc
                  (linkes Ufer) wurde erstmalig im Jahre 1147 urkundlich
                  erwähnt. Ursprünglich wurde das Weingut nicht bei der
                  Klassifikation von 1855 berücksichtigt, wurde jedoch später
                  als Grand Cru Weingut aufgenommen. Dies schaffte seitdem
                  ebenfalls nur das legendäre Château Mouton-Rothschild. Aus 90
                  Hektar Weinbergen produziert das Weingut gerade einmal 50.000
                  Flaschen des Erstweins pro Jahr.
                </p>

                <br />
              </div>
            </div>
          </section>
          <br />
          <br />
          <div className={"mb-3 mt-md-5"}>
            <div className={" text-center"}>
              <div style={{ fontSize: "24px" }}>
                Der Online-Genussleitfaden garantiert den perfekten Genuss
              </div>
              <br />
              <br />

              <ImageFromCms title={"qrcode"} width={300} jpegquality={30} />

              <div
                className={"mt-5 text-center mx-auto px-3 px-md-0"}
                style={{ fontSize: "18px", maxWidth: "950px" }}
              >
                Damit Sie das Wein-Ensemble voll und ganz genießen können,
                stellen wir Ihnen einen auf die einzelnen Weine individuell
                abgestimmten Genussleitfaden zur Seite. Dieser kann über den{" "}
                <b>beigefügten QR-Code</b> aufgerufen werden.
              </div>
              <br />
              <br />
              <div className={"row mx-auto mt-2"} style={{ fontSize: "18px" }}>
                <div className={"col-md-12 mb-4 text-center"}>
                  <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
                  Verkostungsvideos von Berghaus & Cie.
                </div>

                <div className={"col-md-12 mb-4 text-center"}>
                  <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
                  Anregungen für passende Speisen und Gerichte
                </div>

                <div className={"col-md-12 text-center"}>
                  <CheckSingle width={"25px"} height={"30px"} strokewidth={3} />{" "}
                  weitere spannende Hintergrundinformationen
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />
              <ImageFromCms
                title={"weinensemble"}
                width={Math.min(width * 0.75, 350)}
                //fill={width > 991 ? "1200x650" : "600x430"}
                jpegquality={35}
                classes={"animated fadeIn img  mb-3"}
              />
              <br />
              <br />

              <span style={{ fontWeight: "200", fontSize: "35px" }}>
                119,00 €
              </span>
              <br />
              <span>
                <b>inkl. Versand</b> und MwSt.
              </span>
              <br />
              <span className={"px-3 px-md-0"}>
                <b>Garantierte Zustellung bis spätestens 20.12.2021</b>
              </span>
              <br />
              <a
                href={"https://buy.stripe.com/bIY9CQaDa33Tfx66op"}
                target={"_blank"}
              >
                <button
                  class="mr-auto btn bg-cta p-3 animated infinite pulse slower"
                  style={{ fontSize: "18px" }}
                >
                  Jetzt vorbestellen!
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* <div>
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
        </div> */}

        {/* <div class="container text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
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
        </div> */}

        <div class=" text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={"mb-3"}
          >
            {/* <div>
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
            </div> */}
          </div>
        </div>

        {/* <div className={"text-center mt-sm-5 pt-5 mb-sm-5 pb-5"}>
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
        </div> */}
      </div>
      <LandingFooter />
    </>
  );
};

export default Index;
