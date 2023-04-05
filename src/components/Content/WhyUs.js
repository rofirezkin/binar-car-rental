import ICComplete from "../../assets/icon_complete.png";
import List from "../atoms/List";

function WhyUs() {
  return (
    <section className="container pt-5">
      <h2 className="text-title">Why Us?</h2>
      <p className="text-subtitle">Mengapa harus pilih Binar Car Rental?</p>
      <div className="row">
        <List
          icon="completed"
          title="Mobil Lengkap"
          description="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
        />
        <List
          icon="price"
          title="Harga Murah"
          description="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
        />
        <List
          icon="hours"
          title="Layanan 24 Jam"
          description="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
        />
        <List
          icon="professional"
          title="Sopir Profesional"
          description="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
        />
      </div>
    </section>
  );
}

export default WhyUs;
