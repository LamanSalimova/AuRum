import React from "react";
import "./portService.css";
import Header from "../../components/header/Header";
import { Container, Row, Col } from "react-bootstrap";
import vector from "../../assets/images/vector.png";
import shipImg1 from "../../assets/images/ship2.png";
import shipImg2 from "../../assets/images/ship1.png";
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
import Footer from "../../components/footer/Footer";

export default function PortService() {
  return (
    <>
      <Header pageHeader="XİDMƏTLƏR" />
      <section className="portService">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="serviceHeader">
                <h2>Port Service</h2>
                <img src={vector} alt="vector" className="vector" />
                <p className="shortText">
                  We provide prompt, efficient and effective agency services to
                  vessels, principals and service providers from an experienced
                  centralized operational hub
                </p>
                <p>
                  Other related services including port and customs
                  documentation, cargo handling, stevedoring, warehousing and
                  chartering are also taken care of by our professional teams. ,
                  our comprehensive port services comprise total management of
                  your port logistics requirements. Our specialised support
                  services include the provision of labour, containers, cranes,
                  stevedoring, and trained personnel to provide a seamless
                  interface between road and sea transport services.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="imgBox">
                <img src={shipImg1} alt="ship" />
              </div>
            </Col>
          </Row>
          <Row className="agencyShipRow2">
            <Col lg={6} md={6} sm={12}>
              <div className="imgBox">
                <img src={shipImg2} alt="ship" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="shipInfoCol">
              <p>
                Chartering the right type of vessel is important for achieving a
                successful project. Whether our clients need short or long-term
                chartering, we will be able to provide via our worldwide contact
                to shipping lines and shipowners. Furthermore, our stevedores
                and engineers are specialised in handling all kinds of bulk
                products, project cargo, heavy lift and general cargo while
                focusing on quality and safety.
              </p>
            </Col>
          </Row>
          <p className="shipInfoBottom">
            In connection with port calls, AOS provides supply services and full
            service to crew, shipowners and management.
          </p>
        </Container>
      </section>
      <section className="agencyDetails">
        <Container className="container">
          <Row>
            <Col lg={7} md={7} sm={12}>
              <div>
                <span>1</span>
                <p>
                  Logistics management for dry docking and yard stays for cruise
                  vessels, ferries and oil rigs are also an important element in
                  our selection of port-related services.
                </p>
              </div>
            </Col>
            <Col lg={5} md={5} sm={12}></Col>
            <Col lg={5} md={5} sm={12}></Col>
            <Col lg={7} md={7} sm={12}>
              <div>
                <span>2</span>
                <p>
                  Port Service is a core business of AOS . Our local knowledge
                  and a worldwide network of specialised offices and agents
                  create unique solutions.Our team and our partners, with huge
                  knowledge of the shipping industry and market, with
                  professional experience in the full provision of principal
                  port services, we guarantee you will enjoy an authentic port
                  services experience.
                </p>
              </div>
            </Col>
            <Col lg={7} md={7} sm={12}>
              <div>
                <span>3</span>
                <p>
                  The high quality principal port services, at competitive,
                  tempting , realistic prices, established AOS, a leading
                  company in port services and one of the first choice of
                  established professionals of the shipping industry and market.
                </p>
              </div>
            </Col>
            <Col lg={5} md={5} sm={12}></Col>
          </Row>
        </Container>
      </section>
      <section className="agencyGallery">
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
      </section>
      <Footer />
    </>
  );
}
