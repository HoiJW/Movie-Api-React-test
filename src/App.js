import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Catalogue from './Components/Catalouge';

const App = () => {
  
  return (
    <div className="wrapper">
      <header>
        <h1>Hackflix</h1>
        <Catalogue />
      </header>
    </div>
  );
}

export default App;
