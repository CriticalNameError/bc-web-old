import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import {
  cta,
  primary,
  primary_t50,
  primary_t80,
} from "../../src/helpers/colorScheme";
import Head from "next/head";
import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import { convertDateString, getTimeFromDateString } from "helpers/utils";
import "react-toastify/dist/ReactToastify.css";
import LandingFooter from "components/Footer/LandingFooter";

const GET_EVENT = gql`
  query getEventById($eventId: String!) {
    getEventById(eventId: $eventId) {
      title
      when
      description
      address
      location
      stripePriceId
      titleImage {
        rendition(width: 750) {
          url
        }
      }
    }
  }
`;

const CREATE_INVOICE = gql`
  mutation createStripeCustomerAndInvoiceForEvent(
    $title: String!
    $salutation: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $city: String!
    $postalCode: String!
    $streetAndNumber: String!
    $company: String
    $vatNr: String
    $amount: Decimal!
    $stripePriceId: String!
    $newsletter: Boolean!
    $eventDescriptionMarkup: String!
  ) {
    createStripeCustomerAndInvoiceForEvent(
      title: $title
      salutation: $salutation
      email: $email
      firstName: $firstName
      lastName: $lastName
      city: $city
      postalCode: $postalCode
      streetAndNumber: $streetAndNumber
      company: $company
      vatNr: $vatNr
      amount: $amount
      stripePriceId: $stripePriceId
      newsletter: $newsletter
      eventDescriptionMarkup: $eventDescriptionMarkup
    ) {
      success
      errors
      url
    }
  }
`;

