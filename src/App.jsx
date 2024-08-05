import Header from './Header.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx'
import About from './About.jsx'
import './App.css'


function App() {

    return(
      <div className='App'>
        <div className='layout'>
          <div className = 'header_2'>
            <Header/>
            <Footer/>
          </div>
          <MainContent/>
          <div className = 'about'>
            <About/>
          </div>  
        </div>
      </div>


      
    );
  }
      
  

export default App
      
