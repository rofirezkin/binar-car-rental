import React from "react";

function FAQ() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-title">Frequently Asked Question</h1>
          <p className="text-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="col-md-6">
          <div className="box-question">
            <p className="text-subtitle">Apa saja syarat yang dibutuhkan?</p>
          </div>
          <div className="box-question">
            <p className="text-subtitle">
              Berapa hari minimal sewa mobil lepas kunci?
            </p>
          </div>
          <div className="box-question">
            <p className="text-subtitle">
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </p>
          </div>
          <div className="box-question">
            <p className="text-subtitle">Bagaimana jika terjadi kecelakaan?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
