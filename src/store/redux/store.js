import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";

// Konfigurasi store — daftarkan semua reducer di sini
const store = configureStore({
  reducer: {
    course: courseReducer, // akses lewat state.course.courses
  },
});

export default store;