import React, { useEffect, useState } from "react";
import LogoLav from "../../icons/logo_lav";
import MenuToClose2 from "../../icons/menu-to-close-2";
import LeftArrow from "../../icons/left-arrow";
import { Modal, ModalBody } from "reactstrap";
import ReactDOMServer from "react-dom/server";
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
      console.log(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      let b1 = document.getElementById("button2i0");
      let b2 = document.getElementById("button2i1");
      b1.innerHTML = "";
      b1.insertAdjacentHTML(
        "beforeend",
        ReactDOMServer.renderToStaticMarkup(
          <span className={"text-white "}>
            <LeftArrow width={"20px"} strokewidth={4} />
          </span>
        )
      );
      b2.innerHTML = "";
      b2.insertAdjacentHTML(
        "beforeend",
        ReactDOMServer.renderToStaticMarkup(
          <span className={"text-white"}>
            <LeftArrow width={"20px"} strokewidth={4} />
          </span>
        )
      );
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Modal
        className={"modal-xl modal-dialog-centered m-0 "}
        style={{height: "100%"}}
        isOpen={showModal}
        toggle={() => toggleShowModal(false)}
        id={"menu-modal"}
      >
        <i
          className="now-ui-icons ui-1_simple-remove pull-right mt-0 text-primary"
          style={{
            color: "black",
            fontSize: "30px",
            cursor: "pointer",
            position: "absolute",
            top: "15px",
            right: "15px",
            zIndex: "100",
          }}
          onClick={(e) => {
            toggleShowModal(false);
          }}
        ></i>
        <ModalBody
          className={"p-4 animated fadeInBottom"}
          style={{ height: "100%"}}
        >
          <div className={"mt-5"} style={{ fontSize: "35px", fontWeight: 200 }}>
            Weininvestments
          </div>
          <div className={"mt-5"} style={{ fontSize: "35px", fontWeight: 200 }}>
            FAQ
          </div>
          <div className={"mt-5"} style={{ fontSize: "35px", fontWeight: 200 }}>
            Über uns
          </div>
          <div className={"mt-5"} style={{ fontSize: "35px", fontWeight: 200 }}>
            Blog
          </div>
          <div
            className={"text-center px-4"}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "0",
              width: "100%",
            }}
          >
            <span className={"pull-left"}>AGB </span> <span>Datenschutz </span>{" "}
            <span className={"pull-right"}> Impressum</span>
          </div>
        </ModalBody>
      </Modal>
      <div
        className={"d-flex justify-content-between px-3 pt-2"}
        style={{
          width: "100%",
          position: "fixed",
          zIndex: 1000,
          background: "transparent",
        }}
      >
        <span
          style={{ display: "inline-block" }}
          className={"text-primary"}
          id={"logo-svg"}
        >
          <LogoLav width={"175px"} />
        </span>
        <span onClick={() => toggleShowModal(true)}>
          <span
            style={{ display: "inline-block" }}
            className={"text-primary"}
            id={"menu-svg"}
          >
            <MenuToClose2 width={"32px"} strokewidth={2} />
          </span>
        </span>
      </div>
    </>
  );
};

export default MobileNavbar;
