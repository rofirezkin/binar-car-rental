import React from "react";
import Footer from "../molecules/Footer";
import FAQ from "./FAQ";
import Poster from "./Poster";
import Services from "./Services";
import Slider from "./Sliders";
import WhyUs from "./WhyUs";

function Content() {
  return (
    <>
      <Services />
      <WhyUs />
      <div>
        <div className="header-title">
          <h1 className="text-title">Testimonial</h1>
          <p className="text-subtitle">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <Slider />
      </div>
      <Poster />
      <FAQ />

    </>
  );
}

export default Content;
