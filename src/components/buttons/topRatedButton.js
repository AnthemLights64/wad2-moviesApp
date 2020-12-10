import React from "react";
import {Link} from "react-router-dom";


const TopRatedButton = ({ movie }) => {
  return (
    <Link
    className = "btn w-100 btn-primary"
    to = {`/movies/${movie.id}`}
    >
      Movie Details
    </Link>
  );
};

export default TopRatedButton;