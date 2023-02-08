import logo from './logo.svg';
import './App.css';
import React from 'react';
import Slider from './slider';
import Demo1 from './Checkbox.js';

function App() {
  return (
    <main>

      <div className="title">
        <h1>Smart Home Lighting</h1>
      </div>
      <div className='two-col'>
        <img src='https://greenbeltapts.com/wp-content/uploads/Greenbelt-Apartment-Floor-Plan-A-1-Bedroom-1-Bath.png' width="400"  />
        <div className='room'>
          <h2>Kitchen</h2>  <Demo1/>
          <Slider class='slider'/>
          <h2>Lounge</h2> <Demo1/>
          <Slider class='slider'/>
          <h2>Master Bedroom</h2> <Demo1/>
          <Slider class='slider'/>
        </div>
      </div>
      

    </main>


  );
}



export default App;
