import React from "react";
import ICFb from "../../../assets/icon_facebook.png";
import ICIg from "../../../assets/icon_instagram.png";
import ICTwitter from "../../../assets/icon_twitter.png";
import ICGmail from "../../../assets/icon_mail.png";
import ICTwitch from "../../../assets/icon_twitch.png";
import Rectangle from "../../../assets/Rectangle.png";
import "./style.css";

function Footer() {
  return (
    <div className="container margin-footer">
      <div className="row">
        <div className="col-md-3">
          <p className="text-subtitle">
            Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
          </p>
          <p className="text-subtitle">binarcarrental@gmail.com</p>
          <p className="text-subtitle">081-233-334-808</p>
        </div>
        <div className="col-md-2">
          <p>Our services</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <div className="col-md-4">
          <p className="text-subtitle">Connect with us</p>

          <div className=" display-icon">
            <img src={ICFb} alt="fb" />
            <img src={ICIg} alt="ig" />
            <img src={ICTwitter} alt="twitter" />
            <img src={ICGmail} alt="gmail" />
            <img src={ICTwitch} alt="twitch" />
          </div>
        </div>
        <div className="col-md-3">
          <p className="text-subtitle">Copyright Binar 2022</p>
          <img src={Rectangle} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
