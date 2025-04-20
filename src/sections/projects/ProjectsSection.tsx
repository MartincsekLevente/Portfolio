import "./ProjectsSection.scss";
import StackCard from "../../components/stackCard/StackCard.tsx";
import { useState } from "react";
import { PROJECTS } from "../../constants/projects.tsx";
import DoubleLinkButton from "../../components/doubleLinkButton/DoubleLinkButton.tsx";
import FadeInWhenVisible from "../../components/motion/fadeInWhenVisible/FadeInWhenVisible.tsx";

export default function ProjectsSection() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);


    function decreaseCurrentProjectIndex() {
        setCurrentProjectIndex((current) => {
            return Math.max(0, current - 1);
        })
    }

    function increaseCurrentProjectIndex() {
        setCurrentProjectIndex((current) => {
            return Math.min(PROJECTS.length - 1, current + 1);
        })
    }

    return (
        <section id="projects">
            <div className="projects-section-container">
                <FadeInWhenVisible
                    duration={1.5}>
                    <div className="projects-section-title">
                        My Projects
                    </div>
                </FadeInWhenVisible>
                <FadeInWhenVisible
                    offset={10}
                    direction={"down"}
                    initialDelay={0.3}>
                    <div className="projects-showcase-container">
                        <div className="projects-showcase-overlay">
                            {PROJECTS[currentProjectIndex - 1] ?
                                <div className="projects-showcase-left-arrow"
                                     onClick={() => decreaseCurrentProjectIndex()}
                                >&lt;</div> : null}
                            {PROJECTS[currentProjectIndex + 1] ?
                                <div className="projects-showcase-right-arrow"
                                     onClick={() => increaseCurrentProjectIndex()}
                                >&gt;</div> : null}
                            <div className="project-title">
                                {PROJECTS[currentProjectIndex].title}
                            </div>
                            <div className="projects-stack-container">
                                {PROJECTS[currentProjectIndex].stackList.map((currentStack) => {
                                    return <StackCard key={crypto.randomUUID()} icon={currentStack.icon}
                                                      name={currentStack.name}></StackCard>
                                })}
                            </div>
                            <div className="project-image-container">
                                <img className="project-image" src={PROJECTS[currentProjectIndex].bgImgUrl}
                                     alt="missingBG"></img>
                            </div>
                            <div className="project-links">
                                <DoubleLinkButton
                                    githubLink={PROJECTS[currentProjectIndex].githubUrl}
                                    websiteLink={PROJECTS[currentProjectIndex].websiteUrl}>
                                </DoubleLinkButton>
                            </div>
                        </div>
                    </div>
                </FadeInWhenVisible>
            </div>
        </section>
    );
}
