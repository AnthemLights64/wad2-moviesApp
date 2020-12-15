import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
//import HomePage from "./pages/homePage";
//import MoviePage from './pages/movieDetailsPage';
//import FavoriteMoviesPage from './pages/favoritesMoviesPage'     ;  // NEW
//import WatchListPage from './pages/watchListPage';
//import MovieReviewPage from "./pages/movieReviewPage";
//import UpcomingMoviesPage from './pages/upcomingMoviesPage';
//import TopRatedMoviesPage from './pages/topRatedMoviesPage';
// import AddMovieReviewPage from './pages/addMovieReviewPage';
// import SimilarMoviesPage from './pages/similarMoviesPage';
// import MovieCreditsPage from './pages/movieCredits';
// import CastDetailsPage from './pages/castDetailsPage';
// import SignInPage from './pages/signInPage';

// const SiteHeader = lazy(() => import("./components/siteHeader"));
// const MoviesContextProvider = lazy(() => import("./contexts/genresContext"));
// const GenresContextProvider = lazy(() => import("./contexts/genresContext"));
const HomePage = lazy(() => import("./pages/homePage"));
const MoviePage = lazy(() => import("./pages/movieDetailsPage"));
const FavoriteMoviesPage = lazy(() => import("./pages/favoritesMoviesPage"));
const WatchListPage = lazy(() => import("./pages/watchListPage"));
const MovieReviewPage = lazy(() => import("./pages/movieReviewPage"));
const UpcomingMoviesPage = lazy(() => import("./pages/upcomingMoviesPage"));
const TopRatedMoviesPage = lazy(() => import("./pages/topRatedMoviesPage"));
const AddMovieReviewPage = lazy(() => import("./pages/addMovieReviewPage"));
const SimilarMoviesPage = lazy(() => import("./pages/similarMoviesPage"));
const MovieCreditsPage = lazy(() => import("./pages/movieCredits"));
const CastDetailsPage = lazy(() => import("./pages/castDetailsPage"));
const SignInPage = lazy(() => import("./pages/signInPage"));
const PeoplePage = lazy(() => import("./pages/peoplePage"));



const App = () => {
  return (
  <BrowserRouter>
  <div className="jumbotron">
    <SiteHeader /> 
    <div className="container-fluid">
      <MoviesContextProvider>     {/* NEW  */}
        <GenresContextProvider>    {/* NEW */}
          <Suspense fallback={<h1>Loading page....</h1>}>
              <Switch>
                <Route path="/people" component={PeoplePage} />
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
          </Suspense>
        </GenresContextProvider>    {/* NEW */}
      </MoviesContextProvider>     {/* NEW */}
    </div>
  </div>
</BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));