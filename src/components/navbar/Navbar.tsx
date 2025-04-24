import './Navbar.scss';
import NavbarItem from "./navbar-item/NavbarItem.tsx";
import { useState } from "react";
import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Navbar() {
    const [titleHovered, setTitleHovered] = useState(false)
    const [drawerOpened, drawerHandlers] = useDisclosure(false);

    const handleNavbarItemClick = () => {
        drawerHandlers.close();
    };

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
                    <Burger
                        color="white"
                        onClick={drawerHandlers.open}
                        aria-label="Toggle navigation"/>
                </div>
                <Drawer
                    opened={drawerOpened}
                    onClose={drawerHandlers.close}
                    position={"right"}
                    size={"100%"}
                    styles={{
                        content: {
                            background: 'radial-gradient(circle, rgb(19 23 81) 0%, rgb(19 28 50) 50%)',
                            color: 'white'
                        },
                        header: {
                            background: 'rgb(19 28 50)'
                        }
                    }}>
                    <div className="navbar-items">
                        <NavbarItem title="About" navigateTo="#about" isInBurger={true} onClick={handleNavbarItemClick}></NavbarItem>
                        <NavbarItem title="Skills" navigateTo="#skills" isInBurger={true} onClick={handleNavbarItemClick}></NavbarItem>
                        <NavbarItem title="Experience" navigateTo="#experience" isInBurger={true} onClick={handleNavbarItemClick}></NavbarItem>
                        <NavbarItem title="Projects" navigateTo="#projects" isInBurger={true} onClick={handleNavbarItemClick}></NavbarItem>
                        <NavbarItem title="Contact" navigateTo="#contact" isInBurger={true} onClick={handleNavbarItemClick}></NavbarItem>
                    </div>
                </Drawer>
            </div>
        </div>
    );
}
