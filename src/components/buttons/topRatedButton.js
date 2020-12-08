import React from "react";
import {Link} from "react-router-dom";


const TopRatedButton = ({ movie }) => {
  return (
    <Link
    className = "btn w-100 btn-primary"
    to = {{
        pathname: `/movies/${movie.id}/newpage`
    }}
    >
      Show Casts
    </Link>
  );
};

export default TopRatedButton;