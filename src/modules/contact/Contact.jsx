import React from "react";
import "./contact.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
export default function Contact() {
  return (
    <>
      <Header pageHeader="ƏLAQƏ" />
      <section className="contact">
        <Container>
          <form>
            <Row>
              <Col lg={4} md={6} sm={12}>
                <div className="contactInfo">
                  <p>Bakı şəh., Üzeyir Hacibeyov, 5/34A</p>
                  <div className="tel">
                    <span>Tel:</span>
                    <div className="telNums">
                      <a>+994 55 6666600</a>
                      <a>+994 55 4466606</a>
                    </div>
                  </div>
                  <div className="mail">
                    <br />
                    <span>Mail:</span>
                    <a>info@aurum.com</a>
                  </div>
                </div>
              </Col>
              <Col lg={8} md={6} sm={12}>
                <div className="contactForm">
                  <Row className="contactRow">
                    <Col lg={6} md={6} sm={12}>
                      <div className="inputBox">
                        <label>Ad*</label>
                        <input type="text" placeholder="Adınız" />
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div className="inputBox">
                        <label>Soyad*</label>
                        <input type="text" placeholder="Soyadınız" />
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div className="inputBox">
                        <label>Telefon nömrəniz*</label>
                        <input type="tel" placeholder="+994 50 999 99 99" />
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <div className="inputBox">
                        <label>E-mail*</label>
                        <input
                          type="email"
                          placeholder="E-mail ünvanınızı daxil edin"
                        />
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                      <div className="message">
                        <label>Müraciətiniz</label>
                        <textarea
                          placeholder="Mesajınız..."
                          rows="60"
                          cols="30"
                        ></textarea>
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className="submitCol">
                      <input type="submit" value="Göndər" className="submit" />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </section>
      <Footer />
    </>
  );
}
