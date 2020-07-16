import React from "react";

export default function Editor(props) {
  const style = {
    width: `${props.size.maxWidth}px`,
    height: `${props.size.maxHeight}px`
  };
  return (
    <textarea
      id="editor"
      style={style}
      rows="40"
      cols="40"
      className="editor"
      onChange={props.onChange()}
      value={props.text}
    />
  );
}
