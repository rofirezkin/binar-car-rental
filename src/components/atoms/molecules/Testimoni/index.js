import React from "react";

import Star from "../../../../assets/star.png";

// "background-color: #f1f3ff; border-radius: 20px"
function Testimoni({ image }) {
  return (
    <div
      className="row p-3"
      style={{ backgroundColor: "#f1f3ff", borderRadius: 20 }}
    >
      <div className="col-2 my-auto">
        <img src={image} alt="avatar" />
      </div>
      <div className="col-8  ml-4">
        <div className="row">
          <span>
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </span>
        </div>
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”
        </p>
        <p>John Dee 32, Bromo</p>
      </div>
    </div>
  );
}

export default Testimoni;
