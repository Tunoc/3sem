import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";


function App({apiFacade}) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(async () => {
    let data = await apiFacade.getPersons();
    //This fetches all persons from the backend.
    // console.log(data);
    setPersons(data);
  },[]);
    
  const storeAddEditPerson = async(person) => {
    let data = await apiFacade.addEditPerson(person);
    console.log(data);
    if(person.id.length === 0){
      setPersons([...persons, data]);
    } else {
      let newPersonList = persons.map(person => person.id === data.id ? data : person);
      setPersons(newPersonList);
    }
  }

  const deletePerson = async (id) => {
    console.log(id);
    await apiFacade.deletePerson(id);
    let data = await apiFacade.getPersons();
    console.log(data);
    setPersons(data);
  }

  const editPerson = (person) => {
    console.log(person);
    setPersonToAddEdit(person);
  }


  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={editPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <h3 style={{ textAlign: "center" }}>Add Persons</h3>
          <AddEditPerson
            newPerson={personToAddEdit}
            //  Next two lines, are if you decide to use the pattern introduced in the day-2 exercises
            addEditPerson={storeAddEditPerson}
            key={personToAddEdit.id}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
