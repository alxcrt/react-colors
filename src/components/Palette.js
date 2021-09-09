import React from "react";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";

export default function Palette({ colors, emoji, paletteName }) {
  return (
    <div className="palette">
      {/* <p>{paletteName}</p> */}
      <div className="palette-colors">
        {colors.map((color) => (
          <ColorBox color={color.color} key={color.name} name={color.name} />
        ))}
      </div>
    </div>
  );
}
