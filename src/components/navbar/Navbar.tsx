import './Navbar.scss';
import NavbarItem from "./navbar-item/NavbarItem.tsx";

export default function Navbar() {
    return (
        <div className="navbar-bg">
            <div className="navbar-container">
                <div className="home-title">HOME ML</div>
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
