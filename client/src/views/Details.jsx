import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from "@reach/router";

const OnePet = props => {
    const [onePet, setOnePet] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setOnePet(res.data.pet))
    }, [])

    const removePet = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pets/delete/${props._id}`)
            .then(console.log("Pet was successfully deleted"))
            .then(navigate("/"))
            .catch(err => console.log(err))
    }
    return(
        <div>
            <div className="row">
                <div className="col-sm-11">
                    <h1>Pet Shelter</h1>
                </div>
                <div className="col-sm-1">
                    <Link to="/"><p>back to home</p></Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-11">
                    <h3>Details about: {onePet.name}</h3>
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-primary" onClick={removePet}>Adopt {onePet.name}</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h3>Pet Type: {onePet.type}</h3>
                    <h3>Description: {onePet.description}</h3>
                    <h3>Skills: {onePet.skill_one} {onePet.skill_two} {onePet.skill_three}</h3>
                </div>
            </div>
        </div>
      
    )
}

export default OnePet;