const notify = (msg) =>
  toast.success(msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const PostPage = () => {
  let salutation = "Herr";
  let title;
  let firstName;
  let lastName;
  let email;
  let company;
  let vatNr;
  let newsletter;
  let streetAndNumber;
  let postalCode;
  let city;
  let stripePriceId;
  let amount;

  const router = useRouter();
  const { eventId } = router.query;
  const [notARobot, toggleNotARobot] = useState(false);
  const [DSGVO, toggleDSGVO] = useState(false);
  const [formSent, toggleFormSent] = useState(false);
  const [paymentLink, setPaymentLink] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [sendMessage, { mutData }] = useMutation(CREATE_INVOICE, {
    onCompleted: (data) => {
      window.open(data.createStripeCustomerAndInvoiceForEvent.url, "_blank");
      toggleFormSent(true);
      setPaymentLink(data.createStripeCustomerAndInvoiceForEvent.url);
      setPaymentLoading(false);
    },
  });
  const [formData, setFormData] = useState({
    salutation: "Herr",
    title: "",
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    eventDescriptionMarkup: null,
    company: null,
    vatNr: null,
    newsletter: false,
    streetAndNumber: null,
    postalCode: null,
    city: null,
    stripePriceId: null,
    amount: null,
  });
  const { data, loading, error, fetchMore } = useQuery(GET_EVENT, {
    variables: { eventId: eventId },
  });
  useEffect(() => {
    console.log(formData);
    console.log(
      notARobot &&
        DSGVO &&
        formData["firstName"] &&
        formData["lastName"] &&
        formData["streetAndNumber"] &&
        formData["postalCode"] &&
        formData["city"] &&
        formData["amount"] &&
        formData["salutation"]
    );
  }, [formData]);
  useEffect(() => {
    if (data) {
      setFormData({
        ...formData,
        ["stripePriceId"]: data.getEventById.stripePriceId,
        ["eventDescriptionMarkup"]:
          data.getEventById.title +
          ((data.getEventById.address && data.getEventById.when) ? ("</b><br/>Location: " +
          data.getEventById.address ) : "") +
          ((data.getEventById.when && data.getEventById.address) ? ("<br/>Zeit: " +
          convertDateString(data.getEventById.when) +
          ", " +
          getTimeFromDateString(data.getEventById.when) +
          " Uhr") : ""),
      });
      console.log(formData);
    }
  }, [data]);

  useEffect(() => {
    console.log(mutData);
  }, [mutData]);
  if (loading || paymentLoading)
    return (
      <LoadingOverlay
        active={true}
        fadeSpeed={100}
        styles={{
          overlay: (base) => ({
            ...base,
            background: "rgba(255, 255, 255, 0.7)",
            position: "fixed",
          }),
          spinner: (base) => ({
            ...base,
            width: "100px",
            "& svg circle": {
              stroke: primary,
            },
          }),
          content: (base) => ({
            ...base,
            color: "black",
          }),
        }}
        spinner
        text="Lade Event...."
      >
        {/* <p>Some content or children or something.</p> */}
      </LoadingOverlay>
    );
  if (error) return <h1>Error</h1>;
  if (data)
    return (
      <>
        <Head>
          <title key={"title"}>{data.getEventById.title}</title>
          <meta
            name="description"
            content={data.getEventById.title}
            key="description"
          />
        </Head>
        <div
          className={"container-fluid mx-auto px-3 px-md-0 text-center"}
          style={{
            paddingTop: "150px",
            overflowWrap: "break-word",
          }}
        >
          <div
            className={"mx-auto text-left mb-5"}
            style={{ maxWidth: "750px" }}
          >
            {!paymentLink && (
              <>
                <h1>{data.getEventById.title}</h1>
                {(data.getEventById.when && data.getEventById.address) && (
                  <span style={{ fontSize: "23px" }}>
                    Zeit & Ort: {convertDateString(data.getEventById.when)},{" "}
                    {getTimeFromDateString(data.getEventById.when)} Uhr,{" "}
                    {data.getEventById.address}
                  </span>
                )}
                <br />
                <br />
                <center>
                  {" "}
                  <img src={data.getEventById.titleImage.rendition.url} />
                </center>
                <div
                  className={"mt-4"}
                  dangerouslySetInnerHTML={{
                    __html: data.getEventById.description,
                  }}
                ></div>
              </>
            )}

            {data.getEventById.when && data.getEventById.address ? (
              <>
                <h3 className={"mt-5 text-bold mb-0 pb-0"}>Anmeldung</h3>
                <span style={{ fontSize: "18px" }}>
                  Zeit & Ort: {convertDateString(data.getEventById.when)},{" "}
                  {getTimeFromDateString(data.getEventById.when)} Uhr,{" "}
                  {data.getEventById.address}
                </span>
              </>
            ) : (
              <h3 className={"mt-5 mb-0 pb-0 text-bold"}>Bestellung</h3>
            )}
            <br />
            <br />

            {!formSent && !mutData ? (
              <form
                role="form"
                id="contact-form1"
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  setPaymentLoading(true);
                  sendMessage({
                    variables: {
                      ...formData,
                    },
                  });
                }}
              >
                <div class="card-body ">
                  <div class="row">
                    <div class="col-md-6 col-sm-12 pr-2">
                      <div class="form-group">
                        <select
                          class="form-control"
                          ref={(node) => {
                            salutation = node;
                          }}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              ["salutation"]: e.target.value,
                            });
                          }}
                        >
                          <option selected>Herr</option>
                          <option>Frau</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12 pr-2">
                      <div class="form-group">
                        <select
                          class="form-control"
                          ref={(node) => {
                            title = node;
                          }}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              ["title"]: e.target.value,
                            });
                          }}
                        >
                          <option selected>Titel (optional)</option>
                          <option>Dr.</option>
                          <option>Prof. Dr.</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-12 pr-2">
                      {/* <label>Name</label> */}
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="now-ui-icons users_circle-08"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Vorname*"
                          aria-label="Name..."
                          autocomplete="given-name"
                          ref={(node) => {
                            firstName = node;
                          }}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              ["firstName"]: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div className={"col-md-6 col-sm-12 "}>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <i class="now-ui-icons users_circle-08"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nachname*"
                          aria-label="Name..."
                          autocomplete="given-name"
                          ref={(node) => {
                            lastName = node;
                          }}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              ["lastName"]: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 ">
                      <div class="form-group">
                        {/* <label>Mail</label> */}
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="now-ui-icons ui-1_email-85"></i>
                            </span>
                          </div>
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Ihre Mailadresse*"
                            autocomplete="email"
                            ref={(node) => {
                              email = node;
                            }}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                ["email"]: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12 ">
                      <div class="form-group">
                        {/* <label>Mail</label> */}
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="now-ui-icons tech_mobile"></i>
                            </span>
                          </div>
                          <input
                            type="phone"
                            class="form-control"
                            placeholder="Ihre Telefonnummer*"
                            autocomplete="email"
                            ref={(node) => {
                              email = node;
                            }}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                ["phone"]: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="form-group textarea">
                    {/* <label>Ihre Nachricht</label> */}
                    <input
                      name="message"
                      class="form-control"
                      placeholder={"Straße und Hausnummer"}
                      id="message"
                      //rows="3"
                      ref={(node) => {
                        streetAndNumber = node;
                      }}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          ["streetAndNumber"]: e.target.value,
                        });
                      }}
                    ></input>
                  </div>

                  <div class="form-group textarea">
                    {/* <label>Ihre Nachricht</label> */}
                    <input
                      name="message"
                      class="form-control"
                      placeholder={"Postleitzahl"}
                      id="message"
                      //rows="3"
                      ref={(node) => {
                        postalCode = node;
                      }}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          ["postalCode"]: e.target.value,
                        });
                      }}
                    ></input>
                  </div>

                  <div class="form-group textarea">
                    {/* <label>Ihre Nachricht</label> */}
                    <input
                      name="message"
                      class="form-control"
                      placeholder={"Stadt"}
                      id="message"
                      //rows="3"
                      ref={(node) => {
                        city = node;
                      }}
                      onChange={(e) => {
                        setFormData({ ...formData, ["city"]: e.target.value });
                      }}
                    ></input>
                  </div>

                  <div class="form-group textarea">
                    {/* <label>Ihre Nachricht</label> */}
                    <input
                      name="message"
                      class="form-control"
                      placeholder={"Firma (optional)"}
                      id="message"
                      //rows="3"
                      ref={(node) => {
                        company = node;
                      }}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          ["company"]: e.target.value,
                        });
                      }}
                    ></input>
                  </div>

                  <div class="form-group textarea">
                    {/* <label>Ihre Nachricht</label> */}
                    <input
                      name="message"
                      class="form-control"
                      placeholder={"USt.-Nr. (optional)"}
                      id="message"
                      //rows="3"
                      ref={(node) => {
                        vatNr = node;
                      }}
                      onChange={(e) => {
                        setFormData({ ...formData, ["vatNr"]: e.target.value });
                      }}
                    ></input>
                  </div>

                  <div class="form-group">
                    <select
                      class="form-control"
                      ref={(node) => {
                        amount = node;
                      }}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          ["amount"]: e.target.value,
                        });
                      }}
                    >
                      <option disabled selected>
                        {data.getEventById.when && data.getEventById.address
                          ? "Anzahl an Tickets"
                          : "Anzahl"}
                      </option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                    </select>
                  </div>

                  {/* <div class="form-group textarea">
                
                  <input
                    name="message"
                    class="form-control"
                    placeholder={"Anzahl Teilnehmer"}
                    id="message"
                    //rows="3"
                    ref={(node) => {
                      amount = node;
                    }}
                  ></input>
                </div> */}

                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            onClick={() => toggleNotARobot(!notARobot)}
                          />
                          <span class="form-check-sign"></span>
                          Ich akzeptiere die AGBs
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            onClick={() => toggleDSGVO(!DSGVO)}
                          />
                          <span class="form-check-sign"></span>
                          Ich akzeptiere Datenschutzbestimmung
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <button
                        type="submit"
                        style={{ background: cta, color: "white" }}
                        className={
                          "btn btn-lg btn-round pull-right " +
                          (notARobot &&
                          DSGVO &&
                          formData["email"] &&
                          formData["phone"] &&
                          formData["firstName"] &&
                          formData["lastName"] &&
                          formData["streetAndNumber"] &&
                          formData["postalCode"] &&
                          formData["city"] &&
                          formData["amount"] &&
                          formData["salutation"]
                            ? ""
                            : "disabled")
                        }
                      >
                        {data.getEventById.when && data.getEventById.address
                          ? "Ticket verbindlich buchen"
                          : "Verbindlich bestellen"}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <center>
                {paymentLink && (
                  <a href={paymentLink} target={"_blank"}>
                    <button
                      className={"btn btn-lg"}
                      style={{ background: cta, color: "white" }}
                    >
                      Jetzt Bezahlen
                    </button>
                  </a>
                )}
              </center>
            )}
          </div>
        </div>
      </>
    );
};

export default PostPage;
