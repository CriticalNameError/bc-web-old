import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const impressum_markup = (
  <>
    <h1>Impressum</h1> 
    <p>Angaben gemäß § 5 TMG <br/>
       Berghaus & Cie. GmbH <br/>
       Am Brombacher Berg 4<br/>
    51491 Overath Handelsregister: HRB XYZXYZ<br/>
     Registergericht: Bergisch Gladbach<br/>
    Vertreten durch: <br/>
    Tristan Berghaus <br/>
    Martin Dammrath <br/>
    Peter Irnich Kontakt<br/>
    Telefon: +49 151 673 106 64 <br/>
    E-Mail: info@berghaus-cie.com <br/>
    Umsatzsteuer-ID<br/>
    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DEXYZXYZ
    </p>
    <p>
    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV <br/>
    Tristan Berghaus
    <br/>
    EU-Streitschlichtung <br/>
    Die Europäische Kommission stellt eine Plattform zur
    Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
    Unsere E-Mail-Adresse finden Sie oben im Impressum.
    </p>
    <p>
    Verbraucher­streit­beilegung/Universal­schlichtungs­stelle Wir sind nicht
    bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
    Verbraucherschlichtungsstelle teilzunehmen. 
    </p>
    <p> 
    Haftung für Inhalte<br/>
     Als
    Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
    Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG
    sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
    gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
    forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
    </p>
    <p>  Verpflichtungen
    zur Entfernung oder Sperrung der Nutzung von Informationen nach den
    allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
    ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
    Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
    Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. Haftung für
    Links Unser Angebot enthält Links zu externen Websites Dritter, auf deren
    Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
    Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
    ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
    Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
    Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
    Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
    verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
    Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
    werden wir derartige Links umgehend entfernen. 
    </p>
    <p>
    Urheberrecht<br/>
   Die durch die
    Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
    dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
    und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
    Downloads und Kopien dieser Seite sind nur für den privaten, nicht
    kommerziellen Gebrauch gestattet.
    </p>
    <p> Soweit die Inhalte auf dieser Seite nicht
    vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
    Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
    trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
    einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
    werden wir derartige Inhalte umgehend entfernen.
    </p>
  </>
);
const kontakt_markup = <>Kontakt</>;

const LandingFooter = () => {
  const [showModal, toggleShowModal] = useState(false);
  const [markup, changeMarkup] = useState(null);
  return (
    <>
      <Modal
        isOpen={showModal}
        toggle={() => toggleShowModal()}
        className="modal-xl modal-dialog-centered"
      >
        <ModalBody className="py-4 px-3">
          <i
            className="now-ui-icons ui-1_simple-remove pull-right mt-0"
            style={{ color: "black", fontSize: "18px", cursor: "pointer" }}
            onClick={(e) => {
              toggleShowModal(!showModal);
            }}
          ></i>
          {markup}
        </ModalBody>
      </Modal>

      <div
        class="container-fluid pb-2 mt-0 p-3 pt-5 text-center bg-gradient"
        id={"footer"}
        style={{ color: "white"}}
      >
        <div class="row text- pb-5">
          <div class="col-md-6 text-center p-2 pt-1">
            <a
              className={"text-white"}
              style={{ cursor: "pointer", color: "white" }}
              href={"/legal/datenschutz"}
            >
              Datenschutz
            </a>
          </div>
          <div class="col-md-6 text-center p-2">
            <a
              className={"text-white"}
              style={{ cursor: "pointer", color: "white" }}
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
              style={{ cursor: "pointer", color: "white" }}
              href={"/legal/allgemeine-geschaeftsbedingungen"}
            >
              AGB
            </a>
          </div>
        </div>
        <center>
          <small>© Berghaus & Cie. GmbH</small>
        </center>
      </div>
    </>
  );
};

export default LandingFooter;
