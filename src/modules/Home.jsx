import React from "react";
import Banner from "../components/banner/Banner";
import Services from "../components/services/Services";
import VideoSection from "../components/services/videoSection/VideoSection";
import Blogs from "../components/blogs/Blogs";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <VideoSection />
      <Blogs />
      <Footer />
    </>
  );
}
