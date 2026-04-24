import React from "react";
// @ts-ignore
import "./styles.css";

type Props = {
  imageSrc: string;
  text: string;
};

export const Tile: React.FC<Props> = ({ imageSrc, text }) => {
  return (
    <div className="container">
      <img src={imageSrc} className="imgWrapper" />
      <div className="text">{text}</div>
    </div>
  );
};
