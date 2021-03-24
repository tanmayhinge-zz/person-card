import React from 'react';
import classes from './Person.module.css';

const person = props => {
    return(
        <div >
            <p             
            className={classes.Input}>Name: 
            <input type="text" 
            onChange={props.nameChanged} 
            value={props.name}

            /></p>

            <p
            className={classes.Input}>Age: 
            <input type="number" 
            onChange={props.ageChanged} 
            value={props.age} 

            /></p>
            <div className ={classes.Person}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            </div>

            
        </div>
    )
}

export default person;