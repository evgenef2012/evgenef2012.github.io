import { useState, useRef } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import MainContent from "./MainContent.jsx";
import ArchGallery from "./ArchGallery.jsx";
import ProdGallery from "./Product_Viz_Gallery/ProdGallery.jsx";
import About from "./About.jsx";
import Arch_Project_01 from "./Arch_Gallery/Arch_Gallery_Project_01.jsx";
import Arch_Project_02 from "./Arch_Gallery/Arch_Gallery_Project_02.jsx";
import Arch_Project_03 from "./Arch_Gallery/Arch_Gallery_Project_03.jsx";
import Arch_Project_04 from "./Arch_Gallery/Arch_Gallery_Project_04.jsx";
import Arch_Project_05 from "./Arch_Gallery/Arch_Gallery_Project_05.jsx";
import Arch_Project_06 from "./Arch_Gallery/Arch_Gallery_Project_06.jsx";
import Prod_Project_01 from "./Product_Viz_Gallery/Prod_Gallery_Project_01.jsx";
import Prod_Project_02 from "./Product_Viz_Gallery/Prod_Gallery_Project_02.jsx";
import Prod_Project_03 from "./Product_Viz_Gallery/Prod_Gallery_Project_03.jsx";
import Prod_Project_04 from "./Product_Viz_Gallery/Prod_Gallery_Project_04.jsx";
import Prod_Project_05 from "./Product_Viz_Gallery/Prod_Gallery_Project_05.jsx";
import Prod_Project_06 from "./Product_Viz_Gallery/Prod_Gallery_Project_06.jsx";
import { info } from "./Info.js";
// import ArImage from './Arch_Gallery/ArchImages/Arabov_C_01_Day_Opened.jpg';
import "./App.css";

function App() {
  const [view, setView] = useState("main");
  const [aboutVisible, setAboutVisible] = useState(false);

  const [currentInfo, setCurrentInfo] = useState(info[0]);

  const hoverTimeOutRef = useRef(null);
  const leaveTimeOutRef = useRef(null);

  const handleViewChange = (newView) => {
    setView(newView);
    setAboutVisible(false);
  };

  const toggleAboutVisible = () => {
    setAboutVisible(true);
    setCurrentInfo(info[0]);
  };

  const toggleContactVisible = () => {
    setAboutVisible(true);
    setCurrentInfo(info[13]);
  };

  const handleThumbHover = (projectIndex) => {
    if (hoverTimeOutRef.current) {
      clearTimeout(hoverTimeOutRef.current);
    }

    hoverTimeOutRef.current = setTimeout(() => {
      setCurrentInfo(info[projectIndex + 1]);
      setAboutVisible(true);
    }, 100);
  };

  const handleThumbHoverProd = (projectIndex) => {
    if (hoverTimeOutRef.current) {
      clearTimeout(hoverTimeOutRef.current);
    }

    hoverTimeOutRef.current = setTimeout(() => {
      setCurrentInfo(info[projectIndex + 7]);
      setAboutVisible(true);
    }, 100);
  };

  const handleThumbLeave = () => {
    if (leaveTimeOutRef.current) {
      clearTimeout(leaveTimeOutRef.current);
    }

    leaveTimeOutRef.current = setTimeout(() => {
      if (view === "arch_gallery") {
        setAboutVisible(false);
      }
      if (view === "Med_gallery") {
        setAboutVisible(false);
      }
    }, 100);
  };

  const handleThumbClick = (projectIndex) => {
    setCurrentInfo(info[projectIndex + 1]);
    setView(`pr_0${projectIndex + 1}_gallery`);
    setAboutVisible(true);
  };

  const handleThumbClickProd = (projectIndex) => {
    setCurrentInfo(info[projectIndex + 7]);
    setView(`prod_0${projectIndex + 1}_gallery`);
    setAboutVisible(true);
  };

  return (
    <div className="App">
      <div className="layout">
        <div className="header_2">
          <Header
            onHomeClick={() => handleViewChange("main")}
            onAboutClick={toggleAboutVisible}
            onArchClick={() => handleViewChange("arch_gallery")}
            onProdClick={() => handleViewChange("Med_gallery")}
            onContactClick={toggleContactVisible}
          />
          <Footer />
        </div>
        <div className="main-content">
          {view === "main" ? (
            <MainContent
              onArchThumbClick={() => handleViewChange("arch_gallery")}
              onMedThumbClick={() => handleViewChange("Med_gallery")}
            />
          ) : view === "arch_gallery" ? (
            <ArchGallery
              onThumbHover={handleThumbHover}
              onThumbLeave={handleThumbLeave}
              onThumbClick={handleThumbClick}
              onBackClick={() => handleViewChange("main")}
            />
          ) : view === "pr_01_gallery" ? (
            <Arch_Project_01
              onBackClick={() => handleViewChange("arch_gallery")}
            />
          ) : view === "pr_02_gallery" ? (
            <Arch_Project_02
              onBackClick={() => handleViewChange("arch_gallery")}
            />
          ) : view === "pr_03_gallery" ? (
            <Arch_Project_03
              onBackClick={() => handleViewChange("arch_gallery")}
            />
          ) : view === "pr_04_gallery" ? (
            <Arch_Project_04
              onBackClick={() => handleViewChange("arch_gallery")}
            />
          ) : view === "pr_05_gallery" ? (
            <Arch_Project_05
              onBackClick={() => handleViewChange("arch_gallery")}
            />
          ) : view === "pr_06_gallery" ? (
            <Arch_Project_06
              onBackClick={() => handleViewChange("arch_gallery")}
            />
          ) : view === "Med_gallery" ? (
            <ProdGallery
              onThumbHover={handleThumbHoverProd}
              onThumbLeave={handleThumbLeave}
              onThumbClick={handleThumbClickProd}
              onBackClick={() => handleViewChange("main")}
            />
          ) : view === "prod_01_gallery" ? (
            <Prod_Project_01
              onBackClick={() => handleViewChange("Med_gallery")}
            />
          ) : view === "prod_02_gallery" ? (
            <Prod_Project_02
              onBackClick={() => handleViewChange("Med_gallery")}
            />
          ) : view === "prod_03_gallery" ? (
            <Prod_Project_03
              onBackClick={() => handleViewChange("Med_gallery")}
            />
          ) : view === "prod_04_gallery" ? (
            <Prod_Project_04
              onBackClick={() => handleViewChange("Med_gallery")}
            />
          ) : view === "prod_05_gallery" ? (
            <Prod_Project_05
              onBackClick={() => handleViewChange("Med_gallery")}
            />
          ) : view === "prod_06_gallery" ? (
            <Prod_Project_06
              onBackClick={() => handleViewChange("Med_gallery")}
            />
          ) : null}

          <div className="about">
            <About isVisible={aboutVisible} {...currentInfo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
