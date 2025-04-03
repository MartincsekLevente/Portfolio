import './MultiDisplayCard.scss';

interface MultiDisplayCardProps {
    title: string,
    textList: string[],
}

export default function MultiDisplayCard({title, textList}: MultiDisplayCardProps) {
    return (
        <div className="multi-display-card-container">
            <div className="multi-display-card-title">
                {title}
            </div>
            {textList ? textList.map(text => text) : null}
        </div>
    );
}
