import React from "react";
import "./sertificates.css";
import { Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frameImg from "../../../assets/images/frame.png";
import sertif1 from "../../../assets/images/sertif1.png";
import sertif2 from "../../../assets/images/sertif2.png";
import sertif3 from "../../../assets/images/sertif3.png";
import sertif4 from "../../../assets/images/sertif4.png";
import vector from "../../../assets/images/vector.png";
export default function Sertificates() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className="sertificates">
      <div className="sertifHeader text-center">
        <h2>Sertifikatlar</h2>
        <img src={vector} alt="vector" className="vector" />
      </div>
      <Container>
        <Slider {...settings} className="slider">
          <div className="sertifImg">
            <img src={frameImg} alt="sertificate" className="frame" />
            <img src={sertif1} className="sertif" />
          </div>
          <div className="sertifImg">
            <img src={frameImg} alt="sertificate" className="frame" />
            <img src={sertif2} className="sertif" />
          </div>
          <div className="sertifImg">
            <img src={frameImg} alt="sertificate" className="frame" />
            <img src={sertif3} className="sertif" />
          </div>
          <div className="sertifImg">
            <img src={frameImg} alt="sertificate" className="frame" />
            <img src={sertif4} className="sertif" />
          </div>
        </Slider>
      </Container>
    </div>
  );
}
