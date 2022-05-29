import React, { useEffect, useState } from "react";
import { randomItem } from "./utls";


function Hello() {

  const hellowords = ["Hello", " Hola", "Ciao", "Bonjour", "你好", "妳好",
                      
  ];

  const emoj = ["😄", "🧝", "🧙", "🤩", "🤵", "🙆‍♂️", "💁‍♀️", "😆", "💩", "🥳", 
                "🏡", "😴", "🥺", "🫠", "🤣", "😎", "🥺"]

  const [helloword, setHelloWord] = useState("");

  useEffect(() => {
    setHelloWord(randomItem(hellowords) + " " + randomItem(emoj)) 
  }, [])

  return (
      <div className="">
        <p className="text-center text-4xl text-amber-500">{helloword}</p>
      </div>
  )
}

export default Hello;
