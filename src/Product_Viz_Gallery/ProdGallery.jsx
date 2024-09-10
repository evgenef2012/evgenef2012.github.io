import ProdGllThumb from "./ProdGllThumb_01.jsx";
import { ProdThumbData } from "./ProdThumbData.js";
import "../ArchGallery.css";

function ProdGallery({
  onThumbHover,
  onThumbLeave,
  onThumbClick,
  onBackClick
}) {
  return (
    <div className="ag_Container">
      <div 
        className="ag_thumb" 
        onMouseEnter={() => onThumbHover(0)}
        onMouseLeave={onThumbLeave}
      >
        <ProdGllThumb onClick={() => {onThumbClick(0);}} {...ProdThumbData[0]} />
      </div>
      <div 
        className="ag_thumb"
        onMouseEnter={() => onThumbHover(1)}
        onMouseLeave={onThumbLeave}
      >
        <ProdGllThumb onClick={() => {onThumbClick(1);}} {...ProdThumbData[1]} />
      </div>
      <div 
        className="ag_thumb"
        onMouseEnter={() => onThumbHover(2)}
        onMouseLeave={onThumbLeave}
      >
        <ProdGllThumb onClick={() => {onThumbClick(2);}} {...ProdThumbData[2]} />
      </div>
      <div 
        className="ag_thumb"
        onMouseEnter={() => onThumbHover(3)}
        onMouseLeave={onThumbLeave}
      >
        <ProdGllThumb onClick={() => {onThumbClick(3);}} {...ProdThumbData[3]} />
      </div>
      <div 
        className="ag_thumb"
        onMouseEnter={() => onThumbHover(4)}
        onMouseLeave={onThumbLeave}
      >
        <ProdGllThumb onClick={() => {onThumbClick(4);}} {...ProdThumbData[4]} />
      </div>
      <div 
        className="ag_thumb"
        onMouseEnter={() => onThumbHover(5)}
        onMouseLeave={onThumbLeave}
      >
        <ProdGllThumb onClick={() => {onThumbClick(5);}} {...ProdThumbData[5]} />
      </div>
      <div className="agp_back_button" onClick={onBackClick}>
        BACK
      </div>
    </div>
  );
}

export default ProdGallery;
  
