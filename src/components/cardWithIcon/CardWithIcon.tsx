import './CardWithIcon.scss';
import { ReactNode } from "react";

interface CardWithIconProps {
    icon: ReactNode,
    title: string,
    url: string,
}

export default function CardWithIcon({icon, title, url}: CardWithIconProps) {
    return (
        <div className="card-with-icon-container" onClick={() => window.open(url, "_blank")}>
            <div className="card-overlay">
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
