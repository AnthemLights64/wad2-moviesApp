import React from "react";
import {Link} from "react-router-dom";


const TopRatedButton = ({ movie }) => {
  return (
    <Link
    className = "btn w-100 btn-primary"
    to = {{
        pathname: `/movies/${movie.id}/movieCredits`
    }}
    >
      Show Casts
    </Link>
  );
};

export default TopRatedButton;