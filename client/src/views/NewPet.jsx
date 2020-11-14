import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

const NewPet = props => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skill_one: "",
        skill_two: "",
        skill_three: ""
    })
    const [error, setError] = useState({});

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", form)
            .then(res => {
                if(res.data.error){
                    console.log(res.data.error.errors)
                    setError(res.data.error.errors)
                } else {
                    console.log("It worked!");
                    navigate("/")
                }
            })
            .catch(console.log("Something went wrong!"));
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
            <h3>Know a pet needing a home?</h3>
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error} type={"add"}/>
        </div>
    )
}

export default NewPet;