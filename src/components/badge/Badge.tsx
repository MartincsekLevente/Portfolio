import './Badge.scss';
import { ReactNode } from "react";

interface BadgeProps {
    text: string,
    icon: ReactNode
}

export default function Badge({text, icon} : BadgeProps) {
    return (
        <div className="badge-container">
            <div className="badge-overlay">
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