import React from 'react'
import imageSrc from './assets/Amiad_S_Omega_Rcam_001.jpg';
import './Thumb_Med_Main.css'

function Thumb_Med_Main ({onClick}) {
    return (
        <div className='thumb_all' onClick={onClick}>
            <div className='thumb_arch_title'>Product visualization</div>
            <div className='thumb_med'>
                <a href='arch-projects' className='med-link'></a>
                <img className="thumb_med_image" src ={imageSrc} alt="project preview"></img>
            </div>
        </div>
        
    );
}

export default Thumb_Med_Main