import React from 'react'

const Person = (props) => {
    return (
        <div className="person">
            <p onClick={()=>props.deleted(props.data.id)}>I am a person named {props.data.name}, {props.data.age} old</p>
            <input type="text"/>
        </div>
        
    )
}

export default Person;