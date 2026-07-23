import "../style/Card.css";
import { NavLink } from "react-router-dom";
import Button from "./button";
import hide from "../assets/hide.png";
import show from "../assets/show.png";
import { useState } from "react";

const Card = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main>
      <div className="login-card">
        <div className="text">
          <h2>Masuk ke Akun</h2>
          <p>Yuk, lanjutin belajarmu di videobelajar.</p>
        </div>

        <form action="">
          <div className="form-group">
            <label htmlFor="email">
              E-Mail <span className="required">*</span>
            </label>
            <input type="email" id="email" placeholder="" />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Kata Sandi <span className="required">*</span>
            </label>
            <div className="password-wrapper">
              <input type={showPassword ? "text" : "password"} />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={showPassword ? hide : show} alt="" />
              </button>
            </div>
            <div className="forgot">
              <NavLink to="#">Lupa Password?</NavLink>
            </div>
          </div>
          <Button
            loginTo="/home"
            registerTo="/register"
            loginLabel="Masuk"
            registerLabel="Daftar"
          />
        </form>
      </div>
    </main>
  );
};

export default Card;
