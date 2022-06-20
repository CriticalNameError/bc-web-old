import React, { useEffect } from "react";
import RightArrow from "../../icons/right-arrow";
import LeftArrow from "../../icons/left-arrow";
import CheckSingle from "../../icons/check-single";
import {cta, primary} from "../../helpers/colorScheme";
const ScrollSlider = () => {
  useEffect(() => {
    const wrapper = document.querySelector(".scroll-wrapper");
    const el = document.querySelector(".scroll");
    const filler = document.querySelector(".scroll-filler");
    const position = document.querySelector(".scroll-position-inner");
    const inner = document.querySelector(".scroll-inner");
    const btns = {
      prev: document.querySelector(".scroll-btn.prev"),
      next: document.querySelector(".scroll-btn.next"),
    };

    const lerp = (a, b, n) => {
      return (1 - n) * a + n * b;
    };

    const padding = 20;

    let scrollNow = 0;

    filler.style.width = inner.offsetWidth + padding * 2 + "px";
    position.style.width =
      (wrapper.offsetWidth / (inner.offsetWidth + padding * 2)) * 100 + "%";

    const offset = 150;
    const angle = 25;
    const z = 15;

    function render() {
      let now = lerp(scrollNow, wrapper.scrollLeft, 0.15);
      gsap.set(el, { x: -now });
      gsap.set(position, { x: (now / wrapper.offsetWidth) * 100 + "%" });

      document.querySelectorAll(".scroll-item").forEach((item) => {
        let elPos = item.offsetLeft + item.offsetWidth / 2 - scrollNow;

        if (elPos > wrapper.offsetWidth - offset) {
          let q = (wrapper.offsetWidth - elPos) / offset;
          gsap.set(item, { rotateY: -(angle - q * angle), z: z - z * q });
        } else if (elPos < offset) {
          let q = elPos / offset;
          gsap.set(item, { rotateY: angle - q * angle, z: z - z * q });
        } else {
          gsap.set(item, { rotateY: 0, z: 0 });
        }
      });

      scrollNow = now;

      if (wrapper.scrollLeft === 0) btns.prev.disabled = true;
      else if (
        inner.offsetWidth - wrapper.scrollLeft ===
        wrapper.offsetWidth - padding * 2
      )
        btns.next.disabled = true;
      else {
        btns.prev.disabled = false;
        btns.next.disabled = false;
      }
      requestAnimationFrame(render);
    }

    render();

    function nextBtn() {
      wrapper.scrollLeft +=
        document.querySelector(".scroll-item").offsetWidth * 2 - 20;
    }
    function prevBtn() {
      wrapper.scrollLeft -=
        document.querySelector(".scroll-item").offsetWidth * 2 - 20;
    }
  }, []);

  return (
    <main className={"main-scrol-slider"}>
      <div class="scroll-wrapper">
        <div class="scroll-filler"></div>
        <div class="scroll">
          <div class="scroll-inner">
            <div href="#" class="scroll-item bg-light">
              <center className={"mb-3"}>
                {" "}
                <span className={"text-success"}>
                  <CheckSingle width={"40px"} strokewidth={4} />
                </span>
              </center>

              <h2>berghauscie.de aufrufen </h2>
              {/* <span class="scroll-item-date">5 Jun 2020</span> */}
            </div>
            <div href="#" class="scroll-item" style={{ background: cta }}>
              <center className={"mb-3"}>
                {" "}
                <img src={"../MyRobot.svg"} width={"40px"} />
              </center>

              <h2>wineTelligence starten </h2>
              {/* <span class="scroll-item-date">5 Jun 2020</span> */}
            </div>

            <div href="#" class="scroll-item bg-light">
              <h2>Persönliches Angebot erhalten</h2>
              {/* <span class="scroll-item-date">3 Jun 2020</span> */}
            </div>
            <div
              href="#"
              class="scroll-item text-white"
              style={{
                background: "#232526",
                background:
                  "-webkit-linear-gradient(to right, #232526, #414345)",
                backgroundImage: "linear-gradient(to right, #232526, #414345)",
              }}
            >
              <h2>Noch Fragen? Vereinbaren Sie ein Gespräch!</h2>
              {/* <span class="scroll-item-date">bees</span> */}
            </div>
            <div href="#" class="scroll-item" style={{background: primary}}>
              <h2>Verbindliche Bestellung und Prüfung durch uns</h2>
              <span class="scroll-item-date">---------</span>
            </div>
            <div href="#" class="scroll-item bg-success" >
              <h2>Bezahlung und Versand in den Genfer Zollfreihafen</h2>
              {/* <span class="scroll-item-date">ъ</span> */}
            </div>
            {/* <a href="#" class="scroll-item blue"></a>
            <div class="scroll-item ghost">
              <h2></h2>
              <span class="scroll-item-date">For real</span>
            </div> */}
          </div>
        </div>
      </div>
      <div class="scroll-position-wrapper">
        <button class="scroll-btn prev" onclick={() => prevBtn()}>
          <LeftArrow width={"15px"} />
        </button>
        <div class="scroll-position">
          <div class="scroll-position-inner"></div>
        </div>
        <button class="scroll-btn next" onclick={() => nextBtn()}>
          <RightArrow width={"15px"} />
        </button>
      </div>
    </main>
  );
};

export default ScrollSlider;
