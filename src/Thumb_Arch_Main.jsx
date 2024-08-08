import React from 'react'
import './Thumb_Arch_Main.css'

function Thumb_Arch_Main ({onClick}) {
    
    return (
        
        <div className='thumb_all' onClick={onClick}>
            <div className='thumb_arch_title'>Architectural visualization</div>
            <div className='thumb_arch'>
                <a href='arch-projects' className='arch-link'></a>
                <img className="thumb_arch_image" src="https://studio-bonsai.com/wp-content/uploads/2023/12/lo-6-1.jpg" alt="project preview"></img>
            </div>
        </div>
        
    );
}

export default Thumb_Arch_Main