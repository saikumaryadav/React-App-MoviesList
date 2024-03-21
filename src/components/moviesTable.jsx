import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Table from "./common/table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movies) => (
        <Like
          Liked={movies.liked}
          onClick={() => this.props.onLike(movies)}
        ></Like>
      ),
    },
    {
      key: "delete",
      content: (movies) => (
        <button
          onClick={() => this.props.onDelete(movies)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onLike, onDelete, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        data={movies}
        sortColumn={sortColumn}
      ></Table>
    );
  }
}

export default MoviesTable;
