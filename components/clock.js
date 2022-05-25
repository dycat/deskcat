import React, { useState, useEffect } from "react";
// import "../static/css/clock.css";

function formattedTime(now, showSeconds = false) {
  let hours = now.getHours() >= 10 ? now.getHours() : "0" + now.getHours();
  let minutes =
    now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes();
  let seconds =
    now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds();
  if (showSeconds) {
    return hours + ":" + minutes + ":" + seconds;
  }
  return hours + ":" + minutes;
}

function Clock() {
  let now = new Date();
  let [time, setTime] = useState(now);

  useEffect(() => {
    const updateTime = setTimeout(() => {
      let now = new Date();
      setTime(now);
    }, 1000);
    return () => {
      clearTimeout(updateTime);
    };
  }, [time]);

  return <div className="clock text-4xl">{formattedTime(time)}</div>;
}

export default Clock;
