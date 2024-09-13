import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = '98e3fb1f';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch movie details.');
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  return (
    <div className="movie-detail">
      <img src={movie.Poster} alt={movie.Title} />
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Cast:</strong> {movie.Actors}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Year:</strong> {movie.Year}</p>
    </div>
  );
};

export default MovieDetail;
