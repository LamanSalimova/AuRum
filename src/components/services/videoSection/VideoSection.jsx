import React from "react";
import "./videoSection.css";
import { Container, Row, Col } from "react-bootstrap";
import videoImg from "../../../assets/images/video.png";
import vector from "../../../assets/images/Vector.png";
import groupImg from "../../../assets/images/group.png";
import Partners from "../../partners/Partners";
export default function VideoSection() {
  return (
    <div className="videoSection">
      <Container>
        <Row>
          <Col md={6} className="videoInfo">
            <h4>Lorem Ipsum</h4>
            <img src={vector} alt="vector" className="vector" />

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="btn">ətraflı</div>
          </Col>
          <Col md={6} className="imgBox">
            <div className="shipImg">
              <img src={videoImg} alt="ship" />
            </div>
            <div className="group">
              <img src={groupImg} alt="group" />
            </div>
          </Col>
        </Row>
      </Container>
      <Partners />
    </div>
  );
}
