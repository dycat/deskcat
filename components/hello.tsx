import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { randomItem } from "./utls";

const useStyles = createUseStyles({
  words: {
    color: "#fdfffc",
    fontSize: "2em",
  },
});

function Hello() {
  const hellowords = [
    "😄 Hello",
    "🧝 Hola",
    "🧙 Ciao",
    "🤵 Bonjour",
    "🙆‍♂️ 你好",
    "💁‍♀️ 妳好",
    "🤩",
    "😆",
    "💩",
  ];
  const [helloword, setHelloWord] = useState("");
  useEffect(() => {
    setHelloWord(randomItem(hellowords)) 
  }, [])

  // const style = useStyles();
  return (
      <div className="">
        <p className="text-center text-4xl text-amber-500">{helloword}</p>
      </div>
  )
}

export default Hello;
