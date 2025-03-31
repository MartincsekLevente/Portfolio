import './CardWithIcon.scss';
import { ReactNode, useState } from "react";

interface CardWithIconProps {
    icon: ReactNode,
    title: string,
    url: string,
}

export default function CardWithIcon({icon, title, url}: CardWithIconProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="card-with-icon-container"
             onClick={() => window.open(url, "_blank")}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <div className={`card-overlay ${hovered ? "hovered" : ""}`}>
                <div className="card-icon">
                    {icon}
                </div>
                <div className="card-text">
                    {title}
                </div>
            </div>
        </div>
    );
}
