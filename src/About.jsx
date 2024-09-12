import './About.css'

function About ({title, subTitle, description, isVisible }) {
    return(
    //    <div className="about_container"> 
       <div className={`about_container ${isVisible ? 'visible':'hidden'}`}> 
            <div className="about_title">{title}</div>
            <hr className='about_seperator'></hr>
            <div>{subTitle}</div>
            <div className="about_text" >
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
        </div>    
    );
}

export default About

