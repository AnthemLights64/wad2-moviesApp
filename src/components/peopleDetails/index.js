import React from "react";
import "./peopleDetails.css";
import { Link } from "react-router-dom";

export default ({ people, ppeople }) => {
  return (
    <>
    <div style={{display:"flex",marginLeft:200,marginRight:200}}>
        <div>
        <img
            src = {`https://image.tmdb.org/t/p/w500/${people.profile_path}`}
            alt = {people.name}
            style= {{width:200, height:300,borderRadius:10}}
            className= {"profile_image"}
        />
            <div style={{marginTop:10}}>
                <ul className="list-group list-group-vertical" style={{display:"inline-block"}}>
                    <li key="birthday" className="list-group-item list-group-item-dark">
                    Birthday:
                    </li>
                    <li key="pbirthday" className="list-group-item ">
                    {people.birthday}
                    </li>
                    <li key="kfd" className="list-group-item list-group-item-dark">
                    Known for department:
                    </li>
                    <li key="pkfd" className="list-group-item ">
                    {people.known_for_department}
                    </li>
                    <li key="pob" className="list-group-item list-group-item-dark">
                    Place of birth:
                    </li>
                    <li key="ppob" className="list-group-item ">
                    {people.place_of_birth}
                    </li>
                </ul>
            </div>
            <div>
                <ul className="list-group list-group-vertical" style={{display:"inline-block"}}>
                    <li key="aka" className="list-group-item list-group-item-dark">
                    Also known as:
                    </li>
                    {(people.also_known_as||[]).map(aka => (
                    <li key={aka} className="list-group-item">
                        {aka}
                    </li>
                    ))}
                </ul>
            </div>
        </div>
        
        <div style={{display:"inline-block",marginLeft:50,paddingLeft:50}}>
            <h3>{people.name}</h3>
            <h4>Biography:</h4>
            <p style={{textAlign:"justify"}}>{people.biography}</p>
            <h4>Known for:</h4>
            <div style={{marginTop:50,textAlign:"center"}} className={"known_for_posters"}>
                {(ppeople.known_for||[]).map(e => (
                    <Link to={`/movies/${e.id}`} key={e.id}>
                        <img 
                            src = {`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                            style= {{width:150, height:225,marginLeft:50,marginRight:50,borderRadius:15}}
                            alt = {e.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
      
    </div>
    </>
  );
};