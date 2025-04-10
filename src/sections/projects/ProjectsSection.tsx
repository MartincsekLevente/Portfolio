import "./ProjectsSection.scss";
import StackCard from "../../components/stackCard/StackCard.tsx";
import { FaGithub, FaPython } from "react-icons/fa";

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="projects-section-container">
                <div className="projects-section-title">
                    My Projects
                </div>
                <div className="projects-showcase-container">
                    <div className="projects-showcase-overlay">
                        <div className="projects-showcase-left-arrow">&lt;</div>
                        <div className="projects-showcase-right-arrow">&gt;</div>
                        <div className="project-title">
                            Test Title
                        </div>
                        <div className="projects-stack-container">
                            <StackCard icon={<FaGithub></FaGithub>}></StackCard>
                            <StackCard icon={<FaPython></FaPython>}></StackCard>
                        </div>
                        <div className="project-description">
                            Test Description goes here: Github projects with things and stuff
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
