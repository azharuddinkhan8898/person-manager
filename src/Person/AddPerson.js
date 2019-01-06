import React from 'react'

const AddPerson = (props) => {
    return(

            <div className="row">
                <div className="input-field col s5">
                    <input id="name" placeholder="Name" type="text" className="validate"/>

                </div>
                <div className="input-field col s5">
                    <input id="age" type="text" placeholder="Age"  className="validate"/>

                </div>
                <div className="input-field col s2">
                <button onClick={()=>props.addedperson(document.getElementById("name").value,document.getElementById("age").value)} className="center waves-effect waves-light btn">Add Person</button> 
                </div>
            </div>
    
    )
}


export default AddPerson;