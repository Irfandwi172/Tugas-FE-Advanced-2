import React from "react";
import "../style/Metode.css";
import iconBCA from "../assets/bank_bca.png";
import { NavLink } from "react-router-dom";

const Metode = ({
  showPaymentMethod = true,
  showChangeButton = true,
  showTextMethod = true,
  showPayButton = true,
  payTo = "/pay",           // ← default ke /pay, bisa diubah ke /selesai
  payLabel = "Beli Sekarang", // ← label tombol bisa diubah juga
}) => {
  const subtotal = 767500;
  const adminFee = 7000;
  const total = subtotal + adminFee;

  const formatRupiah = (value) => `Rp ${value.toLocaleString("id-ID")}`;

  return (
    <div className="payment-card">
      {showTextMethod && <h5>Metode Pembayaran</h5>}

      {showPaymentMethod && (
        <div className="payment-method">
          <img src={iconBCA} alt="BCA" />
          <p>Bayar Melalui Virtual Account BCA</p>
          <span>
            Nomor rekening: 123456789{" "}
            <span style={{ color: "red" }}>salin</span>
          </span>
        </div>
      )}

      <div className="summary-card">
        <h2>Ringkasan Pesanan</h2>

        <div className="summary-row">
          <span className="summary-text">
            Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX
            Designer & Product Manager.
          </span>
          <span className="summary-price">{formatRupiah(subtotal)}</span>
        </div>

        <div className="summary-row">
          <span className="summary-text">Biaya Admin</span>
          <span className="summary-price">{formatRupiah(adminFee)}</span>
        </div>

        <div className="summary-divider"></div>

        <div className="summary-row-total">
          <h6>Total Pembayaran</h6>
          <span className="summary-total-price">{formatRupiah(total)}</span>
        </div>

        <div className="buttons">
          {showChangeButton && (
            <NavLink className="btn-change" to="/checkout">
              Ganti Metode Pembayaran
            </NavLink>
          )}

          {showPayButton && (
            <NavLink className="btn-pay" to={payTo}>
              {payLabel}
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Metode;