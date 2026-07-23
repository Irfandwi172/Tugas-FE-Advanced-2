import { createSlice } from "@reduxjs/toolkit";

// Initial state — array kosong, nantinya diisi dari API
const initialState = {
  courses: [],      // data courses dari API
  loading: false,   // status loading saat fetch
  error: null,      // pesan error kalau fetch gagal
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    // Dipanggil saat mulai fetch data (loading true)
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    // Dipanggil saat fetch berhasil — simpan data ke state
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload; // payload = array courses dari API
    },

    // Dipanggil saat fetch gagal
    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload; // payload = pesan error
    },

    // Tambah satu course baru ke state (setelah POST ke API berhasil)
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },

    // Update satu course di state (setelah PUT ke API berhasil)
    updateCourse: (state, action) => {
      const index = state.courses.findIndex(
        (course) => course.id === action.payload.id
      );
      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },

    // Hapus satu course dari state (setelah DELETE ke API berhasil)
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload // payload = id yang dihapus
      );
    },
  },
});

// Export actions — dipakai di komponen untuk dispatch
export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  addCourse,
  updateCourse,
  deleteCourse,
} = courseSlice.actions;

// Export reducer — didaftarkan ke store
export default courseSlice.reducer;