import React from "react";

const PersonList = (props) => {
    return(
        <li className="collection-item avatar">
        <i className="material-icons circle">account_circle</i>
            <span className="title">{props.data.name}</span>
            <p>age: {props.data.age}<br/><input type="text" onChange={(e) => props.changed(e, props.data.id)} placeholder={props.data.name}/>
            </p>
            <a href="#!" onClick={()=>props.deleted(props.data.id)} className="secondary-content"><i className="material-icons">close</i></a>
        </li>
    )
}

export default PersonList;