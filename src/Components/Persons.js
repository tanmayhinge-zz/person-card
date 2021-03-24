import React from 'react';
import Person from './Person/Person';

const persons= props=> {
    return(
        <Person 
        
        name = {props.name}
        age = {props.age}
        nameChanged = {(event) => props.nameChanged(event)}
        ageChanged = {(event) => props.ageChanged(event)}
        />
    )
};

export default persons;