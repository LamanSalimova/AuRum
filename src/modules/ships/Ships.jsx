import React from "react";
import "./ships.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import vector from "../../assets/images/vector.png";
import { Container, Row, Col } from "react-bootstrap";
import shipImg from "../../assets/images/ship1.png";
import shipImg2 from "../../assets/images/ship2.png";
import shipImg3 from "../../assets/images/ship3.png";
import shipImg4 from "../../assets/images/ship4.png";
import shipImg5 from "../../assets/images/ship5.png";
import shipImg6 from "../../assets/images/ship6.png";
import shipImg7 from "../../assets/images/ship7.png";
import shipImg8 from "../../assets/images/ship8.png";
import shipImg9 from "../../assets/images/ship9.png";
import shipImg10 from "../../assets/images/ship10.png";
import shipImg11 from "../../assets/images/ship11.png";
import shipImg12 from "../../assets/images/ship12.png";
import peterImg from "../../assets/images/peter.png";
import shipVideo1 from "../../assets/images/shipVideo1.png";
import shipVideo2 from "../../assets/images/shipVideo2.png";
import shipVideo3 from "../../assets/images/shipVideo3.png";
import shipVideo4 from "../../assets/images/shipVideo4.png";
import groupImg from "../../assets/images/group.png";
export default function Ships() {
  return (
    <>
      <Header pageHeader="GƏMİLƏR" />
      <section className="ships">
        <Container>
          <div className="shipHeader">
            <h2>Gəmilər</h2>
            <img src={vector} alt="vector" className="vector" />
          </div>
          <div className="shipsContainer">
            <Row className="shipRow">
              <Col lg={6} md={6} sm={12}>
                <div className="ship">
                  <img src={shipImg} alt="ship" />
                  <div className="shipNumber">
                    <span>GƏMİ 1</span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="ship">
                  <img src={shipImg2} alt="ship" />
                  <div className="shipNumber">
                    <span>GƏMİ 2</span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="ship">
                  <img src={shipImg3} alt="ship" />
                  <div className="shipNumber">
                    <span>GƏMİ 3</span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="ship">
                  <img src={shipImg4} alt="ship" />
                  <div className="shipNumber">
                    <span>GƏMİ 4</span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="ship">
                  <img src={shipImg5} alt="ship" />
                  <div className="shipNumber">
                    <span>GƏMİ 5</span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="ship">
                  <img src={shipImg6} alt="ship" />
                  <div className="shipNumber">
                    <span>GƏMİ 6</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <div className="shipDetails">
        <Container>
          <Row className="shipRow">
            <Col lg={6} md={12} sm={12} className="shipCol1">
              <div className="peterImg">
                <img src={peterImg} />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="shipCol2">
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <p className="shipInfo">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </Col>
              </Row>
              <Row className="shipRow">
                <Col lg={4} md={4} sm={12}>
                  <div className="ship">
                    <img src={shipImg7} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="ship">
                    <img src={shipImg8} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="ship">
                    <img src={shipImg9} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="ship">
                    <img src={shipImg10} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="ship">
                    <img src={shipImg11} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="ship">
                    <img src={shipImg12} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="shipVideoRow">
            <Col lg={3} md={6} sm={12}>
              <div className="shipImg">
                <img src={shipVideo1} alt="ship" />
              </div>
              <div className="group">
                <img src={groupImg} alt="group" />
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="shipImg">
                <img src={shipVideo2} alt="ship" />
              </div>
              <div className="group">
                <img src={groupImg} alt="group" />
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="shipImg">
                <img src={shipVideo3} alt="ship" />
              </div>
              <div className="group">
                <img src={groupImg} alt="group" />
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="shipImg">
                <img src={shipVideo4} alt="ship" />
              </div>
              <div className="group">
                <img src={groupImg} alt="group" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
