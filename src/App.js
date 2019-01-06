import React, { Component } from 'react';
import './App.css';
import Navbar from './navigations/header';
import PersonsList from './Person/PersonsList';

class App extends Component {
  state = {
    persons:[
      {
        id:"scsc",
        name:"azhar",
        age:24
      },
      {
        id:"sacfkjbsakj",
        name:"sandesh",
        age:29
      },
      {
        id:"scvmds",
        name:"sachin",
        age:38
      }
    ],
    showPersons:true
  }
  personsToggleHandler = () => {
    this.setState({
      showPersons:!this.state.showPersons
    })
  }
  personDeleteHandler = (id) => {
    const persons = [...this.state.persons];
    const newPersons = persons.filter((per)=>{
      return per.id !== id;
    })
    this.setState({
      persons:newPersons
    })
  }

  nameChangeHandler = (event, id) => {
     const persons = [...this.state.persons]
     const newPersons = persons.map((per)=>{
       if(per.id === id){
         per.name= event.target.value;
         return per;
       }
       else{
         return per
       }
     })
     this.setState({
       persons:newPersons
     })
  }

  addPersonHandler = (name, age) => {
    const newPerson = {};
    newPerson.name = name;
    newPerson.age = age;
    newPerson.id = '_' + Math.random().toString(36).substr(2, 9);
    const persons = [...this.state.persons];
    persons.push(newPerson)
    this.setState({
      persons:persons
    })
  }

  render() {
    let persons;
    if(this.state.showPersons){
      persons = <PersonsList data={this.state.persons} deleted={this.personDeleteHandler} changed={this.nameChangeHandler} addedperson={this.addPersonHandler}/>
    }
    return (
      <div className="App">
        <Navbar/>
        <button className="center waves-effect waves-light btn" onClick={this.personsToggleHandler}>Toggle Persons</button> 
        {persons}
        {/* <AddPerson/> */}
      </div>
    );
  }
}

export default App;
