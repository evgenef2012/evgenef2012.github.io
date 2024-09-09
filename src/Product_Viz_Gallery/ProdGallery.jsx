import ProdGllThumb from "./ProdGllThumb_01.jsx";
import { ProdThumbData } from "./ProdThumbData.js";
import "../ArchGallery.css";

function ProdGallery({
  onProdGllThumb_01_Click,
  onProdGllThumb_02_Click,
  onProdGllThumb_03_Click,
  onProdGllThumb_04_Click,
  onProdGllThumb_05_Click,
  onProdGllThumb_06_Click,
}) {
  return (
    <div className="ag_Container">
      <div className="ag_thumb">
        <ProdGllThumb onClick={onProdGllThumb_01_Click} {...ProdThumbData[0]} />
      </div>
      <div className="ag_thumb">
        <ProdGllThumb onClick={onProdGllThumb_02_Click} {...ProdThumbData[1]} />
      </div>
      <div className="ag_thumb">
        <ProdGllThumb onClick={onProdGllThumb_03_Click} {...ProdThumbData[2]} />
      </div>
      <div className="ag_thumb">
        <ProdGllThumb onClick={onProdGllThumb_04_Click} {...ProdThumbData[3]} />
      </div>
      <div className="ag_thumb">
        <ProdGllThumb onClick={onProdGllThumb_05_Click} {...ProdThumbData[4]} />
      </div>
      <div className="ag_thumb">
        <ProdGllThumb onClick={onProdGllThumb_06_Click} {...ProdThumbData[5]} />
      </div>
    </div>
  );
}

export default ProdGallery;
