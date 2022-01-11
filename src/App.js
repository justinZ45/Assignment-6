//import logo from './logo.svg';
import './App.css';
import React from "react"
import ZipSearchCode from './Components/ZipSearchCode.js';
import CitySearchCode from './Components/CitySearchCode.js';


function App() {
  return (
    <div>
    <div className="zipSearch">
        <ZipSearchCode/>
    </div>
    <div className='citySearch'>
      <CitySearchCode/>
    </div>
    </div>
  );
}

export default App;
