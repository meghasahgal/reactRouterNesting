import { useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { movieId } = useParams();
  //   console.log(movieId);
  const movieChoice = movies.find((el) => el.id === parseInt(movieId));
  //   console.log(movieChoice); returns an obj, so destructure below
  return (
    <div className="comp purple">
      <h1>{movieChoice.title}</h1>
      <p>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
