import React, { useEffect, useState } from "react";
import LogoLav from "../../icons/logo_lav";
import MenuToClose2 from "../../icons/menu-to-close-2";
import LeftArrow from "../../icons/left-arrow";
import LogIn from "../../icons/log-in";
import { Modal, ModalBody } from "reactstrap";
import ReactDOMServer from "react-dom/server";
import router, { withRouter } from "next/router";
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
        style={{ height: "100%" }}
        isOpen={showModal}
        toggle={() => toggleShowModal(false)}
        id={"menu-modal"}
        backdrop={false}
      >
        <span
          style={{ transition: "color 1.5s ease" }}
          className={"pull-left text-primary pl-3 pt-2"}
          id={"logo-svg"}
          onClick={() => router.push("index-mobile")}
        >
          <LogoLav width={"175px"} />
        </span>
        <i
          className="now-ui-icons ui-1_simple-remove pull-right mt-0 text-primary"
          style={{
            color: "black",
            fontSize: "30px",
            cursor: "pointer",
            position: "absolute",
            top: "0.5rem",
            right: "1.0rem",
            zIndex: "100",
          }}
          onClick={(e) => {
            toggleShowModal(false);
          }}
        ></i>
        <ModalBody
          className={"p-4 animated fadeInBottom"}
          style={{ height: "100%" }}
        >
          <div className={"mt-5"} style={{ fontSize: "30px", fontWeight: 200 }}>
            <span
              onClick={() => {
                router.push("/wein-investments");
                toggleShowModal(false);
              }}
            >
              Weininvestments
            </span>
          </div>
          <div className={"mt-5"} style={{ fontSize: "30px", fontWeight: 200 }}>
            <span
              onClick={() => {
                router.push("/faq");
                toggleShowModal(false);
              }}
            >
              FAQ
            </span>
          </div>
          <div className={"mt-5"} style={{ fontSize: "30px", fontWeight: 200 }}>
            <span
              onClick={() => {
                router.push("/ueber-uns");
                toggleShowModal(false);
              }}
            >
              Über uns
            </span>
          </div>
          <div className={"mt-5"} style={{ fontSize: "30px", fontWeight: 200 }}>
            <span
              onClick={() => {
                router.push("/blog");
                toggleShowModal(false);
              }}
            >
              Magazin
            </span>
          </div>
          <a href={"https://weindepot.berghauscie.de"} target={"_blank"}>
            <div
              className={"mt-5 btn btn-primary"}
              style={{ fontSize: "20px", fontWeight: 200 }}
            >
              <LogIn
                width={"20px"}
                height={"20px"}
                style={{ display: "inline-block" }}
                strokewidth={3}
              />
              <span className={"ml-2"}>Weindepot</span>
              
            </div>
          </a>
          <div
            className={"text-center px-4"}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "0",
              width: "100%",
            }}
          >
            <span
              className={"pull-left"}
              onClick={() => {
                router.push("/legal/allgemeine-geschaeftsbedingungen");
                toggleShowModal(false);
              }}
            >
              AGB{" "}
            </span>{" "}
            <span
              onClick={() => {
                router.push("/legal/datenschutz");
                toggleShowModal(false);
              }}
            >
              Datenschutz{" "}
            </span>{" "}
            <span
              className={"pull-right"}
              onClick={() => {
                router.push("/legal/impressum");
                toggleShowModal(false);
              }}
            >
              {" "}
              Impressum
            </span>
          </div>
        </ModalBody>
      </Modal>
      <div
        className={"d-flex justify-content-between px-3 pt-2"}
        style={{
          width: "100%",
          position: "fixed",
          zIndex: 2000,
          background: "transparent",
        }}
      >
        <span
          style={{ display: "inline-block", transition: "color 1.5s ease" }}
          className={""}
          id={"logo-svg"}
          onClick={() => router.push("index-mobile")}
        >
          <LogoLav width={"175px"} />
        </span>
        <span onClick={() => toggleShowModal(true)}>
          <span
            style={{ display: "inline-block", transition: "color 1.5s ease" }}
            className={""}
            id={"menu-svg"}
          >
            <MenuToClose2 width={"32px"} strokewidth={2} />
          </span>
        </span>
      </div>
    </>
  );
};

export default withRouter(MobileNavbar);
