import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-hero ">
      <div className="container">
        <Link to="/">
          <p className="navbar-brand">Binar Car Rental</p>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="navbar-nav ml-auto">
            <Link className="nav-link active" aria-current="page">
              Our Services
            </Link>
            <Link className="nav-link active" aria-current="page">
              Why Us
            </Link>
            <Link className="nav-link active" aria-current="page">
              Testimonial
            </Link>
            <Link className="nav-link active" aria-current="page">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
