import useFetchCourses from "../hooks/useFetchCourses"; // ← tambahkan ini
import Filter from "../components/Filter";
import CardCollection from "../components/CardCollection";
import "../style/Kelas.css";
import "../style/Filter.css";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import search from "../assets/search.png";

const Product = () => {
  const { courses, loading, error } = useFetchCourses();

  return (
    <>
      <div className="kelas-page">
        <div className="kelas-header">
          <h2>Koleksi Video Pembelajaran Unggulan</h2>
          <p>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>

        <div className="kelas-wrapper">
          <aside className="sidebar">
            <Filter />
          </aside>
          <div className="kelas-content">
            <div className="toolbar-right">
              <select className="sort-select">
                <option value="">Urutkan</option>
                <option value="harga-rendah">Harga Rendah</option>
                <option value="harga-tinggi">Harga Tinggi</option>
                <option value="a-z">A to Z</option>
                <option value="z-a">Z to A</option>
                <option value="rating-tinggi">Rating Tertinggi</option>
                <option value="rating-rendah">Rating Terendah</option>
              </select>
              <div className="search-box">
                <input type="text" placeholder="Cari Kelas" />
                <span>
                  <img src={search} />
                </span>
              </div>
            </div>
            {loading && <p className="status-message">Memuat data...</p>}
            {error && <p className="status-message error">{error}</p>}

            {!loading && !error && (
              <div className="kelas-grid">
                <CardCollection courses={courses} limit={12} />
              </div>
            )}

            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
