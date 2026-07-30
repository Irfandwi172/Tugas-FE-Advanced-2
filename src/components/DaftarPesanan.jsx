import iconProfil from "../assets/Person.png";
import iconKelas from "../assets/Book.png";
import iconPesanan from "../assets/ShoppingBasket.png";
import "../style/DaftarPesanan.css";

const DaftarPesanan = ({ activeMenu, onMenuClick }) => {
  const cardPesanan = [
    {
      key: "profil",
      icon: iconProfil,
      label: "Profil Saya",
    },
    {
      key: "kelas",
      icon: iconKelas,
      label: "Kelas Saya",
    },
    {
      key: "pesanan",
      icon: iconPesanan,
      label: "Pesanan Saya",
    },
  ];

  return (
    <div className="daftar-pesanan">
      <h5>Daftar Pesanan</h5>
      <p>Informasi terperinci mengenai pembelian</p>
      <div className="card-saya">
        {cardPesanan.map((item) => (
          <div
            className={`card-pesanan ${activeMenu === item.key ? "active" : ""}`}
            key={item.key}
            onClick={() => onMenuClick(item.key)}
          >
            <img src={item.icon} alt={item.label} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaftarPesanan;
