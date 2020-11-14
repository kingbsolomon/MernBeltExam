import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const Form = props => {
    return(
        <div>
            <div className="form">
                    <form onSubmit={props.onSubmitHandler}>
                        <div className="form-group">
                            <label>Pet Name:</label>
                            <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name} />
                            {
                                props.error.name ?
                                    <span className="text-danger">{props.error.name.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Pet Type:</label>
                            <input type="text" name="type" className="form-control" onChange={props.onChangeHandler} value={props.form.type} />
                            {
                                props.error.type ?
                                    <span className="text-danger">{props.error.type.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Pet Description</label>
                            <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description}/>
                            {
                                props.error.description ?
                                    <span className="text-danger">{props.error.description.message}</span>
                                    : ""
                            }
                        </div>
                        <h5 className="mt-4 mb-2">Skills (optional):</h5>
                        <div className="form-group">
                            <label>Skill 1</label>
                            <input type="text" name="skill_one" className="form-control" onChange={props.onChangeHandler} value={props.form.skill_one}/>
                        </div>
                        <div className="form-group">
                            <label>Skill 2</label>
                            <input type="text" name="skill_two" className="form-control" onChange={props.onChangeHandler} value={props.form.skill_two}/>
                        </div>
                        <div className="form-group">
                            <label>Skill 3</label>
                            <input type="text" name="skill_three" className="form-control" onChange={props.onChangeHandler} value={props.form.skill_three}/>
                        </div>
                        {
                        props.type == "add" ?
                        <input type="submit" value="Add Pet" className="btn btn-info"/> : <input type="submit" value="Update Pet" className="btn btn-success"/>
                        }
                    </form>
                </div>
            </div>
    )
}

export default Form;