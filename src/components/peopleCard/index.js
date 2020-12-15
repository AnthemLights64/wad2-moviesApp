import React from "react";
import "./peopleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import { Link } from "react-router-dom";

const PeopleCard = ({people}) => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
        <Link to={`/person/${people.id}`}>
          <img
            className="card-img-tag center "
            alt={people.name}
            src={
              people.profile_path
                ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                : "./people-poster-placeholder.png"
            }
          />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{people.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "user"]} />
            <span> {people.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard ;