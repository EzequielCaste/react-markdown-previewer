import React from "react";
import marked from "marked";

marked.setOptions({
  gfm: true,
  breaks: true
});

export default function Markdown(props) {
  const style = {
    height: `${props.size.maxHeight}px`
  };
  return (
    <div
      id="preview"
      style={style}
      className="markdown"
      dangerouslySetInnerHTML={{ __html: marked(props.text) }}
    />
  );
}
