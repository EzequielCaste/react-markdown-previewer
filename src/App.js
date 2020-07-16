import React, { useState } from "react";
import "./styles.css";
import Editor from "./Editor";
import Markdown from "./Markdown";
import { sampleText } from "./sampleText";

const screenSize = {
  maxWidth: window.innerWidth / 3,
  maxHeight: window.innerHeight * 0.75
};

export default function App() {
  const [text, setText] = useState(sampleText);
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <h1 className="title">Markdown Previewer</h1>
      <div className="App">
        <Editor size={screenSize} onChange={() => handleChange} text={text} />
        <Markdown size={screenSize} text={text} />
      </div>
    </>
  );
}
