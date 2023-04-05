import React from "react";
import ICVectorArrow from "../../../assets/vector-arrow.png";

function ListQuestion() {
  return (
    <div className="box-question ">
      <div className="">
        <p className="text-subtitle">Apa saja syarat yang dibutuhkan?</p>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="#222222"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default ListQuestion;
