import './AboutSection.scss';
import CardWithIcon from "../../components/cardWithIcon/CardWithIcon.tsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import FadeInWhenVisible from "../../components/motion/fadeInWhenVisible/FadeInWhenVisible.tsx";

export default function AboutSection() {

    return (
        <section id="about">
            <div className="about-section-container">
                <FadeInWhenVisible
                    duration={1.5}>
                    <div className="about-section-title">
                        About me
                    </div>
                </FadeInWhenVisible>
                <div className="about-me-content-container">
                    <FadeInWhenVisible
                        direction={"left"}
                        offset={15}>
                        <div className="about-me-card-overlay">
                            <div className="about-me-card">
                                <div className="about-text">
                                    As a <span
                                    className="highlight-text">frontend developer with 2+ years of experience</span>,
                                    I confidently work both in a team and
                                    independently. I
                                    enjoy working with new technologies and continuously improving my professional
                                    skills.
                                    In my
                                    free time I like to
                                    develop <span className="highlight-text">React</span> projects and create
                                    interesting
                                    web
                                    components.
                                </div>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                    <div className="about-me-socials">
                        <FadeInWhenVisible
                            duration={1.5}>
                            <div className="about-me-socials-text">
                                Social links
                            </div>
                        </FadeInWhenVisible>
                        <div className="about-me-small-cards">
                            <FadeInWhenVisible
                                direction={"right"}
                                childDelay={0.2}
                                offset={15}>
                                <CardWithIcon
                                    icon={<FaGithub></FaGithub>}
                                    title="GitHub"
                                    url="https://github.com/MartincsekLevente">
                                </CardWithIcon>
                                <CardWithIcon
                                    icon={<TbFileCv></TbFileCv>}
                                    title="CV"
                                    url="/cv-martincsek-levente.pdf">
                                </CardWithIcon>
                                <CardWithIcon
                                    icon={<FaLinkedin></FaLinkedin>}
                                    title="LinkedIn"
                                    url="https://www.linkedin.com/in/martincseklevente/">
                                </CardWithIcon>
                            </FadeInWhenVisible>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
