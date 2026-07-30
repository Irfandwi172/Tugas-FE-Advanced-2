import { useState } from "react";
import search from "../assets/search.png";
import CardListPesanan from "./CardListPesanan";
import "../style/ListCardPesanan.css";
import { dummyDataPesanan } from "./data/DummyDataPesanan.js";

const tabsPesanan = [
  { key: "semua", label: "Semua Pesanan" },
  { key: "menunggu", label: "Menunggu" },
  { key: "berhasil", label: "Berhasil" },
  { key: "gagal", label: "Gagal" },
];

const ListCardPesanan = () => {
  const [activeTab, setActiveTab] = useState("semua");
  const [keyword, setKeyword] = useState("");

  const filteredPesanan = dummyDataPesanan.filter((item) => {
    const matchTab = activeTab === "semua" ? true : item.status === activeTab;
    const matchSearch = item.judulKelas.toLowerCase().includes(keyword.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="list-card-pesanan">
      <div className="pesanan-header">
        <div className="category-pesanan">
          {tabsPesanan.map((tab) => (
            <button
              key={tab.key}
              className={`tab-pesanan ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="filter-pesanan">
          <div className="toolbar-right">
            <select className="sort-select">
              <option value="">Urutkan</option>
              <option value="harga-rendah">Harga Rendah</option>
              <option value="harga-tinggi">Harga Tinggi</option>
              <option value="a-z">A to Z</option>
              <option value="z-a">Z to A</option>
            </select>
            <div className="search-box">
              <input
                type="text"
                placeholder="Cari Kelas"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <span>
                <img src={search} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {filteredPesanan.length > 0 ? (
        filteredPesanan.map((item) => (
          <CardListPesanan key={item.id} {...item} />
        ))
      ) : (
        <p className="empty-state">Tidak ada pesanan ditemukan.</p>
      )}
    </div>
  );
};

export default ListCardPesanan;