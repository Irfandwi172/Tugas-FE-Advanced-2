import Done from "../assets/paymentDone.png";
import "../style/StatusPayment.css";
const StatusPayment = () => {
  return (
    <div className="status-payment">
      <img src={Done} alt="" />
      <h4>Pembayaran Berhasil</h4>
      <p>
        Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika
        ada kendala.
      </p>
      <button type="button" className="btn btn-primary">
        Lihat Detail Pesanan
      </button>
    </div>
  );
};

export default StatusPayment;
