import React from 'react'
import ArchGllThumb_01 from './Arch_Gallery/Arch_Gallery_Thumb_01'
// import ArchGllThumb_02 from './Arch_Gallery/Arch_Gallery_Thumb_02'
// import ArchGllThumb_03 from './Arch_Gallery/Arch_Gallery_Thumb_03'
// import ArchGllThumb_04 from './Arch_Gallery/Arch_Gallery_Thumb_04'
// import ArchGllThumb_05 from './Arch_Gallery/Arch_Gallery_Thumb_05'
// import ArchGllThumb_06 from './Arch_Gallery/Arch_Gallery_Thumb_06'
import './ArchGallery.css'


function ArchGallery ({onArchGllThumb_01_Click}) {

    return (
        <div className='ag_Container' >
            <div className='ag_thumb'><ArchGllThumb_01 onClick={onArchGllThumb_01_Click}/></div>
            <div className='ag_thumb'><ArchGllThumb_01/></div>
            <div className='ag_thumb'><ArchGllThumb_01/></div>
            <div className='ag_thumb'><ArchGllThumb_01/></div>
            <div className='ag_thumb'><ArchGllThumb_01/></div>
            <div className='ag_thumb'><ArchGllThumb_01/></div>
        </div>
    );
};
                
            
        
            
export default ArchGallery;