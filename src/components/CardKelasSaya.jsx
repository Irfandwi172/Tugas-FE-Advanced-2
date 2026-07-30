import iconModul from "../assets/Book.png";
import iconWaktu from "../assets/Clock.png";
import "../style/CardKelasSaya.css";

const statusConfig = {
  selesai: { label: "Selesai", className: "status-selesai" },
  berjalan: { label: "Sedang Berjalan", className: "status-berjalan" },
};

const CardKelasSaya = ({
  modulSelesai,
  totalModul,
  status,
  gambar,
  judul,
  deskripsi,
  namaInstruktur,
  jabatanInstruktur,
  perusahaanInstruktur,
  fotoInstruktur,
  durasiMenit,
  progres,
}) => {
  const currentStatus = statusConfig[status] ?? statusConfig.berjalan;

  return (
    <div className="kelas-card">
      <div className="kelas-card-header">
        <span>
          {modulSelesai} / {totalModul} Modul Terselesaikan
        </span>
        <span className={`status-badge ${currentStatus.className}`}>
          {currentStatus.label}
        </span>
      </div>

      <div className="kelas-card-body">
        <img src={gambar} alt={judul} className="kelas-thumbnail" />
        <div className="kelas-info">
          <h6>{judul}</h6>
          <p>{deskripsi}</p>
          <div className="kelas-instruktur">
            <img src={fotoInstruktur} alt={namaInstruktur} />
            <div>
              <p className="nama-instruktur">{namaInstruktur}</p>
              <p className="jabatan-instruktur">
                {jabatanInstruktur} di <strong>{perusahaanInstruktur}</strong>
              </p>
            </div>
          </div>
          <div className="kelas-meta">
            <span>
              <img src={iconModul} alt="" /> {totalModul} Modul
            </span>
            <span>
              <img src={iconWaktu} alt="" /> {durasiMenit} Menit
            </span>
          </div>
        </div>
      </div>

      <div className="kelas-card-footer">
        <div className="progress-wrapper">
          <span>Progres Kelas: {progres}%</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progres}%` }} />
          </div>
        </div>
        <div className="kelas-actions">
          {status === "selesai" ? (
            <>
              <button className="btn-outline">Unduh Sertifikat</button>
              <button className="btn-filled">Lihat Detail Kelas</button>
            </>
          ) : (
            <button className="btn-filled">Lanjutkan Pembelajaran</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardKelasSaya;
