import './MultiDisplayCard.scss';
import { ReactNode } from "react";

interface MultiDisplayCardProps {
    title: string,
    subtitle: string,
    description: string,
    textList: ReactNode[],
}

export default function MultiDisplayCard({title, subtitle, description, textList}: MultiDisplayCardProps) {
    return (
        <div className="multi-display-card-container">
            <div className="multi-display-card-overlay">
                <div className="multi-display-card-title">
                    <span className="highlight-text">{title}</span>
                </div>
                <div className="multi-display-card-subtitle">
                    {subtitle}
                </div>
                <div className="multi-display-card-description">
                    {description}
                </div>
                <div className="multi-display-card-list-container">
                    <ul>
                        {textList ? textList.map((text) => {
                            return (<li className="multi-display-card-list-item" key={crypto.randomUUID()}>{text}</li>);
                        }) : null}
                    </ul>
                </div>
            </div>
        </div>
    );
}
