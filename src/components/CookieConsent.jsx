import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useCookies } from "react-cookie";
import GoogleAnalytics from "../helpers/GoogleAnalytics";
import { primary } from "helpers/colorScheme";

const CookieConsent = (props) => {
  const [showModal, toggleShowModal] = useState(false);
  const [showSettings, toggleShowSetting] = useState(false);
  const [cookies, setCookie] = useCookies(["cookie_consent"]);
  const [marketingCookies, setMarketingCookies] = useState(false);
  const [finishedLoadingDocument, toggleFinishedLoadingDocument] =
    useState(false);
  useEffect(() => {
    toggleFinishedLoadingDocument(true);
    setTimeout(()=>{toggleShowModal(true)}, 2000)
  }, []);
  //   useEffect(()=>{
  //     toggleShowModal(props.showModal)
  //   }, [props.showModal])
  useEffect(() => {
    if (
      /with_marketing/.test(document.cookie) ||
      /required_only/.test(document.cookie)
    ) {
      props.toggleShowModal(false);
    }
    console.log(cookies.cookie_consent)
  }, [finishedLoadingDocument]);
  return (
    <>
      {!cookies.cookie_consent && finishedLoadingDocument && showModal && (
        <div style={{position: "fixed", bottom: 0, width: "100%", zIndex: 1000, backgroundColor: "rgba(255,255,255, 0.8)", fontSize: "0.65rem"}} className={"p-1 pt-2 p-md-3"}>
            Wir verwenden Cookies, um Ihnen ein optimales Webseiten-Erlebnis zu
            bieten. Dazu zählen Cookies, die für den Betrieb der Seite und für
            die Steuerung unserer kommerziellen Unternehmensziele notwendig
            sind, sowie solche, die lediglich zu anonymen Statistikzwecken, für
            Komforteinstellungen oder zur Anzeige personalisierter Inhalte
            genutzt werden. 
            {/* Sie können selbst entscheiden, welche Kategorien Sie
            zulassen möchten. Bitte beachten Sie, dass auf Basis Ihrer
            Einstellungen womöglich nicht mehr alle Funktionalitäten der Seite
            zur Verfügung stehen. Weitere Informationen finden Sie in unseren{" "} */}
            <a href={"legal/datenschutz/"}>Datenschutzhinweisen</a>.<br />
            <div class="row mt-3 mb-4 text-center text-md-left">
         
              <div class="col-md-12 col-sm-12 text-md-right">
              <a
                  style={{color: primary, textDecoration: "underline", marginRight: "15px"}}
                  onClick={() => {
                    // toggleShowModal(false);

                    // setCookie("cookie_consent", "required_only", { path: "/" });
                    // props.toggleShowModal(false);
                    document
                      .getElementById("cookie-settings")
                      .classList.toggle("d-none");
                  }}
                >
                  Einstellungen
                </a>
                <Button
                  className={"btn-primary btn-lg"}
                  onClick={() => {
                    toggleShowModal(false);

                    setCookie("cookie_consent", "with_marketing", {
                      path: "/",
                    });
                    props.toggleShowModal(false);
                  }}
                >
                  Alle akzeptieren
                </Button>
              </div>
             
            </div>
            <div class="row mt-3 mb-4 d-none" id={"cookie-settings"}>
              <div class="col-md-12 col-sm-12">
                <div className={"form-check pl-0"} style={{ color: "grey" }}>
                  <label
                    class="form-check-label "
                    style={{ cursor: "default" }}
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      checked
                      style={{ cursor: "default" }}
                    />
                    <span
                      class="form-check-sign"
                      style={{ cursor: "default" }}
                    ></span>
                    Essenzielle Cookies
                  </label>
                  <br/>
                  <small className={"mb-2"}>
                    Essenzielle Services sind für die grundlegende
                    Funktionalität der Website erforderlich. Sie enthalten nur
                    technisch notwendige Services. Diesen Services kann nicht
                    widersprochen werden
                  </small>
                </div>
              </div>
              <div class="col-md-12 col-sm-12">
                <div class="form-check pl-0">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      onClick={() => setMarketingCookies(!marketingCookies)}
                      checked={marketingCookies}
                    />
                    <span class="form-check-sign"></span>
                    Funktionale Cookies
                  </label>
                  <br/>
                  <small className={"mb-2"}>
                    Funktionale Services sind notwendig, um über die wesentliche
                    Funktionalität der Website hinausgehende Features wie
                    hübschere Schriftarten, Videowiedergabe oder interaktive Web
                    2.0-Features bereitzustellen. Inhalte von z.B. Video- und
                    Social Media-Plattformen sind standardmäßig gesperrt und
                    können zugestimmt werden. Wenn dem Service zugestimmt wird,
                    werden diese Inhalte automatisch ohne weitere manuelle
                    Einwilligung geladen
                  </small>

                </div>
              </div>
              <div class="col-md-12 col-sm-12">
                <div class="form-check pl-0">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      onClick={() => setMarketingCookies(!marketingCookies)}
                      checked={marketingCookies}
                    />
                    <span class="form-check-sign"></span>
                    Statistik-Cookies
                  </label>
                  <br/>
                  <small >
                    Statistik-Services werden benötigt, um pseudonymisierte
                    Daten über die Besucher der Website zu sammeln. Die Daten
                    ermöglichen es uns, die Besucher besser zu verstehen und die
                    Website zu optimieren.
                  </small>
                </div>
              </div>
              <div className={"text-center text-md-left"}>
              <button  onClick={() => {
                    toggleShowModal(false);

                    setCookie("cookie_consent", "required_only", { path: "/" });
                    props.toggleShowModal(false);
                   
                  }} className={"btn mt-3 ml-1 ml-md-0  text-center"}>
                Auswahl akzeptieren
              </button>
              </div>
            </div>
            </div>
         
      )}
      {finishedLoadingDocument && /with_marketing/.test(document.cookie) && (
        <GoogleAnalytics />
      )}
    </>
  );
};

export default CookieConsent;
