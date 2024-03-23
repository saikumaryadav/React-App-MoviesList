import logo from "./logo.svg";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies";
import React, { Component } from "react";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "./App.css";
import MovieForm from "./components/movieForm";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>

      <main className="container">
        {/* Route[path][Component]*4 */}
        <Switch>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
