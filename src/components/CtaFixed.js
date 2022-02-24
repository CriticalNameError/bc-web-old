import React, { useState, useEffect } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { gql, useMutation } from "@apollo/client";

import { primary } from "helpers/colorScheme";

import BComment from "icons/b-comment";

import ATime from "../icons/a-time";

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

const CtaFixed = (props) => {
 
  return (
    <>

        <div
          className={"text-center btn bg-cta p-2 animated fadeIn slower"}
          style={{
            cursor: "pointer",
            zIndex: "100",
            position: "fixed",
            top: "200px",
            right: "0px",
          }}
          id={"side-cta"}
          
        >
          <a
            onClick={(e) => {
              props.toggleShowCalendlyModal(true);
            }}
          >
            <div className={"text-white"} style={{ fontSize: "14px"}}>
              Erstgespräch
              <br />
              vereinbaren
            </div>{" "}
            <div className={"p-2"}>
            <ATime width={"30px"} height={"30px"} strokewidth={3} />
            </div>
          </a>
        </div>
   
    </>
  );
};

export default CtaFixed;
