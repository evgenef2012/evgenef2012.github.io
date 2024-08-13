

function ArchGllThumb ({onClick, image, title}) {
    return(
        <div onClick={onClick}>
            <img className="arch_gl_thumb" src={image} alt={title}></img>
        </div>

    );
}

export default ArchGllThumb