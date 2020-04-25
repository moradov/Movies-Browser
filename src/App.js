import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Pages/Home";
import DetailsPage from "./component/Pages/DeatailsPage";
import TopMoviesPage from "./component/Pages/TopMoviesPage";
import UpComingPage from "./component/Pages/UpComingPage";
import RandomPage from "./component/Pages/RandomPage";
import Search from "./component/Search";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Search />
      <Switch>
        <Route exact path='/' component={Home} />{" "}
        <Route exact path='/details/:id' component={DetailsPage} />{" "}
        <Route exact path='/top_movies' component={TopMoviesPage} />{" "}
        <Route exact path='/upcoming' component={UpComingPage} />{" "}
        <Route exact path='/random' component={RandomPage} />{" "}
      </Switch>{" "}
    </Fragment>
  );
};

export default App;
