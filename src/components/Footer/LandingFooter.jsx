import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import ContactUs from "components/ContactUs";
import XingIcon from "icons/xing-icon";
import LogoLinkedin from "icons/logo-linkedin";


const LandingFooter = () => {
  const [showModal, toggleShowModal] = useState(false);
  const [markup, changeMarkup] = useState(null);
  return (
    <>
    <ContactUs showButton={false} showModal={showModal} toggleShowModal={toggleShowModal}/>
 

      <div
        class="container-fluid pb-2 mt-0 p-3 pt-5 text-center bg-gradient"
        id={"footer"}
        style={{ color: "white"}}
      >
        <div class="row text- pb-5">
          <div class="col-md-6 text-center p-2">
            <a
              className={"text-white"}
              style={{ cursor: "pointer", color: "white", textTransform: "uppercase", fontSize: "12px" }}
              href={"/legal/datenschutz"}
            >
              Datenschutz
            </a>
          </div>
          <div class="col-md-6 text-center p-2">
            <a
              className={"text-white"}
              style={{ cursor: "pointer", color: "white", textTransform: "uppercase", fontSize: "12px" }}
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
              style={{ cursor: "pointer", color: "white", textTransform: "uppercase", fontSize: "12px" }}
              href={"/legal/allgemeine-geschaeftsbedingungen"}
            >
              AGB
            </a>
          </div>
          <div class="col-md-6 text-center p-2">
            <a
              className={"text-white"}
              style={{ cursor: "pointer", color: "white", textTransform: "uppercase", fontSize: "12px" }}
              onClick={() => toggleShowModal(!showModal)}
            >
              Presse
            </a>
          </div>
        </div>
        <center>
        <span className={""} style={{display: "inline-block"}}>
                <a className={"mr-2"} href={"https://www.linkedin.com/company/berghaus-cie-gmbh/"}> <XingIcon width={"20px"} height={"20px"} strokewidth={3}/></a>
             
              {" "}

              <a  href={"https://www.xing.com/company/berhaus-cie-gmbh/"}><LogoLinkedin width={"20px"} height={"20px"} strokewidth={3}/></a>
              </span>
              <br/>
          <small>© Berghaus & Cie. GmbH</small>
        </center>
      </div>
    </>
  );
};

export default LandingFooter;
