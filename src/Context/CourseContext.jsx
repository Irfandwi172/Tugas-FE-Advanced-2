import { createContext, useContext, useState, useEffect } from "react";
import {
  getCourses,
  addCourse as addCourseAPI,
  updateCourse as updateCourseAPI,
  deleteCourse as deleteCourseAPI,
} from "../services/api/courseService";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const data = await getCourses();
      setCourses(data);
      setError(null);
    } catch (err) {
      setError("Gagal mengambil data course. Coba lagi nanti.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const addCourse = async (newCourse) => {
    try {
      const created = await addCourseAPI(newCourse);
      setCourses((prev) => [...prev, created]);
    } catch (err) {
      console.error("Gagal menambah course:", err);
      throw err;
    }
  };

  const updateCourse = async (id, updatedData) => {
    try {
      const updated = await updateCourseAPI(id, updatedData);
      setCourses((prev) =>
        prev.map((course) => (course.id === id ? updated : course)),
      );
    } catch (err) {
      console.error("Gagal mengupdate course:", err);
      throw err;
    }
  };

  const deleteCourse = async (id) => {
    try {
      await deleteCourseAPI(id);
      setCourses((prev) => prev.filter((course) => course.id !== id));
    } catch (err) {
      console.error("Gagal menghapus course:", err);
      throw err;
    }
  };

  const getCourseById = (id) => {
    return courses.find(
      (course) => course.id === String(id) || course.id === id,
    );
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        loading,
        error,
        addCourse,
        updateCourse,
        deleteCourse,
        getCourseById,
        refetch: fetchCourses,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error("useCourses harus dipakai di dalam CourseProvider");
  }
  return context;
};
