import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Index = props => {
    const [pets, setPets] = useState();
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data.pets))
    }, [update])


    return(
        <div>
            <div className="row">
                <div className="col-sm-11">
                    <h1>Pet Shelter</h1>
                </div>
                <div className="col-sm-1">
                    <Link to="/pets/new"><p>add a pet to the shelter</p></Link>
                </div>
                
            </div>
            <h3>These pets are looking for a good home</h3>
            <table className="table table-dark mt-3">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {
                    pets ? 
                    pets.map((pet, i) => {
                        return <tr>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><a href={`http://localhost:3000/pets/${pet._id}`}>Details </a>
                             | <a href={`http://localhost:3000/pets/${pet._id}/edit`}>Edit </a>
                             </td>
                        </tr>
                    }) : ""
                }
            </table>
        </div>
    )
}

export default Index;