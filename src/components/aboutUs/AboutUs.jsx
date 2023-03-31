import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vector from "../../assets/images/vector.png";
import img from "../../assets/images/douglas.png";

export default function AboutUs() {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <div className="servicesInfo">
            <h2>Niyə biz?</h2>
            <img src={vector} alt="vector" className="vector" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="imgBox">
            <img src={img} alt="ship" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
