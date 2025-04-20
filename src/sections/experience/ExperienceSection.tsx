import './ExperienceSection.scss';
import MultiDisplayCard from "../../components/multiDisplayCard/MultiDisplayCard.tsx";
import FadeInWhenVisible from "../../components/motion/fadeInWhenVisible/FadeInWhenVisible.tsx";

export default function ExperienceSection() {
    return (
        <section id="experience">
            <div className="experience-section-container">
                <FadeInWhenVisible
                    duration={1.5}>
                    <div className="experience-section-title">
                        Experience
                    </div>
                </FadeInWhenVisible>
                <div className="experience-line-container">
                    <svg className="experience-line" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="80%" stopColor="#4a9cc6"/>
                                <stop offset="96%" stopColor="#4a9cc6" stopOpacity="0"/>
                            </linearGradient>
                        </defs>
                        <rect id="rect1" x="49.5" y="3" width="1" height="100" fill="url('#grad')"/>
                    </svg>
                    <div className="experience-line-point-1"></div>
                    <div className="experience-line-point-2"></div>
                </div>
                <div className="multi-display-cards-container">
                    <FadeInWhenVisible
                        offset={15}
                        direction={"left"}
                        initialDelay={0.2}>
                        <MultiDisplayCard
                            title="University of Szeged"
                            subtitle="BSc. Computer Science Degree"
                            description="2020 - 2024"
                            textList={[
                                <>Learned the fundamentals of software development</>,
                                <>Gained valuable experience in team collaboration through group projects</>,
                                <>My <span className="highlight-text">Thesis</span> was about generating and solving
                                    several
                                    discrete mathematics problems</>
                            ]}>
                        </MultiDisplayCard>
                    </FadeInWhenVisible>
                    <FadeInWhenVisible
                        offset={15}
                        direction={"right"}
                        initialDelay={0.4}>
                        <MultiDisplayCard
                            title="Gerhardt Informatics"
                            subtitle="Full-stack Software Engineer"
                            description="2022 - 2025"
                            textList={[
                                <>Collaborated with multiple Agile teams to develop and maintain enterprise applications
                                    for the German company <span className="highlight-text">Brückner</span></>,
                                <>Specialized in frontend development, developed custom web components in <span
                                    className="highlight-text">Angular</span> with <span
                                    className="highlight-text">D3.js</span> and <span className="highlight-text">Angular Material</span>,
                                    improving data visualization performance</>,
                                <>Enhanced backend functionality by implementing <span
                                    className="highlight-text">Java</span> and <span
                                    className="highlight-text">Kotlin</span> services</>,
                                <>Built automation tests with <span className="highlight-text">Playwright</span>,
                                    improving testing efficiency</>,
                                <>Wrote <span className="highlight-text">Python scripts</span> for various calculation
                                    tasks</>,
                                <>Completed an <span className="highlight-text">Agile software development training in Munich</span></>,
                                <>Practiced <span className="highlight-text">Clean Code</span> principles</>
                            ]}>
                        </MultiDisplayCard>
                    </FadeInWhenVisible>
                </div>
            </div>
        </section>
    );
}
