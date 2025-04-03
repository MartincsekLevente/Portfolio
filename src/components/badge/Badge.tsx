import './Badge.scss';
import { ReactNode, useState } from "react";

interface BadgeProps {
    text: string,
    icon: ReactNode
}

export default function Badge({text, icon} : BadgeProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="badge-container"
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
            <div className={`badge-overlay ${hovered ? 'hovered' : ''}`}>
                <div className="badge-icon">
                    {icon}
                </div>
                <div className="badge-text">
                    {text}
                </div>
            </div>
        </div>
    );
}