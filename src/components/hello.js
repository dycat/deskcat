import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { randomItem } from "../utls";

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
  const [helloword, setHelloWord] = useState(randomItem(hellowords));

  const style = useStyles();
  return <div className={style.words}>{helloword}</div>;
}

export default Hello;
