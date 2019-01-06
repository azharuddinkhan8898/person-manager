import React from 'react';
import PersonList from "./PersonList"
import AddPerson from "./AddPerson"

const PersonsList = (props) => {
    const persons = props.data.map((per) => {
        return (
            <PersonList key={per.id} data={per} deleted={props.deleted} changed={props.changed}/>
        )
    })
    return(
        <div className="container">
            <ul className="collection">
                {persons}
            </ul>
            <AddPerson addedperson={props.addedperson}/>

        </div>
        
    )
}

export default PersonsList;