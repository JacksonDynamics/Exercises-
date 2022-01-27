import React, { useState } from "react";

function RSVPForm() {
    const initialFormState = {
      name: "",
      dropdown: "",
      newMember: false,
      comment: ""
      }

    const [formData,setFormData] = useState({...initialFormState})
    

    const handleChange = ({ target }) => {
        const value = target.type === 
              "checkbox" ? target.checked : target.value;
        setFormData({
          ...formData, [target.name]: value,
        });
    }
      
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData.name, 
                formData.dropdown, 
                formData.newMember, 
                formData.comment);
    setFormData({ ...initialFormState });
  };
      
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
        <label htmlFor="age">
            Age:
            <select
                id="age"
                name="dropdown"
                onChange={handleChange}
                value={formData.age}
            >
                <option value="">Prefer not to say</option>
                <option value="minor">0-19</option>
                <option value="youngAdult">20-39</option>
                <option value="middleAge">40-59</option>
                <option value="elderly">60+</option>
            </select>
        </label>  
        <label htmlFor="newMember">
          New Member?
          <input
              id="newMember"
              type="checkbox"
              name="newMember"
              onChange={handleChange}
              checked={formData.newMember}
              value="newMember"
          />
        </label>
        <textarea 
            id="comment" 
            name="comment" 
            rows="4" 
            cols="50"
            onChange={handleChange}
            value={formData.comment}
            >
        </textarea>
        <button type="submit">Submit</button>
      </form>
    )  
};

          


export default RSVPForm;