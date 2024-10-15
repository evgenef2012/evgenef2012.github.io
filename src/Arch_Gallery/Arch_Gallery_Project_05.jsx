import { useState } from "react";
import Arch_Gallery_Project_Thumb from "./Arch_Gallery_Project_Thumb.jsx";
import Arch_Gallery_Project_Image from "./Arch_Gallery_Project_Image.jsx";
import { ArchPr05ThumbData } from "./ArchPrGalleryThumbData.js";
import { ArchPr05ImgData } from "./ArchPrGalleryImageData.js";
import "./Arch_Gallery_Project.css";

function Arch_Project_05({ onBackClick }) {
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
      (prevIndex) => (prevIndex + 1) % ArchPr05ImgData.length
    );
  };

  const handlePreviousImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + ArchPr05ImgData.length) % ArchPr05ImgData.length
    );
  };

  return (
    <div className="agp_container">
      <div className="agp_title">{ArchPr05ImgData[0].title}</div>
      <div className="agp_main_image_container" onClick={handleImgEnlargement}>
        <Arch_Gallery_Project_Image {...ArchPr05ImgData[currentImageIndex]} />
      </div>
      <div className="agp_thumbs_container">
        {ArchPr05ThumbData.map((thumb, index) => (
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
              src={ArchPr05ImgData[currentImageIndex].image}
              alt={ArchPr05ImgData[currentImageIndex].title}
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

export default Arch_Project_05;
