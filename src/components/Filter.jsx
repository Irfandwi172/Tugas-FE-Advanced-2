import { useState } from "react";
import "../style/Filter.css";

const Filter = () => {
  const [openBidang, setOpenBidang] = useState(true);
  const [openHarga, setOpenHarga] = useState(true);
  const [openDurasi, setOpenDurasi] = useState(true);

  const [bidang, setBidang] = useState([]);
  const [harga, setHarga] = useState([]);

  const [durasi, setDurasi] = useState("");

  const handleCheckbox = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const Reset = () => {
    setBidang([]);
    setHarga([]);
    setDurasi("");
  };

  return (
    <>
      <div className="sidebar-header">
        <span>Filter</span>
        <button className="reset-btn" onClick={Reset}>
          Reset
        </button>
      </div>

      <div className="filter-group">
        <div
          className="filter-title"
          onClick={() => setOpenBidang(!openBidang)}
        >
          <span>📚</span>
          <span>Bidang Studi</span>
          <span className="arrow">{openBidang ? "▲" : "▼"}</span>
        </div>

        {openBidang && (
          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                checked={bidang.includes("Pemasaran")}
                onChange={() => handleCheckbox("Pemasaran", bidang, setBidang)}
              />
              Pemasaran
            </label>
            <label>
              <input
                type="checkbox"
                checked={bidang.includes("Digital & Teknologi")}
                onChange={() =>
                  handleCheckbox("Digital & Teknologi", bidang, setBidang)
                }
              />
              Digital &amp; Teknologi
            </label>
            <label>
              <input
                type="checkbox"
                checked={bidang.includes("Pengembangan Diri")}
                onChange={() =>
                  handleCheckbox("Pengembangan Diri", bidang, setBidang)
                }
              />
              Pengembangan Diri
            </label>
            <label>
              <input
                type="checkbox"
                checked={bidang.includes("Bisnis Manajemen")}
                onChange={() =>
                  handleCheckbox("Bisnis Manajemen", bidang, setBidang)
                }
              />
              Bisnis Manajemen
            </label>
          </div>
        )}
      </div>
      <div className="filter-group">
        <div className="filter-title" onClick={() => setOpenHarga(!openHarga)}>
          <span>💰</span>
          <span>Harga</span>
          <span className="arrow">{openHarga ? "▲" : "▼"}</span>
        </div>

        {openHarga && (
          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                checked={harga.includes("Gratis")}
                onChange={() => handleCheckbox("Gratis", harga, setHarga)}
              />
              Gratis
            </label>
            <label>
              <input
                type="checkbox"
                checked={harga.includes("Berbayar")}
                onChange={() => handleCheckbox("Berbayar", harga, setHarga)}
              />
              Berbayar
            </label>
          </div>
        )}
      </div>
      <div className="filter-group">
        <div
          className="filter-title"
          onClick={() => setOpenDurasi(!openDurasi)}
        >
          <span>⏱</span>
          <span>Durasi</span>
          <span className="arrow">{openDurasi ? "▲" : "▼"}</span>
        </div>

        {openDurasi && (
          <div className="filter-options">
            <label>
              <input
                type="radio"
                name="durasi"
                checked={durasi === "Kurang dari 4 Jam"}
                onChange={() => setDurasi("Kurang dari 4 Jam")}
              />
              Kurang dari 4 Jam
            </label>
            <label>
              <input
                type="radio"
                name="durasi"
                checked={durasi === "4 - 8 Jam"}
                onChange={() => setDurasi("4 - 8 Jam")}
              />
              4 - 8 Jam
            </label>
            <label>
              <input
                type="radio"
                name="durasi"
                checked={durasi === "Lebih dari 8 Jam"}
                onChange={() => setDurasi("Lebih dari 8 Jam")}
              />
              Lebih dari 8 Jam
            </label>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
