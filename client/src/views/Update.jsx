import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';

const UpdatePet = props => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skill_one: "",
        skill_two: "",
        skill_three: ""
    })

    const [error, setError] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setForm(res.data.pet))
    }, [])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, form)
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
            <h3>Edit {form.name}</h3>
            <Form onSubmitHandler={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error} type="update"/>
        </div>
    )
}

export default UpdatePet;
