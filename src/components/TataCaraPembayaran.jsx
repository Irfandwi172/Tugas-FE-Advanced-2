import { useState } from "react";
import "../style/TataCaraPembayaran.css";

const instructions = [
  {
    id: "atm-bca",
    title: "ATM BCA",
    steps: [
      "Masukkan kartu ATM dan PIN BCA Anda",
      "Di menu utama, pilih 'Transaksi Lainnya', Pilih 'Transfer'. Pilih 'Ke BCA Virtual Account'",
      "Masukkan nomor Virtual Account",
      "Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih 'Benar'",
      "Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih 'Ya', atau pilih 'Tidak' jika data di layar masih salah",
      "Transaksi Anda sudah selesai. Pilih 'Tidak' untuk tidak melanjutkan transaksi lain",
    ],
  },
  {
    id: "mobile-bca",
    title: "Mobile Banking BCA",
    steps: [
      "Buka Aplikasi BCA Mobile",
      "Pilih 'm-BCA', kemudian pilih 'm-Transfer'",
      "Pilih 'BCA Virtual Account'",
      "Masukkan nomor Virtual Account, lalu pilih 'OK'",
      "Klik tombol 'Send' yang berada di sudut kanan atas aplikasi untuk melakukan transfer",
      "Masukkan PIN Anda untuk meng-otorisasi transaksi",
      "Pilih 'OK' untuk melanjutkan pembayaran",
      "Transaksi Anda telah selesai",
    ],
  },
  {
    id: "internet-bca",
    title: "Internet Banking BCA",
    steps: [
      "Login ke KlikBCA Individual",
      "Pilih 'Transfer', kemudian pilih 'Transfer ke BCA Virtual Account'",
      "Masukkan nomor Virtual Account",
      "Pilih 'Lanjutkan' untuk melanjutkan pembayaran",
      "Masukkan 'RESPON KEYCA APPLI 1' yang muncul pada Token BCA Anda, lalu klik tombol 'Kirim'",
      "Pembayaran telah selesai",
    ],
  },
];

const TataCaraPembayaran = () => {
  // Semua section terbuka secara default
  const [openId, setOpenId] = useState(instructions.map((i) => i.id));

  const toggleSection = (id) => {
    setOpenId((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="tata-cara">
      <h2>Tata Cara Pembayaran</h2>

      {instructions.map((section) => (
        <div className="tata-section" key={section.id}>

          <button
            className="tata-title"
            onClick={() => toggleSection(section.id)}
          >
            <span>{section.title}</span>
            <span className={`tata-arrow ${openId.includes(section.id) ? "open" : ""}`}>
              ∧
            </span>
          </button>

          {openId.includes(section.id) && (
            <ol className="tata-steps">
              {section.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          )}

        </div>
      ))}
    </div>
  );
};

export default TataCaraPembayaran;