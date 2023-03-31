import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./modules/Home";
import About from "./modules/about/About";
import Services from "./modules/services/Services";
import Ships from "./modules/ships/Ships";
import Blogs from "./modules/blogs/Blogs";
import BlogDetails from "./modules/blogs/blogDetails/BlogDetails";
import Gallery from "./modules/gallery/Gallery";
import Contact from "./modules/contact/Contact";
import ShipAgency from "./modules/shipAgency/ShipAgency";
import PortService from "./modules/portService/PortService";
import Career from "./modules/career/Career";
import { ROUTES } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} exact />
          <Route path={ROUTES.ABOUT} element={<About />} exact />
          <Route path={ROUTES.SERVICES} element={<Services />} exact />
          <Route path={ROUTES.SHIPS} element={<Ships />} exact />
          <Route path={ROUTES.BLOGS} element={<Blogs />} exact />
          <Route path="/blog/:id" element={<BlogDetails />} exact />
          <Route path={ROUTES.GALLERY} element={<Gallery />} exact />
          <Route path={ROUTES.CONTACT} element={<Contact />} exact />
          <Route path={ROUTES.AGENCY} element={<ShipAgency />} exact />
          <Route path={ROUTES.PORTSERVICE} element={<PortService />} exact />
          <Route path={ROUTES.CAREER} element={<Career />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
