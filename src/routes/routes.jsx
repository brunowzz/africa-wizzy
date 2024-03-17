import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import TourPackage from "../pages/TourPackage";
import Gallery from "../pages/Gallery";
import ContactUs from "../pages/ContactUs";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tour-package" element={<TourPackage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </>
  )
);
