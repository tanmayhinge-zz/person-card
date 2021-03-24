import React from 'react';
import classes from './Person.module.css';
import Driver from '../Driver/Driver';

const person = props => {
    return(
        <div >
            <Driver
            name = {props.name}
            age = {props.age}
            nameChanged = {props.nameChanged}
            ageChanged ={props.ageChanged}
            />
            
            <div className ={classes.Person}>
            <h1>Congrats, You are now a Person</h1>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>

            
        </div>
    )
}

export default person;