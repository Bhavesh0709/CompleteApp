import React from 'react'
import axios from 'axios';
import { useState } from 'react';


function AddState() {
  const [stateName, setStateName] = useState();
  const handleOnChange = (e) => {
    setStateName(e.target.value);
  }
  
  const handleOnSubmit = () => {
    const submitData = async () => {
      const response = await axios.post("http://localhost:8080/addState",{
        StateNAME: stateName
      });
      console.log('===== response - ', response);
    }

    submitData();
  }
  return (
    <div>
      <input type="text" onChange={handleOnChange}/>
      <button type="submit" onClick={handleOnSubmit}>Submit</button>
    </div>
  )
}

export default AddState