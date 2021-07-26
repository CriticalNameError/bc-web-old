import React, { useState, useEffect } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";



const CustomModal = props => {
  const [showModal, toggleShowModal] = useState(false);
  const [markup, changeMarkup] = useState(null);

  useEffect(()=>{
    toggleShowModal(props.showModal),
    changeMarkup(props.markup)
  }, [props.markup, props.showModal])

  return (
    <>
      <Modal
        isOpen={showModal}
        toggle={() => props.toggleShowModal(!props.showModal)}
        className="modal-md p-4 modal-dialog-centered text-center"
      >
        <ModalBody className="py-4 px-3">
          <i
            className="now-ui-icons ui-1_simple-remove pull-right mt-0"
            style={{ color: "black", fontSize: "18px", cursor: "pointer" }}
            onClick={(e) => {
              props.toggleShowModal(!showModal);
            }}
          ></i>
          {markup}
        </ModalBody>
      </Modal>
    </>
  );
};

export default CustomModal;
