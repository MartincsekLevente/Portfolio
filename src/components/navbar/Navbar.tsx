import './Navbar.scss';
import NavbarItem from "./navbar-item/NavbarItem.tsx";
import { useState } from "react";

export default function Navbar() {
    const [titleHovered, setTitleHovered] = useState(false)

    return (
        <div className="navbar-bg">
            <div className="navbar-container">
                <div className={`navbar-home-title ${titleHovered ? 'hovered' : null}`}
                     onClick={() => document.querySelector('#home')!.scrollIntoView({behavior: 'smooth'})}
                     onMouseEnter={() => setTitleHovered(true)}
                     onMouseLeave={() => setTitleHovered(false)}>
                    M<span className={`navbar-home-title-right ${titleHovered ? 'hovered' : null}`}>L</span>
                </div>
                <div className="navbar-items">
                    <NavbarItem title="About" navigateTo="#about"></NavbarItem>
                    <NavbarItem title="Skills" navigateTo="#skills"></NavbarItem>
                    <NavbarItem title="Experience" navigateTo="#experience"></NavbarItem>
                    <NavbarItem title="Projects" navigateTo="#projects"></NavbarItem>
                    <NavbarItem title="Contact" navigateTo="#contact"></NavbarItem>
                </div>
            </div>
        </div>
    );
}
