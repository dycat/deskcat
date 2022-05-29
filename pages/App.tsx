import React, { useState } from "react";
import Clock from "../components/clock";
import Hello from "../components/hello";
import Image from "next/image";
import settingicon from "../public/settings.png";

const backgroundColor = ["#011627", "#2EC4B6", "#E71D36", "#FF9F1C", "#2a9d8f"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function randomItem(array) {
  let max = array.length;
  return array[getRandomInt(0, max)];
}

function App() {
  const [configureOpaque, setConfigureOpaque] = useState('invisible')
  const showConfigure = () => {
    if (configureOpaque == 'invisible') {
      setConfigureOpaque('visible')
    }else{
      setConfigureOpaque('invisible')
    }
  }

  return (
    <div className="grid justify-center h-screen w-screen bg-blue-900 grid-rows-2 items-end">
      <div className="w-screen">
      <Clock></Clock>
      <Hello></Hello>
      </div>
      
      <div className="w-screen px-4 py-4">
      <button id="configure_id" onClick={showConfigure} className="">
          <Image src={settingicon} width="24" height='24' />
        </button>
      </div>
        <div className={`bg-slate-50/75 grid justify-center absolute bottom-0 left-0 h-screen w-screen ${configureOpaque}`}>
          <button onClick={showConfigure}>Close</button>
          <div>
            <h3>Background Color</h3>
            <ul>
              { backgroundColor.map((color: string) => <li>{color}</li> ) }
            </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
