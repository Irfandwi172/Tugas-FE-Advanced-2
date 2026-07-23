import axios from "axios";

// Ambil base URL dari .env — supaya tidak hardcode di kode
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Buat instance axios khusus — supaya konfigurasi (baseURL, header) terpusat
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ===== INTERCEPTOR =====
// Request interceptor — dijalankan SEBELUM request dikirim
// Bisa dipakai untuk logging, menambahkan token auth, dll
api.interceptors.request.use(
  (config) => {
    console.log(`[API Request] ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor — dijalankan SETELAH response diterima
// Bisa dipakai untuk logging, atau menangani error secara terpusat
api.interceptors.response.use(
  (response) => {
    console.log(`[API Response] ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error("[API Error]", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// ===== CRUD FUNCTIONS =====

// GET — ambil semua course
export const getCourses = async () => {
  const response = await api.get("/courses");
  return response.data;
};

// GET — ambil satu course berdasarkan id
export const getCourseById = async (id) => {
  const response = await api.get(`/courses/${id}`);
  return response.data;
};

// POST — tambah course baru
export const addCourse = async (courseData) => {
  const response = await api.post("/courses", courseData);
  return response.data;
};

// PUT — update course yang sudah ada
export const updateCourse = async (id, updatedData) => {
  const response = await api.put(`/courses/${id}`, updatedData);
  return response.data;
};

// DELETE — hapus course
export const deleteCourse = async (id) => {
  const response = await api.delete(`/courses/${id}`);
  return response.data;
};

export default api;