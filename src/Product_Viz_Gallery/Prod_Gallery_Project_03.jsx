import { useState } from "react";
import Prod_Gallery_Project_Thumb from "./Prod_Gallery_Project_Thumb.jsx";
import Prod_Gallery_Project_Image from "./Prod_Gallery_Project_Image.jsx";
import { ProdPr03ThumbData } from "./ProdPrGalleryThumbData.js";
import { ProdPr03ImgData } from "./ProdPrGalleryImageData.js";
import "../Arch_Gallery/Arch_Gallery_Project.css";

function Prod_Project_03({ onBackClick }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isImgLarge, setIsImgLarge] = useState(false);

  const handleThumbClick = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
  };

  function handleImgEnlargement() {
    setIsImgLarge((enlarging) => !enlarging);
  }

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ProdPr03ImgData.length);
  };

  const handlePreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + ProdPr03ImgData.length) % ProdPr03ImgData.length
    );
  };

  return (
    <div className="agp_container">
      <div className="agp_title">{ProdPr03ImgData[0].title}</div>
      <div className="agp_main_image_container" onClick={handleImgEnlargement}>
        <Prod_Gallery_Project_Image {...ProdPr03ImgData[currentImageIndex]} />
      </div>
      <div className="agp_thumbs_container">
        {ProdPr03ThumbData.map((thumb, index) => (
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
      {isImgLarge && (
        <div className="enlargedImage" onClick={handleImgEnlargement}>
          <div className="enlargedImageContent">
            <div className="prevButton" onClick={handlePreviousImage}>
              <span className="arrowButtonIcon">&#8249;</span>
            </div>
            <img
              src={ProdPr03ImgData[currentImageIndex].image}
              alt={ProdPr03ImgData[currentImageIndex].title}
            />
            <div className="nextButton" onClick={handleNextImage}>
              <span className="arrowButtonIcon">&#8250;</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Prod_Project_03;
