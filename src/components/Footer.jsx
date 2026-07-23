import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Footer.css";
import logo from "../assets/logo.png";

const footerLinks = [
  {
    title: "Kategori",
    links: [
      { label: "Digital & Teknologi", to: "/digital-teknologi" },
      { label: "Pemasaran", to: "/pemasaran" },
      { label: "Pengembangan Bisnis", to: "/pengembangan-bisnis" },
      { label: "Desain", to: "/desain" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", to: "/tentang-kami" },
      { label: "Menjadi Instruktur", to: "/instruktur" },
      { label: "Kebijakan Privasi", to: "/privasi" },
      { label: "Karier Lowongan", to: "/karier" },
    ],
  },
  {
    title: "Komunitas",
    links: [
      { label: "Tips Sukses", to: "/tips-sukses" },
      { label: "Blog", to: "/blog" },
    ],
  },
];

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <span className="logo-video">
              <b>Video</b>
            </span>
            <span className="logo-belajar">
              <b>Belajar</b>
            </span>
          </div>
          <p className="footer-tagline">
            Gali Potensi Anda Melalui Pembelajaran Video di VideoBelajar!
          </p>
          <p className="footer-address">
            Jl. Raya Kamboja Desa Kragan, Kecamatan Gedangan, Kabupaten Sidoarjo
          </p>
          <p className="footer-phone">+62-821-3133-4965</p>
        </div>

        <div className="footer-links">
          {footerLinks.map((col, index) => (
            <div className="footer-col" key={col.title}>
              <h6 onClick={() => toggleAccordion(index)}>
                {col.title}
                <span
                  className={`footer-arrow ${openIndex === index ? "open" : ""}`}
                >
                  ›
                </span>
              </h6>

              <div
                className={`footer-col-links ${openIndex === index ? "show" : ""}`}
              >
                {col.links.map((link) => (
                  <NavLink to={link.to} key={link.label}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="copyright">
        <p>@2026 Irfan Dwi Arfianto All Rights Reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/irfan-dwi-arfianto-617955353/"
            className="social-icon"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/irfdw_172/"
            className="social-icon"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
