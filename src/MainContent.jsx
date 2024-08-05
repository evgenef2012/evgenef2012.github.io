import React from 'react'
import Thumb_Arch_Main from './Thumb_Arch_Main.jsx';
import Thumb_Med_Main from './Thumb_Med_Main.jsx';
import './MainContent.css'

const MainContent = () => {
    return (
      <main className="container">
        <div className="thumbnails-container">
          <Thumb_Arch_Main/>
          <Thumb_Med_Main/>
        </div>
      </main>
    );
  };
          
        
  
  export default MainContent
