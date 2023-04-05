import DefaultCar from "../../../assets/innova.png";
import { NumericFormat } from "react-number-format";
import "./style.css";
import { useHistory } from "react-router-dom";
function CarData({ image, name, price, description, id }) {
  const history = useHistory();
  const detailCar = () => {
    console.log("carr ", id);
    history.push("/car/" + id);
  };
  return (
    <div className="col-4 my-4">
      <div>
        <img src={image ? image : DefaultCar} alt="car" className="center" />
        <div>
          <h6 className="label">{name}</h6>
          <NumericFormat
            value={price}
            prefix="Rp. "
            displayType="text"
            thousandSeparator="."
            decimalSeparator=","
          />
          {/* <h6 className="text-subtitle">Rp{price} / Hari</h6> */}

          <h6 className="text-subtitle justify">{description}</h6>

          <button
            onClick={detailCar}
            type="button"
            className="btn btn-success p-2"
            style={{ width: "100%" }}
          >
            Pilih Mobil
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarData;
