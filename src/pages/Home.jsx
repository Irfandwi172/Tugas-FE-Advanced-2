import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // ← hook Redux
import {
  fetchStart,
  fetchSuccess,
  fetchError,
  deleteCourse,
} from "../store/redux/courseSlice";
import {
  getCourses,
  deleteCourse as deleteCourseAPI,
} from "../services/api/courseService"; // ← fungsi API dari services/api
import CardCollection from "../components/CardCollection";
import Footer from "../components/Footer";
import heroBg from "../assets/Belajar-Online.jpg";
import "../style/Home.css";

const HomePage = () => {
  const { courses, loading, error } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      dispatch(fetchStart());
      try {
        const data = await getCourses();
        dispatch(fetchSuccess(data));
      } catch (err) {
        dispatch(fetchError("Gagal mengambil data course."));
      }
    };

    fetchCourses();
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus course ini?")) {
      try {
        await deleteCourseAPI(id);
        dispatch(deleteCourse(id));
      } catch {
        alert("Gagal menghapus course. Coba lagi.");
      }
    }
  };

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p>
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <NavLink to="#koleksi" className="btn-hero">
            Temukan Video Course untuk Dipelajari!
          </NavLink>
        </div>
      </section>

      <section className="collect" id="koleksi">
        <div className="collect-header">
          <div>
            <h3>Koleksi Video Pembelajaran Unggulan</h3>
            <p className="collect-sub">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </p>
          </div>
          <button
            type="button"
            className="btn-add-course"
            onClick={() => navigate("/course/add")}
          >
            + Tambah Course
          </button>
        </div>

        <nav className="filter-nav">
          <a href="#" className="active">
            Semua Kelas
          </a>
          <a href="#">Pemasaran</a>
          <a href="#">Desain</a>
          <a href="#">Pengembangan Diri</a>
          <a href="#">Bisnis</a>
        </nav>
      </section>

      {loading && <p className="status-message">Memuat data course...</p>}
      {error && <p className="status-message error">{error}</p>}

      {!loading && !error && (
        <CardCollection
          courses={courses}
          showActions={true}
          onEdit={(id) => navigate(`/course/edit/${id}`)}
          onDelete={handleDelete}
        />
      )}

      <section
        className="newsletter"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="newsletter-inner">
          <p className="nl-label">NEWSLETTER</p>
          <h3>Mau Belajar Lebih Banyak?</h3>
          <p className="nl-desc">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
          <div className="nl-form">
            <input type="email" placeholder="Masukkan email kamu..." />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
