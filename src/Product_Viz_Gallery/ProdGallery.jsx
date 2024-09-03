import React from "react";
import ProdGllThumb from "./ProdGllThumb_01.jsx";
import { ProdThumbData } from "./ProdThumbData.js";
import "../ArchGallery.css";

function ProdGallery({
  // onArchGllThumb_01_Click,
  // onArchGllThumb_02_Click,
  // onArchGllThumb_03_Click,
  // onArchGllThumb_04_Click,
  // onArchGllThumb_05_Click,
  // onArchGllThumb_06_Click,
}) {
  return (
    <div className="ag_Container">
      <div className="ag_thumb">
        <ProdGllThumb {...ProdThumbData[0]}/>
      </div>  
      <div className="ag_thumb">
        <ProdGllThumb {...ProdThumbData[1]}/>
      </div> 
      <div className="ag_thumb">
        <ProdGllThumb {...ProdThumbData[2]}/>
      </div> 
      <div className="ag_thumb">
        <ProdGllThumb {...ProdThumbData[3]}/>
      </div> 
      <div className="ag_thumb">
        <ProdGllThumb {...ProdThumbData[4]}/>
      </div> 
      <div className="ag_thumb">
        <ProdGllThumb {...ProdThumbData[5]}/>
      </div> 
        {/* <ArchGllThumb onClick={onArchGllThumb_01_Click} {...ThumbData[0]} />
      </div>
      <div className="ag_thumb">
        <ArchGllThumb onClick={onArchGllThumb_02_Click} {...ThumbData[1]} />
      </div>
      <div className="ag_thumb">
        <ArchGllThumb onClick={onArchGllThumb_03_Click} {...ThumbData[2]} />
      </div>
      <div className="ag_thumb">
        <ArchGllThumb onClick={onArchGllThumb_04_Click} {...ThumbData[3]} />
      </div>
      <div className="ag_thumb">
        <ArchGllThumb onClick={onArchGllThumb_05_Click} {...ThumbData[4]} />
      </div>
      <div className="ag_thumb">
        <ArchGllThumb onClick={onArchGllThumb_06_Click} {...ThumbData[5]} /> */}
      
    </div>
  );
}
        

export default ProdGallery;
