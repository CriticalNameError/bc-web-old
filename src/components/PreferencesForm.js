import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
  Input,
} from "reactstrap";
import {
  cta,
  primary,
  primary_t10,
  primary_t50,
  primary_t60,
} from "../helpers/colorScheme";
import Favorite from "icons/favorite";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
// import "../../src/assets/scss/custom.css";
import MoneyCoins from "icons/money-coins";
import MoneyBag from "icons/money-bag";
import ScrollHorizontal from "icons/scroll-horizontal";
import Security from "icons/security";
import Sword from "icons/sword";
import Reading from "icons/reading";
import Hat3 from "icons/hat-3";
import Mail from "icons/mail";
import CandlestickChart from "icons/candlestick-chart";
import World1 from "icons/world-1";
import Home from "icons/home";
import Gold from "icons/gold";
import Watch2 from "icons/watch-2";
import Cryptography from "icons/cryptography";
import CheckSingle from "icons/check-single";
import CountUp from "react-countup";
import BottleWine from "icons/bottle-wine";
import Anagram100 from "icons/Anagram-100";
// import { useMutation } from "react-apollo";
import { gql, useQuery, useMutation } from "@apollo/client";
import Edit from "icons/edit";
import CurrencyFormat from "react-currency-format";
import FingerSnap from "icons/finger-snap";
import Ecology from "icons/ecology";
import HandsHeart from "icons/hands-heart";
import Particles from "react-tsparticles";
import Slider from "react-slick";

const GET_RECOMMENDATIONS = gql`
  {
    getLatestPreferencesProfile(source: "auto") {
      wineloverVsInvestor
      investmentHorizon
      takesRisk
      investmentSumIntended
      recommendedPosition {
        offer {
          id
          entityPriceNet
          priceBtl: sellPriceBtl
          priceBtlStr: sellPriceBtlStr
          priceCaseStr: sellPriceCaseStr
          pricePerLiterStr: sellPricePerLiterStr
          onRequest
          limitedAvailability
          vintage {
            id
            title
            gwsRecord {
              score
            }
            wine {
              lwin
              image {
                url
                rendition(width: 450, jpegquality: 10) {
                  url
                }
              }
              winery {
                title
                statistics
              }
            }
            takesRiskPrediction
            wineloverVsInvestorPrediction
            investmentHorizonPrediction
            statistics
          }
          bottleSize {
            title
          }
          caskOf
          partialOfferRel {
            quantityAvailable
          }
        }
        amount
      }
    }
  }
`;

const GET_LATEST_CLIENT_PREFERENCES = gql`
  {
    getLatestPreferencesProfile {
      wineloverVsInvestor
      investmentHorizon
      takesRisk
      stocks
      etfs
      realestate
      metals
      watches
      crypto
      investmentSumIntended
    }
  }
`;

const POST_CLIENT_PREFERENCES = gql`
  mutation createPreferencesProfileFromWebsite(
    $wineloverVsInvestor: Int!
    $investmentHorizon: Int!
    $takesRisk: Int!
    $stocks: Boolean!
    $etfs: Boolean!
    $realestate: Boolean!
    $metals: Boolean!
    $watches: Boolean!
    $crypto: Boolean!
    $investmentSumIntended: Decimal!
  ) {
    createPreferencesProfileFromWebsite(
      wineloverVsInvestor: $wineloverVsInvestor
      investmentHorizon: $investmentHorizon
      takesRisk: $takesRisk
      stocks: $stocks
      etfs: $etfs
      realestate: $realestate
      metals: $metals
      watches: $watches
      crypto: $crypto
      investmentSumIntended: $investmentSumIntended
    ) {
      success
      errors
      uid
      rec {
        id
        recommendedPosition {
          id
          offer {
            caskOf
            bottleSize {
              title
            }
            sellPricePerLiterStr
            sellPriceBtlStr
            sellPriceCaseStr
            vintage {
              wine {
                winery {
                  title
                }
                title
                classification {
                  title
                }
                image {
                  rendition(height: 150, jpegquality: 8) {
                    url
                  }
                }
              }
              title
              year
            }
          }
        }
      }
    }
  }
`;

const POST_EMAIL_FOR_PORTFOLIO_LINK = gql`
  mutation requestRecommendationLinkWithEmail($email: String!, $uid: String!) {
    requestRecommendationLinkWithEmail(email: $email, uid: $uid) {
      success
      errors
    }
  }
`;

