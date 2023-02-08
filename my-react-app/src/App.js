import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Slider from './slider';
import SwitchExample from "./switch.js";
import axios from 'axios';
import { useEffect } from 'react';
import Demo1 from './Checkbox.js';
function App() {
  const [ledkit,setLedkit] = useState(1);
  useEffect(() => {
    axios.get('http://group14.exceed19.online/room/')
    .then(
      (response) => {
        console.log(response.data[0].state);
        // const ledkit = response.data[0].state;
        setLedkit(response.data[0].state);
      }
    )
    .catch((error) => {
      console.log(error);
    })
  }, []);
  const onClickSwitch = async () => {
    try {
      axios.put('http://group14.exceed19.online/room/1/state',
      {"state": 0})
      console.log('success')
    }
    catch (error) {
      console.log(error);
    } 
  };
  return (
    <main>
     
      <div className="title">
      {ledkit? <div> hello </div> : <div> hi</div>}
        <h1>Smart Home Lighting</h1>
      </div>
      <div className='two-col'>
        <img src='https://greenbeltapts.com/wp-content/uploads/Greenbelt-Apartment-Floor-Plan-A-1-Bedroom-1-Bath.png' width="400"  />
        <div className='room'>
          <h2>Kitchen</h2>  
          <Demo1 class='Demo1' name={'1'}/>
          {}
          <SwitchExample onClickSwitch={onClickSwitch}/>
          <Slider class='slider'/>
          {/* {ledkit? <div> hello </div> : <SwitchExample />} */}
          <h2>Lounge</h2>
          <Demo1 class='Demo1' name={'2'}/>
          <SwitchExample />
          <Slider class='slider'/>
          <h2>Master Bedroom</h2>  
          <Demo1 class='Demo1' name={'3'}/>
          <SwitchExample />
          <Slider class='slider'/>
        </div>
      </div>
      

    </main>


  );
}



export default App;
