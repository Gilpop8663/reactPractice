import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

function Detail() {
  const [movie, setMovie] = useState();
  //console.log(movie);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //console.log(id);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json.data.movie);
    await setMovie(json.data.movie);
    console.log(movie + "처음");
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie + "두번쨰");
  return (
    <div className={styles.detailContainer}>
      <div></div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div className={styles.detailContainer}>
          <Link to="/" className={styles.home}>
            Home
          </Link>
          <div>
            <img src={movie.large_cover_image} alt={movie.title}></img>
          </div>
          <div className={styles.detail}>
            <div className={styles.span}>
              <h2>{movie.title}</h2>
              <h5>({movie.year})</h5>
            </div>
            <div className={styles.span}>
              <h3>Rating : {movie.rating}</h3>
              <h4>Run Time :{movie.runtime}</h4>
            </div>

            <p>{movie.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
