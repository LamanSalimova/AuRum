import React from "react";
import "./members.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import member1 from "../../../assets/images/member1.png";
import member2 from "../../../assets/images/member2.png";
import member3 from "../../../assets/images/member3.png";
import member4 from "../../../assets/images/member4.png";
import { Container } from "react-bootstrap";
export default function Members() {
  const membersData = [
    {
      id: 1,
      image: member1,
      fullName: "Akbar Mammadov",
      memberJob: "Development Lead",
    },
    {
      id: 2,
      image: member2,
      fullName: "Aysel Alakbarova",
      memberJob: "HR & Administrative Officer",
    },
    {
      id: 3,
      image: member3,
      fullName: "Ali Aliyev",
      memberJob: "Financial Officer",
    },
    {
      id: 4,
      image: member4,
      fullName: "Humay Alizada",
      memberJob: "Product Owner",
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
    <div className="members">
      <Container>
        <Slider {...settings} className="slider">
          {membersData?.map((item, index) => {
            return (
              <Card key={index} className="memberCard">
                <Card.Img variant="top" src={item.image} className="cardImg" />
                <Card.Body className="text-center">
                  <Card.Title className="cardTitle">{item.fullName}</Card.Title>
                  <Card.Text className="cardText">{item.memberJob}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
}
