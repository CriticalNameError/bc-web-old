import React from "react";
import Granim from "granim";
import { useEffect } from "react";




const CtaButton = (props) => {


useEffect(()=>{
    var granimInstance = new Granim({
        element: '.granim-btn',
        name: 'granim',
        opacity: [1, 1],
        elToSetClassOn: '.canvas-wrapper',
        transitionSpeed: 2000,
        direction: 'left-right',
        states : {
            
            "default-state": {
                gradients: [
                    ['#bfac82', '#d8cdb3'],
                    ['#d8cdb3', '#bfac82']
                ]
            }
        }
     });
}, [])
    return <span style={{position: "relative"}} className={"canvas-wrapper btn p-0 " + (props.extraClasses? props.extraClasses : "")}>
        <span className={"py-4 px-5"} style={{position: "relative", display: "inline-block", zIndex: "1"}}>
        {props.children}
        </span>
        <canvas className={"granim-btn p-0"} style={{borderRadius: ".1875rem", position:"absolute", width: "100%", height: "100%", top: "0", right: "0", left: "0", right: "0"}}></canvas>
    </span>
}

export default CtaButton;