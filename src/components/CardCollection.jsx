import "../style/CardCollection.css";
import { NavLink } from "react-router-dom";

const CourseCard = ({
  id,
  image,
  title,
  description,
  instructorImg,
  instructorName,
  instructorJob,
  rating,
  reviewCount,
  price,
  showActions,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="card">
      {/* Bagian card yang bisa diklik */}
      <NavLink to="/desain" className="card-link">
        <div className="card-img">
          <img src={image} alt={title} />
        </div>

        <div className="card-body">
          <h5>{title}</h5>
          <p>{description}</p>

          <div className="card-footer">
            <div className="instructor">
              <div className="instructor-avatar">
                <img src={instructorImg} alt={instructorName} />
              </div>

              <div className="instructor-info">
                <h6>{instructorName}</h6>
                <p>
                  Senior Accountant di <b>{instructorJob}</b>
                </p>
              </div>
            </div>

          </div>
        </div>
      </NavLink>
       <div className="rate-price">
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`fa fa-star ${
                      star <= rating ? "checked" : ""
                    }`}
                  ></span>
                ))}

                <span className="rating-count">
                  <u>
                    {rating} ({reviewCount})
                  </u>
                </span>
              </div>

              <h3 className="price">{price}</h3>
            </div>
      {/* Tombol aksi berada di luar NavLink */}
      {showActions && (
        <div className="card-actions">
          <button
            type="button"
            className="btn-edit"
            onClick={() => onEdit(id)}
          >
            ✏️ Edit
          </button>

          <button
            type="button"
            className="btn-delete"
            onClick={() => onDelete(id)}
          >
            🗑️ Hapus
          </button>
        </div>
      )}
    </div>
  );
};

const CardCollection = ({
  courses = [],
  limit,
  showActions = false,
  onEdit,
  onDelete,
}) => {
  const displayedCourses = limit
    ? courses.slice(0, limit)
    : courses;

  return (
    <div className="card-grid">
      {displayedCourses.length === 0 ? (
        <p className="empty-message">
          Belum ada course tersedia.
        </p>
      ) : (
        displayedCourses.map((course) => (
          <CourseCard
            key={course.id}
            {...course}
            showActions={showActions}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default CardCollection;