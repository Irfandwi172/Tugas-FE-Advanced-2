import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStart,
  fetchSuccess,
  fetchError,
} from "../store/redux/courseSlice";
import { getCourses } from "../services/api/courseService";

const useFetchCourses = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.course);

  useEffect(() => {
    if (courses.length === 0 && !loading) {
      const fetchData = async () => {
        dispatch(fetchStart());
        try {
          const data = await getCourses();
          dispatch(fetchSuccess(data));
        } catch (err) {
          dispatch(fetchError("Gagal mengambil data course."));
        }
      };
      fetchData();
    }
  }, [dispatch, courses.length, loading]);

  return { courses, loading, error };
};

export default useFetchCourses;
