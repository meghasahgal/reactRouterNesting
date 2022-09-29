import { Route, Switch, NavLink, useParams } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((el) => (
          <span key={el.id} style={{ margin: "5px" }}>
              {/* grabbing the title of each movie */}
            <NavLink to={`/movies/${el.id}`}>{el.title}</NavLink>
          </span>
        ))}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
