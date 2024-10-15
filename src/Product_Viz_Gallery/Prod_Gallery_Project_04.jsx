import { useState } from "react";
import Prod_Gallery_Project_Thumb from "./Prod_Gallery_Project_Thumb.jsx";
import Prod_Gallery_Project_Image from "./Prod_Gallery_Project_Image.jsx";
import { ProdPr04ThumbData } from "./ProdPrGalleryThumbData.js";
import { ProdPr04ImgData } from "./ProdPrGalleryImageData.js";
import "../Arch_Gallery/Arch_Gallery_Project.css";

function Prod_Project_04({ onBackClick }) {
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
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % ProdPr04ImgData.length
    );
  };

  const handlePreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + ProdPr04ImgData.length) % ProdPr04ImgData.length
    );
  };

  return (
    <div className="agp_container">
      <div className="agp_title">{ProdPr04ImgData[0].title}</div>
      <div className="agp_main_image_container" onClick={handleImgEnlargement}>
        <Prod_Gallery_Project_Image {...ProdPr04ImgData[currentImageIndex]} />
      </div>
      <div className="agp_thumbs_container">
        {ProdPr04ThumbData.map((thumb, index) => (
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
              src={ProdPr04ImgData[currentImageIndex].image}
              alt={ProdPr04ImgData[currentImageIndex].title}
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

export default Prod_Project_04;
