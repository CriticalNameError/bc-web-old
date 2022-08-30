import React, { useState, useEffect } from "react";
import { InlineWidget, openPopupWidget } from "react-calendly";
import ATime from "../icons/a-time";
import CheckSingle from "../icons/check-single";

const SelectCalendylDate = (props) => {
  return (
    <div className={"card mb-0"} style={{ width: props.width}}>
      <div className={"row mx-auto"} style={{}} id={"appointment"}>
        <div
          className={"col-12 col-md-6 my-auto px-5 text-left"}
          style={{ fontSize: "18px" }}
        >
          <div className={"mb-2"} style={{ color: "#bfac82" }}>
            <ATime width={"70px"} height={"70px"} strokewidth={3} />
          </div>
          <div className={"mb-4"} style={{ fontSize: "14px" }}>
            <span style={{ fontWeight: "bold", color: "#bfac82" }}>
              Dauer: 15 Minuten
            </span>
          </div>
          <div className={"mt-3"}>
            <p>
              Im Erstgespräch erfahren Sie
              <br />
              <div className={"mx-auto"}>
                <div
                  style={{
                    lineHeight: "1.5em",
                  }}
                >
                  <br />
                  <CheckSingle
                    width={"15px"}
                    height={"15px"}
                    strokewidth={3}
                  />{" "}
                  was Sie grundsätzlich über Wein Investments wissen sollten,{" "}
                  <br />
                  <CheckSingle
                    width={"15px"}
                    height={"15px"}
                    strokewidth={3}
                  />{" "}
                  wie Sie erfolgreich in Wein investieren und <br />
                  <CheckSingle
                    width={"15px"}
                    height={"15px"}
                    strokewidth={3}
                  />{" "}
                  Wesentliches zum Umgang mit Ihrem Weindepot. <br />
                  <br />
                </div>
              </div>
            </p>
            <p>
              Wir freuen uns auf Sie! <br />
              Das Team von Berghaus & Cie.
            </p>
          </div>
        </div>
        <div className={"col-12 col-md-6 p-0"}>
          <InlineWidget
            styles={{ height: "600px" }}
            url="https://calendly.com/berghausundcie/15-minutiges-erstgesprach"
            pageSettings={{
              backgroundColor: "bfac82",
              hideEventTypeDetails: true,
              hideLandingPageDetails: false,
              primaryColor: "ffffff",
              textColor: "ffffff",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SelectCalendylDate;


