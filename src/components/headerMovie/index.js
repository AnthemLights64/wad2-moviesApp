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
      <div>
        <h4>
          <Link
            to={{
              pathname: `/${movie.id}/similar`,
              query: {
                name: movie.title
              }
            }}
          >
            <button type="button" className="btn btn-primary">Similar Movies</button>
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default withRouter( MovieHeader );