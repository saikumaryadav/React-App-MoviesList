import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
class movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    console.log(movie);
    let movies = this.state.movies.filter((m) => m._id != movie._id);
    this.setState({ movies: movies });
  };

  render() {
    if (this.state.movies.length === 0) {
      return <h2>No Movies Available</h2>;
    }
    console.log(movies);
    return (
      <React.Fragment>
        <h2>Total movies are {this.state.movies.length}</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>

          <tbody>
            {this.state.movies.map((movies) => (
              <tr key={movies._id}>
                <td>{movies.title}</td>
                <td>{movies.genre.name}</td>
                <td>{movies.numberInStock}</td>
                <td>{movies.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movies)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default movies;
