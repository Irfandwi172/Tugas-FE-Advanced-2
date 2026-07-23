import "../style/ProfileCard.css";

const ProfileCard = ({ avatar, name, subtitle, description, rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="profile-card-grid">
      <div className="profile-card">

        <div className="profile-header">
          <img src={avatar} alt={name} className="profile-avatar" />
          <div>
            <h6>{name}</h6>
            <p className="profile-subtitle">{subtitle}</p>
          </div>
        </div>

        <p className="profile-description">{description}</p>

        {rating && (
          <div className="rating-desain">
            {stars.map((star) => (
              <span
                key={star}
                className={`fa fa-star ${star <= rating ? "checked" : ""}`}
              ></span>
            ))}
            <span className="rating-count"><u>{rating}</u></span>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProfileCard;