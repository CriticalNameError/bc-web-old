import React, { useState, useEffect } from "react";
import { Modal, ModalBody } from "reactstrap";
import SelectCalendylDate from "./SelectCalendlyDate";

const SelectCalendylDateModal = (props) => {
  const [showModal, toggleShowModal] = useState(false);

  useEffect(() => {
    toggleShowModal(props.showModal);
  }, [props.showModal]);
  return (
    <>
      <Modal
        isOpen={showModal}
        toggle={() => props.toggleShowCalendlyModal(false)}
        className="modal-xl modal-dialog-centered"
      >
        <ModalBody className={"p-0"}>
          <i
            className="now-ui-icons ui-1_simple-remove pull-right mt-0 text-white"
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
          <SelectCalendylDate width={"100%"} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default SelectCalendylDateModal;
