import React, { useState } from "react";

function DogForm() {
  const [name, setName] = useState([])
  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  
  const [breed, setBreed] = useState([])
  const handleBreedChange = (event) => {
    setBreed(event.target.value)
  }
  
  const [age, setAge] = useState([])
  const handleAgeChange = (event) => {
    setAge(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(name, breed, age)
    setName("")
    setBreed("")
    setAge("")
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <br/>
      <br/>
      <label htmlFor="breed">
        Breed:
        <input
          id="breed"
          type="text"
          breed="breed"
          onChange={handleBreedChange}
          value={breed}
        />
      </label>
      <br/>
      <br/>
      <label htmlFor="age">
        Age:
        <input
          id="age"
          type="text"
          age="age"
          onChange={handleAgeChange}
          value={age}
        />
      </label>
      <br/>
      <br/>
      <button type="submit">Submit</button>
    </form>  
      )
}

export default DogForm;