import './About.css'

function About ({title, subTilte, description, isVisible }) {
    return(
    //    <div className="about_container"> 
       <div className={`about_container ${isVisible ? 'visible':'hidden'}`}> 
            <div className="about_title">{title}</div>
            <hr className='about_seperator'></hr>
            <div>{subTilte}</div>
            <div className="about_text">
                {description}
            </div>
        </div>    
    );
}

export default About

