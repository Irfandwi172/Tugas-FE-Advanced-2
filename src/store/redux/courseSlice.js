import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    fetchSuccess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },

    fetchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },

    updateCourse: (state, action) => {
      const index = state.courses.findIndex(
        (course) => course.id === action.payload.id,
      );
      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },

    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload,
      );
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  addCourse,
  updateCourse,
  deleteCourse,
} = courseSlice.actions;

export default courseSlice.reducer;
