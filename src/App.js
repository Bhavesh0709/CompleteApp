import './App.css';
import {useState} from 'react';
import axios from 'axios';
import AddState from './Components/AddState';
import GetState from './Components/GetState';

function App() {
  
  return (
    <div className="App">
      <AddState />
      <GetState />
    </div>
  );
}

export default App;
