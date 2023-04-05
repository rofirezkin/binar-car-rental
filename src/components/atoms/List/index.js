import React from "react";
import ICComplete from "../../../assets/icon_complete.png";
import ICPrice from "../../../assets/icon_price.png";
import ICHours from "../../../assets/icon_24hrs.png";
import ICProfessional from "../../../assets/icon_professional.png";
function List({ title, description, icon }) {
  const Icon = () => {
    switch (icon) {
      case "complete":
        return <img src={ICComplete} alt="mobil lengkap" />;

      case "price":
        return <img src={ICPrice} alt="mobil lengkap" />;

      case "hours":
        return <img src={ICHours} alt="mobil lengkap" />;

      case "professional":
        return <img src={ICProfessional} alt="mobil lengkap" />;

      default:
        return <img src={ICComplete} alt="mobil lengkap" />;
    }
  };
  return (
    <div className="col-md-3 pt-3">
      <div className="box">
        <div className="p-3">
          <Icon />
          <p className="text-box pt-2">{title}</p>
          <p className="text-box-desc">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default List;
