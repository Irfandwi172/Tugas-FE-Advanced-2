import heroBg from "../assets/Belajar-Online.jpg";
import "../style/Desain.css";
import CardOffer from "../components/CardOffer";
import tutorImg from "../assets/tutor.png";
import ProfileCard from "../components/ProfilCard";
import Materi from "../components/Materi";
import CardCollection from "../components/CardCollection";
import Footer from "../components/Footer";
import useFetchCourses from "../hooks/useFetchCourses";

const Desain = () => {
   const { courses } = useFetchCourses();
  return (
    <>
      <div className="breadcrumb-desain">
        <span className="breadcrumb"> Beranda / Desain / </span>
        <span className="judul">
          Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager
        </span>
      </div>
      <section
        className="hero-desain"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-over"></div>
        <div className="hero-cont">
          <h1>
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
            Manager.
          </h1>
          <p>
            Belajar bersama tutor profesional di Video Course. Kapanpun, di
            manapun.
          </p>
          <div className="rating-desain">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="rating-count">
              <u>3.5 (86)</u>
            </span>
          </div>
        </div>
      </section>

      <section className="desc-offer">
        <aside>
          <CardOffer />
        </aside>
        <div className="desain-main">
          <article className="desc-desain">
            <h2>Deskripsi Kursus</h2>
            <p>
              Foundations of User Experience (UX) Design adalah yang pertama
              dari rangkaian tujuh kursus yang akan membekali Anda dengan
              keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat
              pemula dalam desain pengalaman pengguna. Desainer UX fokus pada
              interaksi yang dilakukan orang dengan produk seperti situs web,
              aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi
              sehari-hari itu dapat digunakan, menyenangkan, dan dapat diakses.
              Peran seorang desainer UX tingkat pemula mungkin termasuk
              berempati dengan pengguna, menentukan poin rasa sakit mereka,
              memunculkan ide untuk solusi desain, membuat wireframe, prototipe,
              dan maket, dan menguji desain untuk mendapatkan umpan balik.
            </p>
          </article>

          <section className="tutor">
            <h5>Belajar bersama Tutor Profesional</h5>
            <div className="tutor-grid">
              <ProfileCard
                avatar={tutorImg}
                name={"Gregorius Edrik Lawanto"}
                subtitle={
                  <>
                    Senior Talent Acquisition di <b>WingsGroup</b>
                  </>
                }
                description={
                  "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun."
                }
              />
              <ProfileCard
                avatar={tutorImg}
                name={"Gregorius Edrik Lawanto"}
                subtitle={
                  <>
                    Senior Talent Acquisition di <b>WingsGroup</b>
                  </>
                }
                description={
                  "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun."
                }
              />
            </div>
          </section>

          <Materi />

          <section className="ratingReview">
            <h5>Rating & Review</h5>
            <div className="tutor-grid">
              <ProfileCard
                avatar={tutorImg}
                name={"Gregorius Edrik Lawanto"}
                subtitle={"Alumni Batch 2"}
                description={
                  "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun."
                }
                rating={3.5}
              />
              <ProfileCard
                avatar={tutorImg}
                name={"Gregorius Edrik Lawanto"}
                subtitle={"Alumni Batch 2"}
                description={
                  "Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun."
                }
                rating={3.5}
              />
            </div>
          </section>
        </div>
      </section>
      <section className="otherCourse">
        <h2>Video Pembelajaran Terkait Lainnya</h2>
        <p>Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
        <div className="otherCourse-grid">
          <CardCollection courses={courses} limit={3} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Desain;
