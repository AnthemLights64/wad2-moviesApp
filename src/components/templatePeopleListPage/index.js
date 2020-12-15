import React from "react";
import Header from "../headerPeopleList";
import PeopleList from "../peopleList";

const PeopleListPageTemplate = ({people, title}) => {

  return (
    <>
      <Header title={title} numPeople={people.length} />
      <PeopleList
        people={people}
      ></PeopleList>
    </>
  );
};

export default PeopleListPageTemplate ;