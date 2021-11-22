import { useEffect, useState } from "react";
import Movie from "../components/Moive";
import styles from "../App.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.content}>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <span className={styles.title}>Moive Rank!</span>
          <div className={styles.grid}>
            {movies.map((item) => (
              <Movie
                key={item.id}
                id={item.id}
                title={item.title}
                imgCover={item.medium_cover_image}
                summary={item.summary}
                genres={item.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
