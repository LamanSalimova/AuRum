import React from "react";
import "./bannerCarousel.css";
import Carousel from "react-bootstrap/Carousel";
export default function BannerCarousel() {
  return (
    <div className="carouselBox">
      <Carousel className="carousel">
        <Carousel.Item className="carouselItem">
          <h3>The standard Lorem Ipsum passage</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="readMore">ƏTRAFLI</div>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <h3>Second slide label</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="readMore">ƏTRAFLI</div>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <h3>Third slide label</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="readMore">ƏTRAFLI</div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
