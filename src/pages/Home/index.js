import React from "react";
import Content from "../../components/Content";
import FormInput from "../../components/FormInput";
import Hero from "../../components/Hero";
import Footer from "../../components/molecules/Footer";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero button />
      <Content />
      <Footer />
    </>
    // <FormInput />
  );
}

export default Home;
