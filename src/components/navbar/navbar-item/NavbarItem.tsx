import './NavbarItem.scss';
import { useState } from "react";


interface NavbarItemProps {
    title: string,
    navigateTo: string,
    isInBurger?: boolean,
    onClick?: () => void;
}

export default function NavbarItem({title, navigateTo, isInBurger=false, onClick}: NavbarItemProps) {
    const [hovered, setHovered] = useState(false)

    function handleClick() {
        onClick && onClick();
        document.querySelector(navigateTo)!.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="navbar-item-container"
             onClick={() => handleClick()}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <div className={`navbar-item-text ${isInBurger ? 'burger' : ''} ${hovered ? 'hovered' : ''}`}>
                {title}
            </div>
        </div>
    );
}