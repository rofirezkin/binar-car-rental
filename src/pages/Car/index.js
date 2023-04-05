import axios from "axios";
import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Hero from "../../components/Hero";
import CarData from "../../components/molecules/CarData";
import Footer from "../../components/molecules/Footer";
import Navbar from "../../components/Navbar";
import Search from "./Search";

function Car() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${api.user}/v2/car`).then((res) => {
      console.log("catrr ", res);
      setData(res.data.cars);
    });
  }, []);

  const getData = (data) => {
    console.log("data di get di car ", data);
    setData(data.cars);
  };

  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
      <div className="container px-5">
        <Search setData={(data) => getData(data)} />
      </div>
      <div className="container">
        <div className="row">
          {data.length === 0 && (
            <h2 className="text-subtitle text-center pt-5">
              Data tidak tersedia
            </h2>
          )}
          {data.map((res) => {
            return (
              <CarData
                id={res.id}
                key={res.id}
                name={res.name}
                image={res.image}
                price={res.price}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Car;
