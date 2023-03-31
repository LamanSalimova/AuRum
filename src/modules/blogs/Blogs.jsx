import React from "react";
import "./blogs.css";
import blogImg1 from "../../assets/images/blogImg1.png";
import blogImg2 from "../../assets/images/blogImg2.png";
import blogImg3 from "../../assets/images/blogImg3.png";
import blogImg4 from "../../assets/images/blogImg4.png";
import blogImg5 from "../../assets/images/blogImg5.png";
import blogImg6 from "../../assets/images/blogImg6.png";
import blogImg7 from "../../assets/images/blogImg7.png";
import blogImg8 from "../../assets/images/blogImg8.png";
import blogImg9 from "../../assets/images/blogImg9.png";
import blogImg10 from "../../assets/images/blogImg10.png";
import blogImg11 from "../../assets/images/blogImg11.png";
import blogImg12 from "../../assets/images/blogImg12.png";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Blogs() {
  const data = [
    {
      id: 1,
      imgUrl: blogImg1,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 2,
      imgUrl: blogImg2,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 3,
      imgUrl: blogImg3,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 4,
      imgUrl: blogImg4,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 5,
      imgUrl: blogImg5,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 6,
      imgUrl: blogImg6,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 7,
      imgUrl: blogImg7,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 8,
      imgUrl: blogImg8,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 9,
      imgUrl: blogImg9,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 10,
      imgUrl: blogImg10,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 11,
      imgUrl: blogImg11,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
    {
      id: 12,
      imgUrl: blogImg12,
      blogTitle: "Lorem Ipsum is simply dummy text",
      blogInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      blogDate: "21.01.2023",
    },
  ];
  return (
    <>
      <Header pageHeader="Blog" />
      <section className="blogsSection">
        <Container>
          <Row>
            {data.map((blog, id) => {
              return (
                <Col lg={3} md={6} sm={12} key={id}>
                  <div className="blogItem">
                    <img src={blog.imgUrl} alt="blog image" />
                    <h5>{blog.blogTitle}</h5>
                    <p>{blog.blogInfo}</p>
                    <div className="dateReadMore">
                      <div>
                        <BsFillCalendar2WeekFill className="dateIcon" />
                        <span>{blog.blogDate}</span>
                      </div>
                      <div>
                        <Link to={`/blog/${blog.id}`} className="readMoreLink">
                          Ətraflı
                        </Link>
                        <AiOutlineRight className="arrowRight" />
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
