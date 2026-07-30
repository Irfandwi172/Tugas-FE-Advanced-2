import "../style/CardListPesanan.css";

const statusConfig = {
  berhasil: { label: "Berhasil", className: "status-berhasil" },
  menunggu: { label: "Menunggu", className: "status-menunggu" },
  gagal: { label: "Gagal", className: "status-gagal" },
};

const CardListPesanan = ({
  status,
  noInvoice,
  waktuBayar,
  judulKelas,
  gambar,
  harga,
}) => {
  const currentStatus = statusConfig[status] ?? statusConfig.menunggu;

  return (
    <div className="card-order">
      <header className="collect-header">
        <div className="invoice-info">
          <span>
            <span className="label-desktop">No. Invoice: </span>
            <a href="#" className="invoice-link">
              {noInvoice}
            </a>
          </span>
          <span>
            <span className="label-desktop">Waktu Pembayaran: </span>
            <span className="waktu-value">{waktuBayar}</span>
          </span>
        </div>
        <span className={`status-badge ${currentStatus.className}`}>
          {currentStatus.label}
        </span>
      </header>

      <main className="collect-main">
        <img src={gambar} alt="" />
        <p>{judulKelas}</p>
        <div className="devider-pesanan"></div>
        <div className="harga-pesanan">
          <p>Harga</p>
          <h6>Rp {harga}</h6>
        </div>
      </main>

      <footer className="collect-footer">
        <p>Total Pembayaran</p>
        <div className="total-pesanan">Rp {harga}</div>
      </footer>
    </div>
  );
};

export default CardListPesanan;
