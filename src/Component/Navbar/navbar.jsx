import { useState } from 'react';
import "./navbar.css";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="navbarWrapper">
            <div className="navbar">
                <div className="navLogo">
                    <a href="#home"><img src="src/assets/LcfLogo.png" alt="LCF Logo" /></a>
                </div>
                <div className={`navLinks ${isOpen ? 'open' : ''}`}>
                    <a href="#capabilities" onClick={handleLinkClick}>Capabilities</a>
                    <a href="#solution" onClick={handleLinkClick}>Solutions</a>
                    <a href="#locations" onClick={handleLinkClick}>Locations</a>
                    <a href="#contact" onClick={handleLinkClick}>Contact</a>
                </div>
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></div>
            </div>
        </div>
    )
}

export default Navbar;