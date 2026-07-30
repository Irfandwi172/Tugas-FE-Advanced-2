import "../style/CardOffer.css";
import iconUjian from "../assets/Vector.png";
import iconDokumen from "../assets/book-2.png";
import iconPretest from "../assets/File_Edit.png";
import iconVideo from "../assets/video.png";
import iconSertifikat from "../assets/file-certificate.png";
import { NavLink } from "react-router-dom";

const classInclude = [
  { icon: iconUjian, label: "Ujian Akhir" },
  { icon: iconDokumen, label: "7 Dokumen" },
  { icon: iconPretest, label: "Pretest" },
  { icon: iconVideo, label: "49 video" },
  { icon: iconSertifikat, label: "Sertifikat" },
];

const CardOffer = ({ showImage = false, courseImg, showButton = true }) => {
  return (
    <div className="card-offer">
      {showImage && courseImg && (
        <img src={courseImg} alt="Course" className="course-offer-img" />
      )}

      <h3>
        Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
      </h3>

      <div className="offer-price">
        <h4>Rp 250K</h4>
        <span className="normalPrice">Rp 500K</span>
        <span className="discount">Diskon 50%</span>
        <p>Penawaran spesial tersisa 2 hari lagi!</p>
      </div>

      {showButton && (
        <NavLink className="btn-offer" to="/checkout">
          Beli Sekarang
        </NavLink>
      )}

      <div className="include">
        <p>Kelas ini sudah termasuk</p>
        <div className="include-item">
          {classInclude.map((item, index) => (
            <span key={index} className="include-single">
              <img src={item.icon} alt={item.label} className="include-icon" />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {showImage && (
        <div className="course-summary-lang">
          <p className="included-label">Bahasa Pengantar</p>
          <div className="lang-item">
            <span>🌐 Bahasa Indonesia</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardOffer;
