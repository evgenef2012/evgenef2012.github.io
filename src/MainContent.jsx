import React from 'react'
import Crad_test from './Card_test.jsx'
import Thumb_Arch_Main from './Thumb_Arch_Main.jsx';
import './MainContent.css'

const MainContent = () => {
    return (
      <main className="container">
        <div className="thumbnails-container">
          <Thumb_Arch_Main/>
          <Thumb_Arch_Main/>
          {/* <Crad_test/>
          <Crad_test/>
          {/* <Crad_test/>
          <Crad_test/> */} 
        </div>
      </main>
    );
  };
        
  
  export default MainContent