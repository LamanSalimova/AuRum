import React from "react";
import "./blogs.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/images/cardImg3.png";
import img2 from "../../assets/images/blogImg2.jpg";
import img3 from "../../assets/images/blogImg3.jpg";
import img4 from "../../assets/images/cardImg3.png";
import icon1 from "../../assets/images/blogIcon.png";
import icon2 from "../../assets/images/blogIcon2.png";
import icon3 from "../../assets/images/blogIcon3.png";
import vector from "../../assets/images/vector.png";
export default function Blogs() {
  const serviceCardData = [
    {
      id: 1,
      image: img1,
      blogDate: "26 December 2022",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      image: img2,
      blogDate: "26 December 2022",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      image: img3,
      blogDate: "26 December 2022",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    },
    {
      id: 4,
      image: img4,
      blogDate: "26 December 2022",
      blogInfo:
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
    <section className="homeblogs">
      <Container>
        <div className="blogSection">
          <h2 className="blogHeading">Bloglar</h2>
          <img src={vector} alt="vector" className="vector" />
          <Row>
            <Col>
              <Slider {...settings} className="slider">
                {serviceCardData?.map((item, index) => {
                  return (
                    <div className="blogItem" key={index}>
                      <div className="imgBox">
                        <img src={item.image} alt="blogItem" />
                      </div>
                      <div className="blogItemDate">
                        <img src={icon1} alt="icon" />
                        <span> {item.blogDate}</span>
                      </div>
                      <p className="blogInfo">{item.blogInfo}</p>
                      <div className="blogDetails">
                        <div>
                          <img src={icon2} alt="view" />
                          <span>12 view</span>
                        </div>
                        <div>
                          <img src={icon3} alt="view" />
                          <span>5 comments</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
