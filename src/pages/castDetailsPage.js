import React, { useEffect, useState } from "react";
import CreditInfo from "../components/creditInfo";
import { getCreditDetails } from "../api/tmdb-api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CastDetailsPage = props => {
  const { id } = props.match.params;
  const [credit,setCredit] = useState([]);
  useEffect(() => {
    getCreditDetails(id).then(setCredit); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
    <div className="row">
        <div className="col-2">
            <button onClick={() => props.history.goBack()}>
            <FontAwesomeIcon icon={["fas", "arrow-circle-left"]} size="2x" />
            <span>{" Back"}</span>
            </button>
        </div>
    </div>
    
    {credit ? (
        <div>
            <div>
                <CreditInfo credit={credit} />
            </div>

        </div>
        
    ) : (
        <p>Waiting for movie details</p>
    )}
    </>
  );
};

export default CastDetailsPage;