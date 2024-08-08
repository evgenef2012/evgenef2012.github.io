import React from 'react'
import Thumb_Arch_Main from './Thumb_Arch_Main.jsx';
import Thumb_Med_Main from './Thumb_Med_Main.jsx';
import './MainContent.css'

const MainContent = ({ onArchThumbClick, onMedThumbClick }) => {
    return (
      <div className="container">
          <Thumb_Arch_Main onClick={onArchThumbClick}/>
          <Thumb_Med_Main onClick={onMedThumbClick}/>
      </div>
    );
  };
          
        
  
  export default MainContent
        
        
