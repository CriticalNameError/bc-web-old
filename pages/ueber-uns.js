import React, { useState, useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "react-vertical-timeline-component/style.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import ReactTooltip from "react-tooltip";
import {
  primary,
  primary_t50,
  primary_t80,
  primary_t60,
} from "../src/helpers/colorScheme";
import LandingFooter from "../src/components/Footer/LandingFooter";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import { ImageFromCms } from "helpers/utils";
import ContactUs from "components/ContactUs";
import BComment from "icons/b-comment";
import DownArrow from "icons/down-arrow";
import Spaceship from "icons/spaceship";
import Multiple11 from "icons/multiple-11";
import SportsFan from "icons/sports-fan";
import LogoLinkedin from "icons/logo-linkedin";
import XingIcon from "icons/xing-icon";
import Anagram100 from "icons/Anagram-100";
import Logic from "icons/logic";

const AboutUs = () => {
  const [width, setWidth] = useState(0);
  const [showContactModal, toggleShowContactModal] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ContactUs showButton={true} />
      <ContactUs showButton={false} showModal={showContactModal} />
      <div>
        <div className={"container-fluid"}>
          <div className="row" style={{ height: "100vh" }}>
            <div
              className={"col-12 my-auto text-center "}
            >
              <span
                style={{ display: "inline-block" }}
                className={"text-primary mb-4 animated zoomIn slower"}
              >
                <Anagram100 width={Math.min(width * 0.65, 230) + "px"} />
              </span>
              {/* <img className={"animated fadeIn"} src={"/assets/img/bc_logo_80.png"} alt={"Berghaus &amp; Cie."} width="250px"></img> */}
              {/* <ImageFromCms
                title={"anagram_lavendel"}
                width={200}
                classes={"animated fadeIn slower img mb-5"}
              /> */}

              <h1 className={"h3 animated fadeIn slower "} style={{ fontSize: "24px" }}>
                {" "}
                Exquisite Weine - Ihr Investment ist unsere{" "}
                <span
                  style={{
                    fontFamily: " 'Fuggles', cursive;",
                    fontSize: "1.7em",
                    lineHeight: "60%",
                  }}
                >
                  Passion
                </span>
                .{" "}
              </h1>

              <a
                className={"move-down"}
                href={"#mission"}
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

          <div
            class="container pt-5 animated fadeIn slow "
            id={"mission"}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <div className={"row mt-5"}>
              <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                {/* <i
                  class="fas fa-users mb-n3 ml-n3 round-icon-lg"
                  style={{ color: primary }}
                ></i> */}
                <span class="round-icon-lg text-white mb-n3">
                  <span style={{ width: "40px", height: "40px" }}>
                    <SportsFan width={"40px"} height={"40px"} strokewidth={3} />
                  </span>
                </span>
              </div>
              <div class="col-md-8 offset-md-2 col-sm-12">
                <div class="info info-horizontal">
                  <div class="card p-3">
                    <h5 class="" style={{ fontSize: "21px" }}>
                      Unsere ??berzeugung
                    </h5>
                    <p class="rext-justify">
                      Wein ist langfristig gesehen nicht nur eine Erg??nzung,
                      sondern eine echte Alternative zu den ??blichen
                      Anlageformen. Unter fachkundiger Anleitung bringen
                      Weininvestments nicht nur eine starke Rendite, sondern
                      bieten dar??ber hinaus auch einen greifbaren Verm??genswert
                      mit einer spannende Zukunft.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-sm-n5 animated fadeIn slower">
            <div className={"row mt-5"}>
              <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                {/* <i
                  class="fas fa-briefcase mb-n3 ml-n3 round-icon-lg"
                  style={{ color: primary }}
                ></i> */}
                <span class="round-icon-lg text-white mb-n3">
                  <span style={{ width: "40px", height: "40px" }}>
                    <Spaceship width={"40px"} height={"40px"} strokewidth={3} />
                  </span>
                </span>
              </div>
              <div class="col-md-8 offset-md-2 col-sm-12">
                <div class="info info-horizontal">
                  <div class="card p-3">
                    <h5 class="" style={{ fontSize: "21px" }}>
                      Unser Ziel
                    </h5>
                    <p class="text-justify">
                      Berghaus & Cie. m??chte das Thema Weininvestment f??r jeden
                      zug??nglich machen. Dabei setzen wir auf Transparenz,
                      datenbasierte Analysen und Digitalisierung.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mx-auto mt-5" style={{ maxWidth: "1200px" }}>
            <div
              className={
                "col-md-4 col-sm-12 mx-2 mx-sm-n3 mb-n3 mb-sm-0 my-sm-auto " +
                (width < 768 ? "text-center" : "text-right")
              }
              style={{ zIndex: 1000 }}
            >
              <ImageFromCms
                title={"tristan_formal"}
                width={Math.min(width * 0.85, 300)}
                fill={width > 991 ? "300x300" : "300x300"}
                jpegquality={80}
                classes={"animated fadeIn img img-raised"}
              />
              {/* <img
                    src={"/assets/img/tristan_berghaus_berghaus_cie.png"}
                    class={"img-raised"}
                    width="350px"
                  ></img> */}
            </div>

            <div class="col-md-8 col-sm-12 text-left card mt-sm-4 mx-3 p-3 pt-5 pt-sm-4 ">
              <h2
                class="text-left d-inline heading mt-sm-3 h3"
                style={{ fontSize: "21px" }}
              >
                Tristan Berghaus
              </h2>
              <h5 style={{ fontSize: "18px" }}>Sales</h5>
              <p>
                Wer Tristan pers??nlich kennt, der verbindet ihn mit dem Thema
                Wein. Er ist Initiator und Namensgeber von Berghaus & Cie. Seit
                Jahren leitet er Weinproben mit einem Fokus auf gereifte Weine
                und besitzt das Zertifikat WSET?? Level 3*, Award in Wine, des
                <i data-tip data-for="global">
                  {" "}
                  Wine and Spirit Education Trust (WSET).
                </i>
                <ReactTooltip
                  id="global"
                  aria-haspopup="true"
                  textColor="black"
                  backgroundColor="rgb(190, 168, 182)"
                  effect="solid"
                >
                  <p style={{ width: "250px" }}>
                    Der Wine and Spirit Education Trust (WSET) ist ein
                    international renommierter Anbieter f??r Wein- und
                    Spirituosen-Ausbildungen und bietet seit ??ber 40 Jahren
                    spezielle Qualifikationen f??r Weinkenner an.
                  </p>
                </ReactTooltip>{" "}
                Bei Berghaus & Cie. ist er f??r den Bereich Strategie und
                Vertrieb zust??ndig.
              </p>
              <p>
                Parallel zu seinem Studium der Betriebswirtschaftslehre an der
                Universit??t zu K??ln hat Tristan Berghaus sein Wissen ??ber Wein
                kontinuierlich vertieft. Neben seiner internationalen
                Arbeitserfahrung in Singapur und der Schweiz hat er bei einem
                namenhaften Deutschen Direktimporteur gearbeitet.
              </p>
              <p>
                In seiner Freizeit trifft man ihn auf der Driving Rage oder auf
                dem Platz.
              </p>
              <br />
              <span
                className={"pull-right"}
                style={{ displey: "inline-block" }}
              >
                <a href={"https://www.xing.com/profile/Tristan_Berghaus2/"}>
                  {" "}
                  <XingIcon width={"30px"} height={"30px"} strokewidth={3} />
                </a>{" "}
                <a href={"https://www.linkedin.com/in/tristan-berghaus/"}>
                  <LogoLinkedin
                    width={"30px"}
                    height={"30px"}
                    strokewidth={3}
                  />
                </a>
              </span>
            </div>
          </div>

          <div class="row mx-auto" style={{ maxWidth: "1200px" }}>
            <div
              className={
                "col-md-4 col-sm-12 mx-2 mx-sm-n3 mb-n3 mb-sm-0 my-sm-auto " +
                (width < 768 ? "text-center" : "text-right")
              }
              style={{ zIndex: 1000 }}
            >
              <ImageFromCms
                title={"martin_formal"}
                width={Math.min(width * 0.85, 300)}
                fill={width > 991 ? "300x300" : "300x300"}
                jpegquality={80}
                classes={"animated fadeIn img img-raised"}
              />
              {/* <img
                    src={"/assets/img/tristan_berghaus_berghaus_cie.png"}
                    class={"img-raised"}
                    width="350px"
                  ></img> */}
            </div>

            <div class="col-md-8 col-sm-12 text-left card mt-sm-4 mx-3 p-3 pt-5 pt-sm-4 ">
              <h2
                class="text-left d-inline heading mt-sm-3 h3"
                style={{ fontSize: "21px" }}
              >
                Martin Dammrath
              </h2>
              <h5 style={{ fontSize: "18px" }}>Information Technology</h5>
              <p>
                Martin Dammrath hat Mathematik mit dem Schwerpunkt Statistik und
                VWL studiert. Er besitzt einen Bachelor in Mathematik der
                Universit??t zu K??ln. Als Unternehmensberater f??r Data Science
                und Data Engineering war er haupts??chlich in der Finanzdienst-
                leistungsbranche (Banken und Verm??gensverwaltung) t??tig.
              </p>
              <p>
                Mit seiner ausgepr??gten Methodenkompetenz in den Bereichen
                Datenanalyse und K??nstliche Intelligenz erarbeitet er wertvolle
                Kennzahlen und Trends f??r die Investmententscheidungen unserer
                Kunden. Dar??ber hinaus ist er bei Berghaus & Cie. f??r die
                Entwicklung der Handelsplattform und die internen Systeme
                zust??ndig.
              </p>
              <p>
                Neben seiner Leidenschaft f??r Wein und gutes Essen, wandert er
                gerne und f??hrt mit seinem Rennrad durch das Bergischen Land.
              </p>
              <br />
              <span
                className={"pull-right"}
                style={{ displey: "inline-block" }}
              >
                <a href={"https://www.xing.com/profile/Martin_Dammrath/"}>
                  {" "}
                  <XingIcon width={"30px"} height={"30px"} strokewidth={3} />
                </a>{" "}
                <a href={"https://www.linkedin.com/in/martin-c-dammrath/"}>
                  <LogoLinkedin
                    width={"30px"}
                    height={"30px"}
                    strokewidth={3}
                  />
                </a>
              </span>
            </div>
          </div>

          <div class="row mx-auto" style={{ maxWidth: "1200px" }}>
            <div
              className={
                "col-md-4 col-sm-12 mx-2 mx-sm-n3 mb-n3 mb-sm-0 my-sm-auto " +
                (width < 768 ? "text-center" : "text-right")
              }
              style={{ zIndex: 1000 }}
            >
              <ImageFromCms
                title={"peter_formal"}
                width={Math.min(width * 0.85, 300)}
                fill={width > 991 ? "300x300" : "300x300"}
                jpegquality={80}
                classes={"animated fadeIn img img-raised"}
              />
              {/* <img
                    src={"/assets/img/tristan_berghaus_berghaus_cie.png"}
                    class={"img-raised"}
                    width="350px"
                  ></img> */}
            </div>

            <div class="col-md-8 col-sm-12 text-left card mt-sm-4 mx-3 p-3 pt-5 pt-sm-4 ">
              <h2
                class="text-left d-inline heading mt-sm-3 h3"
                style={{ fontSize: "21px" }}
              >
                Peter Irnich
              </h2>
              <h5 style={{ fontSize: "18px" }}>Operations</h5>
              <p>
                Durch seine Ausbildung als Industriekaufmann und diversen
                T??tigkeiten im Einkauf und im Bereich Operations verf??gt Peter
                Irnich ??ber ein breites Spektrum an Praxiserfahrung. Er besitzt
                einen Abschluss in Betriebswirtschaftslehre mit dem Schwerpunkt
                Supply Chain Management der Universit??t zu K??ln.
              </p>
              <p>
                Bei Berghaus & Cie. ist er aufgrund seines Organisationstalentes
                f??r die Logistik und optimale Lagerung der Weine sowie f??r die
                unternehmensinternen Prozesse zust??ndig. Er besitzt das
                Zertifikat WSET?? Level 2, Award in Wine, des{" "}
                <i data-tip data-for="global">
                  {" "}
                  Wine and Spirit Education Trust (WSET).
                </i>
              </p>
              <p>
                Neben seiner Arbeit f??r Berghaus & Cie. ist er ein
                leidenschaftlicher Tennis- und Fu??ballspieler.
              </p>
              <br />
              <span
                className={"pull-right"}
                style={{ displey: "inline-block" }}
              >
                <a href={"https://www.xing.com/profile/Peter_Irnich/"}>
                  {" "}
                  <XingIcon width={"30px"} height={"30px"} strokewidth={3} />
                </a>{" "}
                <a href={"https://www.linkedin.com/in/peter-irnich-736972115/"}>
                  <LogoLinkedin
                    width={"30px"}
                    height={"30px"}
                    strokewidth={3}
                  />
                </a>
              </span>
            </div>
          </div>

          {/* 
          <div className="section fp-auto-height-responsive">
            <div class="container mt-md-n5 mt-sm-5 my-auto">
              <div class="row pb-2">
                <div
                  class="col-md-4 col-sm-12 mx-2 mx-sm-n3 mb-n3 mb-sm-0 my-sm-auto text-left "
                  style={{ zIndex: 1000 }}
                >
                  <img
                    src={"/assets/img/bernadette_baur_berghaus_cie.png"}
                    class={"img-raised"}
                    width="350px"
                  ></img>
                </div>

                <div class="col-md-8 col-sm-12 text-left card mt-sm-4 mx-3 p-3 pt-5 pt-sm-4 ">
                  <h2 class="text-left d-inline heading mt-sm-3">
                    Bernadette Baur
                  </h2>
                  <h5>Brandmanagement/Marketing</h5>
                  <p>
                    Sie arbeitet seit ??ber 20 Jahren als Markenberaterin f??r
                    namhafte mittelst??ndische Unternehmen und internationale
                    Konzerne. Bernadette Baur ist spezialisiert auf die Themen
                    Markenaufbau und -strategie, Corporate Identity-Entwicklung
                    und Marketing. Sie besitzt einen Abschluss in
                    Lingustik/Psychologie der Universit??t Bonn.
                  </p>
                  <p>
                    Bei Berghaus & Cie. ist sie f??r das Brandmanagement
                    (Markenstrategie/-aufbau), das Corporate Design sowie die
                    Entwicklung und Durchf??hrung der begleitenden Marketing- und
                    Kommunikationsma??nahmen zust??ndig.
                  </p>
                  <p>
                    Neben ihrem Interesse f??r Literatur, Mode und Fotografie
                    sind Reisen in fremde L??nder und das Entdecken anderer
                    Kulturen ihre gr????te Leidenschaft.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="section fp-auto-height-responsive mt-n5 mt-sm-0 ">
            <div class="container pt-0 pt-sm-5 animated fadeIn slow ">
              <div className={"row mt-5"}>
                <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                  {/* <i
                    class="fas fa-child mb-n3 ml-n3 round-icon-lg"
                    style={{ color: primary }}
                  ></i> */}
                  <span class="round-icon-lg text-white mb-n3">
                    <span style={{ width: "40px", height: "40px" }}>
                      <Multiple11
                        width={"40px"}
                        height={"40px"}
                        strokewidth={3}
                      />
                    </span>
                  </span>
                </div>
                <div class="col-md-8 offset-md-2 col-sm-12">
                  <div class="info info-horizontal">
                    <div class="card p-3">
                      <h5 class="" style={{ fontSize: "21px" }}>
                        Was uns verbindet
                      </h5>
                      <p class="text-justify">
                        Uns von Berghaus & Cie. verbindet nicht nur die
                        Leidenschaft f??r exquisite Weine, sondern auch ein gutes
                        Gesp??r f??r lukrative Investments. Unser Team besteht aus
                        ganz unterschiedlichen Pers??nlichkeiten, deren
                        berufliche Expertise und individuelle Sichtweisen sich
                        gegenseitig erg??nzen und bereichern. Wir teilen
                        gemeinsame Werte und sind stets auf der Suche nach der
                        besten L??sung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container mt-sm-n5 animated fadeIn slower">
              <div className={"row mt-5"}>
                <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                  {/* <i
                    class="fas fa-rocket mb-n3 ml-n3 round-icon-lg"
                    style={{ color: primary }}
                  ></i> */}
                  <span class="round-icon-lg text-white mb-n3">
                    <span style={{ width: "40px", height: "40px" }}>
                      <Logic width={"40px"} height={"40px"} strokewidth={3} />
                    </span>
                  </span>
                </div>
                <div class="col-md-8 offset-md-2 col-sm-12 mb-5">
                  <div class="info info-horizontal">
                    <div class="card p-3">
                      <h5 class="" style={{ fontSize: "21px" }}>
                        Unsere Expertise
                      </h5>
                      <p class="text-justify">
                        Berghaus & Cie. bietet Ihnen die M??glichkeit, einfach,
                        transparent und zielgerichtet in den Weinmarkt zu
                        investieren. Sie profitieren von unserem Fachwissen,
                        ohne selbst zum Experten werden zu m??ssen. Wir bieten
                        Ihnen einen einzigartigen Blick auf einen
                        spezialisierten Markt. Ob Neueinsteiger oder erfahrener
                        Sammler, unser Team steht Ihnen f??r alle Ihre Fragen
                        rund um das Thema Weininvestment zur Verf??gung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container text-center mt-sm-5 pt-5 mb-sm-5 pb-5">
            <span style={{ fontSize: "18px" }}>
              F??r alle weiteren Fragen stehen wir Ihnen gerne per Mail oder
              telefonisch zur Verf??gung.
              <br />
            </span>
            <a onClick={() => toggleShowContactModal(!showContactModal)}>
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
          </div>
        </div>
      </div>

      <LandingFooter />
    </>
  );
};

export default AboutUs;
