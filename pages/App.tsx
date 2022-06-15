import React, { useState } from "react";
import Clock from "../components/clock";
import Hello from "../components/hello";
import Image from "next/image";
import settingicon from "../public/settings.png";
import Setting from "../components/setting";
import {BackgroundColor, backgroundColorList} from "../components/backgroundColor";


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
  const [backgroundColor, setBackgroundColor] = useState<BackgroundColor>({id: 1, display_name: "blue", value: "bg-blue-900"})

  const showConfigure = () => {
    if (configureOpaque == 'invisible') {
      setConfigureOpaque('visible')
    }else{
      setConfigureOpaque('invisible')
    }
  }

  return (
    <div className={`${backgroundColor.value} grid justify-center h-screen w-screen grid-rows-2 items-end`}>
      <div className="w-screen">
      <Clock></Clock>
      <Hello></Hello>
      </div>
      
      <div className="w-screen px-4 py-4">
      <button id="configure_id" onClick={showConfigure} className="">
          <Image src={settingicon} width="24" height='24' />
        </button>
      </div>
        <div id="configure_id" className={`bg-slate-50/80 grid justify-center absolute bottom-0 left-0 h-screen w-screen ${configureOpaque}`}>
          <button onClick={showConfigure}>Close</button>
          <Setting backgroundColorList={[...backgroundColorList]} 
                    currentBackgroundColor = {backgroundColor}
                    setBackgroundColor={setBackgroundColor}></Setting>
      </div>
    </div>
  );
}

export default App;
