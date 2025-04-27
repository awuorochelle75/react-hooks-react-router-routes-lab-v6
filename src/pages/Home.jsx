import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((r) => r.json())
      .then(setMovies);
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </div>
  );
}

export default Home;
