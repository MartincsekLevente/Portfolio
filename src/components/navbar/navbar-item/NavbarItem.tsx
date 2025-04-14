import './NavbarItem.scss';
import { useState } from "react";


interface NavbarItemProps {
    title: string
    navigateTo: string;
}

export default function NavbarItem({title, navigateTo}: NavbarItemProps) {
    const [hovered, setHovered] = useState(false)

    return (
        <div className="navbar-item-container"
             onClick={() => document.querySelector(navigateTo)!.scrollIntoView({behavior: 'smooth'})}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <div className={`navbar-item-text ${hovered ? 'hovered' : null}`}>
                {title}
            </div>
        </div>
    );
}