import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";
import footerLogo from "../../assets/images/footerLogo.png";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { ROUTES } from "../../routes";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <footer className="footer">
      <Container>
        <div className="footerCon">
          <div className="footerLogo">
            <img src={footerLogo} alt="aurum" />
          </div>
          <div className="footerLinks">
            <NavLink to={ROUTES.HOME}>Ana səhifə</NavLink>
            <NavLink to={ROUTES.ABOUT}>Haqqımızda</NavLink>
            <NavLink to={ROUTES.SERVICES}>Xidmətlər</NavLink>
            <NavLink to={ROUTES.SHIPS}>Gəmilər</NavLink>
          </div>
          <div className="footerLinks">
            <NavLink to={ROUTES.CAREER}>Karyera</NavLink>
            <NavLink to={ROUTES.GALLERY}>Qalereya</NavLink>
            <NavLink to={ROUTES.CONTACT}>Əlaqə</NavLink>
            <br />
          </div>
          <div className="footerInfo">
            <a>Bakı şəh., Üzeyir Hacibeyov, 5/34A</a>
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
        </div>
        <div
          onClick={handleClick}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: isVisible ? "1" : "0",
            position: "fixed",
            right: "30px",
            bottom: "40px",
            background: "#28364b",
            color: "#FFFFFF",
            cursor: "pointer",
            border: "2px solid #fff",
            fontSize: "24px",
          }}
        >
          <AiOutlineArrowUp />
        </div>
      </Container>
    </footer>
  );
}
