import './StackCard.scss';
import { ReactNode, useState } from "react";

interface StackCardProps {
    icon: ReactNode;
}

export default function StackCard({icon}: StackCardProps) {
    const [hovered, setHovered] = useState(false)

    return (
        <div className="stack-card-container"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <div className={`stack-card-overlay ${hovered ? 'hovered' : null}`}>
                <div className="stack-card-icon">
                    {icon}
                </div>
            </div>
        </div>
    );
}
