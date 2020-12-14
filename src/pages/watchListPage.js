import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import RemoveFromWatchListButton from '../components/buttons/removeFromWatchList'
import {MoviesContext} from '../contexts/moviesContext'
import {Link} from "react-router-dom";

const WatchListPage = props => {
  const context = useContext(MoviesContext);
  const watchList = context.upcoming.filter( m => m.watchList );
  const user = context.user;

  if(!user){
    return <div style={{fontSize:35, textAlign:"center"}}><p>Please <span className="signIn"><Link to={'/signIn'}>Sign In</Link></span> first!</p></div>
  }

  return (
    <MovieListPageTemplate
      movies={watchList}
      title={"Watch List"}
      action={movie => <RemoveFromWatchListButton movie={movie} />}
    />
  );
};

export default WatchListPage;