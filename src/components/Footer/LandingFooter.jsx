import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import ContactUs from "components/ContactUs";
import XingLogo from "icons/xing-logo";
import LinkedinLogo from "icons/linkedin_logo";

const LandingFooter = () => {
  const [showModal, toggleShowModal] = useState(false);
  const [markup, changeMarkup] = useState(null);
  return (
    <>
      <Modal
        isOpen={showModal}
        toggle={() => props.toggleShowModal()}
        className="modal-lg modal-dialog-centered"
      >
        <ModalBody className={"p-4"}>
          <i
            className="now-ui-icons ui-1_simple-remove pull-right mt-0 text-primary"
            style={{
              color: "black",
              fontSize: "18px",
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: "100",
            }}
            onClick={(e) => {
              toggleShowModal(!showModal);
            }}
          ></i>
          <h4>Haftungsausschluss</h4>
          <p>
            Die Firma Berghaus & Cie. GmbH ist ein Weinhandelsunternehmen, das
            Kunden zu ihren Weinen Vergleichswerte in der preislichen
            Entwicklung zur Verfügung stellt. Berghaus & Cie. ist kein
            Finanzdienstleister oder -berater. Berghaus & Cie. verkauft Weine
            nur in für Privatpersonen vertretbaren Mengen. Für individuelle
            steuerliche Fragen wenden Sie sich bitte an einen Steuerberater. Es
            gelten die Allgemeinen Geschäftsbedingungen der Berghaus & Cie.
            GmbH, eine aktuelle Fassung finden Sie unter
            https://www.berghauscie.de/legal/allgemeine-geschaeftsbedingungen.
          </p>{" "}
        </ModalBody>
      </Modal>
      {/* <ContactUs
        showButton={false}
        showModal={showModal}
        toggleShowModal={toggleShowModal}
        additionalText={
          <h4 class="" style={{ fontSize: "18px" }}>
            <span className={"px-3"}>
              Gerne stellen wir Ihnen Informationen und Fotos zur Verfügung.
            </span>
          </h4>
        }
      /> */}

      <div
        class="container-fluid pb-2 mt-0 p-3 pt-5 text-center bg-gradient"
        id={"footer"}
        style={{ color: "white" }}
      >
        {/* <div className={"mx-auto"} style={{ maxWidth: "550px" }}>
          <ContactUs />
        </div> */}

        <div class="row text- pb-5">
          <div class="col-md-6 text-center p-2">
            <a
              className={"text-white"}
              style={{
                cursor: "pointer",
                color: "white",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
              href={"/legal/datenschutz"}
            >
              Datenschutz
            </a>
          </div>
          <div class="col-md-6 text-center p-2">
            <a
              className={"text-white"}
              style={{
                cursor: "pointer",
                color: "white",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
              href={"/legal/impressum"}
            >
              Impressum
            </a>
          </div>
          {/* <div class="col-md-6 text-center p-2"> 
    <a style={{cursor: "pointer"}} onClick={()=>changeMarkup(kontakt_markup, toggleShowModal(true))}>Kontakt</a>
    </div> */}
          <div class="col-md-6 text-center p-2">
            <a
              className={"text-white"}
              style={{
                cursor: "pointer",
                color: "white",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
              href={"/legal/allgemeine-geschaeftsbedingungen"}
            >
              AGB
            </a>
          </div>
          <div class="col-md-6 text-center p-2">
            <a
              className={"text-white"}
              style={{
                cursor: "pointer",
                color: "white",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
              onClick={() => toggleShowModal(!showModal)}
            >
              Haftungsausschluss
            </a>
          </div>
        </div>
        <center>
          <span
            className={""}
            style={{
              display: "block",
              fontSize: "15px",
              verticalAlign: "middle",
            }}
          >
            <a
              className={"mr-3"}
              href={"https://www.xing.com/company/berhaus-cie-gmbh/"}
              style={{ textDecoration: "none" }}
            >
              {" "}
              <span className={"text-white"}>
                <XingLogo width={"20px"} height={"20px"} strokewidth={3} /> Xing
              </span>
            </a>{" "}
            <a
              href={"https://www.linkedin.com/company/berghaus-cie-gmbh/"}
              style={{ textDecoration: "none" }}
            >
              <span className={"text-white"}>
                <LinkedinLogo width={"30px"} height={"30px"} strokewidth={3} />{" "}
                Linkedin
              </span>
            </a>
          </span>
          <br />
          <small>© Berghaus & Cie. GmbH</small>
        </center>
      </div>
    </>
  );
};

export default LandingFooter;
