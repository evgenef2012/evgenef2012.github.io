import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx'
import ArchGallery from './ArchGallery.jsx'
import Arch_Project_01 from './Arch_Gallery/Arch_Gallery_Project_01.jsx'
import About from './About.jsx'
// import ArImage from './Arch_Gallery/ArchImages/Arabov_C_01_Day_Opened.jpg';
import './App.css'


function App() {
  const [view, setView] = useState('main');

  const handleViewChange = (newView) => {
    setView(newView);
  };

    

    return(
      <div className='App'>
        <div className='layout'>
          <div className = 'header_2'>
            <Header/>
            <Footer/>
          </div>
          <div className='main-content'>
            {view === 'main' ? (
            <MainContent 
              onArchThumbClick={() => handleViewChange('arch_gallery')}
              onMedThumbClick={() => handleViewChange('Med_gallery')}
            />
            ) : view === 'arch_gallery' ? (
            <ArchGallery 
              onArchGllThumb_01_Click={() => handleViewChange('pr_01_gallery')}
            />  
            ) : view === 'pr_01_gallery' ? (
            <Arch_Project_01/>  
            ): null}
          </div>
          <div className = 'about'>
            <About/>
          </div>  
        </div>
      </div>
    );
}
             
            
export default App
      
