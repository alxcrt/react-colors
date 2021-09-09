import React, { useState } from "react";
import "../styles/ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ColorBox({ color, name }) {
  const [copied, setCopied] = useState(false);

  const changeCopyState = (e) => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <CopyToClipboard text={color} onCopy={changeCopyState}>
      <div
        className={`color-box ${copied && "show"}`}
        style={{ background: color }}
      >
        <div
          className={`copy-overlay ${copied && "show"}`}
          style={{ background: color }}
        ></div>

        <div className={`copy-msg ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{color}</p>
        </div>
        <div className="color-box-copy">
          <button className="copy-btn">COPY</button>
        </div>

        <div className="color-box-content">
          <span className="color-name">{name}</span>
          <button className="more-btn">More</button>
        </div>
      </div>
    </CopyToClipboard>
  );
}
