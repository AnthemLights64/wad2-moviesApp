import React from "react";
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import 'react-photo-view/dist/index.css';

const CreditInfo = ({credit}) => {
    const { person = {} } = credit;
    const { media = {} } = credit;
    return (
        <>
        <table className="table table-hover" style={{textAlign:"center"}}>
            <thead>
                <tr>
                    <th colSpan="7" style={{fontSize:32}}>CastDetails</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan="4">
                        <img
                            src = {`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                            alt = {person.name}
                            style= {{width:200, height:300}}
                        />
                    </td>
                    <td style={{verticalAlign:"middle"}}>Name:</td>
                    <td colSpan="2" style={{verticalAlign:"middle"}}>{person.name}</td>
                    <td style={{verticalAlign:"middle"}}>Character:</td>
                    <td colSpan="2" style={{verticalAlign:"middle"}}>{media.character}</td>
                </tr>
                <tr>
                    <td style={{verticalAlign:"middle"}}>Popularity:</td>
                    <td colSpan="5" style={{verticalAlign:"middle"}}>{person.popularity}</td>
                </tr>
                <tr>
                    <td style={{verticalAlign:"middle"}}>Department:</td>
                    <td colSpan="5" style={{verticalAlign:"middle"}}>{credit.department}</td>
                </tr>
                <tr>
                    <td style={{verticalAlign:"middle"}}>Job:</td>
                    <td colSpan="5" style={{verticalAlign:"middle"}}>{credit.job}</td>
                </tr>
                <tr>
                    <td rowSpan="4"  style={{verticalAlign:"middle",fontFamily:"sans-serif",fontSize:20,fontWeight:"bold"}}>Known for:</td>
                    <td colSpan="6">
                        <PhotoProvider>
                            {(person.known_for||[]).map(e => (
                                    <PhotoConsumer key={e.id} src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`} intro={e.title}>
                                        <img 
                                            src = {`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                                            style= {{width:150, height:225,marginLeft:50,marginRight:50}}
                                            alt = {e.title}
                                        />
                                    </PhotoConsumer>
                                    
                            ))}
                        </PhotoProvider>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    );
};

export default CreditInfo;