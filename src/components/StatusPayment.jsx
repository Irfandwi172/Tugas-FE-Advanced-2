import Done from "../assets/paymentDone.png";
import "../style/StatusPayment.css";
import { NavLink } from "react-router-dom";
const StatusPayment = () => {
  return (
    <div className="status-payment">
      <img src={Done} alt="" />
      <h4>Pembayaran Berhasil</h4>
      <p>
        Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika
        ada kendala.
      </p>
      <NavLink type="button" className="btn btn-primary" to="/pesanan">
        Lihat Detail Pesanan
      </NavLink>
    </div>
  );
};

export default StatusPayment;
