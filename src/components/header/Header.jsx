import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { Container } from "react-bootstrap";
import "./header.css";
import logo from "../../assets/images/logo.png";
import Navbar from "../navbar/Navbar";
export default function Banner({ pageHeader }) {
  return (
    <section id="header" className="header">
      <Container>
        <div className="navTop">
          <div className="navLinks">
            <a href="#">
              <FaFacebookF size={18} />
            </a>
            <a href="#">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#">
              <BsTwitter size={20} />
            </a>
            <a href="#">
              <AiOutlineInstagram size={20} />
            </a>
            <a href="#">
              <AiOutlineYoutube size={24} />
            </a>
          </div>
          <div className="logo">
            <img src={logo} alt="auRum" />
          </div>
          <div className="langs">
            <a href="#" className="activeLang ">
              Az
            </a>
            <a href="#">Ru</a>
            <a href="#">Eng</a>
          </div>
        </div>
        <Navbar />
        <h2 className="pageHeader">{pageHeader}</h2>
      </Container>
    </section>
  );
}
