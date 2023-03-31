import React from "react";
import "./services.css";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/images/douglas.png";
import cardImg1 from "../../assets/images/cardImg1.png";
import cardImg2 from "../../assets/images/cardImg2.png";
import cardImg3 from "../../assets/images/cardImg3.png";
import vector from "../../assets/images/vector.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ServiceStatics from "./serviceStatics/ServiceStatics";
export default function Services() {
  const serviceCardData = [
    {
      id: 1,
      image: cardImg1,
      cardTitle: "LOREM IPSUM",
      cardInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      image: cardImg2,
      cardTitle: "LOREM IPSUM",
      cardInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 3,
      image: cardImg3,
      cardTitle: "LOREM IPSUM",
      cardInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 4,
      image: cardImg1,
      cardTitle: "LOREM IPSUM",
      cardInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
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
    <>
      <section className="services" id="services">
        <Container>
          <Row>
            <Col md={6}>
              <div className="servicesInfo">
                <h2>Niyə biz?</h2>
                <img src={vector} alt="vector" className="vector" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="imgBox">
                <img src={img} alt="ship" />
              </div>
            </Col>
          </Row>
          <div className="serviceCardSection">
            <h2 className="serviceCardHeading">Xidmətlər</h2>
            <img src={vector} alt="vector" className="vector" />
            <Row>
              <Col>
                <Slider {...settings} className="slider">
                  {serviceCardData?.map((item, index) => {
                    return (
                      <Card key={index} className="card">
                        <Card.Img
                          variant="top"
                          src={item.image}
                          className="cardImg"
                        />
                        <Card.Body className="text-center">
                          <Card.Title className="cardTitle">
                            {item.cardTitle}
                          </Card.Title>
                          <Card.Text className="cardText">
                            {item.cardInfo}
                          </Card.Text>
                          <Button variant="primary" className="cardBtn">
                            ətraflı
                          </Button>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </Slider>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <ServiceStatics />
    </>
  );
}
