import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useCookies } from "react-cookie";
import GoogleAnalytics from "../helpers/GoogleAnalytics";

const CookieConsent = (props) => {
  const [showModal, toggleShowModal] = useState(true);
  const [cookies, setCookie] = useCookies(["cookie_consent"]);
  //   const [marketingCookies, setMarketingCookies] = useState(false);
  const [finishedLoadingDocument, toggleFinishedLoadingDocument] =
    useState(false);
  useEffect(() => {
    toggleFinishedLoadingDocument(true);
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
  }, [finishedLoadingDocument]);
  return (
    <>
      {!cookies.cookie_consent && finishedLoadingDocument && (
        <Modal isOpen={showModal} className={"modal-lg modal-dialog-centered"}>
          <ModalHeader className={"p-3 pt-4 px-md-5"}>
            Cookie-Einstellungen
          </ModalHeader>
          <ModalBody className={"p-3 px-md-5"}>
            Wir verwenden Cookies, um Ihnen ein optimales Webseiten-Erlebnis zu
            bieten. Dazu zählen Cookies, die für den Betrieb der Seite und für
            die Steuerung unserer kommerziellen Unternehmensziele notwendig
            sind, sowie solche, die lediglich zu anonymen Statistikzwecken, für
            Komforteinstellungen oder zur Anzeige personalisierter Inhalte
            genutzt werden. Sie können selbst entscheiden, welche Kategorien Sie
            zulassen möchten. Bitte beachten Sie, dass auf Basis Ihrer
            Einstellungen womöglich nicht mehr alle Funktionalitäten der Seite
            zur Verfügung stehen. Weitere Informationen finden Sie in unseren{" "}
            <a href={"legal/datenschutz/"}>Datenschutzhinweisen</a>.<br />
            {/* <div class="row mt-3 mb-4">
              <div class="col-md-6 col-sm-12">
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
                    Notwendige Cookies
                  </label>
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="form-check">
                  <label class="form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      onClick={() => setMarketingCookies(!marketingCookies)}
                      checked={marketingCookies}
                    />
                    <span class="form-check-sign"></span>
                    Statistik-Cookies (optional)
                  </label>
                </div>
              </div>
            </div> */}
            <div class="row mt-3 mb-4 text-center text-md-left">
              <div class="col-md-6 col-sm-12">
                {" "}
                <Button
                  className={"btn-primary btn-lg"}
                  onClick={() => {
                    toggleShowModal(false);

                    setCookie("cookie_consent", "required_only", { path: "/" });
                    props.toggleShowModal(false);
                  }}
                >
                  Nur notwendige Cookies akzeptieren
                </Button>
              </div>
              <div class="col-md-6 col-sm-12 text-md-right">
                {" "}
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
          </ModalBody>
        </Modal>
      )}
      {finishedLoadingDocument && /with_marketing/.test(document.cookie) && (
        <GoogleAnalytics />
      )}
    </>
  );
};

export default CookieConsent;
