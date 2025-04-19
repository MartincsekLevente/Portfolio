import './AboutSection.scss';
import CardWithIcon from "../../components/cardWithIcon/CardWithIcon.tsx";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

export default function AboutSection() {

    return (
        <section id="about">
            <div className="about-section-container">
                <div className="about-section-title">
                    About me
                </div>
                <div className="about-me-content-container">
                    <div className="about-me-card-overlay">
                        <div className="about-me-card">
                            <div className="about-text">
                                As a <span
                                className="highlight-text">frontend developer with 2+ years of experience</span>,
                                I confidently work both in a team and
                                independently. I
                                enjoy working with new technologies and continuously improving my professional skills.
                                In my
                                free time I like to
                                develop <span className="highlight-text">React</span> projects and create interesting
                                web
                                components.
                            </div>
                        </div>
                    </div>
                    <div className="about-me-small-cards">
                        <CardWithIcon
                            icon={<FaGithub></FaGithub>}
                            title="GitHub"
                            url="https://github.com/MartincsekLevente">
                        </CardWithIcon>
                        <CardWithIcon
                            icon={<FaLinkedin></FaLinkedin>}
                            title="LinkedIn"
                            url="https://www.linkedin.com/in/martincseklevente/">
                        </CardWithIcon>
                        <CardWithIcon
                            icon={<FaInstagram></FaInstagram>}
                            title="Instagram"
                            url="https://www.instagram.com/leventemartincsek/">
                        </CardWithIcon>
                        <CardWithIcon
                            icon={<TbFileCv></TbFileCv>}
                            title="CV"
                            url="/cv-martincsek-levente.pdf">
                        </CardWithIcon>
                    </div>
                </div>
            </div>
        </section>
    );
}
