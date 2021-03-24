import React, { useEffect, useState, useRef } from "react";
import NotificationAlert from "react-notification-alert";
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button
} from "reactstrap";
import NotificationPrompt from "../helpers/NotificationPrompt";

const InstallPWA = (props) => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
 
  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler, false);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
   <NotificationPrompt installPrompt={onClick}></NotificationPrompt>
  );
};

export default InstallPWA;