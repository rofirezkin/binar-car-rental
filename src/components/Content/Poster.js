import React from "react";
import { Link } from "react-router-dom";

function Poster() {
  return (
    <section className="container mt-5">
      <div
        className="p-5"
        style={{ backgroundColor: "#0d28a6", borderRadius: 20 }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>
          Sewa Mobil di (Lokasimu) Sekarang
        </h1>
        <p style={{ textAlign: "center", color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="text-center">
          <Link to="/car">
            <button type="button" className="btn btn-success">
              Mulai Sewa Mobil
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Poster;
