import React from 'react';
import ArchGllThumb from './Arch_Gallery/Arch_Gallery_Thumb.jsx';
import  { ThumbData }  from './Arch_Gallery/ArchThumbData.js';
import './ArchGallery.css'


function ArchGallery ({onArchGllThumb_01_Click, onArchGllThumb_02_Click}) {

    return (
        <div className='ag_Container' >
            <div className='ag_thumb'>
                <ArchGllThumb onClick={onArchGllThumb_01_Click}{...ThumbData[0]}/></div>
            <div className='ag_thumb'>
                <ArchGllThumb onClick={onArchGllThumb_02_Click}{...ThumbData[1]}/></div>
            <div className='ag_thumb'>
                <ArchGllThumb onClick={onArchGllThumb_01_Click}{...ThumbData[2]}/></div>
            <div className='ag_thumb'>
                <ArchGllThumb onClick={onArchGllThumb_01_Click}{...ThumbData[3]}/></div>
            <div className='ag_thumb'>
                <ArchGllThumb onClick={onArchGllThumb_01_Click}{...ThumbData[4]}/></div>
            <div className='ag_thumb'>
                <ArchGllThumb onClick={onArchGllThumb_01_Click}{...ThumbData[5]}/></div>
        </div>
    );
};
                
            
        
            
export default ArchGallery;