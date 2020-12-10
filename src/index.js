import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoritesMoviesPage'       // NEW
import WatchListPage from './pages/watchListPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import SimilarMoviesPage from './pages/similarMoviesPage';
import MovieCreditsPage from './pages/movieCredits';
import CastDetailsPage from './pages/castDetailsPage';
import SignInPage from './pages/signInPage';


const App = () => {
  return (
  <BrowserRouter>
  <div className="jumbotron">
    <SiteHeader /> 
    <div className="container-fluid">
      <MoviesContextProvider>     {/* NEW  */}
        <GenresContextProvider>    {/* NEW */}
          <Switch>
              <Route path="/signIn" component={SignInPage} />
              <Route path="/credit/:id" component={CastDetailsPage} />
              <Route exact path="/movies/:id/movieCredits" component={MovieCreditsPage} />
              <Route path="/:id/similar" component={SimilarMoviesPage} />
              <Route exact path="/movies/watchList" component={WatchListPage} />
              <Route exact path="/movies/top_rated" component={TopRatedMoviesPage} />
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/movies/upcoming" component={UpcomingMoviesPage} />
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/" component={HomePage} />
              <Redirect from="*" to="/" />
            </Switch>
          </GenresContextProvider>    {/* NEW */}
      </MoviesContextProvider>     {/* NEW */}
    </div>
  </div>
</BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));