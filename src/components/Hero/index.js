import { Link } from "react-router-dom";
import CarImage from "../../assets/car.png";
import CarImageSmall from "../../assets/img_car.png";
import "./style.css";
function Hero({ button }) {
  return (
    <div className="container-fluid hero-container">
      <div className="row">
        <div className="col-xl-6">
          <div className="p-5 hero-header-left">
            <h2 className="text-hero">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h2>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {button ? (
              <Link to="/car">
                <button type="button" className="btn btn-success">
                  Mulai Sewa Mobil
                </button>
              </Link>
            ) : (
              <div className="mt-5 mt-1"></div>
            )}
          </div>
        </div>
        <div className="col-md-6 d-lg-none d-md-none ">
          <img
            src={CarImageSmall}
            alt="car"
            className="hero-image-block"
            style={{ width: "100%" }}
          />
        </div>
        <div
          className="col-xl-6 d-none d-lg-block"
          style={{ position: "relative" }}
        >
          <div className="background-car" />
          <img src={CarImage} className="car-image" alt="oke" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
