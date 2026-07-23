import { useState } from "react";
import "../style/registerCard.css";
import { NavLink } from "react-router-dom";
import hide from "../assets/hide.png";
import show from "../assets/show.png";
import Button from "./button";

const RegisterCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const countries = [
    { code: "id", name: "Indonesia", dial: "+62" },
    { code: "us", name: "USA", dial: "+1" },
    { code: "my", name: "Malaysia", dial: "+60" },
    { code: "sg", name: "Singapore", dial: "+65" },
    { code: "gb", name: "UK", dial: "+44" },
    { code: "jp", name: "Japan", dial: "+81" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <main>
      <div className="register-card">
        <div className="text">
          <h2>Pendaftaran Akun</h2>
          <p>Yuk, daftarkan akunmu sekarang juga!</p>
        </div>

        <form>
          <div className="form-group">
            <label>
              Nama Lengkap <span className="required">*</span>
            </label>
            <input type="text" placeholder="" />
          </div>

          <div className="form-group">
            <label>
              E-Mail <span className="required">*</span>
            </label>
            <input type="email" placeholder="" />
          </div>

          <div className="form-group">
            <label>
              No. Hp <span className="required">*</span>
            </label>
            <div className="phone-wrapper">
              <div className="phone-prefix">
                <img
                  src={`https://flagcdn.com/w20/${selectedCountry.code}.png`}
                  alt={selectedCountry.code}
                  width={20}
                />
                <select
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const found = countries.find(
                      (c) => c.code === e.target.value,
                    );
                    setSelectedCountry(found);
                  }}
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.dial}
                    </option>
                  ))}
                </select>
              </div>
              <input type="text" placeholder="" />
            </div>
          </div>

          <div className="form-group">
            <label>
              Kata Sandi <span className="required">*</span>
            </label>
            <div className="password-wrapper">
              <input type={showPassword ? "text" : "password"} />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={showPassword ? hide : show} alt="toggle" />
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>
              Konfirmasi Kata Sandi <span className="required">*</span>
            </label>
            <div className="password-wrapper">
              <input type={showConfirm ? "text" : "password"} />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                <img src={showConfirm ? hide : show} alt="toggle" />
              </button>
            </div>
            <div className="forgot">
              <NavLink to="#">Lupa Password?</NavLink>
            </div>
          </div>
          <Button
            loginTo="/login"
            registerTo="/login"
            loginLabel="Daftar"
            registerLabel="Masuk"
          />
        </form>
      </div>
    </main>
  );
};

export default RegisterCard;
