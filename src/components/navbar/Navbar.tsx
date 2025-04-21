import './Navbar.scss';
import NavbarItem from "./navbar-item/NavbarItem.tsx";
import { useState } from "react";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Navbar() {
    const [titleHovered, setTitleHovered] = useState(false)
    const [opened, { toggle }] = useDisclosure();

    return (
        <div className="navbar-bg">
            <div className="navbar-container">
                <div className={`navbar-home-title ${titleHovered ? 'hovered' : ''}`}
                     onClick={() => document.querySelector('#home')!.scrollIntoView({behavior: 'smooth'})}
                     onMouseEnter={() => setTitleHovered(true)}
                     onMouseLeave={() => setTitleHovered(false)}>
                    M<span className={`navbar-home-title-right ${titleHovered ? 'hovered' : ''}`}>L</span>
                </div>
                <div className="navbar-items">
                    <NavbarItem title="About" navigateTo="#about"></NavbarItem>
                    <NavbarItem title="Skills" navigateTo="#skills"></NavbarItem>
                    <NavbarItem title="Experience" navigateTo="#experience"></NavbarItem>
                    <NavbarItem title="Projects" navigateTo="#projects"></NavbarItem>
                    <NavbarItem title="Contact" navigateTo="#contact"></NavbarItem>
                </div>
                <div className="burger-container">
                    <Burger color="white" opened={opened} onClick={toggle} aria-label="Toggle navigation"/>
                </div>
            </div>
        </div>
    );
}
