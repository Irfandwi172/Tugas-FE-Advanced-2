import "../style/Button.css";
import google from "../assets/google.png";
import { NavLink } from "react-router-dom";

const Button = ({
  loginTo = "/login",
  registerTo = "/register",
  loginLabel = "Masuk",
  registerLabel = "Daftar",
}) => {
  return (
    <>
      <div className="btn">
        <NavLink to={loginTo} className="btn-login">
          {loginLabel}
        </NavLink>
        <NavLink to={registerTo} className="btn-register">
          {registerLabel}
        </NavLink>
      </div>

      <div className="divider">
        <span>atau</span>
      </div>

      <button type="button" className="btn-google">
        <img src={google} alt="Google" />
        Masuk dengan Google
      </button>
    </>
  );
};

export default Button;
