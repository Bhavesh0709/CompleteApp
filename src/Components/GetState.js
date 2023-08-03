import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function GetState() {
  const [stateList, getStateList] = useState([]);
  const [finalData , setFinalData] = useState([{
    firstName: '',
    lastName: ''
  }])
  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get("http://localhost:8080/state");
      getStateList(response.data);
  
    }
    console.log(stateList);
    fetchData();
  },[]);

  return (
    <div>
     <FormControl fullWidth>

          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            {
              stateList.map((val) => (
                <MenuItem value={val.name}>{val.name}</MenuItem>
              ))
            }
          </Select>
      </FormControl> 
    </div>
  )
}

export default GetState