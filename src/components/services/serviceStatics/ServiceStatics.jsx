import React, { useState } from "react";
import "./serviceStatics.css";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
export default function ServiceStatics() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="serviceStaticsCon">
        <Container>
          <Row>
            <Col md={6} xl={4}>
              <div className="staticsBox">
                <p className="countUp">
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={90}
                      duration={2}
                      delay={0}
                      className="countUp"
                    />
                  )}
                </p>
                <h5>LOREM IPSUM</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>
              </div>
            </Col>
            <Col md={6} xl={4}>
              <div className="staticsBox">
                <p>
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={142}
                      duration={2}
                      delay={0}
                      className="countUp"
                    />
                  )}
                </p>
                <h5>LOREM IPSUM</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>
              </div>
            </Col>
            <Col md={6} xl={4}>
              <div className="staticsBox">
                <p>
                  {counterOn && (
                    <CountUp
                      start={0}
                      end={59}
                      duration={2}
                      delay={0}
                      className="countUp"
                    />
                  )}
                </p>
                <h5>LOREM IPSUM</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </ScrollTrigger>
  );
}
