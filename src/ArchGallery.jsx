import React from "react";
import ArchGllThumb from "./Arch_Gallery/Arch_Gallery_Thumb.jsx";
import { ThumbData } from "./Arch_Gallery/ArchThumbData.js";
import "./ArchGallery.css";

function ArchGallery({
  onThumbHover,
  onThumbLeave,
  onThumbClick,
  onBackClick,
}) {
  return (
    <div className="ag_Container">
      <div className="ag_thumbs">
        <div
          className="ag_thumb"
          onMouseEnter={() => onThumbHover(0)}
          onMouseLeave={onThumbLeave}
        >
          <ArchGllThumb onClick={() => {onThumbClick(0);}} {...ThumbData[0]}/>
        </div>
        <div
          className="ag_thumb"
          onMouseEnter={() => onThumbHover(1)}
          onMouseLeave={onThumbLeave}
        >
          <ArchGllThumb onClick={() => {onThumbClick(1);}} {...ThumbData[1]}/>
        </div>
        <div
          className="ag_thumb"
          onMouseEnter={() => onThumbHover(2)}
          onMouseLeave={onThumbLeave}
        >
          <ArchGllThumb onClick={() => {onThumbClick(2);}} {...ThumbData[2]}/>
        </div>
        <div
          className="ag_thumb"
          onMouseEnter={() => onThumbHover(3)}
          onMouseLeave={onThumbLeave}
        >
          <ArchGllThumb onClick={() => {onThumbClick(3);}} {...ThumbData[3]}/>
        </div>
        <div
          className="ag_thumb"
          onMouseEnter={() => onThumbHover(4)}
          onMouseLeave={onThumbLeave}
        >
          <ArchGllThumb onClick={() => {onThumbClick(4);}} {...ThumbData[4]}/>
        </div>
        <div
          className="ag_thumb"
          onMouseEnter={() => onThumbHover(5)}
          onMouseLeave={onThumbLeave}
        >
          <ArchGllThumb onClick={() => {onThumbClick(5);}} {...ThumbData[5]}/>
        </div>
      </div>
      <div className="ag_back_button" onClick={onBackClick}>
        BACK
      </div>
    </div>
  );
}

export default ArchGallery;
  
