import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx'
import ArchGallery from './ArchGallery.jsx'
import Arch_Project_01 from './Arch_Gallery/Arch_Gallery_Project_01.jsx'
import Arch_Project_02 from './Arch_Gallery/Arch_Gallery_Project_02.jsx'
import Arch_Project_03 from './Arch_Gallery/Arch_Gallery_Project_03.jsx'
import Arch_Project_04 from './Arch_Gallery/Arch_Gallery_Project_04.jsx'
import Arch_Project_05 from './Arch_Gallery/Arch_Gallery_Project_05.jsx'
import Arch_Project_06 from './Arch_Gallery/Arch_Gallery_Project_06.jsx'
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
            <Header onHomeClick={() => handleViewChange('main')}/>
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
              onArchGllThumb_02_Click={() => handleViewChange('pr_02_gallery')}
              onArchGllThumb_03_Click={() => handleViewChange('pr_03_gallery')}
              onArchGllThumb_04_Click={() => handleViewChange('pr_04_gallery')}
              onArchGllThumb_05_Click={() => handleViewChange('pr_05_gallery')}
              onArchGllThumb_06_Click={() => handleViewChange('pr_06_gallery')}
              
            />  
            ) : view === 'pr_01_gallery' ? (
            <Arch_Project_01 
              onBackClick={() => handleViewChange('arch_gallery')}
            />  
            ): view === 'pr_02_gallery' ? (
            <Arch_Project_02 
              onBackClick={() => handleViewChange('arch_gallery')}
            />  
            ): view === 'pr_03_gallery' ? (
            <Arch_Project_03 
              onBackClick={() => handleViewChange('arch_gallery')}
            />  
            ): view === 'pr_04_gallery' ? (
            <Arch_Project_04 
              onBackClick={() => handleViewChange('arch_gallery')}
            />
            ): view === 'pr_05_gallery' ? (
            <Arch_Project_05 
              onBackClick={() => handleViewChange('arch_gallery')}
            />
            ): view === 'pr_06_gallery' ? (
            <Arch_Project_06
              onBackClick={() => handleViewChange('arch_gallery')}
            />
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
      
