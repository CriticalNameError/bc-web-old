import React, { useState, useEffect } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { gql, useMutation } from "@apollo/client";

import { primary } from "helpers/colorScheme";

import BComment from "icons/b-comment";

const SEND_MESSAGE = gql`
  mutation sendContactFormMail(
    $senderEmail: String!
    $sender: String!
    $message: String!
  ) {
    sendContactFormMail(
      senderEmail: $senderEmail
      sender: $sender
      message: $message
    ) {
      success
    }
  }
`;

const ContactUs = (props) => {
  let contact_name;
  let senderEmail;
  let message;
  const [sendMessage, { data }] = useMutation(SEND_MESSAGE);
  const [atBottom, toggleAtBottom] = useState(false);
  const [showModal, toggleShowModal] = useState(false);
  const [notARobot, toggleNotARobot] = useState(false);
  const [formSent, toggleFormSent] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      toggleAtBottom(
        window.scrollY + window.outerHeight >
          document.body.clientHeight -
            (document.getElementById("footer")
              ? document.getElementById("footer").clientHeight
              : 300)
      );
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleScroll();

    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    toggleShowModal(props.showModal);
  }, [props.showModal]);

  return (
    <>
      {/* <Modal
        isOpen={showModal}
        toggle={() => toggleShowModal()}
        className="modal-md modal-dialog-centered"
      >
        <ModalBody className="py-4 px-3">
          <i
            className="now-ui-icons ui-1_simple-remove pull-right mt-0 text-primary"
            style={{ color: "black", fontSize: "18px", cursor: "pointer" }}
            onClick={(e) => {
              toggleShowModal(!showModal);
            }}
          ></i> */}
          {!formSent ? (
            <form
              role="form"
              id="contact-form1"
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage({
                  variables: {
                    senderEmail: senderEmail.value,
                    sender: contact_name.value,
                    message: message.value,
                  },
                });
                toggleFormSent(true);
                senderEmail.value = "";
                contact_name.value = "";
                message.value = "";
                setTimeout(() => {
                  toggleShowModal(false);
                }, 1500);
              }}
            >
              <div class="text-center text-primary">

              {props.additionalText? props.additionalText : null}

              <h4 class="text-white" style={{fontSize: "18px"}}>Rufen Sie uns an unter <br/> <a style={{color: "white", textDecoration: "underline"}} href={"tel: +4922079019890"}> +49 2207 901 98 90</a> <br/> oder schreiben Sie uns.</h4>
            
              </div>
              <div class="card-body white-placeholders">
                <div class="row">
                  <div class="col-md-6 col-sm-12 pr-2">
                    {/* <label>Name</label> */}
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="now-ui-icons users_circle-08"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name und Vorname"
                        aria-label="Name..."
                        autocomplete="given-name"
                        ref={(node) => {
                          contact_name = node;
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 pl-2">
                    <div class="form-group">
                      {/* <label>Mail</label> */}
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="now-ui-icons ui-1_email-85"></i>
                          </span>
                        </div>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Ihre Mailadresse"
                          autocomplete="email"
                          ref={(node) => {
                            senderEmail = node;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-group textarea">
                  {/* <label>Ihre Nachricht</label> */}
                  <textarea
                    name="message"
                    class="form-control"
                    placeholder={"Ihre Nachricht"}
                    id="message"
                    rows="3"
                    ref={(node) => {
                      message = node;
                    }}
                  ></textarea>
                </div>

                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <div class="form-check" >
                      <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" onClick={()=>toggleNotARobot(!notARobot)}/>
                        <span class="form-check-sign"></span>
                        Ich bin kein Roboter
                      </label>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <button
                      type="submit"
                      className={"btn btn-primary btn-round pull-right " + (notARobot? "" : "disabled")}
                    >
                      Nachricht senden
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <h4 className={"p-4 animated fadeIn text-center"}>
              Danke für Ihre Kontaktanfrage!
              <br />
              <small>Wir melden uns bei Ihnen.</small>
            </h4>
          )}
        {/* </ModalBody>
      </Modal>
      {props.showButton ? (
        <div
          className={"text-center"}
          style={{
            cursor: "pointer",
            zIndex: "100",
            position: "fixed",
            bottom: "10px",
            right: "10px",
          }}
        >
          <a
            onClick={(e) => {
              toggleShowModal(true);
            }}
          >
            <small
              id={"contact-us-text"}
              className={
                "d-none d-md-inline " +
                (atBottom ? "text-white" : "text-primary")
              }
            >
              KONTAKT
            </small>{" "}
            <br />
            <i
              id={"contact-us"}
              className={
                "round-icon animated infinite pulse " +
                (atBottom ? "bg-white text-primary" : "bg-primary text-white")
              }
              // style={{
              //   color: "#fff",
              //   backgroundImage:
              //     "linear-gradient(-45deg, #a0b9b9 0%, " + primary + " 100%)",
              // }}
            >
              <BComment width={"30px"} height={"30px"} style={{display: "inline-block"}} strokewidth={3}></BComment>
            </i>
          </a>
        </div>
      ) : null} */}
    </>
  );
};

export default ContactUs;