const PreferencesForm = (props) => {
  const [showModal, toggleShowModal] = useState(true);
  const [showPortfolioModal, toggleShowPortfolioModal] = useState(false);
  const [emailValid, toggleEmailValid] = useState("");
  const [secondShowModal, toggleSecondShowModal] = useState(false);
  const [step, setStep] = useState(0);
  const [investVsEnjoy, setInvestVsEnjoy] = useState(50);
  const [responsibilityVsRisk, setResponsibilityVsRisk] = useState(50);
  const [investmentHorizon, setInvestmentHorizon] = useState(15);
  const [showInstruction, toggleShowInstruction] = useState(true);
  const [stocks, toggleStocks] = useState(false);
  const [etfs, toggleEtfs] = useState(false);
  const [realestate, toggleReslestate] = useState(false);
  const [watches, toggleWatches] = useState(false);
  const [metals, toggleMetals] = useState(false);
  const [crypto, toggleCrypto] = useState(false);
  const [recommendation, setRecommendation] = useState(null);
  const [investmentSumTunerPosition, setInvestmentSumTunerPosition] =
    useState(50);
  const [investmentSum, setInvestmentSum] = useState(15000);
  const [done, setDone] = useState(false);
  const [dataProtection, toggleDataProtection] = useState(false);
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [countupFinished, setCountupFinished] = useState(false);
  const [countupFinishedDelayed, setCountupFinishedDelayed] = useState(false);
  useEffect(() => {
    if (countupFinished == true) {
      document
        .getElementById("countdown-animation")
        .classList.add("animated", "fadeOut", "slower");
      setTimeout(function () {
        document.getElementById("countdown-animation").classList.add("d-none");
        setCountupFinishedDelayed(true);
      }, 500);
    }
  }, [countupFinished]);
  //   const { loading, error, data, refetch } = useQuery(
  //     GET_LATEST_CLIENT_PREFERENCES
  //   );

  const emailRe =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  useEffect(() => {
    try {
      if (
        step == 5 ||
        step == "quote_preview" ||
        step == "check_mails" ||
        step == "used_allready" ||
        step == "has_account"
      ) {
        document.getElementById("form-header").classList.remove("fadeIn");
        document.getElementById("form-header").classList.add("fadeOut");
        setTimeout(() => {
          document.getElementById("form-header").classList.add("d-none");
        }),
          500;

        document.getElementById("form-card").style.background = "transparent";
        document.getElementById("form-card").style.boxShadow = "none";
      } else if (step == 6) {
        console.log("... getting Portfolio!");
      } else if (step > 6) {
        console.log("... sending Mail!");
      } else {
        document.getElementById("form-header").classList.remove("fadeOut");
        document.getElementById("form-header").classList.add("fadeIn");
        if (!props.mobile) {
          document.getElementById("form-card").style.background = "white";
          document.getElementById("form-card").style.boxShadow =
            "0 1px 15px 1px rgb(39 39 39 / 10%)";
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [step]);

  useEffect(() => {
    toggleEmailValid(emailRe.test(email));
  }, [email]);

  //   useEffect(function subscribeToWheelEvent() {
  //     const updateScroll = function (e) {
  //       if (!!e.deltaY) {
  //         setState((currentState) => {
  //           const delta = Math.sign(e.deltaY) * 10.0;
  //           const val = Math.max(0, currentState.investVsEnjoy + delta);
  //           return { investVsEnjoy: val };
  //         });
  //       } else {
  //         console.log("zero", e.deltaY);
  //       }
  //     };
  //     document.getElementById("letsgo-slide").addEventListener("mousewheel", updateScroll);
  //     console.log("subscribed to wheelEvent");
  //     return function () {
  //       window.removeEventListener("mousewheel", updateScroll);
  //     };
  //   }, []);

  function logit(e) {
    if (document.getElementsByClassName("fp-viewing-letsgo")) {
      if (e.deltaY < 0) {
        if (step == 0) {
          setInvestVsEnjoy(Math.min(investVsEnjoy + 5, 100));
        } else if (step == 2) {
          setResponsibilityVsRisk(Math.min(responsibilityVsRisk + 5, 100));
        } else if (step == 3) {
          setInvestmentSumTunerPosition(
            Math.min(investmentSumTunerPosition + 2, 100)
          );
        } else if (step == 4) {
          setInvestmentHorizon(Math.min(investmentHorizon + 1, 25));
        }
      } else {
        if (step == 0) {
          setInvestVsEnjoy(Math.max(investVsEnjoy - 5, 0));
        } else if (step == 2) {
          setResponsibilityVsRisk(Math.max(responsibilityVsRisk - 5, 0));
        } else if (step == 3) {
          setInvestmentSumTunerPosition(
            Math.max(investmentSumTunerPosition - 1.5, 0)
          );
        } else if (step == 4) {
          setInvestmentHorizon(Math.max(investmentHorizon - 1, 5));
        }
      }
    }
  }

  useEffect(() => {
    let new_sum =
      2.5 *
      (0.14 *
        investmentSumTunerPosition *
        investmentSumTunerPosition *
        investmentSumTunerPosition -
        5.5 * investmentSumTunerPosition * investmentSumTunerPosition +
        102.0499 * investmentSumTunerPosition +
        2180.599 -
        200);
    if (new_sum < 5000) {
      new_sum = Math.round(new_sum / 500) * 500;
    } else if (new_sum < 10000) {
      new_sum = Math.round(new_sum / 1000) * 1000;
    } else if (new_sum < 25000) {
      new_sum = Math.round(new_sum / 2500) * 2500;
    } else if (new_sum < 50000) {
      new_sum = Math.round(new_sum / 5000) * 5000;
    } else if (new_sum < 100000) {
      new_sum = Math.round(new_sum / 10000) * 10000;
    } else if (new_sum < 250000) {
      new_sum = Math.round(new_sum / 25000) * 25000;
    }
    setInvestmentSum(Math.max(new_sum, 5000));
  }, [investmentSumTunerPosition]);

  useEffect(() => {
    try {
      function watchWheel() {
        document
          .getElementById("letsgo-slide")
          .addEventListener("wheel", logit);
      }
      watchWheel();
      return () => {
        document
          .getElementById("letsgo-slide")
          .removeEventListener("wheel", logit);
      };
    } catch (error) {
      console.log(error);
    }
  });

  const [postPreferences, { mutData, mutLoading, mutError }] = useMutation(
    POST_CLIENT_PREFERENCES,

    {
      onCompleted: (mutData) => {
        setDone(true);
        while (
          mutData.createPreferencesProfileFromWebsite.rec.recommendedPosition
            .length < 3
        ) {
          mutData.createPreferencesProfileFromWebsite.rec.recommendedPosition.push(
            mutData.createPreferencesProfileFromWebsite.rec
              .recommendedPosition[0]
          );
        }
        setRecommendation(mutData);
        setUid(mutData.createPreferencesProfileFromWebsite.uid);
        console.log(
          mutData.createPreferencesProfileFromWebsite.rec.recommendedPosition[0]
            .offer.vintage.title
        );
      },
      variables: {
        wineloverVsInvestor: investVsEnjoy,
        investmentHorizon: investmentHorizon,
        takesRisk: responsibilityVsRisk,
        stocks: stocks,
        etfs: etfs,
        realestate: realestate,
        metals: metals,
        watches: watches,
        crypto: crypto,
        investmentSumIntended: investmentSum,
      },

      //   refetchQueries: [{ query: GET_RECOMMENDATIONS }],
    }
  );

  const [postEmail, { data, loading, error }] = useMutation(
    POST_EMAIL_FOR_PORTFOLIO_LINK,

    {
      onCompleted: (data) => {
        if (data.requestRecommendationLinkWithEmail.success == true) {
          console.log(data);
          setStep("check_mails");
        } else if (
          data.requestRecommendationLinkWithEmail.errors[0] ==
          "Email requested already"
        ) {
          setStep("used_allready");
        } else {
          setStep("has_account");
        }
      },
      variables: {
        email: email,
        uid: uid,
      },
    }
  );

  const prevInvestmentSumRef = useRef();
  const prevInvestmentHorizonRef = useRef();
  const submitForm = () => {
    postPreferences();
    toggleSecondShowModal(false);
  };

  useEffect(() => {
    if (props.showModal != undefined) {
      toggleShowModal(props.showModal);
    }
    if (props.secondShowModal != undefined) {
      toggleSecondShowModal(props.secondShowModal);
    }
  }, [props.showModal, props.secondShowModal]);

  useEffect(() => {
    prevInvestmentSumRef.current = investmentSum;
    prevInvestmentHorizonRef.current = investmentHorizon;
    if (showModal && props.isInitial) {
      try {
        document.getElementsByClassName(
          "modal-backdrop"
        )[0].style.backgroundImage =
          "linear-gradient(-90deg, rgba(123, 99, 153, 1) 0%, #7b629b 100%)";
        document.getElementsByClassName("modal-backdrop")[0].style.opacity =
          "1";
        console.log(
          "backdrop:",
          document.getElementsByClassName("modal-backdrop")[0]
        );
      } catch (error) {}
    }
  });

  //   useEffect(() => {
  //     if (data) {
  //       let prefs = data.getLatestPreferencesProfile;
  //       console.log("THIS IS THE PREFS: ", prefs);
  //       setInvestVsEnjoy(prefs.wineloverVsInvestor);
  //       setInvestmentHorizon(prefs.investmentHorizon);
  //       setResponsibilityVsRisk(prefs.takesRisk);
  //       toggleStocks(prefs.stocks);
  //       toggleEtfs(prefs.etfs);
  //       toggleReslestate(prefs.realestate);
  //       toggleMetals(prefs.metals);
  //       toggleWatches(prefs.watches);
  //       toggleCrypto(prefs.crypto);
  //       setInvestmentSum(parseFloat(prefs.investmentSumIntended));
  //     }
  //   }, [data]);

  useEffect(() => {
    if (done && props.isInitial) {
      document.getElementsByClassName("modal")[0].style.display = "none";
      document.getElementById("anagram-overlay").classList.remove("d-none");
      setTimeout(() => {
        document.getElementById("greeting-col").classList.add("fadeOut");
      }, 2300);
      setTimeout(() => {
        toggleShowModal(false);
        document.getElementById("anagram-overlay").classList.add("d-none");
      }, 3000);
    }
  }, [done]);

  //   useEffect(() => {
  //     console.log("add wheel listener");
  //     document
  //       .getElementById("letsgo-slide")
  //       .addEventListener("wheel", function (e) {
  //         console.log("wheel event! ", e.deltaY);
  //         if (e.deltaY < 0) {
  //           setInvestVsEnjoy((currentInvestVsEnjoy) => {
  //             currentInvestVsEnjoy + 1;
  //           });
  //         } else {
  //           setInvestVsEnjoy((currentInvestVsEnjoy) => {
  //             currentInvestVsEnjoy - 1;
  //           });
  //         }
  //         e.preventDefault();
  //         e.stopPropagation();
  //       });
  //   }, []);

  const prevInvestmentSum = prevInvestmentSumRef.current;
  const prevInvestmentHorizon = prevInvestmentHorizonRef.current;

  const Form = {
    0: (
      <ModalBody
        className={"px-4 animated fadeIn slow " + (props.mobile ? "" : "mt-4")}
      >
        <h5 style={{ fontSize: "21px" }}>Ich bin...</h5>

        <Row style={{ height: "228px" }} className={"mb-5"}>
          <Col
            xs={3}
            md={3}
            className={"my-auto mx-auto text-center px-0 px-md-4 order-first"}
          >
            <div className={"mx-auto text-primary"} style={{ height: "50px" }}>
              <Favorite
                width={String(38 - ((investVsEnjoy - 50) / 50) * 15) + "px"}
                strokewidth={3}
              />
            </div>
            <br />
            <span
              className={"mt-auto"}
              style={{
                fontSize: "16px",
                opacity: 1 - ((investVsEnjoy - 50) / 50) * 0.5,
              }}
            >
              Liebhaber
            </span>
          </Col>
          <Col
            xs={12}
            md={6}
            className={"my-auto mx-auto order-last order-md-first"}
          >
            <Input
              style={{ border: "0" }}
              id="exampleRange"
              className={"d-inline"}
              value={investVsEnjoy}
              name="range"
              type="range"
              min={0}
              max={100}
              onChange={(e) => {
                setInvestVsEnjoy(e.target.value);
                toggleShowInstruction(false);
              }}
            />
            {!secondShowModal ? (
              <div
                className={"text-center mt-2 animated headShake slow infinite "}
                style={
                  ({ minHeight: "40px" },
                  showInstruction ? null : { visibility: "hidden" })
                }
              >
                {" "}
                <span>
                  <ScrollHorizontal width={"40px"} strokewidth={2} />
                </span>
              </div>
            ) : null}
          </Col>
          <Col
            xs={3}
            md={3}
            className={"my-auto mx-auto text-center px-0 px-md-4"}
          >
            <div className={"mx-auto text-primary"} style={{ height: "50px" }}>
              <MoneyBag
                width={String(38 + ((investVsEnjoy - 50) / 50) * 15) + "px"}
                strokewidth={2}
              />
            </div>
            <br />
            <span
              className={"mt-auto"}
              style={{
                fontSize: "16px",
                opacity: 1 + ((investVsEnjoy - 50) / 50) * 0.5,
              }}
            >
              Investor
            </span>
          </Col>
        </Row>
      </ModalBody>
    ),
    4: (
      <ModalBody
        className={"px-4 animated fadeIn slow " + (props.mobile ? "" : "mt-4")}
      >
        <h5 style={{ fontSize: "21px" }}>Mein Anlagehorizont liegt bei....</h5>

        <div
          className={"text-center"}
          style={{ fontSize: "28px", fontWeight: "200" }}
        >
          {/* {investmentSum == 2000 ? "< " : ""} */}

          <CountUp
            start={prevInvestmentHorizon}
            end={investmentHorizon}
            duration={0.3}
            separator="."
            decimals={0}
            decimal=","
            prefix=""
            suffix=" Jahren"
            // onEnd={() => console.log("Ended! 👏")}
            // onStart={() => console.log("Started! 💨")}
          />
          {investmentHorizon == 25 ? " (oder mehr) " : ""}
        </div>

        <Row style={{ height: "186px" }} className={"mb-5"}>
          <Col
            xs={3}
            md={3}
            className={"my-auto mx-auto text-center px-0 px-md-4 order-first"}
          >
            <div className={"mx-auto text-primary"} style={{ height: "50px" }}>
              <FingerSnap
                width={String(38 - ((investmentHorizon - 15) / 15) * 15) + "px"}
                strokewidth={3}
              />
            </div>
            <br />
            <span
              className={"mt-auto"}
              style={{
                fontSize: "16px",
                opacity: 1 - ((investmentHorizon - 15) / 15) * 0.5,
              }}
            >
              5 Jahren
            </span>
          </Col>
          <Col
            xs={12}
            md={6}
            className={"my-auto mx-auto order-last order-md-first"}
          >
            <Input
              style={{ border: "0" }}
              id="exampleRange"
              className={"d-inline"}
              value={investmentHorizon}
              name="range"
              type="range"
              min={5}
              max={25}
              onChange={(e) => {
                setInvestmentHorizon(e.target.value);
              }}
            />
            <div
              className={"text-center mt-2 animated flash slower infinite "}
              style={{ visibility: "hidden" }}
            >
              {" "}
              <ScrollHorizontal width={"35px"} strokewidth={2} />
            </div>
          </Col>
          <Col
            xs={3}
            md={3}
            className={"my-auto mx-auto text-center px-0 px-md-4"}
          >
            <div className={"mx-auto text-primary"} style={{ height: "50px" }}>
              <HandsHeart
                width={String(38 + ((investmentHorizon - 15) / 15) * 15) + "px"}
                strokewidth={2}
              />
            </div>
            <br />
            <span
              className={"mt-auto"}
              style={{
                fontSize: "16px",
                opacity: 1 + ((investmentHorizon - 15) / 15) * 0.5,
              }}
            >
              {"25 Jahren \noder mehr"}
            </span>
          </Col>
        </Row>
      </ModalBody>
    ),
    2: (
      <ModalBody
        className={"px-4 animated fadeIn slow " + (props.mobile ? "" : "mt-4")}
      >
        <h5 style={{ fontSize: "21px" }}>Ich investiere im Allgemeinen....</h5>

        <Row style={{ height: "228px" }} className={"mb-5"}>
          <Col
            xs={3}
            md={3}
            className={"my-auto mx-auto text-center px-0 px-md-4 order-first"}
          >
            <div className={"mx-auto text-primary"} style={{ height: "50px" }}>
              <Security
                width={
                  String(38 - ((responsibilityVsRisk - 50) / 50) * 15) + "px"
                }
                strokewidth={3}
              />
            </div>
            <br />
            <span
              className={"mt-auto"}
              style={{
                fontSize: "16px",
                opacity: 1 - ((responsibilityVsRisk - 50) / 50) * 0.5,
              }}
            >
              sicherheits-
              <br />
              orientiert
            </span>
          </Col>
          <Col
            xs={12}
            md={6}
            className={"my-auto mx-auto order-last order-md-first"}
          >
            <Input
              style={{ border: "0" }}
              id="exampleRange"
              className={"d-inline"}
              value={responsibilityVsRisk}
              name="range"
              type="range"
              min={0}
              max={100}
              onChange={(e) => {
                setResponsibilityVsRisk(e.target.value);
              }}
            />
            <div
              className={"text-center mt-2 animated flash slower infinite "}
              style={{ visibility: "hidden" }}
            >
              {" "}
              <ScrollHorizontal width={"35px"} strokewidth={2} />
            </div>
          </Col>
          <Col
            xs={3}
            md={3}
            className={"my-auto mx-auto text-center px-0 px-md-4"}
          >
            <div className={"mx-auto text-primary"} style={{ height: "50px" }}>
              <Sword
                width={
                  String(38 + ((responsibilityVsRisk - 50) / 50) * 15) + "px"
                }
                strokewidth={2}
              />
            </div>
            <br />
            <span
              className={"mt-auto"}
              style={{
                fontSize: "16px",
                opacity: 1 + ((responsibilityVsRisk - 50) / 50) * 0.5,
              }}
            >
              risiko-
              <br />
              bewusst
            </span>
          </Col>
        </Row>
      </ModalBody>
    ),
    1: (
      <ModalBody className={"px-4 " + (props.mobile ? "" : "mt-4")}>
        <h5 style={{ fontSize: "21px" }}>Ich habe bereits Erfahrung mit....</h5>

        <Row style={{ height: "90px" }} className={"mb-5"}>
          <Col
            xs={4}
            md={4}
            className={"mx-auto my-auto text-center px-1 px-md-3"}
          >
            <div
              className={" mx-auto text-center my-auto"}
              style={{ height: "70px" }}
            >
              <div
                style={{ cursor: "pointer" }}
                className={
                  "mx-auto  card py-3 " +
                  (stocks ? "bg-primary text-white" : "text-primary")
                }
                onClick={() => toggleStocks(!stocks)}
              >
                <div style={{ height: "16px" }}>
                  {stocks ? (
                    <div className={"pull-right mt-n2 pr-3"}>
                      <CheckSingle width={"16px"} strokewidth={8} />
                    </div>
                  ) : null}
                </div>
                <br />
                <div className={"mt-n4"}>
                  <CandlestickChart width={"38px"} strokewidth={3} />
                </div>
                <br />
                <div
                  className={""}
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Aktien
                </div>
              </div>
            </div>
          </Col>

          <Col
            xs={4}
            md={4}
            className={"mx-auto my-auto text-center px-1 px-md-3"}
          >
            <div
              className={" mx-auto text-center my-auto"}
              style={{ height: "70px" }}
            >
              <div
                style={{ cursor: "pointer" }}
                className={
                  "mx-auto card py-3 " +
                  (etfs ? "bg-primary text-white" : "text-primary")
                }
                onClick={() => toggleEtfs(!etfs)}
              >
                <div style={{ height: "16px" }}>
                  {etfs ? (
                    <div className={"pull-right mt-n2 pr-3"}>
                      <CheckSingle width={"16px"} strokewidth={8} />
                    </div>
                  ) : null}
                </div>
                <br />
                <div className={"mt-n4"}>
                  <World1 width={"38px"} strokewidth={3} />
                </div>
                <br />
                <div
                  className={""}
                  style={{
                    fontSize: "14px",
                  }}
                >
                  ETFs
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={4}
            md={4}
            className={"mx-auto my-auto text-center px-1 px-md-3"}
          >
            <div
              className={" mx-auto text-center my-auto"}
              style={{ height: "70px" }}
            >
              <div
                style={{ cursor: "pointer" }}
                className={
                  "mx-auto card py-3 " +
                  (realestate ? "bg-primary text-white" : "text-primary")
                }
                onClick={() => toggleReslestate(!realestate)}
              >
                <div style={{ height: "16px" }}>
                  {realestate ? (
                    <div className={"pull-right mt-n2 pr-3"}>
                      <CheckSingle width={"16px"} strokewidth={8} />
                    </div>
                  ) : null}
                </div>
                <br />
                <div className={"mt-n4"}>
                  <Home width={"38px"} strokewidth={3} />
                </div>
                <br />
                <div
                  className={""}
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Immobilien
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ height: "90px" }} className={"mb-5"}>
          <Col
            xs={4}
            md={4}
            className={"mx-auto my-auto text-center px-1 px-md-3"}
          >
            <div
              className={" mx-auto text-center my-auto"}
              style={{ height: "70px" }}
            >
              <div
                style={{ cursor: "pointer" }}
                className={
                  "mx-auto card py-3 " +
                  (metals ? "bg-primary text-white" : "text-primary")
                }
                onClick={() => toggleMetals(!metals)}
              >
                <div style={{ height: "16px" }}>
                  {metals ? (
                    <div className={"pull-right mt-n2 pr-3"}>
                      <CheckSingle width={"16px"} strokewidth={8} />
                    </div>
                  ) : null}
                </div>
                <br />
                <div className={"mt-n4"}>
                  <Gold width={"38px"} strokewidth={3} />
                </div>
                <br />
                <div
                  className={""}
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Edelmetallen
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={4}
            md={4}
            className={"mx-auto my-auto text-center px-1 px-md-3"}
          >
            <div
              className={" mx-auto text-center my-auto"}
              style={{ height: "70px" }}
            >
              <div
                style={{ cursor: "pointer" }}
                className={
                  "mx-auto card py-3 " +
                  (watches ? "bg-primary text-white" : "text-primary")
                }
                onClick={() => toggleWatches(!watches)}
              >
                <div style={{ height: "16px" }}>
                  {watches ? (
                    <div className={"pull-right mt-n2 pr-3"}>
                      <CheckSingle width={"16px"} strokewidth={8} />
                    </div>
                  ) : null}
                </div>
                <br />
                <div className={"mt-n4"}>
                  <Watch2 width={"38px"} strokewidth={3} />
                </div>
                <br />
                <div
                  className={""}
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Luxus-Uhren
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={4}
            md={4}
            className={"mx-auto my-auto text-center px-1 px-md-3"}
          >
            <div
              className={" mx-auto text-center my-auto"}
              style={{ height: "70px" }}
            >
              <div
                style={{ cursor: "pointer" }}
                className={
                  "mx-auto card py-3 " +
                  (crypto ? "bg-primary text-white" : "text-primary")
                }
                onClick={() => toggleCrypto(!crypto)}
              >
                <div style={{ height: "16px" }}>
                  {crypto ? (
                    <div className={"pull-right mt-n2 pr-3"}>
                      <CheckSingle width={"16px"} strokewidth={8} />
                    </div>
                  ) : null}
                </div>
                <br />
                <div className={"mt-n4"}>
                  <Cryptography width={"38px"} strokewidth={3} />
                </div>
                <br />
                <div
                  className={""}
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Crypto
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </ModalBody>
    ),
    3: (
      <ModalBody
        className={"px-4 animated fadeIn slow " + (props.mobile ? "" : "mt-4")}
      >
        <h5 style={{ fontSize: "21px" }}>
          So viel würde ich in Wein investieren....
        </h5>

        <div
          className={"text-center"}
          style={{ fontSize: "28px", fontWeight: "200" }}
        >
          {investmentSum == 5000 ? "" : ""}
          {investmentSum == 250000 ? "> " : ""}
          <CountUp
            start={prevInvestmentSum}
            end={investmentSum}
            duration={0.3}
            separator="."
            decimals={0}
            decimal=","
            prefix=""
            suffix=" €"
            // onEnd={() => console.log("Ended! 👏")}
            // onStart={() => console.log("Started! 💨")}
          />
        </div>
        <Row style={{ height: "186px" }} className={"mb-5"}>
          <Col
            xs={3}
            md={3}
            className={"my-auto mx-auto text-center px-0 px-md-4 order-first"}
          >
            <div className={"mx-auto text-primary"} style={{ height: "50px" }}>
              <BottleWine width={"20px"} strokewidth={3} />
            </div>
            <br />
            <span
              className={"mt-auto"}
              style={{
                fontSize: "16px",
                opacity: 1 - ((investmentSumTunerPosition - 50) / 50) * 0.5,
              }}
            >
              {"5000 €"}
            </span>
          </Col>
          <Col
            xs={12}
            md={6}
            className={"my-auto mx-auto order-last order-md-first"}
          >
            <Input
              style={{ border: "0" }}
              id="exampleRange"
              className={"d-inline"}
              value={investmentSumTunerPosition}
              name="range"
              type="range"
              //step={(investmentSum < 5000? 250: 1000)}
              min={1}
              max={100}
              list="tick-list"
              onChange={(e) => {
                setInvestmentSumTunerPosition(e.target.value);
              }}
            />

            <div
              className={"text-center mt-2 animated flash slower infinite "}
              style={{ visibility: "hidden" }}
            >
              {" "}
              <ScrollHorizontal width={"35px"} strokewidth={2} />
            </div>
          </Col>
          <Col
            xs={3}
            md={3}
            className={"my-auto mx-auto text-center px-0 px-md-4"}
          >
            <div className={"mx-auto text-primary"} style={{ height: "50px" }}>
              <BottleWine width={"6px"} strokewidth={3} />
              <BottleWine width={"10px"} strokewidth={3} />
              <BottleWine width={"17px"} strokewidth={3} />
              <BottleWine width={"10px"} strokewidth={3} />
              <BottleWine width={"6px"} strokewidth={3} />
            </div>
            <br />
            <span
              className={"mt-auto"}
              style={{
                fontSize: "16px",
                opacity: 1 + ((investmentSumTunerPosition - 50) / 50) * 0.5,
              }}
            >
              {"250.000 €"}
              <br /> {"oder mehr"}
            </span>
          </Col>
        </Row>
      </ModalBody>
    ),
    5: (
      <ModalBody
        className={"px-4 animated fadeIn slow " + (props.mobile ? "" : "mt-4")}
        style={{ height: "70%" }}
      >
        <Row style={{ height: "100%" }} className={"mb-5"}>
          <Col
            xs={12}
            md={12}
            className={"my-auto mx-auto text-center px-0 px-md-4"}
          >
            <div className={"my-auto animated zoomIn slower"}>
              <div>
                <a
                  class="play-btn play-btn-cta mx-auto text-center"
                  href="#"
                  onClick={() => {postPreferences(); setStep("quote_preview");}}
                >
                  <div
                    style={{
                      textAlign: "center",
                      paddingTop: "53px",
                      zIndex: 100,
                    }}
                  >
                    START
                  </div>
                </a>
              </div>
            </div>
            <button
              className={"btn btn-sm text-white animated fadeIn slower mt-5"}
              style={{
                background: "rgba(255,255,255,0.15)",
                fontSize: "11px",
              }}
              onClick={() => setStep(step - 1)}
            >
              Zurück
            </button>
          </Col>
        </Row>
      </ModalBody>
    ),
    quote_preview: (


<>
        {!countupFinishedDelayed ? (
          <div className={"my-auto"} id={"countdown-animation"}>
            <div className={"text-center"}>
              <span
                class="play-btn mx-auto"
                href="#"
                style={{ transform: "scale(1.3)" }}
                // onClick={() => toggleShowRecommendationGeneration(true)}
              >
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                  className={"mx-auto"}
                    src={"/MyRobot.svg"}
                    style={{
                      paddingTop: "5px",
                      boxShadow: "none",
                      height: "94px",
                    }}
                  ></img>
                </div>
              </span>
            </div>
            <br/>

            <div
              className={"mt-4 "}
              style={{ fontSize: "25px", color: "white" }}
            >
              Ihr Portfolio wird zusammengestellt...
              <div style={{ fontSize: "60px", fontWeight: "lighter" }}>
                <CountUp
                  start={0}
                  end={100}
                  duration={6}
                  separator="."
                  decimals={0}
                  decimal=","
                  prefix=""
                  suffix=" %"
                  onEnd={() => setCountupFinished(true)}
                />
              </div>
            </div>
          </div>
        ) : (
          <ModalBody
          className={"p-4 mt-n5 animated fadeIn slow my-auto"}
          style={{ height: "70%" }}
        >
          <Modal
            isOpen={showPortfolioModal}
            toggle={() => toggleShowPortfolioModal(false)}
            className="modal-md modal-dialog-centered"
          >
            <ModalBody className={"p-4 text-center"}>
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
                  toggleShowPortfolioModal(false);
                }}
              ></i>
              <h3 className={"text-center"} style={{ fontSize: "21px" }}>
                Bitte teilen Sie uns Ihre Email-Adresse mit, damit wir Ihnen Ihr
                individuelles Portfolio zusenden können.
              </h3>
              {emailValid == false && email.length > 7 ? (
                <small className={"text-danger"}>Email-Adresse ungültig</small>
              ) : (
                <></>
              )}
              <div class="input-group mx-auto mb-1" style={{ maxWidth: "310px" }}>
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="now-ui-icons ui-1_email-85"></i>
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ihre Mail"
                  aria-label="Mail..."
                  autocomplete="given-name"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    toggleEmailValid(emailRe.test(e.target.value));
                  }}
                />
              </div>
              <br />
              <div class="form-check mb-3">
                <label class="form-check-label">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    onClick={() => toggleDataProtection(!dataProtection)}
                  />
                  <span class="form-check-sign"></span>
                  Ich akzeptiere die{" "}
                  <a
                    href={"https://www.berghauscie.de/legal/datenschutz"}
                    target={"_blank"}
                    style={{ color: "black", textDecoration: "underline" }}
                  >
                    Datenschutzerklärung
                  </a>
                  .
                </label>
              </div>
              <button
                className={"btn text-white"}
                style={{ background: cta, fontWeight: "bold" }}
                disabled={!dataProtection || !emailValid}
                onClick={() => postEmail()}
              >
                Portfolio per Mail erhalten
              </button>
            </ModalBody>
          </Modal>
          <Row style={{ height: "100%" }} className={"mb-5"}>
            <Col
              xs={12}
              md={12}
              className={"my-auto mx-auto text-center px-0 px-md-4"}
            >
              <div className={"my-auto animated fadeIn text-dark"}>
                <div className={"card p-3 animated fadeIn text-center"}>
                  <h3 style={{ fontSize: "21px" }} className={"mb-2"}>
                    Ihr individueller Portfolio-Vorschlag ist fertig!{" "}
                  </h3>
                  <center>
                    Gerne senden wir Ihnen diesen vollkommen kostenlos per Email
                    zu.
                  </center>
                  <button
                    className={"btn text-white"}
                    style={{ background: cta, fontWeight: "bold" }}
                    onClick={(e) => {
                      toggleShowPortfolioModal(true);
                    }}
                  >
                    Portfolio abrufen
                  </button>
                </div>
                <Slider
                  {...{
                    arrows: true,
                    dots: false,
                    infinite: true,
                    autoplay: true,
                    pauseOnHover: true,
                    pauseOnDotsHover: true,
                    centerMode: false,
                    centerPadding: "30px",
                    autoplaySpeed: 3000,
                    speed: 1000,
                    easing: "sine",
                    slidesToShow: props.mobile ? 1 : 3,
                    slidesToScroll: props.mobile ? 1 : 2,
                  }}
                >
                  {recommendation &&
                  recommendation.createPreferencesProfileFromWebsite ? (
                    recommendation.createPreferencesProfileFromWebsite.rec.recommendedPosition.map(
                      (item, index) => {
                        return (
                          <div>
                            {index == 0 ? null : (
                              <div
                                className={"mx-auto"}
                                style={{
                                  position: "absolute",
                                  zIndex: 1000,
                                  top: "120px",
                                  width: "296px",
                                  textAlign: "center",
                                }}
                              >
                                <button
                                  className={"btn align-self-center text-white"}
                                  style={{ background: cta, fontWeight: "bold" }}
                                  onClick={(e) => {
                                    toggleShowPortfolioModal(true);
                                  }}
                                >
                                  Details ansehen
                                </button>
                              </div>
                            )}
                            <div
                              className={"card p-2"}
                              style={{
                                maxWidth: "250px",
                                width: "250px",
                                height: "200px",
                                filter: index == 0 ? "none" : "blur(4px)",
                              }}
                            >
                              <div style={{ lineHeight: "1.2em" }}>
                                <div style={{ fontSize: "14px" }}>
                                  {index == 0
                                    ? item.offer.vintage.wine.title
                                    : "Château Berghaus et Fille"}
                                </div>
                                <div style={{ fontSize: "12px" }}>
                                  {index == 0
                                    ? item.offer.vintage.wine.classification.title
                                    : "Premier Grand Cru Superieur"}
                                </div>
                                <div style={{ fontSize: "13px" }}>
                                  {index == 0 ? item.offer.vintage.year : "1998"}
                                </div>
                              </div>
  
                              <div className={"row"}>
                                <div className={"col p-0"}>
                                  {item.offer.vintage.wine.image && (
                                    <img
                                      className={"mx-auto"}
                                      style={
                                        props.mobile
                                          ? { height: "70px" }
                                          : { height: "110px" }
                                      }
                                      src={
                                        item.offer.vintage.wine.image.rendition
                                          .url
                                      }
                                    />
                                  )}
                                </div>
                                <div className={"col text-center my-auto"}>
                                  <span
                                    className={"badge"}
                                    style={{
                                      fontSize: "0.9em",
                                      border: "1px solid grey",
                                      borderRadius: "4px",
                                    }}
                                  >
                                    <span style={{ fontWeight: "500" }}>
                                      Kiste
                                    </span>
                                    <br />
                                    {index == 0 ? item.offer.caskOf : "6"} x{" "}
                                    {index == 0
                                      ? item.offer.bottleSize.title
                                      : "0.75l"}
                                  </span>
  
                                  <div className={"text-center mt-2"}>
                                    <span style={{ fontSize: "1em" }}>
                                      {index == 0
                                        ? item.offer.sellPriceCaseStr
                                        : "1.987,65 €"}
                                    </span>
                                    <small
                                      style={{
                                        color: "rgb(119, 119, 119)",
                                        marginBottom: "-12px",
                                      }}
                                    >
                                      {" "}
                                      /Kiste
                                    </small>
                                    <br />
                                    <p style={{ lineHeight: "7px" }}>
                                      <span
                                        style={{ fontSize: "6px", height: "0px" }}
                                      >
                                        {index == 0
                                          ? item.offer.sellPriceBtlStr
                                          : "321,98 €"}{" "}
                                        / Flasche <br />
                                      </span>
                                      <span
                                        style={{
                                          fontSize: "6px",
                                          color: "rgb(119, 119, 119)",
                                          height: "0px",
                                        }}
                                      >
                                        {index == 0
                                          ? item.offer.sellPricePerLiterStr
                                          : "345,67 €"}{" "}
                                        / 1 Liter
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )
                  ) : (
                    <>Das ist 'was schief gelaufen!</>
                  )}
                </Slider>
              </div>
            </Col>
          </Row>
        </ModalBody>
        )}
      </>

    
    ),
    check_mails: (
     
          <ModalBody
            className={"px-4 mt-4 animated fadeIn slow"}
            style={{ height: "70%" }}
          >
            <Row style={{ height: "100%" }} className={"mb-5"}>
              <Col
                xs={12}
                md={12}
                className={"my-auto mx-auto text-center px-0 px-md-4"}
              >
                <span style={{ color: "white" }}>
                  <Mail width={"45px"} strokewidth={4} />
                  <br />
                  <br />
                </span>
                <h3 className={"text-white"} style={{ fontSize: "21px" }}>
                  Wir haben Ihnen Ihren Portfolio-Vorschlag per Mail gesendet
                  und wünschen Ihnen viel Freude damit. <br />
                  <br />
                  Überprüfen Sie nun bitte Ihr Email-Postfach.
                </h3>
              </Col>
            </Row>
          </ModalBody>
        
      
    ),
    used_allready: (
      <ModalBody
        className={"px-4 mt-4 animated fadeIn slow"}
        style={{ height: "70%" }}
      >
        <Row style={{ height: "100%" }} className={"mb-5"}>
          <Col
            xs={12}
            md={12}
            className={"my-auto mx-auto text-center px-0 px-md-4"}
          >
            <span style={{ color: "white" }}></span>
            <h3 className={"text-white"} style={{ fontSize: "18px" }}>
              Sie haben die wineTelligence bereits in der Vergangenheit genutzt!
              <br />
              <br />
              Benötigen Sie eine individuelle Beratung? <br />
              <br />
              Nehmen Sie gerne Kontakt zu uns auf.
            </h3>
          </Col>
        </Row>
      </ModalBody>
    ),
    has_account: (
      <ModalBody
        className={"px-4 mt-4 animated fadeIn slow"}
        style={{ height: "70%" }}
      >
        <Row style={{ height: "100%" }} className={"mb-5"}>
          <Col
            xs={12}
            md={12}
            className={"my-auto mx-auto text-center px-0 px-md-4"}
          >
            <span style={{ color: "white" }}></span>
            <h3 className={"text-white"} style={{ fontSize: "21px" }}>
              Sie haben bereits einen Account bei uns.
              <br />
              <br />
              Loggen Sie sich bitte ein, um die wineTelligence zu nutzen.
              <br />
              <br />
              <a href={"https://weindepot.berghauscie.de"} target={"_blank"}>
                <button className={"btn bg-primary text-white"}>
                  Zum Weindpot
                </button>
              </a>
            </h3>
          </Col>
        </Row>
      </ModalBody>
    ),
  };

  return (
    <div
      className={props.mobile ? "" : "card p-4"}
      id={"form-card"}
      style={{
        height: props.mobile ? "" : "580px",
        maxWidth: "1000px",
        zIndex: 1000,
        transition: "background-color 0.25s ease 0s",
        position: "relative",
      }}
    >
      <div
        className={"text-left pb-2  mx-0 animated faster"}
        id={"form-header"}
      >
        <div>
          <span
            class="play-btn mx-auto"
            href="#"
            style={{
              transform: props.mobile ? "scale(0.9)" : "scale(1.2)",
              marginTop: props.mobile ? "" : "-70px",
              marginBottom: props.mobile ? "-15px" : "",
            }}
          >
            <div
              style={{
                textAlign: "center",
              }}
            >
              <img
                src={"/MyRobot.svg"}
                style={{
                  paddingTop: "5px",
                  boxShadow: "none",
                  height: "94px",
                }}
              ></img>
            </div>
          </span>
        </div>
        {/* <p  className={"pt-4"} style={{ fontSize: "12px"}}>
           
            Auf der Basis Ihrer individuellen Präferenzen stellt unsere
            wineTelligence Ihnen ein unverbindlichen Portfolio-Vorschlag
            zusammen.
          </p> */}
        <div class="progress-container">
          <span class="progress-badge" style={{ fontSize: "12px" }}>
            Fortschritt
          </span>
          <div class="progress" style={{ height: "10px" }}>
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{
                width: String(20 * (step + 1)) + "%",
                background: primary_t60,
                fontSize: "8px",
                fontWeight: "bold",
              }}
            >
              <span class="progress-value">
                {String(20 * (step + 1)) + "%"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {Form[step]}

      <div className={"my-0 py-0 text-right"}>
        {/* {!props.isInitial ? (
            <span
              className="mr-auto pull-left pt-3 pr-3"
              style={{ color: primary, fontSize: "14px", cursor: "pointer" }}
              onClick={(e) => {
                toggleShowModal(!showModal);
              }}
            >
              Überspringen
            </span>
          ) : null} */}

        {step > 0 && step < 5 ? (
          <button
            className={"btn btn-primary pull-left"}
            onClick={() => setStep(step - 1)}
          >
            Zurück
          </button>
        ) : null}
        {step == 5 || typeof step === "string" || step instanceof String ? (
          <></>
        ) : (
          <button
            className={"btn btn-primary"}
            onClick={() => setStep(step + 1)}
          >
            Weiter
          </button>
        )}
      </div>
    </div>
  );
};

export default PreferencesForm;
