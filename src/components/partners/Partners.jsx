import React from "react";
import "./partner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import partner1 from "../../assets/images/partner1.png";
import partner2 from "../../assets/images/partner2.png";
import partner3 from "../../assets/images/partner3.png";
import partner4 from "../../assets/images/partner4.png";
import partner5 from "../../assets/images/partner5.png";
import { Container } from "react-bootstrap";
export default function Partners() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="partners">
      <Container className="partnerContainer">
        <Slider {...settings} className="slider">
          <div>
            <img src={partner1} alt="partner" />
          </div>
          <div>
            <img src={partner2} alt="partner" />
          </div>
          <div>
            <img src={partner3} alt="partner" />
          </div>
          <div>
            <img src={partner4} alt="partner" />
          </div>
          <div>
            <img src={partner5} alt="partner" />
          </div>
        </Slider>
      </Container>
    </div>
  );
}
