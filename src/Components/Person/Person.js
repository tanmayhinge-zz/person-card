import React from 'react';


const person = props => {
    return(
        <div>
            <input type="text" onChange={props.nameChanged} value={props.name} />
            <input type="number" onChange={props.ageChanged} value={props.age} />
            {props.name}
            {props.age}
        </div>
    )
}

export default person;