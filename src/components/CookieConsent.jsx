import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useCookies } from "react-cookie";
import GoogleAnalytics from "../helpers/GoogleAnalytics";

const CookieConsent = (props) => {
  const [showModal, toggleShowModal] = useState(true);
  const [cookies, setCookie] = useCookies(["cookie_consent"]);
  const [marketingCookies, setMarketingCookies] = useState(true);
  const [finishedLoadingDocument, toggleFinishedLoadingDocument] =
    useState(false);
  useEffect(() => {
    toggleFinishedLoadingDocument(true);
  }, []);
  //   useEffect(()=>{
  //     toggleShowModal(props.showModal)
  //   }, [props.showModal])
  return (
    <>
      {!cookies.cookie_consent && finishedLoadingDocument && (
        <Modal isOpen={showModal} className={"modal-lg modal-dialog-centered"}>
          <ModalHeader className={"px-1 px-md-4"}>
            Cookie-Einstellungen
          </ModalHeader>
          <ModalBody className={"px-1 px-md-4"}>
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
            <div class="row mt-3 mb-4">
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
                    Marketing-Cookies (optional)
                  </label>
                </div>
              </div>
            </div>
            <center>
              <Button
                className={"btn-primary btn-lg"}
                onClick={() => {
                  toggleShowModal(false);
                  if(marketingCookies){
                    setCookie("cookie_consent", "with_marketing", { path: "/" });
                  }else{
                    setCookie("cookie_consent", "required_only", { path: "/" });
                  }
                  
                }}
              >
                Auswahl akzeptieren
              </Button>
            </center>
          </ModalBody>
        </Modal>
      )}
      {finishedLoadingDocument && (/with_marketing/.test(document.cookie)) && <GoogleAnalytics />}
    </>
  );
};

export default CookieConsent;
