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

const AboutUs = () => {
  const [width, setWidth] = useState(0);

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
      <div>
        <div className={"container-fluid"}>
          <div className="row" style={{ height: "100vh" }}>
            <div
              className={"col-12 my-auto text-center animated fadeIn slower "}
            >
              {/* <img className={"animated fadeIn"} src={"/assets/img/bc_logo_80.png"} alt={"Berghaus &amp; Cie."} width="250px"></img> */}
              <ImageFromCms
                title={"anagram_lavendel"}
                width={270}
                classes={"animated fadeIn slower img mb-5"}
              />

              <h1>
                {" "}
                Exquisite Weine -<br /> {"Ihr Investment ist unsere "}
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
                <i
                  class="fas fa-chevron-down fa-2x animated infinite pulse"
                  style={{ cursor: "pointer", color: primary }}
                ></i>
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
                <i
                  class="fas fa-users mb-n3 ml-n3 round-icon-lg"
                  style={{ color: primary }}
                ></i>
              </div>
              <div class="col-md-8 offset-md-2 col-sm-12">
                <div class="info info-horizontal">
                  <div class="card p-3">
                    <h5 class="">Unsere Überzeugung</h5>
                    <p class="rext-justify">
                      Wein ist langfristig gesehen nicht nur eine Ergänzung,
                      sondern unter Umständen eine echte Alternative zu den
                      üblichen Anlageformen. Unter fachkundiger Anleitung
                      bringen Weininvestments nicht nur eine starke Rendite,
                      sondern bieten darüber hinaus auch einen greifbaren
                      Vermögenswert mit einer spannende Zukunft.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container mt-sm-n5 animated fadeIn slower">
            <div className={"row mt-5"}>
              <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                <i
                  class="fas fa-briefcase mb-n3 ml-n3 round-icon-lg"
                  style={{ color: primary }}
                ></i>
              </div>
              <div class="col-md-8 offset-md-2 col-sm-12">
                <div class="info info-horizontal">
                  <div class="card p-3">
                    <h5 class="">Unser Ziel</h5>
                    <p class="text-justify">
                      Berghaus & Cie. möchte das Thema Weininvestment für jeden
                      zugänglich machen. Dabei setzen wir auf Transparenz,
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
              <h2 class="text-left d-inline heading mt-sm-3">
                Tristan Berghaus
              </h2>
              <h5>Sales</h5>
              <p>
                Wer Tristan persönlich kennt, der verbindet ihn mit dem Thema
                Wein. Er ist Initiator und Namensgeber von Berghaus & Cie. Seit
                Jahren leitet er Weinproben mit einem Fokus auf gereifte Weine
                und besitzt das Zertifikat WSET® Level 3*, Award in Wine, des
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
                    international renommierter Anbieter für Wein- und
                    Spirituosen-Ausbildungen und bietet seit über 40 Jahren
                    spezielle Qualifikationen für Weinkenner an.
                  </p>
                </ReactTooltip>{" "}
                Bei Berghaus & Cie. ist er für den Bereich Strategie und
                Vertrieb zuständig.
              </p>
              <p>
                Parallel zu seinem Studium der Betriebswirtschaftslehre an der
                Universität zu Köln hat Tristan Berghaus sein Wissen über Wein
                kontinuierlich vertieft. Neben seiner internationalen
                Arbeitserfahrung in Singapur und der Schweiz hat er bei einem
                namenhaften Deutschen Direktimporteur gearbeitet.
              </p>
              <p>
                In seiner Freizeit trifft man ihn auf der Driving Rage oder auf
                dem Platz.
              </p>
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
              <h2 class="text-left d-inline heading mt-sm-3">
                Martin Dammrath
              </h2>
              <h5>Information Technology</h5>
              <p>
                Martin Dammrath hat Mathematik mit dem Schwerpunkt Statistik und
                VWL studiert. Er besitzt einen Bachelor in Mathematik der
                Universität zu Köln. Als Unternehmensberater für Data Science
                und Data Engineering war er hauptsächlich in der Finanzdienst-
                leistungsbranche (Banken und Vermögensverwaltung) tätig.
              </p>
              <p>
                Mit seiner ausgeprägten Methodenkompetenz in den Bereichen
                Datenanalyse und Künstliche Intelligenz erarbeitet er wertvolle
                Kennzahlen und Trends für die Investmententscheidungen unserer
                Kunden. Darüber hinaus ist er bei Berghaus & Cie. für die
                Entwicklung der Handelsplattform und die internen Systeme
                zuständig.
              </p>
              <p>
                Neben seiner Leidenschaft für Wein und gutes Essen, wandert er
                gerne und fährt mit seinem Rennrad durch das Bergischen Land.
              </p>
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
              <h2 class="text-left d-inline heading mt-sm-3">Peter Irnich</h2>
              <h5>Operations</h5>
              <p>
                Durch seine Ausbildung als Industriekaufmann und diversen
                Tätigkeiten im Einkauf und im Bereich Operations verfügt Peter
                Irnich über ein breites Spektrum an Praxiserfahrung. Er besitzt
                einen Abschluss in Betriebswirtschaftslehre mit dem Schwerpunkt
                Supply Chain Management der Universität zu Köln.
              </p>
              <p>
                Bei Berghaus & Cie. ist er aufgrund seines Organisationstalentes
                für die Logistik und optimale Lagerung der Weine sowie für die
                unternehmensinternen Prozesse zuständig. Er besitzt das
                Zertifikat WSET® Level 2, Award in Wine, des{" "}
                <i data-tip data-for="global">
                  {" "}
                  Wine and Spirit Education Trust (WSET).
                </i>
              </p>
              <p>
                Neben seiner Arbeit für Berghaus & Cie. ist er ein
                leidenschaftlicher Tennis- und Fußballspieler.
              </p>
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
                    Sie arbeitet seit über 20 Jahren als Markenberaterin für
                    namhafte mittelständische Unternehmen und internationale
                    Konzerne. Bernadette Baur ist spezialisiert auf die Themen
                    Markenaufbau und -strategie, Corporate Identity-Entwicklung
                    und Marketing. Sie besitzt einen Abschluss in
                    Lingustik/Psychologie der Universität Bonn.
                  </p>
                  <p>
                    Bei Berghaus & Cie. ist sie für das Brandmanagement
                    (Markenstrategie/-aufbau), das Corporate Design sowie die
                    Entwicklung und Durchführung der begleitenden Marketing- und
                    Kommunikationsmaßnahmen zuständig.
                  </p>
                  <p>
                    Neben ihrem Interesse für Literatur, Mode und Fotografie
                    sind Reisen in fremde Länder und das Entdecken anderer
                    Kulturen ihre größte Leidenschaft.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="section fp-auto-height-responsive mt-n5 mt-sm-0 ">
            <div class="container pt-0 pt-sm-5 animated fadeIn slow ">
              <div className={"row mt-5"}>
                <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                  <i
                    class="fas fa-child mb-n3 ml-n3 round-icon-lg"
                    style={{ color: primary }}
                  ></i>
                </div>
                <div class="col-md-8 offset-md-2 col-sm-12">
                  <div class="info info-horizontal">
                    <div class="card p-3">
                      <h5 class="">Was uns verbindet</h5>
                      <p class="text-justify">
                        Uns von Berghaus & Cie. verbindet nicht nur die
                        Leidenschaft für exquisite Weine, sondern auch ein gutes
                        Gespür für lukrative Investments. Unser Team besteht aus
                        ganz unterschiedlichen Persönlichkeiten, deren
                        berufliche Expertise und individuelle Sichtweisen sich
                        gegenseitig ergänzen und bereichern. Wir teilen
                        gemeinsame Werte und sind stets auf der Suche nach der
                        besten Lösung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container mt-sm-n5 animated fadeIn slower">
              <div className={"row mt-5"}>
                <div className={"col-12 text-center"} style={{ zIndex: 400 }}>
                  <i
                    class="fas fa-rocket mb-n3 ml-n3 round-icon-lg"
                    style={{ color: primary }}
                  ></i>
                </div>
                <div class="col-md-8 offset-md-2 col-sm-12 mb-5">
                  <div class="info info-horizontal">
                    <div class="card p-3">
                      <h5 class="">Unsere Expertise</h5>
                      <p class="text-justify">
                        Berghaus & Cie. bietet Ihnen die Möglichkeit, einfach,
                        transparent und zielgerichtet in den Weinmarkt zu
                        investieren. Sie profitieren von unserem Fachwissen,
                        ohne selbst zum Experten werden zu müssen. Wir bieten
                        Ihnen einen einzigartigen Blick auf einen
                        spezialisierten Markt. Ob Neueinsteiger oder erfahrener
                        Sammler, unser Team steht Ihnen für alle Ihre Fragen
                        rund um das Thema Weininvestment zur Verfügung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LandingFooter />
    </>
  );
};

export default AboutUs;
