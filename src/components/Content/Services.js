import ImgServices from "../../assets/img_service.png";
import ImgChecklist from "../../assets/ceklis.png";
function Services() {
  return (
    <section className="container pt-5">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img className="service-image" src={ImgServices} alt="poto" />
        </div>
        <div className="col-md-6 my-auto">
          <h1 className="text-title">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h1>
          <p className="text-subtitle">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <p className="text-subtitle">
            <span>
              <img src={ImgChecklist} alt="" />
            </span>{" "}
            Mobil Dengan Supir di Bali 12 Jam
          </p>
          <p className="text-subtitle">
            <span>
              <img src={ImgChecklist} alt="" />
            </span>{" "}
            Sewa Mobil Lepas Kunci di Bali 24 Jam
          </p>
          <p className="text-subtitle">
            <span>
              <img src={ImgChecklist} alt="" />
            </span>{" "}
            Sewa Mobil Jangka Panjang Bulanan
          </p>
          <p className="text-subtitle">
            <span>
              <img src={ImgChecklist} alt="" />
            </span>{" "}
            Gratis Antar - Jemput Mobil di Bandara
          </p>
          <p className="text-subtitle">
            <span>
              <img src={ImgChecklist} alt="" />
            </span>{" "}
            Gratis Antar - Jemput Mobil di Bandara
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
