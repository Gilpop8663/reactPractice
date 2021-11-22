import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

function Movie({ id, title, imgCover, summary, genres }) {
  return (
    <div>
      <div className={styles.movie}>
        <div>
          <img className={styles.poster} src={imgCover} alt={title} />
        </div>
        <div>
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <p>
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
          <ul>
            {genres.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imgCover: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
