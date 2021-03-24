import React from 'react';
import classes from '../Person/Person.module.css';


const driver = props => {
    return(
            <div className={classes.Input}>
            <p>Name: 
            <input type="text" 
            onChange={props.nameChanged} 
            value={props.name}

            /></p>

            <p>Age: 
            <input type="number" 
            onChange={props.ageChanged} 
            value={props.age} 

            />
            </p>
            </div> 
    )
}

export default driver;