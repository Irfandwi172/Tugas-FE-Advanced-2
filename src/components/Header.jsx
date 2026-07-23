import logo from "../assets/logo.png";
import orang from "../assets/orang1.png";
import { Outlet, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "../style/Header.css";

const Header = ({ showProfile = false, showMethod = false, currentStep = 1 }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span className="logo-video">
            <b>video</b>
          </span>
          <span className="logo-belajar">
            <b>belajar</b>
          </span>
        </div>
       {showMethod && (
  <div className="chooseMethod desktop-only">

    {/* Step 1 — Pilih Metode */}
    <div className={`method-step ${currentStep >= 1 ? "active" : ""} ${currentStep > 1 ? "done" : ""}`}>
      <span className="round">
        {currentStep > 1 ? "✓" : ""}
      </span>
      <span className="method-label">Pilih Metode</span>
    </div>

    <span className={`method-line ${currentStep > 1 ? "done" : ""}`}></span>

    {/* Step 2 — Bayar */}
    <div className={`method-step ${currentStep >= 2 ? "active" : ""} ${currentStep > 2 ? "done" : ""}`}>
      <span className="round">
        {currentStep > 2 ? "✓" : ""}
      </span>
      <span className="method-label">Bayar</span>
    </div>

    <span className={`method-line ${currentStep > 2 ? "done" : ""}`}></span>

    {/* Step 3 — Selesai */}
    <div className={`method-step ${currentStep >= 3 ? "active" : ""}`}>
      <span className="round"></span>
      <span className="method-label">Selesai</span>
    </div>

  </div>
)}
        {showProfile && (
          <div className="nav-right desktop-only">
            <NavLink to="/product" className="nav-kategori">Kategori</NavLink>
            <div className="profile-wrapper" ref={dropdownRef}>
              <img
                src={orang}
                alt="profil"
                className="profile-img"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <NavLink to="/profil" className="dropdown-item">
                    Profil Saya
                  </NavLink>
                  <NavLink to="/product" className="dropdown-item">
                    Kelas Saya
                  </NavLink>
                  <NavLink to="/pesanan" className="dropdown-item">
                    Pesanan Saya
                  </NavLink>
                  <NavLink to="/" className="dropdown-item keluar">
                    Keluar 🚪
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}

        {(showProfile || showMethod) && (
          <button
            className="burger-btn mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`burger-icon ${mobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        )}
      </header>
      {showMethod && (
        <div className="chooseMethod mobile-only method-bar">
          <div className="method-step active">
            <span className="round"></span>
            <span className="method-label">Pilih Metode</span>
          </div>
          <span className="method-line"></span>
          <div className="method-step">
            <span className="round"></span>
            <span className="method-label">Bayar</span>
          </div>
          <span className="method-line"></span>
          <div className="method-step">
            <span className="round"></span>
            <span className="method-label">Selesai</span>
          </div>
        </div>
      )}
      {(showProfile || showMethod) && mobileMenuOpen && (
        <div className="mobile-menu">
          <NavLink
            to="#"
            className="mobile-menu-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kategori
          </NavLink>
          <NavLink
            to="/profil"
            className="mobile-menu-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Profil Saya
          </NavLink>
          <NavLink
            to="/product"
            className="mobile-menu-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kelas Saya
          </NavLink>
          <NavLink
            to="/pesanan"
            className="mobile-menu-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pesanan Saya
          </NavLink>
          <NavLink
            to="/"
            className="mobile-menu-item keluar"
            onClick={() => setMobileMenuOpen(false)}
          >
            Keluar 🚪
          </NavLink>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Header;
