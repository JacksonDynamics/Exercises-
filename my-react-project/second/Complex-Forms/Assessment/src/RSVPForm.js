import React, { useState } from "react";

function RSVPForm() {
  const initialFormState = {
    name: "",
    age: "",
    newMember: false,
    comment: ""
  }
  
  const [formData, setFormData] = useState({...initialFormState})
  
  const handleChange = ({target}) => {
    const value = target.type === "checkbox" ? target.checked : target.value
    setFormData({
      ...formData,
      [target.name]: value,
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData.name,
                formData.age,
                formData.newMember,
                formData.comment)
    setFormData({...initialFormState})
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <br/>
      <br/>
      <label htmlFor="age">
        Age: 
        <select
          id="age"
          name="age"
          onChange={handleChange}
          value={formData.age}
        >
          <option value="">Prefer not to say</option>
          <option value="minor">0-19</option>
          <option value="low">20-39</option>
          <option value="middle">40-59</option>
          <option value="high">60+</option>
        </select>
      </label>
      <br/>
      <br/>
      <label htmlFor="newMember">
        New Member:
        <input
            id="newMember"
            type="checkbox"
            name="newMember"
            onChange={handleChange}
            checked={formData.newMember}
            value="newMember"
        />
      </label>
      <br/>
      <br/>
      <label>
        Comment:
        <br/>
        <textarea 
          id="comment" 
          name="comment" 
          rows="4" 
          cols="40"
          onChange={handleChange}
          value={formData.comment}
          >Comment:
        </textarea>
      </label>
      <br/>
      <br/>
      <button onClick={handleSubmit}>Submit</button>
    </form>
          
    )
}

export default RSVPForm;