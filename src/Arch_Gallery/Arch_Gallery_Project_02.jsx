import { useState } from 'react';
import Arch_Gallery_Project_Thumb from './Arch_Gallery_Project_Thumb.jsx';
import Arch_Gallery_Project_Image from './Arch_Gallery_Project_Image.jsx';
import { ArchPr02ThumbData } from './ArchPrGalleryThumbData.js';
import { ArchPr02ImgData } from './ArchPrGalleryImageData.js';
import './Arch_Gallery_Project.css'

function Arch_Project_02 ( {onBackClick} ) {
    
    const [currentImage, setCurrentImage] = useState(ArchPr02ImgData[0]);

    const handleThumbClick = (imageIndex) => {
        setCurrentImage(ArchPr02ImgData[imageIndex])
    };
    
    return(
        <div className='agp_container'>
            <div className="agp_title">{ArchPr02ImgData[0].title}</div>
            <div className="agp_main_image_container">
                <Arch_Gallery_Project_Image {...currentImage}/>
            </div>
            <div className="agp_thumbs_container">
                {ArchPr02ThumbData.map((thumb, index) => (
                    <div className="agp_thumb" key={index} onClick={() => handleThumbClick(index)}>
                        <Arch_Gallery_Project_Thumb {...thumb}/>
                    </div>   
                ))}
            </div>
            <div className="agp_back_button" onClick={onBackClick}>
               BACK 
            </div>
        </div>
    );
}


export default Arch_Project_02

                    
                  
                
                
                
        
        
        
