import React from "react";
import People from "../peopleCard/";
import "./peopleList.css";

const PeopleList = props => {
  const peopleCards = props.peoples.map(p => (
    <People key={p.id} people={p} />
  ));
  return <div className="row peoples bg-info">{peopleCards}</div>;
};

export default PeopleList;