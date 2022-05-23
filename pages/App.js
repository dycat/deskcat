import React from "react";
// import "./App.css";
import Clock from "../components/clock";
import Hello from "../components/hello";

import { createUseStyles } from "react-jss";

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

const useStyles = createUseStyles({
  themes: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: randomItem(backgroundColor),
  },
});

function App() {
  const style = useStyles();
  return (
    <div className={style.themes}>
      <Clock></Clock>
      <Hello></Hello>
    </div>
  );
}

export default App;
