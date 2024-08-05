import "./Footer.css"

function Footer() {
    return(
        <footer className="footer">
            <div>&copy; {new Date().getFullYear()} All rights reserved</div>
        </footer>
    );
}

export default Footer

