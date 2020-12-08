import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const MovieHeader = ({ movie, history }) => {
  return (
    <div className="row">
      <div className="col-2">
        <button onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
          <span>{" Back"}</span>
        </button>
      </div>
      <div className="col-6 offset-3">
        <h2>
          {movie.title}
          {"  "}
          <a href={movie.homepage}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
      <div className="col-6 offset-1">
        <h4>
          <Link
            to={{
              pathname: `/${movie.id}/similar`,
              query: {
                name: movie.title
              }
            }}
          >
            Similar Movies
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default withRouter( MovieHeader );