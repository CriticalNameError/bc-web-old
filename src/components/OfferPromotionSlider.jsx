import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { gql, useQuery } from "@apollo/client";

const GET_PROMOTION_OFFERS = gql`
  {
    allOffers(promotionOnly: true) {
      caskOf
      bottleSize {
        title
      }
      sellPricePerLiterStr
      sellPriceBtlStr
      sellPriceCaseStr
      vintage {
        wine {
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
`;

const OfferPromotionSlider = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_PROMOTION_OFFERS);
  if (loading) {
    return <></>;
  }
  if (error) {
    return <></>;
  }
  if (data) {
    console.log(data);
    return (
      <Slider
        {...{
          arrows: true,
          dots: true,
          infinite: true,
          autoplay: true,
          pauseOnHover: true,
          pauseOnDotsHover: true,
          centerMode:true,
          centerPadding: "30px",
          autoplaySpeed: 3000,
          speed: 1000,
          easing: "sine",
          slidesToShow: 3,
          slidesToScroll: 2,
        }}
      >
        {data.allOffers.map((item, key) => (
          <div>
            <div
              className={"card p-2"}
              style={{ width: "300px", height: "230px" }}
            >
              <div style={{ lineHeight: "1.2em" }}>
                <div style={{ fontSize: "16px" }}>
                  {item.vintage.wine.title}
                </div>
                <div style={{ fontSize: "12px" }}>
                  {item.vintage.wine.classification.title}
                </div>
                <div style={{ fontSize: "17px" }}>{item.vintage.year}</div>
              </div>

              <div className={"row"}>
                <div className={"col p-0"}>
                  {item.vintage.wine.image && (
                    <img
                      className={"mx-auto"}
                      src={item.vintage.wine.image.rendition.url}
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
                    <span style={{ fontWeight: "500" }}>Kiste</span>
                    <br />
                    {item.caskOf} x {item.bottleSize.title}
                  </span>

                  <div className={"text-center mt-2"}>
                    <span style={{ fontSize: "1.4em" }}>
                      {item.sellPriceCaseStr}
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
                    <p style={{ lineHeight: "10px" }}>
                      <span style={{ fontSize: "9px", height: "0px" }}>
                        {item.sellPriceBtlStr} / Flasche <br />
                      </span>
                      <span
                        style={{
                          fontSize: "9px",
                          color: "rgb(119, 119, 119)",
                          height: "0px",
                        }}
                      >
                        {item.sellPricePerLiterStr} / 1 Liter
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* <div>
          <div
            className={"card"}
            style={{ width: "300px", height: "190px" }}
          >
            <h3>2</h3>
          </div>
        </div>
        <div>
          <div
            className={"card"}
            style={{ width: "300px", height: "190px" }}
          >
            <h3>3</h3>
          </div>
        </div>
        <div>
          <div
            className={"card"}
            style={{ width: "300px", height: "190px" }}
          >
            <h3>4</h3>
          </div>
        </div>
        <div>
          <div
            className={"card"}
            style={{ width: "300px", height: "190px" }}
          >
            <h3>5</h3>
          </div>
        </div>
        <div>
          <div
            className={"card"}
            style={{ width: "300px", height: "190px" }}
          >
            <h3>6</h3>
          </div>
        </div> */}
      </Slider>
    );
  }
};

export default OfferPromotionSlider;
