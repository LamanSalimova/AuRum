import React from "react";
import "./career.css";
import Header from "../../components/header/Header";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "react-bootstrap";
import { GrLocation } from "react-icons/gr";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import upload from "../../assets/images/file.png";
import Footer from "../../components/footer/Footer";
export default function Career() {
  return (
    <>
      <Header pageHeader="KARYERA" />

      <section className="career">
        <Container>
          <h2>Karyera</h2>
          <Accordion
            id="accordionCon"
            className="accordion"
            // defaultActiveKey="0"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accorHeader">
                <div>
                  <h5> Satış üzrə mütəxəssis</h5>
                  <div className="locationDate">
                    <div className="location">
                      <GrLocation />
                      <span>Bakı</span>
                    </div>
                    <div className="date">
                      <BsFillCalendarWeekFill />
                      <span>15 noyabr 2022</span>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordDetails">
                  <p className="careerTitle">
                    İnsan resurslarının idarə edilməsi departamentinin Kadrlar
                    şöbəsi üzrə mütəxəssisi, aparıcı mütəxəssisi. Öhdəliklər:
                  </p>
                  <ul>
                    <li>
                      Kadr hesabatlıqlarının hazırlanması, aidiyyəti üzrə təqdim
                      edilməsi;
                    </li>
                    <li>
                      Şikayət və müraciətlərin cavablandırılması, arayış və
                      çıxarışların hazırlanması;
                    </li>
                    <li>
                      Proseslərin avtomatlaşdırılması üzrə layihələrdə iştirak,
                    </li>
                    <li>
                      İşə qəbul, işdən azad olma, struktur dəyişiklikləri və
                      digər dəyişikliklərlə bağlı bütün bildirişləri elektron
                      informasiya sisteminə daxil etmək;
                    </li>
                  </ul>
                  <div className="requirements">
                    <div>
                      <p>Cinsi:</p> <span>Kişi, Qadın</span>
                    </div>
                    <div>
                      <p>Yaş:</p> <span>18-35</span>
                    </div>
                    <div>
                      <p>Dil bilikləri:</p> <span>Azərbaycan, Rus</span>
                    </div>
                    <div>
                      <p>İş stajı:</p> <span>1-3 il</span>
                    </div>
                    <div>
                      <p>İş qrafiki:</p>
                      <span>Həftədə 5 gün, 09:00 - 22:00</span>
                    </div>
                    <div>
                      <p>Əmək haqqı:</p>
                      <span>350 AZN+bonus+nahar şirkət tərəfindən verilir</span>
                    </div>
                    <div>
                      <p>Son müraciət:</p> <span>31.08.2020</span>
                    </div>
                    <button>Müraciət et</button>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accorHeader">
                <div>
                  <h5>Senior Software Developer</h5>
                  <div className="locationDate">
                    <div className="location">
                      <GrLocation />
                      <span>Bakı</span>
                    </div>
                    <div className="date">
                      <BsFillCalendarWeekFill />
                      <span>25 dekabr 2022</span>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordDetails">
                  <p className="careerTitle">
                    İnsan resurslarının idarə edilməsi departamentinin Kadrlar
                    şöbəsi üzrə mütəxəssisi, aparıcı mütəxəssisi. Öhdəliklər:
                  </p>
                  <ul>
                    <li>
                      Kadr hesabatlıqlarının hazırlanması, aidiyyəti üzrə təqdim
                      edilməsi;
                    </li>
                    <li>
                      Şikayət və müraciətlərin cavablandırılması, arayış və
                      çıxarışların hazırlanması;
                    </li>
                    <li>
                      Proseslərin avtomatlaşdırılması üzrə layihələrdə iştirak,
                    </li>
                    <li>
                      İşə qəbul, işdən azad olma, struktur dəyişiklikləri və
                      digər dəyişikliklərlə bağlı bütün bildirişləri elektron
                      informasiya sisteminə daxil etmək;
                    </li>
                  </ul>
                  <div className="requirements">
                    <div>
                      <p>Cinsi:</p> <span>Kişi, Qadın</span>
                    </div>
                    <div>
                      <p>Yaş:</p> <span>18-35</span>
                    </div>
                    <div>
                      <p>Dil bilikləri:</p> <span>Azərbaycan, Rus</span>
                    </div>
                    <div>
                      <p>İş stajı:</p> <span>1-3 il</span>
                    </div>
                    <div>
                      <p>İş qrafiki:</p>
                      <span>Həftədə 5 gün, 09:00 - 22:00</span>
                    </div>
                    <div>
                      <p>Əmək haqqı:</p>
                      <span>350 AZN+bonus+nahar şirkət tərəfindən verilir</span>
                    </div>
                    <div>
                      <p>Son müraciət:</p> <span>31.08.2020</span>
                    </div>
                    <button>Müraciət et</button>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accorHeader">
                <div>
                  <h5>Dizayner</h5>
                  <div className="locationDate">
                    <div className="location">
                      <GrLocation />
                      <span>Bakı</span>
                    </div>
                    <div className="date">
                      <BsFillCalendarWeekFill />
                      <span>16 dekabr 2022</span>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordDetails">
                  <p className="careerTitle">
                    İnsan resurslarının idarə edilməsi departamentinin Kadrlar
                    şöbəsi üzrə mütəxəssisi, aparıcı mütəxəssisi. Öhdəliklər:
                  </p>
                  <ul>
                    <li>
                      Kadr hesabatlıqlarının hazırlanması, aidiyyəti üzrə təqdim
                      edilməsi;
                    </li>
                    <li>
                      Şikayət və müraciətlərin cavablandırılması, arayış və
                      çıxarışların hazırlanması;
                    </li>
                    <li>
                      Proseslərin avtomatlaşdırılması üzrə layihələrdə iştirak,
                    </li>
                    <li>
                      İşə qəbul, işdən azad olma, struktur dəyişiklikləri və
                      digər dəyişikliklərlə bağlı bütün bildirişləri elektron
                      informasiya sisteminə daxil etmək;
                    </li>
                  </ul>
                  <div className="requirements">
                    <div>
                      <p>Cinsi:</p> <span>Kişi, Qadın</span>
                    </div>
                    <div>
                      <p>Yaş:</p> <span>18-35</span>
                    </div>
                    <div>
                      <p>Dil bilikləri:</p> <span>Azərbaycan, Rus</span>
                    </div>
                    <div>
                      <p>İş stajı:</p> <span>1-3 il</span>
                    </div>
                    <div>
                      <p>İş qrafiki:</p>
                      <span>Həftədə 5 gün, 09:00 - 22:00</span>
                    </div>
                    <div>
                      <p>Əmək haqqı:</p>
                      <span>350 AZN+bonus+nahar şirkət tərəfindən verilir</span>
                    </div>
                    <div>
                      <p>Son müraciət:</p> <span>31.08.2020</span>
                    </div>
                    <button>Müraciət et</button>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="accorHeader">
                <div>
                  <h5>Menecer</h5>
                  <div className="locationDate">
                    <div className="location">
                      <GrLocation />
                      <span>Bakı</span>
                    </div>
                    <div className="date">
                      <BsFillCalendarWeekFill />
                      <span>13 dekabr 2022</span>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordDetails">
                  <p className="careerTitle">
                    İnsan resurslarının idarə edilməsi departamentinin Kadrlar
                    şöbəsi üzrə mütəxəssisi, aparıcı mütəxəssisi. Öhdəliklər:
                  </p>
                  <ul>
                    <li>
                      Kadr hesabatlıqlarının hazırlanması, aidiyyəti üzrə təqdim
                      edilməsi;
                    </li>
                    <li>
                      Şikayət və müraciətlərin cavablandırılması, arayış və
                      çıxarışların hazırlanması;
                    </li>
                    <li>
                      Proseslərin avtomatlaşdırılması üzrə layihələrdə iştirak,
                    </li>
                    <li>
                      İşə qəbul, işdən azad olma, struktur dəyişiklikləri və
                      digər dəyişikliklərlə bağlı bütün bildirişləri elektron
                      informasiya sisteminə daxil etmək;
                    </li>
                  </ul>
                  <div className="requirements">
                    <div>
                      <p>Cinsi:</p> <span>Kişi, Qadın</span>
                    </div>
                    <div>
                      <p>Yaş:</p> <span>18-35</span>
                    </div>
                    <div>
                      <p>Dil bilikləri:</p> <span>Azərbaycan, Rus</span>
                    </div>
                    <div>
                      <p>İş stajı:</p> <span>1-3 il</span>
                    </div>
                    <div>
                      <p>İş qrafiki:</p>
                      <span>Həftədə 5 gün, 09:00 - 22:00</span>
                    </div>
                    <div>
                      <p>Əmək haqqı:</p>
                      <span>350 AZN+bonus+nahar şirkət tərəfindən verilir</span>
                    </div>
                    <div>
                      <p>Son müraciət:</p> <span>31.08.2020</span>
                    </div>
                    <button>Müraciət et</button>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <section className="applyingSection">
            <p className="applyingHeader">Müraciət üçün ərizə</p>
            <form>
              <div className="applyForm">
                <Row className="applyRow">
                  <Col lg={6} md={6} sm={12}>
                    <div className="inputBox">
                      <label>Ad*</label>
                      <input type="text" />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div className="inputBox">
                      <label>Soyad*</label>
                      <input type="text" />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div className="inputBox">
                      <label>Nömrə*</label>
                      <input type="tel" />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div className="inputBox">
                      <label>E-mail*</label>
                      <input type="email" />
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={12} className="uploadFile">
                    <label>CV</label>
                    <div className="uploadBtn">
                      <div className="flex">
                        <img src={upload} />
                        <p>Fayl yüklə</p>
                      </div>
                      <input type="file" />
                    </div>
                  </Col>
                  <Col lg={12} md={12} sm={12} className="submitCol">
                    <input type="submit" value="Göndər" className="submit" />
                  </Col>
                </Row>
              </div>
            </form>
          </section>
        </Container>
      </section>
      <Footer />
    </>
  );
}
