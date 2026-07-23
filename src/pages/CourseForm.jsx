import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // ← hook Redux
import { addCourse, updateCourse } from "../store/redux/courseSlice";
import {
  addCourse as addCourseAPI,
  updateCourse as updateCourseAPI,
} from "../services/api/courseService"; // ← fungsi API dari services/api
import "../style/CourseForm.css";

const emptyForm = {
  title: "",
  description: "",
  instructorName: "",
  instructorJob: "",
  price: "",
  rating: "",
  reviewCount: "",
  image: "",
  instructorImg: "",
};

const CourseForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.course);

  const isEditMode = Boolean(id);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    if (isEditMode) {
      const existingCourse = courses.find(
        (c) => c.id === id || c.id === Number(id),
      );
      if (existingCourse) setForm(existingCourse);
    }
  }, [id, isEditMode, courses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      if (isEditMode) {
        // STEP 4.2 — EDIT: panggil PUT API lalu update Redux state
        const updated = await updateCourseAPI(id, form);
        dispatch(updateCourse(updated));
      } else {
        const created = await addCourseAPI(form);
        dispatch(addCourse(created));
      }
      navigate("/home");
    } catch (err) {
      setSubmitError("Gagal menyimpan data. Periksa koneksi dan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="course-form-page">
      <div className="course-form-card">
        <h2>{isEditMode ? "Edit Course" : "Tambah Course Baru"}</h2>

        {submitError && <p className="form-error">{submitError}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Judul Course *</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Deskripsi *</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>

          <div className="form-group">
            <label>URL Gambar Course</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Nama Instruktur *</label>
              <input
                type="text"
                name="instructorName"
                value={form.instructorName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Perusahaan Instruktur</label>
              <input
                type="text"
                name="instructorJob"
                value={form.instructorJob}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>URL Foto Instruktur</label>
            <input
              type="text"
              name="instructorImg"
              value={form.instructorImg}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Rating (0-5) *</label>
              <input
                type="number"
                name="rating"
                value={form.rating}
                onChange={handleChange}
                min="0"
                max="5"
                step="0.1"
                required
              />
            </div>
            <div className="form-group">
              <label>Jumlah Review</label>
              <input
                type="number"
                name="reviewCount"
                value={form.reviewCount}
                onChange={handleChange}
                min="0"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Harga *</label>
            <input
              type="text"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Rp 300K"
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate("/home")}
              disabled={submitting}
            >
              Batal
            </button>
            <button type="submit" className="btn-submit" disabled={submitting}>
              {submitting
                ? "Menyimpan..."
                : isEditMode
                  ? "Simpan Perubahan"
                  : "Tambah Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
