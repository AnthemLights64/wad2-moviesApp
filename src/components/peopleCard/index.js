import React from "react";
import "./peopleCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";

const PeopleCard = props => {
  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
        <img
          className="card-img-tag center "
          alt={props.people.name}
          src={
            props.people.profile_path
              ? `https://image.tmdb.org/t/p/w500/${props.people.profile_path}`
              : "./people-poster-placeholder.png"
          }
        />
        <div className="card-body">
          <h4 className="card-title ">{props.people.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "user"]} />
            <span> {props.people.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard ;