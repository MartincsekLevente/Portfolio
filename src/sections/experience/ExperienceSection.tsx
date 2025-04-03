import './ExperienceSection.scss';
import MultiDisplayCard from "../../components/multiDisplayCard/MultiDisplayCard.tsx";

export default function ExperienceSection() {
    return (
        <section id="experience">
            <div className="experience-section-container">
                <div className="experience-section-title">
                    Experience
                </div>
                <div className="experience-line-container">
                    <svg className="experience-lines" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                        <line x1="50" y1="0" x2="50" y2="75" stroke="#1b2047" stroke-width="1"></line>
                    </svg>
                </div>
                <div className="multi-display-cards-container">
                    <MultiDisplayCard
                        title="Gerhardt Informatics"
                        textList={[
                            "Collaborated with multiple Agile teams to develop and maintain enterprise applications for the " +
                            "German company Brückner.",
                            "Specialized in Frontend development, leveraging expertise in Angular and custom UI components.",
                            "Developed custom web components in Angular with D3.js and Angular Material, improving data " +
                            "visualization performance."]}>
                    </MultiDisplayCard>
                    <MultiDisplayCard
                        title="University of Szeged"
                        textList={["text1", "text2", "text3"]}>
                    </MultiDisplayCard>
                </div>

            </div>
        </section>
    );
}
