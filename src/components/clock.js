import React, { useState, useEffect } from "react";
import "../static/css/clock.css";

function formattedTime(showSeconds = false) {
  let now = new Date();
  let hours = now.getHours() >= 10 ? now.getHours() : "0" + now.getHours();
  let minutes =
    now.getMinutes() >= 10 ? now.getMinutes() : "0" + now.getMinutes();
  if (showSeconds) {
    let seconds =
      now.getSeconds() >= 10 ? now.getSeconds() : "0" + now.getSeconds();
    return hours + ":" + minutes + ":" + seconds;
  }
  return hours + ":" + minutes;
}

function Clock() {
  let now = formattedTime(true);
  let [time, setTime] = useState(now);

  useEffect(() => {
    const updateTime = setTimeout(() => {
      let now = formattedTime(true);
      setTime(now);
    }, 1000);
    return () => {
      clearTimeout(updateTime);
    };
  }, [time]);

  return <div className="clock">{time}</div>;
}

export default Clock;
