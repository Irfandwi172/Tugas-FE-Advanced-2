import { useState } from "react";
import "../style/Materi.css";

const materiData = [
  {
    title: "Introduction to Course 1: Foundations of User Experience Design",
    lessons: [
      { title: "The basics of user experience design", duration: "12 Menit" },
      { title: "Jobs in the field of user experience", duration: "12 Menit" },
      { title: "The product development life cycle", duration: "12 Menit" },
    ],
  },
  {
    title: "Universal design, inclusive design, and equity-focused design",
    lessons: [],
  },
  {
    title: "Introduction to design sprints",
    lessons: [],
  },
  {
    title: "Introduction to UX research",
    lessons: [],
  },
];

const Materi = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="materi">
      <h5>Kamu akan Mempelajari</h5>

      {materiData.map((materi, index) => (
        <div className="materi-module" key={index}>
          <div className="materi-title" onClick={() => toggleOpen(index)}>
            <span>{materi.title}</span>
            <span
              className={`materi-arrow ${openIndex === index ? "open" : ""}`}
            >
              ▾
            </span>
          </div>
          {openIndex === index && materi.lessons.length > 0 && (
            <div className="materi-lessons">
              {materi.lessons.map((lesson, i) => (
                <div className="lesson-item" key={i}>
                  <span className="lesson-title">{lesson.title}</span>
                  <div className="lesson-meta">
                    <span className="lesson-type">▶ Video</span>
                    <span className="lesson-duration">
                      🕐 {lesson.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Materi;
