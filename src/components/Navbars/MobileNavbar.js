import React, { useEffect, useState } from "react";
import LogoLav from "../../icons/logo_lav";
import {Modal, ModalBody} from "reactstrap";
const MobileNavbar = (props) => {
  const [mode, setMode] = useState("light");
  const [showModal, toggleShowModal] = useState(false);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setMode(props.mode);
  }, [props.mode]);


  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      console.log(window.innerHeight)
    };
  
  
    handleResize();
    window.addEventListener("resize", handleResize);
   
    return () => {
      window.removeEventListener("resize", handleResize);
      
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <>
      <Modal className={"modal-xl modal-dialog-centered m-0"} isOpen={showModal} toggle={()=>toggleShowModal(false)}>
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
                toggleShowModal(false);
              }}
            ></i>
            <ModalBody className={"p-4"}  style={{height: height - 10 + "px"}}> <div>Weininvestments</div>
            <div>FAQ</div>
            <div>Über uns</div>
            <div>Blog</div></ModalBody>
           
      </Modal>
    <div
      className={"d-flex justify-content-between px-3 pt-2"}
      style={{ width: "100%", position: "fixed", zIndex: 1000, background: "transparent" }}
    >
      <span onClick={()=>toggleShowModal(true)}>Menu</span>
      <span
        style={{ display: "inline-block" }}
        className={"text-primary"}
        id={"logo-svg"}
      >
        <LogoLav width={"175px"} />
      </span>
    </div>
    </>
  );
};

export default MobileNavbar;
