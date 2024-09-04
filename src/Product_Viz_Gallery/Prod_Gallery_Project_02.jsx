import { useState } from "react";
import Prod_Gallery_Project_Thumb from "./Prod_Gallery_Project_Thumb.jsx";
import Prod_Gallery_Project_Image from "./Prod_Gallery_Project_Image.jsx";
import { ProdPr02ThumbData } from "./ProdPrGalleryThumbData.js";
import { ProdPr02ImgData } from "./ProdPrGalleryImageData.js";
import "../Arch_Gallery/Arch_Gallery_Project.css";

function Prod_Project_02({ onBackClick }) {
  const [currentImage, setCurrentImage] = useState(ProdPr02ImgData[0]);

  const handleThumbClick = (imageIndex) => {
    setCurrentImage(ProdPr02ImgData[imageIndex]);
  };

  return (
    <div className="agp_container">
      <div className="agp_title">{ProdPr02ImgData[0].title}</div>
      <div className="agp_main_image_container">
        <Prod_Gallery_Project_Image {...currentImage} />
      </div>
      <div className="agp_thumbs_container">
        {ProdPr02ThumbData.map((thumb, index) => (
          <div
            className="agp_thumb"
            key={index}
            onClick={() => handleThumbClick(index)}
          >
            <Prod_Gallery_Project_Thumb {...thumb} />
          </div>
        ))}
      </div>
      <div className="agp_back_button" onClick={onBackClick}>
        BACK
      </div>
    </div>
  );
}

export default Prod_Project_02;
