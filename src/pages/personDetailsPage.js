import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import PeopleDetails from "../components/peopleDetails";
import usePeople from "../hooks/usePeople";
import {PeopleContext} from '../contexts/peopleContext';

const PersonPage = props => {
  const { id } = props.match.params;
  const numId = parseInt(id);

  const [person] = usePeople(id);
  
  const context = useContext(PeopleContext);
  const p_results = context.people;
  let ppeople = [];
  p_results.map(e => {
      if(e.id===numId) ppeople=e;
      return null;
  })

  return (
    <>
    {person ? (
      <>
        
        <PeopleDetails people={person} ppeople={ppeople}>
        </PeopleDetails>

      </>
    ) : (
      <p>Waiting for person details</p>
    )}
  </>
  );
};

export default withRouter(PersonPage);