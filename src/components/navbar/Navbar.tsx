import './Navbar.scss';
import NavbarItem from "./navbar-item/NavbarItem.tsx";

export default function Navbar() {
    return (
        <div className="navbar-bg">
            <div className="navbar-container">
                <div className="home-title">HOME ML</div>
                <div className="navbar-items">
                    <NavbarItem title="About"></NavbarItem>
                    <NavbarItem title="Skills"></NavbarItem>
                    <NavbarItem title="Experience"></NavbarItem>
                    <NavbarItem title="Projects"></NavbarItem>
                    <NavbarItem title="Contact"></NavbarItem>
                </div>
            </div>
        </div>
    );
}
