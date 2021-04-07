import React, { useState } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { gql, useMutation } from "@apollo/client";

import { primary } from "helpers/colorScheme";

const SEND_MESSAGE = gql`
  mutation sendContactFormMail(
    $senderEmail: String!
    $sender: String!
    $message: String!
  ) {
    sendContactFormMail(senderEmail: $senderEmail, sender: $sender, message: $message) {
      success
    }
  }
`;

const ContactUs = () => {
  let contact_name;
  let senderEmail;
  let message;
  const [sendMessage, { data }] = useMutation(SEND_MESSAGE);

  const [showModal, toggleShowModal] = useState(false);
  const [formSent, toggleFormSent] = useState(false);

  return (
    <>
      <Modal
        isOpen={showModal}
        toggle={() => toggleShowModal()}
        className="modal-md modal-dialog-centered"
      >
        <ModalBody className="py-4 px-3">
          <i
            className="now-ui-icons ui-1_simple-remove pull-right mt-0"
            style={{ color: "black", fontSize: "18px", cursor: "pointer" }}
            onClick={(e) => {
              toggleShowModal(!showModal);
            }}
          ></i>
          { !formSent?
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
                toggleShowModal(false)
            }, 1500);

            }}
          >
            <div class="text-center">
              <h4 class="">Schreiben Sie uns!</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 col-sm-12 pr-2">
                  <label>Name</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="now-ui-icons users_circle-08"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name..."
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
                    <label>Email address</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="now-ui-icons ui-1_email-85"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email Here..."
                        autocomplete="email"
                        ref={(node) => {
                          senderEmail = node;
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label>Your message</label>
                <textarea
                  name="message"
                  class="form-control"
                  id="message"
                  rows="3"
                  ref={(node) => {
                    message = node;
                  }}
                ></textarea>
              </div>

              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input class="form-check-input" type="checkbox" />
                      <span class="form-check-sign"></span>
                      I'm not a robot
                    </label>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12">
                  <button
                    type="submit"
                    class="btn btn-primary btn-round pull-right"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
:
<h4 className={"p-4 animated fadeIn text-center"}>Danke für Ihre Nachricht!</h4>
}
        </ModalBody>
      </Modal>

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
          <small className={"text-primary d-none d-md-inline"}>KONTAKT</small>{" "}
          <br />
          <i
            className="fas fa-comments round-icon animated infinite pulse"
            style={{
              color: "#fff",
              backgroundImage:
                "linear-gradient(-45deg, #a0b9b9 0%, " + primary + " 100%)",
            }}
          ></i>
        </a>
      </div>
    </>
  );
};

export default ContactUs;
