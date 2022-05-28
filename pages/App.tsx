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
    <div className="flex flex-col justify-center h-screen bg-blue-900">
      <Clock></Clock>
      <Hello></Hello>
      <div>
        <button id="configure_id" onClick={showConfigure}>
          <Image src={settingicon} width="32" height='32' />
        </button>
        <div className={`bg-slate-50/75 absolute bottom-0 left-0 h-screen w-screen ${configureOpaque}`}>
          <div>
            <button onClick={showConfigure}>Close</button>
            <ul>
              { backgroundColor.map((color: string) => <li>{color}</li> ) }
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
