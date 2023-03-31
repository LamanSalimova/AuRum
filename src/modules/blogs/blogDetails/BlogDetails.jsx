import React, { useState } from "react";
import "./blogDetails.css";
import { Container } from "react-bootstrap";
import vector from "../../../assets/images/vector.png";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import blogImg1 from "../../../assets/images/blogImg1.png";
import blogImg2 from "../../../assets/images/blogImg2.png";
import blogImg3 from "../../../assets/images/blogImg3.png";
import blogImg4 from "../../../assets/images/blogImg4.png";
import blogImg5 from "../../../assets/images/blogImg5.png";
import blogImg6 from "../../../assets/images/blogImg6.png";
import blogImg7 from "../../../assets/images/blogImg7.png";
import blogImg8 from "../../../assets/images/blogImg8.png";
import blogImg9 from "../../../assets/images/blogImg9.png";
import blogImg10 from "../../../assets/images/blogImg10.png";
import blogImg11 from "../../../assets/images/blogImg11.png";
import blogImg12 from "../../../assets/images/blogImg12.png";
import dateIcon from "../../../assets/images/blogIcon.png";
import wavy from "../../../assets/images/Vector.png";
import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Footer from "../../../components/footer/Footer";
export default function BlogDetails({ data }) {
  const blog = [
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
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avqust",
    "Oktyabr",
    "Noyabr",
    "Dekabr",
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <>
      <Header pageHeader="Blog" />
      <section className="blogDetails">
        <Container>
          <div className="gridCon">
            <div className="gridCol1">
              <div className="col1Img">
                <img src={blogImg1} />
              </div>
              <h4>{blog.blogTitle}</h4>
              <div className="dateDetailBox">
                <img src={dateIcon} alt="icon" />
                <span> 21.01.2023</span>
              </div>
              <p>{blog.blogInfo}</p>
              <p style={{ color: "black" }}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
              <p style={{ color: "black" }}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham. Latin professor at Hampden-Sydney College in Virginia,
                looked up one of the more obscure Latin words, consectetur, from
                a Lorem Ipsum passage, and going through the cites of the word
                in classical literature, discovered the undoubtable source.
                Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                Cicero, written in 45 BC. This book is a treatise on the theory
                of ethics, very popular during the Renaissance. Latin professor
                at Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from
                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                This book is a treatise on the theory of ethics, very popular
                during the Renaissance.
              </p>
            </div>

            <div className="gridCol2">
              <h6>Digər xəbərlər</h6>
              <img src={wavy} alt="wavw" className="vector" />
              <div>
                {blog
                  .map((blog, index) => {
                    return (
                      <div className="asideGrid" key={index}>
                        <div className="asideImg">
                          <img src={blog.imgUrl} />
                        </div>
                        <div className="asideInfo">
                          <h5>{blog.blogTitle}</h5>
                          <p>{blog.blogInfo}</p>
                          <div className="dateReadMore">
                            <div>
                              <BsFillCalendar2WeekFill className="dateIcon" />
                              <span>{blog.blogDate}</span>
                            </div>
                            <div>
                              <Link
                                to={`/blogs/${blog.id}`}
                                className="readMoreLink"
                              >
                                Ətraflı
                              </Link>
                              <AiOutlineRight className="arrowRight" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                  .slice(1, 5)}
              </div>
              <div className="news">
                <div className="newsflex">
                  <div>
                    <h6>Aktiv xəbərlər</h6>
                    <img src={wavy} alt="wavw" className="vector" />
                  </div>
                  <div className="newsDateBox">
                    <div className="newsDate">
                      <span>Tarix seçin</span>
                      <img src={dateIcon} alt="date icon" />
                    </div>
                    <div className="selection">
                      <select
                        className="categoria"
                        style={{
                          background: "#3e4f69",
                          color: "#fff",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <option selected>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="newsDateSwiper">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={5}
                    navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log("slide change")}
                    onSlideChange={handleSlideChange}
                  >
                    {months.map((month, index) => (
                      <SwiperSlide
                        key={index}
                        className={activeIndex === index + 4 ? "active" : ""}
                      >
                        <div className="month">
                          <span>{month}</span>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div>
                  {blog
                    .map((blog, index) => {
                      return (
                        <div
                          className="asideGrid"
                          key={index}
                          style={{
                            background: "white",
                            padding: "20px",
                          }}
                        >
                          <div className="asideImg">
                            <img src={blog.imgUrl} />
                          </div>
                          <div className="asideInfo">
                            <h5>{blog.blogTitle}</h5>
                            <p>{blog.blogInfo}</p>
                            <div className="dateReadMore">
                              <div>
                                <BsFillCalendar2WeekFill className="dateIcon" />
                                <span>{blog.blogDate}</span>
                              </div>
                              <div>
                                <Link
                                  to={`/blogs/${blog.id}`}
                                  className="readMoreLink"
                                >
                                  Ətraflı
                                </Link>
                                <AiOutlineRight className="arrowRight" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                    .slice(5, 8)}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
