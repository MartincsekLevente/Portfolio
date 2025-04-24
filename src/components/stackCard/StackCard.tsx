import './StackCard.scss';
import { ReactNode, useState } from "react";
import { Tooltip } from "@mantine/core";

interface StackCardProps {
    name: string,
    icon: ReactNode
}

export default function StackCard({name, icon}: StackCardProps) {
    const [hovered, setHovered] = useState(false)

    return (
        <Tooltip
            style={{'--tooltip-color': 'black'}}
            label={name}
            color="#4a9cc6">
            <div className="stack-card-container"
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}>
                <div className={`stack-card-overlay ${hovered ? 'hovered' : ''}`}>
                    <div className="stack-card-icon">
                        {icon}
                    </div>
                </div>
            </div>
        </Tooltip>
    );
}
