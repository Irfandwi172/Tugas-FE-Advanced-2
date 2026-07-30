import DaftarPesanan from "../components/DaftarPesanan";
import ListCardPesanan from "../components/ListCardPesanan";
import KelasSaya from "../components/KelasSaya";
import ProfilSaya from "../components/ProfilSaya";
import Footer from "../components/Footer";
import "../style/Pesanan.css";
import { dummyDataKelas } from "../components/data/DummyDataKelas";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Pesanan = () => {
  const [searchParams] = useSearchParams();
  const [activeMenu, setActiveMenu] = useState(
    searchParams.get("tab") || "pesanan",
  );

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setActiveMenu(tab);
  }, [searchParams]);

  return (
    <>
      <div className="pesanan-page">
        <div className="daftar-pesanan-page">
          <DaftarPesanan activeMenu={activeMenu} onMenuClick={setActiveMenu} />
        </div>

        {activeMenu === "pesanan" && <ListCardPesanan />}
        {activeMenu === "kelas" && <KelasSaya dataKelas={dummyDataKelas} />}
        {activeMenu === "profil" && <ProfilSaya />}
      </div>
      <Footer />
    </>
  );
};

export default Pesanan;
