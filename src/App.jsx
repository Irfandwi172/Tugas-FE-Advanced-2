import "./style/App.css";
import logo from "./assets/logo.png";
import { NavLink } from "react-router";

const App = () => {
  return (
    <div className="welcome-container">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <h1>Selamat Datang</h1>
      <p>Yuk, mulai belajar sekarang di VideoBelajar!</p>
      <NavLink to="/login" className="btn-welcome">
        Temukan Video Course untuk Dipelajari!
      </NavLink>
    </div>
  );
};

export default App;
