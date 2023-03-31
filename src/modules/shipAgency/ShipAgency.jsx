import React from "react";
import "./shipAgency.css";
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

export default function ShipAgency() {
  return (
    <>
      <Header pageHeader="XİDMƏTLƏR" />
      <section className="shipAgency">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="agencyHeader">
                <h2>Ship Agency</h2>
                <img src={vector} alt="vector" className="vector" />
                <p className="shortText">
                  We provide prompt, efficient and effective agency services to
                  vessels, principals and service providers from an experienced
                  centralized operational hub
                </p>
                <p>
                  Matching real time, on the ground, local knowledge and
                  expertise with our strict operational standards, whether it is
                  your vessel, crew, cargo, or cash we’re looking after, our
                  agents can be relied on to consistently make your port calls
                  as efficient as possible. We use our expertise to make your
                  everyday life more convenient with our services.
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
                Our dedicated team with outstanding communication and knowledge
                of ports, commodities and compliance requirements in provide a
                unique service in Caspian region. Due to our recognized
                commitment to the industry we enjoy close working relationships
                with terminal operators, harbor authorities and port service
                providers , helping us to achieve our aim of ensuring a speedy
                turnaround for our vessels with minimum delays and costs.
              </p>
            </Col>
          </Row>
          <p className="shipInfoBottom">
            We provide prompt, efficient and effective agency services to
            vessels, principals and service providers from an experienced
            centralized operational hub. We aim to provide best-in-class service
            as well as be a reputable, reliable and consistent partner of choice
            for cargo owners, vessel owners and operators. You can always have
            an AOS ships agent taking care of your interests, wherever in the in
            the region it is you do business.
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
                  Commercial Duties:The ship agent provides shippers or
                  forwarding agents with transport services and is responsible
                  for facilitating transport for the ship.
                </p>
              </div>
            </Col>
            <Col lg={5} md={5} sm={12}></Col>
            <Col lg={5} md={5} sm={12}></Col>
            <Col lg={7} md={7} sm={12}>
              <div>
                <span>2</span>
                <p>
                  Operational Duties:The enabling of all services related to
                  their time in port for the ship or its crew. This includes all
                  procedures required when arriving at and leaving its mooring,
                  port or customs authority formalities, monitoring operations
                  in the port and managing the right to enter and stay in the
                  port. Here we refer not only to paperwork, but also to the
                  supply of fuel and provisions, and to the hiring of personnel.
                </p>
              </div>
            </Col>
            <Col lg={7} md={7} sm={12}>
              <div>
                <span>3</span>
                <p>
                  Freight management functions:The ship agent is responsible for
                  filing the off-loading manifest with customs and for issuing
                  the Delivery document, in order that the owner may withdraw
                  the freight, as well as for hiring personnel to load, unload,
                  stow and unstow the cargo.
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
