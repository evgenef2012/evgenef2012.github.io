import React from 'react'
import './Header.css'

const Header = () => {

    return(
        <header className="header">
            <div className="header_all_comp">
                <h1 className="header-title">N.E.</h1>
                <h2 className="header-title_2">NEFEDOV EVGENI</h2>
                <h3 className="header-title_3">PORTFOLIO</h3>
            </div>
            <hr></hr>
            <nav>
                <ul className="link_container">
                    <li className="link"><a href="#"></a>Home</li>
                    <li className="link"><a href="#"></a>Projects</li>
                    <li className="link"><a href="#"></a>About</li>
                    <li className="link"><a href="#"></a>Contact</li>
                </ul>
            </nav>
                    
            {/* <hr></hr> */}
        </header>
    );
}

export default Header