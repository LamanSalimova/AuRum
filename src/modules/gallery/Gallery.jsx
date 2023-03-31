import React from "react";
import "./gallery.css";
import Header from "../../components/header/Header";
import { Container, Row, Col } from "react-bootstrap";
import shipImg7 from "../../assets/images/ship7.png";
import shipImg8 from "../../assets/images/ship8.png";
import shipImg9 from "../../assets/images/ship9.png";
import shipImg10 from "../../assets/images/ship10.png";
import shipVideo1 from "../../assets/images/shipVideo1.png";
import shipVideo2 from "../../assets/images/shipVideo2.png";
import shipVideo3 from "../../assets/images/shipVideo3.png";
import shipVideo4 from "../../assets/images/shipVideo4.png";
import peterImg from "../../assets/images/peter.png";
import Footer from "../../components/footer/Footer";
export default function Gallery() {
  return (
    <>
      <Header pageHeader="QALEREYA" />
      <section className="gallery">
        <Container>
          <div className="photoVideo">
            <div className="photo">
              <span>Foto</span>
            </div>
            <div className="video">
              <span>Video</span>
            </div>
          </div>
          <Row className="shipRowCommon">
            <Col lg={5} md={12} sm={12} className="shipCol1">
              <div className="peterImg">
                <img src={peterImg} />
              </div>
            </Col>
            <Col lg={7} md={12} sm={12} className="shipCol2">
              <Row>
                <p className="shipInfo">
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
                <p className="shipInfo">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </Row>
              <Row className="shipRow">
                <Col lg={4} md={4} sm={6}>
                  <div className="ship">
                    <img src={shipImg7} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={6}>
                  <div className="ship">
                    <img src={shipImg8} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={6}>
                  <div className="ship">
                    <img src={shipImg9} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="shipGalleryRow">
            <Col lg={3} md={6} sm={6} className="galleryCol">
              <img src={shipVideo1} alt="gallery" />
            </Col>
            <Col lg={3} md={6} sm={6} className="galleryCol">
              <img src={shipVideo2} alt="gallery" />
            </Col>
            <Col lg={3} md={6} sm={6} className="galleryCol">
              <img src={shipVideo3} alt="gallery" />
            </Col>
            <Col lg={3} md={6} sm={6} className="galleryCol">
              <img src={shipVideo4} alt="gallery" />
            </Col>
            <Col lg={3} md={6} sm={6} className="galleryCol">
              <img src={shipImg7} alt="gallery" />
            </Col>
            <Col lg={3} md={6} sm={6} className="galleryCol">
              <img src={shipImg8} alt="gallery" />
            </Col>
            <Col lg={3} md={6} sm={6} className="galleryCol">
              <img src={shipImg9} alt="gallery" />
            </Col>
            <Col lg={3} md={6} sm={6} className="galleryCol">
              <img src={shipImg10} alt="gallery" />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}
