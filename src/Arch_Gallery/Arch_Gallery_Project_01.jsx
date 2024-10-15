import { useState } from "react";
import Arch_Gallery_Project_Thumb from "./Arch_Gallery_Project_Thumb.jsx";
import Arch_Gallery_Project_Image from "./Arch_Gallery_Project_Image.jsx";
import { ArchPrThumbData } from "./ArchPrGalleryThumbData.js";
import { ArchPrImgData } from "./ArchPrGalleryImageData.js";
import "./Arch_Gallery_Project.css";

function Arch_Project_01({ onBackClick }) {
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
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ArchPrImgData.length);
  };

  const handlePreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + ArchPrImgData.length) % ArchPrImgData.length
    );
  };

  return (
    <div className="agp_container">
      <div className="agp_title">{ArchPrImgData[0].title}</div>
      <div className="agp_main_image_container" onClick={handleImgEnlargement}>
        <Arch_Gallery_Project_Image {...ArchPrImgData[currentImageIndex]} />
      </div>
      <div className="agp_thumbs_container">
        {ArchPrThumbData.map((thumb, index) => (
          <div
            className="agp_thumb"
            key={index}
            onClick={() => handleThumbClick(index)}
          >
            <Arch_Gallery_Project_Thumb {...thumb} />
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
              src={ArchPrImgData[currentImageIndex].image}
              alt={ArchPrImgData[currentImageIndex].title}
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

export default Arch_Project_01;
